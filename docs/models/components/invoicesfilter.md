# InvoicesFilter

## Example Usage

```typescript
import { InvoicesFilter } from "@apideck/unify/models/components";

let value: InvoicesFilter = {
  updatedSince: new Date("2020-09-30T07:43:32.000Z"),
  createdSince: new Date("2020-09-30T07:43:32.000Z"),
  number: "OIT00546",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `updatedSince`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2020-09-30T07:43:32.000Z                                                                      |
| `createdSince`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2020-09-30T07:43:32.000Z                                                                      |
| `number`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Invoice number to search for                                                                  | OIT00546                                                                                      |