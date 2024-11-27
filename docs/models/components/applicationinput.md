# ApplicationInput

## Example Usage

```typescript
import { ApplicationInput } from "@apideck/sdk/models/components";

let value: ApplicationInput = {
  applicantId: "12345",
  jobId: "12345",
  status: "open",
  stage: {
    id: "12345",
    name: "12345",
  },
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
| `applicantId`                                                                                                                                           | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | N/A                                                                                                                                                     | 12345                                                                                                                                                   |
| `jobId`                                                                                                                                                 | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | N/A                                                                                                                                                     | 12345                                                                                                                                                   |
| `status`                                                                                                                                                | [components.ApplicationStatus](../../models/components/applicationstatus.md)                                                                            | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | open                                                                                                                                                    |
| `stage`                                                                                                                                                 | [components.Stage](../../models/components/stage.md)                                                                                                    | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |