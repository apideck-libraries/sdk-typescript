# Addresses

## Example Usage

```typescript
import { Addresses } from "@apideck/sdk/models/components";

let value: Addresses = {
  type: "billing",
  id: "12345",
  line1: "Main street",
  line2: "apt #",
  city: "Anytown",
  state: "Ohio",
  postalCode: "12345",
  country: "US",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | [components.EcommerceCustomerType](../../models/components/ecommercecustomertype.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  | billing                                                                              |
| `id`                                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | A unique identifier for an object.                                                   | 12345                                                                                |
| `line1`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | First line of the street address of the customer                                     | Main street                                                                          |
| `line2`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | Second line of the street address of the customer                                    | apt #                                                                                |
| `city`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | City of the customer                                                                 | Anytown                                                                              |
| `state`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | State of the customer                                                                | Ohio                                                                                 |
| `postalCode`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | Postal code of the customer                                                          | 12345                                                                                |
| `country`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | Country of the customer                                                              | US                                                                                   |