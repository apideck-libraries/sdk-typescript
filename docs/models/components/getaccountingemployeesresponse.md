# GetAccountingEmployeesResponse

Employees

## Example Usage

```typescript
import { GetAccountingEmployeesResponse } from "@apideck/unify/models/components";

let value: GetAccountingEmployeesResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "Employees",
  operation: "all",
  data: [
    {
      id: "12345",
      downstreamId: "12345",
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
        id: "12345",
        displayId: "123456",
        name: "Acme Inc.",
        downstreamId: "12345",
      },
      location: {
        id: "123456",
        displayId: "123456",
        name: "New York Office",
        downstreamId: "12345",
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
        id: "12345",
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
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
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
    },
  ],
  meta: {
    itemsOnPage: 50,
    cursors: {
      previous: "em9oby1jcm06OnBhZ2U6OjE=",
      current: "em9oby1jcm06OnBhZ2U6OjI=",
      next: "em9oby1jcm06OnBhZ2U6OjM=",
    },
  },
  links: {
    previous:
      "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D",
    current: "https://unify.apideck.com/crm/companies",
    next:
      "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `statusCode`                                                                     | *number*                                                                         | :heavy_check_mark:                                                               | HTTP Response Status Code                                                        | 200                                                                              |
| `status`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | HTTP Response Status                                                             | OK                                                                               |
| `service`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Apideck ID of service provider                                                   | quickbooks                                                                       |
| `resource`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | Unified API resource name                                                        | Employees                                                                        |
| `operation`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | Operation performed                                                              | all                                                                              |
| `data`                                                                           | [components.AccountingEmployee](../../models/components/accountingemployee.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `meta`                                                                           | [components.Meta](../../models/components/meta.md)                               | :heavy_minus_sign:                                                               | Response metadata                                                                |                                                                                  |
| `links`                                                                          | [components.Links](../../models/components/links.md)                             | :heavy_minus_sign:                                                               | Links to navigate to previous or next pages through the API                      |                                                                                  |
| `raw`                                                                            | Record<string, *any*>                                                            | :heavy_minus_sign:                                                               | Raw response from the integration when raw=true query param is provided          |                                                                                  |