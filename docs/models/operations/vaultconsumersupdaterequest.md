# VaultConsumersUpdateRequest

## Example Usage

```typescript
import { VaultConsumersUpdateRequest } from "apideck/models/operations";

let value: VaultConsumersUpdateRequest = {
  consumerId: "test_user_id",
  updateConsumerRequest: {
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

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `consumerId`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | ID of the consumer to return                                                         | test_user_id                                                                         |
| `updateConsumerRequest`                                                              | [components.UpdateConsumerRequest](../../models/components/updateconsumerrequest.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |