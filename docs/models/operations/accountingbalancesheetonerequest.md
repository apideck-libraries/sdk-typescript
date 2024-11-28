# AccountingBalanceSheetOneRequest

## Example Usage

```typescript
import { AccountingBalanceSheetOneRequest } from "@apideck/unify/models/operations";

let value: AccountingBalanceSheetOneRequest = {
  serviceId: "salesforce",
  passThrough: {
    "search": "San Francisco",
  },
  filter: {
    startDate: "2021-01-01",
    endDate: "2021-12-31",
    periodCount: 3,
    periodType: "month",
  },
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       | Example                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `serviceId`                                                                                                                                       | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.     | salesforce                                                                                                                                        |
| `passThrough`                                                                                                                                     | Record<string, *any*>                                                                                                                             | :heavy_minus_sign:                                                                                                                                | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads | {<br/>"search": "San Francisco"<br/>}                                                                                                             |
| `filter`                                                                                                                                          | [components.BalanceSheetFilter](../../models/components/balancesheetfilter.md)                                                                    | :heavy_minus_sign:                                                                                                                                | Apply filters                                                                                                                                     | {<br/>"start_date": "2021-01-01",<br/>"end_date": "2021-12-31",<br/>"period_count": 3,<br/>"period_type": "month"<br/>}                           |
| `raw`                                                                                                                                             | *boolean*                                                                                                                                         | :heavy_minus_sign:                                                                                                                                | Include raw response. Mostly used for debugging purposes                                                                                          |                                                                                                                                                   |