# Detail

Contains parameter or domain specific information related to the error and why it occurred.


## Supported Types

### `string`

```typescript
const value: string = "Missing Header: x-apideck-consumer-id";
```

### `{ [k: string]: any }`

```typescript
const value: { [k: string]: any } = {
  "missing": [
    {
      "x-apideck-consumer-id": "required",
    },
  ],
};
```

