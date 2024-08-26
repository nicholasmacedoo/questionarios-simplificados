# Questionários Simplificados

Este projeto foi desenvolvido como parte de uma revisão semanal de Node.js no programa **LAB365 do SENAI de Santa Catarina**, onde sou professor. Durante essa revisão, trabalhamos em um teste técnico aplicado por uma empresa real (Administrador de shopping), cujo desafio era desenvolver uma API para enquetes simplificadas, permitindo a criação de questionários, perguntas e respostas associadas.

## Sobre o Projeto

O objetivo do projeto foi construir uma API robusta e simplificada para a gestão de enquetes. A API permite a criação e gerenciamento de questionários, bem como a vinculação de perguntas e respostas, tudo com um forte foco na segurança e na validação de dados.

### Tecnologias Utilizadas

- **Node.js**: Plataforma principal utilizada para o desenvolvimento da API.
- **Express**: Framework de Node.js utilizado para a criação de rotas e middlewares.
- **Sequelize**: ORM utilizado para interagir com o banco de dados e gerenciar as migrations.
- **JWT (JSON Web Token)**: Implementado para autenticação e controle de sessões dos usuários.
- **RBAC (Role-Based Access Control)**: Utilizado para controle de acesso baseado em funções, garantindo a segurança da aplicação.
- **Whimsical**: Ferramenta utilizada para modelagem e criação do diagrama Entidade-Relacionamento (ER).

## Funcionalidades

- **Gestão de Usuários**: Controle completo sobre os usuários da aplicação.
- **Criação de Questionários**: Possibilidade de criar questionários e associar perguntas a eles.
- **Respostas a Perguntas**: Os usuários podem responder às perguntas dos questionários.
- **Autenticação com JWT e RBAC**: Segurança implementada com autenticação JWT e controle de acesso baseado em funções (RBAC).
- **Validação de Dados**: Middlewares para validação de `Body`, `Params` e `Query Params`.

## Modelo Entidade-Relacionamento (ER)

A imagem a seguir apresenta o modelo ER utilizado no teste técnico original. Durante nossa revisão, criamos e modificamos este modelo utilizando a ferramenta Whimsical.

![Modelo ER](/assets/image.png)

[Projeto Whimsical](https://whimsical.com/revisao-nodejs-lab365-MvcnufiFimQ2JCoctHL3mt)

## Sobre o Professor

Sou **Nicholas Macedo**, professor do programa FuturoDEV na LAB365 no SENAI de Santa Catarina. Tenho vasta experiência em desenvolvimento de software, com foco em Node.js e tecnologias relacionadas. Além de ensinar, também atuo como desenvolvedor, sempre buscando aplicar conhecimentos práticos em sala de aula.

- **LinkedIn**: [linkedin.com/in/nicholasmacedoo](https://linkedin.com/in/nicholasmacedoo)
- **GitHub**: [github.com/nicholasmacedoo](https://github.com/nicholasmacedoo)
