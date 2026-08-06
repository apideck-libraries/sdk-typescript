# ConflictResponseDetail

Contains parameter or domain specific information related to the error and why it occurred.


## Supported Types

### `string`

```typescript
const value: string = "A connection already exists for the target connector";
```

### `{ [k: string]: any }`

```typescript
const value: { [k: string]: any } = {
  "error": "Conflict",
  "message": "A connection already exists for the target connector",
};
```

