# AccountingTaxRatesAddRequest

## Example Usage

```typescript
import { AccountingTaxRatesAddRequest } from "@apideck/unify/models/operations";

let value: AccountingTaxRatesAddRequest = {
  serviceId: "salesforce",
  taxRate: {
    id: "1234",
    name: "GST on Purchases",
    code: "ABN",
    description: "Reduced rate GST Purchases",
    effectiveTaxRate: 10,
    totalTaxRate: 10,
    taxPayableAccountId: "123456",
    taxRemittedAccountId: "123456",
    components: [
      {
        id: "10",
        name: "GST",
        rate: 10,
        compound: true,
      },
    ],
    type: "NONE",
    reportTaxType: "NONE",
    originalTaxRateId: "12345",
    status: "active",
    rowVersion: "1-12345",
    passThrough: [
      {
        serviceId: "<id>",
        extendPaths: [
          {
            path: "$.nested.property",
            value: {
              "TaxClassificationRef": {
                "value": "EUC-99990201-V1-00020000",
              },
            },
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `raw`                                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Include raw response. Mostly used for debugging purposes                                                                                      |                                                                                                                                               |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `taxRate`                                                                                                                                     | [components.TaxRateInput](../../models/components/taxrateinput.md)                                                                            | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |