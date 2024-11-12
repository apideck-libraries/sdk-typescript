# GetFileResponse

File

## Example Usage

```typescript
import { GetFileResponse } from "apideck/models/components";

let value: GetFileResponse = {
  statusCode: 200,
  status: "OK",
  service: "google-drive",
  resource: "files",
  operation: "one",
  data: {
    id: "12345",
    downstreamId: "12345",
    name: "sample.jpg",
    description: "A sample image",
    type: "file",
    path: "/Documents/sample.jpg",
    mimeType: "image/jpeg",
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
    exportFormats: [
      "application/pdf",
      "application/vnd.oasis.opendocument.presentation",
      "text/plain",
    ],
    updatedBy: "12345",
    createdBy: "12345",
    updatedAt: new Date("2020-09-30T07:43:32.000Z"),
    createdAt: new Date("2020-09-30T07:43:32.000Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `statusCode`                                                     | *number*                                                         | :heavy_check_mark:                                               | HTTP Response Status Code                                        | 200                                                              |
| `status`                                                         | *string*                                                         | :heavy_check_mark:                                               | HTTP Response Status                                             | OK                                                               |
| `service`                                                        | *string*                                                         | :heavy_check_mark:                                               | Apideck ID of service provider                                   | google-drive                                                     |
| `resource`                                                       | *string*                                                         | :heavy_check_mark:                                               | Unified API resource name                                        | files                                                            |
| `operation`                                                      | *string*                                                         | :heavy_check_mark:                                               | Operation performed                                              | one                                                              |
| `data`                                                           | [components.UnifiedFile](../../models/components/unifiedfile.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |