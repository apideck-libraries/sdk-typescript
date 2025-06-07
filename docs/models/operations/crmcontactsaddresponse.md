# CrmContactsAddResponse

## Example Usage

```typescript
import { CrmContactsAddResponse } from "@apideck/unify/models/operations";

let value: CrmContactsAddResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createContactResponse`                                                                  | [components.CreateContactResponse](../../models/components/createcontactresponse.md)     | :heavy_minus_sign:                                                                       | Contact created                                                                          |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |