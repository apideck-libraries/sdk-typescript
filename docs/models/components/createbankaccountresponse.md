# CreateBankAccountResponse

Bank Account created

## Example Usage

```typescript
import { CreateBankAccountResponse } from "@apideck/unify/models/components";

let value: CreateBankAccountResponse = {
  statusCode: 201,
  status: "Created",
  service: "quickbooks",
  resource: "bank-accounts",
  operation: "add",
  data: {
    id: "12345",
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | HTTP Response Status Code                                                                       | 201                                                                                             |
| `status`                                                                                        | *string*                                                                                        | :heavy_check_mark:                                                                              | HTTP Response Status                                                                            | Created                                                                                         |
| `service`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | Apideck ID of service provider                                                                  | quickbooks                                                                                      |
| `resource`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | Unified API resource name                                                                       | bank-accounts                                                                                   |
| `operation`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | Operation performed                                                                             | add                                                                                             |
| `data`                                                                                          | [components.UnifiedId](../../models/components/unifiedid.md)                                    | :heavy_check_mark:                                                                              | A object containing a unique identifier for the resource that was created, updated, or deleted. |                                                                                                 |