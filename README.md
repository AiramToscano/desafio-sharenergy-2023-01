# Desafio para o processo seletivo SHARENERGY 2023/01

Repositório destinado aos interessados em participar do processo seletivo da SHARENERGY 2023/01. As vagas são voltadas para desenvolvimento de aplicações Web e Mobile.


## 🚀 Começando

Antes de utilizar o projeto, é necessario ter Git, Docker/Docker-compose e npm/yarn instalado na máquina.



## 📃 Sobre
  <p>
    Estruturar uma aplicação web fullstack, dockerizada, cujo objetivo é realizar alguns desafios propostos pela empresa ShareEnergy.
  </p>


## 🛠️ Ferramentas

## - Front-End:
  - React
  - Typescript
  - React Router Dom
  - Context Api
  - React Hooks
  - Css modules
  - Axios
  - Eslint
  - The-mask-input
  
## - Back-End:
  - Node
  - Typescript
  - Express
  - Cors
  - Mongodb
  - md5
  - Eslint
  - Jwt
  - Chai/Mocha
  - mongoose
  - Shell
  - Migrate-mongo

## ⚙️ Como executar

Será necessário que a porta 3000 e 3001 estejam disponíveis para a aplicação, Mongodb usará a porta 27017.

1 - Clone o repositório em uma pasta de sua preferencia 
```
git@github.com:AiramToscano/desafio-sharenergy-2023-01.git
```
2 - Entre na pasta `app` e suba o docker-compose, todas as depêndencias serão automaticamente instaladas
```
npm run compose:up   // para subir a aplicação
npm run compose:down // para parar completamente a aplicação
```
3 - Após rodar o comando, aguarde um pouco que a aplicação irá ficar disponivel nas seguintes rotas:

  `- Front-End: http://localhost:3000`

  `- Back-End: http://localhost:3001`

  <p> Caso algum container tiver com o status unhealty, você poderá acessar a aplicação localmente, instalando as dependências  `npm install`, tanto no <code>/app/frontend</code> quanto no <code>/app/backend</code></p>

  <p>E logo após a instalação das dependências, rode os comandos <code>npm start</code> no Frontend e o comando <code>npm run dev</code> no Backend</p>

  <p>Caso queria rodar localmente, irá precisar ter o mongoDB instalado na máquina ou em um container docker, com o a url `mongodb://0.0.0.0:27017/shareenergy` </p>

# Back-End

- [Documentação](https://github.com/AiramToscano/desafio-sharenergy-2023-01/blob/main/app/backend/README.md)

# Front-End

- [Documentação](https://github.com/AiramToscano/desafio-sharenergy-2023-01/blob/main/app/frontend/README.md)


## ⏯️ Vídeo

- [Apresentação](https://www.youtube.com/watch?v=hN6HHTholEE)

## 🎁 Agradecimentos

- Gostaria de agradecer ShareEnergy por esse desafio, aprendi muito com esse projeto, a cada um novo desafio se torna um novo aprendizado.
