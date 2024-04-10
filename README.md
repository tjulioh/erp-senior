# ERP Senior

### Requisito

- [Node.js](https://nodejs.org/en/download/) ≅v21
- Docker *(Somente se for utilizar o [Docker Compose](docker-compose.yml))*

### Configuração de Teste

Instalar dependencias e iniciar o server.js:
1. `npm install -g @angular/cli`
2. `npm install`
3. `npm start`

Parar construir somente a imagem e atualizar:
1. `docker-compose build`
2. `docker-compose push`

Parar a execução removendo os volumes e imagens:
1. `docker-compose down --rmi all -v`

### Configuração em Produção

Para baixar a imagem e executar:
1. `docker-compose pull`
2. `docker-compose up -d`

Visualizar os registros da imagem:
1. `docker logs angular`
