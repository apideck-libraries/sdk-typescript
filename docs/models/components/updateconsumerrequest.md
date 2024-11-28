# UpdateConsumerRequest

## Example Usage

```typescript
import { UpdateConsumerRequest } from "@apideck/unify/models/components";

let value: UpdateConsumerRequest = {
  metadata: {
    accountName: "SpaceX",
    userName: "Elon Musk",
    email: "elon@musk.com",
    image: "https://www.spacex.com/static/images/share.jpg",
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `metadata`                                                                                                            | [components.ConsumerMetadata](../../models/components/consumermetadata.md)                                            | :heavy_minus_sign:                                                                                                    | The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended. |