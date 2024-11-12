# EcommerceAddress

An object representing a shipping or billing address.

## Example Usage

```typescript
import { EcommerceAddress } from "apideck/models/components";

let value: EcommerceAddress = {
  line1: "123 Main Street",
  line2: "Apt 1",
  companyName: "Acme Inc.",
  city: "New York",
  state: "NY",
  postalCode: "10001",
  country: "US",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `line1`                                 | *string*                                | :heavy_minus_sign:                      | Address line 1 of the billing address.  | 123 Main Street                         |
| `line2`                                 | *string*                                | :heavy_minus_sign:                      | Address line 2 of the billing address.  | Apt 1                                   |
| `companyName`                           | *string*                                | :heavy_minus_sign:                      | Company name of the customer            | Acme Inc.                               |
| `city`                                  | *string*                                | :heavy_minus_sign:                      | City of the billing address.            | New York                                |
| `state`                                 | *string*                                | :heavy_minus_sign:                      | State/province of the billing address.  | NY                                      |
| `postalCode`                            | *string*                                | :heavy_minus_sign:                      | Postal/ZIP code of the billing address. | 10001                                   |
| `country`                               | *string*                                | :heavy_minus_sign:                      | Country of the billing address.         | US                                      |