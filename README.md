# Cadastro de Clientes — Backend

API REST para gerenciamento de clientes, desenvolvida no curso Desenvolvimento de Interfaces Web com JavaScript da Universidade do Trabalho Digital (UTD).

## Objetivo

Disponibilizar endpoints para criar, consultar, atualizar e excluir registros de clientes, com persistência em MySQL.

## Tecnologias

- Node.js
- JavaScript
- MySQL
- API REST

## Endpoints

| Método | Rota | Finalidade |
| --- | --- | --- |
| GET | `/api/clientes` | Lista clientes |
| GET | `/api/cliente/:id` | Consulta um cliente |
| POST | `/api/clientes` | Cria um cliente |
| PUT | `/api/cliente/:id` | Atualiza um cliente |
| DELETE | `/api/cliente/:id` | Remove um cliente |

## Modelo de dados

Tabela `clientes`:

| Campo | Tipo |
| --- | --- |
| id | int |
| nome | varchar(255) |
| idade | int |
| email | varchar(255) |
| createdAt | datetime |
| updatedAt | datetime |

## Como executar

```bash
npm install
node server.js
``

Configure o acesso ao MySQL por variáveis de ambiente locais. Não versione credenciais.

## Qualidade e testes

Para validar a API, cubra cenários de criação, consulta, atualização e exclusão, além de dados inválidos, ID inexistente, duplicidade, respostas de erro, CORS e persistência correta no MySQL.

## Projeto relacionado

Interface: [utd-cadastro-cliente-frontend](https://github.com/sergio-ceara/utd-cadastro-cliente-frontend)
