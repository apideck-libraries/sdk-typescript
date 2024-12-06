# Benefit

## Example Usage

```typescript
import { Benefit } from "@apideck/unify/models/components";

let value: Benefit = {
  name: "Health Insurance",
  employeeDeduction: 142.94,
  employerContribution: 141.14,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `name`                               | *string*                             | :heavy_minus_sign:                   | The name of the benefit.             | Health Insurance                     |
| `employeeDeduction`                  | *number*                             | :heavy_minus_sign:                   | The amount deducted for benefit.     | 142.94                               |
| `employerContribution`               | *number*                             | :heavy_minus_sign:                   | The amount of employer contribution. | 141.14                               |