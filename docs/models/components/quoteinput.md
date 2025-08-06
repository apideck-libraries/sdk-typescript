# QuoteInput

## Example Usage

```typescript
import { QuoteInput } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: QuoteInput = {
  number: "QT00546",
  customer: {
    id: "12345",
    displayName: "Windsurf Shop",
    email: "boring@boring.com",
  },
  salesOrderId: "123456",
  companyId: "12345",
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
        rate: 10,
      },
      trackingCategories: [
        {
          id: "123456",
          name: "New York",
          parentId: "123456",
          parentName: "New York",
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
| `number`                                                                                                                                                | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Quote number.                                                                                                                                           | QT00546                                                                                                                                                 |
| `customer`                                                                                                                                              | [components.LinkedCustomerInput](../../models/components/linkedcustomerinput.md)                                                                        | :heavy_minus_sign:                                                                                                                                      | The customer this entity is linked to.                                                                                                                  |                                                                                                                                                         |
| `salesOrderId`                                                                                                                                          | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The unique identifier for the sales order.                                                                                                              | 123456                                                                                                                                                  |
| `companyId`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The company or subsidiary id the transaction belongs to                                                                                                 | 12345                                                                                                                                                   |
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
| `lineItems`                                                                                                                                             | [components.QuoteLineItemInput](../../models/components/quotelineiteminput.md)[]                                                                        | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `billingAddress`                                                                                                                                        | [components.Address](../../models/components/address.md)                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `shippingAddress`                                                                                                                                       | [components.Address](../../models/components/address.md)                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `trackingCategories`                                                                                                                                    | [components.LinkedTrackingCategory](../../models/components/linkedtrackingcategory.md)[]                                                                | :heavy_minus_sign:                                                                                                                                      | A list of linked tracking categories.                                                                                                                   |                                                                                                                                                         |
| `templateId`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Optional quote template                                                                                                                                 | 123456                                                                                                                                                  |
| `sourceDocumentUrl`                                                                                                                                     | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | URL link to a source document - shown as 'Go to [appName]' in the downstream app.                                                                       | https://www.quotesolution.com/quote/123456                                                                                                              |
| `customFields`                                                                                                                                          | [components.CustomField](../../models/components/customfield.md)[]                                                                                      | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `rowVersion`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.              | 1-12345                                                                                                                                                 |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |