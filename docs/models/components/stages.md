# Stages

## Example Usage

```typescript
import { Stages } from "@apideck/unify/models/components";

let value: Stages = {
  id: "contractsent",
  name: "Contract Sent",
  value: "CONTRACT_SENT",
  winProbability: 50,
  displayOrder: 1,
  archived: false,
  createdAt: new Date("2020-09-30T07:43:32.000Z"),
  updatedAt: new Date("2020-09-30T07:43:32.000Z"),
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The unique identifier of the Pipeline Stage.                                                         | contractsent                                                                                         |
| `name`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The name of the Pipeline Stage.                                                                      | Contract Sent                                                                                        |
| `value`                                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The value of the Pipeline Stage.                                                                     | CONTRACT_SENT                                                                                        |
| `winProbability`                                                                                     | *number*                                                                                             | :heavy_minus_sign:                                                                                   | The expected probability of winning an Opportunity in this Pipeline Stage. Valid values are [0-100]. | 50                                                                                                   |
| `displayOrder`                                                                                       | *number*                                                                                             | :heavy_minus_sign:                                                                                   | The order in which the Pipeline Stage is displayed in the UI.                                        | 1                                                                                                    |
| `archived`                                                                                           | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | Whether the Pipeline Stage is archived or not.                                                       | false                                                                                                |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | The date and time when the Pipeline Stage was created.                                               | 2020-09-30T07:43:32.000Z                                                                             |
| `updatedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | The date and time when the Pipeline Stage was last updated.                                          | 2020-09-30T07:43:32.000Z                                                                             |