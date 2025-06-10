# CrmCustomObjectsUpdateResponse

## Example Usage

```typescript
import { CrmCustomObjectsUpdateResponse } from "@apideck/unify/models/operations";

let value: CrmCustomObjectsUpdateResponse = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `updateCustomObjectResponse`                                                                   | [components.UpdateCustomObjectResponse](../../models/components/updatecustomobjectresponse.md) | :heavy_minus_sign:                                                                             | Custom object updated                                                                          |
| `unexpectedErrorResponse`                                                                      | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)       | :heavy_minus_sign:                                                                             | Unexpected error                                                                               |