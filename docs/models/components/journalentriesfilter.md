# JournalEntriesFilter

## Example Usage

```typescript
import { JournalEntriesFilter } from "@apideck/unify/models/components";

let value: JournalEntriesFilter = {
  updatedSince: new Date("2020-09-30T07:43:32.000Z"),
  status: "draft",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `updatedSince`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | N/A                                                                                            | 2020-09-30T07:43:32.000Z                                                                       |
| `status`                                                                                       | [components.JournalEntriesFilterStatus](../../models/components/journalentriesfilterstatus.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |