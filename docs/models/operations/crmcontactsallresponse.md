# CrmContactsAllResponse

## Example Usage

```typescript
import { CrmContactsAllResponse } from "@apideck/unify/models/operations";

let value: CrmContactsAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getContactsResponse`                                                                    | [components.GetContactsResponse](../../models/components/getcontactsresponse.md)         | :heavy_minus_sign:                                                                       | Contacts                                                                                 |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |