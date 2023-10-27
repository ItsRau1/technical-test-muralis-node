# Sobre o Projetos

Projeto é um teste técnico para a empresa Muralis Assessoria e Tecnologia, onde a tecnologia escolhida por mim para o desenvolvimento foi NodeJS com Typescript, aplicação criada para fins de controle de despesas, e desenvolvido nos padrões de projetos MVC.

# Endpoints

Método | Path | Descrição
---|---|---
GET | /api/despesas | Listar despesas
POST | /api/despesas | Cadastrar uma nova despesa

# Descrição das funcionalidades

### GET Endpoint

O GET endpoint não necessita de parâmetros para sua chamada,
e retornara todos os registros de despesas referentes ao mês
presente.

### POST  Endpoint

O POST Endpoint necessita de parâmetros para sua chamada, sendo
ele um JSON contendo as seguintes informações (descrição, valor, id do tipo de pagamento,
id da categoria) com suas chaves identificadas em inglês, ficando assim:

```
{
  "description": "sua_descricao", // Descrição para a despesa
  "value": 100, // Valor da despesa
  "type": 1, // ID do Tipo de pagamento utilizado na despesa (IDs de todos os tipos disponíveis no próximo tópico)
  "category": 1 // ID da Categoria da despesa (IDs de todas as categorias disponíveis no próximo tópico)
}
```

# Informações sobre os parâmetros

### Tipos de Pagamentos disponíveis

ID |Descrição
---|---
1 | Dinheiro
2 | Débito
3 | Crédito
4 | Pix

### Categorias de Despesas disponíveis

ID |Descrição
---|---
1 | Alimentação
2 | Limpeza
3 | Pets
4 | Lazer

# Formato de Resposta

O formato de resposta utilizado e um JSON, seguindo um padrão, sendo assim: </br>

```
{
  data: [] || {}, // Resultado do request executado
  success: True || False, // Boolean identificando se houve sucesso na execução
}
```

Com este padrão de resposta, quando Listado com exito as despesas, o "data" será um Array
populado com todas as despesas referentes ao mês presente, sendo assim:</br>

```
{
 "data": [
  {
   "descricao": "Despesa 1",
   "valor": 100,
   "forma_de_pagamento": "Dinheiro",
   "categoria": "Lazer"
  },
 ],
 "succes": true
}
```

E quando for Criado com exito
uma nova despesa, ele será um objeto com apenas uma chave "idNewFinance" contendo o ID da
despesa recém criada, sendo assim:</br>

```
{
 "data": {
  "idNewFinance": 5
 },
 "success": true
}
```

E quando não houver exito em alguma chamada o "data" será populado
com o erro retornado, sendo assim.</br>

```
{
 "data": {
  "error": "Error return"
 },
 "success": false
}
```

# Como Usar

Para utilizar esta API em ambiente local você precisara ter já instalado na sua máquina os seguintes pacotes:

- NodeJs (20.9.0)
- Docker
- Git

Caso não tenha eles instalados recomento acessar suas documentações para a instalação de ambos, agora com eles instalados em sua máquina vamos para o passo a passo.

### Linux

É uma maneira bem simples de se conseguir utilizar.

#### Primeiro passo

Abra seu terminal, e clone este repositório em uma pasta de sua preferência com o seguinte comando:

`git clone https://github.com/ItsRau1/technical-test-muralis-node.git`

#### Segundo passo

Entre na pasta do projeto com o seguinte comando em seu terminal

`cd ./technical-test-muralis-node`

Agora execute os seguintes comandos

`npm install`

Logo após

`npm update`

#### Terceiro passo

Também no terminal execute o comando

`docker-compose up -d`

Este comando será responsável pelo Banco de Dados Mysql da API, criando e configurando um Banco de Dados com o nome de "muralis" e todas as tabelas necessárias dentro dele para a execução da aplicação, e persistindo todos os dados na pasta

./docker/mysql

No mesmo terminal agora execute

`npm run dev`

Se tudo tiver ocorrido de maneira correta, a aplicação estará disponível
na Porta 8000 e seu Banco de Dados estará na porta 3306.

### Windows

Também é uma maneira bem simples de se conseguir utilizar.

#### Primeiro passo

Clone este repositório em uma pasta de sua preferência com o seguinte comando

`git clone https://github.com/ItsRau1/technical-test-muralis-node.git`

Ou utilizando o Git GUI, use o de sua preferência.

#### Segundo passo

Entre na pasta do projeto, e logo em seguida abra o PowerShell dentro dela, e execute os seguintes comandos

`npm install`

E também logo após

`npm update`

#### Terceiro passo

Inicie o Docker Desktop e logo após, no PowerShell execute o comando

`docker-compose up -d`

Este comando será responsável pelo Banco de Dados Mysql da API, criando e configurando um Banco de Dados com o nome de "muralis" e todas as tabelas necessárias dentro dele para a execução da aplicação, e persistindo todos os dados na pasta

./docker/mysql

No mesmo PowerShell agora execute

`npm run dev`

Se tudo tiver ocorrido de maneira correta, a aplicação estará disponível
na Porta 8000 e seu Banco de Dados estará na porta 3306.
