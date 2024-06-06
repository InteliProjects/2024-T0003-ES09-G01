# Plano de Delivery de Software

**Nome do Projeto:** Construção de testes automatizados e controle de qualidade de software

**Data de Início:** 05/02/2024

**Data de Entrega Prevista:** 11/02/2024

## Introdução

O propósito do plano de delivery de software é fornecer uma estrutura detalhada para a entrega de um produto de software ou uma atualização de software. Ele é essencial para coordenar e orientar as atividades de desenvolvimento, teste, implantação e lançamento de software de forma eficiente e eficaz. Em resumo, o plano de delivery de software é fundamental para garantir uma entrega de software bem-sucedida, garantindo que todas as etapas do processo sejam cuidadosamente planejadas, executadas e monitoradas para atender às necessidades e expectativas dos usuários finais.

No projeto focamos em dois casos de uso o caso de uso um e quatro, mas percebemos que precisaríamos ter um aditivo que seria caso de uso 9. Isso se deve ao fato de que esta extensão é uma regra de negócio crucial para o desenvolvimento e execução plena do caso de uso quatro.

- Caso de Uso 1: Realizar distribuição com o canal E-mail e verificar os retornos associados.
- Caso de Uso 4: Conduzir distribuição via Lista de Links e examinar os resultados gerados.
- Caso de uso 9: Verificar o cadastro de clientes e sua saúde após o envio de uma planilha.

O caso de uso 1 descreve a funcionalidade do sistema que permite o envio de pesquisas de satisfação por e-mail aos destinatários. Este requisito implica uma série de etapas que o sistema deve seguir para garantir o envio eficaz das pesquisas e o acompanhamento das respostas.

No caso de uso 4 o sistema deve relacionar à gestão dos contatos dos clientes e à garantia de uma comunicação eficiente através da geração de links individuais para pesquisas de satisfação.

O objetivo é implementar testes automatizados nessas funcionalidades críticas para reduzir a probabilidade de regressões durante as implantações e permitir a detecção precoce de possíveis problemas.

## Equipe de Projeto

- Líder do Projeto: José Romualdo , jose.romualdo@prof.inteli.edu.br

- Desenvolvedores:
    - <a href="https://www.linkedin.com/in/felipe-gomes-dev/">Felipe Gomes</a> 
    - <a href="https://www.linkedin.com/in/liviapcoutinho/">Livia Coutinho</a> 
    - <a href="https://www.linkedin.com/in/lu%C3%ADsa-leite-681443230/">Luísa Leite</a>
    - <a href="https://www.linkedin.com/in/luiz-k-alencar/">Luiz Alencar</a> 
    - <a href="https://www.linkedin.com/in/marcos-vinicius-166531239/">Marcos Moura</a>
    - <a href="https://www.linkedin.com/in/matheusmacedosantos/">Matheus Macedo</a> 
    - <a href="https://www.linkedin.com/in/priscila-falc%C3%A3o-3435a1244/">Priscila Falcão</a> 
    - <a href="https://www.linkedin.com/in/victor-severiano-de-carvalho/">Victor Carvalho</a> 

## Cronograma de Delivery

O projeto teve ao todo 5 fases, ou seja, 5 sprints cada uma com duas semanas de duração. As tarefas das sprints são essas:

### Sprint 1 (05/02 até 16/02):
- Elencamento de Requisitos: Criar e analisar os requisitos funcionais e não funcionais do projeto;

- Diagrama C4 model: desenvolvimento do modelo C4 nos níveis container e contexto;

- Wireframe: prototipação das telas;

- Planejamento dos Testes: o planejamento dos diferentes cenários de teste.

### Sprint 2 (19/02 até 01/03):
- Frontend: desenvolvimento das telas já prototipadas na primeira sprint;

- Backend: desenvolvimento das APIs juntamente com os endpoints;

- TDD: implementação dos testes de caixa branca;

- Elaboração das métricas: elaboração das métricas de qualidade com foco na organização do time e parâmetros de qualidade das entregas.

### Sprint 3 (04/03 até 15/03)

- Integração do Frontend com o Backend;
- Realização dos testes unitários;
- Testes de interface, com o cypress;
- Teste de Integração sobre cinco endpoints;
- Análise estática com o SonarQube.

### Sprint 4 (18/03 até 29/03)
- Desenvolvimento da elaboração do infográfico;
- Teste de carga com uso do JMeter;
- Dashboard para acompanhamento da aplicação.

### Sprint 5 (01/03 até 12/03)
- Plano delivery;
- Plano de Sustentação;
- Relatório final e refatoração.


## Metodologia

Utilizamos a metodologia ágil na qual nos possibilitou um desenvolvimento mais rápido e adepto a mudanças, a cada sprint escolhemos um integrante do grupo para assumir o papel de scrum master, ele fica responsável por organizar o backlog e distribuir os PBIs.

Em relação a listagem de ferramentas de softwares para a utilização no desenvolvimento dos testes, temos as seguintes instrumentos:

- **Cypress:** Os testes de caixa preta foram feitos com essa ferramenta com a justificativa de facilidade na integração direta com frameworks front-end e facilidade de uso. O que torna o Cypress único é sua arquitetura e abordagem de teste. Ao contrário de outras ferramentas de automação de teste, o Cypress é executado diretamente no navegador. Isso significa que ele pode interagir com a aplicação da mesma forma que um usuário real, permitindo testes mais precisos e confiáveis. 
    O Cypress também foi utilizado para testes de integração, ele foi escolhido para isso por sua execução rápida e feedback visual para testes que envolvem várias partes do sistema. Enquanto outras ferramentas como Selenium também poderiam ser usadas, a facilidade de uso e a integração de Cypress com o desenvolvimento moderno front-end o tornam mais adequado para esses tipos de testes.

- **Apache JMeter:** Foi usado para os testes de carga para avaliar o desempenho e a capacidade de um sistema sob condições de carga e estresse. Essa ferramenta foi escolhida por sua eficácia em simular cenários de alta demanda em aplicações web. O Apache JMeter é uma ferramenta de teste de desempenho de código aberto amplamente utilizada para avaliar o desempenho de aplicativos web e serviços web. Ele permite que os desenvolvedores simulem diferentes cargas de usuários e analisem o comportamento do aplicativo sob condições de estresse. 

- **Jest:** Jest é escolhido para testes unitários em projetos JavaScript ou TypeScript devido à sua simplicidade, velocidade e capacidade de oferecer uma experiência de teste coesa. Com recursos como mocking automático, um sistema de asserção rico e suporte para testes assíncronos, Jest se destaca sobre alternativas como Mocha ou Jasmine.
	A integração direta com projetos baseados em React, Angular ou Vue, juntamente com a capacidade de executar testes em paralelo, otimiza o ciclo de desenvolvimento e melhora a eficiência da integração contínua (CI). Diferente de outras ferramentas que podem requerer configurações adicionais para mocking ou relatórios de cobertura de código, Jest oferece essas funcionalidades out-of-the-box, facilitando a adoção e a manutenção dos testes unitários.	
	
## Gestão de Qualidade

Para garantir a qualidade do software, é essencial adotar uma abordagem abrangente de testes que engloba diversos tipos de testes em diferentes fases do ciclo de desenvolvimento. Os testes que desenvolvemos foram esses:
- **Teste de Caixa Preta:**
O teste de caixa preta, também conhecido como teste funcional, é uma técnica de teste de software em que o sistema é testado sem considerar sua estrutura interna ou lógica. Nesse tipo de teste, o foco está na validação das entradas e saídas do sistema, bem como no comportamento do sistema em relação aos requisitos funcionais especificados. O testador não tem conhecimento detalhado da implementação do sistema, mas sim das especificações e funcionalidades esperadas. O objetivo é avaliar se o sistema funciona corretamente, identificar erros de funcionalidade, verificar se todas as funcionalidades estão corretamente implementadas e se o sistema atende aos requisitos do usuário.
- **Testes de Carga:**
Testes de carga, também conhecidos como testes de desempenho, são uma forma de teste de software que avalia o comportamento e a capacidade de um sistema sob condições de carga e estresse. Esses testes são projetados para simular situações de uso intenso, como um grande número de usuários simultâneos ou um volume elevado de transações, a fim de verificar se o sistema é capaz de lidar com a carga esperada sem degradar seu desempenho. O objetivo é identificar gargalos, pontos de falha e limitações de recursos, permitindo que os desenvolvedores otimizem o sistema e garantam que ele possa funcionar de forma eficiente e estável em condições de carga real.
- **Teste Unitários:**
Testes unitários são um tipo de teste de software onde componentes individuais, como funções, métodos ou classes, são testados de forma isolada para garantir que eles funcionem corretamente e produzam os resultados esperados. Eles são executados de maneira automatizada e ajudam a identificar erros ou problemas em partes específicas do código, permitindo que os desenvolvedores detectem e corrijam defeitos precocemente durante o processo de desenvolvimento. Isso resulta em um código mais confiável, modular e fácil de manter.
- **Testes de Integração:**
Testes de integração são um tipo de teste de software que verifica a interação e a comunicação entre diferentes componentes do sistema. Eles são realizados para garantir que os módulos ou serviços integrados funcionem corretamente em conjunto, identificando possíveis problemas de compatibilidade, troca de dados ou comportamento inadequado. Esses testes são executados após os testes unitários e antes dos testes de sistema, visando validar a integração adequada e a funcionalidade do sistema como um todo. Eles desempenham um papel importante na detecção precoce de erros que podem surgir na interação entre os componentes, melhorando a qualidade e a confiabilidade do software.
A principal métrica para a aceitação do nosso software  é a cobertura de teste, onde o sistema deve ter pelo menos 80% de cobertura de testes. Outro ponto importante é a automação de testes, por isso nos preocupamos em usar ferramentas como JMeter, Cypress e Jest para os testes. Pois testes automatizados são realizados utilizando ferramentas de automação de teste que executam scripts previamente desenvolvidos para verificar o comportamento do software de forma sistemática e repetitiva.


## Gestão de Riscos

O principal risco para o projeto é não atingir o objetivo que seria a diminuição de rollbacks dentro da equipe Track.co, para isso elaboramos os testes. Para que seja implementado na empresa a prática de testes contínuos, pois é uma prática fundamental no desenvolvimento de software que visa garantir a qualidade do código e a estabilidade do sistema ao longo de todo o ciclo de desenvolvimento. Ao implementar testes contínuos, as equipes de desenvolvimento podem identificar problemas mais cedo, melhorar a qualidade do código e reduzir a necessidade de rollbacks, pois as alterações são validadas continuamente ao longo do ciclo de desenvolvimento. Isso resulta em um processo de desenvolvimento mais confiável, eficiente e com maior qualidade.


## Comunicação

Durante o desenvolvimento do projeto o principal meio de comunicação foi nas apresentações no final das sprints, onde tínhamos um feedback claro sobre o que foi feito durante a sprint e como podiamos melhorar na visão do stakeholders, e durante a sprint quando tínhamos alguma dúvida sobre o projeto comunicavamos ao orientador para repassar ao stakeholders. No final do projeto a equipe fica à disposição da Track.co para eventuais dúvidas, por meio dos canais de comunicação de email. Em relação a comunicação dentro do grupo, o principal meio era o Slack onde tínhamos um grupo para discutir problemas e dúvidas e outro recurso eram as dailys feitas todos os dias antes de desenvolvermos o projeto. 

## Implementação e Deployment
- **Ambientes de Implementação:** 

No ambiente de desenvolvimento, os desenvolvedores codificam, testam e integram novas funcionalidades e correções em um cenário isolado, que imita o ambiente de produção em termos de configuração de software, mas não necessariamente em escala ou capacidade. Ferramentas de desenvolvimento integrado (IDEs), sistemas de controle de versão e ferramentas de análise estática de código são fundamentais para garantir a qualidade do código e facilitar a integração contínua.

O ambiente de teste é uma cópia fiel do ambiente de produção, utilizada para executar testes automatizados e manuais em toda a aplicação. Esta etapa verifica a funcionalidade, a segurança e a performance antes de qualquer release. Ferramentas especializadas em testes de carga, segurança e funcionalidade são empregadas para simular cenários de uso reais e identificar potenciais problemas.

No ambiente de produção, o software é disponibilizado aos usuários finais. Este ambiente é otimizado para segurança, desempenho e disponibilidade. A transição para este ambiente segue um processo de deployment que envolve etapas de validação rigorosas para garantir que as novas versões sejam compatíveis com a infraestrutura existente e não introduzam novos problemas.

- **Estratégia de Deployment:**

    A estratégia de deployment é formulada para garantir implementações seguras, eficientes e controladas. Esta abordagem inclui múltiplas camadas de processos e ferramentas, visando a minimização de erros humanos e a otimização do ciclo de vida de release.

    -  Integração Contínua (CI): Planejamos utilizar a ferramenta GitLab para automatizar a compilação e execução de testes unitários, de integração e de qualidade de código em cada commit ou merge request. Isso garante que cada alteração seja verificável e pronta para ser promovida ao ambiente seguinte.


    - Entrega Contínua (CD): Automatiza o deployment de aplicações em ambientes de teste e/ou produção após as fases de CI serem completadas com sucesso. Utilizará o GitLab para gerenciar e orquestrar os deployments, permitindo rollouts e rollbacks automatizados.


    - Gerenciamento de Configuração: A ferramentas Puppet será utilizada para manter a consistência dos ambientes de aplicação. Elas garantem que as configurações de software, bibliotecas e sistemas operacionais sejam padronizadas e auditadas em todos os ambientes de desenvolvimento, teste e produção.


Estratégias a serem aplicadas:

- **Blue-Green Deployment:** Mantém duas produções paralelas (Blue e Green), onde uma serve o tráfego ativo e a outra fica em standby. Após um novo release no ambiente Green, o tráfego é cuidadosamente redirecionado para ele. Se algo falhar, pode-se voltar rapidamente ao ambiente Blue.

- **Canary Releases:** Lançamento gradual do novo release para um subconjunto pequeno de usuários ou servidores. Monitora o desempenho e a estabilidade antes de proceder com o rollout completo.

- **Plano de Backup e Rollback:**
O plano de backup e rollback é projetado para proteger contra perda de dados e falhas de sistema. Backups regulares são realizados para garantir que os dados possam ser recuperados em caso de corrupção ou perda. Em situações de falha após o deployment, o plano de rollback é ativado para reverter o sistema para um estado anterior, estável, minimizando o tempo de inatividade e impacto nos usuários finais. A documentação detalhada destes procedimentos é mantida para garantir que as equipes responsáveis possam executar as operações de maneira eficaz e eficiente.

## Treinamento e Suporte

Após entrega do projeto um dos aliados principais para o suporte vai ser a documentação, onde o parceiro poderá esclarecer suas dúvidas e entender como certas partes do software funcionam. Na documentação do projeto existem explicações de como rodar o projeto, o motivo pelo qual escolhemos certas ferramentas para fazer os testes, temos um parte sobre o dashboard no qual faz o monitoramento da aplicação de forma instantânea. Este plano de suporte pós-lançamento visa garantir que os usuários finais e a equipe de suporte estejam bem equipados para utilizar efetivamente o software e resolver quaisquer problemas que possam surgir. A abordagem abrangente inclui uma variedade de estratégias de treinamento e uma estrutura de suporte robusta para atender às necessidades dos usuários em todas as etapas.


## Orçamento

Levando em consideração que o Inteli faz parcerias com empresas reais para que seus alunos entreguem, ao final de dez semanas, um MVP sobre o problema apresentado pelo parceiro, e em troca dessa troca de conhecimento de uma empresa real para com seus alunos, não existe nenhum custo associado a isso. E como as ferramentas usadas para o desenvolvimento são de código aberto, ou seja, essa parte também não teve nenhum custo.
