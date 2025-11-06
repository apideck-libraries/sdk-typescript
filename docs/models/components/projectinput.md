# ProjectInput

## Example Usage

```typescript
import { ProjectInput } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: ProjectInput = {
  name: "Website Redesign Project",
  displayId: "PROJ-001",
  referenceId: "WD-REF-2024-001",
  description:
    "Complete redesign of the company website including new branding and improved user experience",
  status: "active",
  active: true,
  projectType: "client_project",
  priority: "high",
  completionPercentage: 75.5,
  startDate: new RFCDate("2024-01-15"),
  endDate: new RFCDate("2024-06-30"),
  customer: {
    id: "12345",
    displayName: "Windsurf Shop",
    email: "boring@boring.com",
  },
  department: {
    id: "DEPT-001",
    name: "Marketing",
  },
  companyId: "12345",
  ownerId: "12345",
  parentProject: {
    id: "PROJ-PARENT-001",
    name: "Company Website Overhaul",
  },
  currency: "USD",
  budgetAmount: 50000,
  approvedAmount: 48000,
  budgetHours: 400,
  hourlyRate: 125,
  billingMethod: "time_and_materials",
  phase: "execution",
  taxRate: {
    id: "123456",
    code: "N-T",
    rate: 10,
  },
  trackingCategories: [
    {
      id: "123456",
      name: "New York",
      parentId: "123456",
      parentName: "New York",
    },
  ],
  tags: [
    "website",
    "redesign",
    "urgent",
  ],
  notes: "Client has requested modern design with mobile-first approach",
  contractNumber: "CNT-2024-001",
  profitMargin: 15.5,
  scheduleStatus: "on_schedule",
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
  teamSize: 8,
  customFields: [
    {
      id: "2389328923893298",
      name: "employee_level",
      description: "Employee Level",
      value: "Uses Salesforce and Marketo",
    },
  ],
  rowVersion: "1-12345",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                | Example                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                                     | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Name of the project                                                                                                                        | Website Redesign Project                                                                                                                   |
| `displayId`                                                                                                                                | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | User-friendly project identifier                                                                                                           | PROJ-001                                                                                                                                   |
| `referenceId`                                                                                                                              | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | External reference identifier for the project                                                                                              | WD-REF-2024-001                                                                                                                            |
| `description`                                                                                                                              | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Detailed description of the project                                                                                                        | Complete redesign of the company website including new branding and improved user experience                                               |
| `status`                                                                                                                                   | [components.ProjectProjectStatus](../../models/components/projectprojectstatus.md)                                                         | :heavy_minus_sign:                                                                                                                         | Current status of the project                                                                                                              | active                                                                                                                                     |
| `active`                                                                                                                                   | *boolean*                                                                                                                                  | :heavy_minus_sign:                                                                                                                         | Indicates whether the project is currently active or inactive                                                                              | true                                                                                                                                       |
| `projectType`                                                                                                                              | [components.ProjectType](../../models/components/projecttype.md)                                                                           | :heavy_minus_sign:                                                                                                                         | Type or category of the project                                                                                                            | client_project                                                                                                                             |
| `priority`                                                                                                                                 | [components.Priority](../../models/components/priority.md)                                                                                 | :heavy_minus_sign:                                                                                                                         | Priority level of the project                                                                                                              | high                                                                                                                                       |
| `completionPercentage`                                                                                                                     | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Percentage of project completion (0-100)                                                                                                   | 75.5                                                                                                                                       |
| `startDate`                                                                                                                                | [RFCDate](../../types/rfcdate.md)                                                                                                          | :heavy_minus_sign:                                                                                                                         | Start date of the project                                                                                                                  | 2024-01-15                                                                                                                                 |
| `endDate`                                                                                                                                  | [RFCDate](../../types/rfcdate.md)                                                                                                          | :heavy_minus_sign:                                                                                                                         | Expected or actual end date of the project                                                                                                 | 2024-06-30                                                                                                                                 |
| `customer`                                                                                                                                 | [components.LinkedCustomerInput](../../models/components/linkedcustomerinput.md)                                                           | :heavy_minus_sign:                                                                                                                         | The customer this entity is linked to.                                                                                                     |                                                                                                                                            |
| `department`                                                                                                                               | [components.ProjectDepartment](../../models/components/projectdepartment.md)                                                               | :heavy_minus_sign:                                                                                                                         | Department or organizational unit associated with the project                                                                              |                                                                                                                                            |
| `companyId`                                                                                                                                | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | The company ID the transaction belongs to                                                                                                  | 12345                                                                                                                                      |
| `ownerId`                                                                                                                                  | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | ID of the user who owns/manages this project                                                                                               | 12345                                                                                                                                      |
| `parentProject`                                                                                                                            | [components.ParentProject](../../models/components/parentproject.md)                                                                       | :heavy_minus_sign:                                                                                                                         | Parent project if this is a subproject                                                                                                     |                                                                                                                                            |
| `currency`                                                                                                                                 | [components.Currency](../../models/components/currency.md)                                                                                 | :heavy_minus_sign:                                                                                                                         | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).         | USD                                                                                                                                        |
| `budgetAmount`                                                                                                                             | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Total budgeted amount for the project                                                                                                      | 50000                                                                                                                                      |
| `approvedAmount`                                                                                                                           | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Approved budget amount for the project                                                                                                     | 48000                                                                                                                                      |
| `budgetHours`                                                                                                                              | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Total budgeted hours for the project                                                                                                       | 400                                                                                                                                        |
| `hourlyRate`                                                                                                                               | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Default hourly rate for project work                                                                                                       | 125                                                                                                                                        |
| `billingMethod`                                                                                                                            | [components.BillingMethod](../../models/components/billingmethod.md)                                                                       | :heavy_minus_sign:                                                                                                                         | Method used for billing this project                                                                                                       | time_and_materials                                                                                                                         |
| `isBillable`                                                                                                                               | *boolean*                                                                                                                                  | :heavy_minus_sign:                                                                                                                         | Indicates if the project is billable to the customer                                                                                       | true                                                                                                                                       |
| `phase`                                                                                                                                    | [components.ProjectPhase](../../models/components/projectphase.md)                                                                         | :heavy_minus_sign:                                                                                                                         | Current phase of the project lifecycle                                                                                                     | execution                                                                                                                                  |
| `taxRate`                                                                                                                                  | [components.LinkedTaxRateInput](../../models/components/linkedtaxrateinput.md)                                                             | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |                                                                                                                                            |
| `trackingCategories`                                                                                                                       | [components.LinkedTrackingCategory](../../models/components/linkedtrackingcategory.md)[]                                                   | :heavy_minus_sign:                                                                                                                         | A list of linked tracking categories.                                                                                                      |                                                                                                                                            |
| `tags`                                                                                                                                     | *string*[]                                                                                                                                 | :heavy_minus_sign:                                                                                                                         | Tags associated with the project                                                                                                           | [<br/>"website",<br/>"redesign",<br/>"urgent"<br/>]                                                                                        |
| `notes`                                                                                                                                    | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Additional notes about the project                                                                                                         | Client has requested modern design with mobile-first approach                                                                              |
| `contractNumber`                                                                                                                           | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Contract or agreement number associated with the project                                                                                   | CNT-2024-001                                                                                                                               |
| `profitMargin`                                                                                                                             | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Expected profit margin percentage for the project                                                                                          | 15.5                                                                                                                                       |
| `scheduleStatus`                                                                                                                           | [components.ScheduleStatus](../../models/components/schedulestatus.md)                                                                     | :heavy_minus_sign:                                                                                                                         | Current status of project schedule compared to plan                                                                                        | on_schedule                                                                                                                                |
| `addresses`                                                                                                                                | [components.Address](../../models/components/address.md)[]                                                                                 | :heavy_minus_sign:                                                                                                                         | An array of addresses associated with the project (billing, job site, etc.)                                                                |                                                                                                                                            |
| `teamSize`                                                                                                                                 | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Number of team members assigned to the project                                                                                             | 8                                                                                                                                          |
| `customFields`                                                                                                                             | [components.CustomField](../../models/components/customfield.md)[]                                                                         | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |                                                                                                                                            |
| `rowVersion`                                                                                                                               | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | 1-12345                                                                                                                                    |