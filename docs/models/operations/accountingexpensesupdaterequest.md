# AccountingExpensesUpdateRequest

## Example Usage

```typescript
import { AccountingExpensesUpdateRequest } from "@apideck/unify/models/operations";

let value: AccountingExpensesUpdateRequest = {
  id: "<id>",
  serviceId: "salesforce",
  expense: {
    displayId: "123456",
    number: "OIT00546",
    transactionDate: new Date("2021-05-01T12:00:00.000Z"),
    account: {
      id: "123456",
      type: "ledger_account",
      code: "1100",
      displayId: "123456",
      accountNumber: "123465",
    },
    supplier: {
      id: "12345",
      displayName: "Windsurf Shop",
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
    },
    departmentId: "12345",
    department: {
      displayId: "123456",
      name: "Acme Inc.",
    },
    paymentType: "cash",
    currency: "USD",
    currencyRate: 0.69,
    type: "expense",
    memo: "For travel expenses incurred on 2024-05-15",
    taxRate: {
      id: "123456",
      code: "N-T",
      rate: 10,
    },
    taxInclusive: true,
    subTotal: 250,
    totalTax: 25,
    totalAmount: 275,
    trackingCategories: null,
    lineItems: [
      {
        trackingCategories: [
          {
            id: "123456",
            code: "100",
            name: "New York",
            parentId: "123456",
            parentName: "New York",
          },
        ],
        account: {
          id: "123456",
          name: "Bank account",
          nominalCode: "N091",
          code: "453",
          parentId: "123456",
          displayId: "123456",
        },
        customer: {
          id: "12345",
          displayName: "Windsurf Shop",
          email: "boring@boring.com",
        },
        departmentId: "12345",
        department: {
          displayId: "123456",
          name: "Acme Inc.",
        },
        locationId: "12345",
        location: null,
        taxRate: {
          id: "123456",
          code: "N-T",
          rate: 10,
        },
        description: "Travel US.",
        type: "expense_account",
        totalAmount: 275,
        taxAmount: 27.5,
        quantity: 1,
        unitPrice: 27500.5,
        item: {
          id: "12344",
          code: "120-C",
          name: "Model Y",
        },
        lineNumber: 1,
        rebilling: null,
      },
    ],
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
| `id`                                                                                                                                          | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | ID of the record you are acting upon.                                                                                                         |                                                                                                                                               |
| `consumerId`                                                                                                                                  | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | ID of the consumer which you want to get or push data from                                                                                    | test-consumer                                                                                                                                 |
| `appId`                                                                                                                                       | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The ID of your Unify application                                                                                                              | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                                                                       |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `raw`                                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Include raw response. Mostly used for debugging purposes                                                                                      |                                                                                                                                               |
| `expense`                                                                                                                                     | [components.ExpenseInput](../../models/components/expenseinput.md)                                                                            | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |