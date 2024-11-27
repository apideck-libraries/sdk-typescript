# VaultConsumersUpdateResponse

## Example Usage

```typescript
import { VaultConsumersUpdateResponse } from "@apideck/sdk/models/operations";

let value: VaultConsumersUpdateResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  updateConsumerResponse: {
    statusCode: 200,
    status: "OK",
    data: {
      consumerId: "test_consumer_id",
      applicationId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
      metadata: {
        accountName: "SpaceX",
        userName: "Elon Musk",
        email: "elon@musk.com",
        image: "https://www.spacex.com/static/images/share.jpg",
      },
      connections: [
        {
          id: "1111+test_user_id",
          name: "Salesforce",
          icon:
            "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
          logo:
            "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
          website: "https://www.salesforce.com",
          tagLine:
            "CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.",
          serviceId: "teamleader",
          unifiedApi: "crm",
          consumerId: "test_user_id",
          authType: "oauth2",
          enabled: true,
          settings: {},
          metadata: {
            "account": {
              "name": "My Company",
              "id": "c01458a5-7276-41ce-bc19-639906b0450a",
            },
            "plan": "enterprise",
          },
          createdAt: "2020-09-19T12:18:37.071Z",
          updatedAt: "2020-09-19T12:18:37.071Z",
          state: "authorized",
        },
      ],
      services: [
        "salesforce",
        "stripe",
      ],
      aggregatedRequestCount: 101,
      requestCounts: {
        unify: 100,
        proxy: 10,
        vault: 21,
      },
      created: "2021-05-07T12:55:42.242Z",
      modified: "2021-05-07T12:55:42.242Z",
      requestCountUpdated: "2021-05-07T12:55:42.242Z",
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
| `updateConsumerResponse`                                                                 | [components.UpdateConsumerResponse](../../models/components/updateconsumerresponse.md)   | :heavy_minus_sign:                                                                       | Consumer updated                                                                         |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |