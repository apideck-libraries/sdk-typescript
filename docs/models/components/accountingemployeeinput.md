# AccountingEmployeeInput

## Example Usage

```typescript
import { AccountingEmployeeInput } from "@apideck/unify/models/components";

let value: AccountingEmployeeInput = {
  displayId: "123456",
  firstName: "John",
  lastName: "Doe",
  displayName: "John Doe",
  emails: [
    {
      id: "123",
      email: "elon@musk.com",
      type: "primary",
    },
  ],
  employeeNumber: "EMP-001",
  jobTitle: "Senior Accountant",
  status: "active",
  isContractor: false,
  department: {
    displayId: "123456",
    name: "Acme Inc.",
  },
  location: {
    id: "123456",
    displayId: "123456",
    name: "New York Office",
  },
  manager: {
    id: "12345",
    name: "Jane Smith",
  },
  hireDate: new Date("2020-01-15"),
  terminationDate: new Date("2025-12-31"),
  gender: "male",
  birthDate: new Date("1990-05-20"),
  subsidiary: {
    displayId: "123456",
    name: "Acme Inc.",
  },
  trackingCategories: null,
  currency: "USD",
  notes: "Some notes about this employee",
  addresses: [
    {
      id: "123",
      type: "primary",
      string: "25 Spring Street, Blackburn, VIC 3130",
      name: "HQ US",
      line1: "Main street",
      line2: "apt #",
      line3: "Suite #",
      line4: "delivery instructions",
      line5: "Attention: Finance Dept",
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
  ],
  phoneNumbers: [
    {
      id: "12345",
      countryCode: "1",
      areaCode: "323",
      number: "111-111-1111",
      extension: "105",
      type: "primary",
    },
  ],
  customFields: [
    {
      id: "2389328923893298",
      name: "employee_level",
      description: "Employee Level",
      value: "Uses Salesforce and Marketo",
    },
  ],
  rowVersion: "1-12345",
  passThrough: [
    {
      serviceId: "<id>",
      extendPaths: [
        {
          path: "$.nested.property",
          value: {
            "TaxClassificationRef": {
              "value": "EUC-99990201-V1-00020000",
            },
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             | Example                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `displayId`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Id to be displayed.                                                                                                                                     | 123456                                                                                                                                                  |
| `firstName`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The first name of the employee.                                                                                                                         | John                                                                                                                                                    |
| `lastName`                                                                                                                                              | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The last name of the employee.                                                                                                                          | Doe                                                                                                                                                     |
| `displayName`                                                                                                                                           | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The display name of the employee.                                                                                                                       | John Doe                                                                                                                                                |
| `emails`                                                                                                                                                | [components.Email](../../models/components/email.md)[]                                                                                                  | :heavy_minus_sign:                                                                                                                                      | Email addresses of the employee.                                                                                                                        |                                                                                                                                                         |
| `employeeNumber`                                                                                                                                        | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The employee number or identifier.                                                                                                                      | EMP-001                                                                                                                                                 |
| `jobTitle`                                                                                                                                              | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The job title of the employee.                                                                                                                          | Senior Accountant                                                                                                                                       |
| `status`                                                                                                                                                | [components.EmployeeStatus](../../models/components/employeestatus.md)                                                                                  | :heavy_minus_sign:                                                                                                                                      | The status of the employee.                                                                                                                             | active                                                                                                                                                  |
| `isContractor`                                                                                                                                          | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Whether the employee is a contractor.                                                                                                                   | false                                                                                                                                                   |
| `department`                                                                                                                                            | [components.LinkedDepartmentInput](../../models/components/linkeddepartmentinput.md)                                                                    | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `location`                                                                                                                                              | [components.LinkedLocationInput](../../models/components/linkedlocationinput.md)                                                                        | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `manager`                                                                                                                                               | [components.AccountingEmployeeManager](../../models/components/accountingemployeemanager.md)                                                            | :heavy_minus_sign:                                                                                                                                      | The manager of the employee.                                                                                                                            |                                                                                                                                                         |
| `hireDate`                                                                                                                                              | [Date](../../types/rfcdate.md)                                                                                                                          | :heavy_minus_sign:                                                                                                                                      | The date the employee was hired.                                                                                                                        | 2020-01-15                                                                                                                                              |
| `terminationDate`                                                                                                                                       | [Date](../../types/rfcdate.md)                                                                                                                          | :heavy_minus_sign:                                                                                                                                      | The date the employee was terminated.                                                                                                                   | 2025-12-31                                                                                                                                              |
| `gender`                                                                                                                                                | [components.Gender](../../models/components/gender.md)                                                                                                  | :heavy_minus_sign:                                                                                                                                      | The gender represents the gender identity of a person.                                                                                                  | male                                                                                                                                                    |
| `birthDate`                                                                                                                                             | [Date](../../types/rfcdate.md)                                                                                                                          | :heavy_minus_sign:                                                                                                                                      | The date of birth of the employee.                                                                                                                      | 1990-05-20                                                                                                                                              |
| `subsidiary`                                                                                                                                            | [components.LinkedSubsidiaryInput](../../models/components/linkedsubsidiaryinput.md)                                                                    | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `trackingCategories`                                                                                                                                    | [components.LinkedTrackingCategory](../../models/components/linkedtrackingcategory.md)[]                                                                | :heavy_minus_sign:                                                                                                                                      | A list of linked tracking categories.                                                                                                                   |                                                                                                                                                         |
| `currency`                                                                                                                                              | [components.Currency](../../models/components/currency.md)                                                                                              | :heavy_minus_sign:                                                                                                                                      | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).                      | USD                                                                                                                                                     |
| `notes`                                                                                                                                                 | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Notes about the employee.                                                                                                                               | Some notes about this employee                                                                                                                          |
| `addresses`                                                                                                                                             | [components.Address](../../models/components/address.md)[]                                                                                              | :heavy_minus_sign:                                                                                                                                      | Addresses of the employee.                                                                                                                              |                                                                                                                                                         |
| `phoneNumbers`                                                                                                                                          | [components.PhoneNumber](../../models/components/phonenumber.md)[]                                                                                      | :heavy_minus_sign:                                                                                                                                      | Phone numbers of the employee.                                                                                                                          |                                                                                                                                                         |
| `customFields`                                                                                                                                          | *components.CustomField*[]                                                                                                                              | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `rowVersion`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.              | 1-12345                                                                                                                                                 |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |