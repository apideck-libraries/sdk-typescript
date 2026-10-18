# BatchBillPaymentsRequestItems

## Example Usage

```typescript
import { BatchBillPaymentsRequestItems } from "@apideck/unify/models/components";

let value: BatchBillPaymentsRequestItems = {
  ref: "item-1",
  data: {
    currency: "USD",
    currencyRate: 0.69,
    totalAmount: 49.99,
    reference: "123456",
    paymentMethod: "cash",
    paymentMethodReference: "123456",
    paymentMethodId: "12345",
    account: {
      id: "123456",
      name: "Bank account",
      nominalCode: "N091",
      code: "453",
      parentId: "123456",
      displayId: "123456",
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
    subsidiary: {
      displayId: "123456",
      name: "Acme Inc.",
    },
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

| Field                                                                                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                                                                              | Required                                                                                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                                                                       | Example                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ref`                                                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                                | A caller-supplied reference for this item, echoed back on the matching result so each outcome can be tied to the record it came from. Must be unique within the request. Never sent to the connector.                                                                                             | item-1                                                                                                                                                                                                                                                                                            |
| `data`                                                                                                                                                                                                                                                                                            | [components.BillPaymentCreateInput](../../models/components/billpaymentcreateinput.md)                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                | The writable shape of BillPayment for a batch create. Identical to [BillPayment](the model returned on reads) with the read-only properties removed — the same properties the single-record create endpoint rejects, so a batched record and a single-record create accept exactly the same body. |                                                                                                                                                                                                                                                                                                   |