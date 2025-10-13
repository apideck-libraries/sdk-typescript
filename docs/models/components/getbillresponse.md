# GetBillResponse

Bill

## Example Usage

```typescript
import { GetBillResponse } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: GetBillResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "bills",
  operation: "one",
  data: {
    id: "12345",
    downstreamId: "12345",
    displayId: "123456",
    billNumber: "10001",
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
    companyId: "12345",
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
        id: "12345",
        rowId: "12345",
        code: "120-C",
        lineNumber: 1,
        description:
          "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
        type: "expense_account",
        taxAmount: 27500,
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
          name: "GST on Purchases",
          rate: 10,
        },
        ledgerAccount: {
          id: "123456",
          name: "Bank account",
          nominalCode: "N091",
          code: "453",
        },
        purchaseOrder: {
          id: "123456",
          lineId: "123456",
          lineNumber: "1",
        },
        trackingCategories: [
          {
            id: "123456",
            name: "New York",
            parentId: "123456",
            parentName: "New York",
          },
        ],
        customer: {
          id: "12345",
          displayId: "CUST00101",
          displayName: "Windsurf Shop",
          companyName: "The boring company",
          email: "boring@boring.com",
        },
        rebilling: null,
        rowVersion: "1-12345",
        updatedBy: "12345",
        createdBy: "12345",
        createdAt: new Date("2020-09-30T07:43:32.000Z"),
        updatedAt: new Date("2020-09-30T07:43:32.000Z"),
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
    subTotal: 27500,
    totalTax: 2500,
    total: 27500,
    taxCode: "1234",
    notes: "Some notes about this bill.",
    status: "draft",
    ledgerAccount: {
      id: "123456",
      name: "Bank account",
      nominalCode: "N091",
      code: "453",
    },
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
    discountPercentage: 5.5,
    templateId: "123456",
    approvedBy: "John Doe",
    taxMethod: "Due to supplier",
    documentReceived: true,
    sourceDocumentUrl: "https://www.invoicesolution.com/bill/123456",
    trackingCategories: [
      {
        id: "123456",
        name: "New York",
        parentId: "123456",
        parentName: "New York",
      },
    ],
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
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP Response Status Code                                               | 200                                                                     |
| `status`                                                                | *string*                                                                | :heavy_check_mark:                                                      | HTTP Response Status                                                    | OK                                                                      |
| `service`                                                               | *string*                                                                | :heavy_check_mark:                                                      | Apideck ID of service provider                                          | xero                                                                    |
| `resource`                                                              | *string*                                                                | :heavy_check_mark:                                                      | Unified API resource name                                               | bills                                                                   |
| `operation`                                                             | *string*                                                                | :heavy_check_mark:                                                      | Operation performed                                                     | one                                                                     |
| `data`                                                                  | [components.Bill](../../models/components/bill.md)                      | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |
| `raw`                                                                   | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | Raw response from the integration when raw=true query param is provided |                                                                         |