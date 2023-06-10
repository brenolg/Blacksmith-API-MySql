# Trybesmith API
Este projeto consiste no desenvolvimento de uma API em TypeScript para um CRUD (Create, Read, Update e Delete) de itens medievais. Através dessa API, criei endpoints que interagem com um banco de dados utilizando o Sequelize.

Utilizei a tipagem do TypeScript para tornar o código mais robusto e compreensível. Aprendi a declarar variáveis e funções com tipagens TypeScript, além de construir uma API Node Express com essa linguagem.

Essa experiência me permitiu praticar a sintaxe do TypeScript e aplicar os conhecimentos adquiridos na seção dedicada a essa linguagem. Foi uma oportunidade de consolidar meu aprendizado e seguir as melhores práticas de desenvolvimento.

## Funcionalidades

- Cadastro de Produtos: A API permitiria o cadastro de produtos, onde as informações como nome, descrição, preço, categoria, entre outros, seriam enviadas por meio de um endpoint específico.

- Listagem de Produtos: A API disponibilizaria um endpoint para listar todos os produtos cadastrados, retornando suas informações completas, como nome, descrição, preço, etc.

- Cadastro de Pessoas Usuárias: Seria possível cadastrar pessoas usuárias por meio de um endpoint dedicado. As informações necessárias, como nome, e-mail, senha, endereço, entre outros, seriam enviadas para o servidor.

- Listagem de Pedidos: A API teria um endpoint para listar todos os pedidos realizados, exibindo informações relevantes, como o número do pedido, produtos incluídos, valor total, status do pedido, entre outros.

- Login de Pessoas Usuárias: Seria disponibilizado um endpoint para o login de pessoas usuárias. Os usuários poderiam fornecer suas credenciais, como e-mail e senha, e a API autenticaria essas informações para permitir o acesso aos recursos protegidos.

## Tecnologias utilizadas
- APIs REST
- Typescript
- MSC Architeture
- SQL
- Express
- C.R.U.D
- JWT
- Middlewares
- Node.js

## Banco de dados
<details close>
    <summary><strong> Diagrama de Entidade-Relacionamento</strong></summary>
<img src='./trybesmith.png'>
</details>

## Requisitos

1. Crie um endpoint para o cadastro de produtos
2. Crie um endpoint para a listagem de produtos
3. Crie um endpoint para o cadastro de pessoas usuárias
4. Crie um endpoint para listar todos os pedidos
5. Crie um endpoint para o login de pessoas usuárias

</details>

## Instalação do projeto localmente

Para instalar e executar o projeto localmente, você precisa ter o Docker instalado na sua máquina. Depois, siga os seguintes passos:

Clone o repositório do GitHub:
```bash
git clone git@github.com:brenolg/Trybesmith-API.git
```
Rode os serviços node e db:
```bash
docker-compose up -d
```
Rode o container one_for_all via CLI ou abri-lo no VS Code
```bash
docker exec -it trybesmith bash
```
  Instale as dependências usando
```bash
npm install
```
- O arquivo Trybesmith.sql contém as queries que criam e populam o banco 
- Execute a aplicação com npm run dev
- Execute as rotas como preferir

## Agradecimentos
Este projeto foi desenvolvido como parte do curso de Desenvolvimento de Software da Trybe. Agradeço à Trybe pela oportunidade de aprender e praticar SQL e outras tecnologias.
