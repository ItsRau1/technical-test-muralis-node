# Sobre o Projetos
Projeto é um teste técnico para a empresa Muralis Assessoria e Tecnologia,
onde a tecnologia escolhida por mim para o desenvolvimento foi NodeJS,
aplicação criada para fins de controle de despesas, e desenvolvido nos
padrões de projetos MVC.

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

O formato de resposta utilizado e um JSON, seguindo um padrão sendo assim: </br>

```
{
  data: [] || {}, // Resultado do request executado
  success: True || False, // Boolean identificando se houve sucesso na execução
}
```

Com este padrão de resposta, quando Listado com exito as despesas, o "data" será um Array
populado com todas as despesas referentes ao mês presente, e quando for Criado com exito
uma nova despesa, ele será um objeto com apenas uma chave "idNewFinance" contendo o ID da
despesa recém criada, e quando não houver exito em alguma chamada o "data" será populado
com o erro retornado.
