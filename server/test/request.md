# GET "/api/contacts"

```bash
curl http://localhost:5000/api/contacts

```

# GET "/api/contacts/id"

```bash
curl http://localhost:5000/api/contacts/1

```

# POST "/api/contacts"

```bash
curl -X POST http://localhost:5000/api/contacts -H "Content-Type: application/json" -d '{"name":"Shourya","email":"go.dev"}'

```

# PUT "/api/contacts"

```bash
curl -X PUT http://localhost:5000/api/contacts/1

```

# DELETE "/api/contacts"

```bash
curl -X DELETE http://localhost:5000/api/contacts/1

```

# cluster

```bash
curl http://localhost:5000/api/contacts
curl http://localhost:5000/api/contacts/1
curl -X POST http://localhost:5000/api/contacts
curl -X PUT http://localhost:5000/api/contacts/1
curl -X DELETE http://localhost:5000/api/contacts/1
```
