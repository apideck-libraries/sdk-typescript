# GetFilesResponse

Files

## Example Usage

```typescript
import { GetFilesResponse } from "apideck/models/components";

let value: GetFilesResponse = {
  statusCode: 200,
  status: "OK",
  service: "google-drive",
  resource: "files",
  operation: "all",
  data: [
    {
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
  ],
  meta: {
    itemsOnPage: 50,
    cursors: {
      previous: "em9oby1jcm06OnBhZ2U6OjE=",
      current: "em9oby1jcm06OnBhZ2U6OjI=",
      next: "em9oby1jcm06OnBhZ2U6OjM=",
    },
  },
  links: {
    previous:
      "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D",
    current: "https://unify.apideck.com/crm/companies",
    next:
      "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `statusCode`                                                       | *number*                                                           | :heavy_check_mark:                                                 | HTTP Response Status Code                                          | 200                                                                |
| `status`                                                           | *string*                                                           | :heavy_check_mark:                                                 | HTTP Response Status                                               | OK                                                                 |
| `service`                                                          | *string*                                                           | :heavy_check_mark:                                                 | Apideck ID of service provider                                     | google-drive                                                       |
| `resource`                                                         | *string*                                                           | :heavy_check_mark:                                                 | Unified API resource name                                          | files                                                              |
| `operation`                                                        | *string*                                                           | :heavy_check_mark:                                                 | Operation performed                                                | all                                                                |
| `data`                                                             | [components.UnifiedFile](../../models/components/unifiedfile.md)[] | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `meta`                                                             | [components.Meta](../../models/components/meta.md)                 | :heavy_minus_sign:                                                 | Response metadata                                                  |                                                                    |
| `links`                                                            | [components.Links](../../models/components/links.md)               | :heavy_minus_sign:                                                 | Links to navigate to previous or next pages through the API        |                                                                    |