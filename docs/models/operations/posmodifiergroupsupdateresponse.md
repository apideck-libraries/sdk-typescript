# PosModifierGroupsUpdateResponse


## Supported Types

### `components.UpdateModifierGroupResponse`

```typescript
const value: components.UpdateModifierGroupResponse = {
  statusCode: 200,
  status: "OK",
  service: "square",
  resource: "ModifierGroups",
  operation: "update",
  data: {
    id: "12345",
  },
};
```

### `components.UnexpectedErrorResponse`

```typescript
const value: components.UnexpectedErrorResponse = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: {},
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

