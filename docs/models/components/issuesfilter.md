# IssuesFilter

## Example Usage

```typescript
import { IssuesFilter } from "apideck/models/components";

let value: IssuesFilter = {
  status: [
    "open",
  ],
  since: new Date("2020-09-30T07:43:32.000Z"),
  assigneeId: "2332bd9c2eaaa5dcfa14721c",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `status`                                                                                               | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | Filter by ticket status, can be `open`, `closed` or `all`. Will passthrough if none of the above match | [<br/>"closed"<br/>]                                                                                   |
| `since`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_minus_sign:                                                                                     | Only return tickets since a specific date                                                              | 2020-09-30T07:43:32.000Z                                                                               |
| `assigneeId`                                                                                           | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Only return tickets assigned to a specific user                                                        | 2332bd9c2eaaa5dcfa14721c                                                                               |