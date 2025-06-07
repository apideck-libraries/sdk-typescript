# VaultConsumersAllResponse

## Example Usage

```typescript
import { VaultConsumersAllResponse } from "@apideck/unify/models/operations";

let value: VaultConsumersAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getConsumersResponse`                                                                   | [components.GetConsumersResponse](../../models/components/getconsumersresponse.md)       | :heavy_minus_sign:                                                                       | Consumers                                                                                |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |