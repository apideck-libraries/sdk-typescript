# VaultConnectionsTokenResponse

## Example Usage

```typescript
import { VaultConnectionsTokenResponse } from "@apideck/unify/models/operations";

let value: VaultConnectionsTokenResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getConnectionResponse`                                                                  | [components.GetConnectionResponse](../../models/components/getconnectionresponse.md)     | :heavy_minus_sign:                                                                       | Connection                                                                               |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |