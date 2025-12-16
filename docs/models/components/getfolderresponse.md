# GetFolderResponse

Folders

## Example Usage

```typescript
import { GetFolderResponse } from "@apideck/unify/models/components";

let value: GetFolderResponse = {
  statusCode: 200,
  status: "OK",
  service: "undefined",
  resource: "Folders",
  operation: "one",
  data: {
    id: "12345",
    downstreamId: "12345",
    name: "Documents",
    description: "My Personal Documents",
    path: "/Personal/Documents",
    size: 1810673,
    owner: {
      id: "12345",
      email: "hello@apideck.com",
      name: "Elon Musk",
    },
    parentFolders: [],
    updatedBy: "12345",
    createdBy: "12345",
    updatedAt: new Date("2020-09-30T07:43:32.000Z"),
    createdAt: new Date("2020-09-30T07:43:32.000Z"),
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP Response Status Code                                               | 200                                                                     |
| `status`                                                                | *string*                                                                | :heavy_check_mark:                                                      | HTTP Response Status                                                    | OK                                                                      |
| `service`                                                               | *string*                                                                | :heavy_check_mark:                                                      | Apideck ID of service provider                                          | undefined                                                               |
| `resource`                                                              | *string*                                                                | :heavy_check_mark:                                                      | Unified API resource name                                               | Folders                                                                 |
| `operation`                                                             | *string*                                                                | :heavy_check_mark:                                                      | Operation performed                                                     | one                                                                     |
| `data`                                                                  | [components.Folder](../../models/components/folder.md)                  | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |
| `raw`                                                                   | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | Raw response from the integration when raw=true query param is provided |                                                                         |