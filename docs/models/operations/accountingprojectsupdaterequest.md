# AccountingProjectsUpdateRequest

## Example Usage

```typescript
import { AccountingProjectsUpdateRequest } from "@apideck/unify/models/operations";
import { RFCDate } from "@apideck/unify/types";

let value: AccountingProjectsUpdateRequest = {
  id: "<id>",
  serviceId: "salesforce",
  project: {
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
        code: "100",
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
  },
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                          | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | ID of the record you are acting upon.                                                                                                         |                                                                                                                                               |
| `consumerId`                                                                                                                                  | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | ID of the consumer which you want to get or push data from                                                                                    | test-consumer                                                                                                                                 |
| `appId`                                                                                                                                       | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The ID of your Unify application                                                                                                              | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                                                                       |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `raw`                                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Include raw response. Mostly used for debugging purposes                                                                                      |                                                                                                                                               |
| `project`                                                                                                                                     | [components.ProjectInput](../../models/components/projectinput.md)                                                                            | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |