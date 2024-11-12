# JournalEntryLineItem

## Example Usage

```typescript
import { JournalEntryLineItem } from "apideck/models/components";

let value: JournalEntryLineItem = {
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
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | A unique identifier for an object.                                                                                      | 12345                                                                                                                   |
| `description`                                                                                                           | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | User defined description                                                                                                | Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.    |
| `taxAmount`                                                                                                             | *number*                                                                                                                | :heavy_minus_sign:                                                                                                      | Tax amount                                                                                                              | 27500                                                                                                                   |
| `subTotal`                                                                                                              | *number*                                                                                                                | :heavy_minus_sign:                                                                                                      | Sub-total amount, normally before tax.                                                                                  | 27500                                                                                                                   |
| `totalAmount`                                                                                                           | *number*                                                                                                                | :heavy_minus_sign:                                                                                                      | Debit entries are considered positive, and credit entries are considered negative.                                      | 27500                                                                                                                   |
| `type`                                                                                                                  | [components.JournalEntryLineItemType](../../models/components/journalentrylineitemtype.md)                              | :heavy_check_mark:                                                                                                      | Debit entries are considered positive, and credit entries are considered negative.                                      | debit                                                                                                                   |
| `taxRate`                                                                                                               | [components.LinkedTaxRate](../../models/components/linkedtaxrate.md)                                                    | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| ~~`trackingCategory`~~                                                                                                  | [components.DeprecatedLinkedTrackingCategory](../../models/components/deprecatedlinkedtrackingcategory.md)              | :heavy_minus_sign:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |                                                                                                                         |
| `trackingCategories`                                                                                                    | [components.LinkedTrackingCategory](../../models/components/linkedtrackingcategory.md)[]                                | :heavy_minus_sign:                                                                                                      | A list of linked tracking categories.                                                                                   |                                                                                                                         |
| `ledgerAccount`                                                                                                         | [components.LinkedLedgerAccount](../../models/components/linkedledgeraccount.md)                                        | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `customer`                                                                                                              | [components.LinkedCustomer](../../models/components/linkedcustomer.md)                                                  | :heavy_minus_sign:                                                                                                      | The customer this entity is linked to.                                                                                  |                                                                                                                         |
| `supplier`                                                                                                              | [components.LinkedSupplier](../../models/components/linkedsupplier.md)                                                  | :heavy_minus_sign:                                                                                                      | The supplier this entity is linked to.                                                                                  |                                                                                                                         |
| `departmentId`                                                                                                          | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | A unique identifier for an object.                                                                                      | 12345                                                                                                                   |
| `locationId`                                                                                                            | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | A unique identifier for an object.                                                                                      | 12345                                                                                                                   |
| `lineNumber`                                                                                                            | *number*                                                                                                                | :heavy_minus_sign:                                                                                                      | Line number of the resource                                                                                             | 1                                                                                                                       |