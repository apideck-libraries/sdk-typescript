# AtsApplicantsDeleteResponse

## Example Usage

```typescript
import { AtsApplicantsDeleteResponse } from "@apideck/unify/models/operations";

let value: AtsApplicantsDeleteResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deleteApplicantResponse`                                                                | [components.DeleteApplicantResponse](../../models/components/deleteapplicantresponse.md) | :heavy_minus_sign:                                                                       | Applicants                                                                               |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |