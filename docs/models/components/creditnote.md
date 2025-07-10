# CreditNote

## Example Usage

```typescript
import { CreditNote } from "@apideck/unify/models/components";

let value: CreditNote = {
  id: "123456",
  number: "OIT00546",
  customer: {
    id: "12345",
    displayId: "CUST00101",
    displayName: "Windsurf Shop",
    companyName: "The boring company",
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
    name: "Bank account",
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
      categoryId: "12345",
      locationId: "12345",
      departmentId: "12345",
      item: {
        id: "12344",
        code: "120-C",
        name: "Model Y",
      },
      taxRate: {
        id: "123456",
        code: "N-T",
        name: "GST on Purchases",
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
        name: "Bank account",
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
      updatedBy: "12345",
      createdBy: "12345",
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
    },
  ],
  allocations: [
    {
      id: "123456",
      code: "N091",
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
  updatedBy: "12345",
  createdBy: "12345",
  updatedAt: new Date("2020-09-30T07:43:32.000Z"),
  createdAt: new Date("2020-09-30T07:43:32.000Z"),
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
| `id`                                                                                                                                                    | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | Unique identifier representing the entity                                                                                                               | 123456                                                                                                                                                  |
| `number`                                                                                                                                                | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Credit note number.                                                                                                                                     | OIT00546                                                                                                                                                |
| `customer`                                                                                                                                              | [components.LinkedCustomer](../../models/components/linkedcustomer.md)                                                                                  | :heavy_minus_sign:                                                                                                                                      | The customer this entity is linked to.                                                                                                                  |                                                                                                                                                         |
| `companyId`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The company or subsidiary id the transaction belongs to                                                                                                 | 12345                                                                                                                                                   |
| `currency`                                                                                                                                              | [components.Currency](../../models/components/currency.md)                                                                                              | :heavy_minus_sign:                                                                                                                                      | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).                      | USD                                                                                                                                                     |
| `currencyRate`                                                                                                                                          | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Currency Exchange Rate at the time entity was recorded/generated.                                                                                       | 0.69                                                                                                                                                    |
| `taxInclusive`                                                                                                                                          | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Amounts are including tax                                                                                                                               | true                                                                                                                                                    |
| `subTotal`                                                                                                                                              | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Sub-total amount, normally before tax.                                                                                                                  | 27500                                                                                                                                                   |
| `totalAmount`                                                                                                                                           | *number*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | Amount of transaction                                                                                                                                   | 49.99                                                                                                                                                   |
| `totalTax`                                                                                                                                              | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Total tax amount applied to this invoice.                                                                                                               | 2500                                                                                                                                                    |
| `taxCode`                                                                                                                                               | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Applicable tax id/code override if tax is not supplied on a line item basis.                                                                            | 1234                                                                                                                                                    |
| `balance`                                                                                                                                               | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The balance reflecting any payments made against the transaction.                                                                                       | 27500                                                                                                                                                   |
| `remainingCredit`                                                                                                                                       | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Indicates the total credit amount still available to apply towards the payment.                                                                         | 27500                                                                                                                                                   |
| `status`                                                                                                                                                | [components.CreditNoteStatus](../../models/components/creditnotestatus.md)                                                                              | :heavy_minus_sign:                                                                                                                                      | Status of credit notes                                                                                                                                  | authorised                                                                                                                                              |
| `reference`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Optional reference message ie: Debit remittance detail.                                                                                                 | 123456                                                                                                                                                  |
| `dateIssued`                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_minus_sign:                                                                                                                                      | Date credit note issued - YYYY:MM::DDThh:mm:ss.sTZD                                                                                                     | 2021-05-01T12:00:00.000Z                                                                                                                                |
| `datePaid`                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_minus_sign:                                                                                                                                      | Date credit note paid - YYYY:MM::DDThh:mm:ss.sTZD                                                                                                       | 2021-05-01T12:00:00.000Z                                                                                                                                |
| `type`                                                                                                                                                  | [components.CreditNoteType](../../models/components/creditnotetype.md)                                                                                  | :heavy_minus_sign:                                                                                                                                      | Type of payment                                                                                                                                         | accounts_receivable_credit                                                                                                                              |
| `account`                                                                                                                                               | [components.LinkedLedgerAccount](../../models/components/linkedledgeraccount.md)                                                                        | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `lineItems`                                                                                                                                             | [components.InvoiceLineItem](../../models/components/invoicelineitem.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `allocations`                                                                                                                                           | [components.Allocation](../../models/components/allocation.md)[]                                                                                        | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `note`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Optional note to be associated with the credit note.                                                                                                    | Some notes about this credit note                                                                                                                       |
| `terms`                                                                                                                                                 | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Optional terms to be associated with the credit note.                                                                                                   | Some terms about this credit note                                                                                                                       |
| `billingAddress`                                                                                                                                        | [components.Address](../../models/components/address.md)                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `shippingAddress`                                                                                                                                       | [components.Address](../../models/components/address.md)                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `trackingCategories`                                                                                                                                    | [components.LinkedTrackingCategory](../../models/components/linkedtrackingcategory.md)[]                                                                | :heavy_minus_sign:                                                                                                                                      | A list of linked tracking categories.                                                                                                                   |                                                                                                                                                         |
| `customMappings`                                                                                                                                        | Record<string, *any*>                                                                                                                                   | :heavy_minus_sign:                                                                                                                                      | When custom mappings are configured on the resource, the result is included here.                                                                       |                                                                                                                                                         |
| `customFields`                                                                                                                                          | [components.CustomField](../../models/components/customfield.md)[]                                                                                      | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `rowVersion`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.              | 1-12345                                                                                                                                                 |
| `updatedBy`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The user who last updated the object.                                                                                                                   | 12345                                                                                                                                                   |
| `createdBy`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The user who created the object.                                                                                                                        | 12345                                                                                                                                                   |
| `updatedAt`                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_minus_sign:                                                                                                                                      | The date and time when the object was last updated.                                                                                                     | 2020-09-30T07:43:32.000Z                                                                                                                                |
| `createdAt`                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_minus_sign:                                                                                                                                      | The date and time when the object was created.                                                                                                          | 2020-09-30T07:43:32.000Z                                                                                                                                |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |