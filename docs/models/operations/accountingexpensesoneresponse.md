# AccountingExpensesOneResponse

## Example Usage

```typescript
import { AccountingExpensesOneResponse } from "@apideck/unify/models/operations";

let value: AccountingExpensesOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getExpenseResponse: {
    statusCode: 200,
    status: "OK",
    service: "quickbooks",
    resource: "Expenses",
    operation: "one",
    data: {
      id: "12345",
      number: "OIT00546",
      transactionDate: new Date("2021-05-01T12:00:00.000Z"),
      accountId: "123456",
      customerId: "12345",
      supplierId: "12345",
      companyId: "12345",
      departmentId: "12345",
      paymentType: "cash",
      currency: "USD",
      currencyRate: 0.69,
      type: "expense",
      memo: "For travel expenses incurred on 2024-05-15",
      taxRate: {
        id: "123456",
        code: "N-T",
        name: "GST on Purchases",
        rate: 10,
      },
      totalAmount: 275,
      lineItems: [
        {
          id: "12345",
          trackingCategories: [
            {
              id: "123456",
              name: "New York",
            },
          ],
          accountId: "123456",
          customerId: "12345",
          departmentId: "12345",
          locationId: "12345",
          subsidiaryId: "12345",
          taxRate: {
            id: "123456",
            code: "N-T",
            name: "GST on Purchases",
            rate: 10,
          },
          description: "Travel US.",
          totalAmount: 275,
          billable: true,
          lineNumber: 1,
        },
      ],
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: "Uses Salesforce and Marketo",
        },
      ],
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
      rowVersion: "1-12345",
      updatedBy: "12345",
      createdBy: "12345",
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
| `getExpenseResponse`                                                                     | [components.GetExpenseResponse](../../models/components/getexpenseresponse.md)           | :heavy_minus_sign:                                                                       | Expenses                                                                                 |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |