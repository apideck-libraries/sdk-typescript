# GetInvoiceItemsResponse

InvoiceItems

## Example Usage

```typescript
import { GetInvoiceItemsResponse } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: GetInvoiceItemsResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "invoice-items",
  operation: "all",
  data: [
    {
      id: "123456",
      name: "Model Y",
      description:
        "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
      displayId: "12345",
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
  ],
  meta: {
    itemsOnPage: 50,
    cursors: {
      previous: "em9oby1jcm06OnBhZ2U6OjE=",
      current: "em9oby1jcm06OnBhZ2U6OjI=",
      next: "em9oby1jcm06OnBhZ2U6OjM=",
    },
  },
  links: {
    previous:
      "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D",
    current: "https://unify.apideck.com/crm/companies",
    next:
      "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP Response Status Code                                               | 200                                                                     |
| `status`                                                                | *string*                                                                | :heavy_check_mark:                                                      | HTTP Response Status                                                    | OK                                                                      |
| `service`                                                               | *string*                                                                | :heavy_check_mark:                                                      | Apideck ID of service provider                                          | xero                                                                    |
| `resource`                                                              | *string*                                                                | :heavy_check_mark:                                                      | Unified API resource name                                               | invoice-items                                                           |
| `operation`                                                             | *string*                                                                | :heavy_check_mark:                                                      | Operation performed                                                     | all                                                                     |
| `data`                                                                  | [components.InvoiceItem](../../models/components/invoiceitem.md)[]      | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |
| `meta`                                                                  | [components.Meta](../../models/components/meta.md)                      | :heavy_minus_sign:                                                      | Response metadata                                                       |                                                                         |
| `links`                                                                 | [components.Links](../../models/components/links.md)                    | :heavy_minus_sign:                                                      | Links to navigate to previous or next pages through the API             |                                                                         |
| `raw`                                                                   | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | Raw response from the integration when raw=true query param is provided |                                                                         |