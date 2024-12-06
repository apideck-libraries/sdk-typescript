# UnauthorizedResponseDetail

Contains parameter or domain specific information related to the error and why it occurred.


## Supported Types

### `string`

```typescript
const value: string = "Missing authentication";
```

### `{ [k: string]: any }`

```typescript
const value: { [k: string]: any } = {
  "statusCode": 401,
  "error": "Unauthorized",
  "message": "Missing authentication",
};
```

