# EmployeeJobInput

## Example Usage

```typescript
import { EmployeeJobInput } from "apideck/models/components";
import { RFCDate } from "apideck/types";

let value: EmployeeJobInput = {
  title: "CEO",
  role: "Sales",
  startDate: new RFCDate("2020-08-12"),
  endDate: new RFCDate("2020-08-12"),
  compensationRate: 72000,
  currency: "USD",
  paymentUnit: "year",
  hiredAt: new RFCDate("2020-08-12"),
  isPrimary: true,
  isManager: true,
  status: "active",
  location: {
    id: "123",
    type: "primary",
    string: "25 Spring Street, Blackburn, VIC 3130",
    name: "HQ US",
    line1: "Main street",
    line2: "apt #",
    line3: "Suite #",
    line4: "delivery instructions",
    streetNumber: "25",
    city: "San Francisco",
    state: "CA",
    postalCode: "94104",
    country: "US",
    latitude: "40.759211",
    longitude: "-73.984638",
    county: "Santa Clara",
    contactName: "Elon Musk",
    salutation: "Mr",
    phoneNumber: "111-111-1111",
    fax: "122-111-1111",
    email: "elon@musk.com",
    website: "https://elonmusk.com",
    notes: "Address notes or delivery instructions.",
    rowVersion: "1-12345",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `title`                                                                                                                            | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The job title of the person.                                                                                                       | CEO                                                                                                                                |
| `role`                                                                                                                             | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The position and responsibilities of the person within the organization.                                                           | Sales                                                                                                                              |
| `startDate`                                                                                                                        | [RFCDate](../../types/rfcdate.md)                                                                                                  | :heavy_minus_sign:                                                                                                                 | The date on which the employee starts working in their current job role.                                                           | 2020-08-12                                                                                                                         |
| `endDate`                                                                                                                          | [RFCDate](../../types/rfcdate.md)                                                                                                  | :heavy_minus_sign:                                                                                                                 | The date on which the employee leaves or is expected to leave their current job role.                                              | 2020-08-12                                                                                                                         |
| `compensationRate`                                                                                                                 | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The rate of pay for the employee in their current job role.                                                                        | 72000                                                                                                                              |
| `currency`                                                                                                                         | [components.Currency](../../models/components/currency.md)                                                                         | :heavy_minus_sign:                                                                                                                 | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). | USD                                                                                                                                |
| `paymentUnit`                                                                                                                      | [components.PaymentUnit](../../models/components/paymentunit.md)                                                                   | :heavy_minus_sign:                                                                                                                 | Unit of measurement for employee compensation.                                                                                     | year                                                                                                                               |
| `hiredAt`                                                                                                                          | [RFCDate](../../types/rfcdate.md)                                                                                                  | :heavy_minus_sign:                                                                                                                 | The date on which the employee was hired by the organization                                                                       | 2020-08-12                                                                                                                         |
| `isPrimary`                                                                                                                        | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | Indicates whether this the employee's primary job.                                                                                 | true                                                                                                                               |
| `isManager`                                                                                                                        | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | Indicates whether this the employee has a manager role.                                                                            | true                                                                                                                               |
| `status`                                                                                                                           | [components.EmployeeJobStatus](../../models/components/employeejobstatus.md)                                                       | :heavy_minus_sign:                                                                                                                 | Indicates the status of the job.                                                                                                   | active                                                                                                                             |
| `location`                                                                                                                         | [components.Address](../../models/components/address.md)                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |