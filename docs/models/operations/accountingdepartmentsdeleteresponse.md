# AccountingDepartmentsDeleteResponse

## Example Usage

```typescript
import { AccountingDepartmentsDeleteResponse } from "@apideck/unify/models/operations";

let value: AccountingDepartmentsDeleteResponse = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `deleteAccountingDepartmentResponse`                                                                           | [components.DeleteAccountingDepartmentResponse](../../models/components/deleteaccountingdepartmentresponse.md) | :heavy_minus_sign:                                                                                             | Department deleted                                                                                             |
| `unexpectedErrorResponse`                                                                                      | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)                       | :heavy_minus_sign:                                                                                             | Unexpected error                                                                                               |