# AccountingInvoiceItemsAllResponse

## Example Usage

```typescript
import { AccountingInvoiceItemsAllResponse } from "@apideck/unify/models/operations";
import { RFCDate } from "@apideck/unify/types";

let value: AccountingInvoiceItemsAllResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getInvoiceItemsResponse: {
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
        departmentId: "12345",
        locationId: "12345",
        subsidiaryId: "12345",
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
  },
  unexpectedErrorResponse: {
    statusCode: 400,
    error: "Bad Request",
    typeName: "RequestHeadersValidationError",
    message: "Invalid Params",
    detail: "Missing Header: x-apideck-consumer-id",
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getInvoiceItemsResponse`                                                                | [components.GetInvoiceItemsResponse](../../models/components/getinvoiceitemsresponse.md) | :heavy_minus_sign:                                                                       | InvoiceItems                                                                             |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |