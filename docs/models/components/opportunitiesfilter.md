# OpportunitiesFilter

## Example Usage

```typescript
import { OpportunitiesFilter } from "@apideck/sdk/models/components";

let value: OpportunitiesFilter = {
  status: "Completed",
  monetaryAmount: 75000,
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `title`                               | *string*                              | :heavy_minus_sign:                    | Title of the opportunity to filter on | Tesla deal                            |
| `status`                              | *string*                              | :heavy_minus_sign:                    | Status to filter on                   | Completed                             |
| `monetaryAmount`                      | *number*                              | :heavy_minus_sign:                    | Monetary amount to filter on          | 75000                                 |
| `winProbability`                      | *number*                              | :heavy_minus_sign:                    | Win probability to filter on          | 50                                    |
| `companyId`                           | *string*                              | :heavy_minus_sign:                    | Company ID to filter on               | 1234                                  |
| `ownerId`                             | *string*                              | :heavy_minus_sign:                    | Owner ID to filter on                 | 1234                                  |
| `primaryContactId`                    | *string*                              | :heavy_minus_sign:                    | Primary contact ID to filter on       | 1234                                  |