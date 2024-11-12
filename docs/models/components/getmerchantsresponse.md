# GetMerchantsResponse

Merchants

## Example Usage

```typescript
import { GetMerchantsResponse } from "apideck/models/components";

let value: GetMerchantsResponse = {
  statusCode: 200,
  status: "OK",
  service: "square",
  resource: "Merchants",
  operation: "all",
  data: [
    {
      id: "12345",
      name: "Dunkin Donuts",
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
      ownerId: "12345",
      mainLocationId: "12345",
      status: "active",
      serviceCharges: [
        {
          id: "12345",
          name: "Charge for delivery",
          amount: 27500,
          percentage: 12.5,
          currency: "USD",
          active: true,
        },
      ],
      language: "EN",
      currency: "USD",
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

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `statusCode`                                                 | *number*                                                     | :heavy_check_mark:                                           | HTTP Response Status Code                                    | 200                                                          |
| `status`                                                     | *string*                                                     | :heavy_check_mark:                                           | HTTP Response Status                                         | OK                                                           |
| `service`                                                    | *string*                                                     | :heavy_check_mark:                                           | Apideck ID of service provider                               | square                                                       |
| `resource`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unified API resource name                                    | Merchants                                                    |
| `operation`                                                  | *string*                                                     | :heavy_check_mark:                                           | Operation performed                                          | all                                                          |
| `data`                                                       | [components.Merchant](../../models/components/merchant.md)[] | :heavy_check_mark:                                           | N/A                                                          |                                                              |
| `meta`                                                       | [components.Meta](../../models/components/meta.md)           | :heavy_minus_sign:                                           | Response metadata                                            |                                                              |
| `links`                                                      | [components.Links](../../models/components/links.md)         | :heavy_minus_sign:                                           | Links to navigate to previous or next pages through the API  |                                                              |