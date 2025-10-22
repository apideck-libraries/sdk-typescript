# HrisEmployeesAddRequest

## Example Usage

```typescript
import { HrisEmployeesAddRequest } from "@apideck/unify/models/operations";
import { RFCDate } from "@apideck/unify/types";

let value: HrisEmployeesAddRequest = {
  serviceId: "salesforce",
  employee: {
    id: "12345",
    firstName: "Elon",
    lastName: "Musk",
    middleName: "D.",
    displayName: "Technoking",
    preferredName: "Elon Musk",
    initials: "EM",
    salutation: "Mr",
    title: "CEO",
    maritalStatus: "married",
    partner: {
      firstName: "Elon",
      lastName: "Musk",
      middleName: "D.",
      gender: "male",
      initials: "EM",
      birthday: new RFCDate("2000-08-12"),
      deceasedOn: new RFCDate("2000-08-12"),
    },
    division: "Europe",
    divisionId: "12345",
    departmentId: "12345",
    departmentName: "12345",
    team: {
      id: "1234",
      name: "Full Stack Engineers",
    },
    companyId: "23456",
    companyName: "SpaceX",
    employmentStartDate: "2021-10-26",
    employmentEndDate: "2028-10-26",
    leavingReason: "resigned",
    employeeNumber: "123456-AB",
    employmentStatus: "active",
    ethnicity: "African American",
    manager: {
      id: "12345",
      name: "Elon Musk",
      firstName: "Elon",
      lastName: "Musk",
      email: "elon@musk.com",
      employmentStatus: "active",
    },
    directReports: [
      "a0d636c6-43b3-4bde-8c70-85b707d992f4",
      "a98lfd96-43b3-4bde-8c70-85b707d992e6",
    ],
    socialSecurityNumber: "123456789",
    birthday: new RFCDate("2000-08-12"),
    deceasedOn: new RFCDate("2000-08-12"),
    countryOfBirth: "US",
    description: "A description",
    gender: "male",
    pronouns: "she,her",
    preferredLanguage: "EN",
    languages: [
      "EN",
    ],
    nationalities: [
      "US",
    ],
    photoUrl: "https://unavatar.io/elon-musk",
    timezone: "Europe/London",
    source: "lever",
    sourceId: "12345",
    recordUrl: "https://app.intercom.io/contacts/12345",
    jobs: [
      {
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
      },
    ],
    compensations: [
      {
        rate: 50,
        paymentUnit: "hour",
        flsaStatus: "nonexempt",
        effectiveDate: "2021-06-11",
      },
    ],
    worksRemote: true,
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
    emails: [
      {
        id: "123",
        email: "elon@musk.com",
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
    socialLinks: [
      {
        id: "12345",
        url: "https://www.twitter.com/apideck",
        type: "twitter",
      },
    ],
    bankAccounts: [
      {
        bankName: "Chase Bank",
        accountNumber: "123465",
        accountName: "Main Operating Account",
        accountType: "credit_card",
        iban: "GB33BUKB20201555555555",
        bic: "CHASUS33",
        routingNumber: "021000021",
        bsbNumber: "062-001",
        branchIdentifier: "001",
        bankCode: "BNH",
        currency: "USD",
        country: "US",
      },
    ],
    taxCode: "1111",
    taxId: "234-32-0000",
    dietaryPreference: "Veggie",
    foodAllergies: [
      "No allergies",
    ],
    probationPeriod: {
      startDate: new RFCDate("2021-10-01"),
      endDate: new RFCDate("2021-11-28"),
    },
    tags: [
      "New",
    ],
    rowVersion: "1-12345",
    deleted: true,
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
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `raw`                                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Include raw response. Mostly used for debugging purposes                                                                                      |                                                                                                                                               |
| `consumerId`                                                                                                                                  | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | ID of the consumer which you want to get or push data from                                                                                    | test-consumer                                                                                                                                 |
| `appId`                                                                                                                                       | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The ID of your Unify application                                                                                                              | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                                                                       |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `employee`                                                                                                                                    | [components.EmployeeInput](../../models/components/employeeinput.md)                                                                          | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |