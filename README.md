# Projeto Scouter Z 🐉

> "O poder vem em resposta a uma necessidade, não em resposta a um desejo." - Goku

Bem-vindo ao **Projeto Scouter Z**! Esta não é apenas mais uma aplicação CRUD. É uma plataforma feita por um fã de Dragon Ball para fãs, onde você pode catalogar, criar e compartilhar seus próprios guerreiros, transformações e técnicas do vasto universo DBZ. O objetivo foi aplicar os conhecimentos de desenvolvimento web com Next.js em um projeto divertido e funcional.

## ✨ Visão Geral do Ki

![GIF da Aplicação](https://i.imgur.com/link-do-seu-gif-aqui.gif)

_(DICA: Grave um GIF rápido da sua aplicação funcionando e substitua o link acima. Sites como [Ezgif](https://ezgif.com/video-to-gif) podem te ajudar!)_

## 🚀 Funcionalidades

Este projeto permite que qualquer guerreiro (usuário) eleve seu Ki e realize as seguintes ações:

- **🛡️ Autenticação de Guerreiros:** Sistema completo de Login e Registro usando **JSON Web Tokens (JWT)** para que cada usuário tenha sua própria coleção de personagens de forma segura.
- **🐲 Criação de Personagens:** Dê vida a qualquer personagem do universo DBZ (ou da sua imaginação!), adicionando nome, raça, história e imagem.
- **🔥 Gerenciador de Transformações:** Adicione e gerencie as transformações de seus personagens, do Kaioken ao Instinto Superior.
- **💥 Arsenal de Técnicas:** Catalogue as técnicas especiais de cada guerreiro, como o _Kamehameha_, _Final Flash_ ou o _Makankosappo_.
- **🔭 Scouter Social:** Visualize as "cartas" de personagens criadas por outros usuários na plataforma, descobrindo os guerreiros mais poderosos da comunidade.
- **✏️ Edição e Exclusão:** Controle total sobre suas criações. Você pode atualizar as informações de um personagem ou, se necessário, mandá-lo para o Outro Mundo (deletá-lo).

## 🛠️ Tecnologias Utilizadas

Este projeto foi forjado nas chamas da Sala do Tempo, utilizando as seguintes tecnologias:

- **Framework:** ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
- **Linguagem:** ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- **Estilização:** ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) (Puro)
- **Armazenamento de Dados:** ![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white) (Arquivo local como banco de dados)
- **Autenticação:** ![JSON Web Tokens](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
- **Deploy:** ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## ⚙️ Como Rodar o Projeto (Reunião das Esferas do Dragão)

Para invocar o Shenlong e executar este projeto localmente, siga estes passos:

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```

2.  **Entre na pasta do projeto:**

    ```bash
    cd seu-repositorio
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    ```

4.  **Configure as variáveis de ambiente:**
    - Crie um arquivo chamado `.env.local` na raiz do projeto.
    - Adicione a chave secreta para a geração dos tokens JWT.

    ```bash
    # Conteúdo do .env.local
    JWT_SECRET="seu-segredo-de-ki-com-mais-de-8000-caracteres-e-super-seguro"
    ```

5.  **Verifique o banco de dados local:**
    - Este projeto utiliza um arquivo (ex: `db.json`) para simular um banco de dados. Certifique-se de que ele existe no local especificado no código e, se necessário, adicione dados iniciais a ele.

6.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

7.  Abra seu navegador e acesse `http://localhost:3000`. Seu Scouter estará pronto para uso!

## 📈 Próximos Níveis (Roadmap)

Este projeto ainda não atingiu sua forma final! Ideias para futuras transformações:

- [ ] **Sistema de Nível de Poder:** Calcular automaticamente o nível de poder com base nos atributos e transformações.
- [ ] **Criação de Sagas:** Permitir que os usuários agrupem personagens e eventos em sagas personalizadas.
- [ ] **Sistema de Batalha:** Uma simulação de batalha baseada nos atributos dos personagens (talvez por votação da comunidade?).
- [ ] **Filtros Avançados:** Busca por raça, nível de poder mínimo, ou técnicas específicas.
- [ ] **Página de Perfil de Usuário:** Onde cada "Guerreiro Z" pode ver suas próprias criações e estatísticas.
- [ ] **Migrar para um Banco de Dados Real:** Substituir o arquivo JSON por uma solução mais robusta como PostgreSQL ou MongoDB.

## ✍️ Autor

Feito com muito Ki por **[Seu Nome Aqui]**.

- **LinkedIn:** [https://www.linkedin.com/in/mikael-rocha-bernardes-39b6681a9](https://www.linkedin.com/in/mikael-rocha-bernardes-39b6681a9)
- **GitHub:** [https://github.com/M1kael-Rocha](https://github.com/M1kael-Rocha)

---

> Eleve seu Ki e vamos codar! 🚀
