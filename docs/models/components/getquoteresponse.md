# GetQuoteResponse

Quotes

## Example Usage

```typescript
import { GetQuoteResponse } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: GetQuoteResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "Quotes",
  operation: "one",
  data: {
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
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `statusCode`                                         | *number*                                             | :heavy_check_mark:                                   | HTTP Response Status Code                            | 200                                                  |
| `status`                                             | *string*                                             | :heavy_check_mark:                                   | HTTP Response Status                                 | OK                                                   |
| `service`                                            | *string*                                             | :heavy_check_mark:                                   | Apideck ID of service provider                       | quickbooks                                           |
| `resource`                                           | *string*                                             | :heavy_check_mark:                                   | Unified API resource name                            | Quotes                                               |
| `operation`                                          | *string*                                             | :heavy_check_mark:                                   | Operation performed                                  | one                                                  |
| `data`                                               | [components.Quote](../../models/components/quote.md) | :heavy_check_mark:                                   | N/A                                                  |                                                      |