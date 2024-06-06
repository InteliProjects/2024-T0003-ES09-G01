import { Test, TestingModule } from '@nestjs/testing';
import { SatisfactionSurveyService } from './satisfaction-survey.service';
import { PrismaService } from '../prisma.service';
import { NotFoundException } from '@nestjs/common';

describe('SatisfactionSurveyService', () => {
  let service: SatisfactionSurveyService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SatisfactionSurveyService,
        {
          provide: PrismaService,
          useValue: {
            satisfactionSurvey: {
              create: jest.fn(),
              findUnique: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<SatisfactionSurveyService>(SatisfactionSurveyService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createPesquisaSatisfacao', () => {
    it('should create a satisfaction survey', async () => {
      const mockQuestionsAndAnswers = [{
        title: "string",
        question1: {
          title: "string",
          answer: 2
        },
        question2: {
          title: "string",
          answer: 3,
      }}];

      const mockCompanyIdentifier = 'testCompany';
      const mockCreatedSurvey = { 
        id: 1, 
        userId: 1,
        createdAt: new Date(),
        questionsAndAnswers: [{ question: 'Q1', answer: 'A1' }] 
      };

      jest.spyOn(prismaService.satisfactionSurvey, 'create').mockResolvedValue(mockCreatedSurvey);

      const result = await service.createPesquisaSatisfacao(mockQuestionsAndAnswers, mockCompanyIdentifier);

      expect(prismaService.satisfactionSurvey.create).toHaveBeenCalledWith({
        data: {
          questionsAndAnswers: mockQuestionsAndAnswers,
          user: {
            connect: { companyIdentifier: mockCompanyIdentifier },
          },
        },
      });
      expect(result).toEqual(mockCreatedSurvey);
    });

    it('should return null if creation fails', async () => {
      const mockQuestionsAndAnswers = [{
          title: "string",
        question1: {
          title: "string",
          answer: 2
        },
        question2: {
          title: "string",
          answer: 3,
      }}];

      const mockCompanyIdentifier = 'testCompany';

      jest.spyOn(prismaService.satisfactionSurvey, 'create').mockRejectedValue(new Error());

      const result = await service.createPesquisaSatisfacao(mockQuestionsAndAnswers, mockCompanyIdentifier);

      expect(result).toBeNull();
    });
  });

  describe('getPesquisaSatisfacao', () => {
    it('should return a satisfaction survey by ID', async () => {
      const mockSurveyId = 1;
      const mockRetrievedSurvey = { 
        id: 1, 
        userId: 1,
        createdAt: new Date(),
        questionsAndAnswers: [{ question: 'Q1', answer: 'A1' }] 
      };

      jest.spyOn(prismaService.satisfactionSurvey, 'findUnique').mockResolvedValue(mockRetrievedSurvey);

      const result = await service.getPesquisaSatisfacao(mockSurveyId);

      expect(prismaService.satisfactionSurvey.findUnique).toHaveBeenCalledWith({
        where: {
          id: mockSurveyId,
        },
      });
      expect(result).toEqual(mockRetrievedSurvey);
    });

    it('should return null if survey is not found', async () => {
      const mockSurveyId = 1;

      jest.spyOn(prismaService.satisfactionSurvey, 'findUnique').mockResolvedValue(null);

      const result = await service.getPesquisaSatisfacao(mockSurveyId);

      expect(result).toBeNull();
    });
  });
});
