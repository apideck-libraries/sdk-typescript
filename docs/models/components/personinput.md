# PersonInput

## Example Usage

```typescript
import { PersonInput } from "@apideck/sdk/models/components";
import { RFCDate } from "@apideck/sdk/types";

let value: PersonInput = {
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

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `firstName`                                            | *string*                                               | :heavy_minus_sign:                                     | The first name of the person.                          | Elon                                                   |
| `lastName`                                             | *string*                                               | :heavy_minus_sign:                                     | The last name of the person.                           | Musk                                                   |
| `middleName`                                           | *string*                                               | :heavy_minus_sign:                                     | Middle name of the person.                             | D.                                                     |
| `gender`                                               | [components.Gender](../../models/components/gender.md) | :heavy_minus_sign:                                     | The gender represents the gender identity of a person. | male                                                   |
| `initials`                                             | *string*                                               | :heavy_minus_sign:                                     | Initials of the person                                 | EM                                                     |
| `birthday`                                             | [RFCDate](../../types/rfcdate.md)                      | :heavy_minus_sign:                                     | Date of birth                                          | 2000-08-12                                             |
| `deceasedOn`                                           | [RFCDate](../../types/rfcdate.md)                      | :heavy_minus_sign:                                     | Date of death                                          | 2000-08-12                                             |