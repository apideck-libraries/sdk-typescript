# ActivitiesFilter

## Example Usage

```typescript
import { ActivitiesFilter } from "@apideck/sdk/models/components";

let value: ActivitiesFilter = {
  updatedSince: new Date("2020-09-30T07:43:32.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `companyId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Company ID to filter on                                                                       | 1234                                                                                          |
| `ownerId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Owner ID to filter on                                                                         | 1234                                                                                          |
| `contactId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Primary contact ID to filter on                                                               | 1234                                                                                          |
| `updatedSince`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2020-09-30T07:43:32.000Z                                                                      |
| `type`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Type to filter on                                                                             | Task                                                                                          |