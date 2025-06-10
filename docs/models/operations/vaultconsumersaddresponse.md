# VaultConsumersAddResponse

## Example Usage

```typescript
import { VaultConsumersAddResponse } from "@apideck/unify/models/operations";

let value: VaultConsumersAddResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createConsumerResponse`                                                                 | [components.CreateConsumerResponse](../../models/components/createconsumerresponse.md)   | :heavy_minus_sign:                                                                       | Consumer created                                                                         |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |