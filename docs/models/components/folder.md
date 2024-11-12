# Folder

## Example Usage

```typescript
import { Folder } from "apideck/models/components";

let value: Folder = {
  id: "12345",
  name: "Documents",
  description: "My Personal Documents",
  path: "/Personal/Documents",
  size: 1810673,
  owner: {
    id: "12345",
    email: "hello@apideck.com",
    name: "Elon Musk",
  },
  parentFolders: [
    {
      id: "12345",
      name: "Personal",
    },
  ],
  updatedBy: "12345",
  createdBy: "12345",
  updatedAt: new Date("2020-09-30T07:43:32.000Z"),
  createdAt: new Date("2020-09-30T07:43:32.000Z"),
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | A unique identifier for an object.                                                                       | 12345                                                                                                    |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The name of the folder                                                                                   | Documents                                                                                                |
| `description`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Optional description of the folder                                                                       | My Personal Documents                                                                                    |
| `path`                                                                                                   | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The full path of the folder (includes the folder name)                                                   | /Personal/Documents                                                                                      |
| `size`                                                                                                   | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | The size of the folder in bytes                                                                          | 1810673                                                                                                  |
| `owner`                                                                                                  | [components.Owner](../../models/components/owner.md)                                                     | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |                                                                                                          |
| `parentFolders`                                                                                          | [components.LinkedFolder](../../models/components/linkedfolder.md)[]                                     | :heavy_check_mark:                                                                                       | The parent folders of the file, starting from the root                                                   |                                                                                                          |
| `parentFoldersComplete`                                                                                  | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Whether the list of parent folder is complete. Some connectors only return the direct parent of a folder |                                                                                                          |
| `customMappings`                                                                                         | [components.CustomMappings](../../models/components/custommappings.md)                                   | :heavy_minus_sign:                                                                                       | When custom mappings are configured on the resource, the result is included here.                        |                                                                                                          |
| `updatedBy`                                                                                              | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The user who last updated the object.                                                                    | 12345                                                                                                    |
| `createdBy`                                                                                              | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The user who created the object.                                                                         | 12345                                                                                                    |
| `updatedAt`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | The date and time when the object was last updated.                                                      | 2020-09-30T07:43:32.000Z                                                                                 |
| `createdAt`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | The date and time when the object was created.                                                           | 2020-09-30T07:43:32.000Z                                                                                 |