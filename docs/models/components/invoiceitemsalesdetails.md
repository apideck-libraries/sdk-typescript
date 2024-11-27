# InvoiceItemSalesDetails

## Example Usage

```typescript
import { InvoiceItemSalesDetails } from "@apideck/sdk/models/components";

let value: InvoiceItemSalesDetails = {
  unitPrice: 27500.5,
  unitOfMeasure: "pc.",
  taxInclusive: true,
  taxRate: {
    id: "123456",
    rate: 10,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `unitPrice`                                                                    | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 27500.5                                                                        |
| `unitOfMeasure`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | Description of the unit type the item is sold as, ie: kg, hour.                | pc.                                                                            |
| `taxInclusive`                                                                 | *boolean*                                                                      | :heavy_minus_sign:                                                             | Amounts are including tax                                                      | true                                                                           |
| `taxRate`                                                                      | [components.LinkedTaxRateInput](../../models/components/linkedtaxrateinput.md) | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |