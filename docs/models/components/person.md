# Person

## Example Usage

```typescript
import { Person } from "apideck/models/components";
import { RFCDate } from "apideck/types";

let value: Person = {
  id: "12345",
  firstName: "Elon",
  lastName: "Musk",
  middleName: "D.",
  gender: "male",
  initials: "EM",
  birthday: new RFCDate("2000-08-12"),
  deceasedOn: new RFCDate("2000-08-12"),
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | A unique identifier for an object.                                                | 12345                                                                             |
| `firstName`                                                                       | *string*                                                                          | :heavy_minus_sign:                                                                | The first name of the person.                                                     | Elon                                                                              |
| `lastName`                                                                        | *string*                                                                          | :heavy_minus_sign:                                                                | The last name of the person.                                                      | Musk                                                                              |
| `middleName`                                                                      | *string*                                                                          | :heavy_minus_sign:                                                                | Middle name of the person.                                                        | D.                                                                                |
| `gender`                                                                          | [components.Gender](../../models/components/gender.md)                            | :heavy_minus_sign:                                                                | The gender represents the gender identity of a person.                            | male                                                                              |
| `initials`                                                                        | *string*                                                                          | :heavy_minus_sign:                                                                | Initials of the person                                                            | EM                                                                                |
| `birthday`                                                                        | [RFCDate](../../types/rfcdate.md)                                                 | :heavy_minus_sign:                                                                | Date of birth                                                                     | 2000-08-12                                                                        |
| `deceasedOn`                                                                      | [RFCDate](../../types/rfcdate.md)                                                 | :heavy_minus_sign:                                                                | Date of death                                                                     | 2000-08-12                                                                        |
| `customMappings`                                                                  | [components.CustomMappings](../../models/components/custommappings.md)            | :heavy_minus_sign:                                                                | When custom mappings are configured on the resource, the result is included here. |                                                                                   |