# BillInput

## Example Usage

```typescript
import { BillInput } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: BillInput = {
  displayId: "123456",
  billNumber: "10001",
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
  locationId: "12345",
  departmentId: "12345",
  currency: "USD",
  currencyRate: 0.69,
  taxInclusive: true,
  billDate: new RFCDate("2020-09-30"),
  dueDate: new RFCDate("2020-10-30"),
  paidDate: new RFCDate("2020-10-30"),
  poNumber: "90000117",
  reference: "INV-2024-001",
  lineItems: [
    {
      rowId: "12345",
      code: "120-C",
      lineNumber: 1,
      description:
        "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
      type: "expense_account",
      taxAmount: 27.5,
      totalAmount: 27500,
      quantity: 1,
      unitPrice: 27500.5,
      unitOfMeasure: "pc.",
      discountPercentage: 0.01,
      discountAmount: 19.99,
      locationId: "12345",
      departmentId: "12345",
      subsidiaryId: "12345",
      categoryId: "12345",
      shippingId: "12345",
      memo: "Some memo",
      prepaid: true,
      taxApplicableOn: "Domestic_Purchase_of_Goods_and_Services",
      taxRecoverability: "Fully_Recoverable",
      taxMethod: "Due_to_Supplier",
      retentionAmount: 1000,
      paymentAmount: 1000,
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
      purchaseOrder: {
        id: "123456",
        lineId: "123456",
        lineNumber: "1",
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
      customer: {
        id: "12345",
        displayName: "Windsurf Shop",
        email: "boring@boring.com",
      },
      rebilling: {
        rebillable: true,
        rebillStatus: "billed",
        linkedTransactionId: "txn_abc123",
        linkedTransactionLineId: "line_xyz789",
      },
      rowVersion: "1-12345",
      worktags: [
        {
          id: "123456",
          value: "New York",
        },
      ],
    },
  ],
  terms: "Net 30 days",
  balance: 27500,
  deposit: 0,
  subTotal: 250,
  totalTax: 25,
  total: 27500,
  taxCode: "1234",
  notes: "Some notes about this bill.",
  status: "draft",
  ledgerAccount: {
    id: "123456",
    name: "Bank account",
    nominalCode: "N091",
    code: "453",
    parentId: "123456",
    displayId: "123456",
  },
  paymentMethod: "cash",
  channel: "email",
  language: "EN",
  accountingByRow: false,
  bankAccount: {
    bankName: "Chase Bank",
    accountNumber: "123465",
    accountName: "Main Operating Account",
    accountType: "credit_card",
    iban: "GB33BUKB20201555555555",
    bic: "CHASUS33",
    routingNumber: "021000021",
    bsbNumber: "062-001",
    branchIdentifier: "001",
    bankCode: "BNH",
    currency: "USD",
    country: "US",
  },
  discountPercentage: 5.5,
  templateId: "123456",
  approvedBy: "John Doe",
  taxMethod: "Due to supplier",
  documentReceived: true,
  sourceDocumentUrl: "https://www.invoicesolution.com/bill/123456",
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
  customFields: [
    {
      id: "2389328923893298",
      name: "employee_level",
      description: "Employee Level",
      value: "Uses Salesforce and Marketo",
    },
  ],
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
  accountingPeriod: "01-24",
  attachments: [
    {
      name: "sample.jpg",
      mimeType: "image/jpeg",
      isCompressed: false,
      encoding: "base64",
      content: "data:image/jpeg;base64,...",
      notes: "A sample image",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      | Example                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `displayId`                                                                                                                                                      | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Id to be displayed.                                                                                                                                              | 123456                                                                                                                                                           |
| `billNumber`                                                                                                                                                     | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Reference to supplier bill number                                                                                                                                | 10001                                                                                                                                                            |
| `supplier`                                                                                                                                                       | [components.LinkedSupplierInput](../../models/components/linkedsupplierinput.md)                                                                                 | :heavy_minus_sign:                                                                                                                                               | The supplier this entity is linked to.                                                                                                                           |                                                                                                                                                                  |
| `companyId`                                                                                                                                                      | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | The company ID the transaction belongs to                                                                                                                        | 12345                                                                                                                                                            |
| `locationId`                                                                                                                                                     | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | The ID of the location                                                                                                                                           | 12345                                                                                                                                                            |
| `departmentId`                                                                                                                                                   | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | The ID of the department                                                                                                                                         | 12345                                                                                                                                                            |
| `currency`                                                                                                                                                       | [components.Currency](../../models/components/currency.md)                                                                                                       | :heavy_minus_sign:                                                                                                                                               | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).                               | USD                                                                                                                                                              |
| `currencyRate`                                                                                                                                                   | *number*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Currency Exchange Rate at the time entity was recorded/generated.                                                                                                | 0.69                                                                                                                                                             |
| `taxInclusive`                                                                                                                                                   | *boolean*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                               | Amounts are including tax                                                                                                                                        | true                                                                                                                                                             |
| `billDate`                                                                                                                                                       | [RFCDate](../../types/rfcdate.md)                                                                                                                                | :heavy_minus_sign:                                                                                                                                               | Date bill was issued - YYYY-MM-DD.                                                                                                                               | 2020-09-30                                                                                                                                                       |
| `dueDate`                                                                                                                                                        | [RFCDate](../../types/rfcdate.md)                                                                                                                                | :heavy_minus_sign:                                                                                                                                               | The due date is the date on which a payment is scheduled to be received - YYYY-MM-DD.                                                                            | 2020-10-30                                                                                                                                                       |
| `paidDate`                                                                                                                                                       | [RFCDate](../../types/rfcdate.md)                                                                                                                                | :heavy_minus_sign:                                                                                                                                               | The paid date is the date on which a payment was sent to the supplier - YYYY-MM-DD.                                                                              | 2020-10-30                                                                                                                                                       |
| `poNumber`                                                                                                                                                       | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order. | 90000117                                                                                                                                                         |
| `reference`                                                                                                                                                      | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Optional reference identifier for the transaction.                                                                                                               | INV-2024-001                                                                                                                                                     |
| `lineItems`                                                                                                                                                      | [components.BillLineItemInput](../../models/components/billlineiteminput.md)[]                                                                                   | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |                                                                                                                                                                  |
| `terms`                                                                                                                                                          | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Terms of payment.                                                                                                                                                | Net 30 days                                                                                                                                                      |
| `balance`                                                                                                                                                        | *number*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Balance of bill due.                                                                                                                                             | 27500                                                                                                                                                            |
| `deposit`                                                                                                                                                        | *number*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Amount of deposit made to this bill.                                                                                                                             | 0                                                                                                                                                                |
| `subTotal`                                                                                                                                                       | *number*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Subtotal amount, normally before tax.                                                                                                                            | 250                                                                                                                                                              |
| `totalTax`                                                                                                                                                       | *number*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Total tax amount applied to this transaction.                                                                                                                    | 25                                                                                                                                                               |
| `total`                                                                                                                                                          | *number*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Total amount of bill, including tax.                                                                                                                             | 27500                                                                                                                                                            |
| `taxCode`                                                                                                                                                        | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Applicable tax id/code override if tax is not supplied on a line item basis.                                                                                     | 1234                                                                                                                                                             |
| `notes`                                                                                                                                                          | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              | Some notes about this bill.                                                                                                                                      |
| `status`                                                                                                                                                         | [components.BillStatus](../../models/components/billstatus.md)                                                                                                   | :heavy_minus_sign:                                                                                                                                               | Invoice status                                                                                                                                                   | draft                                                                                                                                                            |
| `ledgerAccount`                                                                                                                                                  | [components.LinkedLedgerAccount](../../models/components/linkedledgeraccount.md)                                                                                 | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |                                                                                                                                                                  |
| `paymentMethod`                                                                                                                                                  | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Payment method used for the transaction, such as cash, credit card, bank transfer, or check                                                                      | cash                                                                                                                                                             |
| `channel`                                                                                                                                                        | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | The channel through which the transaction is processed.                                                                                                          | email                                                                                                                                                            |
| `language`                                                                                                                                                       | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | language code according to ISO 639-1. For the United States - EN                                                                                                 | EN                                                                                                                                                               |
| `accountingByRow`                                                                                                                                                | *boolean*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                               | Indicates if accounting by row is used (true) or not (false). Accounting by row means that a separate ledger transaction is created for each row.                | false                                                                                                                                                            |
| `bankAccount`                                                                                                                                                    | [components.BankAccount](../../models/components/bankaccount.md)                                                                                                 | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |                                                                                                                                                                  |
| `discountPercentage`                                                                                                                                             | *number*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Discount percentage applied to this transaction.                                                                                                                 | 5.5                                                                                                                                                              |
| `templateId`                                                                                                                                                     | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Optional bill template                                                                                                                                           | 123456                                                                                                                                                           |
| `approvedBy`                                                                                                                                                     | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | The user who approved the bill                                                                                                                                   | John Doe                                                                                                                                                         |
| `amortizationType`                                                                                                                                               | [components.AmortizationType](../../models/components/amortizationtype.md)                                                                                       | :heavy_minus_sign:                                                                                                                                               | Type of amortization                                                                                                                                             |                                                                                                                                                                  |
| `taxMethod`                                                                                                                                                      | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Method of tax calculation                                                                                                                                        | Due to supplier                                                                                                                                                  |
| `documentReceived`                                                                                                                                               | *boolean*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                               | Whether the document has been received                                                                                                                           | true                                                                                                                                                             |
| `sourceDocumentUrl`                                                                                                                                              | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | URL link to a source document - shown as 'Go to [appName]' in the downstream app. Currently only supported for Xero.                                             | https://www.invoicesolution.com/bill/123456                                                                                                                      |
| `trackingCategories`                                                                                                                                             | [components.LinkedTrackingCategory](../../models/components/linkedtrackingcategory.md)[]                                                                         | :heavy_minus_sign:                                                                                                                                               | A list of linked tracking categories.                                                                                                                            |                                                                                                                                                                  |
| `rowVersion`                                                                                                                                                     | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.                       | 1-12345                                                                                                                                                          |
| `customFields`                                                                                                                                                   | *components.CustomField*[]                                                                                                                                       | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |                                                                                                                                                                  |
| `passThrough`                                                                                                                                                    | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                                       | :heavy_minus_sign:                                                                                                                                               | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.          |                                                                                                                                                                  |
| `accountingPeriod`                                                                                                                                               | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Accounting period                                                                                                                                                | 01-24                                                                                                                                                            |
| `attachments`                                                                                                                                                    | [components.LinkedAttachment](../../models/components/linkedattachment.md)[]                                                                                     | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |                                                                                                                                                                  |