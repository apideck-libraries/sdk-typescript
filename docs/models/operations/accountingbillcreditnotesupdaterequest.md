# AccountingBillCreditNotesUpdateRequest

## Example Usage

```typescript
import { AccountingBillCreditNotesUpdateRequest } from "@apideck/unify/models/operations";

let value: AccountingBillCreditNotesUpdateRequest = {
  id: "<id>",
  serviceId: "salesforce",
  billCreditNote: {
    number: "OIT00546",
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
    subsidiary: {
      displayId: "123456",
      name: "Acme Inc.",
    },
    location: {
      id: "123456",
      displayId: "123456",
      name: "New York Office",
    },
    department: {
      displayId: "123456",
      name: "Acme Inc.",
    },
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
    type: "accounts_payable_credit",
    account: {
      id: "123456",
      name: "Bank account",
      nominalCode: "N091",
      code: "453",
      parentId: "123456",
      displayId: "123456",
    },
    lineItems: [
      {
        rowId: "12345",
        code: "120-C",
        lineNumber: 1,
        description: "Returned goods credit",
        type: "expense_account",
        taxAmount: 27.5,
        totalAmount: 27500,
        quantity: 1,
        unitPrice: 27500.5,
        unitOfMeasure: "pc.",
        discountPercentage: 0.01,
        discountAmount: 19.99,
        serviceDate: new Date("2024-01-15"),
        location: {
          id: "123456",
          displayId: "123456",
          name: "New York Office",
        },
        department: {
          displayId: "123456",
          name: "Acme Inc.",
        },
        item: {
          id: "12344",
          code: "120-C",
          name: "Model Y",
        },
        taxRate: {
          id: "123456",
          code: "N-T",
          rate: 10,
        },
        ledgerAccount: {
          id: "123456",
          name: "Bank account",
          nominalCode: "N091",
          code: "453",
          parentId: "123456",
          displayId: "123456",
        },
        trackingCategories: [
          {
            id: "123456",
            code: "100",
            name: "New York",
            parentId: "123456",
            parentName: "New York",
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
    note: "Some notes about this bill credit note",
    terms: "Some terms about this bill credit note",
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
| `billCreditNote`                                                                                                                              | [components.BillCreditNoteInput](../../models/components/billcreditnoteinput.md)                                                              | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |