# Documentação oficial do projeto

<center>
<img src='./assets/logo_grupo.png' width='250px'> &  <img src='./assets/track-logo-white.png' width='250px'>
</center>

---

|Sumário|
|-----------|
| [Testes](#testes) |


---
| Versionamento | Data       |
| ----------------------- | ---------- |
| Versão 1                | 18/02/2024 |
| Versão 2                | 01/03/2024 |
| Versão 3                | 15/03/2024 |
| Versão 4                | 29/03/2024 |
| Versão 5                | 11/04/2024  |

---


<br>
<br>

---

# Testes

A implementação de testes automatizados nas funcionalidades CORE do produto CXM visa mitigar os riscos associados aos deploys manuais e reduzir a frequência de rollbacks.

Com a introdução de testes automatizados, a probabilidade de regressões durante os deploys será reduzida, permitindo uma rápida detecção de problemas potenciais e contribuindo para a identificação precoce de bugs.

Desta forma, foram definidos os seguintes testes abaixo.

# Teste de caixa preta

O teste de caixa preta, também conhecido como teste funcional, é uma técnica de teste de software em que o sistema é testado sem considerar sua estrutura interna ou lógica. Nesse tipo de teste, o foco está na validação das entradas e saídas do sistema, bem como no comportamento do sistema em relação aos requisitos funcionais especificados. O testador não tem conhecimento detalhado da implementação do sistema, mas sim das especificações e funcionalidades esperadas. O objetivo é avaliar se o sistema funciona corretamente, identificar erros de funcionalidade, verificar se todas as funcionalidades estão corretamente implementadas e se o sistema atende aos requisitos do usuário. 

Assim, compreendeu-se a necessidade de realização desses para o projeto em questão.

## Cenário de testes de caixa preta

**Tecnologia Utilizada:** Cypress

**Justificativa da Escolha:** Para testes de caixa preta que focam na interação do usuário com a interface da aplicação, Cypress é escolhido sobre ferramentas como Selenium devido à sua arquitetura mais moderna e integração direta com frameworks front-end. Cypress oferece uma experiência de desenvolvimento mais ágil, com feedback instantâneo e capacidade de visualizar testes em execução, o que é essencial para testar o passo a passo de acesso a telas específicas. Diferentemente do Selenium, que é mais versátil para automação cross-browser mas pode ser mais complexo de configurar, Cypress proporciona um setup mais simples e um ambiente de teste mais consistente.

## Definição dos testes

#### 1. Cenário de teste para pesquisas automatizadas:

- Descrição: Verificar se uma pesquisa automatizada pode ser criada com sucesso.
- Passos: </br>
    - Acessar a interface de criação de pesquisa.</br>
    -  Preencher todos os campos obrigatórios. </br>
    - Clicar no botão "Salvar". </br>
- Resultado esperado: A pesquisa é criada com sucesso e está disponível na lista de pesquisas.

#### 2. Cenário de teste para dashboards automatizados:

- Descrição: Garantir que os dados exibidos em um dashboard automatizado sejam precisos e atualizados. <br>
- Passos: </br>
    - Acessar o dashboard automatizado. </br>
    - Verificar se os indicadores e gráficos estão sendo exibidos corretamente. </br>
- Resultado esperado: Os dados exibidos no dashboard correspondem aos dados esperados e estão atualizados. </br>

#### 3. Cenário de teste para distribuição automatizada:
- Descrição: Testar o processo de distribuição automatizada de relatórios ou notificações.
- Passos:
    - Configurar uma nova distribuição automatizada.
    - Definir os destinatários e a frequência de envio.
    - Aguardar o envio automatizado.
- Resultado esperado: Os relatórios ou notificações são distribuídos conforme as configurações definidas, sem erros ou falhas.

# Testes de carga

Testes de carga, também conhecidos como testes de desempenho, são uma forma de teste de software que avalia o comportamento e a capacidade de um sistema sob condições de carga e estresse. Esses testes são projetados para simular situações de uso intenso, como um grande número de usuários simultâneos ou um volume elevado de transações, a fim de verificar se o sistema é capaz de lidar com a carga esperada sem degradar seu desempenho. O objetivo é identificar gargalos, pontos de falha e limitações de recursos, permitindo que os desenvolvedores otimizem o sistema e garantam que ele possa funcionar de forma eficiente e estável em condições de carga real.

## Cenários de testes de Carga

**Tecnologia Utilizada:** Apache JMeter

**Justificativa da Escolha:** JMeter é amplamente reconhecido por sua eficácia em simular cenários de alta demanda em aplicações web, avaliando sua capacidade de manter a performance sob cargas variadas. Sua natureza open-source, flexibilidade para simular múltiplos usuários e suporte para diversos protocolos de rede o destacam de alternativas como LoadRunner, principalmente considerando o custo-benefício. JMeter permite uma análise detalhada através de gráficos e relatórios de performance, facilitando a identificação de gargalos e a tomada de decisões baseadas em dados concretos para otimização da aplicação.

## Definição de testes

A definição de hotpath são caminhos do sistema no qual a maior parte do tempo de execução é gasto e, portanto, que são potencialmente executados com muita frequência.

#### 1 - O teste será focado na funcionalidade de criação de pesquisas de satisfação dentro da plataforma.
- Descrição: O objetivo é garantir que os usuários autorizados possam criar questionários personalizados de forma eficiente e que todas as opções de personalização estejam funcionando conforme esperado.
- Passos: </br>
    - Acesso à Funcionalidade. </br>
    - Criação do Questionário. </br>
    - Personalização do Design e Layout. </br>
    - Salvamento e Publicação. </br>
- Valores de entrada: </br>
    - Informações de texto para as perguntas. </br>
    - Opções de resposta para perguntas específicas. </br>
    - Elementos de design, como logotipos, cores e estilos. </br>
- Valores de saída: </br>
    - Pesquisa de satisfação criada e disponível para uso. </br>
    - Design e layout da pesquisa conforme personalizado. </br>
    - Funcionalidades de lógica de direcionamento de respondentes configuradas conforme especificado. </br>
- Cenários de Carga: </br>
    - Cenário de Baixa Carga:
        - Volume de Usuários: 100 usuários simultâneos.
        - Tempo de Sessão: 20 minutos.
    - Cenário de Média Carga:
        - Volume de Usuários: 200 usuários simultâneos.
        - Tempo de Sessão: 40 minutos.
    - Cenário de Alta Carga:
        - Volume de Usuários: 500 usuários simultâneos.
        - Tempo de Sessão: 1 hora.

#### 2 - O teste de carga será realizado para avaliar a funcionalidade de cadastro de contatos dos clientes no sistema.
- Descrição: O objetivo é verificar a capacidade do sistema em lidar com diferentes volumes de solicitações de cadastro de contatos simultâneas, mantendo o desempenho adequado e garantindo a integridade dos dados.
- Passos: </br>
    - Acesso à Funcionalidade de Cadastro de Contatos.
    - Adição de Novos Contatos.
    - Preencha as informações relevantes do contato, como nome, endereço de e-mail, número de telefone e outros dados necessários.
    - Salve o novo contato adicionado.
    - Teste a funcionalidade de importação de listas de contatos em formatos comuns, como CSV.
    - Verifique se as listas de contatos podem ser importadas corretamente para o sistema.
    - Explore a opção de exportação de listas de contatos para garantir a integração com outros sistemas.
 - Valores de entrada: </br>
    - Informações dos novos contatos a serem cadastrados.
    - Dados para organização dos contatos em grupos ou categorias.
    - Arquivos CSV para importação de listas de contatos.
 - Valores de saída: </br>
    - Confirmação visual do cadastro bem-sucedido dos novos contatos.
    - Organização eficiente dos contatos em grupos ou categorias.
    - Listas de contatos importadas e exportadas corretamente em formato CSV.
- Cenários de Carga: </br>
    - Cenário de Baixa Carga:
          - Simulação de alguns usuários cadastrando contatos simultaneamente (por exemplo, 5 usuários).
          - Adição de um pequeno número de contatos em um curto período de tempo.
    - Cenário de Média Carga:
          - Simulação de uma quantidade moderada de usuários cadastrando contatos simultaneamente (por exemplo, 20 usuários).
          - Adição de contatos em grupos ou categorias específicas.
    - Cenário de Alta Carga:
        - Simulação de um grande número de usuários cadastrando contatos simultaneamente (por exemplo, 50 usuários).
        - Importação e exportação de grandes listas de contatos em formato CSV.
        - Verificação do desempenho do sistema e capacidade de resposta sob carga intensa.

#### 3 - O teste de carga será realizado para avaliar a funcionalidade de automação do envio das pesquisas para os endereços de contato cadastrados.
- Descrição: O objetivo é verificar a capacidade do sistema em lidar com diferentes volumes de solicitações de envio automático de pesquisas, mantendo o desempenho adequado e garantindo a confiabilidade da automação.
- Passos: </br>
    - Acesso à Funcionalidade de Automação de Envio.
    - Selecione a pesquisa que deseja automatizar o envio.
    - Defina as configurações predefinidas para o envio automático, incluindo frequência e horários de envio.
    - Ative a automação de envio para que as pesquisas sejam enviadas automaticamente de acordo com as configurações definidas.
 - Valores de entrada: </br>
    - Configurações de automação, incluindo frequência e horários de envio das pesquisas.
    - Dados das pesquisas a serem enviadas automaticamente.
 - Valores de saída: </br>
    - Confirmação visual da configuração bem-sucedida da automação de envio.
    - Pesquisas enviadas automaticamente nos horários programados.
- Cenários de Carga: </br>
    - Cenário de Baixa Carga:
        - Simulação de alguns usuários configurando a automação de envio de pesquisas simultaneamente (por exemplo, 5 usuários).
        - Envio automático de um pequeno número de pesquisas em intervalos espaçados.
    - Cenário de Média Carga:
        - Simulação de uma quantidade moderada de usuários configurando a automação de envio de pesquisas simultaneamente (por exemplo, 20 usuários).
        - Envio automático de pesquisas em intervalos regulares ao longo do dia.
    - Cenário de Alta Carga:
        - Simulação de um grande número de usuários configurando a automação de envio de pesquisas simultaneamente (por exemplo, 50 usuários).
        - Envio automático de um grande volume de pesquisas em datas específicas ou momentos determinados por eventos específicos.
        - Verificação do desempenho do sistema e capacidade de resposta sob carga intensa de automação de envio de pesquisas.

#### 4 - O teste de carga será realizado para avaliar a capacidade do sistema em armazenar as respostas de todos os clientes de forma eficiente
- Descrição: O objetivo é garantir que o sistema possua uma capacidade robusta de armazenamento, mantendo a integridade, segurança e disponibilidade dos dados coletados.
- Passos: </br>
    - Simule a entrada de um grande volume de respostas de clientes ao sistema.
    - Verifique se o sistema é capaz de armazenar todas as respostas de forma adequada.
    - Após a entrada das respostas, verifique se os usuários conseguem acessar e recuperar as informações armazenadas de maneira eficiente.
    - Teste a velocidade de acesso às respostas, especialmente em situações de carga elevada.
 - Valores de entrada: </br>
     - Grande volume de respostas de clientes simuladas para entrada no sistema.
 - Valores de saída: </br>
    - Confirmação visual da capacidade de armazenamento eficaz de todas as respostas.
    - Velocidade satisfatória no acesso e recuperação das respostas armazenadas.
- Cenários de Carga: </br>
    - Cenário de Baixa Carga:
        - Simulação de um número limitado de respostas de clientes sendo inseridas no sistema (por exemplo, 100 respostas).
        - Verificação da capacidade de armazenamento e acesso das respostas em condições de baixa carga.
    - Cenário de Média Carga:
        - Simulação de um volume moderado de respostas de clientes sendo inseridas no sistema (por exemplo, 500 respostas).
        - Teste da capacidade de armazenamento e acesso das respostas em condições de carga moderada.
    - Cenário de Alta Carga:
        - Simulação de um grande volume de respostas de clientes sendo inseridas no sistema (por exemplo, 1000 respostas ou mais).
        - Avaliação da capacidade de armazenamento e acesso das respostas em condições de carga intensa.
        - Verificação do desempenho do sistema e capacidade de resposta sob carga elevada de armazenamento de respostas.

# Testes Unitários

Testes unitários são um tipo de teste de software onde componentes individuais, como funções, métodos ou classes, são testados de forma isolada para garantir que eles funcionem corretamente e produzam os resultados esperados. Eles são executados de maneira automatizada e ajudam a identificar erros ou problemas em partes específicas do código, permitindo que os desenvolvedores detectem e corrijam defeitos precocemente durante o processo de desenvolvimento. Isso resulta em um código mais confiável, modular e fácil de manter.
Compreendendo a importância do desenvolvimento desses, foi pensado para o projeto, como a seguir.

## Cenários de testes Unitários

**Tecnologia Utilizada:** Jest 

**Justificativa da Escolha:** 
Jest é escolhido para testes unitários em projetos JavaScript ou TypeScript devido à sua simplicidade, velocidade e capacidade de oferecer uma experiência de teste coesa. Com recursos como mocking automático, um sistema de asserção rico e suporte para testes assíncronos, Jest se destaca sobre alternativas como Mocha ou Jasmine. A integração direta com projetos baseados em React, Angular ou Vue, juntamente com a capacidade de executar testes em paralelo, otimiza o ciclo de desenvolvimento e melhora a eficiência da integração contínua (CI). Diferente de outras ferramentas que podem requerer configurações adicionais para mocking ou relatórios de cobertura de código, Jest oferece essas funcionalidades out-of-the-box, facilitando a adoção e a manutenção dos testes unitários.

## Definição dos testes

#### 1. Teste de unidade para módulo de pesquisas automatizadas:

- Descrição: Este teste verifica a funcionalidade de criação de uma nova pesquisa automatizada, o que vai garantir que os parâmetros fornecidos resultem em uma pesquisa válida e pronta para uso.
- Valores de entrada: Parâmetros da pesquisa (por exemplo, título, questões, opções de resposta) para configurar a pesquisa de acordo com as necessidades da empresa.
- Valores de retorno: Confirmação de que a pesquisa foi criada com sucesso na plataforma e está disponível para uso pelos usuários.

#### 2. Teste de unidade para módulo de dashboards automatizados:
- Descrição: verifica a precisão e atualização dos dados exibidos nos dashboards automatizados da plataforma Track.co, assegurando que os indicadores apresentem as informações corretas conforme esperado pelos clientes da empresa.
- Valores de entrada: conjunto de dados de teste específicos da Track.co para os indicadores do dashboard, abrangendo diferentes cenários de uso com base nas necessidades dos clientes da empresa.
- Valores de retorno: Comparação dos dados exibidos no dashboard com os dados esperados, validando a precisão das métricas e gráficos apresentados aos usuários na plataforma.

#### 3. Teste de unidade para módulo de distribuição automatizada:
- Descrição: Este teste garante que a distribuição automatizada de relatórios ou notificações na plataforma Track.co seja realizado conforme configurado, verificando se os destinatários selecionados recebem as informações no momento adequado de acordo com as estratégias de CX da empresa.
- Valores de entrada: O teste receberá configurações de distribuição específicas da Track.co, incluindo destinatários, lista de distribuição, conteúdo a ser enviado e frequência de envio, alinhadas com as necessidades e expectativas dos clientes da empresa.
- Valores de retorno: Verificação de se os relatórios ou notificações foram entregues com sucesso aos destinatários designados na plataforma Track.co, com confirmação de envio e registro adequado para análise posterior pela equipe responsável por CX.


### Testes de unidade - Caso de uso 4

#### 1. Teste de acesso à página de pesquisa

- Tecnologia e justificativa: Optamos pelo Cypress para este teste devido à sua capacidade de simular interações de seleção de elementos da página. Como o caso de uso envolve a seleção do canal Lista de Links, é importante garantir que essa seleção seja realizada corretamente. O Cypress nos permite verificar essa funcionalidade de forma precisa, garantindo que o canal seja selecionado conforme o esperado.
- Entrada:  A execução do comando cy.visit('pagina_de_pesquisa').
- Saída: Confirmação de que a página de pesquisa foi carregada com sucesso.

#### 2. Testar a passagem do mouse sobre a pesquisa 

- Tecnologia e justificativa: Optamos pelo Cypress para este teste porque ele oferece recursos para simular ações do usuário, como passar o mouse sobre elementos da página. Esse teste é importante para garantir que a interação do usuário com a pesquisa seja realizada corretamente, e o Cypress nos permite verificar essa funcionalidade de forma precisa.
- Entrada: A execução da ação cy.hover('elemento_pesquisa').
- Saída: Verificação de que o mouse foi passado sobre a pesquisa corretamente.

#### 3. Teste de clique no ícone de distribuição

- Tecnologia e justificativa: O Cypress será utilizado neste teste devido à sua capacidade de simular cliques em elementos da página. Como o caso de uso envolve o clique em um ícone de distribuição, é importante garantir que essa interação seja realizada corretamente, e o Cypress nos permite realizar essa verificação de forma precisa e automatizada.
- Entrada: A execução do comando cy.get('icone_distribuicao').click().
- Saída: Confirmação de que o ícone de distribuição foi clicado corretamente.

#### 4. Teste de seleção do canal lista de links

- Tecnologia e justificativa: Cypress é adequado para simular interações de seleção de elementos da página. Este teste verifica se o canal Lista de Links é selecionado corretamente.
- Entrada: A execução do comando cy.get('seletor_canal_lista_de_links').select('Lista de Links').
- Saída: Verificação de que o canal Lista de Links foi selecionado com sucesso.

#### 5. Teste de download do modelo da planilha

- Entrada: A execução do comando cy.get('botao_download_modelo').click().
- Saída: Verificação de que o modelo da planilha foi baixado com sucesso.

#### 6. Preenchimento e importação da planilha

- Tecnologia e justificativa: Cypress é capaz de testar a funcionalidade de download de arquivos. Este teste verifica se o modelo da planilha é baixado corretamente.
- Entrada: A execução do comando cy.get('botao_download_modelo').click().
- Saída: Verificação de que o modelo da planilha foi baixado com sucesso.

#### 6.  Teste de preenchimento e importação da planilha

- Tecnologia e justificativa: Cypress permite simular ações de preenchimento e envio de formulários. Este teste verifica se os dados da planilha são preenchidos e importados corretamente.
- Entrada: A execução das ações de preenchimento da planilha e envio através dos comandos cy.get('campo').type('dados') e cy.get('botao_importar').click().
- Saída: Confirmação de que os dados foram importados com sucesso e estão corretos.

#### 7. Teste de verificação dos retornos da distribuição

- Tecnologia e justificativa:  Cypress é utilizado para verificar se os retornos da distribuição estão de acordo com as especificações do caso de uso.
- Entrada: A verificação dos valores das colunas Incluído, Válido, Inválido, Disparado, Não disparado, Recorrência, Resposta(s) - Disparado(s), Resposta(s) - Cliente(s), Abertura(s) - Disparado(s) e Abertura(s) - Cliente(s).
- Saída: Confirmação de que os retornos da distribuição estão corretos e em conformidade com as expectativas do caso de uso.

# Testes de integração

Testes de integração são um tipo de teste de software que verifica a interação e a comunicação entre diferentes componentes do sistema. Eles são realizados para garantir que os módulos ou serviços integrados funcionem corretamente em conjunto, identificando possíveis problemas de compatibilidade, troca de dados ou comportamento inadequado. Esses testes são executados após os testes unitários e antes dos testes de sistema, visando validar a integração adequada e a funcionalidade do sistema como um todo. Eles desempenham um papel importante na detecção precoce de erros que podem surgir na interação entre os componentes, melhorando a qualidade e a confiabilidade do software.

## Cenários de testes de Integração

**Tecnologia Utilizada:** Postman (para APIs) e Cypress (para UI)

**Justificativa da Escolha:** Postman é a escolha para testes de integração de APIs devido à sua interface de usuário intuitiva e extenso suporte para diferentes tipos de requisições HTTP, autenticação e validação de respostas. Sua capacidade de organizar testes em coleções e integrar com CI/CD facilita a automação e monitoramento de APIs. Cypress, utilizado para testes de integração na camada de UI, é preferido por sua execução rápida e feedback visual para testes que envolvem várias partes do sistema. Enquanto outras ferramentas como Selenium também poderiam ser usadas, a facilidade de uso e a integração de Cypress com o desenvolvimento moderno front-end o tornam mais adequado para esse tipo de teste.

## Definição dos testes

#### 1 - Teste de conexão da API para a requisição de criação de uma nova pesquisa.

 - Descrição: O teste de conexão da API para a requisição de criação de uma nova pesquisa envolve verificar a capacidade da API em estabelecer uma conexão bem-sucedida com o servidor e enviar corretamente os dados necessários para criar uma nova pesquisa. Nesse teste, são verificados aspectos como a autenticação, a validação dos parâmetros de entrada, a resposta do servidor, a correta persistência dos dados e a geração de um identificador único para a pesquisa criada. O objetivo é garantir que a API esteja funcionando adequadamente e que seja capaz de receber, processar e armazenar corretamente os dados de uma nova pesquisa, assegurando a integridade e a confiabilidade do sistema.

 - Valores de entrada: Requisição POST com os parâmetros de criação da pesquisa, como nome, atributos a serem preenchidos, canal de distribuição, dia de envio, lista de quem receberá a pesquisa.

 - Valores de saída: Espera-se o retorno de resposta 201, além da criação da pesquisa.

#### 2 - Teste da API de listagem das pesquisas já criadas.
 - Descrição: O teste da API de listagem das pesquisas já criadas consiste em verificar a funcionalidade da API em retornar uma lista de todas as pesquisas associadas a uma organização específica. Durante esse teste, serão realizadas solicitações à API, fornecendo os parâmetros corretos de autenticação e organização, e espera-se receber uma resposta contendo a lista completa das pesquisas existentes. O objetivo é garantir que a API seja capaz de recuperar e apresentar de forma precisa todas as pesquisas pertencentes à organização solicitada, permitindo que os usuários do sistema tenham acesso às informações relevantes de maneira adequada e eficiente.
 - Valores de entrada: Requisição GET com os parâmetros de ID da pesquisa dentro do endpoint.
 - Valores de saída: Espera-se o retorno de resposta 200, além da listagem das pesquisas de determinada empresa, contando com o ID da pesquisa, nome da pesquisa e identificador hash da pesquisa.

#### 3 - Teste de conexão da API de listar status de distribuições.
 - Descrição: O teste de conexão da API de listar status de distribuições tem como objetivo verificar a capacidade da API em estabelecer uma conexão efetiva e obter os status dos clientes participantes de uma distribuição por meio de diferentes canais, como E-mail, SMS Link ou WhatsApp. Durante esse teste, serão realizadas solicitações à API, fornecendo os parâmetros adequados, como a identificação da distribuição e o histórico de alterações desejado. Dependendo das configurações, a API pode retornar apenas o último status de cada cliente ou todos os status ordenados por status. É importante observar que, nos casos dos canais Link ou QR Code, a API fornecerá apenas o status de sucesso da criação da distribuição, uma vez que não existem envios pela plataforma nesses casos. O objetivo é garantir que a API seja capaz de recuperar corretamente os status dos clientes, fornecendo informações precisas e relevantes sobre o andamento das distribuições realizadas através dos diferentes canais de comunicação.
 - Valores de entrada: Requisição GET com parâmetros da URL da plataforma, além do ID da organização, juntamente com o ID da distribuição. Ainda é possível configurar o histórico de status, que recebe valores de "true" ou "false".
 - Valores de saída: espera-se o retorno de resposta 200, além de valores como o nome, telefone, email, data de envio e o status em si. Quando o histórico é ativado, espera-se ainda o retorno de diversos status de uma mesma distribuição, seguidos das datas de cada um deles.

#### 4 - Teste de integração entre a plataforma de distribuição e a ferramenta de email.
 - Descrição: O teste de integração entre a plataforma de distribuição e a ferramenta de e-mail envolve verificar a correta comunicação e interação entre esses dois sistemas. Durante esse teste, são realizadas simulações de envio de e-mails por meio da plataforma de distribuição, verificando se os dados são corretamente transmitidos para a ferramenta de e-mail e se os e-mails são entregues aos destinatários esperados. Esse teste abrange aspectos como a autenticação e autorização entre os sistemas, a formatação correta dos e-mails, o encaminhamento adequado dos dados e a confirmação de entrega dos e-mails. O objetivo é assegurar que a integração entre a plataforma de distribuição e a ferramenta de e-mail funcione corretamente, garantindo a efetividade das campanhas de e-mail marketing, a entrega adequada das mensagens aos destinatários e a consistência dos dados entre os sistemas envolvidos.
 - Valores de entrada: As entradas são os endereços de email de cada um dos clientes, além de a pesquisa em si que seria distribuída.
 - Valores de saída: Resposta positiva de envio, sem oferecer qualquer erro, garantindo que todos os clientes da lista receberam o email com a pesquisa.

#### 5 - Teste de integração entre a plataforma de distribuição e o aplicativo WhatsApp.
 - Descrição: O teste de integração entre a plataforma de distribuição e o aplicativo WhatsApp consiste em verificar a correta interação e comunicação entre esses dois sistemas. Durante esse teste, são realizadas simulações de envio de mensagens pelo aplicativo WhatsApp por meio da plataforma de distribuição, verificando se os dados são transmitidos adequadamente e se as mensagens são entregues aos destinatários corretos. Esse teste abrange aspectos como a autenticação e autorização entre os sistemas, a formatação correta das mensagens, o encaminhamento adequado dos dados e a confirmação de entrega das mensagens pelo aplicativo WhatsApp. O objetivo é garantir que a integração entre a plataforma de distribuição e o aplicativo WhatsApp funcione de maneira correta e eficiente, assegurando a entrega adequada das mensagens aos destinatários e a consistência dos dados entre os sistemas envolvidos.
 - Valores de entrada: As entradas seriam os links de WhatsApp de cada cliente, além de as próprias pesquisas em si que seriam distribuídas.
 - Valores de saída: Resposta positiva de envio, sem oferecer qualquer erro, garantindo que todos os clientes da lista receberam a mensagem com a pesquisa.

### Teste de integração - Caso de uso 4

#### 1 - Teste de integração entre a planilha de clientes importada e a plataforma.
 - Descrição: O teste de integração entre a planilha de clientes importada e a plataforma envolve verificar a correta integração e sincronização dos dados contidos na planilha com a plataforma. Durante esse teste, a planilha de clientes é importada para a plataforma, e são realizadas validações para garantir que os dados da planilha sejam corretamente mapeados e inseridos na plataforma, mantendo a consistência e a integridade dos dados. Esse teste abrange aspectos como a verificação dos formatos dos dados na planilha, a correspondência correta dos campos da planilha com os campos da plataforma, a detecção e tratamento de possíveis erros ou inconsistências nos dados, e a confirmação de que os clientes foram devidamente importados para a plataforma. O objetivo é assegurar que a integração entre a planilha de clientes e a plataforma seja eficiente, permitindo a correta importação e utilização dos dados dos clientes na plataforma, evitando duplicidades ou perdas de informações importantes.
 - Valores de entrada: As entradas seriam os próprios arquivos de planilhas importados na plataforma.
 - Valores de saída: O retorno deveria ser reposta de saída positiva, confirmando compatibilidade e aceitação do modelo.


> Obs: Vale destacar que todas as APIs citadas no teste foram retiradas da documentação oficial de APIs da plataforma - https://documenter.getpostman.com/view/14932352/Tz5v1upm.

<br>