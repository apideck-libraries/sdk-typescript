# CrmUsersDeleteResponse

## Example Usage

```typescript
import { CrmUsersDeleteResponse } from "@apideck/unify/models/operations";

let value: CrmUsersDeleteResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deleteUserResponse`                                                                     | [components.DeleteUserResponse](../../models/components/deleteuserresponse.md)           | :heavy_minus_sign:                                                                       | User deleted                                                                             |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |