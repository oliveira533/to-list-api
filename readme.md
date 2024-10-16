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
    '''git clone https://github.com/seu-usuario/task-manager-api.git cd task-manager-api'''
2. Instale as dependências do projeto:

bash
Copiar código
npm install
Configure o MongoDB (local ou remoto) e atualize a variável MONGODB_URI no arquivo de configuração (src/config.js ou variáveis de ambiente).

Inicie o servidor:

bash
Copiar código
npm start
O servidor estará rodando por padrão em http://localhost:3000.

Endpoints
CRUD de Tarefas
Criar uma nova tarefa

POST /tasks

Body (JSON):

json
Copiar código
{
  "title": "Minha nova tarefa",
  "description": "Descrição da tarefa",
  "completed": false
}
Atualizar uma tarefa existente

PUT /tasks/:id

Body (JSON):

json
Copiar código
{
  "title": "Tarefa atualizada",
  "description": "Descrição atualizada",
  "completed": true
}
Excluir uma tarefa

DELETE /tasks/:id

Listar todas as tarefas

GET /tasks

Marcar uma tarefa como concluída

PATCH /tasks/:id/complete

Monitoramento
Métricas de Desempenho

GET /metrics

Exibe métricas básicas de desempenho como número de requisições, tempo de resposta, status codes, etc.

Health Check

GET /health

Verifica o estado de saúde da aplicação. Retorna 200 OK com { status: "UP" } se estiver tudo funcionando corretamente.

Testes
Os testes foram escritos utilizando Jest. Para rodar os testes e gerar o relatório de cobertura, use o seguinte comando:

bash
Copiar código
npm test
Os testes incluem casos de sucesso e falha para todas as operações de CRUD de tarefas.

Variáveis de Ambiente
MONGODB_URI: A URL de conexão com o banco de dados MongoDB. Exemplo:

bash
Copiar código
MONGODB_URI=mongodb://localhost:27017/taskManager
Estrutura do Projeto
bash
Copiar código
src/
 ├── config.js          # Configurações do banco de dados
 ├── models/
 │   └── Task.js        # Modelo da tarefa
 ├── app.js             # Configuração do servidor Express e rotas
 ├── server.js          # Inicialização do servidor
 ├── tests/
 │   └── task.test.js   # Testes unitários e de integração