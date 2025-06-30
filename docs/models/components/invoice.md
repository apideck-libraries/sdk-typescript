# Invoice

## Example Usage

```typescript
import { Invoice } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: Invoice = {
  id: "12345",
  downstreamId: "12345",
  type: "service",
  number: "OIT00546",
  customer: {
    id: "12345",
    displayId: "CUST00101",
    displayName: "Windsurf Shop",
    companyName: "The boring company",
    email: "boring@boring.com",
  },
  companyId: "12345",
  invoiceDate: new RFCDate("2020-09-30"),
  dueDate: new RFCDate("2020-09-30"),
  terms: "Net 30 days",
  poNumber: "90000117",
  reference: "INV-2024-001",
  status: "draft",
  invoiceSent: true,
  currency: "USD",
  currencyRate: 0.69,
  taxInclusive: true,
  subTotal: 27500,
  totalTax: 2500,
  taxCode: "1234",
  discountPercentage: 5.5,
  discountAmount: 25,
  total: 27500,
  balance: 27500,
  deposit: 0,
  customerMemo: "Thank you for your business and have a great day!",
  trackingCategories: [
    {
      id: "123456",
      name: "New York",
    },
  ],
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
  templateId: "123456",
  sourceDocumentUrl: "https://www.invoicesolution.com/invoice/123456",
  paymentAllocations: [
    {
      id: "123456",
      allocatedAmount: 1000,
      date: new Date("2020-09-30T07:43:32.000Z"),
    },
  ],
  paymentMethod: "cash",
  channel: "email",
  language: "EN",
  accountingByRow: false,
  bankAccount: {
    bankName: "Monzo",
    accountNumber: "123465",
    accountName: "SPACEX LLC",
    accountType: "credit_card",
    iban: "CH2989144532982975332",
    bic: "AUDSCHGGXXX",
    routingNumber: "012345678",
    bsbNumber: "062-001",
    branchIdentifier: "001",
    bankCode: "BNH",
    currency: "USD",
    country: "US",
  },
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

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      | Example                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                             | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | A unique identifier for an object.                                                                                                                               | 12345                                                                                                                                                            |
| `downstreamId`                                                                                                                                                   | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | The third-party API ID of original entity                                                                                                                        | 12345                                                                                                                                                            |
| `type`                                                                                                                                                           | [components.InvoiceType](../../models/components/invoicetype.md)                                                                                                 | :heavy_minus_sign:                                                                                                                                               | Invoice type                                                                                                                                                     | service                                                                                                                                                          |
| `number`                                                                                                                                                         | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Invoice number.                                                                                                                                                  | OIT00546                                                                                                                                                         |
| `customer`                                                                                                                                                       | [components.LinkedCustomer](../../models/components/linkedcustomer.md)                                                                                           | :heavy_minus_sign:                                                                                                                                               | The customer this entity is linked to.                                                                                                                           |                                                                                                                                                                  |
| `companyId`                                                                                                                                                      | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | The company or subsidiary id the transaction belongs to                                                                                                          | 12345                                                                                                                                                            |
| `invoiceDate`                                                                                                                                                    | [RFCDate](../../types/rfcdate.md)                                                                                                                                | :heavy_minus_sign:                                                                                                                                               | Date invoice was issued - YYYY-MM-DD.                                                                                                                            | 2020-09-30                                                                                                                                                       |
| `dueDate`                                                                                                                                                        | [RFCDate](../../types/rfcdate.md)                                                                                                                                | :heavy_minus_sign:                                                                                                                                               | The invoice due date is the date on which a payment or invoice is scheduled to be received by the seller - YYYY-MM-DD.                                           | 2020-09-30                                                                                                                                                       |
| `terms`                                                                                                                                                          | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Terms of payment.                                                                                                                                                | Net 30 days                                                                                                                                                      |
| `poNumber`                                                                                                                                                       | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order. | 90000117                                                                                                                                                         |
| `reference`                                                                                                                                                      | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Optional reference identifier for the transaction.                                                                                                               | INV-2024-001                                                                                                                                                     |
| `status`                                                                                                                                                         | [components.InvoiceStatus](../../models/components/invoicestatus.md)                                                                                             | :heavy_minus_sign:                                                                                                                                               | Invoice status                                                                                                                                                   | draft                                                                                                                                                            |
| `invoiceSent`                                                                                                                                                    | *boolean*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                               | Invoice sent to contact/customer.                                                                                                                                | true                                                                                                                                                             |
| `currency`                                                                                                                                                       | [components.Currency](../../models/components/currency.md)                                                                                                       | :heavy_minus_sign:                                                                                                                                               | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).                               | USD                                                                                                                                                              |
| `currencyRate`                                                                                                                                                   | *number*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Currency Exchange Rate at the time entity was recorded/generated.                                                                                                | 0.69                                                                                                                                                             |
| `taxInclusive`                                                                                                                                                   | *boolean*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                               | Amounts are including tax                                                                                                                                        | true                                                                                                                                                             |
| `subTotal`                                                                                                                                                       | *number*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Sub-total amount, normally before tax.                                                                                                                           | 27500                                                                                                                                                            |
| `totalTax`                                                                                                                                                       | *number*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Total tax amount applied to this invoice.                                                                                                                        | 2500                                                                                                                                                             |
| `taxCode`                                                                                                                                                        | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Applicable tax id/code override if tax is not supplied on a line item basis.                                                                                     | 1234                                                                                                                                                             |
| `discountPercentage`                                                                                                                                             | *number*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Discount percentage applied to this invoice.                                                                                                                     | 5.5                                                                                                                                                              |
| `discountAmount`                                                                                                                                                 | *number*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Discount amount applied to this invoice.                                                                                                                         | 25                                                                                                                                                               |
| `total`                                                                                                                                                          | *number*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Total amount of invoice, including tax.                                                                                                                          | 27500                                                                                                                                                            |
| `balance`                                                                                                                                                        | *number*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Balance of invoice due.                                                                                                                                          | 27500                                                                                                                                                            |
| `deposit`                                                                                                                                                        | *number*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Amount of deposit made to this invoice.                                                                                                                          | 0                                                                                                                                                                |
| `customerMemo`                                                                                                                                                   | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Customer memo                                                                                                                                                    | Thank you for your business and have a great day!                                                                                                                |
| ~~`trackingCategory`~~                                                                                                                                           | [components.DeprecatedLinkedTrackingCategory](../../models/components/deprecatedlinkedtrackingcategory.md)                                                       | :heavy_minus_sign:                                                                                                                                               | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                          |                                                                                                                                                                  |
| `trackingCategories`                                                                                                                                             | [components.LinkedTrackingCategory](../../models/components/linkedtrackingcategory.md)[]                                                                         | :heavy_minus_sign:                                                                                                                                               | A list of linked tracking categories.                                                                                                                            |                                                                                                                                                                  |
| `lineItems`                                                                                                                                                      | [components.InvoiceLineItem](../../models/components/invoicelineitem.md)[]                                                                                       | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |                                                                                                                                                                  |
| `billingAddress`                                                                                                                                                 | [components.Address](../../models/components/address.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |                                                                                                                                                                  |
| `shippingAddress`                                                                                                                                                | [components.Address](../../models/components/address.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |                                                                                                                                                                  |
| `templateId`                                                                                                                                                     | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Optional invoice template                                                                                                                                        | 123456                                                                                                                                                           |
| `sourceDocumentUrl`                                                                                                                                              | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | URL link to a source document - shown as 'Go to [appName]' in the downstream app. Currently only supported for Xero.                                             | https://www.invoicesolution.com/invoice/123456                                                                                                                   |
| `paymentAllocations`                                                                                                                                             | [components.PaymentAllocations](../../models/components/paymentallocations.md)[]                                                                                 | :heavy_minus_sign:                                                                                                                                               | IDs of payments made on the invoice                                                                                                                              |                                                                                                                                                                  |
| `paymentMethod`                                                                                                                                                  | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Payment method used for the transaction, such as cash, credit card, bank transfer, or check                                                                      | cash                                                                                                                                                             |
| `channel`                                                                                                                                                        | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | The channel through which the transaction is processed.                                                                                                          | email                                                                                                                                                            |
| `language`                                                                                                                                                       | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | language code according to ISO 639-1. For the United States - EN                                                                                                 | EN                                                                                                                                                               |
| `accountingByRow`                                                                                                                                                | *boolean*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                               | Indicates if accounting by row is used (true) or not (false). Accounting by row means that a separate ledger transaction is created for each row.                | false                                                                                                                                                            |
| `bankAccount`                                                                                                                                                    | [components.BankAccount](../../models/components/bankaccount.md)                                                                                                 | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |                                                                                                                                                                  |
| `ledgerAccount`                                                                                                                                                  | [components.LinkedLedgerAccount](../../models/components/linkedledgeraccount.md)                                                                                 | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |                                                                                                                                                                  |
| `customMappings`                                                                                                                                                 | Record<string, *any*>                                                                                                                                            | :heavy_minus_sign:                                                                                                                                               | When custom mappings are configured on the resource, the result is included here.                                                                                |                                                                                                                                                                  |
| `customFields`                                                                                                                                                   | [components.CustomField](../../models/components/customfield.md)[]                                                                                               | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |                                                                                                                                                                  |
| `rowVersion`                                                                                                                                                     | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.                       | 1-12345                                                                                                                                                          |
| `updatedBy`                                                                                                                                                      | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | The user who last updated the object.                                                                                                                            | 12345                                                                                                                                                            |
| `createdBy`                                                                                                                                                      | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | The user who created the object.                                                                                                                                 | 12345                                                                                                                                                            |
| `updatedAt`                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                    | :heavy_minus_sign:                                                                                                                                               | The date and time when the object was last updated.                                                                                                              | 2020-09-30T07:43:32.000Z                                                                                                                                         |
| `createdAt`                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                    | :heavy_minus_sign:                                                                                                                                               | The date and time when the object was created.                                                                                                                   | 2020-09-30T07:43:32.000Z                                                                                                                                         |
| `passThrough`                                                                                                                                                    | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                                       | :heavy_minus_sign:                                                                                                                                               | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.          |                                                                                                                                                                  |