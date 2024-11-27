# Api

## Example Usage

```typescript
import { Api } from "@apideck/sdk/models/components";

let value: Api = {
  id: "file-storage",
  name: "File Storage API",
  description: "Manage API keys, access tokens, OAuth flows and integrations.",
  specUrl: "https://specs.apideck.com/file-storage.yml",
  apiReferenceUrl: "https://developers.apideck.com/apis/file-storage/reference",
  postmanCollectionId: "1311564-00e7266b-a3d6-4f40-b172-baaa66a3ed6f",
  categories: [
    "files",
    "file-storage",
    "cloud-storage",
    "object-storage",
  ],
  resources: [
    {
      id: "companies",
      name: "Companies",
      excludedFromCoverage: false,
    },
  ],
  events: [
    "crm.contact.updated",
    "accounting.invoice.created",
  ],
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `id`                                                                                            | *string*                                                                                        | :heavy_minus_sign:                                                                              | ID of the API.                                                                                  | file-storage                                                                                    |
| `type`                                                                                          | [components.ApiType](../../models/components/apitype.md)                                        | :heavy_minus_sign:                                                                              | Indicates whether the API is a Unified API. If unified_api is false, the API is a Platform API. |                                                                                                 |
| `name`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | Name of the API.                                                                                | File Storage API                                                                                |
| `description`                                                                                   | *string*                                                                                        | :heavy_minus_sign:                                                                              | Description of the API.                                                                         | Manage API keys, access tokens, OAuth flows and integrations.                                   |
| `status`                                                                                        | [components.ApiStatus](../../models/components/apistatus.md)                                    | :heavy_minus_sign:                                                                              | Status of the API. APIs with status live or beta are callable.                                  |                                                                                                 |
| `specUrl`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | Link to the latest OpenAPI specification of the API.                                            | https://specs.apideck.com/file-storage.yml                                                      |
| `apiReferenceUrl`                                                                               | *string*                                                                                        | :heavy_minus_sign:                                                                              | Link to the API reference of the API.                                                           | https://developers.apideck.com/apis/file-storage/reference                                      |
| `postmanCollectionId`                                                                           | *string*                                                                                        | :heavy_minus_sign:                                                                              | ID of the Postman collection of the API.                                                        | 1311564-00e7266b-a3d6-4f40-b172-baaa66a3ed6f                                                    |
| `categories`                                                                                    | *string*[]                                                                                      | :heavy_minus_sign:                                                                              | List of categories the API belongs to.                                                          | [<br/>"files",<br/>"file-storage",<br/>"cloud-storage",<br/>"object-storage"<br/>]              |
| `resources`                                                                                     | [components.Resources](../../models/components/resources.md)[]                                  | :heavy_minus_sign:                                                                              | List of resources supported in this API.                                                        |                                                                                                 |
| `events`                                                                                        | *string*[]                                                                                      | :heavy_minus_sign:                                                                              | List of event types this API supports.                                                          | [<br/>"crm.contact.updated",<br/>"accounting.invoice.created"<br/>]                             |