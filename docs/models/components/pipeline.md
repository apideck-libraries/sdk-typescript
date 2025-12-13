# Pipeline

## Example Usage

```typescript
import { Pipeline } from "@apideck/unify/models/components";

let value: Pipeline = {
  id: "default",
  name: "Sales Pipeline",
  currency: "USD",
  archived: false,
  active: false,
  displayOrder: 1,
  winProbabilityEnabled: true,
  stages: [
    {
      id: "contractsent",
      name: "Contract Sent",
      value: "CONTRACT_SENT",
      winProbability: 50,
      displayOrder: 1,
      archived: false,
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
    },
  ],
  updatedAt: new Date("2020-09-30T07:43:32.000Z"),
  createdAt: new Date("2020-09-30T07:43:32.000Z"),
  passThrough: [
    {
      serviceId: "<id>",
      extendPaths: [
        {
          path: "$.nested.property",
          value: {
            "TaxClassificationRef": {
              "value": "EUC-99990201-V1-00020000",
            },
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             | Example                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                    | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The unique identifier of the Pipeline.                                                                                                                  | default                                                                                                                                                 |
| `name`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | The name of the Pipeline.                                                                                                                               | Sales Pipeline                                                                                                                                          |
| `currency`                                                                                                                                              | [components.Currency](../../models/components/currency.md)                                                                                              | :heavy_minus_sign:                                                                                                                                      | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).                      | USD                                                                                                                                                     |
| `archived`                                                                                                                                              | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Whether the Pipeline is archived or not.                                                                                                                | false                                                                                                                                                   |
| `active`                                                                                                                                                | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Whether the Pipeline is active or not.                                                                                                                  | false                                                                                                                                                   |
| `displayOrder`                                                                                                                                          | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The order in which the Pipeline is displayed in the UI.                                                                                                 | 1                                                                                                                                                       |
| `winProbabilityEnabled`                                                                                                                                 | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Whether the Pipeline has win probability enabled or not.                                                                                                | true                                                                                                                                                    |
| `stages`                                                                                                                                                | [components.Stages](../../models/components/stages.md)[]                                                                                                | :heavy_minus_sign:                                                                                                                                      | The Pipeline Stages.                                                                                                                                    |                                                                                                                                                         |
| `updatedAt`                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_minus_sign:                                                                                                                                      | The date and time when the object was last updated.                                                                                                     | 2020-09-30T07:43:32.000Z                                                                                                                                |
| `createdAt`                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_minus_sign:                                                                                                                                      | The date and time when the object was created.                                                                                                          | 2020-09-30T07:43:32.000Z                                                                                                                                |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |