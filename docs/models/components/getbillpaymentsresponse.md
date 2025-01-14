# GetBillPaymentsResponse

Bill Payments

## Example Usage

```typescript
import { GetBillPaymentsResponse } from "@apideck/unify/models/components";

let value: GetBillPaymentsResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "payments",
  operation: "all",
  data: [
    {
      id: "12345",
      downstreamId: "12345",
      currency: "USD",
      currencyRate: 0.69,
      totalAmount: 49.99,
      reference: "123456",
      paymentMethod: "cash",
      paymentMethodReference: "123456",
      paymentMethodId: "12345",
      account: {
        id: "123456",
        name: "Bank account",
        nominalCode: "N091",
        code: "453",
      },
      transactionDate: new Date("2021-05-01T12:00:00.000Z"),
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
      companyId: "12345",
      reconciled: true,
      status: "authorised",
      type: "accounts_payable",
      allocations: [
        {
          id: "12345",
          type: "bill",
          code: "N091",
          amount: 49.99,
          allocationId: "123456",
        },
      ],
      note: "Some notes about this transaction",
      number: "123456",
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
          value: "Uses Salesforce and Marketo",
        },
      ],
      rowVersion: "1-12345",
      displayId: "123456",
      updatedBy: "12345",
      createdBy: "12345",
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
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
  ],
  meta: {
    itemsOnPage: 50,
    cursors: {
      previous: "em9oby1jcm06OnBhZ2U6OjE=",
      current: "em9oby1jcm06OnBhZ2U6OjI=",
      next: "em9oby1jcm06OnBhZ2U6OjM=",
    },
  },
  links: {
    previous:
      "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D",
    current: "https://unify.apideck.com/crm/companies",
    next:
      "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `statusCode`                                                       | *number*                                                           | :heavy_check_mark:                                                 | HTTP Response Status Code                                          | 200                                                                |
| `status`                                                           | *string*                                                           | :heavy_check_mark:                                                 | HTTP Response Status                                               | OK                                                                 |
| `service`                                                          | *string*                                                           | :heavy_check_mark:                                                 | Apideck ID of service provider                                     | xero                                                               |
| `resource`                                                         | *string*                                                           | :heavy_check_mark:                                                 | Unified API resource name                                          | payments                                                           |
| `operation`                                                        | *string*                                                           | :heavy_check_mark:                                                 | Operation performed                                                | all                                                                |
| `data`                                                             | [components.BillPayment](../../models/components/billpayment.md)[] | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `meta`                                                             | [components.Meta](../../models/components/meta.md)                 | :heavy_minus_sign:                                                 | Response metadata                                                  |                                                                    |
| `links`                                                            | [components.Links](../../models/components/links.md)               | :heavy_minus_sign:                                                 | Links to navigate to previous or next pages through the API        |                                                                    |