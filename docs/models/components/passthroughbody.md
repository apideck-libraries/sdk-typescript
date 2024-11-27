# PassThroughBody

## Example Usage

```typescript
import { PassThroughBody } from "@apideck/sdk/models/components";

let value: PassThroughBody = {
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
};
```

## Fields

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `serviceId`                                                                                                                                                                 | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | Identifier for the service to which this pass_through should be applied.                                                                                                    |
| `operationId`                                                                                                                                                               | *string*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                          | Optional identifier for a workflow operation to which this pass_through should be applied. This is useful for Unify calls that are making more than one downstream request. |
| `extendObject`                                                                                                                                                              | Record<string, *any*>                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                          | Simple object allowing any properties for direct extension.                                                                                                                 |
| `extendPaths`                                                                                                                                                               | [components.ExtendPaths](../../models/components/extendpaths.md)[]                                                                                                          | :heavy_minus_sign:                                                                                                                                                          | Array of objects for structured data modifications via paths.                                                                                                               |