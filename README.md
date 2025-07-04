# Faux Jobs Board

## Project Uses

- Fastify
- Postgres

## Routes

`GET: /jobs`
- Returns all jobs in the database with name, company, location, salary, and description

`GET: /jobs/:id`
- Returns singular job by id

### Sample Response
```json
[
  {
    "id": "1",
    "name": "Bins, Schuster and Jast",
    "salary": "$83,064 USD",
    "description": "Ratione error quas ipsam nostrum consequuntur iure nam."
  }
]
```

