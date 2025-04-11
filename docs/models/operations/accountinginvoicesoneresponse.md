# AccountingInvoicesOneResponse

## Example Usage

```typescript
import { AccountingInvoicesOneResponse } from "@apideck/unify/models/operations";
import { RFCDate } from "@apideck/unify/types";

let value: AccountingInvoicesOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getInvoiceResponse: {
    statusCode: 200,
    status: "OK",
    service: "xero",
    resource: "invoices",
    operation: "one",
    data: {
      id: "12345",
      downstreamId: "12345",
      type: "service",
      number: "OIT00546",
      customer: {
        id: "12345",
        displayId: "CUST00101",
        displayName: "Windsurf Shop",
        companyName: "The boring company",
        email: "boring@boring.com",
      },
      companyId: "12345",
      invoiceDate: new RFCDate("2020-09-30"),
      dueDate: new RFCDate("2020-09-30"),
      terms: "Net 30 days",
      poNumber: "90000117",
      reference: "123456",
      status: "draft",
      invoiceSent: true,
      currency: "USD",
      currencyRate: 0.69,
      taxInclusive: true,
      subTotal: 27500,
      totalTax: 2500,
      taxCode: "1234",
      discountPercentage: 5.5,
      discountAmount: 25,
      total: 27500,
      balance: 27500,
      deposit: 0,
      customerMemo: "Thank you for your business and have a great day!",
      trackingCategories: [
        {
          id: "123456",
          name: "New York",
        },
      ],
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
      templateId: "123456",
      sourceDocumentUrl: "https://www.invoicesolution.com/invoice/123456",
      paymentAllocations: [
        {
          id: "123456",
          allocatedAmount: 1000,
          date: new Date("2020-09-30T07:43:32.000Z"),
        },
      ],
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
      },
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
            {},
          ],
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
    detail: {
      "missing": [
        {
          "x-apideck-consumer-id": "required",
        },
      ],
    },
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getInvoiceResponse`                                                                     | [components.GetInvoiceResponse](../../models/components/getinvoiceresponse.md)           | :heavy_minus_sign:                                                                       | Invoice                                                                                  |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |