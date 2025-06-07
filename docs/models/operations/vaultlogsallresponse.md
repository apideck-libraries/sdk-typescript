# VaultLogsAllResponse

## Example Usage

```typescript
import { VaultLogsAllResponse } from "@apideck/unify/models/operations";

let value: VaultLogsAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getLogsResponse`                                                                        | [components.GetLogsResponse](../../models/components/getlogsresponse.md)                 | :heavy_minus_sign:                                                                       | Logs                                                                                     |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |