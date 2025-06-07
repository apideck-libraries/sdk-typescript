# VaultConnectionsOneResponse

## Example Usage

```typescript
import { VaultConnectionsOneResponse } from "@apideck/unify/models/operations";

let value: VaultConnectionsOneResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getConnectionResponse`                                                                  | [components.GetConnectionResponse](../../models/components/getconnectionresponse.md)     | :heavy_minus_sign:                                                                       | Connection                                                                               |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |