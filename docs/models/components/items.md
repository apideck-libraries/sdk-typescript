# Items

## Example Usage

```typescript
import { Items } from "@apideck/unify/models/components";

let value: Items = {
  ref: "item-1",
  data: {
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
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                 | Example                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ref`                                                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                          | A caller-supplied reference for this item, echoed back on the matching result so each outcome can be tied to the record it came from. Must be unique within the request. Never sent to the connector.                                                                                                       | item-1                                                                                                                                                                                                                                                                                                      |
| `data`                                                                                                                                                                                                                                                                                                      | [components.TrackingCategoryCreateInput](../../models/components/trackingcategorycreateinput.md)                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                          | The writable shape of TrackingCategory for a batch create. Identical to [TrackingCategory](the model returned on reads) with the read-only properties removed — the same properties the single-record create endpoint rejects, so a batched record and a single-record create accept exactly the same body. |                                                                                                                                                                                                                                                                                                             |