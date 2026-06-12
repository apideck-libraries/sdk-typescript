# GeneralLedgerTransactionsFilter

## Example Usage

```typescript
import { GeneralLedgerTransactionsFilter } from "@apideck/unify/models/components";

let value: GeneralLedgerTransactionsFilter = {
  sourceType: "invoice",
  updatedSince: new Date("2024-09-30T07:43:32.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourceType`                                                                                  | [components.SourceType](../../models/components/sourcetype.md)                                | :heavy_minus_sign:                                                                            | Filter by the originating transaction type.                                                   |                                                                                               |
| `sourceId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Return only transactions originated from the given source document id.                        | 12345                                                                                         |
| `updatedSince`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Return transactions updated on or after this timestamp.                                       | 2024-09-30T07:43:32.000Z                                                                      |