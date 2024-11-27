# SuppliersFilter

## Example Usage

```typescript
import { SuppliersFilter } from "@apideck/sdk/models/components";

let value: SuppliersFilter = {
  companyName: "SpaceX",
  displayName: "Elon Musk",
  firstName: "Elon",
  lastName: "Musk",
  email: "elon@musk.com",
  updatedSince: new Date("2020-09-30T07:43:32.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `companyName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Company Name of supplier to search for                                                        | SpaceX                                                                                        |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Display Name of supplier to search for                                                        | Techno King                                                                                   |
| `firstName`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | First name of supplier to search for                                                          | Elon                                                                                          |
| `lastName`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Last name of supplier to search for                                                           | Musk                                                                                          |
| `email`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Email of supplier to search for                                                               | elon@spacex.com                                                                               |
| `updatedSince`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2020-09-30T07:43:32.000Z                                                                      |