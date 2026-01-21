# UnifiedApi

Which Unified Api request was made to.

## Example Usage

```typescript
import { UnifiedApi } from "@apideck/unify/models/components";

let value: UnifiedApi = "vault";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"crm" | "lead" | "proxy" | "vault" | "accounting" | "hris" | "ats" | "ecommerce" | "issue-tracking" | "pos" | "file-storage" | "sms" | Unrecognized<string>
```