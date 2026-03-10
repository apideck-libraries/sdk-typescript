# ExpenseReportStatus

The status of the expense report.

## Example Usage

```typescript
import { ExpenseReportStatus } from "@apideck/unify/models/components";

let value: ExpenseReportStatus = "submitted";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"draft" | "submitted" | "approved" | "reimbursed" | "rejected" | "reversed" | "voided" | Unrecognized<string>
```