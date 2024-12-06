# SharedLinkInput

## Example Usage

```typescript
import { SharedLinkInput } from "@apideck/unify/models/components";

let value: SharedLinkInput = {
  downloadUrl: "https://www.box.com/shared/static/rh935iit6ewrmw0unyul.jpeg",
  targetId: "<id>",
  scope: "company",
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
| `downloadUrl`                                                                                                                                           | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The URL that can be used to download the file.                                                                                                          | https://www.box.com/shared/static/rh935iit6ewrmw0unyul.jpeg                                                                                             |
| `targetId`                                                                                                                                              | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | The ID of the file or folder to link.                                                                                                                   |                                                                                                                                                         |
| `scope`                                                                                                                                                 | [components.Scope](../../models/components/scope.md)                                                                                                    | :heavy_minus_sign:                                                                                                                                      | The scope of the shared link.                                                                                                                           | company                                                                                                                                                 |
| `password`                                                                                                                                              | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Optional password for the shared link.                                                                                                                  |                                                                                                                                                         |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |