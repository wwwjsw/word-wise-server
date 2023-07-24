<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Structure
- app.module.ts: O arquivo raiz que configura o módulo principal da aplicação.
- main.ts: O ponto de entrada da aplicação que inicializa o servidor.
- controllers: Pasta que contém os controladores responsáveis por lidar com as requisições HTTP e definir os endpoints da API.
- providers: Pasta que contém provedores de serviços ou dependências utilizados pela aplicação.
- modules: Pasta onde os módulos da aplicação são definidos, agrupando funcionalidades relacionadas.
- services: Pasta que contém os serviços da aplicação, responsáveis pela lógica de negócio.
- repositories: Pasta que contém os repositórios responsáveis pela interação com a camada de persistência de dados.
- interfaces: Pasta que contém as interfaces TypeScript utilizadas pela aplicação.
- dtos: Pasta que contém os Data Transfer Objects (DTOs), usados para transferir dados entre diferentes camadas da aplicação.
- entities: Pasta que contém as entidades que representam os modelos de dados da aplicação.
- utils: Pasta que contém funções ou classes utilitárias.

```bash
  src
  ├── 📜app.module.ts # Entry module
  ├── 📜main.ts # NestJs factory
  ├── 📂controllers
  │   └── ... All server Controllers
  ├── 📂providers
  │   └── ...
  ├── 📂modules
  │   └── ...
  ├── 📂services
  │   └── ... All server Services
  ├── 📂repositories
  │   └── ...
  ├── 📂interfaces
  │   └── ...
  ├── 📂dtos
  │   └── ...
  ├── 📂entities
  │   └── ...
  └── 📂utils
      └── ...
```
