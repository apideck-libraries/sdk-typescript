# ConnectorConnectorsOneResponse

## Example Usage

```typescript
import { ConnectorConnectorsOneResponse } from "@apideck/unify/models/operations";

let value: ConnectorConnectorsOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getConnectorResponse: {
    statusCode: 200,
    status: "OK",
    data: {
      id: "crm+salesforce",
      name: "Salesforce",
      description: "A description",
      iconUrl:
        "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
      logoUrl:
        "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
      websiteUrl: "https://www.salesforce.com",
      signupUrl: "https://www.salesforce.com/signup",
      partnerSignupUrl: "https://www.salesforce.com/partners",
      authType: "oauth2",
      authOnly: true,
      blindMapped: true,
      oauthGrantType: "authorization_code",
      oauthCredentialsSource: "integration",
      oauthScopes: [
        {
          id: "contacts:all",
          label: "Read/write on the Contacts resource",
          defaultApis: [
            "crm",
          ],
        },
      ],
      customScopes: true,
      hasSandboxCredentials: true,
      settings: [
        {
          id: "pipeline_id",
          label: "Pipeline",
          type: "select",
        },
      ],
      serviceId: "close",
      unifiedApis: [
        {
          id: "crm",
          name: "File Storage API",
          authOnly: true,
          oauthScopes: [
            {
              id: "contacts:all",
              label: "Read/write on the Contacts resource",
            },
          ],
          supportedResources: [
            {
              id: "companies",
              name: "Companies",
              downstreamId: "accounts",
              downstreamName: "Accounts",
            },
          ],
          downstreamUnsupportedResources: [
            "companies",
          ],
          supportedEvents: [
            {
              eventType: "employee.created",
              eventSource: "native",
              downstreamEventType: "person_created",
              resources: [
                "companies",
              ],
              entityType: "employee",
            },
          ],
        },
      ],
      supportedResources: [
        {
          id: "companies",
          name: "Companies",
          downstreamId: "accounts",
          downstreamName: "Accounts",
        },
      ],
      configurableResources: [
        "leads",
        "companies",
      ],
      supportedEvents: [
        {
          eventType: "employee.created",
          eventSource: "native",
          downstreamEventType: "person_created",
          resources: [
            "companies",
          ],
          entityType: "employee",
        },
      ],
      webhookSupport: {
        mode: "native",
        subscriptionLevel: "integration",
        managedVia: "api",
      },
      schemaSupport: {
        supported: true,
      },
      docs: [
        {
          id: "12345",
          name: "connection",
          url:
            "https://unify.apideck.com/connector/connectors/workday/docs/consumer+connection",
        },
      ],
    },
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
  },
  unexpectedErrorResponse: {
    statusCode: 400,
    error: "Bad Request",
    typeName: "RequestHeadersValidationError",
    message: "Invalid Params",
    detail: {},
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getConnectorResponse`                                                                   | [components.GetConnectorResponse](../../models/components/getconnectorresponse.md)       | :heavy_minus_sign:                                                                       | Connectors                                                                               |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |