# VaultConnectionsAllResponse

## Example Usage

```typescript
import { VaultConnectionsAllResponse } from "@apideck/unify/models/operations";

let value: VaultConnectionsAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getConnectionsResponse`                                                                 | [components.GetConnectionsResponse](../../models/components/getconnectionsresponse.md)   | :heavy_minus_sign:                                                                       | Connections                                                                              |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |