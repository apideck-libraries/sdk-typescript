# AccountingLocationsAllResponse

## Example Usage

```typescript
import { AccountingLocationsAllResponse } from "@apideck/unify/models/operations";

let value: AccountingLocationsAllResponse = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `getAccountingLocationsResponse`                                                                       | [components.GetAccountingLocationsResponse](../../models/components/getaccountinglocationsresponse.md) | :heavy_minus_sign:                                                                                     | Locations                                                                                              |
| `unexpectedErrorResponse`                                                                              | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)               | :heavy_minus_sign:                                                                                     | Unexpected error                                                                                       |