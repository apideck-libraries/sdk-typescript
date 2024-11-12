# SharedLink

## Example Usage

```typescript
import { SharedLink } from "apideck/models/components";

let value: SharedLink = {
  url: "https://www.box.com/s/vspke7y05sb214wjokpk",
  downloadUrl: "https://www.box.com/shared/static/rh935iit6ewrmw0unyul.jpeg",
  target: {
    id: "12345",
    name: "sample.jpg",
    type: "file",
  },
  scope: "company",
  expiresAt: new Date("2022-09-30T07:43:32.000Z"),
  updatedAt: new Date("2020-09-30T07:43:32.000Z"),
  createdAt: new Date("2020-09-30T07:43:32.000Z"),
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
| `url`                                                                                                                                                   | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The URL that can be used to view the file.                                                                                                              | https://www.box.com/s/vspke7y05sb214wjokpk                                                                                                              |
| `downloadUrl`                                                                                                                                           | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The URL that can be used to download the file.                                                                                                          | https://www.box.com/shared/static/rh935iit6ewrmw0unyul.jpeg                                                                                             |
| `target`                                                                                                                                                | [components.SharedLinkTarget](../../models/components/sharedlinktarget.md)                                                                              | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `scope`                                                                                                                                                 | [components.Scope](../../models/components/scope.md)                                                                                                    | :heavy_minus_sign:                                                                                                                                      | The scope of the shared link.                                                                                                                           | company                                                                                                                                                 |
| `passwordProtected`                                                                                                                                     | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Indicated if the shared link is password protected.                                                                                                     |                                                                                                                                                         |
| `expiresAt`                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | 2022-09-30T07:43:32.000Z                                                                                                                                |
| `updatedAt`                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_minus_sign:                                                                                                                                      | The date and time when the object was last updated.                                                                                                     | 2020-09-30T07:43:32.000Z                                                                                                                                |
| `createdAt`                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_minus_sign:                                                                                                                                      | The date and time when the object was created.                                                                                                          | 2020-09-30T07:43:32.000Z                                                                                                                                |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |