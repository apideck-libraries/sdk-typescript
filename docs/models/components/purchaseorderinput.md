# PurchaseOrderInput

## Example Usage

```typescript
import { PurchaseOrderInput } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: PurchaseOrderInput = {
  poNumber: "90000117",
  reference: "123456",
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
  status: "open",
  issuedDate: new RFCDate("2020-09-30"),
  deliveryDate: new RFCDate("2020-09-30"),
  expectedArrivalDate: new RFCDate("2020-09-30"),
  currency: "USD",
  currencyRate: 0.69,
  subTotal: 27500,
  totalTax: 2500,
  total: 27500,
  taxInclusive: true,
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
          value: true,
        },
      ],
      rowVersion: "1-12345",
    },
  ],
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
  ledgerAccount: {
    id: "123456",
    nominalCode: "N091",
    code: "453",
  },
  templateId: "123456",
  discountPercentage: 5.5,
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
  },
  accountingByRow: false,
  dueDate: new RFCDate("2020-10-30"),
  paymentMethod: "cash",
  taxCode: "1234",
  channel: "email",
  memo: "Thank you for the partnership and have a great day!",
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
      value: [
        {},
      ],
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
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             | Example                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `poNumber`                                                                                                                                              | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A PO Number uniquely identifies a purchase order and is generally defined by the buyer.                                                                 | 90000117                                                                                                                                                |
| `reference`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Optional purchase order reference.                                                                                                                      | 123456                                                                                                                                                  |
| `supplier`                                                                                                                                              | [components.LinkedSupplierInput](../../models/components/linkedsupplierinput.md)                                                                        | :heavy_minus_sign:                                                                                                                                      | The supplier this entity is linked to.                                                                                                                  |                                                                                                                                                         |
| `companyId`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The company or subsidiary id the transaction belongs to                                                                                                 | 12345                                                                                                                                                   |
| `status`                                                                                                                                                | [components.PurchaseOrderStatus](../../models/components/purchaseorderstatus.md)                                                                        | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | open                                                                                                                                                    |
| `issuedDate`                                                                                                                                            | [RFCDate](../../types/rfcdate.md)                                                                                                                       | :heavy_minus_sign:                                                                                                                                      | Date purchase order was issued - YYYY-MM-DD.                                                                                                            | 2020-09-30                                                                                                                                              |
| `deliveryDate`                                                                                                                                          | [RFCDate](../../types/rfcdate.md)                                                                                                                       | :heavy_minus_sign:                                                                                                                                      | The date on which the purchase order is to be delivered - YYYY-MM-DD.                                                                                   | 2020-09-30                                                                                                                                              |
| `expectedArrivalDate`                                                                                                                                   | [RFCDate](../../types/rfcdate.md)                                                                                                                       | :heavy_minus_sign:                                                                                                                                      | The date on which the order is expected to arrive - YYYY-MM-DD.                                                                                         | 2020-09-30                                                                                                                                              |
| `currency`                                                                                                                                              | [components.Currency](../../models/components/currency.md)                                                                                              | :heavy_minus_sign:                                                                                                                                      | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).                      | USD                                                                                                                                                     |
| `currencyRate`                                                                                                                                          | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Currency Exchange Rate at the time entity was recorded/generated.                                                                                       | 0.69                                                                                                                                                    |
| `subTotal`                                                                                                                                              | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Sub-total amount, normally before tax.                                                                                                                  | 27500                                                                                                                                                   |
| `totalTax`                                                                                                                                              | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Total tax amount applied to this invoice.                                                                                                               | 2500                                                                                                                                                    |
| `total`                                                                                                                                                 | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Total amount of invoice, including tax.                                                                                                                 | 27500                                                                                                                                                   |
| `taxInclusive`                                                                                                                                          | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Amounts are including tax                                                                                                                               | true                                                                                                                                                    |
| `lineItems`                                                                                                                                             | [components.InvoiceLineItemInput](../../models/components/invoicelineiteminput.md)[]                                                                    | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `shippingAddress`                                                                                                                                       | [components.Address](../../models/components/address.md)                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `ledgerAccount`                                                                                                                                         | [components.LinkedLedgerAccountInput](../../models/components/linkedledgeraccountinput.md)                                                              | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `templateId`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Optional purchase order template                                                                                                                        | 123456                                                                                                                                                  |
| `discountPercentage`                                                                                                                                    | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Discount percentage applied to this transaction.                                                                                                        | 5.5                                                                                                                                                     |
| `bankAccount`                                                                                                                                           | [components.BankAccount](../../models/components/bankaccount.md)                                                                                        | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `accountingByRow`                                                                                                                                       | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Indicates if accounting by row is used (true) or not (false). Accounting by row means that a separate ledger transaction is created for each row.       | false                                                                                                                                                   |
| `dueDate`                                                                                                                                               | [RFCDate](../../types/rfcdate.md)                                                                                                                       | :heavy_minus_sign:                                                                                                                                      | The due date is the date on which a payment is scheduled to be received - YYYY-MM-DD.                                                                   | 2020-10-30                                                                                                                                              |
| `paymentMethod`                                                                                                                                         | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Payment method used for the transaction, such as cash, credit card, bank transfer, or check                                                             | cash                                                                                                                                                    |
| `taxCode`                                                                                                                                               | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Applicable tax id/code override if tax is not supplied on a line item basis.                                                                            | 1234                                                                                                                                                    |
| `channel`                                                                                                                                               | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The channel through which the transaction is processed.                                                                                                 | email                                                                                                                                                   |
| `memo`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Message for the supplier. This text appears on the Purchase Order.                                                                                      | Thank you for the partnership and have a great day!                                                                                                     |
| `trackingCategories`                                                                                                                                    | [components.LinkedTrackingCategory](../../models/components/linkedtrackingcategory.md)[]                                                                | :heavy_minus_sign:                                                                                                                                      | A list of linked tracking categories.                                                                                                                   |                                                                                                                                                         |
| `customFields`                                                                                                                                          | [components.CustomField](../../models/components/customfield.md)[]                                                                                      | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `rowVersion`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.              | 1-12345                                                                                                                                                 |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |