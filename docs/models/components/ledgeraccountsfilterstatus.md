# LedgerAccountsFilterStatus

Filter by account status. Supported only on a subset of connectors (e.g. NetSuite); connectors that do not support it reject `filter[status]` with a `400 UnsupportedFiltersError` — read the account's `status` field in the response and filter client-side instead. See the error's `supported_filters` or the connector's supported filters.

## Example Usage

```typescript
import { LedgerAccountsFilterStatus } from "@apideck/unify/models/components";

let value: LedgerAccountsFilterStatus = "active";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"active" | "inactive" | Unrecognized<string>
```