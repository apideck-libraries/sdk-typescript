# AccountingPurchaseOrdersUpdateRequest

## Example Usage

```typescript
import { AccountingPurchaseOrdersUpdateRequest } from "@apideck/unify/models/operations";
import { RFCDate } from "@apideck/unify/types";

let value: AccountingPurchaseOrdersUpdateRequest = {
  id: "<id>",
  serviceId: "salesforce",
  purchaseOrder: {
    displayId: "12345",
    poNumber: "90000117",
    reference: "123456",
    supplier: null,
    subsidiaryId: "12345",
    companyId: "12345",
    departmentId: "12345",
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
        serviceDate: new RFCDate("2024-01-15"),
        categoryId: "12345",
        locationId: "12345",
        departmentId: "12345",
        subsidiaryId: "12345",
        shippingId: "12345",
        memo: "Some memo",
        prepaid: true,
        item: {
          id: "12344",
          code: "120-C",
          name: "Model Y",
        },
        taxApplicableOn: "Domestic_Purchase_of_Goods_and_Services",
        taxRecoverability: "Fully_Recoverable",
        taxMethod: "Due_to_Supplier",
        worktags: [
          {
            id: "123456",
            value: "New York",
          },
        ],
        taxRate: {
          id: "123456",
          code: "N-T",
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
    ledgerAccount: {
      id: "123456",
      name: "Bank account",
      nominalCode: "N091",
      code: "453",
      parentId: "123456",
      displayId: "123456",
    },
    templateId: "123456",
    discountPercentage: 5.5,
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
    accountingByRow: false,
    dueDate: new RFCDate("2020-10-30"),
    paymentMethod: "cash",
    terms: "Net 30 days",
    taxCode: "1234",
    taxMethod: "Due to supplier",
    issuedMethod: "Email",
    issuedEmail: "john.doe@example.com",
    channel: "email",
    memo: "Thank you for the partnership and have a great day!",
    notes: "This is a test purchase order",
    trackingCategories: [
      {
        id: "123456",
        name: "New York",
        parentId: "123456",
        parentName: "New York",
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

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                          | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | ID of the record you are acting upon.                                                                                                         |                                                                                                                                               |
| `consumerId`                                                                                                                                  | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | ID of the consumer which you want to get or push data from                                                                                    | test-consumer                                                                                                                                 |
| `appId`                                                                                                                                       | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The ID of your Unify application                                                                                                              | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                                                                       |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `raw`                                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Include raw response. Mostly used for debugging purposes                                                                                      |                                                                                                                                               |
| `purchaseOrder`                                                                                                                               | [components.PurchaseOrderInput](../../models/components/purchaseorderinput.md)                                                                | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |