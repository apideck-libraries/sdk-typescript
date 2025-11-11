# AccountingSuppliersAddRequest

## Example Usage

```typescript
import { AccountingSuppliersAddRequest } from "@apideck/unify/models/operations";

let value: AccountingSuppliersAddRequest = {
  serviceId: "salesforce",
  supplier: {
    displayId: "EMP00101",
    displayName: "Windsurf Shop",
    companyName: "SpaceX",
    companyId: "12345",
    supplierCategory: "Insurance",
    title: "CEO",
    firstName: "Elon",
    middleName: "D.",
    lastName: "Musk",
    suffix: "Jr.",
    individual: true,
    addresses: [
      {
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
    ],
    phoneNumbers: [
      {
        id: "12345",
        countryCode: "1",
        areaCode: "323",
        number: "111-111-1111",
        extension: "105",
        type: "primary",
      },
    ],
    emails: [
      {
        id: "123",
        email: "elon@musk.com",
        type: "primary",
      },
    ],
    websites: [
      {
        id: "12345",
        url: "http://example.com",
        type: "primary",
      },
    ],
    bankAccounts: [
      {
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
    ],
    notes: "Some notes about this supplier",
    taxRate: {
      id: "123456",
      code: "N-T",
      rate: 10,
    },
    taxNumber: "US123945459",
    taxable: true,
    currency: "USD",
    account: null,
    status: "active",
    paymentMethod: "cash",
    terms: "Net 30 days",
    channel: "email",
    issuedMethod: "Email",
    issuedEmail: "john.doe@example.com",
    customFields: [
      {
        id: "2389328923893298",
        name: "employee_level",
        description: "Employee Level",
        value: "Uses Salesforce and Marketo",
      },
    ],
    taxDetails: [
      {
        type: "GST on Purchases",
        number: "123456",
        isTransactionTax: true,
        isPrimaryTax: true,
      },
    ],
    taxStatusDetails: [
      {
        country: "US",
        transactionTaxStatus: "taxable",
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
    subsidiaryId: "12345",
    integrationSystemId: "12345",
  },
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `raw`                                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Include raw response. Mostly used for debugging purposes                                                                                      |                                                                                                                                               |
| `consumerId`                                                                                                                                  | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | ID of the consumer which you want to get or push data from                                                                                    | test-consumer                                                                                                                                 |
| `appId`                                                                                                                                       | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The ID of your Unify application                                                                                                              | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                                                                       |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `supplier`                                                                                                                                    | [components.SupplierInput](../../models/components/supplierinput.md)                                                                          | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |