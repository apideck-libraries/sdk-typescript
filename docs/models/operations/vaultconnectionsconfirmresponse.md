# VaultConnectionsConfirmResponse

## Example Usage

```typescript
import { VaultConnectionsConfirmResponse } from "@apideck/unify/models/operations";

let value: VaultConnectionsConfirmResponse = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `confirmConnectionResponse`                                                                  | [components.ConfirmConnectionResponse](../../models/components/confirmconnectionresponse.md) | :heavy_minus_sign:                                                                           | Connection confirmed                                                                         |
| `unexpectedErrorResponse`                                                                    | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)     | :heavy_minus_sign:                                                                           | Unexpected error                                                                             |