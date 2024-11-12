# CreateFolderRequest

## Example Usage

```typescript
import { CreateFolderRequest } from "apideck/models/components";

let value: CreateFolderRequest = {
  name: "Documents",
  description: "My Personal Documents",
  parentFolderId: "1234",
  driveId: "1234",
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
| `name`                                                                                                                                                                                      | *string*                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                          | The name of the folder.                                                                                                                                                                     | Documents                                                                                                                                                                                   |
| `description`                                                                                                                                                                               | *string*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                          | Optional description of the folder.                                                                                                                                                         | My Personal Documents                                                                                                                                                                       |
| `parentFolderId`                                                                                                                                                                            | *string*                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                          | The parent folder to create the new file within. This can be an ID or a path depending on the downstream folder. Please see the connector section below to see downstream specific gotchas. | 1234                                                                                                                                                                                        |
| `driveId`                                                                                                                                                                                   | *string*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                          | ID of the drive to create the folder in.                                                                                                                                                    | 1234                                                                                                                                                                                        |
| `passThrough`                                                                                                                                                                               | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                          | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.                                     |                                                                                                                                                                                             |