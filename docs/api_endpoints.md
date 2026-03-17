<!-- cspell:disable -->
# 🔌 Endpoints da API

Documentação de referência para as rotas da API do SmartCondo. 
*No futuro, recomenda-se o uso de ferramentas como **Swagger/OpenAPI** para documentação automática.*

## 🔐 Autenticação
Todas as rotas (exceto `/auth/login`) exigem o header: `Authorization: Bearer <token>`

---

## 👤 Auth
- `POST /api/auth/login`: Autentica o usuário e retorna o JWT.
- `POST /api/auth/register`: (Opcional) Cria um novo usuário inicial.
- `POST /api/auth/refresh`: Renova o token de acesso.

## 🏢 Unidades (Units)
- `GET /api/units`: Lista todas as unidades.
- `GET /api/units/:id`: Detalhes de uma unidade.
- `POST /api/units`: Cria uma nova unidade (Admin/Síndico).
- `PUT /api/units/:id`: Atualiza dados da unidade.

## 📢 Ocorrências (Occurrences)
- `GET /api/occurrences`: Lista ocorrências (filtro por usuário ou status).
- `POST /api/occurrences`: Abre um novo chamado.
- `PATCH /api/occurrences/:id/status`: Atualiza o status (Ex: de Aberto para Em Andamento).

## 📅 Reservas (Reservations)
- `GET /api/reservations`: Lista reservas para o calendário.
- `POST /api/reservations`: Cria uma nova reserva.
- `DELETE /api/reservations/:id`: Cancela uma reserva.

---

## 📦 Padrão de Resposta (JSON)

**Sucesso (200 OK):**
```json
{
  "success": true,
  "data": { ... }
}
```

**Erro (400/500):**
```json
{
  "success": false,
  "error": "Mensagem descritiva do erro"
}
```
