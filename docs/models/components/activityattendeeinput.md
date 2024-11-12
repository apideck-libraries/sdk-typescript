# ActivityAttendeeInput

## Example Usage

```typescript
import { ActivityAttendeeInput } from "apideck/models/components";

let value: ActivityAttendeeInput = {
  name: "Elon Musk",
  firstName: "Elon",
  middleName: "D.",
  lastName: "Musk",
  prefix: "Mr.",
  suffix: "PhD",
  emailAddress: "elon@musk.com",
  isOrganizer: true,
  status: "accepted",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `name`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | Full name of the attendee                                                              | Elon Musk                                                                              |
| `firstName`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | First name of the attendee                                                             | Elon                                                                                   |
| `middleName`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | Middle name of the attendee                                                            | D.                                                                                     |
| `lastName`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | Last name of the attendee                                                              | Musk                                                                                   |
| `prefix`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | Prefix of the attendee                                                                 | Mr.                                                                                    |
| `suffix`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | Suffix of the attendee                                                                 | PhD                                                                                    |
| `emailAddress`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | Email address of the attendee                                                          | elon@musk.com                                                                          |
| `isOrganizer`                                                                          | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Whether the attendee is the organizer of the activity                                  | true                                                                                   |
| `status`                                                                               | [components.ActivityAttendeeStatus](../../models/components/activityattendeestatus.md) | :heavy_minus_sign:                                                                     | Status of the attendee                                                                 | accepted                                                                               |