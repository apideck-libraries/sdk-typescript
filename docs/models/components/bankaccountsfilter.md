# BankAccountsFilter

## Example Usage

```typescript
import { BankAccountsFilter } from "@apideck/unify/models/components";

let value: BankAccountsFilter = {
  name: "Main Operating",
  status: "active",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `name`                                                                                     | *string*                                                                                   | :heavy_minus_sign:                                                                         | Filter by bank account name                                                                | Main Operating                                                                             |
| `status`                                                                                   | [components.BankAccountsFilterStatus](../../models/components/bankaccountsfilterstatus.md) | :heavy_minus_sign:                                                                         | Filter by account status                                                                   | active                                                                                     |