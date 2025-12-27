# Quote

## Example Usage

```typescript
import { Quote } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: Quote = {
  id: "12345",
  downstreamId: "12345",
  number: "QT00546",
  customer: {
    id: "12345",
    displayId: "CUST00101",
    displayName: "Windsurf Shop",
    companyName: "The boring company",
    email: "boring@boring.com",
  },
  invoiceId: "123456",
  salesOrderId: "123456",
  companyId: "12345",
  departmentId: "12345",
  projectId: "12345",
  quoteDate: new RFCDate("2020-09-30"),
  expiryDate: new RFCDate("2020-10-30"),
  terms: "Valid for 30 days",
  reference: "INV-2024-001",
  status: "draft",
  currency: "USD",
  currencyRate: 0.69,
  taxInclusive: true,
  subTotal: 27500,
  totalTax: 2500,
  taxCode: "1234",
  discountPercentage: 5.5,
  discountAmount: 25,
  total: 27500,
  customerMemo: "Thank you for considering our services!",
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
      serviceDate: new RFCDate("2024-01-15"),
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
          code: "100",
          name: "New York",
          parentId: "123456",
          parentName: "New York",
        },
      ],
      ledgerAccount: {
        id: "123456",
        name: "Bank account",
        nominalCode: "N091",
        code: "453",
        parentId: "123456",
        displayId: "123456",
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
  shippingAddress: {
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
  trackingCategories: [
    {
      id: "123456",
      code: "100",
      name: "New York",
      parentId: "123456",
      parentName: "New York",
    },
  ],
  templateId: "123456",
  sourceDocumentUrl: "https://www.quotesolution.com/quote/123456",
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
| `id`                                                                                                                                                    | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A unique identifier for an object.                                                                                                                      | 12345                                                                                                                                                   |
| `downstreamId`                                                                                                                                          | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The third-party API ID of original entity                                                                                                               | 12345                                                                                                                                                   |
| `number`                                                                                                                                                | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Quote number.                                                                                                                                           | QT00546                                                                                                                                                 |
| `customer`                                                                                                                                              | [components.LinkedCustomer](../../models/components/linkedcustomer.md)                                                                                  | :heavy_minus_sign:                                                                                                                                      | The customer this entity is linked to.                                                                                                                  |                                                                                                                                                         |
| `invoiceId`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The unique identifier for the invoice.                                                                                                                  | 123456                                                                                                                                                  |
| `salesOrderId`                                                                                                                                          | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The unique identifier for the sales order.                                                                                                              | 123456                                                                                                                                                  |
| `companyId`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The company ID the transaction belongs to                                                                                                               | 12345                                                                                                                                                   |
| `departmentId`                                                                                                                                          | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The ID of the department                                                                                                                                | 12345                                                                                                                                                   |
| `projectId`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The unique identifier for the linked project.                                                                                                           | 12345                                                                                                                                                   |
| `quoteDate`                                                                                                                                             | [RFCDate](../../types/rfcdate.md)                                                                                                                       | :heavy_minus_sign:                                                                                                                                      | Date quote was issued - YYYY-MM-DD.                                                                                                                     | 2020-09-30                                                                                                                                              |
| `expiryDate`                                                                                                                                            | [RFCDate](../../types/rfcdate.md)                                                                                                                       | :heavy_minus_sign:                                                                                                                                      | The date until which the quote is valid - YYYY-MM-DD.                                                                                                   | 2020-10-30                                                                                                                                              |
| `terms`                                                                                                                                                 | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Terms of the quote.                                                                                                                                     | Valid for 30 days                                                                                                                                       |
| `reference`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Optional reference identifier for the transaction.                                                                                                      | INV-2024-001                                                                                                                                            |
| `status`                                                                                                                                                | [components.QuoteStatus](../../models/components/quotestatus.md)                                                                                        | :heavy_minus_sign:                                                                                                                                      | Quote status                                                                                                                                            | draft                                                                                                                                                   |
| `currency`                                                                                                                                              | [components.Currency](../../models/components/currency.md)                                                                                              | :heavy_minus_sign:                                                                                                                                      | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).                      | USD                                                                                                                                                     |
| `currencyRate`                                                                                                                                          | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Currency Exchange Rate at the time entity was recorded/generated.                                                                                       | 0.69                                                                                                                                                    |
| `taxInclusive`                                                                                                                                          | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Amounts are including tax                                                                                                                               | true                                                                                                                                                    |
| `subTotal`                                                                                                                                              | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Sub-total amount, normally before tax.                                                                                                                  | 27500                                                                                                                                                   |
| `totalTax`                                                                                                                                              | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Total tax amount applied to this quote.                                                                                                                 | 2500                                                                                                                                                    |
| `taxCode`                                                                                                                                               | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Applicable tax id/code override if tax is not supplied on a line item basis.                                                                            | 1234                                                                                                                                                    |
| `discountPercentage`                                                                                                                                    | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Discount percentage applied to this quote.                                                                                                              | 5.5                                                                                                                                                     |
| `discountAmount`                                                                                                                                        | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Discount amount applied to this quote.                                                                                                                  | 25                                                                                                                                                      |
| `total`                                                                                                                                                 | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Total amount of quote, including tax.                                                                                                                   | 27500                                                                                                                                                   |
| `customerMemo`                                                                                                                                          | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Customer memo                                                                                                                                           | Thank you for considering our services!                                                                                                                 |
| `lineItems`                                                                                                                                             | [components.QuoteLineItem](../../models/components/quotelineitem.md)[]                                                                                  | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `billingAddress`                                                                                                                                        | [components.Address](../../models/components/address.md)                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `shippingAddress`                                                                                                                                       | [components.Address](../../models/components/address.md)                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `trackingCategories`                                                                                                                                    | [components.LinkedTrackingCategory](../../models/components/linkedtrackingcategory.md)[]                                                                | :heavy_minus_sign:                                                                                                                                      | A list of linked tracking categories.                                                                                                                   |                                                                                                                                                         |
| `templateId`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Optional quote template                                                                                                                                 | 123456                                                                                                                                                  |
| `sourceDocumentUrl`                                                                                                                                     | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | URL link to a source document - shown as 'Go to [appName]' in the downstream app.                                                                       | https://www.quotesolution.com/quote/123456                                                                                                              |
| `customFields`                                                                                                                                          | *components.CustomField*[]                                                                                                                              | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `rowVersion`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.              | 1-12345                                                                                                                                                 |
| `updatedBy`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The user who last updated the object.                                                                                                                   | 12345                                                                                                                                                   |
| `createdBy`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The user who created the object.                                                                                                                        | 12345                                                                                                                                                   |
| `updatedAt`                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_minus_sign:                                                                                                                                      | The date and time when the object was last updated.                                                                                                     | 2020-09-30T07:43:32.000Z                                                                                                                                |
| `createdAt`                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_minus_sign:                                                                                                                                      | The date and time when the object was created.                                                                                                          | 2020-09-30T07:43:32.000Z                                                                                                                                |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |