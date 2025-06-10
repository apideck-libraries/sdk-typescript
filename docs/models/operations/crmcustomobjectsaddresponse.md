# CrmCustomObjectsAddResponse

## Example Usage

```typescript
import { CrmCustomObjectsAddResponse } from "@apideck/unify/models/operations";

let value: CrmCustomObjectsAddResponse = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createCustomObjectResponse`                                                                   | [components.CreateCustomObjectResponse](../../models/components/createcustomobjectresponse.md) | :heavy_minus_sign:                                                                             | Custom object created                                                                          |
| `unexpectedErrorResponse`                                                                      | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)       | :heavy_minus_sign:                                                                             | Unexpected error                                                                               |