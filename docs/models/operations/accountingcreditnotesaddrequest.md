# AccountingCreditNotesAddRequest

## Example Usage

```typescript
import { AccountingCreditNotesAddRequest } from "@apideck/unify/models/operations";

let value: AccountingCreditNotesAddRequest = {
  serviceId: "salesforce",
  creditNote: {
    number: "OIT00546",
    customer: {
      id: "12345",
      displayName: "Windsurf Shop",
      email: "boring@boring.com",
    },
    companyId: "12345",
    currency: "USD",
    currencyRate: 0.69,
    taxInclusive: true,
    subTotal: 27500,
    totalAmount: 49.99,
    totalTax: 2500,
    taxCode: "1234",
    balance: 27500,
    remainingCredit: 27500,
    status: "authorised",
    reference: "123456",
    dateIssued: new Date("2021-05-01T12:00:00.000Z"),
    datePaid: new Date("2021-05-01T12:00:00.000Z"),
    type: "accounts_receivable_credit",
    account: {
      id: "123456",
      nominalCode: "N091",
      code: "453",
    },
    lineItems: [
      {
        id: "12345",
        rowId: "12345",
        code: "120-C",
        lineNumber: 1,
        description:
          "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
        type: "sales_item",
        taxAmount: 27500,
        totalAmount: 27500,
        quantity: 1,
        unitPrice: 27500.5,
        unitOfMeasure: "pc.",
        discountPercentage: 0.01,
        discountAmount: 19.99,
        locationId: "12345",
        departmentId: "12345",
        item: {
          id: "12344",
          code: "120-C",
          name: "Model Y",
        },
        taxRate: {
          id: "123456",
          rate: 10,
        },
        trackingCategories: [
          {
            id: "123456",
            name: "New York",
          },
        ],
        ledgerAccount: {
          id: "123456",
          nominalCode: "N091",
          code: "453",
        },
        customFields: [
          {
            id: "2389328923893298",
            name: "employee_level",
            description: "Employee Level",
            value: "Uses Salesforce and Marketo",
          },
        ],
        rowVersion: "1-12345",
      },
    ],
    allocations: [
      {
        id: "123456",
        amount: 49.99,
        allocationId: "123456",
      },
    ],
    note: "Some notes about this credit note",
    terms: "Some terms about this credit note",
    billingAddress: {
      id: "123",
      type: "primary",
      string: "25 Spring Street, Blackburn, VIC 3130",
      name: "HQ US",
      line1: "Main street",
      line2: "apt #",
      line3: "Suite #",
      line4: "delivery instructions",
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
    shippingAddress: {
      id: "123",
      type: "primary",
      string: "25 Spring Street, Blackburn, VIC 3130",
      name: "HQ US",
      line1: "Main street",
      line2: "apt #",
      line3: "Suite #",
      line4: "delivery instructions",
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
| `creditNote`                                                                                                                                  | [components.CreditNoteInput](../../models/components/creditnoteinput.md)                                                                      | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |