# GetAccountingLocationsResponse

Locations

## Example Usage

```typescript
import { GetAccountingLocationsResponse } from "@apideck/unify/models/components";

let value: GetAccountingLocationsResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "subsidiaries",
  operation: "all",
  data: [
    {
      id: "12345",
      parentId: "12345",
      companyName: "SpaceX",
      displayName: "11 UT - South Jordan",
      status: "active",
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
      subsidiaries: [
        {
          id: "12345",
          name: "SpaceX",
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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `statusCode`                                                                     | *number*                                                                         | :heavy_check_mark:                                                               | HTTP Response Status Code                                                        | 200                                                                              |
| `status`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | HTTP Response Status                                                             | OK                                                                               |
| `service`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Apideck ID of service provider                                                   | xero                                                                             |
| `resource`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | Unified API resource name                                                        | subsidiaries                                                                     |
| `operation`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | Operation performed                                                              | all                                                                              |
| `data`                                                                           | [components.AccountingLocation](../../models/components/accountinglocation.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `meta`                                                                           | [components.Meta](../../models/components/meta.md)                               | :heavy_minus_sign:                                                               | Response metadata                                                                |                                                                                  |
| `links`                                                                          | [components.Links](../../models/components/links.md)                             | :heavy_minus_sign:                                                               | Links to navigate to previous or next pages through the API                      |                                                                                  |
| `raw`                                                                            | Record<string, *any*>                                                            | :heavy_minus_sign:                                                               | Raw response from the integration when raw=true query param is provided          |                                                                                  |