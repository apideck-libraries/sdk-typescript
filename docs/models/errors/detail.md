# Detail

Contains parameter or domain specific information related to the error and why it occurred.


## Supported Types

### `string`

```typescript
const value: string = "Missing property foobar";
```

### `{ [k: string]: any }`

```typescript
const value: { [k: string]: any } = {
  "missing": [
    {
      "foobar": "required",
    },
  ],
};
```

