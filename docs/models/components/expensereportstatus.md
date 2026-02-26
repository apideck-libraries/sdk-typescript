# ExpenseReportStatus

The status of the expense report.

## Example Usage

```typescript
import { ExpenseReportStatus } from "@apideck/unify/models/components";

let value: ExpenseReportStatus = "submitted";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"draft" | "submitted" | "approved" | "reimbursed" | "rejected" | "reversed" | "voided" | Unrecognized<string>
```