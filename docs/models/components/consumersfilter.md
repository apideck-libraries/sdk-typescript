# ConsumersFilter

## Example Usage

```typescript
import { ConsumersFilter } from "@apideck/unify/models/components";

let value: ConsumersFilter = {
  consumerId: "test-consumer",
  search: "john",
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     | Example                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `consumerId`                                                                                                                    | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Filter by consumer ID using a prefix match (beginsWith).                                                                        | test-consumer                                                                                                                   |
| `search`                                                                                                                        | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Search across consumer ID, email, account name, and user name using a substring match (contains). Matches any field (OR logic). | john                                                                                                                            |