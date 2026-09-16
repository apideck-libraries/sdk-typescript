# GetGoodsReceiptsResponse

GoodsReceipts

## Example Usage

```typescript
import { GetGoodsReceiptsResponse } from "@apideck/unify/models/components";

let value: GetGoodsReceiptsResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "goods-receipts",
  operation: "all",
  data: [
    {
      id: "12345",
      downstreamId: "12345",
      displayId: "123456",
      receiptNumber: "GR-000123",
      reference: "DN-78910",
      purchaseOrderId: "123456",
      poNumber: "90000117",
      supplier: null,
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
  ],
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
| `service`                                                               | *string*                                                                | :heavy_check_mark:                                                      | Apideck ID of service provider                                          | quickbooks                                                              |
| `resource`                                                              | *string*                                                                | :heavy_check_mark:                                                      | Unified API resource name                                               | goods-receipts                                                          |
| `operation`                                                             | *string*                                                                | :heavy_check_mark:                                                      | Operation performed                                                     | all                                                                     |
| `data`                                                                  | [components.GoodsReceipt](../../models/components/goodsreceipt.md)[]    | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |
| `meta`                                                                  | [components.Meta](../../models/components/meta.md)                      | :heavy_minus_sign:                                                      | Response metadata                                                       |                                                                         |
| `links`                                                                 | [components.Links](../../models/components/links.md)                    | :heavy_minus_sign:                                                      | Links to navigate to previous or next pages through the API             |                                                                         |
| `raw`                                                                   | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | Raw response from the integration when raw=true query param is provided |                                                                         |