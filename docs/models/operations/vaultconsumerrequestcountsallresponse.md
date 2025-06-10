# VaultConsumerRequestCountsAllResponse

## Example Usage

```typescript
import { VaultConsumerRequestCountsAllResponse } from "@apideck/unify/models/operations";

let value: VaultConsumerRequestCountsAllResponse = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                         | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `consumerRequestCountsInDateRangeResponse`                                                                                 | [components.ConsumerRequestCountsInDateRangeResponse](../../models/components/consumerrequestcountsindaterangeresponse.md) | :heavy_minus_sign:                                                                                                         | Consumers Request Counts within Date Range                                                                                 |
| `unexpectedErrorResponse`                                                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)                                   | :heavy_minus_sign:                                                                                                         | Unexpected error                                                                                                           |