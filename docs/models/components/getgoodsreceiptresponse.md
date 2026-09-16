# GetGoodsReceiptResponse

GoodsReceipt

## Example Usage

```typescript
import { GetGoodsReceiptResponse } from "@apideck/unify/models/components";

let value: GetGoodsReceiptResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "goods-receipts",
  operation: "one",
  data: {
    id: "12345",
    downstreamId: "12345",
    displayId: "123456",
    receiptNumber: "GR-000123",
    reference: "DN-78910",
    purchaseOrderId: "123456",
    poNumber: "90000117",
    supplier: {
      id: "12345",
      displayId: "SUPP00101",
      displayName: "Windsurf Shop",
      companyName: "The boring company",
      address: {
        id: "123",
        type: "primary",
        string: "25 Spring Street, Blackburn, VIC 3130",
        name: "HQ US",
        line1: "Main street",
        line2: "apt #",
        line3: "Suite #",
        line4: "delivery instructions",
        line5: "Attention: Finance Dept",
        streetNumber: "25",
        city: "San Francisco",
        state: "CA",
        postalCode: "94104",
        country: "US",
        latitude: "40.759211",
        longitude: "-73.984638",
        county: "Santa Clara",
        contactName: "Elon Musk",
        salutation: "Mr",
        phoneNumber: "111-111-1111",
        fax: "122-111-1111",
        email: "elon@musk.com",
        website: "https://elonmusk.com",
        notes: "Address notes or delivery instructions.",
        rowVersion: "1-12345",
      },
    },
    companyId: "12345",
    subsidiaryId: "12345",
    locationId: "12345",
    departmentId: "12345",
    status: "received",
    receivedDate: new Date("2026-09-01"),
    postedDate: new Date("2026-09-01"),
    currency: "USD",
    currencyRate: 0.69,
    lineItems: [
      {
        id: "12345",
        lineNumber: 1,
        purchaseOrder: {
          id: "123456",
          lineId: "123456",
          lineNumber: "1",
        },
        item: {
          id: "12344",
          code: "120-C",
          name: "Model Y",
        },
        description: "Model Y rear brake pad set",
        quantityReceived: 10,
        quantityOrdered: 12,
        unitOfMeasure: "pc.",
        unitPrice: 27500.5,
        totalAmount: 275.5,
        locationId: "12345",
        trackingCategories: [
          {
            id: "123456",
            code: "100",
            name: "New York",
            parentId: "123456",
            parentName: "New York",
          },
        ],
        customFields: [
          {
            id: "2389328923893298",
            name: "employee_level",
            refName: "Marketing",
            description: "Employee Level",
            value: "Uses Salesforce and Marketo",
          },
        ],
        rowVersion: "1-12345",
        updatedBy: "12345",
        createdBy: "12345",
        updatedAt: new Date("2020-09-30T07:43:32.000Z"),
        createdAt: new Date("2020-09-30T07:43:32.000Z"),
      },
    ],
    notes: "Partial delivery, remainder expected next week.",
    trackingCategories: [
      {
        id: "123456",
        code: "100",
        name: "New York",
        parentId: "123456",
        parentName: "New York",
      },
    ],
    customFields: [
      {
        id: "2389328923893298",
        name: "employee_level",
        refName: "Marketing",
        description: "Employee Level",
        value: "Uses Salesforce and Marketo",
      },
    ],
    rowVersion: "1-12345",
    updatedBy: "12345",
    createdBy: "12345",
    updatedAt: new Date("2020-09-30T07:43:32.000Z"),
    createdAt: new Date("2020-09-30T07:43:32.000Z"),
  },
  meta: {
    itemsOnPage: 50,
    cursors: {
      previous: "em9oby1jcm06OnBhZ2U6OjE=",
      current: "em9oby1jcm06OnBhZ2U6OjI=",
      next: "em9oby1jcm06OnBhZ2U6OjM=",
    },
    totalCount: 1,
    warnings: [
      {
        type: "downstream_request_failed",
        statusCode: 429,
        operation: "getManager",
      },
    ],
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP Response Status Code                                               | 200                                                                     |
| `status`                                                                | *string*                                                                | :heavy_check_mark:                                                      | HTTP Response Status                                                    | OK                                                                      |
| `service`                                                               | *string*                                                                | :heavy_check_mark:                                                      | Apideck ID of service provider                                          | quickbooks                                                              |
| `resource`                                                              | *string*                                                                | :heavy_check_mark:                                                      | Unified API resource name                                               | goods-receipts                                                          |
| `operation`                                                             | *string*                                                                | :heavy_check_mark:                                                      | Operation performed                                                     | one                                                                     |
| `data`                                                                  | [components.GoodsReceipt](../../models/components/goodsreceipt.md)      | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |
| `meta`                                                                  | [components.Meta](../../models/components/meta.md)                      | :heavy_minus_sign:                                                      | Response metadata                                                       |                                                                         |
| `raw`                                                                   | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | Raw response from the integration when raw=true query param is provided |                                                                         |