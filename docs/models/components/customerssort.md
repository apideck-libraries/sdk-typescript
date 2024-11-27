# CustomersSort

## Example Usage

```typescript
import { CustomersSort } from "@apideck/sdk/models/components";

let value: CustomersSort = {
  by: "updated_at",
  direction: "desc",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `by`                                                                     | [components.CustomersSortBy](../../models/components/customerssortby.md) | :heavy_minus_sign:                                                       | The field on which to sort the Customers                                 | updated_at                                                               |
| `direction`                                                              | [components.SortDirection](../../models/components/sortdirection.md)     | :heavy_minus_sign:                                                       | The direction in which to sort the results                               |                                                                          |