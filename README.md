# apideck

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *apideck* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=apideck&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is beta private

<!-- Start Summary [summary] -->
## Summary

Apideck: The Apideck OpenAPI Spec: SDK Optimized

For more information about the API: [Apideck Developer Docs](https://developers.apideck.com)
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @apideck/sdk
```

### PNPM

```bash
pnpm add @apideck/sdk
```

### Bun

```bash
bun add @apideck/sdk
```

### Yarn

```bash
yarn add @apideck/sdk zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Apideck } from "@apideck/sdk";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.accounting.taxRates.list({
    serviceId: "salesforce",
    filter: {
      assets: true,
      equity: true,
      expenses: true,
      liabilities: true,
      revenue: true,
    },
    passThrough: {
      "search": "San Francisco",
    },
    fields: "id,updated_at",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [accounting](docs/sdks/accounting/README.md)


#### [accounting.attachments](docs/sdks/attachments/README.md)

* [list](docs/sdks/attachments/README.md#list) - List Attachments
* [get](docs/sdks/attachments/README.md#get) - Get Attachment
* [delete](docs/sdks/attachments/README.md#delete) - Delete Attachment
* [download](docs/sdks/attachments/README.md#download) - Download Attachment

#### [accounting.balanceSheet](docs/sdks/balancesheet/README.md)

* [get](docs/sdks/balancesheet/README.md#get) - Get BalanceSheet

#### [accounting.billPayments](docs/sdks/billpayments/README.md)

* [list](docs/sdks/billpayments/README.md#list) - List Bill Payments
* [create](docs/sdks/billpayments/README.md#create) - Create Bill Payment
* [get](docs/sdks/billpayments/README.md#get) - Get Bill Payment
* [update](docs/sdks/billpayments/README.md#update) - Update Bill Payment
* [delete](docs/sdks/billpayments/README.md#delete) - Delete Bill Payment

#### [accounting.bills](docs/sdks/bills/README.md)

* [list](docs/sdks/bills/README.md#list) - List Bills
* [create](docs/sdks/bills/README.md#create) - Create Bill
* [get](docs/sdks/bills/README.md#get) - Get Bill
* [update](docs/sdks/bills/README.md#update) - Update Bill
* [delete](docs/sdks/bills/README.md#delete) - Delete Bill

#### [accounting.companyInfo](docs/sdks/companyinfo/README.md)

* [get](docs/sdks/companyinfo/README.md#get) - Get company info

#### [accounting.creditNotes](docs/sdks/creditnotes/README.md)

* [list](docs/sdks/creditnotes/README.md#list) - List Credit Notes
* [create](docs/sdks/creditnotes/README.md#create) - Create Credit Note
* [get](docs/sdks/creditnotes/README.md#get) - Get Credit Note
* [update](docs/sdks/creditnotes/README.md#update) - Update Credit Note
* [delete](docs/sdks/creditnotes/README.md#delete) - Delete Credit Note

#### [accounting.customers](docs/sdks/customers/README.md)

* [list](docs/sdks/customers/README.md#list) - List Customers
* [create](docs/sdks/customers/README.md#create) - Create Customer
* [get](docs/sdks/customers/README.md#get) - Get Customer
* [update](docs/sdks/customers/README.md#update) - Update Customer
* [delete](docs/sdks/customers/README.md#delete) - Delete Customer

#### [accounting.departments](docs/sdks/departments/README.md)

* [list](docs/sdks/departments/README.md#list) - List Departments
* [create](docs/sdks/departments/README.md#create) - Create Department
* [get](docs/sdks/departments/README.md#get) - Get Department
* [update](docs/sdks/departments/README.md#update) - Update Department
* [delete](docs/sdks/departments/README.md#delete) - Delete Department

#### [accounting.expenses](docs/sdks/expenses/README.md)

* [list](docs/sdks/expenses/README.md#list) - List Expenses
* [create](docs/sdks/expenses/README.md#create) - Create Expense
* [get](docs/sdks/expenses/README.md#get) - Get Expense
* [update](docs/sdks/expenses/README.md#update) - Update Expense
* [delete](docs/sdks/expenses/README.md#delete) - Delete Expense

#### [accounting.invoiceItems](docs/sdks/invoiceitems/README.md)

* [list](docs/sdks/invoiceitems/README.md#list) - List Invoice Items
* [create](docs/sdks/invoiceitems/README.md#create) - Create Invoice Item
* [get](docs/sdks/invoiceitems/README.md#get) - Get Invoice Item
* [update](docs/sdks/invoiceitems/README.md#update) - Update Invoice Item
* [delete](docs/sdks/invoiceitems/README.md#delete) - Delete Invoice Item

#### [accounting.invoices](docs/sdks/invoices/README.md)

* [list](docs/sdks/invoices/README.md#list) - List Invoices
* [create](docs/sdks/invoices/README.md#create) - Create Invoice
* [get](docs/sdks/invoices/README.md#get) - Get Invoice
* [update](docs/sdks/invoices/README.md#update) - Update Invoice
* [delete](docs/sdks/invoices/README.md#delete) - Delete Invoice

#### [accounting.journalEntries](docs/sdks/journalentries/README.md)

* [list](docs/sdks/journalentries/README.md#list) - List Journal Entries
* [create](docs/sdks/journalentries/README.md#create) - Create Journal Entry
* [get](docs/sdks/journalentries/README.md#get) - Get Journal Entry
* [update](docs/sdks/journalentries/README.md#update) - Update Journal Entry
* [delete](docs/sdks/journalentries/README.md#delete) - Delete Journal Entry

#### [accounting.ledgerAccounts](docs/sdks/ledgeraccounts/README.md)

* [list](docs/sdks/ledgeraccounts/README.md#list) - List Ledger Accounts
* [create](docs/sdks/ledgeraccounts/README.md#create) - Create Ledger Account
* [get](docs/sdks/ledgeraccounts/README.md#get) - Get Ledger Account
* [update](docs/sdks/ledgeraccounts/README.md#update) - Update Ledger Account
* [delete](docs/sdks/ledgeraccounts/README.md#delete) - Delete Ledger Account

#### [accounting.locations](docs/sdks/locations/README.md)

* [list](docs/sdks/locations/README.md#list) - List Locations
* [create](docs/sdks/locations/README.md#create) - Create Location
* [get](docs/sdks/locations/README.md#get) - Get Location
* [update](docs/sdks/locations/README.md#update) - Update Location
* [delete](docs/sdks/locations/README.md#delete) - Delete Location

#### [accounting.payments](docs/sdks/payments/README.md)

* [list](docs/sdks/payments/README.md#list) - List Payments
* [create](docs/sdks/payments/README.md#create) - Create Payment
* [get](docs/sdks/payments/README.md#get) - Get Payment
* [update](docs/sdks/payments/README.md#update) - Update Payment
* [delete](docs/sdks/payments/README.md#delete) - Delete Payment

#### [accounting.profitAndLoss](docs/sdks/profitandloss/README.md)

* [get](docs/sdks/profitandloss/README.md#get) - Get Profit and Loss

#### [accounting.purchaseOrders](docs/sdks/purchaseorders/README.md)

* [list](docs/sdks/purchaseorders/README.md#list) - List Purchase Orders
* [create](docs/sdks/purchaseorders/README.md#create) - Create Purchase Order
* [get](docs/sdks/purchaseorders/README.md#get) - Get Purchase Order
* [update](docs/sdks/purchaseorders/README.md#update) - Update Purchase Order
* [delete](docs/sdks/purchaseorders/README.md#delete) - Delete Purchase Order

#### [accounting.subsidiaries](docs/sdks/subsidiaries/README.md)

* [list](docs/sdks/subsidiaries/README.md#list) - List Subsidiaries
* [create](docs/sdks/subsidiaries/README.md#create) - Create Subsidiary
* [get](docs/sdks/subsidiaries/README.md#get) - Get Subsidiary
* [update](docs/sdks/subsidiaries/README.md#update) - Update Subsidiary
* [delete](docs/sdks/subsidiaries/README.md#delete) - Delete Subsidiary

#### [accounting.suppliers](docs/sdks/suppliers/README.md)

* [list](docs/sdks/suppliers/README.md#list) - List Suppliers
* [create](docs/sdks/suppliers/README.md#create) - Create Supplier
* [get](docs/sdks/suppliers/README.md#get) - Get Supplier
* [update](docs/sdks/suppliers/README.md#update) - Update Supplier
* [delete](docs/sdks/suppliers/README.md#delete) - Delete Supplier

#### [accounting.taxRates](docs/sdks/taxrates/README.md)

* [list](docs/sdks/taxrates/README.md#list) - List Tax Rates
* [create](docs/sdks/taxrates/README.md#create) - Create Tax Rate
* [get](docs/sdks/taxrates/README.md#get) - Get Tax Rate
* [update](docs/sdks/taxrates/README.md#update) - Update Tax Rate
* [delete](docs/sdks/taxrates/README.md#delete) - Delete Tax Rate

#### [accounting.trackingCategories](docs/sdks/trackingcategories/README.md)

* [list](docs/sdks/trackingcategories/README.md#list) - List Tracking Categories
* [create](docs/sdks/trackingcategories/README.md#create) - Create Tracking Category
* [get](docs/sdks/trackingcategories/README.md#get) - Get Tracking Category
* [update](docs/sdks/trackingcategories/README.md#update) - Update Tracking Category
* [delete](docs/sdks/trackingcategories/README.md#delete) - Delete Tracking Category


### [ats](docs/sdks/ats/README.md)


#### [ats.applicants](docs/sdks/applicants/README.md)

* [list](docs/sdks/applicants/README.md#list) - List Applicants
* [create](docs/sdks/applicants/README.md#create) - Create Applicant
* [get](docs/sdks/applicants/README.md#get) - Get Applicant
* [update](docs/sdks/applicants/README.md#update) - Update Applicant
* [delete](docs/sdks/applicants/README.md#delete) - Delete Applicant

#### [ats.applications](docs/sdks/applications/README.md)

* [list](docs/sdks/applications/README.md#list) - List Applications
* [create](docs/sdks/applications/README.md#create) - Create Application
* [get](docs/sdks/applications/README.md#get) - Get Application
* [update](docs/sdks/applications/README.md#update) - Update Application
* [delete](docs/sdks/applications/README.md#delete) - Delete Application

#### [ats.jobs](docs/sdks/jobs/README.md)

* [list](docs/sdks/jobs/README.md#list) - List Jobs
* [get](docs/sdks/jobs/README.md#get) - Get Job

### [connector](docs/sdks/connector/README.md)


#### [connector.apiResourceCoverage](docs/sdks/apiresourcecoverage/README.md)

* [get](docs/sdks/apiresourcecoverage/README.md#get) - Get API Resource Coverage

#### [connector.apiResources](docs/sdks/apiresources/README.md)

* [get](docs/sdks/apiresources/README.md#get) - Get API Resource

#### [connector.apis](docs/sdks/apis/README.md)

* [list](docs/sdks/apis/README.md#list) - List APIs
* [get](docs/sdks/apis/README.md#get) - Get API

#### [connector.connectorDocs](docs/sdks/connectordocs/README.md)

* [get](docs/sdks/connectordocs/README.md#get) - Get Connector Doc content

#### [connector.connectorResources](docs/sdks/connectorresources/README.md)

* [get](docs/sdks/connectorresources/README.md#get) - Get Connector Resource

#### [connector.connectors](docs/sdks/connectors/README.md)

* [list](docs/sdks/connectors/README.md#list) - List Connectors
* [get](docs/sdks/connectors/README.md#get) - Get Connector

### [crm](docs/sdks/crm/README.md)


#### [crm.activities](docs/sdks/activities/README.md)

* [list](docs/sdks/activities/README.md#list) - List activities
* [create](docs/sdks/activities/README.md#create) - Create activity
* [get](docs/sdks/activities/README.md#get) - Get activity
* [update](docs/sdks/activities/README.md#update) - Update activity
* [delete](docs/sdks/activities/README.md#delete) - Delete activity

#### [crm.companies](docs/sdks/companies/README.md)

* [list](docs/sdks/companies/README.md#list) - List companies
* [create](docs/sdks/companies/README.md#create) - Create company
* [get](docs/sdks/companies/README.md#get) - Get company
* [update](docs/sdks/companies/README.md#update) - Update company
* [delete](docs/sdks/companies/README.md#delete) - Delete company

#### [crm.contacts](docs/sdks/contacts/README.md)

* [list](docs/sdks/contacts/README.md#list) - List contacts
* [create](docs/sdks/contacts/README.md#create) - Create contact
* [get](docs/sdks/contacts/README.md#get) - Get contact
* [update](docs/sdks/contacts/README.md#update) - Update contact
* [delete](docs/sdks/contacts/README.md#delete) - Delete contact

#### [crm.leads](docs/sdks/leads/README.md)

* [list](docs/sdks/leads/README.md#list) - List leads
* [create](docs/sdks/leads/README.md#create) - Create lead
* [get](docs/sdks/leads/README.md#get) - Get lead
* [update](docs/sdks/leads/README.md#update) - Update lead
* [delete](docs/sdks/leads/README.md#delete) - Delete lead

#### [crm.notes](docs/sdks/notes/README.md)

* [list](docs/sdks/notes/README.md#list) - List notes
* [create](docs/sdks/notes/README.md#create) - Create note
* [get](docs/sdks/notes/README.md#get) - Get note
* [update](docs/sdks/notes/README.md#update) - Update note
* [delete](docs/sdks/notes/README.md#delete) - Delete note

#### [crm.opportunities](docs/sdks/opportunities/README.md)

* [list](docs/sdks/opportunities/README.md#list) - List opportunities
* [create](docs/sdks/opportunities/README.md#create) - Create opportunity
* [get](docs/sdks/opportunities/README.md#get) - Get opportunity
* [update](docs/sdks/opportunities/README.md#update) - Update opportunity
* [delete](docs/sdks/opportunities/README.md#delete) - Delete opportunity

#### [crm.pipelines](docs/sdks/pipelines/README.md)

* [list](docs/sdks/pipelines/README.md#list) - List pipelines
* [create](docs/sdks/pipelines/README.md#create) - Create pipeline
* [get](docs/sdks/pipelines/README.md#get) - Get pipeline
* [update](docs/sdks/pipelines/README.md#update) - Update pipeline
* [delete](docs/sdks/pipelines/README.md#delete) - Delete pipeline

#### [crm.users](docs/sdks/users/README.md)

* [list](docs/sdks/users/README.md#list) - List users
* [create](docs/sdks/users/README.md#create) - Create user
* [get](docs/sdks/users/README.md#get) - Get user
* [update](docs/sdks/users/README.md#update) - Update user
* [delete](docs/sdks/users/README.md#delete) - Delete user

### [ecommerce](docs/sdks/ecommerce/README.md)


#### [ecommerce.customers](docs/sdks/apideckcustomers/README.md)

* [list](docs/sdks/apideckcustomers/README.md#list) - List Customers
* [get](docs/sdks/apideckcustomers/README.md#get) - Get Customer

#### [ecommerce.orders](docs/sdks/orders/README.md)

* [list](docs/sdks/orders/README.md#list) - List Orders
* [get](docs/sdks/orders/README.md#get) - Get Order

#### [ecommerce.products](docs/sdks/products/README.md)

* [list](docs/sdks/products/README.md#list) - List Products
* [get](docs/sdks/products/README.md#get) - Get Product

#### [ecommerce.stores](docs/sdks/stores/README.md)

* [get](docs/sdks/stores/README.md#get) - Get Store

### [fileStorage](docs/sdks/filestorage/README.md)


#### [fileStorage.driveGroups](docs/sdks/drivegroups/README.md)

* [list](docs/sdks/drivegroups/README.md#list) - List DriveGroups
* [create](docs/sdks/drivegroups/README.md#create) - Create DriveGroup
* [get](docs/sdks/drivegroups/README.md#get) - Get DriveGroup
* [update](docs/sdks/drivegroups/README.md#update) - Update DriveGroup
* [delete](docs/sdks/drivegroups/README.md#delete) - Delete DriveGroup

#### [fileStorage.drives](docs/sdks/drives/README.md)

* [list](docs/sdks/drives/README.md#list) - List Drives
* [create](docs/sdks/drives/README.md#create) - Create Drive
* [get](docs/sdks/drives/README.md#get) - Get Drive
* [update](docs/sdks/drives/README.md#update) - Update Drive
* [delete](docs/sdks/drives/README.md#delete) - Delete Drive

#### [fileStorage.files](docs/sdks/files/README.md)

* [list](docs/sdks/files/README.md#list) - List Files
* [search](docs/sdks/files/README.md#search) - Search Files
* [get](docs/sdks/files/README.md#get) - Get File
* [update](docs/sdks/files/README.md#update) - Rename or move File
* [delete](docs/sdks/files/README.md#delete) - Delete File
* [download](docs/sdks/files/README.md#download) - Download File
* [export](docs/sdks/files/README.md#export) - Export File

#### [fileStorage.folders](docs/sdks/folders/README.md)

* [create](docs/sdks/folders/README.md#create) - Create Folder
* [get](docs/sdks/folders/README.md#get) - Get Folder
* [update](docs/sdks/folders/README.md#update) - Rename or move Folder
* [delete](docs/sdks/folders/README.md#delete) - Delete Folder
* [copy](docs/sdks/folders/README.md#copy) - Copy Folder

#### [fileStorage.sharedLinks](docs/sdks/sharedlinks/README.md)

* [list](docs/sdks/sharedlinks/README.md#list) - List SharedLinks
* [create](docs/sdks/sharedlinks/README.md#create) - Create Shared Link
* [get](docs/sdks/sharedlinks/README.md#get) - Get Shared Link
* [update](docs/sdks/sharedlinks/README.md#update) - Update Shared Link
* [delete](docs/sdks/sharedlinks/README.md#delete) - Delete Shared Link

#### [fileStorage.uploadSessions](docs/sdks/uploadsessions/README.md)

* [create](docs/sdks/uploadsessions/README.md#create) - Start Upload Session
* [get](docs/sdks/uploadsessions/README.md#get) - Get Upload Session
* [delete](docs/sdks/uploadsessions/README.md#delete) - Abort Upload Session
* [finish](docs/sdks/uploadsessions/README.md#finish) - Finish Upload Session

### [hris](docs/sdks/hris/README.md)


#### [hris.companies](docs/sdks/apideckcompanies/README.md)

* [list](docs/sdks/apideckcompanies/README.md#list) - List Companies
* [create](docs/sdks/apideckcompanies/README.md#create) - Create Company
* [get](docs/sdks/apideckcompanies/README.md#get) - Get Company
* [update](docs/sdks/apideckcompanies/README.md#update) - Update Company
* [delete](docs/sdks/apideckcompanies/README.md#delete) - Delete Company

#### [hris.departments](docs/sdks/apideckdepartments/README.md)

* [list](docs/sdks/apideckdepartments/README.md#list) - List Departments
* [create](docs/sdks/apideckdepartments/README.md#create) - Create Department
* [get](docs/sdks/apideckdepartments/README.md#get) - Get Department
* [update](docs/sdks/apideckdepartments/README.md#update) - Update Department
* [delete](docs/sdks/apideckdepartments/README.md#delete) - Delete Department

#### [hris.employeePayrolls](docs/sdks/employeepayrolls/README.md)

* [list](docs/sdks/employeepayrolls/README.md#list) - List Employee Payrolls
* [get](docs/sdks/employeepayrolls/README.md#get) - Get Employee Payroll

#### [hris.employees](docs/sdks/employees/README.md)

* [list](docs/sdks/employees/README.md#list) - List Employees
* [create](docs/sdks/employees/README.md#create) - Create Employee
* [get](docs/sdks/employees/README.md#get) - Get Employee
* [update](docs/sdks/employees/README.md#update) - Update Employee
* [delete](docs/sdks/employees/README.md#delete) - Delete Employee

#### [hris.employeeSchedules](docs/sdks/employeeschedules/README.md)

* [list](docs/sdks/employeeschedules/README.md#list) - List Employee Schedules

#### [hris.payrolls](docs/sdks/payrolls/README.md)

* [list](docs/sdks/payrolls/README.md#list) - List Payroll
* [get](docs/sdks/payrolls/README.md#get) - Get Payroll

#### [hris.timeOffRequests](docs/sdks/timeoffrequests/README.md)

* [list](docs/sdks/timeoffrequests/README.md#list) - List Time Off Requests
* [create](docs/sdks/timeoffrequests/README.md#create) - Create Time Off Request
* [get](docs/sdks/timeoffrequests/README.md#get) - Get Time Off Request
* [update](docs/sdks/timeoffrequests/README.md#update) - Update Time Off Request
* [delete](docs/sdks/timeoffrequests/README.md#delete) - Delete Time Off Request

### [issueTracking](docs/sdks/issuetracking/README.md)


#### [issueTracking.collections](docs/sdks/collections/README.md)

* [list](docs/sdks/collections/README.md#list) - List Collections
* [get](docs/sdks/collections/README.md#get) - Get Collection

#### [issueTracking.collectionTags](docs/sdks/collectiontags/README.md)

* [list](docs/sdks/collectiontags/README.md#list) - List Tags

#### [issueTracking.collectionTicketComments](docs/sdks/collectionticketcomments/README.md)

* [list](docs/sdks/collectionticketcomments/README.md#list) - List Comments
* [create](docs/sdks/collectionticketcomments/README.md#create) - Create Comment
* [get](docs/sdks/collectionticketcomments/README.md#get) - Get Comment
* [update](docs/sdks/collectionticketcomments/README.md#update) - Update Comment
* [delete](docs/sdks/collectionticketcomments/README.md#delete) - Delete Comment

#### [issueTracking.collectionTickets](docs/sdks/collectiontickets/README.md)

* [list](docs/sdks/collectiontickets/README.md#list) - List Tickets
* [create](docs/sdks/collectiontickets/README.md#create) - Create Ticket
* [get](docs/sdks/collectiontickets/README.md#get) - Get Ticket
* [update](docs/sdks/collectiontickets/README.md#update) - Update Ticket
* [delete](docs/sdks/collectiontickets/README.md#delete) - Delete Ticket

#### [issueTracking.collectionUsers](docs/sdks/collectionusers/README.md)

* [list](docs/sdks/collectionusers/README.md#list) - List Users
* [get](docs/sdks/collectionusers/README.md#get) - Get user

### [sms](docs/sdks/sms/README.md)


#### [sms.messages](docs/sdks/messages/README.md)

* [list](docs/sdks/messages/README.md#list) - List Messages
* [create](docs/sdks/messages/README.md#create) - Create Message
* [get](docs/sdks/messages/README.md#get) - Get Message
* [update](docs/sdks/messages/README.md#update) - Update Message
* [delete](docs/sdks/messages/README.md#delete) - Delete Message

### [vault](docs/sdks/vault/README.md)


#### [vault.connectionCustomMappings](docs/sdks/connectioncustommappings/README.md)

* [list](docs/sdks/connectioncustommappings/README.md#list) - List connection custom mappings

#### [vault.connections](docs/sdks/connections/README.md)

* [list](docs/sdks/connections/README.md#list) - Get all connections
* [get](docs/sdks/connections/README.md#get) - Get connection
* [update](docs/sdks/connections/README.md#update) - Update connection
* [delete](docs/sdks/connections/README.md#delete) - Deletes a connection
* [imports](docs/sdks/connections/README.md#imports) - Import connection
* [token](docs/sdks/connections/README.md#token) - Authorize Access Token

#### [vault.connectionSettings](docs/sdks/connectionsettings/README.md)

* [list](docs/sdks/connectionsettings/README.md#list) - Get resource settings
* [update](docs/sdks/connectionsettings/README.md#update) - Update settings

#### [vault.consumerRequestCounts](docs/sdks/consumerrequestcounts/README.md)

* [list](docs/sdks/consumerrequestcounts/README.md#list) - Consumer request counts

#### [vault.consumers](docs/sdks/consumers/README.md)

* [create](docs/sdks/consumers/README.md#create) - Create consumer
* [list](docs/sdks/consumers/README.md#list) - Get all consumers
* [get](docs/sdks/consumers/README.md#get) - Get consumer
* [update](docs/sdks/consumers/README.md#update) - Update consumer
* [delete](docs/sdks/consumers/README.md#delete) - Delete consumer

#### [vault.createCallback](docs/sdks/createcallback/README.md)

* [state](docs/sdks/createcallback/README.md#state) - Create Callback State

#### [vault.customFields](docs/sdks/customfields/README.md)

* [list](docs/sdks/customfields/README.md#list) - Get resource custom fields

#### [vault.customMappings](docs/sdks/custommappings/README.md)

* [list](docs/sdks/custommappings/README.md#list) - List custom mappings

#### [vault.logs](docs/sdks/logs/README.md)

* [list](docs/sdks/logs/README.md#list) - Get all consumer request logs

#### [vault.sessions](docs/sdks/sessions/README.md)

* [create](docs/sdks/sessions/README.md#create) - Create Session

#### [vault.validateConnection](docs/sdks/validateconnection/README.md)

* [state](docs/sdks/validateconnection/README.md#state) - Validate Connection State

### [webhook](docs/sdks/webhook/README.md)


#### [webhook.eventLogs](docs/sdks/eventlogs/README.md)

* [list](docs/sdks/eventlogs/README.md#list) - List event logs

#### [webhook.webhooks](docs/sdks/webhooks/README.md)

* [list](docs/sdks/webhooks/README.md#list) - List webhook subscriptions
* [create](docs/sdks/webhooks/README.md#create) - Create webhook subscription
* [get](docs/sdks/webhooks/README.md#get) - Get webhook subscription
* [update](docs/sdks/webhooks/README.md#update) - Update webhook subscription
* [delete](docs/sdks/webhooks/README.md#delete) - Delete webhook subscription

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`accountingAttachmentsDelete`](docs/sdks/attachments/README.md#delete) - Delete Attachment
- [`accountingAttachmentsDownload`](docs/sdks/attachments/README.md#download) - Download Attachment
- [`accountingAttachmentsGet`](docs/sdks/attachments/README.md#get) - Get Attachment
- [`accountingAttachmentsList`](docs/sdks/attachments/README.md#list) - List Attachments
- [`accountingBalanceSheetGet`](docs/sdks/balancesheet/README.md#get) - Get BalanceSheet
- [`accountingBillPaymentsCreate`](docs/sdks/billpayments/README.md#create) - Create Bill Payment
- [`accountingBillPaymentsDelete`](docs/sdks/billpayments/README.md#delete) - Delete Bill Payment
- [`accountingBillPaymentsGet`](docs/sdks/billpayments/README.md#get) - Get Bill Payment
- [`accountingBillPaymentsList`](docs/sdks/billpayments/README.md#list) - List Bill Payments
- [`accountingBillPaymentsUpdate`](docs/sdks/billpayments/README.md#update) - Update Bill Payment
- [`accountingBillsCreate`](docs/sdks/bills/README.md#create) - Create Bill
- [`accountingBillsDelete`](docs/sdks/bills/README.md#delete) - Delete Bill
- [`accountingBillsGet`](docs/sdks/bills/README.md#get) - Get Bill
- [`accountingBillsList`](docs/sdks/bills/README.md#list) - List Bills
- [`accountingBillsUpdate`](docs/sdks/bills/README.md#update) - Update Bill
- [`accountingCompanyInfoGet`](docs/sdks/companyinfo/README.md#get) - Get company info
- [`accountingCreditNotesCreate`](docs/sdks/creditnotes/README.md#create) - Create Credit Note
- [`accountingCreditNotesDelete`](docs/sdks/creditnotes/README.md#delete) - Delete Credit Note
- [`accountingCreditNotesGet`](docs/sdks/creditnotes/README.md#get) - Get Credit Note
- [`accountingCreditNotesList`](docs/sdks/creditnotes/README.md#list) - List Credit Notes
- [`accountingCreditNotesUpdate`](docs/sdks/creditnotes/README.md#update) - Update Credit Note
- [`accountingCustomersCreate`](docs/sdks/customers/README.md#create) - Create Customer
- [`accountingCustomersDelete`](docs/sdks/customers/README.md#delete) - Delete Customer
- [`accountingCustomersGet`](docs/sdks/customers/README.md#get) - Get Customer
- [`accountingCustomersList`](docs/sdks/customers/README.md#list) - List Customers
- [`accountingCustomersUpdate`](docs/sdks/customers/README.md#update) - Update Customer
- [`accountingDepartmentsCreate`](docs/sdks/departments/README.md#create) - Create Department
- [`accountingDepartmentsDelete`](docs/sdks/departments/README.md#delete) - Delete Department
- [`accountingDepartmentsGet`](docs/sdks/departments/README.md#get) - Get Department
- [`accountingDepartmentsList`](docs/sdks/departments/README.md#list) - List Departments
- [`accountingDepartmentsUpdate`](docs/sdks/departments/README.md#update) - Update Department
- [`accountingExpensesCreate`](docs/sdks/expenses/README.md#create) - Create Expense
- [`accountingExpensesDelete`](docs/sdks/expenses/README.md#delete) - Delete Expense
- [`accountingExpensesGet`](docs/sdks/expenses/README.md#get) - Get Expense
- [`accountingExpensesList`](docs/sdks/expenses/README.md#list) - List Expenses
- [`accountingExpensesUpdate`](docs/sdks/expenses/README.md#update) - Update Expense
- [`accountingInvoiceItemsCreate`](docs/sdks/invoiceitems/README.md#create) - Create Invoice Item
- [`accountingInvoiceItemsDelete`](docs/sdks/invoiceitems/README.md#delete) - Delete Invoice Item
- [`accountingInvoiceItemsGet`](docs/sdks/invoiceitems/README.md#get) - Get Invoice Item
- [`accountingInvoiceItemsList`](docs/sdks/invoiceitems/README.md#list) - List Invoice Items
- [`accountingInvoiceItemsUpdate`](docs/sdks/invoiceitems/README.md#update) - Update Invoice Item
- [`accountingInvoicesCreate`](docs/sdks/invoices/README.md#create) - Create Invoice
- [`accountingInvoicesDelete`](docs/sdks/invoices/README.md#delete) - Delete Invoice
- [`accountingInvoicesGet`](docs/sdks/invoices/README.md#get) - Get Invoice
- [`accountingInvoicesList`](docs/sdks/invoices/README.md#list) - List Invoices
- [`accountingInvoicesUpdate`](docs/sdks/invoices/README.md#update) - Update Invoice
- [`accountingJournalEntriesCreate`](docs/sdks/journalentries/README.md#create) - Create Journal Entry
- [`accountingJournalEntriesDelete`](docs/sdks/journalentries/README.md#delete) - Delete Journal Entry
- [`accountingJournalEntriesGet`](docs/sdks/journalentries/README.md#get) - Get Journal Entry
- [`accountingJournalEntriesList`](docs/sdks/journalentries/README.md#list) - List Journal Entries
- [`accountingJournalEntriesUpdate`](docs/sdks/journalentries/README.md#update) - Update Journal Entry
- [`accountingLedgerAccountsCreate`](docs/sdks/ledgeraccounts/README.md#create) - Create Ledger Account
- [`accountingLedgerAccountsDelete`](docs/sdks/ledgeraccounts/README.md#delete) - Delete Ledger Account
- [`accountingLedgerAccountsGet`](docs/sdks/ledgeraccounts/README.md#get) - Get Ledger Account
- [`accountingLedgerAccountsList`](docs/sdks/ledgeraccounts/README.md#list) - List Ledger Accounts
- [`accountingLedgerAccountsUpdate`](docs/sdks/ledgeraccounts/README.md#update) - Update Ledger Account
- [`accountingLocationsCreate`](docs/sdks/locations/README.md#create) - Create Location
- [`accountingLocationsDelete`](docs/sdks/locations/README.md#delete) - Delete Location
- [`accountingLocationsGet`](docs/sdks/locations/README.md#get) - Get Location
- [`accountingLocationsList`](docs/sdks/locations/README.md#list) - List Locations
- [`accountingLocationsUpdate`](docs/sdks/locations/README.md#update) - Update Location
- [`accountingPaymentsCreate`](docs/sdks/payments/README.md#create) - Create Payment
- [`accountingPaymentsDelete`](docs/sdks/payments/README.md#delete) - Delete Payment
- [`accountingPaymentsGet`](docs/sdks/payments/README.md#get) - Get Payment
- [`accountingPaymentsList`](docs/sdks/payments/README.md#list) - List Payments
- [`accountingPaymentsUpdate`](docs/sdks/payments/README.md#update) - Update Payment
- [`accountingProfitAndLossGet`](docs/sdks/profitandloss/README.md#get) - Get Profit and Loss
- [`accountingPurchaseOrdersCreate`](docs/sdks/purchaseorders/README.md#create) - Create Purchase Order
- [`accountingPurchaseOrdersDelete`](docs/sdks/purchaseorders/README.md#delete) - Delete Purchase Order
- [`accountingPurchaseOrdersGet`](docs/sdks/purchaseorders/README.md#get) - Get Purchase Order
- [`accountingPurchaseOrdersList`](docs/sdks/purchaseorders/README.md#list) - List Purchase Orders
- [`accountingPurchaseOrdersUpdate`](docs/sdks/purchaseorders/README.md#update) - Update Purchase Order
- [`accountingSubsidiariesCreate`](docs/sdks/subsidiaries/README.md#create) - Create Subsidiary
- [`accountingSubsidiariesDelete`](docs/sdks/subsidiaries/README.md#delete) - Delete Subsidiary
- [`accountingSubsidiariesGet`](docs/sdks/subsidiaries/README.md#get) - Get Subsidiary
- [`accountingSubsidiariesList`](docs/sdks/subsidiaries/README.md#list) - List Subsidiaries
- [`accountingSubsidiariesUpdate`](docs/sdks/subsidiaries/README.md#update) - Update Subsidiary
- [`accountingSuppliersCreate`](docs/sdks/suppliers/README.md#create) - Create Supplier
- [`accountingSuppliersDelete`](docs/sdks/suppliers/README.md#delete) - Delete Supplier
- [`accountingSuppliersGet`](docs/sdks/suppliers/README.md#get) - Get Supplier
- [`accountingSuppliersList`](docs/sdks/suppliers/README.md#list) - List Suppliers
- [`accountingSuppliersUpdate`](docs/sdks/suppliers/README.md#update) - Update Supplier
- [`accountingTaxRatesCreate`](docs/sdks/taxrates/README.md#create) - Create Tax Rate
- [`accountingTaxRatesDelete`](docs/sdks/taxrates/README.md#delete) - Delete Tax Rate
- [`accountingTaxRatesGet`](docs/sdks/taxrates/README.md#get) - Get Tax Rate
- [`accountingTaxRatesList`](docs/sdks/taxrates/README.md#list) - List Tax Rates
- [`accountingTaxRatesUpdate`](docs/sdks/taxrates/README.md#update) - Update Tax Rate
- [`accountingTrackingCategoriesCreate`](docs/sdks/trackingcategories/README.md#create) - Create Tracking Category
- [`accountingTrackingCategoriesDelete`](docs/sdks/trackingcategories/README.md#delete) - Delete Tracking Category
- [`accountingTrackingCategoriesGet`](docs/sdks/trackingcategories/README.md#get) - Get Tracking Category
- [`accountingTrackingCategoriesList`](docs/sdks/trackingcategories/README.md#list) - List Tracking Categories
- [`accountingTrackingCategoriesUpdate`](docs/sdks/trackingcategories/README.md#update) - Update Tracking Category
- [`atsApplicantsCreate`](docs/sdks/applicants/README.md#create) - Create Applicant
- [`atsApplicantsDelete`](docs/sdks/applicants/README.md#delete) - Delete Applicant
- [`atsApplicantsGet`](docs/sdks/applicants/README.md#get) - Get Applicant
- [`atsApplicantsList`](docs/sdks/applicants/README.md#list) - List Applicants
- [`atsApplicantsUpdate`](docs/sdks/applicants/README.md#update) - Update Applicant
- [`atsApplicationsCreate`](docs/sdks/applications/README.md#create) - Create Application
- [`atsApplicationsDelete`](docs/sdks/applications/README.md#delete) - Delete Application
- [`atsApplicationsGet`](docs/sdks/applications/README.md#get) - Get Application
- [`atsApplicationsList`](docs/sdks/applications/README.md#list) - List Applications
- [`atsApplicationsUpdate`](docs/sdks/applications/README.md#update) - Update Application
- [`atsJobsGet`](docs/sdks/jobs/README.md#get) - Get Job
- [`atsJobsList`](docs/sdks/jobs/README.md#list) - List Jobs
- [`connectorApiResourceCoverageGet`](docs/sdks/apiresourcecoverage/README.md#get) - Get API Resource Coverage
- [`connectorApiResourcesGet`](docs/sdks/apiresources/README.md#get) - Get API Resource
- [`connectorApisGet`](docs/sdks/apis/README.md#get) - Get API
- [`connectorApisList`](docs/sdks/apis/README.md#list) - List APIs
- [`connectorConnectorDocsGet`](docs/sdks/connectordocs/README.md#get) - Get Connector Doc content
- [`connectorConnectorResourcesGet`](docs/sdks/connectorresources/README.md#get) - Get Connector Resource
- [`connectorConnectorsGet`](docs/sdks/connectors/README.md#get) - Get Connector
- [`connectorConnectorsList`](docs/sdks/connectors/README.md#list) - List Connectors
- [`crmActivitiesCreate`](docs/sdks/activities/README.md#create) - Create activity
- [`crmActivitiesDelete`](docs/sdks/activities/README.md#delete) - Delete activity
- [`crmActivitiesGet`](docs/sdks/activities/README.md#get) - Get activity
- [`crmActivitiesList`](docs/sdks/activities/README.md#list) - List activities
- [`crmActivitiesUpdate`](docs/sdks/activities/README.md#update) - Update activity
- [`crmCompaniesCreate`](docs/sdks/companies/README.md#create) - Create company
- [`crmCompaniesDelete`](docs/sdks/companies/README.md#delete) - Delete company
- [`crmCompaniesGet`](docs/sdks/companies/README.md#get) - Get company
- [`crmCompaniesList`](docs/sdks/companies/README.md#list) - List companies
- [`crmCompaniesUpdate`](docs/sdks/companies/README.md#update) - Update company
- [`crmContactsCreate`](docs/sdks/contacts/README.md#create) - Create contact
- [`crmContactsDelete`](docs/sdks/contacts/README.md#delete) - Delete contact
- [`crmContactsGet`](docs/sdks/contacts/README.md#get) - Get contact
- [`crmContactsList`](docs/sdks/contacts/README.md#list) - List contacts
- [`crmContactsUpdate`](docs/sdks/contacts/README.md#update) - Update contact
- [`crmLeadsCreate`](docs/sdks/leads/README.md#create) - Create lead
- [`crmLeadsDelete`](docs/sdks/leads/README.md#delete) - Delete lead
- [`crmLeadsGet`](docs/sdks/leads/README.md#get) - Get lead
- [`crmLeadsList`](docs/sdks/leads/README.md#list) - List leads
- [`crmLeadsUpdate`](docs/sdks/leads/README.md#update) - Update lead
- [`crmNotesCreate`](docs/sdks/notes/README.md#create) - Create note
- [`crmNotesDelete`](docs/sdks/notes/README.md#delete) - Delete note
- [`crmNotesGet`](docs/sdks/notes/README.md#get) - Get note
- [`crmNotesList`](docs/sdks/notes/README.md#list) - List notes
- [`crmNotesUpdate`](docs/sdks/notes/README.md#update) - Update note
- [`crmOpportunitiesCreate`](docs/sdks/opportunities/README.md#create) - Create opportunity
- [`crmOpportunitiesDelete`](docs/sdks/opportunities/README.md#delete) - Delete opportunity
- [`crmOpportunitiesGet`](docs/sdks/opportunities/README.md#get) - Get opportunity
- [`crmOpportunitiesList`](docs/sdks/opportunities/README.md#list) - List opportunities
- [`crmOpportunitiesUpdate`](docs/sdks/opportunities/README.md#update) - Update opportunity
- [`crmPipelinesCreate`](docs/sdks/pipelines/README.md#create) - Create pipeline
- [`crmPipelinesDelete`](docs/sdks/pipelines/README.md#delete) - Delete pipeline
- [`crmPipelinesGet`](docs/sdks/pipelines/README.md#get) - Get pipeline
- [`crmPipelinesList`](docs/sdks/pipelines/README.md#list) - List pipelines
- [`crmPipelinesUpdate`](docs/sdks/pipelines/README.md#update) - Update pipeline
- [`crmUsersCreate`](docs/sdks/users/README.md#create) - Create user
- [`crmUsersDelete`](docs/sdks/users/README.md#delete) - Delete user
- [`crmUsersGet`](docs/sdks/users/README.md#get) - Get user
- [`crmUsersList`](docs/sdks/users/README.md#list) - List users
- [`crmUsersUpdate`](docs/sdks/users/README.md#update) - Update user
- [`ecommerceCustomersGet`](docs/sdks/apideckcustomers/README.md#get) - Get Customer
- [`ecommerceCustomersList`](docs/sdks/apideckcustomers/README.md#list) - List Customers
- [`ecommerceOrdersGet`](docs/sdks/orders/README.md#get) - Get Order
- [`ecommerceOrdersList`](docs/sdks/orders/README.md#list) - List Orders
- [`ecommerceProductsGet`](docs/sdks/products/README.md#get) - Get Product
- [`ecommerceProductsList`](docs/sdks/products/README.md#list) - List Products
- [`ecommerceStoresGet`](docs/sdks/stores/README.md#get) - Get Store
- [`fileStorageDriveGroupsCreate`](docs/sdks/drivegroups/README.md#create) - Create DriveGroup
- [`fileStorageDriveGroupsDelete`](docs/sdks/drivegroups/README.md#delete) - Delete DriveGroup
- [`fileStorageDriveGroupsGet`](docs/sdks/drivegroups/README.md#get) - Get DriveGroup
- [`fileStorageDriveGroupsList`](docs/sdks/drivegroups/README.md#list) - List DriveGroups
- [`fileStorageDriveGroupsUpdate`](docs/sdks/drivegroups/README.md#update) - Update DriveGroup
- [`fileStorageDrivesCreate`](docs/sdks/drives/README.md#create) - Create Drive
- [`fileStorageDrivesDelete`](docs/sdks/drives/README.md#delete) - Delete Drive
- [`fileStorageDrivesGet`](docs/sdks/drives/README.md#get) - Get Drive
- [`fileStorageDrivesList`](docs/sdks/drives/README.md#list) - List Drives
- [`fileStorageDrivesUpdate`](docs/sdks/drives/README.md#update) - Update Drive
- [`fileStorageFilesDelete`](docs/sdks/files/README.md#delete) - Delete File
- [`fileStorageFilesDownload`](docs/sdks/files/README.md#download) - Download File
- [`fileStorageFilesExport`](docs/sdks/files/README.md#export) - Export File
- [`fileStorageFilesGet`](docs/sdks/files/README.md#get) - Get File
- [`fileStorageFilesList`](docs/sdks/files/README.md#list) - List Files
- [`fileStorageFilesSearch`](docs/sdks/files/README.md#search) - Search Files
- [`fileStorageFilesUpdate`](docs/sdks/files/README.md#update) - Rename or move File
- [`fileStorageFoldersCopy`](docs/sdks/folders/README.md#copy) - Copy Folder
- [`fileStorageFoldersCreate`](docs/sdks/folders/README.md#create) - Create Folder
- [`fileStorageFoldersDelete`](docs/sdks/folders/README.md#delete) - Delete Folder
- [`fileStorageFoldersGet`](docs/sdks/folders/README.md#get) - Get Folder
- [`fileStorageFoldersUpdate`](docs/sdks/folders/README.md#update) - Rename or move Folder
- [`fileStorageSharedLinksCreate`](docs/sdks/sharedlinks/README.md#create) - Create Shared Link
- [`fileStorageSharedLinksDelete`](docs/sdks/sharedlinks/README.md#delete) - Delete Shared Link
- [`fileStorageSharedLinksGet`](docs/sdks/sharedlinks/README.md#get) - Get Shared Link
- [`fileStorageSharedLinksList`](docs/sdks/sharedlinks/README.md#list) - List SharedLinks
- [`fileStorageSharedLinksUpdate`](docs/sdks/sharedlinks/README.md#update) - Update Shared Link
- [`fileStorageUploadSessionsCreate`](docs/sdks/uploadsessions/README.md#create) - Start Upload Session
- [`fileStorageUploadSessionsDelete`](docs/sdks/uploadsessions/README.md#delete) - Abort Upload Session
- [`fileStorageUploadSessionsFinish`](docs/sdks/uploadsessions/README.md#finish) - Finish Upload Session
- [`fileStorageUploadSessionsGet`](docs/sdks/uploadsessions/README.md#get) - Get Upload Session
- [`hrisCompaniesCreate`](docs/sdks/apideckcompanies/README.md#create) - Create Company
- [`hrisCompaniesDelete`](docs/sdks/apideckcompanies/README.md#delete) - Delete Company
- [`hrisCompaniesGet`](docs/sdks/apideckcompanies/README.md#get) - Get Company
- [`hrisCompaniesList`](docs/sdks/apideckcompanies/README.md#list) - List Companies
- [`hrisCompaniesUpdate`](docs/sdks/apideckcompanies/README.md#update) - Update Company
- [`hrisDepartmentsCreate`](docs/sdks/apideckdepartments/README.md#create) - Create Department
- [`hrisDepartmentsDelete`](docs/sdks/apideckdepartments/README.md#delete) - Delete Department
- [`hrisDepartmentsGet`](docs/sdks/apideckdepartments/README.md#get) - Get Department
- [`hrisDepartmentsList`](docs/sdks/apideckdepartments/README.md#list) - List Departments
- [`hrisDepartmentsUpdate`](docs/sdks/apideckdepartments/README.md#update) - Update Department
- [`hrisEmployeePayrollsGet`](docs/sdks/employeepayrolls/README.md#get) - Get Employee Payroll
- [`hrisEmployeePayrollsList`](docs/sdks/employeepayrolls/README.md#list) - List Employee Payrolls
- [`hrisEmployeeSchedulesList`](docs/sdks/employeeschedules/README.md#list) - List Employee Schedules
- [`hrisEmployeesCreate`](docs/sdks/employees/README.md#create) - Create Employee
- [`hrisEmployeesDelete`](docs/sdks/employees/README.md#delete) - Delete Employee
- [`hrisEmployeesGet`](docs/sdks/employees/README.md#get) - Get Employee
- [`hrisEmployeesList`](docs/sdks/employees/README.md#list) - List Employees
- [`hrisEmployeesUpdate`](docs/sdks/employees/README.md#update) - Update Employee
- [`hrisPayrollsGet`](docs/sdks/payrolls/README.md#get) - Get Payroll
- [`hrisPayrollsList`](docs/sdks/payrolls/README.md#list) - List Payroll
- [`hrisTimeOffRequestsCreate`](docs/sdks/timeoffrequests/README.md#create) - Create Time Off Request
- [`hrisTimeOffRequestsDelete`](docs/sdks/timeoffrequests/README.md#delete) - Delete Time Off Request
- [`hrisTimeOffRequestsGet`](docs/sdks/timeoffrequests/README.md#get) - Get Time Off Request
- [`hrisTimeOffRequestsList`](docs/sdks/timeoffrequests/README.md#list) - List Time Off Requests
- [`hrisTimeOffRequestsUpdate`](docs/sdks/timeoffrequests/README.md#update) - Update Time Off Request
- [`issueTrackingCollectionsGet`](docs/sdks/collections/README.md#get) - Get Collection
- [`issueTrackingCollectionsList`](docs/sdks/collections/README.md#list) - List Collections
- [`issueTrackingCollectionTagsList`](docs/sdks/collectiontags/README.md#list) - List Tags
- [`issueTrackingCollectionTicketCommentsCreate`](docs/sdks/collectionticketcomments/README.md#create) - Create Comment
- [`issueTrackingCollectionTicketCommentsDelete`](docs/sdks/collectionticketcomments/README.md#delete) - Delete Comment
- [`issueTrackingCollectionTicketCommentsGet`](docs/sdks/collectionticketcomments/README.md#get) - Get Comment
- [`issueTrackingCollectionTicketCommentsList`](docs/sdks/collectionticketcomments/README.md#list) - List Comments
- [`issueTrackingCollectionTicketCommentsUpdate`](docs/sdks/collectionticketcomments/README.md#update) - Update Comment
- [`issueTrackingCollectionTicketsCreate`](docs/sdks/collectiontickets/README.md#create) - Create Ticket
- [`issueTrackingCollectionTicketsDelete`](docs/sdks/collectiontickets/README.md#delete) - Delete Ticket
- [`issueTrackingCollectionTicketsGet`](docs/sdks/collectiontickets/README.md#get) - Get Ticket
- [`issueTrackingCollectionTicketsList`](docs/sdks/collectiontickets/README.md#list) - List Tickets
- [`issueTrackingCollectionTicketsUpdate`](docs/sdks/collectiontickets/README.md#update) - Update Ticket
- [`issueTrackingCollectionUsersGet`](docs/sdks/collectionusers/README.md#get) - Get user
- [`issueTrackingCollectionUsersList`](docs/sdks/collectionusers/README.md#list) - List Users
- [`smsMessagesCreate`](docs/sdks/messages/README.md#create) - Create Message
- [`smsMessagesDelete`](docs/sdks/messages/README.md#delete) - Delete Message
- [`smsMessagesGet`](docs/sdks/messages/README.md#get) - Get Message
- [`smsMessagesList`](docs/sdks/messages/README.md#list) - List Messages
- [`smsMessagesUpdate`](docs/sdks/messages/README.md#update) - Update Message
- [`vaultConnectionCustomMappingsList`](docs/sdks/connectioncustommappings/README.md#list) - List connection custom mappings
- [`vaultConnectionsDelete`](docs/sdks/connections/README.md#delete) - Deletes a connection
- [`vaultConnectionSettingsList`](docs/sdks/connectionsettings/README.md#list) - Get resource settings
- [`vaultConnectionSettingsUpdate`](docs/sdks/connectionsettings/README.md#update) - Update settings
- [`vaultConnectionsGet`](docs/sdks/connections/README.md#get) - Get connection
- [`vaultConnectionsImports`](docs/sdks/connections/README.md#imports) - Import connection
- [`vaultConnectionsList`](docs/sdks/connections/README.md#list) - Get all connections
- [`vaultConnectionsToken`](docs/sdks/connections/README.md#token) - Authorize Access Token
- [`vaultConnectionsUpdate`](docs/sdks/connections/README.md#update) - Update connection
- [`vaultConsumerRequestCountsList`](docs/sdks/consumerrequestcounts/README.md#list) - Consumer request counts
- [`vaultConsumersCreate`](docs/sdks/consumers/README.md#create) - Create consumer
- [`vaultConsumersDelete`](docs/sdks/consumers/README.md#delete) - Delete consumer
- [`vaultConsumersGet`](docs/sdks/consumers/README.md#get) - Get consumer
- [`vaultConsumersList`](docs/sdks/consumers/README.md#list) - Get all consumers
- [`vaultConsumersUpdate`](docs/sdks/consumers/README.md#update) - Update consumer
- [`vaultCreateCallbackState`](docs/sdks/createcallback/README.md#state) - Create Callback State
- [`vaultCustomFieldsList`](docs/sdks/customfields/README.md#list) - Get resource custom fields
- [`vaultCustomMappingsList`](docs/sdks/custommappings/README.md#list) - List custom mappings
- [`vaultLogsList`](docs/sdks/logs/README.md#list) - Get all consumer request logs
- [`vaultSessionsCreate`](docs/sdks/sessions/README.md#create) - Create Session
- [`vaultValidateConnectionState`](docs/sdks/validateconnection/README.md#state) - Validate Connection State
- [`webhookEventLogsList`](docs/sdks/eventlogs/README.md#list) - List event logs
- [`webhookWebhooksCreate`](docs/sdks/webhooks/README.md#create) - Create webhook subscription
- [`webhookWebhooksDelete`](docs/sdks/webhooks/README.md#delete) - Delete webhook subscription
- [`webhookWebhooksGet`](docs/sdks/webhooks/README.md#get) - Get webhook subscription
- [`webhookWebhooksList`](docs/sdks/webhooks/README.md#list) - List webhook subscriptions
- [`webhookWebhooksUpdate`](docs/sdks/webhooks/README.md#update) - Update webhook subscription

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Apideck } from "@apideck/sdk";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.accounting.taxRates.list({
    serviceId: "salesforce",
    filter: {
      assets: true,
      equity: true,
      expenses: true,
      liabilities: true,
      revenue: true,
    },
    passThrough: {
      "search": "San Francisco",
    },
    fields: "id,updated_at",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Apideck } from "@apideck/sdk";

const apideck = new Apideck({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.accounting.taxRates.list({
    serviceId: "salesforce",
    filter: {
      assets: true,
      equity: true,
      expenses: true,
      liabilities: true,
      revenue: true,
    },
    passThrough: {
      "search": "San Francisco",
    },
    fields: "id,updated_at",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. By default, an API error will throw a `errors.APIError`.

If a HTTP request fails, an operation my also throw an error from the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |

In addition, when custom error responses are specified for an operation, the SDK may throw their associated Error type. You can refer to respective *Errors* tables in SDK docs for more details on possible error types for each operation. For example, the `list` method may throw the following errors:

| Error Type                     | Status Code | Content Type     |
| ------------------------------ | ----------- | ---------------- |
| errors.BadRequestResponse      | 400         | application/json |
| errors.UnauthorizedResponse    | 401         | application/json |
| errors.PaymentRequiredResponse | 402         | application/json |
| errors.NotFoundResponse        | 404         | application/json |
| errors.UnprocessableResponse   | 422         | application/json |
| errors.APIError                | 4XX, 5XX    | \*/\*            |

```typescript
import { Apideck } from "@apideck/sdk";
import {
  BadRequestResponse,
  NotFoundResponse,
  PaymentRequiredResponse,
  SDKValidationError,
  UnauthorizedResponse,
  UnprocessableResponse,
} from "@apideck/sdk/models/errors";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  let result;
  try {
    result = await apideck.accounting.taxRates.list({
      serviceId: "salesforce",
      filter: {
        assets: true,
        equity: true,
        expenses: true,
        liabilities: true,
        revenue: true,
      },
      passThrough: {
        "search": "San Francisco",
      },
      fields: "id,updated_at",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof BadRequestResponse): {
        // Handle err.data$: BadRequestResponseData
        console.error(err);
        return;
      }
      case (err instanceof UnauthorizedResponse): {
        // Handle err.data$: UnauthorizedResponseData
        console.error(err);
        return;
      }
      case (err instanceof PaymentRequiredResponse): {
        // Handle err.data$: PaymentRequiredResponseData
        console.error(err);
        return;
      }
      case (err instanceof NotFoundResponse): {
        // Handle err.data$: NotFoundResponseData
        console.error(err);
        return;
      }
      case (err instanceof UnprocessableResponse): {
        // Handle err.data$: UnprocessableResponseData
        console.error(err);
        return;
      }
      default: {
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Apideck } from "@apideck/sdk";

const apideck = new Apideck({
  serverURL: "https://unify.apideck.com",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.accounting.taxRates.list({
    serviceId: "salesforce",
    filter: {
      assets: true,
      equity: true,
      expenses: true,
      liabilities: true,
      revenue: true,
    },
    passThrough: {
      "search": "San Francisco",
    },
    fields: "id,updated_at",
  });

  // Handle the result
  console.log(result);
}

run();

```

### Override Server URL Per-Operation

The server URL can also be overridden on a per-operation basis, provided a server list was specified for the operation. For example:
```typescript
import { Apideck } from "@apideck/sdk";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.fileStorage.uploadSessions.create({
    serviceId: "salesforce",
    createUploadSessionRequest: {
      name: "Documents",
      parentFolderId: "1234",
      driveId: "1234",
      size: 1810673,
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
  }, {
    serverURL: "https://upload.apideck.com",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Apideck } from "@apideck/sdk";
import { HTTPClient } from "@apideck/sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Apideck({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type   | Scheme  | Environment Variable |
| -------- | ------ | ------- | -------------------- |
| `apiKey` | apiKey | API key | `APIDECK_API_KEY`    |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Apideck } from "@apideck/sdk";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.accounting.taxRates.list({
    serviceId: "salesforce",
    filter: {
      assets: true,
      equity: true,
      expenses: true,
      liabilities: true,
      revenue: true,
    },
    passThrough: {
      "search": "San Francisco",
    },
    fields: "id,updated_at",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Apideck } from "@apideck/sdk";

const sdk = new Apideck({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `APIDECK_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=apideck&utm_campaign=typescript)
