# VaultConnectionsImportResponse

## Example Usage

```typescript
import { VaultConnectionsImportResponse } from "@apideck/unify/models/operations";

let value: VaultConnectionsImportResponse = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createConnectionResponse`                                                                 | [components.CreateConnectionResponse](../../models/components/createconnectionresponse.md) | :heavy_minus_sign:                                                                         | Connection created                                                                         |
| `unexpectedErrorResponse`                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)   | :heavy_minus_sign:                                                                         | Unexpected error                                                                           |