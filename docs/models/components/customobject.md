# CustomObject

## Example Usage

```typescript
import { CustomObject } from "@apideck/unify/models/components";

let value: CustomObject = {
  id: "co_12345",
  ownerId: "user_12345",
  name: "project",
  fields: [
    {
      name: "name",
      value: "string",
    },
  ],
  updatedBy: "user_12345",
  createdBy: "user_12345",
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
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             | Example                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                    | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The unique identifier of the custom object                                                                                                              | co_12345                                                                                                                                                |
| `ownerId`                                                                                                                                               | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The unique identifier of the owner of the custom object                                                                                                 | user_12345                                                                                                                                              |
| `name`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The name of the custom object                                                                                                                           | project                                                                                                                                                 |
| `fields`                                                                                                                                                | [components.CustomObjectFields](../../models/components/customobjectfields.md)[]                                                                        | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `updatedBy`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The unique identifier of the user who last updated the custom object                                                                                    | user_12345                                                                                                                                              |
| `createdBy`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The unique identifier of the user who created the custom object                                                                                         | user_12345                                                                                                                                              |
| `updatedAt`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The timestamp when the custom object was last updated                                                                                                   | 2020-09-30T07:43:32.000Z                                                                                                                                |
| `createdAt`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The timestamp when the custom object was created                                                                                                        | 2020-09-30T07:43:32.000Z                                                                                                                                |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |