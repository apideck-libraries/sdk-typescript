# CrmLeadsDeleteResponse

## Example Usage

```typescript
import { CrmLeadsDeleteResponse } from "@apideck/unify/models/operations";

let value: CrmLeadsDeleteResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deleteLeadResponse`                                                                     | [components.DeleteLeadResponse](../../models/components/deleteleadresponse.md)           | :heavy_minus_sign:                                                                       | Lead deleted                                                                             |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |