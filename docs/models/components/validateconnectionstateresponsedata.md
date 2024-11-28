# ValidateConnectionStateResponseData

## Example Usage

```typescript
import { ValidateConnectionStateResponseData } from "@apideck/unify/models/components";

let value: ValidateConnectionStateResponseData = {
  id: "crm+salesforce",
  state: "authorized",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_minus_sign:                                                       | The unique identifier of the connection.                                 | crm+salesforce                                                           |
| `state`                                                                  | [components.ConnectionState](../../models/components/connectionstate.md) | :heavy_minus_sign:                                                       | [Connection state flow](#section/Connection-state)                       | authorized                                                               |