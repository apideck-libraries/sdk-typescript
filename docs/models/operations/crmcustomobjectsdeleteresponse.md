# CrmCustomObjectsDeleteResponse

## Example Usage

```typescript
import { CrmCustomObjectsDeleteResponse } from "@apideck/unify/models/operations";

let value: CrmCustomObjectsDeleteResponse = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `deleteCustomObjectResponse`                                                                   | [components.DeleteCustomObjectResponse](../../models/components/deletecustomobjectresponse.md) | :heavy_minus_sign:                                                                             | Custom object deleted                                                                          |
| `unexpectedErrorResponse`                                                                      | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)       | :heavy_minus_sign:                                                                             | Unexpected error                                                                               |