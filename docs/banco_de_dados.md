<!-- cspell:disable -->
# 🗄️ Dicionário de Dados e Modelo (DER)

Este documento serve como referência para a estrutura do banco de dados **PostgreSQL** do SmartCondo.

## 🗺️ Diagrama Entidade-Relacionamento (DER)

> **Local do Arquivo:** Coloque a imagem do DER aqui ou na pasta `/docs/assets/`.
> *(Exemplo: `![DER do SmartCondo](./assets/der_v1.png)`)*

---

## 📋 Dicionário de Dados

Abaixo, descrevemos as principais tabelas e seus campos.

### 1. `users` (Usuários)
Armazena os dados de login e perfil de todos os usuários (Síndicos, Moradores, Porteiros).
- **id** (PK): UUID.
- **name**: Nome completo.
- **email**: Email para login.
- **password_hash**: Senha criptografada.
- **role**: Tipo de usuário (`ADMIN`, `SINDIC`, `RESIDENT`, `PORTER`).

### 2. `units` (Unidades/Apartamentos)
Representa as unidades do condomínio.
- **id** (PK): UUID.
- **block**: Bloco/Torre.
- **number**: Número do apartamento.
- **owner_id** (FK): Referência ao usuário proprietário.

### 3. `occurrences` (Ocorrências/Chamados)
Registro de problemas, reclamações ou sugestões.
- **id** (PK): UUID.
- **title**: Título da ocorrência.
- **description**: Detalhes do problema.
- **status**: (`OPEN`, `IN_PROGRESS`, `CLOSED`).
- **user_id** (FK): Quem abriu o chamado.

### 4. `reservations` (Reservas)
Agendamento de áreas comuns.
- **id** (PK): UUID.
- **area**: Nome da área (ex: "Salão de Festas").
- **date**: Data da reserva.
- **user_id** (FK): Quem reservou.

*(Adicione mais tabelas conforme o desenvolvimento avançar)*
