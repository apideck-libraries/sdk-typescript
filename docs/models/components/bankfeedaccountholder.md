# BankFeedAccountHolder

A person or business that holds the source bank account. Connectors that serve account contact data to a bank-feed consumer (`plaid-exchange`) require each holder to carry `first_name` and `last_name`, or `business_name` when the holder is a business.

## Example Usage

```typescript
import { BankFeedAccountHolder } from "@apideck/unify/models/components";

let value: BankFeedAccountHolder = {
  type: "consumer",
  relationship: "primary",
  firstName: "Jane",
  middleName: "Quinn",
  lastName: "Doe",
  suffix: "Jr",
  businessName: "Acme LLC",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | [components.HolderType](../../models/components/holdertype.md)                 | :heavy_minus_sign:                                                             | Whether the holder is an individual or a business.                             | consumer                                                                       |
| `relationship`                                                                 | [components.HolderRelationship](../../models/components/holderrelationship.md) | :heavy_minus_sign:                                                             | The holder's relationship to the account.                                      | primary                                                                        |
| `firstName`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | The holder's first name.                                                       | Jane                                                                           |
| `middleName`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | The holder's middle name.                                                      | Quinn                                                                          |
| `lastName`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The holder's last name.                                                        | Doe                                                                            |
| `suffix`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | The holder's name suffix.                                                      | Jr                                                                             |
| `businessName`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | The legal name of a business holder.                                           | Acme LLC                                                                       |