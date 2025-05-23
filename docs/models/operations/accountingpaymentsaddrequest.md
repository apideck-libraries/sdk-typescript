# AccountingPaymentsAddRequest

## Example Usage

```typescript
import { AccountingPaymentsAddRequest } from "@apideck/unify/models/operations";

let value: AccountingPaymentsAddRequest = {
  serviceId: "salesforce",
  payment: {
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
    },
    transactionDate: new Date("2021-05-01T12:00:00.000Z"),
    customer: {
      id: "12345",
      displayName: "Windsurf Shop",
      email: "boring@boring.com",
    },
    companyId: "12345",
    reconciled: true,
    status: "authorised",
    type: "accounts_receivable",
    allocations: [
      {
        id: "123456",
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
| `payment`                                                                                                                                     | [components.PaymentInput](../../models/components/paymentinput.md)                                                                            | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |