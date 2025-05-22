# CollectionUser

## Example Usage

```typescript
import { CollectionUser } from "@apideck/unify/models/components";

let value: CollectionUser = {
  id: "12345",
  name: "Elon Musk",
  firstName: "Elon",
  lastName: "Musk",
  email: "elon@musk.com",
  photoUrl: "https://unavatar.io/elon-musk",
  updatedAt: new Date("2020-09-30T07:43:32.000Z"),
  createdAt: new Date("2020-09-30T07:43:32.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | A unique identifier for an object.                                                            | 12345                                                                                         |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Full name of the user                                                                         | Elon Musk                                                                                     |
| `firstName`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | First name of the user                                                                        | Elon                                                                                          |
| `lastName`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Last name of the user                                                                         | Musk                                                                                          |
| `email`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Email address of the user                                                                     | elon@musk.com                                                                                 |
| `photoUrl`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The URL of the photo of a person.                                                             | https://unavatar.io/elon-musk                                                                 |
| `customMappings`                                                                              | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | When custom mappings are configured on the resource, the result is included here.             |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time when the object was last updated.                                           | 2020-09-30T07:43:32.000Z                                                                      |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time when the object was created.                                                | 2020-09-30T07:43:32.000Z                                                                      |