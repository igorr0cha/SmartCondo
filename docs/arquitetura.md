<!-- cspell:disable -->
# 🏗️ Arquitetura do Sistema SmartCondo

## Visão Geral
Este documento descreve a arquitetura de alto nível do SmartCondo, detalhando como os componentes do frontend, backend e banco de dados se comunicam.

## 🧩 Componentes Principais

### 1. Frontend (Cliente)
- **Tecnologia:** React com TypeScript.
- **Responsabilidade:** Interface do usuário, interações, chamadas à API e gerenciamento de estado local.
- **Comunicação:** Realiza requisições HTTP (REST) para o Backend.

### 2. Backend (Servidor)
- **Tecnologia:** Node.js (Express ou NestJS) com TypeScript.
- **Responsabilidade:** Regras de negócio, autenticação, autorização, validação de dados e comunicação com o banco de dados.
- **API:** Expõe endpoints RESTful protegidos por autenticação JWT.

### 3. Banco de Dados
- **Tecnologia:** PostgreSQL.
- **Responsabilidade:** Persistência de dados relacionais (usuários, condomínios, ocorrências, financeiro).

## 🔄 Fluxo de Dados
1. O usuário interage com a interface (React).
2. O Frontend envia uma requisição (ex: `POST /login`) para o Backend.
3. O Backend valida a requisição, processa a lógica de negócio e consulta/atualiza o PostgreSQL.
4. O Banco de Dados retorna os dados para o Backend.
5. O Backend envia uma resposta (JSON) para o Frontend.
6. O Frontend atualiza a visualização para o usuário.

##  diagrama (Exemplo)
*(Insira aqui um diagrama de arquitetura, ex: UML ou Mermaid)*
