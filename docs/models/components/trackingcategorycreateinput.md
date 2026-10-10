# TrackingCategoryCreateInput

The writable shape of TrackingCategory for a batch create. Identical to [TrackingCategory](the model returned on reads) with the read-only properties removed — the same properties the single-record create endpoint rejects, so a batched record and a single-record create accept exactly the same body.

## Example Usage

```typescript
import { TrackingCategoryCreateInput } from "@apideck/unify/models/components";

let value: TrackingCategoryCreateInput = {
  parentId: "12345",
  parentName: "Area",
  name: "Department",
  code: "100",
  status: "active",
  rowVersion: "1-12345",
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
| `parentId`                                                                                                                                              | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A unique identifier for an object.                                                                                                                      | 12345                                                                                                                                                   |
| `parentName`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The name of the parent tracking category.                                                                                                               | Area                                                                                                                                                    |
| `name`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The name of the tracking category.                                                                                                                      | Department                                                                                                                                              |
| `code`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The code of the tracking category.                                                                                                                      | 100                                                                                                                                                     |
| `status`                                                                                                                                                | [components.TrackingCategoryCreateInputTrackingCategoryStatus](../../models/components/trackingcategorycreateinputtrackingcategorystatus.md)            | :heavy_minus_sign:                                                                                                                                      | Based on the status some functionality is enabled or disabled.                                                                                          | active                                                                                                                                                  |
| `rowVersion`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.              | 1-12345                                                                                                                                                 |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |
| `subsidiaries`                                                                                                                                          | [components.TrackingCategoryCreateInputSubsidiaries](../../models/components/trackingcategorycreateinputsubsidiaries.md)[]                              | :heavy_minus_sign:                                                                                                                                      | The subsidiaries the account belongs to.                                                                                                                |                                                                                                                                                         |