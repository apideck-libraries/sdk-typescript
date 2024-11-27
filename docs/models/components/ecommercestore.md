# EcommerceStore

## Example Usage

```typescript
import { EcommerceStore } from "@apideck/sdk/models/components";

let value: EcommerceStore = {
  id: "12345",
  name: "My Store",
  storeUrl: "https://mybrand.com/shop",
  adminUrl: "https://mybrand.com/admin",
  createdAt: new Date("2020-09-30T07:43:32.000Z"),
  updatedAt: new Date("2020-09-30T07:43:32.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | A unique identifier for an object.                                                            | 12345                                                                                         |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The store's name                                                                              | My Store                                                                                      |
| `storeUrl`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The store's website URL                                                                       | https://mybrand.com/shop                                                                      |
| `adminUrl`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The store's admin login URL                                                                   | https://mybrand.com/admin                                                                     |
| `customMappings`                                                                              | [components.CustomMappings](../../models/components/custommappings.md)                        | :heavy_minus_sign:                                                                            | When custom mappings are configured on the resource, the result is included here.             |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time when the object was created.                                                | 2020-09-30T07:43:32.000Z                                                                      |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time when the object was last updated.                                           | 2020-09-30T07:43:32.000Z                                                                      |