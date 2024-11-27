# AccountingCreditNotesOneResponse

## Example Usage

```typescript
import { AccountingCreditNotesOneResponse } from "@apideck/sdk/models/operations";

let value: AccountingCreditNotesOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getCreditNoteResponse: {
    statusCode: 200,
    status: "OK",
    service: "xero",
    resource: "credit-notes",
    operation: "one",
    data: {
      id: "123456",
      number: "OIT00546",
      customer: {
        id: "12345",
        displayId: "CUST00101",
        displayName: "Windsurf Shop",
        companyName: "The boring company",
        email: "boring@boring.com",
      },
      companyId: "12345",
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
      type: "accounts_receivable_credit",
      account: {
        id: "123456",
        name: "Bank account",
        nominalCode: "N091",
        code: "453",
      },
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
          locationId: "1234",
          departmentId: "1234",
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
              value: [
                "<value>",
              ],
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
      note: "Some notes about this credit note",
      terms: "Some terms about this credit note",
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
        },
      ],
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: true,
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
  },
  unexpectedErrorResponse: {
    statusCode: 400,
    error: "Bad Request",
    typeName: "RequestHeadersValidationError",
    message: "Invalid Params",
    detail: "Missing Header: x-apideck-consumer-id",
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getCreditNoteResponse`                                                                  | [components.GetCreditNoteResponse](../../models/components/getcreditnoteresponse.md)     | :heavy_minus_sign:                                                                       | Credit Note                                                                              |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |