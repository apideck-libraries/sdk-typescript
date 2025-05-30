# GetCustomObjectSchemasResponse

Custom object schemas

## Example Usage

```typescript
import { GetCustomObjectSchemasResponse } from "@apideck/unify/models/components";

let value: GetCustomObjectSchemasResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "custom-object-schemas",
  operation: "all",
  data: [
    {
      id: "cos_12345",
      name: "project",
      description: "This schema defines a project custom object",
      fields: [
        {
          id: "field_123",
          name: "project_name",
          description: "Name of the project",
          type: "string",
          required: true,
          options: [
            {
              value: "option1",
              label: "Option 1",
            },
          ],
          defaultValue: "New Project",
        },
      ],
      visible: true,
      active: true,
      createdBy: "12345",
      updatedBy: "12345",
      updatedAt: "2020-09-30T07:43:32.000Z",
      createdAt: "2020-09-30T07:43:32.000Z",
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
| `service`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Apideck ID of service provider                                                   | zoho-crm                                                                         |
| `resource`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | Unified API resource name                                                        | custom-object-schemas                                                            |
| `operation`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | Operation performed                                                              | all                                                                              |
| `data`                                                                           | [components.CustomObjectSchema](../../models/components/customobjectschema.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `raw`                                                                            | Record<string, *any*>                                                            | :heavy_minus_sign:                                                               | Raw response from the integration when raw=true query param is provided          |                                                                                  |
| `meta`                                                                           | [components.Meta](../../models/components/meta.md)                               | :heavy_minus_sign:                                                               | Response metadata                                                                |                                                                                  |
| `links`                                                                          | [components.Links](../../models/components/links.md)                             | :heavy_minus_sign:                                                               | Links to navigate to previous or next pages through the API                      |                                                                                  |