# BatchItemResultWarnings

## Example Usage

```typescript
import { BatchItemResultWarnings } from "@apideck/unify/models/components";

let value: BatchItemResultWarnings = {
  type: "currency_not_configured",
  operation: "invoicesAdd",
  message:
    "Currency \"CAD\" is not configured for this organization -- the request was sent without currency_id.",
  statusCode: 200,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `type`                                                                                              | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 | currency_not_configured                                                                             |
| `operation`                                                                                         | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 | invoicesAdd                                                                                         |
| `message`                                                                                           | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 | Currency "CAD" is not configured for this organization -- the request was sent without currency_id. |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 | 200                                                                                                 |
| `error`                                                                                             | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |                                                                                                     |