# AccountingInvoiceItemsAddRequest

## Example Usage

```typescript
import { AccountingInvoiceItemsAddRequest } from "@apideck/unify/models/operations";

let value: AccountingInvoiceItemsAddRequest = {
  serviceId: "salesforce",
  invoiceItem: {
    name: "Model Y",
    description:
      "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
    displayId: "12345",
    code: "120-C",
    sold: true,
    purchased: true,
    tracked: true,
    taxable: true,
    inventoryDate: new Date("2020-10-30"),
    type: "inventory",
    salesDetails: {
      unitPrice: 27500.5,
      unitOfMeasure: "pc.",
      taxInclusive: true,
      taxRate: {
        id: "123456",
        code: "N-T",
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
        rate: 10,
      },
    },
    quantity: 1,
    unitPrice: 27500.5,
    currency: "USD",
    assetAccount: {
      id: "123456",
      name: "Bank account",
      nominalCode: "N091",
      code: "453",
      parentId: "123456",
      displayId: "123456",
    },
    incomeAccount: {
      id: "123456",
      name: "Bank account",
      nominalCode: "N091",
      code: "453",
      parentId: "123456",
      displayId: "123456",
    },
    expenseAccount: {
      id: "123456",
      name: "Bank account",
      nominalCode: "N091",
      code: "453",
      parentId: "123456",
      displayId: "123456",
    },
    trackingCategories: [
      {
        id: "123456",
        code: "100",
        name: "New York",
        parentId: "123456",
        parentName: "New York",
      },
    ],
    active: true,
    departmentId: "12345",
    locationId: "12345",
    subsidiaryId: "12345",
    categoryId: "12345",
    taxScheduleId: "123456",
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
| `consumerId`                                                                                                                                  | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | ID of the consumer which you want to get or push data from                                                                                    | test-consumer                                                                                                                                 |
| `appId`                                                                                                                                       | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The ID of your Unify application                                                                                                              | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                                                                       |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `invoiceItem`                                                                                                                                 | [components.InvoiceItemInput](../../models/components/invoiceiteminput.md)                                                                    | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |