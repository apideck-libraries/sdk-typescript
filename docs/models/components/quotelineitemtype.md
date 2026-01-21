# QuoteLineItemType

Item type

## Example Usage

```typescript
import { QuoteLineItemType } from "@apideck/unify/models/components";

let value: QuoteLineItemType = "sales_item";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"sales_item" | "discount" | "info" | "sub_total" | "service" | "other" | Unrecognized<string>
```