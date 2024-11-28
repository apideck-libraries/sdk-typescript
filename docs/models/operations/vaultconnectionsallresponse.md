# VaultConnectionsAllResponse

## Example Usage

```typescript
import { VaultConnectionsAllResponse } from "@apideck/unify/models/operations";

let value: VaultConnectionsAllResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getConnectionsResponse: {
    statusCode: 200,
    status: "OK",
    data: [
      {
        id: "crm+salesforce",
        serviceId: "salesforce",
        name: "Salesforce",
        tagLine:
          "CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial.",
        unifiedApi: "crm",
        state: "authorized",
        integrationState: "configured",
        authType: "oauth2",
        oauthGrantType: "authorization_code",
        enabled: true,
        website: "https://www.salesforce.com",
        icon:
          "https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png",
        logo:
          "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg",
        authorizeUrl:
          "https://unify.apideck.com/vault/authorize/salesforce/<application-id>?state=<state>",
        revokeUrl:
          "https://unify.apideck.com/vault/revoke/salesforce/<application-id>?state=<state>",
        settings: {
          "instance_url": "https://eu28.salesforce.com",
          "api_key": "12345xxxxxx",
        },
        metadata: {
          "account": {
            "name": "My Company",
            "id": "c01458a5-7276-41ce-bc19-639906b0450a",
          },
          "plan": "enterprise",
        },
        formFields: [
          {
            id: "instance_url",
            label: "Instance url",
            placeholder: "",
            type: "text",
            required: true,
            customField: false,
            disabled: false,
            sensitive: false,
          },
          {
            id: "api_key",
            label: "API Key",
            placeholder: "",
            type: "text",
            required: true,
            customField: false,
            disabled: false,
            sensitive: true,
          },
        ],
        configuration: [
          {
            resource: "leads",
            defaults: [
              {
                target: "custom_fields",
                id: "ProductInterest",
                options: [
                  {
                    id: "1234",
                    label: "General Channel",
                    options: [
                      {
                        label: "General Channel",
                        value: 123,
                      },
                    ],
                  },
                ],
                value: "GC5000 series",
              },
            ],
          },
        ],
        configurableResources: [
          "opportunities",
          "companies",
          "contacts",
          "leads",
        ],
        resourceSchemaSupport: [
          "leads",
        ],
        resourceSettingsSupport: [
          "leads",
        ],
        settingsRequiredForAuthorization: [
          "client_id",
          "client_secret",
        ],
        subscriptions: [
          {
            downstreamId: "5f5f5f5f5f5f5f5f5f5f5f5f",
            unifyEventTypes: [
              "crm.contact.created",
            ],
            downstreamEventTypes: [
              "contacts.CREATED",
            ],
            executeUrl:
              "https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType}",
            createdAt: "2020-10-01T12:00:00.000Z",
          },
        ],
        hasGuide: true,
        createdAt: 1615563533390,
        customMappings: [
          {
            id: "hris+employees+first_aid_training",
            label: "First Aid Training",
            description: "First Aid Training completed after 2019-01-01",
            value: "$.root.training.first_aid",
            key: "first_aid_training",
            required: false,
            customField: true,
            consumerId: "test_user_id",
            example: "Some value",
          },
        ],
        updatedAt: 1616662325753,
      },
    ],
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
| `getConnectionsResponse`                                                                 | [components.GetConnectionsResponse](../../models/components/getconnectionsresponse.md)   | :heavy_minus_sign:                                                                       | Connections                                                                              |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |