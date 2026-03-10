# AccountingConnectionCompany

Represents a company/tenant/organization accessible through the current connection. Used for multi-company connectors where a single OAuth connection provides access to multiple companies.

## Example Usage

```typescript
import { AccountingConnectionCompany } from "@apideck/unify/models/components";

let value: AccountingConnectionCompany = {
  id: "12345",
  name: "Acme Corporation",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      | Example                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Unique identifier for the company in the downstream system. Use this value in the x-apideck-company-id header to scope requests to this company. | 12345                                                                                                                                            |
| `name`                                                                                                                                           | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Display name of the company                                                                                                                      | Acme Corporation                                                                                                                                 |
| `additionalProperties`                                                                                                                           | Record<string, *any*>                                                                                                                            | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |                                                                                                                                                  |