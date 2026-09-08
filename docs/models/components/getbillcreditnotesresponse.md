# GetBillCreditNotesResponse

Bill Credit Notes

## Example Usage

```typescript
import { GetBillCreditNotesResponse } from "@apideck/unify/models/components";

let value: GetBillCreditNotesResponse = {
  statusCode: 200,
  status: "OK",
  service: "microsoft-dynamics-365-business-central",
  resource: "bill-credit-notes",
  operation: "all",
  data: [
    {
      id: "123456",
      number: "OIT00546",
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
      subsidiary: {
        id: "12345",
        displayId: "123456",
        name: "Acme Inc.",
      },
      location: {
        id: "123456",
        displayId: "123456",
        name: "New York Office",
        downstreamId: "12345",
      },
      department: {
        id: "12345",
        displayId: "123456",
        name: "Acme Inc.",
        downstreamId: "12345",
      },
      currency: "USD",
      currencyRate: 0.69,
      taxInclusive: true,
      subTotal: 27500,
      totalAmount: 49.99,
      totalTax: 2500,
      taxCode: "1234",
      balance: 27500,
      remainingCredit: 27500,
      status: "authorised",
      reference: "123456",
      dateIssued: new Date("2021-05-01T12:00:00.000Z"),
      datePaid: new Date("2021-05-01T12:00:00.000Z"),
      type: "accounts_payable_credit",
      account: {
        id: "123456",
        name: "Bank account",
        nominalCode: "N091",
        code: "453",
        parentId: "123456",
        displayId: "123456",
      },
      lineItems: [
        {
          id: "12345",
          rowId: "12345",
          code: "120-C",
          lineNumber: 1,
          description: "Returned goods credit",
          type: "expense_account",
          taxAmount: 27.5,
          totalAmount: 27500,
          quantity: 1,
          unitPrice: 27500.5,
          unitOfMeasure: "pc.",
          discountPercentage: 0.01,
          discountAmount: 19.99,
          serviceDate: new Date("2024-01-15"),
          location: {
            id: "123456",
            displayId: "123456",
            name: "New York Office",
            downstreamId: "12345",
          },
          department: {
            id: "12345",
            displayId: "123456",
            name: "Acme Inc.",
            downstreamId: "12345",
          },
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
            parentId: "123456",
            displayId: "123456",
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
          rowVersion: "1-12345",
          updatedBy: "12345",
          createdBy: "12345",
          createdAt: new Date("2020-09-30T07:43:32.000Z"),
          updatedAt: new Date("2020-09-30T07:43:32.000Z"),
        },
      ],
      allocations: [
        {
          id: "123456",
          code: "N091",
          amount: 49.99,
          allocationId: "123456",
        },
      ],
      note: "Some notes about this bill credit note",
      terms: "Some terms about this bill credit note",
      trackingCategories: [
        {
          id: "123456",
          code: "100",
          name: "New York",
          parentId: "123456",
          parentName: "New York",
        },
      ],
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          refName: "Marketing",
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
  ],
  meta: {
    itemsOnPage: 50,
    cursors: {
      previous: "em9oby1jcm06OnBhZ2U6OjE=",
      current: "em9oby1jcm06OnBhZ2U6OjI=",
      next: "em9oby1jcm06OnBhZ2U6OjM=",
    },
    totalCount: 1,
    warnings: [
      {
        type: "downstream_request_failed",
        statusCode: 429,
        operation: "getManager",
      },
    ],
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

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `statusCode`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | HTTP Response Status Code                                                | 200                                                                      |
| `status`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | HTTP Response Status                                                     | OK                                                                       |
| `service`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | Apideck ID of service provider                                           | microsoft-dynamics-365-business-central                                  |
| `resource`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | Unified API resource name                                                | bill-credit-notes                                                        |
| `operation`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Operation performed                                                      | all                                                                      |
| `data`                                                                   | [components.BillCreditNote](../../models/components/billcreditnote.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
| `meta`                                                                   | [components.Meta](../../models/components/meta.md)                       | :heavy_minus_sign:                                                       | Response metadata                                                        |                                                                          |
| `links`                                                                  | [components.Links](../../models/components/links.md)                     | :heavy_minus_sign:                                                       | Links to navigate to previous or next pages through the API              |                                                                          |
| `raw`                                                                    | Record<string, *any*>                                                    | :heavy_minus_sign:                                                       | Raw response from the integration when raw=true query param is provided  |                                                                          |