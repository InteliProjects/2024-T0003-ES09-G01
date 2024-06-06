# Documentação oficial de Métricas do Projeto

<center>
<img src='./assets/inteli_logo.png' width='250px'> &  <img src='./assets/track-logo-white.png' width='250px'>
</center>

---

|Sumário|
|-----------|
|[Métricas](#métricas) |
|[Dasboard de monitoramento](#dashboard-de-monitoramento-da-aplicação) |
|[Matriz RACI](#matriz-raci) |
|[SLA](#sla)|


## Métricas

### **Objetivos e Questões:**

**Objetivo 1:** O sistema deve assegurar que irá armazenar e proteger todos os dados dos clientes.

- Q1 - Que medidas de segurança podemos implementar para proteger os dados dos clientes contra acesso não autorizado ou violações de segurança?
    
    R: Implementação do Auth0 que é uma plataforma de identidade como serviço (IDaaS) que oferece soluções completas para autenticação, autorização e gerenciamento de identidade em aplicativos da web, aplicativos móveis e APIs.

- Q2 - Como podemos garantir a integridade e confidencialidade dos dados dos clientes durante o armazenamento e transmissão?
    
    R: Realização frequente de backups de dados sensíveis utilizando o serviço de backup centralizado da AWS, AWS Backup.

- Q3 - Como o sistema lidará com um aumento repentino no volume de dados dos clientes sem acontecer algum tipo de perda?

    R: Serão utilizados os serviços da AWS para aplicar o Balanceamento de carga e para fazer uma arquitetura escalável na nuvem.

- Q4 - Como podemos garantir a recuperação rápida e eficiente dos dados dos clientes em caso de falha do sistema ou desastre?

    R: Aplicação de um sistema de failover automático em que o tráfego é transferido para um local de backup caso o local principal se torne inacessível

- Métricas:

    1. 90% de sucesso na recuperação de dados em caso de aumento repentino no volume, considerando o antes e depois do aumento.
    2. Três horas no máximo necessário para recuperar os dados dos clientes em caso de falha do sistema ou desastre.

**Objetivo 2:** O sistema deve ter suas funcionalidades funcionado em diferentes ocasiões.

- Q1 - Como podemos garantir que todas as funcionalidades do sistema permaneçam operacionais mesmo em situações de carga pesada?

    R: Implementação de testes de carga com o Apache JMeter e a limitação de requisições.

- Q2 - Como podemos simular condições adversas e validar a capacidade do sistema de se recuperar sem perda de funcionalidade?

    R: Realização de testes de estresse com o JMeter e de injeção de falhas utilizando o Jest para validar.

- Q3 - Que métricas de desempenho devemos monitorar para avaliar a capacidade do sistema de funcionar em diferentes ocasiões?

    R: É necessário que as métricas de tempo de resposta, taxa de erros e de disponibilidade do sistema recebam atenção especial para avaliar a capacidade do sistema de funcionar em diferentes ocasiões.

- Q4 - Como podemos usar ferramentas de monitoramento para identificar padrões de uso do sistema e antecipar potenciais problemas de desempenho antes que afetem a funcionalidade?

    R: Para monitorar padrões de uso do sistema, pode-se utilizar ferramentas como o Prometheus, uma ferramenta de monitoramento de código aberto que oferece coleta de métricas, armazenamento de séries temporais, consultas e alertas.
- Métricas: 
    1. 95% do tempo em que todas as funcionalidades do sistema estão operacionais.
    2. Em uma escala de 0 a 5 o sistema deve ter a capacidade 4 de se recuperar sem perda de funcionalidade em condições adversas simuladas. Sendo que:
        - Nenhuma Capacidade de Recuperação (0): O sistema não possui nenhum mecanismo de recuperação em caso de falha. Qualquer interrupção ou falha no sistema resultará em perda significativa de funcionalidade, dados ou tempo de inatividade.

        - Capacidade Mínima de Recuperação (1): O sistema possui algumas medidas básicas de recuperação, mas são limitadas e não garantem uma recuperação completa. A recuperação pode envolver reinicialização manual do sistema ou restauração a partir de backups.
    
        - Capacidade de Recuperação Limitada (2): O sistema possui algumas capacidades de recuperação, mas elas são limitadas em escopo ou eficácia. Pode haver algum tempo de inatividade ou perda de dados durante o processo de recuperação.

        - Capacidade de Recuperação Moderada (3): O sistema possui recursos de recuperação moderados que permitem uma recuperação rápida e eficiente em muitos cenários de falha. O tempo de inatividade é minimizado e a perda de dados é limitada durante a recuperação.
        
        - Capacidade de Recuperação Avançada (4): O sistema possui recursos avançados de recuperação que permitem uma recuperação rápida e automática em uma ampla gama de cenários de falha. O tempo de inatividade é quase inexistente e a perda de dados é mínima ou inexistente durante a recuperação.

        - Capacidade de Recuperação Total (5): O sistema possui capacidades de recuperação total que garantem uma recuperação automática e imediata em qualquer cenário de falha. O sistema é altamente resiliente e é capaz de se adaptar a condições adversas sem perda de funcionalidade ou tempo de inatividade perceptível.

    3. Identificar um dia antes padrões de uso mal intencionados do sistema e antecipação de potenciais problemas de desempenho através da ferramenta de análise de sistema Prometheus.

**Objetivo 3:** Atingir sucesso nas metas da Sprint de forma consistente.

- Q1 - Quais são os principais indicadores de sucesso para as metas da Sprint que podemos medir regularmente para garantir que estamos progredindo na direção certa?

    R: O cumprimento dos itens do backlog e a velocidade de conclusão das tarefas da sprint são bons indicadores de sucesso para as metas da Sprint.

- Q2 - Quais são os principais obstáculos ou desafios que podem impedir o sucesso das metas da Sprint e como podemos mitigá-los ou superá-los efetivamente?

    R: Os principais obstáculos que podem impedir o sucesso das metas da Sprint estão relacionadas à constância e à velocidade de entrega das tarefas dos constituintes do grupo.

-  Q3 - Que tipo de feedback dos stakeholders e professores podemos coletar para avaliar o sucesso das metas da Sprint e identificar áreas de melhoria contínua?

    R: Feedbacks sobre relacionamento da equipe e sobre a expectativa para a entrega são de muita ajuda para identifcar quais são as principais áreas de melhoria.

- Q4 - Como podemos adaptar e ajustar as metas da Sprint com base no feedback e nas lições aprendidas de sprints anteriores para aumentar a probabilidade de sucesso futuro?

    R: Identificação dos 20% dos problemas que correspondem a 80% dos impactos nas entregas de acordo com o diagrama de pareto, reuniões frequentes entre os membros do grupo e a validação e verificação contínua das entregas.

- Métricas

    1. Aumentar em 15% as metas da Sprint concluídas dentro do prazo.
    2. Identificar 90% desafios que podem impedir o sucesso das metas da Sprint.
    3. Aumentar os pontos positivos em 20% nos feedbacks dos professores e stakholders sobre o sucesso das metas da Sprint.

**Objetivo 4:** Otimizar o trabalho em progresso (WIP) durante as sprints.

- Q1 - Quais são os principais pontos de estrangulamento ou gargalos que estão contribuindo para um alto nível de trabalho em progresso (WIP) durante as sprints e como podemos identificá-los?

    R: A má subdivisão de tarefas leva a situações de depencência de tarefas. Além disso, há a concentração de tarefas em alguns membros do grupo, o que diminui a velocidade das entregas.

- Q2 - Quais são os benefícios de reduzir o trabalho em progresso (WIP) durante as sprints e como podemos mostrar isso para todos da equipe?

    R: Ao limitar o WIP, a equipe pode se concentrar em concluir as tarefas atualmente em andamento antes de iniciar novas. Isso ajuda a evitar dispersão de esforços e aumenta a produtividade geral da equipe.

- Q3 - Como podemos colaborar como equipe para priorizar e dividir o trabalho em tarefas menores e mais gerenciáveis, a fim de reduzir o trabalho em progresso (WIP) e melhorar a produtividade durante as sprints?

    R: Divisão Incremental de Funcionalidades: Ao dividir as funcionalidades em partes menores, é importante que o grupo foque em entregar valor por meio de funcionalidades de maneira incremental. 

- Q4 - Quais são as práticas ou técnicas ágeis que podemos implementar para limitar e gerenciar o trabalho em progresso (WIP) de forma mais eficaz durante as sprints?

    R: O pair programming pode ser muito útil neste caso, uma vez que isto permite o compartilhamento de saberes entre os membros do grupo e a revisão antes da entrega de funcionalidades fica mais dinâmica.

- Métricas:

    1. Diminuir em 30% o tempo em que cada tarefa fica em progresso durante as Sprints.
    2. Concluir 95% de itens de trabalho iniciados que são concluídos dentro da Sprint.
    3. Aumentar em 10% Avaliação da colaboração da equipe na priorização e divisão do trabalho em tarefas gerenciáveis.
    4. Classificar a velocidade da entrega das tasks dos artefatos de 0 a 3:
        - Task não concluída(0):
A atividade em questão não foi concluída até o final da sprint.
        - Task concluída com grande atraso(1):
A atividade em questão foi concluída em um prazo maior do que dois dias.
        - Task concluída com pequeno atraso(2):
A atividade em questão foi concluída em até 2 dias.
        - Task concluída no prazo(3):
A atividade em questão foi concluída com 1 dia.

**Objetivo 5:** Aumentar a cobertura de código por testes automatizados.

- Q1 - Quais áreas do código atualmente têm pouca ou nenhuma cobertura de testes automatizados e como podemos identificar essas áreas de forma mais precisa?

    R: Para identificar as áreas com pouca ou nenhuma cobertura de testes automatizados podemos utilizar o Jest para fazer uma verificação de cobertura de testes com este.

- Q2 - Quais são os desafios ou obstáculos que podem impedir o aumento da cobertura de código por testes automatizados e como podemos mitigá-los efetivamente?

    R: O mal entendimento das regras de negócio podem atrapalhar o aumento da cobertura dos testes automatizados. E para superar isso, é importante que os membros do grupo se atentem aos status da verificação de cobertura fornecidos pelo Jest.

-  Q3 - Que métricas podemos usar para medir a cobertura de código por testes automatizados e como podemos coletar e acompanhar esses dados de forma precisa e consistente ao longo do tempo?

-   Q4 - Quais práticas ou técnicas de teste automatizado podemos implementar para maximizar a cobertura de código de maneira eficiente e eficaz, levando em consideração as restrições de tempo e recursos da equipe?

- Métricas:

    1. 80% do código fonte coberto por testes automatizados.
    2. De 2 até 4 de testes automatizados desenvolvidos para cada funcionalidade do sistema.
    3. 90% do testes automatizados que são executados com sucesso em cada build do sistema.

**Objetivo 6:** Reduzir a densidade de erros e bugs por KLOC.

-   Q1 - Como podemos melhorar o processo de revisão de código e testes para identificar e corrigir erros e bugs de forma mais eficiente e eficaz durante o desenvolvimento?

    R: As práticas de Test-Driven Development (TDD) podem auxiliar nesse quesito uma vez que no TDD os testes são escritos antes do código de produção. Isso ajuda a garantir que o código seja mais testável e tenha uma cobertura de teste adequada desde o início. Além disso, a verificação da cobertura de testes ajuda a garantir que os testes abrangem boa parte do código do sistema.

- Q2 - Quais são as áreas do código que historicamente têm uma densidade mais alta de erros e bugs e como podemos direcionar nossos esforços para reduzir essa densidade nessas áreas críticas?

    R: Historicamente, a área do código com mais erros é a que envolve a lógica de negócios, especialmente quando os requisitos são mal compreendidos ou mal documentados.

- Q3 - Que métricas específicas podemos usar para medir a densidade de erros e bugs por KLOC e como podemos coletar e acompanhar esses dados de forma consistente ao longo do tempo?

    R: Taxa de Defeitos por Linha de Código (Defects per KLOC): Esta métrica calcula o número médio de defeitos encontrados por mil linhas de código. Quanto maior o valor, maior a densidade de erros e bugs. Taxa de Defeitos Críticos por Linha de Código (Critical Defects per KLOC): Esta métrica calcula o número médio de defeitos classificados como críticos por mil linhas de código. Defeitos críticos são aqueles que têm um impacto significativo na funcionalidade ou segurança do sistema.

- Q4 - Como podemos promover uma cultura de qualidade e responsabilidade dentro da equipe incentivando a identificação proativa e a correção de erros e bugs durante todo as sprints?

    R: O comprometimento com o daily meeting pelos membros a fim de compartilhar entre todos do grupo quais foram as atividades concluídas e quais são as próximas atividades a serem trabalhadas e a revisão completa dos artefatos a serem entregues com antecedência são muito importantes para garantir que a qualidade do produto entregue evolua.

- Métricas:

1. Encontrar dois erros no máximo por KLOC (1000 linhas).
2. 4 horas máxima para corrigir um erro ou bug após sua identificação.

**Objetivo 7:** Melhorar a taxa de detecção de erros e bugs antes do lançamento na main.

- Q1 - Quais são os processos atuais de revisão de código e testes que temos em vigor e como podemos otimizá-los para identificar mais eficazmente erros e bugs antes do lançamento na main?

    R: Os processos de revisão serão divididos e hierarquizados com o auxilio do Github, isso será feito da seguinte forma: A partir da programação de duplas, cada membro revisa o que o outro fez e sobe para uma branch do repositório do projeto. Após isso, alguém de fora da dupla irá avaliar e fazer o merge da branch criada com a main, garantindo que o processo de revisão seja realizado de maneira responsável.

- Q2 - Quais são os principais tipos de erros e bugs que têm sido identificados após o lançamento na main e como podemos usar essas informações para priorizar nossos esforços de detecção precoce?

    R: Os principais erros identificados são os de funcionalidade, que apesar de serem mais impactantes, estes são mais fáceis de se identificar e corrigir.

- Q3 - Quais são as ferramentas e técnicas disponíveis que podemos utilizar para automatizar e agilizar o processo de detecção de erros e bugs durante o desenvolvimento?

    R: O Jest é um dos frameworks de teste mais populares para JavaScript e TypeScript. Ele oferece uma ampla gama de recursos, incluindo suporte para testes de unidade, testes de integração, mocks e spies integrados, além de uma sintaxe simples e fácil de usar.

- Q4 - Que métricas específicas podemos usar para medir a taxa de detecção de erros e bugs antes do lançamento na main e como podemos monitorar e analisar esses dados para identificar áreas de melhoria contínua?

    R: Taxa de cobertura de testes: Essa métrica indica a porcentagem do código que está sendo exercida por testes automatizados. Uma alta taxa de cobertura de testes pode indicar uma maior probabilidade de detecção de erros e bugs durante o desenvolvimento.
Taxa de regressão: Essa métrica mede a proporção de erros que foram reintroduzidos em comparação com o número total de erros corrigidos em cada versão. Uma alta taxa de regressão pode indicar problemas na manutenção do código e na eficácia dos testes.
Tempo médio para detecção (MTTD): O MTTD mede o tempo médio que leva para detectar um erro ou bug desde sua introdução até sua detecção. Um MTTD baixo é desejável, pois indica uma detecção precoce de problemas.

- Métricas:

1. De todos os bugs existentes 80% serem identificados durante o desenvolvimento em comparação com os identificados após o lançamento na main.
2. Dois dias para identificar um bug desde sua introdução no código.
3. 80% dos bugs serem identificados durante testes de regressão antes do lançamento.

# Dashboard de monitoramento da aplicação

No presente projeto de automação de testes em funcionalidades Core da plataforma CXM da Track.co, há uma importância crítica de que não apenas garanta-se a estabilidade e confiabilidade das funcionalidades, mas que também monitore-se ativamente o desempenho da aplicação para que proporcione-se uma experiência contínua e satisfatória aos usuários.

Com a implementação de uma abordagem abrangente de testes automatizados, reconhece-se  que a capacidade de coletar e analisar métricas de desempenho em tempo real é essencial para a identificação de problemas potenciais, para a otimização do desempenho e para que mantenha-se a estabilidade da plataforma. 

A execução dessa iniciativa de monitoramento visa o proporcionamento de insights que sejam valiosos tanto do ponto de vista técnico quanto de negócios, permitindo a tomada de decisões informadas e proativas para a melhoria contínua da plataforma CXM.

Abaixo estará descrito em detalhes o processo de instrumentação da aplicação para coleta de métricas com a utilização de ferramentas de APM - Application Performance Monitoring, bem como a configuração de dashboards para visualização e acompanhamento dessas métricas.
Este processo é importante para a garantia de que possa-se monitorar e entender o desempenho da aplicação em tempo real, proporcionando aos usuários finais uma experiência estável e confiável.

## Ferramentas Utilizadas
**1. APM - Prometheus:** é um sistema de monitoramento de código aberto e orientado a métricas, projetado para a coleta, armazenamento e consulta de métricas de sistemas distribuídos, sendo especialmente adequado para ambientes de nuvem e contêineres, onde a escalabilidade e a eficiência são fundamentais. O Prometheus coleta dados diretamente dos alvos monitorados através de um modelo de coleta de estilo pull, permitindo que os usuários obtenham insights detalhados sobre o desempenho de seus sistemas. Com seu modelo de dados flexível e consultas poderosas, o Prometheus oferece uma solução robusta para monitoramento de infraestrutura e aplicativos em escala. </br>

<img src="./assets/image-5.png" width = 300px>

</br>

**2. Grafana:** é uma plataforma de visualização de dados e criação de dashboards, frequentemente utilizada em conjunto com ferramentas de monitoramento (como o Prometheus, explicado acima). Ele permite aos usuários criar painéis personalizados para monitorar métricas e estatísticas de sistemas em tempo real, fornecendo uma interface flexível e configurável para análise de dados. Com sua capacidade de integração com várias fontes de dados e sua ampla gama de opções de visualização, o Grafana é uma escolha comum para equipes de operações e desenvolvimento monitorarem o desempenho de seus sistemas.

<img src="./assets/image-4.png" width = 300px>


## Justificativa para a escolha de tais ferramentas

No contexto do projeto de automação de testes em funcionalidades da plataforma CXM da TRACK.CO, a escolha do Prometheus e Grafana como ferramentas de monitoramento se baseia em diversos fatores que se alinham às necessidades e objetivos do projeto:

- Compatibilidade com ambientes modernos: considerando que a aplicação opera em um ambiente moderno e distribuído, comumente encontrado em cenários de nuvem e contêineres, o Prometheus se destaca devido à sua capacidade de lidar eficientemente com ambientes escaláveis e dinâmicos.

- Coleta de métricas personalizadas: o Prometheus permite a coleta de métricas personalizadas, o que é importante em um projeto como o atual, em que é preciso que monitore-se métricas específicas relacionadas ao desempenho das funcionalidades da plataforma CXM, como contagem de solicitações, erros e latência.

- Modelo de coleta eficiente: o modelo de coleta do Prometheus (baseado em pull), permite uma coleta eficiente de métricas dos  sistemas, garantindo que possa-se obter insights detalhados sobre o desempenho da aplicação sem um impacto negativo na operação.

- Integração com o Grafana: a integração entre o Prometheus e o Grafana oferece uma solução completa para visualização e monitoramento de métricas. O Grafana (interface intuitiva e flexível) permite a criação de dashboards personalizados para acompanhar o desempenho da aplicação de forma visualmente atraente e informativa.

- Comunidade ativa e suporte: ambas as ferramentas aqui tratadas são projetos de código aberto com comunidades ativas e robustas, o que significa que pode-se contar com um amplo suporte, documentação detalhada e atualizações regulares para garantir o sucesso contínuo do projeto de monitoramento.

## Passos para configuração

A configuração do monitoramento da aplicação envolve os seguintes passos:

#### 1. Instrumentação da aplicação
- Integração da biblioteca do Prometheus ao código-fonte da aplicação e a exposição dos pontos de extremidade de métricas necessários. 

#### 2. Configuração do armazenamento de métricas
- Uma vez instrumentada, a aplicação deve ser configurada para armazenar as métricas coletadas pelo Prometheus. 
- Esta configuração é realizada no arquivo prometheus.yml.

#### 3. Configuração do Grafana
- Com as métricas sendo coletadas pelo Prometheus, o próximo passo é configurar o Grafana para visualização e monitoramento das métricas.
- Deve-se instalar o Grafana em nosso ambiente e configurá-lo para se conectar ao Prometheus como fonte de dados. A criação de painéis personalizados no Grafana para exibir as métricas de desempenho da  aplicação de forma visualmente atraente e informativa é essencial. Além disso, deve-se configurar alertas no Grafana, se necessário, para notificar sobre problemas de desempenho em tempo real.

## Limitações do sistema de monitoramento

É importante reconhecer que nosso sistema de monitoramento enfrenta algumas limitações que podem impactar sua eficácia:

- Devido a restrições de infraestrutura, os dados coletados pelo sistema de monitoramento não são persistentes. O sistema é configurado para realizar a coleta de dados a cada 4 horas, porém, devido à falta de persistência, os dados são perdidos entre as coletas.

- Há também a questão da capacidade de armazenamento insuficiente, uma vez que as tntativas de aumentar o armazenamento root da EC2 para atender às demandas de armazenamento do sistema de monitoramento não apresentaram sucesso. 

Apesar das limitações enfrentadas, nosso sistema de monitoramento continua operacional, desempenhando um papel importante na supervisão do desempenho da aplicação. Reconhecemos que, embora os dados coletados não sejam persistentes devido a intervalos de coleta limitados a cada 4 horas, e que as tentativas de aumentar o armazenamento root da EC2 ainda estejam em processo de melhoria para que funcionem bem, o sistema ainda é capaz de fornecer boas informações sobre o estado atual da plataforma CXM da TRACK.CO.

## Vídeo Explicativo com Demonstração da Ferramenta de APM

Aqui está link para o vídeo que está em uma pasta no drive: https://drive.google.com/drive/folders/1m1CHAJS5IV-E9QXH_tT8pzXl_t4NaHle?usp=sharing


