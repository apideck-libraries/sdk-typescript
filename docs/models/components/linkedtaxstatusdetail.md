# LinkedTaxStatusDetail

## Example Usage

```typescript
import { LinkedTaxStatusDetail } from "@apideck/unify/models/components";

let value: LinkedTaxStatusDetail = {
  country: "US",
  transactionTaxStatus: "taxable",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `country`                      | *string*                       | :heavy_minus_sign:             | The country of the tax status. | US                             |
| `transactionTaxStatus`         | *string*                       | :heavy_minus_sign:             | The transaction tax status.    | taxable                        |