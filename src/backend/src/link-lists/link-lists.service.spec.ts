  import { Test, TestingModule } from '@nestjs/testing';
  import { LinkListsService } from './link-lists.service';
  import { PrismaService } from '../prisma.service';
  import { RabbitMQService } from '../rabbitmq/rabbitmq.service';
  import { UserService } from '../user/user.service';

  import { 
    atLeastOneRecord, 
    csvRecordValidName, 
    headersMatch, 
    csvRecordValidEmail, 
    csvRecordValidPhone,
    csvRecordValidCpf} from './utils/csv.specification';

  import * as fs from 'fs';
  import * as parse from 'papaparse';
import { error } from 'console';

  describe('LinkListsService', () => {
    let service: LinkListsService;
    let prismaService: PrismaService;
    let rabbitMQService: RabbitMQService;
    let userService: UserService;

    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [
          LinkListsService,
          PrismaService,
          RabbitMQService,
          UserService,
          {
            provide: headersMatch,
            useValue: jest.fn(),
          },
          {
            provide: atLeastOneRecord,
            useValue: jest.fn(),
          },
          {
            provide: csvRecordValidName,
            useValue: jest.fn(),
          },
          {
            provide: csvRecordValidEmail,
            useValue: jest.fn(),
          },
          {
            provide: csvRecordValidPhone,
            useValue: jest.fn(),
          },        {
            provide: csvRecordValidCpf,
            useValue: jest.fn(),
          },
        ],
      }).compile();

      service = module.get<LinkListsService>(LinkListsService);
      prismaService = module.get<PrismaService>(PrismaService);
      rabbitMQService = module.get<RabbitMQService>(RabbitMQService);
      userService = module.get<UserService>(UserService);
    });

    it('should be defined', () => {
      expect(service).toBeDefined();
    });

    describe('validateFileType', () => {
      it('should not throw error for valid file type', () => {
        const validFile: any = {
          mimetype: 'text/csv',
        };

        expect(() => service.validateFileType(validFile)).not.toThrow();
      });

      it('should throw error for invalid file type', () => {
        const invalidFile: any = {
          mimetype: 'application/pdf'
        };

        expect(() => service.validateFileType(invalidFile)).toThrow('Arquivo inválido. Por favor, envie um arquivo .csv.');
      });
    });

    describe('readCSVFile', () => {
      it('should read CSV file', () => {
        const filePath = '2024-T0003-ES09-G01/src/backend/src/link-lists/mocked-file/file_model.csv';
        const csvData = `name,email,phone,Company,CPF,Empresa\n` +
                        `name 1,email 1,phone 1,Company 1,CPF 1,Empresa 1\n` +
                        `name 2,email 2,phone 2,Company 2,CPF 2,Empresa 2\n` +
                        `name 3,email 3,phone 3,Company 3,CPF 3,Empresa 3`;

        const readFileSyncMock = jest.spyOn(fs, 'readFileSync').mockReturnValueOnce(csvData);

        expect(service.readCSVFile(filePath)).toEqual(csvData);
        expect(readFileSyncMock).toHaveBeenCalledWith(filePath, 'utf8');
      });

      it('should throw error if failed to read the CSV file', () => {
        const filePath = 'path/to/nonexistent/csv/file.csv';

        jest.spyOn(fs, 'readFileSync').mockImplementation(() => {
          throw new Error('File not found');
        });

        expect(() => service.readCSVFile(filePath)).toThrow('Erro ao ler o arquivo CSV.');
      });
    });

    describe('parseCSV', () => {
      it('should parse CSV data', () => {
        const csvData = 'name,email\nJohn,john@example.com';
        const expectedParsedData = {
          data: [{ email: 'john@example.com', name: 'John' }],
          errors: [],
          meta: {
            aborted: false,
            cursor: 32,
            delimiter: ',',
            fields: ['name', 'email'],
            linebreak: '\n',
            truncated: false
          }
        };

        expect(service.parseCSV(csvData)).toEqual(expectedParsedData);
      });

      it('should throw error if failed to parse the CSV data', () => {
        const csvData = `...................`;

        jest.spyOn(parse, 'parse').mockImplementation(() => {
          throw new Error('Parsing error');
        });

        expect(() => service.parseCSV(csvData)).toThrow('Erro ao fazer o parse do arquivo CSV.');
      });
    });

    describe('saveCSVData', () => {
      
      const mockPrisma = {
        csvTable: {
          create: jest.fn(),
        },
      };

      it('should save CSV data to database', async () => {
        const parsedCsv: any = {
          data: [{ name: 'John', email: 'john@example.com', phone: '1234', company: 'ABC Inc.', cpf:'123.456.789-56', empresa:'ABC'}],
        };
        const prismaSpy = jest.spyOn(service['prisma'].csvTable, 'create').mockResolvedValueOnce(parsedCsv.data[0]);
        const result = await service.saveCSVData(parsedCsv);

        await expect(prismaSpy).toHaveBeenCalled();
        await expect(result).toEqual(parsedCsv.data);
      });
    
  
    it('should throw error if failed to save CSV data', async () => {
      const parsedCsv: any = {
        data: [{ name: 'John', email: 'john@example.com', company: 'ABC Inc.' }],
      };
  
      // Mock do método create do PrismaService
      jest.spyOn(prismaService.csvTable, 'create').mockRejectedValueOnce(new Error('Database error'));
  
      // Teste se o método saveCSVData lança uma exceção com a mensagem correta
      await expect(service.saveCSVData(parsedCsv)).rejects.toThrow('Erro ao salvar os dados do CSV no banco de dados.');
    });
  

    describe('sendLinkListToQueue', () => {
      it('should send data to RabbitMQ queue', async () => {
        const data: any[] = [{  name: 'John', email: 'john@example.com', phone: '1234', company: 'ABC Inc.', cpf:'123.456.789-56', empresa:'ABC' }];
        const rabbitMQSendMessageSpy = jest.spyOn(service['rabbitMQService'], 'sendMessage').mockResolvedValueOnce();

        await service.sendLinkListToQueue(data);
        await expect(rabbitMQSendMessageSpy).toHaveBeenCalledWith('link-list-queue', JSON.stringify(data));
      });

      it('should throw error if failed to send data to RabbitMQ queue', async () => {
        const data: any[] = [{ name: 'John', email: 'john@example.com', company: 'ABC Inc.' }];
        const rabbitMQSendMessageSpy = jest.spyOn(service['rabbitMQService'], 'sendMessage').mockRejectedValueOnce(new Error('Erro ao enviar mensagem para a fila link-list-queue.'));
        
        await expect(service.sendLinkListToQueue(data)).rejects.toThrowError('Erro ao enviar mensagem para a fila link-list-queue.');
        expect(rabbitMQSendMessageSpy).toHaveBeenCalledWith('link-list-queue', JSON.stringify(data));
      });
    });
  });});