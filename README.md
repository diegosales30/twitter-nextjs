# Clone do Twitter com React, Next.js, Tailwind, Prisma, MongoDB, NextAuth e Vercel

vercel -> https://twitter-nextjs-three.vercel.app/

### Este é um projeto de clone do Twitter que foi construído usando as seguintes tecnologias:

    React - Biblioteca JavaScript para criar interfaces de usuário.
    Next.js - Estrutura React para criar aplicativos da web com renderização do lado do servidor e pré-renderização.
    Tailwind - Estrutura CSS de utilidade para criar rapidamente designs responsivos e personalizados.
    Prisma - ORM de banco de dados para Node.js e TypeScript.
    MongoDB - Banco de dados NoSQL orientado a documentos.
    NextAuth - Biblioteca de autenticação para Next.js.
    Vercel - Plataforma de implantação para projetos da web.

### Como executar o projeto

Antes de tudo, é necessário ter o Node.js instalado em sua máquina. Você pode fazer o download no site oficial: https://nodejs.org/.

    Clone o repositório e acesse o diretório:

bash

git clone git@github.com:diegosales30/twitter-nextjs.git
cd nome-do-projeto

    Instale as dependências do projeto:

bash

npm install
# ou
yarn install

    Configure as variáveis de ambiente:

### Crie um arquivo .env.local na raiz do projeto e adicione as seguintes variáveis de ambiente:

makefile

DATABASE_URL="url-do-banco-de-dados"
JWT_SECRET="segredo-para-gerar-o-token-jwt"

Substitua url-do-banco-de-dados pela URL de conexão com o banco de dados MongoDB e segredo-para-gerar-o-token-jwt por uma string aleatória.

    Inicie o servidor de desenvolvimento:

bash

npm run dev
# ou
yarn dev

    Acesse o aplicativo no seu navegador em http://localhost:3000.

### Como contribuir

Se você quiser contribuir com este projeto, por favor, siga estas etapas:

    Fork este repositório.
    Crie uma nova branch com as suas alterações: git checkout -b minha-branch.
    Faça as suas alterações e faça o commit: git commit -m 'minhas alterações'.
    Envie para a branch original: git push origin minha-branch.
    Crie uma solicitação de pull request.

### Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.
