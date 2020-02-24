Projeto criado para vaga de emprego

## Tarefas

- Um projeto com Spring Boot onde existe uma URL que valide esse token (seu ttl e se ele realmente existe em nosso sistema).
- Um projeto com Spring Boot que será o Backoffice, onde deverá residir o endpoint que faz o cadastro das informações do usuário (nome, email e telefone) e gera o token que é utilizado na validação acima.
- Você pode o código que você escrever para este projeto no GitHub ou enviar zipado pra nós.

### Premissas

- Quando um usuário quer se cadastrar em nossa base de dados, nós disponibilizamos uma URL.
- Essa URL possui um token e esse token é válido por apenas 10 minutos.
- Todas as informações desse usuário já foram coletadas previamente pelo nosso Backoffice. Logo, ao clicar no link, um serviço deve ser chamado, onde é feita a validação desse token e é feita uma busca por essas informações em nosso Backoffice.

### `Token Monkey`
**BackEnd**

projeto spring boot criado para receber o primeiro contato com os dados do cliente onde o mesmo é reponsavel por criar um token para cada cadatro e cada token tem o tempo para ser validado.

### `BackOffice Monkey`
**BackEnd**

projeto spring boot criado para fazer o cadatro dos dados do cliente já validado pelo serviço de geração de token.

### `Monkey Login`
**FrontEnd**

projeto em Reactjs criado para fazer a interação com o usuario onde o cliente insere os dados para cadatro e é feito a comunicação com as duas api's 

*Formulário de cadastro*

![formulario]("imagens/expirado.png")

*Link gerado*

![link]("./imagens/link.png)

*Link expirado*

![expirado]("./imagens/expirado.png")

*Dados do usuário para validar o cadastro*

![validar]("./imagens/validando.png")

*Cadastro realizado com sucesso!*

![sucesso]("./imagens/finalizado.png")

**Agadeço desde já a oportunidade pois foi um projeto onde fiz varias pesquisas e quebrei a cabeça para fazer de uma forma mais simples possivel e eficiente ao que foi pedido, Obrigado !**
