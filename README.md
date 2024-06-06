# Inteli - Instituto de Tecnologia e Liderança 

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="./docs/assets/inteli_logo.png" alt="Inteli - Instituto de Tecnologia e Liderança" width="300px"></a>
</p>

# Construção de testes automatizados e controle de qualidade de software

## Grupo 1 - Só Track.co boa

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="./docs/assets/logo_grupo.png" alt="Logo do grupo" width="300px"></a>
</p>

## 🚀 Integrantes
- <a href="https://www.linkedin.com/in/felipe-gomes-dev/">Felipe Gomes</a> 
- <a href="https://www.linkedin.com/in/liviapcoutinho/">Livia Coutinho</a> 
- <a href="https://www.linkedin.com/in/lu%C3%ADsa-leite-681443230/">Luísa Leite</a>
- <a href="https://www.linkedin.com/in/luiz-k-alencar/">Luiz Alencar</a> 
- <a href="https://www.linkedin.com/in/marcos-vinicius-166531239/">Marcos Moura</a>
- <a href="https://www.linkedin.com/in/matheusmacedosantos/">Matheus Macedo</a> 
- <a href="https://www.linkedin.com/in/priscila-falc%C3%A3o-3435a1244/">Priscila Falcão</a> 
- <a href="https://www.linkedin.com/in/victor-severiano-de-carvalho/">Victor Carvalho</a> 


## Sumário

| ReadMe |
|---|
|[Histórico de versão](#🗓️-histórico-de-versão)|
|[Descrição](#📝-descrição)|
|[Como começar](#-como-começar)|
|[Estrutura de pastas](#-estrutura-de-pastas)|
|[Licença/License](#-licençalicense) |
|[Referências](#-referências)|

| Projeto |
|---|
|[Documentação dos Testes](./docs/Testes.md)|
|[Documentação da Arquitetura](./docs/Arquitetura.md)|
|[Documentação de Métricas](./docs/Metricas.md)|
| [Documentação da Interface](./docs/Prototipacao.md)|
|[Documentação de Plano de Delivery](./docs/Delivery.mds)|



## 🗓️ Histórico de versão

| Data de entrega | Entrega |
|----|----|
| 18/02/2024 (Sprint 1) | Entendimento do problema |
| | Definição dos requisitos |
| | Model C4|
| | Prototipação da interface|
| | Plano e definição dos testes|
| 03/03/2024 (Sprint 2)| Desenvolvimento do front-end |
| | Desenvolvimento do back-end |
| | Implementação do TDD |
| | Definição das métricas de qualidade |
| 17/03/2024 (Sprint 3) | Implantação de SonarQube |
| | Testes de front-end |
| | Testes de integração|
| | Sistema de autenticação |
| 29/03/2024 (Sprint 4)|  Teste de carga |
| | Infográfico da solução|
| |Dashboard de monitoramento da aplicação |
| 11/04/2024 (Sprint 5)| Relatório final|
| | Refatoração|
| | Plano de Sustentação|
| | Plano de Delivery|

## 📝 Descrição

A implementação de testes automatizados nessas funcionalidades críticas não apenas reduzirá a probabilidade de regressões durante os deploys, mas também permitirá uma rápida detecção de problemas potenciais, contribuindo para a identificação precoce de bugs. Isso, por sua vez, resultará em uma melhoria substancial na confiança do cliente, pois a plataforma será percebida como mais robusta e confiável. Para endereçar essa questão de forma eficaz, é crucial focar nas funcionalidades CORE, especificamente em Pesquisas, Dashboards, Distribuição e Interação, uma vez que essas telas desempenham um papel central em nossa plataforma

## 📁 Estrutura de Pastas

Este repositório contém várias pastas e arquivos importantes. Aqui está um resumo de cada um deles:

- `README.md`: Este arquivo serve como um guia e explicação geral sobre o projeto. É o documento que você está lendo agora.

- `docs`: Neste diretório há toda a documentação do desenvolvimento do projeto e outros arquivos relacionados a documentação.

  - `assets`: Pasta que contém arquivos de mídia, contando principalmente com imagens, gráficos e outros.

- `src`: Pasta que contém o código-fonte do projeto. Aqui você encontrará todos os scripts e arquivos de código necessários para executar e entender o funcionamento do projeto.

  - `backend` : A pasta contém as configurações para o servidor do projeto, além da aplicação de regras de negócio.

  - `frontend` : A pasta contém as configurações para a interface do projeto, apresentando a integração com o servidor e com métodos de autenticação.


## ⚙️ Como iniciar

Para executar o projeto é necessário inicialmente a instalação de todas as dependências necessárias, para isso, no terminal entre na pasta frontend e execute o comando ```npm i```.

Faça similarmente dentro da pasta backend.

Tendo as dependências necessárias instaladas, o projeto já pode ser executado conforme os passos a seguir:

- Para executar o projeto, é necessário iniciar o front-end com o comando ```yarn run dev``` ou ```npm run dev``` no diretório src/frontend;

- Contudo, para executar o back-end, é exigido ter a ferramenta Docker instalada em sua máquina. 
    - Execute ```docker-compose up``` no diretório src/backend;
    - Após garantir que todos os containers estão iniciados, é possível abrir o Prometheus na porta 9090, o Grafana na porta 3000, o RabbitMQ na porta 15672 e o back-end em si na porta 3001.

O programa já está no ar pronto para ser utilizado!

## 📋 Licença/License

<a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/2023M8T2-Inteli/grupo1">Inteli</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International</a>. <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"></p>

## 🔎 Referências
- https://www.cypress.io/
- https://jestjs.io/pt-BR/
- https://track-hmg.com/
- https://refactoring.guru/design-patterns
- https://github.com/willsoto/nestjs-prometheus
- https://grafana.com/