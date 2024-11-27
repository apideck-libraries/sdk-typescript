# LinkedEcommerceOrder

The order this entity is linked to.

## Example Usage

```typescript
import { LinkedEcommerceOrder } from "@apideck/sdk/models/components";

let value: LinkedEcommerceOrder = {
  id: "12345",
  total: "199.99",
  status: "active",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_minus_sign:                                                                 | A unique identifier for an object.                                                 | 12345                                                                              |
| `total`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | The total amount of the order.                                                     | 199.99                                                                             |
| `status`                                                                           | [components.EcommerceOrderStatus](../../models/components/ecommerceorderstatus.md) | :heavy_minus_sign:                                                                 | Current status of the order.                                                       | active                                                                             |