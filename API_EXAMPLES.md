# API Usage Examples

## Base URL
```
http://localhost:3000
```

## 1. Create a new TODO
```bash
curl -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -d '{
    "title": "買い物に行く",
    "description": "牛乳とパンを買う",
    "completed": false
  }'
```

Response:
```json
{
  "id": 1,
  "title": "買い物に行く",
  "description": "牛乳とパンを買う",
  "completed": false,
  "createdAt": "2025-12-25T08:15:10.464Z",
  "updatedAt": "2025-12-25T08:15:10.464Z"
}
```

## 2. Get all TODOs
```bash
curl http://localhost:3000/todos
```

Response:
```json
[
  {
    "id": 1,
    "title": "買い物に行く",
    "description": "牛乳とパンを買う",
    "completed": false,
    "createdAt": "2025-12-25T08:15:10.464Z",
    "updatedAt": "2025-12-25T08:15:10.464Z"
  }
]
```

## 3. Get a specific TODO by ID
```bash
curl http://localhost:3000/todos/1
```

Response:
```json
{
  "id": 1,
  "title": "買い物に行く",
  "description": "牛乳とパンを買う",
  "completed": false,
  "createdAt": "2025-12-25T08:15:10.464Z",
  "updatedAt": "2025-12-25T08:15:10.464Z"
}
```

## 4. Update a TODO
```bash
curl -X PATCH http://localhost:3000/todos/1 \
  -H "Content-Type: application/json" \
  -d '{
    "completed": true
  }'
```

Response:
```json
{
  "id": 1,
  "title": "買い物に行く",
  "description": "牛乳とパンを買う",
  "completed": true,
  "createdAt": "2025-12-25T08:15:10.464Z",
  "updatedAt": "2025-12-25T08:15:41.966Z"
}
```

## 5. Delete a TODO
```bash
curl -X DELETE http://localhost:3000/todos/1
```

Response:
```json
{
  "id": 1,
  "title": "買い物に行く",
  "description": "牛乳とパンを買う",
  "completed": true,
  "createdAt": "2025-12-25T08:15:10.464Z",
  "updatedAt": "2025-12-25T08:15:41.966Z"
}
```

## Error Examples

### Missing required field
```bash
curl -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -d '{
    "description": "Missing title"
  }'
```

Response (400 Bad Request):
```json
{
  "message": [
    "title should not be empty",
    "title must be a string"
  ],
  "error": "Bad Request",
  "statusCode": 400
}
```

### Non-existent TODO
```bash
curl http://localhost:3000/todos/999
```

Response (404 Not Found):
```json
{
  "message": "Todo with ID 999 not found",
  "error": "Not Found",
  "statusCode": 404
}
```
