# GetExpenseResponse

Expenses

## Example Usage

```typescript
import { GetExpenseResponse } from "@apideck/unify/models/components";

let value: GetExpenseResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "Expenses",
  operation: "one",
  data: {
    id: "12345",
    displayId: "123456",
    number: "OIT00546",
    transactionDate: new Date("2021-05-01T12:00:00.000Z"),
    account: {
      id: "123456",
      type: "ledger_account",
      code: "1100",
      displayId: "123456",
      accountNumber: "123465",
      name: "Current assets",
      downstreamId: "12345",
    },
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
    location: {
      id: "123456",
      displayId: "123456",
      name: "New York Office",
      downstreamId: "12345",
    },
    departmentId: "12345",
    department: {
      id: "12345",
      displayId: "123456",
      name: "Acme Inc.",
      downstreamId: "12345",
    },
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
    taxInclusive: true,
    subTotal: 250,
    totalTax: 25,
    totalAmount: 275,
    trackingCategories: [
      {
        id: "123456",
        code: "100",
        name: "New York",
        parentId: "123456",
        parentName: "New York",
      },
    ],
    lineItems: [],
    reference: "INV-2024-001",
    sourceDocumentUrl: "https://www.invoicesolution.com/expense/123456",
    customFields: [
      {
        id: "2389328923893298",
        name: "employee_level",
        description: "Employee Level",
        value: "Uses Salesforce and Marketo",
      },
    ],
    status: "draft",
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
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP Response Status Code                                               | 200                                                                     |
| `status`                                                                | *string*                                                                | :heavy_check_mark:                                                      | HTTP Response Status                                                    | OK                                                                      |
| `service`                                                               | *string*                                                                | :heavy_check_mark:                                                      | Apideck ID of service provider                                          | quickbooks                                                              |
| `resource`                                                              | *string*                                                                | :heavy_check_mark:                                                      | Unified API resource name                                               | Expenses                                                                |
| `operation`                                                             | *string*                                                                | :heavy_check_mark:                                                      | Operation performed                                                     | one                                                                     |
| `data`                                                                  | [components.Expense](../../models/components/expense.md)                | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |
| `raw`                                                                   | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | Raw response from the integration when raw=true query param is provided |                                                                         |