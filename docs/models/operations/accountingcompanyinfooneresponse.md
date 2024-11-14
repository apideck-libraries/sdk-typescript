# AccountingCompanyInfoOneResponse

## Example Usage

```typescript
import { AccountingCompanyInfoOneResponse } from "apideck/models/operations";
import { RFCDate } from "apideck/types";

let value: AccountingCompanyInfoOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getCompanyInfoResponse: {
    statusCode: 200,
    status: "OK",
    service: "xero",
    resource: "company-info",
    operation: "one",
    data: {
      id: "12345",
      companyName: "SpaceX",
      status: "active",
      legalName: "SpaceX Inc.",
      country: "US",
      salesTaxNumber: "111.222.333",
      defaultSalesTax: {
        id: "1234",
        name: "GST on Purchases",
        code: "ABN",
        description: "Reduced rate GST Purchases",
        effectiveTaxRate: 10,
        totalTaxRate: 10,
        taxPayableAccountId: "123456",
        taxRemittedAccountId: "123456",
        components: [
          {
            id: "10",
            name: "GST",
            rate: 10,
            compound: true,
          },
        ],
        type: "NONE",
        reportTaxType: "NONE",
        originalTaxRateId: "12345",
        status: "active",
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
      currency: "USD",
      language: "EN",
      fiscalYearStartMonth: "January",
      companyStartDate: new RFCDate("2015-06-05"),
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
      rowVersion: "1-12345",
      updatedBy: "12345",
      createdBy: "12345",
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
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
| `getCompanyInfoResponse`                                                                 | [components.GetCompanyInfoResponse](../../models/components/getcompanyinforesponse.md)   | :heavy_minus_sign:                                                                       | CompanyInfo                                                                              |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |