# GetCollectionUserResponse

User

## Example Usage

```typescript
import { GetCollectionUserResponse } from "@apideck/unify/models/components";

let value: GetCollectionUserResponse = {
  statusCode: 200,
  status: "OK",
  service: "jira",
  resource: "Tickets",
  operation: "one",
  data: {
    id: "12345",
    name: "Elon Musk",
    firstName: "Elon",
    lastName: "Musk",
    email: "elon@musk.com",
    photoUrl: "https://unavatar.io/elon-musk",
    updatedAt: new Date("2020-09-30T07:43:32.000Z"),
    createdAt: new Date("2020-09-30T07:43:32.000Z"),
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `statusCode`                                                           | *number*                                                               | :heavy_check_mark:                                                     | HTTP Response Status Code                                              | 200                                                                    |
| `status`                                                               | *string*                                                               | :heavy_check_mark:                                                     | HTTP Response Status                                                   | OK                                                                     |
| `service`                                                              | *string*                                                               | :heavy_check_mark:                                                     | Apideck ID of service provider                                         | jira                                                                   |
| `resource`                                                             | *string*                                                               | :heavy_check_mark:                                                     | Unified API resource name                                              | Tickets                                                                |
| `operation`                                                            | *string*                                                               | :heavy_check_mark:                                                     | Operation performed                                                    | one                                                                    |
| `data`                                                                 | [components.CollectionUser](../../models/components/collectionuser.md) | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |