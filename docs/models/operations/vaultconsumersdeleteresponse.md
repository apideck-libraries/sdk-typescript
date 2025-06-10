# VaultConsumersDeleteResponse

## Example Usage

```typescript
import { VaultConsumersDeleteResponse } from "@apideck/unify/models/operations";

let value: VaultConsumersDeleteResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deleteConsumerResponse`                                                                 | [components.DeleteConsumerResponse](../../models/components/deleteconsumerresponse.md)   | :heavy_minus_sign:                                                                       | Consumer deleted                                                                         |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |