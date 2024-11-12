# UnifiedApis

## Example Usage

```typescript
import { UnifiedApis } from "apideck/models/components";

let value: UnifiedApis = {
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
};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               | Example                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                      | [components.UnifiedApiId](../../models/components/unifiedapiid.md)                                                                                        | :heavy_minus_sign:                                                                                                                                        | Name of Apideck Unified API                                                                                                                               | crm                                                                                                                                                       |
| `name`                                                                                                                                                    | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | Name of the API.                                                                                                                                          | File Storage API                                                                                                                                          |
| `authOnly`                                                                                                                                                | *boolean*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                        | Indicates whether a connector only supports authentication. In this case the connector is not mapped to a Unified API, but can be used with the Proxy API | true                                                                                                                                                      |
| `oauthScopes`                                                                                                                                             | [components.ConnectorOauthScopes](../../models/components/connectoroauthscopes.md)[]                                                                      | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |                                                                                                                                                           |
| `supportedResources`                                                                                                                                      | [components.LinkedConnectorResource](../../models/components/linkedconnectorresource.md)[]                                                                | :heavy_minus_sign:                                                                                                                                        | List of resources that are supported on the connector.                                                                                                    |                                                                                                                                                           |
| `downstreamUnsupportedResources`                                                                                                                          | *string*[]                                                                                                                                                | :heavy_minus_sign:                                                                                                                                        | List of resources that are not supported on the downstream.                                                                                               |                                                                                                                                                           |
| `supportedEvents`                                                                                                                                         | [components.ConnectorEvent](../../models/components/connectorevent.md)[]                                                                                  | :heavy_minus_sign:                                                                                                                                        | List of events that are supported on the connector for this Unified API.                                                                                  |                                                                                                                                                           |