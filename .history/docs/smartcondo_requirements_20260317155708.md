📂 Organização Profissional de Projetos de Software

Para o SmartCondo, a organização deve ser dividida em Documentação, Gestão e Código. Aqui está onde cada coisa se encaixa:

1. O Repositório (GitHub/GitLab)

O código não vive sozinho. O repositório é o lugar central da verdade técnica.

O Arquivo README.md

É a "capa" do seu projeto. É a primeira coisa que alguém vê.

O que entra aqui: Descrição do projeto, Stack Tecnológica (Linguagens, Frameworks, Banco de Dados), instruções de como rodar o projeto localmente (Setup) e link para a documentação completa.

Documentação Técnica (/docs)

Dentro do repositório, criamos uma pasta para detalhes profundos:

Arquitetura: Desenho de como o Front se comunica com o Back.

Dicionário de Dados/DER: Onde você explica as tabelas do banco de dados.

Endpoints da API: (Ou link para o Swagger).

2. Documentação de Produto (O "O Quê")

Geralmente vive em ferramentas como Notion, Google Docs ou o próprio Wiki do GitHub.

PRD (Product Requirements Document)

É o documento que já começamos a esboçar (o seu smartcondo_requirements.md).

O que entra aqui: Visão do negócio, Requisitos Funcionais e Não Funcionais, User Stories e Regras de Negócio (ex: "A reserva só pode ser feita com 48h de antecedência").

3. Gestão de Tarefas (O "Quando")

Para o dia a dia do grupo, usamos o Quadro Kanban (Trello/Jira/GitHub Projects).

Backlog: Todas as ideias e requisitos transformados em "cartões".

To Do (Para fazer): O que decidimos fazer na Sprint atual.

Doing (Fazendo): O que está em desenvolvimento.

Done (Concluído): O que já foi testado e entregue.

4. O Fluxo de Desenvolvimento (Ciclo de Vida)

Como PM, eu sugiro este fluxo para vocês:

Definição: O "Pai do integrante" (Cliente) pede algo.

Refinamento: O grupo discute: "Dá para fazer?", "Como fica o banco de dados para isso?".

Documentação: Atualiza o arquivo de requisitos e o DER.

Desenvolvimento: Alguém assume a tarefa no Trello e codifica no GitHub.

Review/Demo: Mostram para o cliente (ou para o integrante que entende mais do negócio) para validar.

Resumo: Onde coloco o quê?

Informação

Onde colocar?

Stack (Java/React/Postgres)

README.md (na raiz do código).

Requisitos (RF/RNF)

smartcondo_requirements.md (Documento de requisitos).

Modelagem do Banco

Arquivo de Imagem ou PDF na pasta /docs do repositório.

Status das tarefas

Trello ou Quadro do GitHub.

Erros/Bugs encontrados

Aba de "Issues" no GitHub.