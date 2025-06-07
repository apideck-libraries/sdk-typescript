# CrmContactsUpdateResponse

## Example Usage

```typescript
import { CrmContactsUpdateResponse } from "@apideck/unify/models/operations";

let value: CrmContactsUpdateResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updateContactResponse`                                                                  | [components.UpdateContactResponse](../../models/components/updatecontactresponse.md)     | :heavy_minus_sign:                                                                       | Contact updated                                                                          |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |