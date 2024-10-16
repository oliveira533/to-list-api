# Task Manager API

Esta é uma API de gerenciamento de tarefas construída com **Node.js** e **Express**, com monitoramento básico de desempenho, logs e health checks. O sistema permite criar, atualizar, listar e excluir tarefas, além de marcar tarefas como concluídas.

## Funcionalidades

- **CRUD de Tarefas**:
  - **POST** `/tasks`: Criação de uma nova tarefa.
  - **PUT** `/tasks/:id`: Atualização de uma tarefa existente.
  - **DELETE** `/tasks/:id`: Remoção de uma tarefa.
  - **GET** `/tasks`: Listagem de todas as tarefas.
  - **PATCH** `/tasks/:id/complete`: Marcar uma tarefa como concluída.

- **Monitoramento**:
  - **Métricas de Desempenho**: Métricas básicas de performance da aplicação são coletadas e expostas via o endpoint `/metrics`.
  - **Logs de Requisições**: Todas as requisições HTTP são registradas no console com método, URL e timestamp.
  - **Health Check**: O endpoint `/health` verifica se a aplicação está rodando corretamente e retorna um status `200 OK`.

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Mongoose** (MongoDB)
- **Prometheus** (via `express-prom-bundle` para métricas básicas)
- **Jest** (para testes)

## Instalação

### Pré-requisitos

- **Node.js** (v12 ou superior)
- **MongoDB** (local ou em um servidor remoto)

### Passo a Passo

1. Clone o repositório:
   git clone https://github.com/seu-usuario/task-manager-api.git
   cd task-manager-api
3. Instale as dependências do projeto:
   npm install

4. Configure o MongoDB (local ou remoto) e atualize a variável MONGODB_URI no arquivo de configuração (src/config.js ou variáveis de ambiente).

5. Inicie o servidor:
npm start

## Testes
Os testes foram escritos utilizando Jest. Para rodar os testes e gerar o relatório de cobertura, use o seguinte comando:
npm test

## Variáveis de Ambiente
MONGODB_URI: A URL de conexão com o banco de dados MongoDB.
### Exemplo: 
MONGODB_URI=mongodb://localhost:27017/taskManager
