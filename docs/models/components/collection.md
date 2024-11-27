# Collection

## Example Usage

```typescript
import { Collection } from "@apideck/sdk/models/components";

let value: Collection = {
  id: "12345",
  parentId: "12345",
  type: "Technical",
  name: "Main IT Issues",
  description: "IT Issues",
  updatedAt: new Date("2020-09-30T07:43:32.000Z"),
  createdAt: new Date("2020-09-30T07:43:32.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | A unique identifier for an object.                                                            | 12345                                                                                         |
| `parentId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The collections's parent ID                                                                   | 12345                                                                                         |
| `type`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The collections's type                                                                        | Technical                                                                                     |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Name of the collection                                                                        | Main IT Issues                                                                                |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Description of the collection                                                                 | IT Issues                                                                                     |
| `customMappings`                                                                              | [components.CustomMappings](../../models/components/custommappings.md)                        | :heavy_minus_sign:                                                                            | When custom mappings are configured on the resource, the result is included here.             |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time when the object was last updated.                                           | 2020-09-30T07:43:32.000Z                                                                      |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time when the object was created.                                                | 2020-09-30T07:43:32.000Z                                                                      |