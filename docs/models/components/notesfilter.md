# NotesFilter

## Example Usage

```typescript
import { NotesFilter } from "@apideck/unify/models/components";

let value: NotesFilter = {
  title: "Follow up call",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `title`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Title of the note to filter on                                                                | Follow up call                                                                                |
| `ownerId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Owner ID to filter on                                                                         | 1234                                                                                          |
| `updatedSince`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2020-09-30T07:43:32.000Z                                                                      |
| `createdSince`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2020-09-30T07:43:32.000Z                                                                      |