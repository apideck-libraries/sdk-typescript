# ApprovedBy

The person who approved the expense report.

## Example Usage

```typescript
import { ApprovedBy } from "@apideck/unify/models/components";

let value: ApprovedBy = {
  id: "12345",
  displayName: "Jane Smith",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `id`                                  | *string*                              | :heavy_minus_sign:                    | A unique identifier for the approver. | 12345                                 |
| `displayName`                         | *string*                              | :heavy_minus_sign:                    | The display name of the approver.     | Jane Smith                            |