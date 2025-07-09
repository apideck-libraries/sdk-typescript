# VaultConsumersAddRequest

## Example Usage

```typescript
import { VaultConsumersAddRequest } from "@apideck/unify/models/operations";

let value: VaultConsumersAddRequest = {
  consumer: {
    consumerId: "test_consumer_id",
    metadata: {
      accountName: "SpaceX",
      userName: "Elon Musk",
      email: "elon@musk.com",
      image: "https://www.spacex.com/static/images/share.jpg",
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `appId`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | The ID of your Unify application                                     | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                              |
| `consumer`                                                           | [components.ConsumerInput](../../models/components/consumerinput.md) | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |