# JournalEntry

## Example Usage

```typescript
import { JournalEntry } from "@apideck/unify/models/components";

let value: JournalEntry = {
  id: "12345",
  downstreamId: "12345",
  title: "Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry",
  currencyRate: 0.69,
  currency: "USD",
  companyId: "12345",
  lineItems: [
    {
      id: "12345",
      description:
        "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
      taxAmount: 27500,
      subTotal: 27500,
      totalAmount: 27500,
      type: "debit",
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
          parentId: "123456",
          parentName: "New York",
        },
      ],
      ledgerAccount: {
        id: "123456",
        name: "Bank account",
        nominalCode: "N091",
        code: "453",
      },
      customer: {
        id: "12345",
        displayId: "CUST00101",
        displayName: "Windsurf Shop",
        companyName: "The boring company",
        email: "boring@boring.com",
      },
      supplier: {
        id: "12345",
        displayId: "SUPP00101",
        displayName: "Windsurf Shop",
        companyName: "The boring company",
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
      departmentId: "12345",
      locationId: "12345",
      lineNumber: 1,
    },
  ],
  status: "draft",
  memo: "Thank you for your business and have a great day!",
  postedAt: new Date("2020-09-30T07:43:32.000Z"),
  journalSymbol: "IND",
  taxType: "sales",
  taxCode: "1234",
  number: "OIT00546",
  trackingCategories: null,
  accountingPeriod: "01-24",
  taxInclusive: true,
  sourceType: "manual",
  sourceId: "12345",
  updatedBy: "12345",
  createdBy: "12345",
  updatedAt: new Date("2020-09-30T07:43:32.000Z"),
  createdAt: new Date("2020-09-30T07:43:32.000Z"),
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
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             | Example                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                    | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A unique identifier for an object.                                                                                                                      | 12345                                                                                                                                                   |
| `downstreamId`                                                                                                                                          | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The third-party API ID of original entity                                                                                                               | 12345                                                                                                                                                   |
| `title`                                                                                                                                                 | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Journal entry title                                                                                                                                     | Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry                                                                                        |
| `currencyRate`                                                                                                                                          | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Currency Exchange Rate at the time entity was recorded/generated.                                                                                       | 0.69                                                                                                                                                    |
| `currency`                                                                                                                                              | [components.Currency](../../models/components/currency.md)                                                                                              | :heavy_minus_sign:                                                                                                                                      | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).                      | USD                                                                                                                                                     |
| `companyId`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The company ID the transaction belongs to                                                                                                               | 12345                                                                                                                                                   |
| `lineItems`                                                                                                                                             | [components.JournalEntryLineItem](../../models/components/journalentrylineitem.md)[]                                                                    | :heavy_minus_sign:                                                                                                                                      | Requires a minimum of 2 line items that sum to 0                                                                                                        |                                                                                                                                                         |
| `status`                                                                                                                                                | [components.JournalEntryStatus](../../models/components/journalentrystatus.md)                                                                          | :heavy_minus_sign:                                                                                                                                      | Journal entry status                                                                                                                                    | draft                                                                                                                                                   |
| `memo`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Reference for the journal entry.                                                                                                                        | Thank you for your business and have a great day!                                                                                                       |
| `postedAt`                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_minus_sign:                                                                                                                                      | This is the date on which the journal entry was added. This can be different from the creation date and can also be backdated.                          | 2020-09-30T07:43:32.000Z                                                                                                                                |
| `journalSymbol`                                                                                                                                         | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Journal symbol of the entry. For example IND for indirect costs                                                                                         | IND                                                                                                                                                     |
| `taxType`                                                                                                                                               | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The specific category of tax associated with a transaction like sales or purchase                                                                       | sales                                                                                                                                                   |
| `taxCode`                                                                                                                                               | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Applicable tax id/code override if tax is not supplied on a line item basis.                                                                            | 1234                                                                                                                                                    |
| `number`                                                                                                                                                | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Journal entry number.                                                                                                                                   | OIT00546                                                                                                                                                |
| `trackingCategories`                                                                                                                                    | [components.LinkedTrackingCategory](../../models/components/linkedtrackingcategory.md)[]                                                                | :heavy_minus_sign:                                                                                                                                      | A list of linked tracking categories.                                                                                                                   |                                                                                                                                                         |
| `accountingPeriod`                                                                                                                                      | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Accounting period                                                                                                                                       | 01-24                                                                                                                                                   |
| `taxInclusive`                                                                                                                                          | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Amounts are including tax                                                                                                                               | true                                                                                                                                                    |
| `sourceType`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The source type of the journal entry                                                                                                                    | manual                                                                                                                                                  |
| `sourceId`                                                                                                                                              | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A unique identifier for the source of the journal entry                                                                                                 | 12345                                                                                                                                                   |
| `customMappings`                                                                                                                                        | Record<string, *any*>                                                                                                                                   | :heavy_minus_sign:                                                                                                                                      | When custom mappings are configured on the resource, the result is included here.                                                                       |                                                                                                                                                         |
| `updatedBy`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The user who last updated the object.                                                                                                                   | 12345                                                                                                                                                   |
| `createdBy`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The user who created the object.                                                                                                                        | 12345                                                                                                                                                   |
| `updatedAt`                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_minus_sign:                                                                                                                                      | The date and time when the object was last updated.                                                                                                     | 2020-09-30T07:43:32.000Z                                                                                                                                |
| `createdAt`                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_minus_sign:                                                                                                                                      | The date and time when the object was created.                                                                                                          | 2020-09-30T07:43:32.000Z                                                                                                                                |
| `rowVersion`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.              | 1-12345                                                                                                                                                 |
| `customFields`                                                                                                                                          | [components.CustomField](../../models/components/customfield.md)[]                                                                                      | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |