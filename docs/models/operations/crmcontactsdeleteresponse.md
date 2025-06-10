# CrmContactsDeleteResponse

## Example Usage

```typescript
import { CrmContactsDeleteResponse } from "@apideck/unify/models/operations";

let value: CrmContactsDeleteResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deleteContactResponse`                                                                  | [components.DeleteContactResponse](../../models/components/deletecontactresponse.md)     | :heavy_minus_sign:                                                                       | Contact deleted                                                                          |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |