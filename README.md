# Faux Jobs Board

## Project Uses

- Fastify
- Postgres
- Swagger

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
    "title": "Separating Machine Operators",
    "location": "Rogerton",
    "description": "Ratione error quas ipsam nostrum consequuntur iure nam.",
    "name": "Bins, Schuster and Jast",
    "salary": "83064" // Returned in USD by default without formatting
  }
]
```

## Documentation
The provided config will auto-generate documentation via Swagger as you build. It is currently available via the `/docs` route by default.
You can change the assigned route via the `routePrefix` property. 

```json
// swagger.js
[
  {
    routePrefix: "/docs",
    uiConfig: {
      docExpansion: "list",
      deepLinking: false,
    },
  },
];
```
