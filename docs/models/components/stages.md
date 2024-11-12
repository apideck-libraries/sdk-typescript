# Stages

## Example Usage

```typescript
import { Stages } from "apideck/models/components";

let value: Stages = {
  id: "contractsent",
  name: "Contract Sent",
  value: "CONTRACT_SENT",
  winProbability: 50,
  displayOrder: 1,
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