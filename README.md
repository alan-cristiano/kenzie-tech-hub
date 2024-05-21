# Kenzie Tech Hub

## Acesso ao projeto

https://kenzie-tech-hub-alan-cristiano.vercel.app/

## Descrição

-   Projeto front-end desenvolvido em React como Single Page Application que possibilita o registro de habilidades técnicas do desenvolvedor de software cadastrado na plataforma;
-   A aplicação visa demonstrar funcionalidades de validação de formulários com Zod, proteção de rotas e também funcionalidade de auto login;
-   Desenvolvimento conforme padrão TDD (test driven development) implementando testes de componentes e end-to-end
-   Projeto estruturado visando a escalabilidade e melhor manutenção do código. Para isso foi utilizada a padronização de templates, gerenciamento de estado global com Context API e arquitetura Component Based;
-   Comunicação com API Rest para manipulação de dados;
-   Aplicação responsiva para utilização em mobile e desktop;
-   Toasts para alertas principais.

## Tecnologias utilizadas

-   [React](https://react.dev/): Criação da interface de usuário;
-   [Zod](https://zod.dev/): Validação de dados;
-   [Sass](https://sass-lang.com/): Pré processador CSS;
-   [Axios](https://axios-http.com/): HTTP Client para comunicação com a API para manipulação dos dados;
-   Context API: Gerenciamento de estado global;
-   [Cypress](https://www.cypress.io/): Ferramenta para desenvolvimento de testes automáticos. Nesse projeto, utilizado para os testes end-to-end ;
-   [Vitest](https://vitest.dev/): Framework para desenvolvimento de testes automáticos. Nesse projeto, utilizado para os testes de componentes;
-   [Testing-library](https://testing-library.com/): Biblioteca para testes de componentes React;
-   JavaScript: Linguagem de programação utilizada.

## Funcionalidades da aplicação

1. Na rota principal da aplicação é possível efetuar o registro de novos usuários. O cadastro só é possível de ser efetuado caso as condições de cadastro para cada campo do formulário sejam atendidas;
2. Por meio de login é possível acessar o dashboard do usuário. No dashboard é possível de se efetuar as seguintes interações:
    - Visualização das tecnologias cadastradas;
    - Criação de novas tecnologias;
    - Edição de uma tecnologia existente;
    - Exclusão de uma tecnologia existente.
3. A aplicação possui funcionalidade de auto login. Essa funcionalidade permite que, após o primeiro login do usuário, o acesso à página de dashboard seja efetuada sem a necessidade de um novo login por um determinado período de tempo.

## Pré-requisitos

Será necessário possuir as seguintes ferramentas instaladas:

-   [Git](https://git-scm.com/)
-   [Node.js](https://nodejs.org/en)

## Clonando o projeto

```bash
git clone <github template url> <project_name>
```

## Instalando dependências

Instalando dependências de desenvolvimento e produção:

```bash
cd <project_name>
npm install
```

## Inicializando os testes automáticos

Testes de componente:

```bash
npm run test:component
```

Testes end-to-end:

```bash
npm run test:e2e
```

## Inicializando o servidor

O projeto roda, por padrão, na porta 5173.

```bash
npm run dev
```

Navegue até http://localhost:5173 para acessar a aplicação.
