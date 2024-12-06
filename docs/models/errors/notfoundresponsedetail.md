# NotFoundResponseDetail

Contains parameter or domain specific information related to the error and why it occurred.


## Supported Types

### `string`

```typescript
const value: string = "Could not find widget with id: '123'";
```

### `{ [k: string]: any }`

```typescript
const value: { [k: string]: any } = {
  "not_found": {
    "entity": "widget",
    "id": "123",
  },
};
```

