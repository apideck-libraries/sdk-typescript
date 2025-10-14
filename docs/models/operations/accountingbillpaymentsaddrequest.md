# AccountingBillPaymentsAddRequest

## Example Usage

```typescript
import { AccountingBillPaymentsAddRequest } from "@apideck/unify/models/operations";

let value: AccountingBillPaymentsAddRequest = {
  serviceId: "salesforce",
  billPayment: {
    currency: "USD",
    currencyRate: 0.69,
    totalAmount: 49.99,
    reference: "123456",
    paymentMethod: "cash",
    paymentMethodReference: "123456",
    paymentMethodId: "12345",
    account: {
      id: "123456",
      nominalCode: "N091",
      code: "453",
      parentId: "123456",
    },
    transactionDate: new Date("2021-05-01T12:00:00.000Z"),
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
    reconciled: true,
    status: "authorised",
    type: "accounts_payable",
    allocations: [
      {
        id: "12345",
        type: "bill",
        amount: 49.99,
        allocationId: "123456",
      },
    ],
    note: "Some notes about this transaction",
    number: "123456",
    trackingCategories: [
      {
        id: "123456",
        name: "New York",
        parentId: "123456",
        parentName: "New York",
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
    rowVersion: "1-12345",
    displayId: "123456",
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
| `billPayment`                                                                                                                                 | [components.BillPaymentInput](../../models/components/billpaymentinput.md)                                                                    | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |