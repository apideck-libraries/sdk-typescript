# CrmCompaniesDeleteResponse

## Example Usage

```typescript
import { CrmCompaniesDeleteResponse } from "@apideck/unify/models/operations";

let value: CrmCompaniesDeleteResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deleteCompanyResponse`                                                                  | [components.DeleteCompanyResponse](../../models/components/deletecompanyresponse.md)     | :heavy_minus_sign:                                                                       | Company deleted                                                                          |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |