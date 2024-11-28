# GetInvoiceItemResponse

InvoiceItems

## Example Usage

```typescript
import { GetInvoiceItemResponse } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: GetInvoiceItemResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "invoice-items",
  operation: "one",
  data: {
    id: "123456",
    name: "Model Y",
    description:
      "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
    code: "120-C",
    sold: true,
    purchased: true,
    tracked: true,
    taxable: true,
    inventoryDate: new RFCDate("2020-10-30"),
    type: "inventory",
    salesDetails: {
      unitPrice: 27500.5,
      unitOfMeasure: "pc.",
      taxInclusive: true,
      taxRate: {
        id: "123456",
        code: "N-T",
        name: "GST on Purchases",
        rate: 10,
      },
    },
    purchaseDetails: {
      unitPrice: 27500.5,
      unitOfMeasure: "pc.",
      taxInclusive: true,
      taxRate: {
        id: "123456",
        code: "N-T",
        name: "GST on Purchases",
        rate: 10,
      },
    },
    quantity: 1,
    unitPrice: 27500.5,
    assetAccount: {
      id: "123456",
      name: "Bank account",
      nominalCode: "N091",
      code: "453",
    },
    incomeAccount: {
      id: "123456",
      name: "Bank account",
      nominalCode: "N091",
      code: "453",
    },
    expenseAccount: {
      id: "123456",
      name: "Bank account",
      nominalCode: "N091",
      code: "453",
    },
    trackingCategories: [
      {
        id: "123456",
        name: "New York",
      },
    ],
    active: true,
    rowVersion: "1-12345",
    updatedBy: "12345",
    createdBy: "12345",
    updatedAt: new Date("2020-09-30T07:43:32.000Z"),
    createdAt: new Date("2020-09-30T07:43:32.000Z"),
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

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `statusCode`                                                     | *number*                                                         | :heavy_check_mark:                                               | HTTP Response Status Code                                        | 200                                                              |
| `status`                                                         | *string*                                                         | :heavy_check_mark:                                               | HTTP Response Status                                             | OK                                                               |
| `service`                                                        | *string*                                                         | :heavy_check_mark:                                               | Apideck ID of service provider                                   | xero                                                             |
| `resource`                                                       | *string*                                                         | :heavy_check_mark:                                               | Unified API resource name                                        | invoice-items                                                    |
| `operation`                                                      | *string*                                                         | :heavy_check_mark:                                               | Operation performed                                              | one                                                              |
| `data`                                                           | [components.InvoiceItem](../../models/components/invoiceitem.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |