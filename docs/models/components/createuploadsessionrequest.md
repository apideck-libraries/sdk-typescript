# CreateUploadSessionRequest

## Example Usage

```typescript
import { CreateUploadSessionRequest } from "@apideck/sdk/models/components";

let value: CreateUploadSessionRequest = {
  name: "Documents",
  parentFolderId: "1234",
  driveId: "1234",
  size: 1810673,
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

| Field                                                                                                                                                                                       | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 | Example                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                                      | *string*                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                          | The name of the file.                                                                                                                                                                       | Documents                                                                                                                                                                                   |
| `parentFolderId`                                                                                                                                                                            | *string*                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                          | The parent folder to create the new file within. This can be an ID or a path depending on the downstream folder. Please see the connector section below to see downstream specific gotchas. | 1234                                                                                                                                                                                        |
| `driveId`                                                                                                                                                                                   | *string*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                          | ID of the drive to upload to.                                                                                                                                                               | 1234                                                                                                                                                                                        |
| `size`                                                                                                                                                                                      | *number*                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                          | The size of the file in bytes                                                                                                                                                               | 1810673                                                                                                                                                                                     |
| `passThrough`                                                                                                                                                                               | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                          | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.                                     |                                                                                                                                                                                             |