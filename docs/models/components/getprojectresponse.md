# GetProjectResponse

Projects

## Example Usage

```typescript
import { GetProjectResponse } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: GetProjectResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "Projects",
  operation: "one",
  data: {
    id: "12345",
    downstreamId: "12345",
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
      displayId: "CUST00101",
      displayName: "Windsurf Shop",
      companyName: "The boring company",
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
    actualAmount: 45250.75,
    budgetHours: 400,
    actualHours: 385.5,
    hourlyRate: 125,
    billingMethod: "time_and_materials",
    phase: "execution",
    taxRate: {
      id: "123456",
      code: "N-T",
      name: "GST on Purchases",
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
    updatedBy: "12345",
    createdBy: "12345",
    createdAt: new Date("2020-09-30T07:43:32.000Z"),
    updatedAt: new Date("2020-09-30T07:43:32.000Z"),
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `statusCode`                                             | *number*                                                 | :heavy_check_mark:                                       | HTTP Response Status Code                                | 200                                                      |
| `status`                                                 | *string*                                                 | :heavy_check_mark:                                       | HTTP Response Status                                     | OK                                                       |
| `service`                                                | *string*                                                 | :heavy_check_mark:                                       | Apideck ID of service provider                           | quickbooks                                               |
| `resource`                                               | *string*                                                 | :heavy_check_mark:                                       | Unified API resource name                                | Projects                                                 |
| `operation`                                              | *string*                                                 | :heavy_check_mark:                                       | Operation performed                                      | one                                                      |
| `data`                                                   | [components.Project](../../models/components/project.md) | :heavy_check_mark:                                       | N/A                                                      |                                                          |