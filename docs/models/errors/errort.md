# ErrorT

Why the operation is unsupported. Absent when there is no reason to give (the connector does not implement the operation). A string when the connector states a reason. An object `{ reason, error }` when a batch request is refused: `reason` is a stable code, `error` a human-readable explanation.


## Supported Types

### `string`

```typescript
const value: string =
  "MYOB has no direct credit note deletion endpoint. Delete a credit note by deleting the underlying invoice via the invoices endpoint.";
```

### `errors.Error2`

```typescript
const value: errors.Error2 = {};
```

