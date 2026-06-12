# GeneralLedgerTransactionSourceType

The originating transaction type that produced this posting in the general ledger. Discriminates whether the entry came from an invoice, a bill, a payment, a manual journal, etc. This is the key field that distinguishes general-ledger-transactions from journal-entries (which only covers manually-captured entries). May be `null` when the upstream connector did not return an origin discriminator (e.g. Xero's single-record endpoint strips `SourceType` for every record; certain historical records also omit it). To recover a populated value, query the list endpoint.

## Example Usage

```typescript
import { GeneralLedgerTransactionSourceType } from "@apideck/unify/models/components";

let value: GeneralLedgerTransactionSourceType = "invoice";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"other" | "invoice" | "bill" | "credit_note" | "payment" | "refund" | "expense" | "journal_entry" | "payroll" | Unrecognized<string>
```