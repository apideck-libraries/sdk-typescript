# UpdateBankAccountResponse

Bank Account updated

## Example Usage

```typescript
import { UpdateBankAccountResponse } from "@apideck/unify/models/components";

let value: UpdateBankAccountResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "bank-accounts",
  operation: "update",
  data: {
    id: "12345",
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | HTTP Response Status Code                                                                       | 200                                                                                             |
| `status`                                                                                        | *string*                                                                                        | :heavy_check_mark:                                                                              | HTTP Response Status                                                                            | OK                                                                                              |
| `service`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | Apideck ID of service provider                                                                  | quickbooks                                                                                      |
| `resource`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | Unified API resource name                                                                       | bank-accounts                                                                                   |
| `operation`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | Operation performed                                                                             | update                                                                                          |
| `data`                                                                                          | [components.UnifiedId](../../models/components/unifiedid.md)                                    | :heavy_check_mark:                                                                              | A object containing a unique identifier for the resource that was created, updated, or deleted. |                                                                                                 |