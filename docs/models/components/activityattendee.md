# ActivityAttendee

## Example Usage

```typescript
import { ActivityAttendee } from "@apideck/sdk/models/components";

let value: ActivityAttendee = {
  id: "12345",
  name: "Elon Musk",
  firstName: "Elon",
  middleName: "D.",
  lastName: "Musk",
  prefix: "Mr.",
  suffix: "PhD",
  emailAddress: "elon@musk.com",
  isOrganizer: true,
  status: "accepted",
  userId: "12345",
  contactId: "12345",
  updatedAt: new Date("2017-08-12T20:43:21.291Z"),
  createdAt: new Date("2017-08-12T20:43:21.291Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier for the attendee                                                            | 12345                                                                                         |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Full name of the attendee                                                                     | Elon Musk                                                                                     |
| `firstName`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | First name of the attendee                                                                    | Elon                                                                                          |
| `middleName`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Middle name of the attendee                                                                   | D.                                                                                            |
| `lastName`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Last name of the attendee                                                                     | Musk                                                                                          |
| `prefix`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Prefix of the attendee                                                                        | Mr.                                                                                           |
| `suffix`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Suffix of the attendee                                                                        | PhD                                                                                           |
| `emailAddress`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Email address of the attendee                                                                 | elon@musk.com                                                                                 |
| `isOrganizer`                                                                                 | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether the attendee is the organizer of the activity                                         | true                                                                                          |
| `status`                                                                                      | [components.ActivityAttendeeStatus](../../models/components/activityattendeestatus.md)        | :heavy_minus_sign:                                                                            | Status of the attendee                                                                        | accepted                                                                                      |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The identifier for a related user                                                             | 12345                                                                                         |
| `contactId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The identifier for a related contact                                                          | 12345                                                                                         |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The last time the attendee was updated (ISO 8601)                                             | 2017-08-12T20:43:21.291Z                                                                      |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the attendee was created (ISO 8601)                                                  | 2017-08-12T20:43:21.291Z                                                                      |