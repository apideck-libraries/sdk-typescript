# CardEntryMethod

The entry method of the card. Only applicable when the tender type is card.

## Example Usage

```typescript
import { CardEntryMethod } from "apideck/models/components";

let value: CardEntryMethod = "swiped";
```

## Values

```typescript
"evm" | "swiped" | "keyed" | "on-file" | "contactless"
```