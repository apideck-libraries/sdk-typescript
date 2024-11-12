# Tax

## Example Usage

```typescript
import { Tax } from "apideck/models/components";

let value: Tax = {
  name: "CA State Income Tax",
  employer: false,
  amount: 1.97,
};
```

## Fields

| Field                  | Type                   | Required               | Description            | Example                |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `name`                 | *string*               | :heavy_minus_sign:     | The name of the tax.   | CA State Income Tax    |
| `employer`             | *boolean*              | :heavy_minus_sign:     | Paid by employer.      | false                  |
| `amount`               | *number*               | :heavy_minus_sign:     | The amount of the tax. | 1.97                   |