# apideck

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *apideck* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=apideck&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<!-- Start Summary [summary] -->
## Summary

Apideck: The Apideck OpenAPI Spec: SDK Optimized

For more information about the API: [Apideck Developer Docs](https://developers.apideck.com)
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [apideck](#apideck)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Pagination](#pagination)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @apideck/unify
```

### PNPM

```bash
pnpm add @apideck/unify
```

### Bun

```bash
bun add @apideck/unify
```

### Yarn

```bash
yarn add @apideck/unify
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
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
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

  for await (const page of result) {
    console.log(page);
  }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Accounting.AgedCreditors](docs/sdks/agedcreditors/README.md)

* [get](docs/sdks/agedcreditors/README.md#get) - Get Aged Creditors

### [Accounting.AgedDebtors](docs/sdks/ageddebtors/README.md)

* [get](docs/sdks/ageddebtors/README.md#get) - Get Aged Debtors

### [Accounting.Attachments](docs/sdks/attachments/README.md)

* [list](docs/sdks/attachments/README.md#list) - List Attachments
* [upload](docs/sdks/attachments/README.md#upload) - Upload attachment
* [get](docs/sdks/attachments/README.md#get) - Get Attachment
* [delete](docs/sdks/attachments/README.md#delete) - Delete Attachment
* [download](docs/sdks/attachments/README.md#download) - Download Attachment

### [Accounting.BalanceSheet](docs/sdks/balancesheet/README.md)

* [get](docs/sdks/balancesheet/README.md#get) - Get BalanceSheet

### [Accounting.BankAccounts](docs/sdks/bankaccounts/README.md)

* [list](docs/sdks/bankaccounts/README.md#list) - List Bank Accounts
* [create](docs/sdks/bankaccounts/README.md#create) - Create Bank Account
* [get](docs/sdks/bankaccounts/README.md#get) - Get Bank Account
* [update](docs/sdks/bankaccounts/README.md#update) - Update Bank Account
* [delete](docs/sdks/bankaccounts/README.md#delete) - Delete Bank Account

### [Accounting.BankFeedAccounts](docs/sdks/bankfeedaccounts/README.md)

* [list](docs/sdks/bankfeedaccounts/README.md#list) - List Bank Feed Accounts
* [create](docs/sdks/bankfeedaccounts/README.md#create) - Create Bank Feed Account
* [get](docs/sdks/bankfeedaccounts/README.md#get) - Get Bank Feed Account
* [update](docs/sdks/bankfeedaccounts/README.md#update) - Update Bank Feed Account
* [delete](docs/sdks/bankfeedaccounts/README.md#delete) - Delete Bank Feed Account

### [Accounting.BankFeedStatements](docs/sdks/bankfeedstatements/README.md)

* [list](docs/sdks/bankfeedstatements/README.md#list) - List Bank Feed Statements
* [create](docs/sdks/bankfeedstatements/README.md#create) - Create Bank Feed Statement
* [get](docs/sdks/bankfeedstatements/README.md#get) - Get Bank Feed Statement
* [update](docs/sdks/bankfeedstatements/README.md#update) - Update Bank Feed Statement
* [delete](docs/sdks/bankfeedstatements/README.md#delete) - Delete Bank Feed Statement

### [Accounting.BillPayments](docs/sdks/billpayments/README.md)

* [list](docs/sdks/billpayments/README.md#list) - List Bill Payments
* [create](docs/sdks/billpayments/README.md#create) - Create Bill Payment
* [get](docs/sdks/billpayments/README.md#get) - Get Bill Payment
* [update](docs/sdks/billpayments/README.md#update) - Update Bill Payment
* [delete](docs/sdks/billpayments/README.md#delete) - Delete Bill Payment

### [Accounting.Bills](docs/sdks/bills/README.md)

* [list](docs/sdks/bills/README.md#list) - List Bills
* [create](docs/sdks/bills/README.md#create) - Create Bill
* [get](docs/sdks/bills/README.md#get) - Get Bill
* [update](docs/sdks/bills/README.md#update) - Update Bill
* [delete](docs/sdks/bills/README.md#delete) - Delete Bill

### [Accounting.Categories](docs/sdks/categories/README.md)

* [list](docs/sdks/categories/README.md#list) - List Categories
* [get](docs/sdks/categories/README.md#get) - Get Category

### [Accounting.CompanyInfo](docs/sdks/companyinfo/README.md)

* [get](docs/sdks/companyinfo/README.md#get) - Get company info

### [Accounting.CreditNotes](docs/sdks/creditnotes/README.md)

* [list](docs/sdks/creditnotes/README.md#list) - List Credit Notes
* [create](docs/sdks/creditnotes/README.md#create) - Create Credit Note
* [get](docs/sdks/creditnotes/README.md#get) - Get Credit Note
* [update](docs/sdks/creditnotes/README.md#update) - Update Credit Note
* [delete](docs/sdks/creditnotes/README.md#delete) - Delete Credit Note

### [Accounting.Customers](docs/sdks/customers/README.md)

* [list](docs/sdks/customers/README.md#list) - List Customers
* [create](docs/sdks/customers/README.md#create) - Create Customer
* [get](docs/sdks/customers/README.md#get) - Get Customer
* [update](docs/sdks/customers/README.md#update) - Update Customer
* [delete](docs/sdks/customers/README.md#delete) - Delete Customer

### [Accounting.Departments](docs/sdks/departments/README.md)

* [list](docs/sdks/departments/README.md#list) - List Departments
* [create](docs/sdks/departments/README.md#create) - Create Department
* [get](docs/sdks/departments/README.md#get) - Get Department
* [update](docs/sdks/departments/README.md#update) - Update Department
* [delete](docs/sdks/departments/README.md#delete) - Delete Department

### [Accounting.Expenses](docs/sdks/expenses/README.md)

* [list](docs/sdks/expenses/README.md#list) - List Expenses
* [create](docs/sdks/expenses/README.md#create) - Create Expense
* [get](docs/sdks/expenses/README.md#get) - Get Expense
* [update](docs/sdks/expenses/README.md#update) - Update Expense
* [delete](docs/sdks/expenses/README.md#delete) - Delete Expense

### [Accounting.InvoiceItems](docs/sdks/invoiceitems/README.md)

* [list](docs/sdks/invoiceitems/README.md#list) - List Invoice Items
* [create](docs/sdks/invoiceitems/README.md#create) - Create Invoice Item
* [get](docs/sdks/invoiceitems/README.md#get) - Get Invoice Item
* [update](docs/sdks/invoiceitems/README.md#update) - Update Invoice Item
* [delete](docs/sdks/invoiceitems/README.md#delete) - Delete Invoice Item

### [Accounting.Invoices](docs/sdks/invoices/README.md)

* [list](docs/sdks/invoices/README.md#list) - List Invoices
* [create](docs/sdks/invoices/README.md#create) - Create Invoice
* [get](docs/sdks/invoices/README.md#get) - Get Invoice
* [update](docs/sdks/invoices/README.md#update) - Update Invoice
* [delete](docs/sdks/invoices/README.md#delete) - Delete Invoice

### [Accounting.JournalEntries](docs/sdks/journalentries/README.md)

* [list](docs/sdks/journalentries/README.md#list) - List Journal Entries
* [create](docs/sdks/journalentries/README.md#create) - Create Journal Entry
* [get](docs/sdks/journalentries/README.md#get) - Get Journal Entry
* [update](docs/sdks/journalentries/README.md#update) - Update Journal Entry
* [delete](docs/sdks/journalentries/README.md#delete) - Delete Journal Entry

### [Accounting.LedgerAccounts](docs/sdks/ledgeraccounts/README.md)

* [list](docs/sdks/ledgeraccounts/README.md#list) - List Ledger Accounts
* [create](docs/sdks/ledgeraccounts/README.md#create) - Create Ledger Account
* [get](docs/sdks/ledgeraccounts/README.md#get) - Get Ledger Account
* [update](docs/sdks/ledgeraccounts/README.md#update) - Update Ledger Account
* [delete](docs/sdks/ledgeraccounts/README.md#delete) - Delete Ledger Account

### [Accounting.Locations](docs/sdks/locations/README.md)

* [list](docs/sdks/locations/README.md#list) - List Locations
* [create](docs/sdks/locations/README.md#create) - Create Location
* [get](docs/sdks/locations/README.md#get) - Get Location
* [update](docs/sdks/locations/README.md#update) - Update Location
* [delete](docs/sdks/locations/README.md#delete) - Delete Location

### [Accounting.Payments](docs/sdks/payments/README.md)

* [list](docs/sdks/payments/README.md#list) - List Payments
* [create](docs/sdks/payments/README.md#create) - Create Payment
* [get](docs/sdks/payments/README.md#get) - Get Payment
* [update](docs/sdks/payments/README.md#update) - Update Payment
* [delete](docs/sdks/payments/README.md#delete) - Delete Payment

### [Accounting.ProfitAndLoss](docs/sdks/profitandloss/README.md)

* [get](docs/sdks/profitandloss/README.md#get) - Get Profit and Loss

### [Accounting.Projects](docs/sdks/projects/README.md)

* [list](docs/sdks/projects/README.md#list) - List projects
* [create](docs/sdks/projects/README.md#create) - Create project
* [get](docs/sdks/projects/README.md#get) - Get project
* [update](docs/sdks/projects/README.md#update) - Update project
* [delete](docs/sdks/projects/README.md#delete) - Delete project

### [Accounting.PurchaseOrders](docs/sdks/purchaseorders/README.md)

* [list](docs/sdks/purchaseorders/README.md#list) - List Purchase Orders
* [create](docs/sdks/purchaseorders/README.md#create) - Create Purchase Order
* [get](docs/sdks/purchaseorders/README.md#get) - Get Purchase Order
* [update](docs/sdks/purchaseorders/README.md#update) - Update Purchase Order
* [delete](docs/sdks/purchaseorders/README.md#delete) - Delete Purchase Order

### [Accounting.Quotes](docs/sdks/quotes/README.md)

* [list](docs/sdks/quotes/README.md#list) - List Quotes
* [create](docs/sdks/quotes/README.md#create) - Create Quote
* [get](docs/sdks/quotes/README.md#get) - Get Quote
* [update](docs/sdks/quotes/README.md#update) - Update Quote
* [delete](docs/sdks/quotes/README.md#delete) - Delete Quote

### [Accounting.Subsidiaries](docs/sdks/subsidiaries/README.md)

* [list](docs/sdks/subsidiaries/README.md#list) - List Subsidiaries
* [create](docs/sdks/subsidiaries/README.md#create) - Create Subsidiary
* [get](docs/sdks/subsidiaries/README.md#get) - Get Subsidiary
* [update](docs/sdks/subsidiaries/README.md#update) - Update Subsidiary
* [delete](docs/sdks/subsidiaries/README.md#delete) - Delete Subsidiary

### [Accounting.Suppliers](docs/sdks/suppliers/README.md)

* [list](docs/sdks/suppliers/README.md#list) - List Suppliers
* [create](docs/sdks/suppliers/README.md#create) - Create Supplier
* [get](docs/sdks/suppliers/README.md#get) - Get Supplier
* [update](docs/sdks/suppliers/README.md#update) - Update Supplier
* [delete](docs/sdks/suppliers/README.md#delete) - Delete Supplier

### [Accounting.TaxRates](docs/sdks/taxrates/README.md)

* [list](docs/sdks/taxrates/README.md#list) - List Tax Rates
* [create](docs/sdks/taxrates/README.md#create) - Create Tax Rate
* [get](docs/sdks/taxrates/README.md#get) - Get Tax Rate
* [update](docs/sdks/taxrates/README.md#update) - Update Tax Rate
* [delete](docs/sdks/taxrates/README.md#delete) - Delete Tax Rate

### [Accounting.TrackingCategories](docs/sdks/trackingcategories/README.md)

* [list](docs/sdks/trackingcategories/README.md#list) - List Tracking Categories
* [create](docs/sdks/trackingcategories/README.md#create) - Create Tracking Category
* [get](docs/sdks/trackingcategories/README.md#get) - Get Tracking Category
* [update](docs/sdks/trackingcategories/README.md#update) - Update Tracking Category
* [delete](docs/sdks/trackingcategories/README.md#delete) - Delete Tracking Category

### [Ats.Applicants](docs/sdks/applicants/README.md)

* [list](docs/sdks/applicants/README.md#list) - List Applicants
* [create](docs/sdks/applicants/README.md#create) - Create Applicant
* [get](docs/sdks/applicants/README.md#get) - Get Applicant
* [update](docs/sdks/applicants/README.md#update) - Update Applicant
* [delete](docs/sdks/applicants/README.md#delete) - Delete Applicant

### [Ats.Applications](docs/sdks/applications/README.md)

* [list](docs/sdks/applications/README.md#list) - List Applications
* [create](docs/sdks/applications/README.md#create) - Create Application
* [get](docs/sdks/applications/README.md#get) - Get Application
* [update](docs/sdks/applications/README.md#update) - Update Application
* [delete](docs/sdks/applications/README.md#delete) - Delete Application

### [Ats.Jobs](docs/sdks/jobs/README.md)

* [list](docs/sdks/jobs/README.md#list) - List Jobs
* [get](docs/sdks/jobs/README.md#get) - Get Job

### [Connector.ApiResourceCoverage](docs/sdks/apiresourcecoverage/README.md)

* [get](docs/sdks/apiresourcecoverage/README.md#get) - Get API Resource Coverage

### [Connector.ApiResources](docs/sdks/apiresources/README.md)

* [get](docs/sdks/apiresources/README.md#get) - Get API Resource

### [Connector.Apis](docs/sdks/apis/README.md)

* [list](docs/sdks/apis/README.md#list) - List APIs
* [get](docs/sdks/apis/README.md#get) - Get API

### [Connector.ConnectorDocs](docs/sdks/connectordocs/README.md)

* [get](docs/sdks/connectordocs/README.md#get) - Get Connector Doc content

### [Connector.ConnectorResources](docs/sdks/connectorresources/README.md)

* [get](docs/sdks/connectorresources/README.md#get) - Get Connector Resource

### [Connector.Connectors](docs/sdks/connectors/README.md)

* [list](docs/sdks/connectors/README.md#list) - List Connectors
* [get](docs/sdks/connectors/README.md#get) - Get Connector

### [Crm.Activities](docs/sdks/activities/README.md)

* [list](docs/sdks/activities/README.md#list) - List activities
* [create](docs/sdks/activities/README.md#create) - Create activity
* [get](docs/sdks/activities/README.md#get) - Get activity
* [update](docs/sdks/activities/README.md#update) - Update activity
* [delete](docs/sdks/activities/README.md#delete) - Delete activity

### [Crm.Companies](docs/sdks/companies/README.md)

* [list](docs/sdks/companies/README.md#list) - List companies
* [create](docs/sdks/companies/README.md#create) - Create company
* [get](docs/sdks/companies/README.md#get) - Get company
* [update](docs/sdks/companies/README.md#update) - Update company
* [delete](docs/sdks/companies/README.md#delete) - Delete company

### [Crm.Contacts](docs/sdks/contacts/README.md)

* [list](docs/sdks/contacts/README.md#list) - List contacts
* [create](docs/sdks/contacts/README.md#create) - Create contact
* [get](docs/sdks/contacts/README.md#get) - Get contact
* [update](docs/sdks/contacts/README.md#update) - Update contact
* [delete](docs/sdks/contacts/README.md#delete) - Delete contact

### [Crm.CustomObjects](docs/sdks/customobjects/README.md)

* [list](docs/sdks/customobjects/README.md#list) - List custom objects
* [create](docs/sdks/customobjects/README.md#create) - Create custom object
* [get](docs/sdks/customobjects/README.md#get) - Get custom object
* [update](docs/sdks/customobjects/README.md#update) - Update custom object
* [delete](docs/sdks/customobjects/README.md#delete) - Delete custom object

### [Crm.CustomObjectSchemas](docs/sdks/customobjectschemas/README.md)

* [list](docs/sdks/customobjectschemas/README.md#list) - List custom object schemas
* [create](docs/sdks/customobjectschemas/README.md#create) - Create custom object schema
* [get](docs/sdks/customobjectschemas/README.md#get) - Get custom object schema
* [update](docs/sdks/customobjectschemas/README.md#update) - Update custom object schema
* [delete](docs/sdks/customobjectschemas/README.md#delete) - Delete custom object schema

### [Crm.Leads](docs/sdks/leads/README.md)

* [list](docs/sdks/leads/README.md#list) - List leads
* [create](docs/sdks/leads/README.md#create) - Create lead
* [get](docs/sdks/leads/README.md#get) - Get lead
* [update](docs/sdks/leads/README.md#update) - Update lead
* [delete](docs/sdks/leads/README.md#delete) - Delete lead

### [Crm.Notes](docs/sdks/notes/README.md)

* [list](docs/sdks/notes/README.md#list) - List notes
* [create](docs/sdks/notes/README.md#create) - Create note
* [get](docs/sdks/notes/README.md#get) - Get note
* [update](docs/sdks/notes/README.md#update) - Update note
* [delete](docs/sdks/notes/README.md#delete) - Delete note

### [Crm.Opportunities](docs/sdks/opportunities/README.md)

* [list](docs/sdks/opportunities/README.md#list) - List opportunities
* [create](docs/sdks/opportunities/README.md#create) - Create opportunity
* [get](docs/sdks/opportunities/README.md#get) - Get opportunity
* [update](docs/sdks/opportunities/README.md#update) - Update opportunity
* [delete](docs/sdks/opportunities/README.md#delete) - Delete opportunity

### [Crm.Pipelines](docs/sdks/pipelines/README.md)

* [list](docs/sdks/pipelines/README.md#list) - List pipelines
* [create](docs/sdks/pipelines/README.md#create) - Create pipeline
* [get](docs/sdks/pipelines/README.md#get) - Get pipeline
* [update](docs/sdks/pipelines/README.md#update) - Update pipeline
* [delete](docs/sdks/pipelines/README.md#delete) - Delete pipeline

### [Crm.Users](docs/sdks/users/README.md)

* [list](docs/sdks/users/README.md#list) - List users
* [create](docs/sdks/users/README.md#create) - Create user
* [get](docs/sdks/users/README.md#get) - Get user
* [update](docs/sdks/users/README.md#update) - Update user
* [delete](docs/sdks/users/README.md#delete) - Delete user

### [Ecommerce.Customers](docs/sdks/apideckcustomers/README.md)

* [list](docs/sdks/apideckcustomers/README.md#list) - List Customers
* [get](docs/sdks/apideckcustomers/README.md#get) - Get Customer

### [Ecommerce.Orders](docs/sdks/orders/README.md)

* [list](docs/sdks/orders/README.md#list) - List Orders
* [get](docs/sdks/orders/README.md#get) - Get Order

### [Ecommerce.Products](docs/sdks/products/README.md)

* [list](docs/sdks/products/README.md#list) - List Products
* [get](docs/sdks/products/README.md#get) - Get Product

### [Ecommerce.Stores](docs/sdks/stores/README.md)

* [get](docs/sdks/stores/README.md#get) - Get Store

### [FileStorage.DriveGroups](docs/sdks/drivegroups/README.md)

* [list](docs/sdks/drivegroups/README.md#list) - List DriveGroups
* [create](docs/sdks/drivegroups/README.md#create) - Create DriveGroup
* [get](docs/sdks/drivegroups/README.md#get) - Get DriveGroup
* [update](docs/sdks/drivegroups/README.md#update) - Update DriveGroup
* [delete](docs/sdks/drivegroups/README.md#delete) - Delete DriveGroup

### [FileStorage.Drives](docs/sdks/drives/README.md)

* [list](docs/sdks/drives/README.md#list) - List Drives
* [create](docs/sdks/drives/README.md#create) - Create Drive
* [get](docs/sdks/drives/README.md#get) - Get Drive
* [update](docs/sdks/drives/README.md#update) - Update Drive
* [delete](docs/sdks/drives/README.md#delete) - Delete Drive

### [FileStorage.Files](docs/sdks/files/README.md)

* [list](docs/sdks/files/README.md#list) - List Files
* [search](docs/sdks/files/README.md#search) - Search Files
* [get](docs/sdks/files/README.md#get) - Get File
* [update](docs/sdks/files/README.md#update) - Rename or move File
* [delete](docs/sdks/files/README.md#delete) - Delete File
* [download](docs/sdks/files/README.md#download) - Download File
* [export](docs/sdks/files/README.md#export) - Export File

### [FileStorage.Folders](docs/sdks/folders/README.md)

* [create](docs/sdks/folders/README.md#create) - Create Folder
* [get](docs/sdks/folders/README.md#get) - Get Folder
* [update](docs/sdks/folders/README.md#update) - Rename or move Folder
* [delete](docs/sdks/folders/README.md#delete) - Delete Folder
* [copy](docs/sdks/folders/README.md#copy) - Copy Folder

### [FileStorage.SharedLinks](docs/sdks/sharedlinks/README.md)

* [list](docs/sdks/sharedlinks/README.md#list) - List Shared Links
* [create](docs/sdks/sharedlinks/README.md#create) - Create Shared Link
* [get](docs/sdks/sharedlinks/README.md#get) - Get Shared Link
* [update](docs/sdks/sharedlinks/README.md#update) - Update Shared Link
* [delete](docs/sdks/sharedlinks/README.md#delete) - Delete Shared Link

### [FileStorage.UploadSessions](docs/sdks/uploadsessions/README.md)

* [create](docs/sdks/uploadsessions/README.md#create) - Start Upload Session
* [get](docs/sdks/uploadsessions/README.md#get) - Get Upload Session
* [upload](docs/sdks/uploadsessions/README.md#upload) - Upload part of File to Upload Session
* [delete](docs/sdks/uploadsessions/README.md#delete) - Abort Upload Session
* [finish](docs/sdks/uploadsessions/README.md#finish) - Finish Upload Session

### [Hris.Companies](docs/sdks/apideckcompanies/README.md)

* [list](docs/sdks/apideckcompanies/README.md#list) - List Companies
* [create](docs/sdks/apideckcompanies/README.md#create) - Create Company
* [get](docs/sdks/apideckcompanies/README.md#get) - Get Company
* [update](docs/sdks/apideckcompanies/README.md#update) - Update Company
* [delete](docs/sdks/apideckcompanies/README.md#delete) - Delete Company

### [Hris.Departments](docs/sdks/apideckdepartments/README.md)

* [list](docs/sdks/apideckdepartments/README.md#list) - List Departments
* [create](docs/sdks/apideckdepartments/README.md#create) - Create Department
* [get](docs/sdks/apideckdepartments/README.md#get) - Get Department
* [update](docs/sdks/apideckdepartments/README.md#update) - Update Department
* [delete](docs/sdks/apideckdepartments/README.md#delete) - Delete Department

### [Hris.EmployeePayrolls](docs/sdks/employeepayrolls/README.md)

* [list](docs/sdks/employeepayrolls/README.md#list) - List Employee Payrolls
* [get](docs/sdks/employeepayrolls/README.md#get) - Get Employee Payroll

### [Hris.Employees](docs/sdks/employees/README.md)

* [list](docs/sdks/employees/README.md#list) - List Employees
* [create](docs/sdks/employees/README.md#create) - Create Employee
* [get](docs/sdks/employees/README.md#get) - Get Employee
* [update](docs/sdks/employees/README.md#update) - Update Employee
* [delete](docs/sdks/employees/README.md#delete) - Delete Employee

### [Hris.EmployeeSchedules](docs/sdks/employeeschedules/README.md)

* [list](docs/sdks/employeeschedules/README.md#list) - List Employee Schedules

### [Hris.Payrolls](docs/sdks/payrolls/README.md)

* [list](docs/sdks/payrolls/README.md#list) - List Payroll
* [get](docs/sdks/payrolls/README.md#get) - Get Payroll

### [Hris.TimeOffRequests](docs/sdks/timeoffrequests/README.md)

* [list](docs/sdks/timeoffrequests/README.md#list) - List Time Off Requests
* [create](docs/sdks/timeoffrequests/README.md#create) - Create Time Off Request
* [get](docs/sdks/timeoffrequests/README.md#get) - Get Time Off Request
* [update](docs/sdks/timeoffrequests/README.md#update) - Update Time Off Request
* [delete](docs/sdks/timeoffrequests/README.md#delete) - Delete Time Off Request

### [IssueTracking.Collections](docs/sdks/collections/README.md)

* [list](docs/sdks/collections/README.md#list) - List Collections
* [get](docs/sdks/collections/README.md#get) - Get Collection

### [IssueTracking.CollectionTags](docs/sdks/collectiontags/README.md)

* [list](docs/sdks/collectiontags/README.md#list) - List Tags

### [IssueTracking.CollectionTicketComments](docs/sdks/collectionticketcomments/README.md)

* [list](docs/sdks/collectionticketcomments/README.md#list) - List Comments
* [create](docs/sdks/collectionticketcomments/README.md#create) - Create Comment
* [get](docs/sdks/collectionticketcomments/README.md#get) - Get Comment
* [update](docs/sdks/collectionticketcomments/README.md#update) - Update Comment
* [delete](docs/sdks/collectionticketcomments/README.md#delete) - Delete Comment

### [IssueTracking.CollectionTickets](docs/sdks/collectiontickets/README.md)

* [list](docs/sdks/collectiontickets/README.md#list) - List Tickets
* [create](docs/sdks/collectiontickets/README.md#create) - Create Ticket
* [get](docs/sdks/collectiontickets/README.md#get) - Get Ticket
* [update](docs/sdks/collectiontickets/README.md#update) - Update Ticket
* [delete](docs/sdks/collectiontickets/README.md#delete) - Delete Ticket

### [IssueTracking.CollectionUsers](docs/sdks/collectionusers/README.md)

* [list](docs/sdks/collectionusers/README.md#list) - List Users
* [get](docs/sdks/collectionusers/README.md#get) - Get user

### [Proxy](docs/sdks/proxy/README.md)

* [get](docs/sdks/proxy/README.md#get) - GET
* [options](docs/sdks/proxy/README.md#options) - OPTIONS
* [post](docs/sdks/proxy/README.md#post) - POST
* [put](docs/sdks/proxy/README.md#put) - PUT
* [patch](docs/sdks/proxy/README.md#patch) - PATCH
* [delete](docs/sdks/proxy/README.md#delete) - DELETE

### [Sms.Messages](docs/sdks/messages/README.md)

* [list](docs/sdks/messages/README.md#list) - List Messages
* [create](docs/sdks/messages/README.md#create) - Create Message
* [get](docs/sdks/messages/README.md#get) - Get Message
* [update](docs/sdks/messages/README.md#update) - Update Message
* [delete](docs/sdks/messages/README.md#delete) - Delete Message

### [Vault.ConnectionConsent](docs/sdks/connectionconsent/README.md)

* [update](docs/sdks/connectionconsent/README.md#update) - Update consent state

### [Vault.ConnectionConsents](docs/sdks/connectionconsents/README.md)

* [list](docs/sdks/connectionconsents/README.md#list) - Get consent records

### [Vault.ConnectionCustomMappings](docs/sdks/connectioncustommappings/README.md)

* [list](docs/sdks/connectioncustommappings/README.md#list) - List connection custom mappings

### [Vault.Connections](docs/sdks/connections/README.md)

* [list](docs/sdks/connections/README.md#list) - Get all connections
* [get](docs/sdks/connections/README.md#get) - Get connection
* [update](docs/sdks/connections/README.md#update) - Update connection
* [delete](docs/sdks/connections/README.md#delete) - Deletes a connection
* [imports](docs/sdks/connections/README.md#imports) - Import connection
* [token](docs/sdks/connections/README.md#token) - Authorize Access Token

### [Vault.ConnectionSettings](docs/sdks/connectionsettings/README.md)

* [list](docs/sdks/connectionsettings/README.md#list) - Get resource settings
* [update](docs/sdks/connectionsettings/README.md#update) - Update settings

### [Vault.ConsumerRequestCounts](docs/sdks/consumerrequestcounts/README.md)

* [list](docs/sdks/consumerrequestcounts/README.md#list) - Consumer request counts

### [Vault.Consumers](docs/sdks/consumers/README.md)

* [create](docs/sdks/consumers/README.md#create) - Create consumer
* [list](docs/sdks/consumers/README.md#list) - Get all consumers
* [get](docs/sdks/consumers/README.md#get) - Get consumer
* [update](docs/sdks/consumers/README.md#update) - Update consumer
* [delete](docs/sdks/consumers/README.md#delete) - Delete consumer

### [Vault.CreateCallback](docs/sdks/createcallback/README.md)

* [state](docs/sdks/createcallback/README.md#state) - Create Callback State

### [Vault.CustomFields](docs/sdks/customfields/README.md)

* [list](docs/sdks/customfields/README.md#list) - Get resource custom fields

### [Vault.CustomMappings](docs/sdks/custommappings/README.md)

* [list](docs/sdks/custommappings/README.md#list) - List custom mappings

### [Vault.Logs](docs/sdks/logs/README.md)

* [list](docs/sdks/logs/README.md#list) - Get all consumer request logs

### [Vault.Sessions](docs/sdks/sessions/README.md)

* [create](docs/sdks/sessions/README.md#create) - Create Session

### [Vault.ValidateConnection](docs/sdks/validateconnection/README.md)

* [state](docs/sdks/validateconnection/README.md#state) - Validate Connection State

### [Webhook.EventLogs](docs/sdks/eventlogs/README.md)

* [list](docs/sdks/eventlogs/README.md#list) - List event logs

### [Webhook.Webhooks](docs/sdks/webhooks/README.md)

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

- [`accountingAgedCreditorsGet`](docs/sdks/agedcreditors/README.md#get) - Get Aged Creditors
- [`accountingAgedDebtorsGet`](docs/sdks/ageddebtors/README.md#get) - Get Aged Debtors
- [`accountingAttachmentsDelete`](docs/sdks/attachments/README.md#delete) - Delete Attachment
- [`accountingAttachmentsDownload`](docs/sdks/attachments/README.md#download) - Download Attachment
- [`accountingAttachmentsGet`](docs/sdks/attachments/README.md#get) - Get Attachment
- [`accountingAttachmentsList`](docs/sdks/attachments/README.md#list) - List Attachments
- [`accountingAttachmentsUpload`](docs/sdks/attachments/README.md#upload) - Upload attachment
- [`accountingBalanceSheetGet`](docs/sdks/balancesheet/README.md#get) - Get BalanceSheet
- [`accountingBankAccountsCreate`](docs/sdks/bankaccounts/README.md#create) - Create Bank Account
- [`accountingBankAccountsDelete`](docs/sdks/bankaccounts/README.md#delete) - Delete Bank Account
- [`accountingBankAccountsGet`](docs/sdks/bankaccounts/README.md#get) - Get Bank Account
- [`accountingBankAccountsList`](docs/sdks/bankaccounts/README.md#list) - List Bank Accounts
- [`accountingBankAccountsUpdate`](docs/sdks/bankaccounts/README.md#update) - Update Bank Account
- [`accountingBankFeedAccountsCreate`](docs/sdks/bankfeedaccounts/README.md#create) - Create Bank Feed Account
- [`accountingBankFeedAccountsDelete`](docs/sdks/bankfeedaccounts/README.md#delete) - Delete Bank Feed Account
- [`accountingBankFeedAccountsGet`](docs/sdks/bankfeedaccounts/README.md#get) - Get Bank Feed Account
- [`accountingBankFeedAccountsList`](docs/sdks/bankfeedaccounts/README.md#list) - List Bank Feed Accounts
- [`accountingBankFeedAccountsUpdate`](docs/sdks/bankfeedaccounts/README.md#update) - Update Bank Feed Account
- [`accountingBankFeedStatementsCreate`](docs/sdks/bankfeedstatements/README.md#create) - Create Bank Feed Statement
- [`accountingBankFeedStatementsDelete`](docs/sdks/bankfeedstatements/README.md#delete) - Delete Bank Feed Statement
- [`accountingBankFeedStatementsGet`](docs/sdks/bankfeedstatements/README.md#get) - Get Bank Feed Statement
- [`accountingBankFeedStatementsList`](docs/sdks/bankfeedstatements/README.md#list) - List Bank Feed Statements
- [`accountingBankFeedStatementsUpdate`](docs/sdks/bankfeedstatements/README.md#update) - Update Bank Feed Statement
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
- [`accountingCategoriesGet`](docs/sdks/categories/README.md#get) - Get Category
- [`accountingCategoriesList`](docs/sdks/categories/README.md#list) - List Categories
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
- [`accountingProjectsCreate`](docs/sdks/projects/README.md#create) - Create project
- [`accountingProjectsDelete`](docs/sdks/projects/README.md#delete) - Delete project
- [`accountingProjectsGet`](docs/sdks/projects/README.md#get) - Get project
- [`accountingProjectsList`](docs/sdks/projects/README.md#list) - List projects
- [`accountingProjectsUpdate`](docs/sdks/projects/README.md#update) - Update project
- [`accountingPurchaseOrdersCreate`](docs/sdks/purchaseorders/README.md#create) - Create Purchase Order
- [`accountingPurchaseOrdersDelete`](docs/sdks/purchaseorders/README.md#delete) - Delete Purchase Order
- [`accountingPurchaseOrdersGet`](docs/sdks/purchaseorders/README.md#get) - Get Purchase Order
- [`accountingPurchaseOrdersList`](docs/sdks/purchaseorders/README.md#list) - List Purchase Orders
- [`accountingPurchaseOrdersUpdate`](docs/sdks/purchaseorders/README.md#update) - Update Purchase Order
- [`accountingQuotesCreate`](docs/sdks/quotes/README.md#create) - Create Quote
- [`accountingQuotesDelete`](docs/sdks/quotes/README.md#delete) - Delete Quote
- [`accountingQuotesGet`](docs/sdks/quotes/README.md#get) - Get Quote
- [`accountingQuotesList`](docs/sdks/quotes/README.md#list) - List Quotes
- [`accountingQuotesUpdate`](docs/sdks/quotes/README.md#update) - Update Quote
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
- [`crmCustomObjectSchemasCreate`](docs/sdks/customobjectschemas/README.md#create) - Create custom object schema
- [`crmCustomObjectSchemasDelete`](docs/sdks/customobjectschemas/README.md#delete) - Delete custom object schema
- [`crmCustomObjectSchemasGet`](docs/sdks/customobjectschemas/README.md#get) - Get custom object schema
- [`crmCustomObjectSchemasList`](docs/sdks/customobjectschemas/README.md#list) - List custom object schemas
- [`crmCustomObjectSchemasUpdate`](docs/sdks/customobjectschemas/README.md#update) - Update custom object schema
- [`crmCustomObjectsCreate`](docs/sdks/customobjects/README.md#create) - Create custom object
- [`crmCustomObjectsDelete`](docs/sdks/customobjects/README.md#delete) - Delete custom object
- [`crmCustomObjectsGet`](docs/sdks/customobjects/README.md#get) - Get custom object
- [`crmCustomObjectsList`](docs/sdks/customobjects/README.md#list) - List custom objects
- [`crmCustomObjectsUpdate`](docs/sdks/customobjects/README.md#update) - Update custom object
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
- [`fileStorageSharedLinksList`](docs/sdks/sharedlinks/README.md#list) - List Shared Links
- [`fileStorageSharedLinksUpdate`](docs/sdks/sharedlinks/README.md#update) - Update Shared Link
- [`fileStorageUploadSessionsCreate`](docs/sdks/uploadsessions/README.md#create) - Start Upload Session
- [`fileStorageUploadSessionsDelete`](docs/sdks/uploadsessions/README.md#delete) - Abort Upload Session
- [`fileStorageUploadSessionsFinish`](docs/sdks/uploadsessions/README.md#finish) - Finish Upload Session
- [`fileStorageUploadSessionsGet`](docs/sdks/uploadsessions/README.md#get) - Get Upload Session
- [`fileStorageUploadSessionsUpload`](docs/sdks/uploadsessions/README.md#upload) - Upload part of File to Upload Session
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
- [`proxyDelete`](docs/sdks/proxy/README.md#delete) - DELETE
- [`proxyGet`](docs/sdks/proxy/README.md#get) - GET
- [`proxyOptions`](docs/sdks/proxy/README.md#options) - OPTIONS
- [`proxyPatch`](docs/sdks/proxy/README.md#patch) - PATCH
- [`proxyPost`](docs/sdks/proxy/README.md#post) - POST
- [`proxyPut`](docs/sdks/proxy/README.md#put) - PUT
- [`smsMessagesCreate`](docs/sdks/messages/README.md#create) - Create Message
- [`smsMessagesDelete`](docs/sdks/messages/README.md#delete) - Delete Message
- [`smsMessagesGet`](docs/sdks/messages/README.md#get) - Get Message
- [`smsMessagesList`](docs/sdks/messages/README.md#list) - List Messages
- [`smsMessagesUpdate`](docs/sdks/messages/README.md#update) - Update Message
- [`vaultConnectionConsentsList`](docs/sdks/connectionconsents/README.md#list) - Get consent records
- [`vaultConnectionConsentUpdate`](docs/sdks/connectionconsent/README.md#update) - Update consent state
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

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
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

  for await (const page of result) {
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Apideck } from "@apideck/unify";
import { openAsBlob } from "node:fs";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.attachments.upload({
    referenceType: "invoice",
    referenceId: "123456",
    xApideckMetadata:
      "{\"name\":\"document.pdf\",\"description\":\"Invoice attachment\"}",
    serviceId: "salesforce",
    requestBody: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
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

  for await (const page of result) {
    console.log(page);
  }
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Apideck } from "@apideck/unify";

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
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
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

  for await (const page of result) {
    console.log(page);
  }
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`ApideckError`](./src/models/errors/apideckerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property                  | Type       | Description                                                                             |
| ------------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`           | `string`   | Error message                                                                           |
| `error.httpMeta.response` | `Response` | HTTP response. Access to headers and more.                                              |
| `error.httpMeta.request`  | `Request`  | HTTP request. Access to headers and more.                                               |
| `error.data$`             |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Apideck } from "@apideck/unify";
import * as errors from "@apideck/unify/models/errors";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  try {
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

    for await (const page of result) {
      console.log(page);
    }
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.ApideckError) {
      console.log(error.message);
      console.log(error.httpMeta.response.status);
      console.log(error.httpMeta.response.headers);
      console.log(error.httpMeta.request);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.BadRequestResponse) {
        console.log(error.data$.statusCode); // number
        console.log(error.data$.error); // string
        console.log(error.data$.typeName); // string
        console.log(error.data$.message); // string
        console.log(error.data$.detail); // errors.Detail
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`ApideckError`](./src/models/errors/apideckerror.ts): The base class for HTTP error responses.
  * [`UnauthorizedResponse`](./src/models/errors/unauthorizedresponse.ts): Unauthorized. Status code `401`. *
  * [`PaymentRequiredResponse`](./src/models/errors/paymentrequiredresponse.ts): Payment Required. Status code `402`. *
  * [`NotFoundResponse`](./src/models/errors/notfoundresponse.ts): The specified resource was not found. Status code `404`. *
  * [`BadRequestResponse`](./src/models/errors/badrequestresponse.ts): Bad Request. Status code `400`. *
  * [`UnprocessableResponse`](./src/models/errors/unprocessableresponse.ts): Unprocessable. Status code `422`. *

<details><summary>Less common errors (7)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`ApideckError`](./src/models/errors/apideckerror.ts)**:
* [`Unauthorized`](./src/models/errors/unauthorized.ts): Unauthorized. Status code `401`. Applicable to 6 of 311 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  serverURL: "https://unify.apideck.com",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
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

  for await (const page of result) {
    console.log(page);
  }
}

run();

```

### Override Server URL Per-Operation

The server URL can also be overridden on a per-operation basis, provided a server list was specified for the operation. For example:
```typescript
import { Apideck } from "@apideck/unify";
import { openAsBlob } from "node:fs";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.attachments.upload({
    referenceType: "invoice",
    referenceId: "123456",
    xApideckMetadata:
      "{\"name\":\"document.pdf\",\"description\":\"Invoice attachment\"}",
    serviceId: "salesforce",
    requestBody: await openAsBlob("example.file"),
  }, {
    serverURL: "https://upload.apideck.com",
  });

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

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { Apideck } from "@apideck/unify";
import { ProxyAgent } from "undici";
import { HTTPClient } from "@apideck/unify/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
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

const sdk = new Apideck({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type | Scheme      | Environment Variable |
| -------- | ---- | ----------- | -------------------- |
| `apiKey` | http | HTTP Bearer | `APIDECK_API_KEY`    |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Apideck } from "@apideck/unify";

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

  for await (const page of result) {
    console.log(page);
  }
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
import { Apideck } from "@apideck/unify";

const sdk = new Apideck({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `APIDECK_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

There may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 
