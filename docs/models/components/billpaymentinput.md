# BillPaymentInput

## Example Usage

```typescript
import { BillPaymentInput } from "@apideck/unify/models/components";

let value: BillPaymentInput = {
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
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             | Example                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                                                              | [components.Currency](../../models/components/currency.md)                                                                                              | :heavy_minus_sign:                                                                                                                                      | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).                      | USD                                                                                                                                                     |
| `currencyRate`                                                                                                                                          | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Currency Exchange Rate at the time entity was recorded/generated.                                                                                       | 0.69                                                                                                                                                    |
| `totalAmount`                                                                                                                                           | *number*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | The total amount of the transaction or record                                                                                                           | 49.99                                                                                                                                                   |
| `reference`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Optional transaction reference message ie: Debit remittance detail.                                                                                     | 123456                                                                                                                                                  |
| `paymentMethod`                                                                                                                                         | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Payment method used for the transaction, such as cash, credit card, bank transfer, or check                                                             | cash                                                                                                                                                    |
| `paymentMethodReference`                                                                                                                                | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Optional reference message returned by payment method on processing                                                                                     | 123456                                                                                                                                                  |
| `paymentMethodId`                                                                                                                                       | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A unique identifier for an object.                                                                                                                      | 12345                                                                                                                                                   |
| `account`                                                                                                                                               | [components.LinkedLedgerAccountInput](../../models/components/linkedledgeraccountinput.md)                                                              | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `transactionDate`                                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_check_mark:                                                                                                                                      | The date of the transaction - YYYY:MM::DDThh:mm:ss.sTZD                                                                                                 | 2021-05-01T12:00:00.000Z                                                                                                                                |
| `supplier`                                                                                                                                              | [components.LinkedSupplierInput](../../models/components/linkedsupplierinput.md)                                                                        | :heavy_minus_sign:                                                                                                                                      | The supplier this entity is linked to.                                                                                                                  |                                                                                                                                                         |
| `companyId`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The company or subsidiary id the transaction belongs to                                                                                                 | 12345                                                                                                                                                   |
| `reconciled`                                                                                                                                            | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Indicates if the transaction has been reconciled.                                                                                                       | true                                                                                                                                                    |
| `status`                                                                                                                                                | [components.PaymentStatus](../../models/components/paymentstatus.md)                                                                                    | :heavy_minus_sign:                                                                                                                                      | Status of payment                                                                                                                                       | authorised                                                                                                                                              |
| `type`                                                                                                                                                  | [components.BillPaymentType](../../models/components/billpaymenttype.md)                                                                                | :heavy_minus_sign:                                                                                                                                      | Type of payment                                                                                                                                         | accounts_payable                                                                                                                                        |
| `allocations`                                                                                                                                           | [components.BillPaymentAllocations](../../models/components/billpaymentallocations.md)[]                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `note`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Note associated with the transaction                                                                                                                    | Some notes about this transaction                                                                                                                       |
| `number`                                                                                                                                                | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Number associated with the transaction                                                                                                                  | 123456                                                                                                                                                  |
| `trackingCategories`                                                                                                                                    | [components.LinkedTrackingCategory](../../models/components/linkedtrackingcategory.md)[]                                                                | :heavy_minus_sign:                                                                                                                                      | A list of linked tracking categories.                                                                                                                   |                                                                                                                                                         |
| `customFields`                                                                                                                                          | [components.CustomField](../../models/components/customfield.md)[]                                                                                      | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `rowVersion`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.              | 1-12345                                                                                                                                                 |
| `displayId`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Id to be displayed.                                                                                                                                     | 123456                                                                                                                                                  |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |