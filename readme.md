
# Quer Apostar - Backend API

## Descrição do Projeto
O projeto "Quer Apostar" é uma API de apostas, oferecendo três principais rotas: /participants, /games, e /bets. Aqui você encontrará informações sobre como configurar e executar o projeto, bem como os endpoints disponíveis em cada rota.

## Instruções de Configuração e Execução
### 1- Instalação de Dependências

Antes de iniciar, certifique-se de ter o Node.js e o npm instalados no seu sistema. Em seguida, execute o seguinte comando para instalar as dependências:

```bash 
npm install 
```

### 2- Configuração do Arquivo .env

Crie dois arquivos ```.env```, um para o ambiente de desenvolvimento e outro para o ambiente de teste, seguindo o formato fornecido em ```.env.example```. Preencha as variáveis de ambiente necessárias.

### 3- Execução de Migrações do Banco de Dados

Execute as migrações do banco de dados usando os seguintes comandos:

* Desenvolvimento:

    ```bash
    npm run dev:migration:run
    ```
* Geração de Migração (se necessário):

    ```bash
    npm run dev:migration:generate
    ```
* Teste:

    ```bash
    npm run test:migration:run
    ```
* Geração de Migração para Teste (se necessário):

    ```bash
    npm run test:migration:generate
    ```
## Endpoints da API
### ```/participants```

* POST /participants

    * Envia informações para criar um novo participante.
        ```json
        {
        "name": "Nome do Participante",
        "balance": 1000
        }
        ```
* GET /participants

    * Retorna uma lista de todos os participantes.

### ```/games```
* POST /games

    * Envia informações para criar um novo jogo.
        ```json
        {
        "homeTeamScore": 2,
        "awayTeamScore": 1,
        "amountBet": 1000,
        "gameId": 1,
        "participantId": 1
        }
        ```
    * Retorna informações sobre o jogo criado.
        ```json
        {
        "id": 1,
        "createdAt": "timestamp",
        "updatedAt": "timestamp",
        "homeTeamScore": 2,
        "awayTeamScore": 1,
        "amountBet": 1000,
        "gameId": 1,
        "participantId": 1,
        "status": "PENDING",
        "amountWon": null
        }
        ```
* GET /games

    * Retorna uma lista de todos os jogos.

* POST /games/:id/finish

    * Finaliza um jogo enviando os resultados.
        ```json
        {
        "homeTeamScore": 2,
        "awayTeamScore": 1
        }
        ```
    * Retorna informações sobre o jogo finalizado.
```json
{
  "id": 1,
  "createdAt": "timestamp",
  "updatedAt": "timestamp",
  "homeTeamName": "Nome Time da Casa",
  "awayTeamName": "Nome Time Visitante",
  "homeTeamScore": 2,
  "awayTeamScore": 1,
  "isFinished": true
}
```
* GET /games/:id

    * Retorna informações sobre um jogo específico.

## ```/bets```
* POST /bets
    * Envia informações para criar uma nova aposta.
        ```json
        {
        "homeTeamScore": 2,
        "awayTeamScore": 1,
        "amountBet": 1000,
        "gameId": 1,
        "participantId": 1
        }
        ```
    * Retorna informações sobre a aposta criada.
        ```json
        {
        "id": 1,
        "createdAt": "timestamp",
        "updatedAt": "timestamp",
        "homeTeamScore": 2,
        "awayTeamScore": 1,
        "amountBet": 1000,
        "gameId": 1,
        "participantId": 1,
        "status": "PENDING",
        "amountWon": null
        }
        ```
# Deploy do back feito no [render](https://dashboard.render.com/).
Segue o link do Deploy: https://quer-apostar-itxm.onrender.com
# 

Espero que estas instruções sejam úteis para configurar e utilizar a API "Quer Apostar". Se houver alguma dúvida ou problema, sinta-se à vontade para entrar em contato.
