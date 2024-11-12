# CustomersFilter

## Example Usage

```typescript
import { CustomersFilter } from "apideck/models/components";

let value: CustomersFilter = {
  companyName: "SpaceX",
  displayName: "Elon Musk",
  firstName: "Elon",
  lastName: "Musk",
  email: "elon@musk.com",
  status: "active",
  updatedSince: new Date("2020-09-30T07:43:32.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `companyName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Company Name of customer to search for                                                        | SpaceX                                                                                        |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Display Name of customer to search for                                                        | Techno King                                                                                   |
| `firstName`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | First name of customer to search for                                                          | Elon                                                                                          |
| `lastName`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Last name of customer to search for                                                           | Musk                                                                                          |
| `email`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Email of customer to search for                                                               | elon@spacex.com                                                                               |
| `status`                                                                                      | [components.CustomersFilterStatus](../../models/components/customersfilterstatus.md)          | :heavy_minus_sign:                                                                            | Status of customer to filter on                                                               | active                                                                                        |
| `updatedSince`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2020-09-30T07:43:32.000Z                                                                      |