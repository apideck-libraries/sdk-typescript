# CardStatus

The status of the card. Only applicable when the tender type is card.

## Example Usage

```typescript
import { CardStatus } from "apideck/models/components";

let value: CardStatus = "authorized";
```

## Values

```typescript
"authorized" | "captured" | "failed" | "voided"
```