# LinkedEmployee

The employee this entity is linked to.

## Example Usage

```typescript
import { LinkedEmployee } from "@apideck/unify/models/components";

let value: LinkedEmployee = {
  id: "12345",
  displayId: "EH",
  displayName: "Ester Henderson",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                             | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | A unique identifier for an object.                                                                                               | 12345                                                                                                                            |
| `displayId`                                                                                                                      | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | The display ID of the employee. For best performance, send this field (the employee number) instead of the GUID in the id field. | EH                                                                                                                               |
| `displayName`                                                                                                                    | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | The display name of the employee.                                                                                                | Ester Henderson                                                                                                                  |