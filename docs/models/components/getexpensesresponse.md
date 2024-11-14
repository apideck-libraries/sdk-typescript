# GetExpensesResponse

Expenses

## Example Usage

```typescript
import { GetExpensesResponse } from "apideck/models/components";

let value: GetExpensesResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "Expenses",
  operation: "all",
  data: [
    {
      id: "12345",
      number: "OIT00546",
      transactionDate: new Date("2021-05-01T12:00:00.000Z"),
      accountId: "123456",
      customerId: "12345",
      supplierId: "12345",
      companyId: "12345",
      departmentId: "12345",
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
          taxRate: {
            id: "123456",
            code: "N-T",
            name: "GST on Purchases",
            rate: 10,
          },
          description: "Travel US.",
          totalAmount: 275,
          billable: true,
        },
      ],
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: 10,
        },
      ],
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
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

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `statusCode`                                                | *number*                                                    | :heavy_check_mark:                                          | HTTP Response Status Code                                   | 200                                                         |
| `status`                                                    | *string*                                                    | :heavy_check_mark:                                          | HTTP Response Status                                        | OK                                                          |
| `service`                                                   | *string*                                                    | :heavy_check_mark:                                          | Apideck ID of service provider                              | quickbooks                                                  |
| `resource`                                                  | *string*                                                    | :heavy_check_mark:                                          | Unified API resource name                                   | Expenses                                                    |
| `operation`                                                 | *string*                                                    | :heavy_check_mark:                                          | Operation performed                                         | all                                                         |
| `data`                                                      | [components.Expense](../../models/components/expense.md)[]  | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `meta`                                                      | [components.Meta](../../models/components/meta.md)          | :heavy_minus_sign:                                          | Response metadata                                           |                                                             |
| `links`                                                     | [components.Links](../../models/components/links.md)        | :heavy_minus_sign:                                          | Links to navigate to previous or next pages through the API |                                                             |