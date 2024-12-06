# CreateCreditNoteResponse

Credit Note created

## Example Usage

```typescript
import { CreateCreditNoteResponse } from "@apideck/unify/models/components";

let value: CreateCreditNoteResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "credit-notes",
  operation: "add",
  data: {
    id: "12345",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `statusCode`                                                 | *number*                                                     | :heavy_check_mark:                                           | HTTP Response Status Code                                    | 200                                                          |
| `status`                                                     | *string*                                                     | :heavy_check_mark:                                           | HTTP Response Status                                         | OK                                                           |
| `service`                                                    | *string*                                                     | :heavy_check_mark:                                           | Apideck ID of service provider                               | xero                                                         |
| `resource`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unified API resource name                                    | credit-notes                                                 |
| `operation`                                                  | *string*                                                     | :heavy_check_mark:                                           | Operation performed                                          | add                                                          |
| `data`                                                       | [components.UnifiedId](../../models/components/unifiedid.md) | :heavy_check_mark:                                           | N/A                                                          |                                                              |