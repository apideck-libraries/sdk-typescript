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
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/apideck-k2o/apideck). Delete this section before > publishing to a package manager.

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
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

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
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.accounting.accountingTaxRatesAll({
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

* [accountingTaxRatesAll](docs/sdks/accounting/README.md#accountingtaxratesall) - List Tax Rates
* [accountingTaxRatesAdd](docs/sdks/accounting/README.md#accountingtaxratesadd) - Create Tax Rate
* [accountingTaxRatesOne](docs/sdks/accounting/README.md#accountingtaxratesone) - Get Tax Rate
* [accountingTaxRatesUpdate](docs/sdks/accounting/README.md#accountingtaxratesupdate) - Update Tax Rate
* [accountingTaxRatesDelete](docs/sdks/accounting/README.md#accountingtaxratesdelete) - Delete Tax Rate
* [accountingBillsAll](docs/sdks/accounting/README.md#accountingbillsall) - List Bills
* [accountingBillsAdd](docs/sdks/accounting/README.md#accountingbillsadd) - Create Bill
* [accountingBillsOne](docs/sdks/accounting/README.md#accountingbillsone) - Get Bill
* [accountingBillsUpdate](docs/sdks/accounting/README.md#accountingbillsupdate) - Update Bill
* [accountingBillsDelete](docs/sdks/accounting/README.md#accountingbillsdelete) - Delete Bill
* [accountingInvoicesAll](docs/sdks/accounting/README.md#accountinginvoicesall) - List Invoices
* [accountingInvoicesAdd](docs/sdks/accounting/README.md#accountinginvoicesadd) - Create Invoice
* [accountingInvoicesOne](docs/sdks/accounting/README.md#accountinginvoicesone) - Get Invoice
* [accountingInvoicesUpdate](docs/sdks/accounting/README.md#accountinginvoicesupdate) - Update Invoice
* [accountingInvoicesDelete](docs/sdks/accounting/README.md#accountinginvoicesdelete) - Delete Invoice
* [accountingLedgerAccountsAll](docs/sdks/accounting/README.md#accountingledgeraccountsall) - List Ledger Accounts
* [accountingLedgerAccountsAdd](docs/sdks/accounting/README.md#accountingledgeraccountsadd) - Create Ledger Account
* [accountingLedgerAccountsOne](docs/sdks/accounting/README.md#accountingledgeraccountsone) - Get Ledger Account
* [accountingLedgerAccountsUpdate](docs/sdks/accounting/README.md#accountingledgeraccountsupdate) - Update Ledger Account
* [accountingLedgerAccountsDelete](docs/sdks/accounting/README.md#accountingledgeraccountsdelete) - Delete Ledger Account
* [accountingInvoiceItemsAll](docs/sdks/accounting/README.md#accountinginvoiceitemsall) - List Invoice Items
* [accountingInvoiceItemsAdd](docs/sdks/accounting/README.md#accountinginvoiceitemsadd) - Create Invoice Item
* [accountingInvoiceItemsOne](docs/sdks/accounting/README.md#accountinginvoiceitemsone) - Get Invoice Item
* [accountingInvoiceItemsUpdate](docs/sdks/accounting/README.md#accountinginvoiceitemsupdate) - Update Invoice Item
* [accountingInvoiceItemsDelete](docs/sdks/accounting/README.md#accountinginvoiceitemsdelete) - Delete Invoice Item
* [accountingCreditNotesAll](docs/sdks/accounting/README.md#accountingcreditnotesall) - List Credit Notes
* [accountingCreditNotesAdd](docs/sdks/accounting/README.md#accountingcreditnotesadd) - Create Credit Note
* [accountingCreditNotesOne](docs/sdks/accounting/README.md#accountingcreditnotesone) - Get Credit Note
* [accountingCreditNotesUpdate](docs/sdks/accounting/README.md#accountingcreditnotesupdate) - Update Credit Note
* [accountingCreditNotesDelete](docs/sdks/accounting/README.md#accountingcreditnotesdelete) - Delete Credit Note
* [accountingCustomersAll](docs/sdks/accounting/README.md#accountingcustomersall) - List Customers
* [accountingCustomersAdd](docs/sdks/accounting/README.md#accountingcustomersadd) - Create Customer
* [accountingCustomersOne](docs/sdks/accounting/README.md#accountingcustomersone) - Get Customer
* [accountingCustomersUpdate](docs/sdks/accounting/README.md#accountingcustomersupdate) - Update Customer
* [accountingCustomersDelete](docs/sdks/accounting/README.md#accountingcustomersdelete) - Delete Customer
* [accountingSuppliersAll](docs/sdks/accounting/README.md#accountingsuppliersall) - List Suppliers
* [accountingSuppliersAdd](docs/sdks/accounting/README.md#accountingsuppliersadd) - Create Supplier
* [accountingSuppliersOne](docs/sdks/accounting/README.md#accountingsuppliersone) - Get Supplier
* [accountingSuppliersUpdate](docs/sdks/accounting/README.md#accountingsuppliersupdate) - Update Supplier
* [accountingSuppliersDelete](docs/sdks/accounting/README.md#accountingsuppliersdelete) - Delete Supplier
* [accountingPaymentsAll](docs/sdks/accounting/README.md#accountingpaymentsall) - List Payments
* [accountingPaymentsAdd](docs/sdks/accounting/README.md#accountingpaymentsadd) - Create Payment
* [accountingPaymentsOne](docs/sdks/accounting/README.md#accountingpaymentsone) - Get Payment
* [accountingPaymentsUpdate](docs/sdks/accounting/README.md#accountingpaymentsupdate) - Update Payment
* [accountingPaymentsDelete](docs/sdks/accounting/README.md#accountingpaymentsdelete) - Delete Payment
* [accountingCompanyInfoOne](docs/sdks/accounting/README.md#accountingcompanyinfoone) - Get company info
* [accountingBalanceSheetOne](docs/sdks/accounting/README.md#accountingbalancesheetone) - Get BalanceSheet
* [accountingProfitAndLossOne](docs/sdks/accounting/README.md#accountingprofitandlossone) - Get Profit and Loss
* [accountingJournalEntriesAll](docs/sdks/accounting/README.md#accountingjournalentriesall) - List Journal Entries
* [accountingJournalEntriesAdd](docs/sdks/accounting/README.md#accountingjournalentriesadd) - Create Journal Entry
* [accountingJournalEntriesOne](docs/sdks/accounting/README.md#accountingjournalentriesone) - Get Journal Entry
* [accountingJournalEntriesUpdate](docs/sdks/accounting/README.md#accountingjournalentriesupdate) - Update Journal Entry
* [accountingJournalEntriesDelete](docs/sdks/accounting/README.md#accountingjournalentriesdelete) - Delete Journal Entry
* [accountingPurchaseOrdersAll](docs/sdks/accounting/README.md#accountingpurchaseordersall) - List Purchase Orders
* [accountingPurchaseOrdersAdd](docs/sdks/accounting/README.md#accountingpurchaseordersadd) - Create Purchase Order
* [accountingPurchaseOrdersOne](docs/sdks/accounting/README.md#accountingpurchaseordersone) - Get Purchase Order
* [accountingPurchaseOrdersUpdate](docs/sdks/accounting/README.md#accountingpurchaseordersupdate) - Update Purchase Order
* [accountingPurchaseOrdersDelete](docs/sdks/accounting/README.md#accountingpurchaseordersdelete) - Delete Purchase Order
* [accountingSubsidiariesAll](docs/sdks/accounting/README.md#accountingsubsidiariesall) - List Subsidiaries
* [accountingSubsidiariesAdd](docs/sdks/accounting/README.md#accountingsubsidiariesadd) - Create Subsidiary
* [accountingSubsidiariesOne](docs/sdks/accounting/README.md#accountingsubsidiariesone) - Get Subsidiary
* [accountingSubsidiariesUpdate](docs/sdks/accounting/README.md#accountingsubsidiariesupdate) - Update Subsidiary
* [accountingSubsidiariesDelete](docs/sdks/accounting/README.md#accountingsubsidiariesdelete) - Delete Subsidiary
* [accountingLocationsAll](docs/sdks/accounting/README.md#accountinglocationsall) - List Locations
* [accountingLocationsAdd](docs/sdks/accounting/README.md#accountinglocationsadd) - Create Location
* [accountingLocationsOne](docs/sdks/accounting/README.md#accountinglocationsone) - Get Location
* [accountingLocationsUpdate](docs/sdks/accounting/README.md#accountinglocationsupdate) - Update Location
* [accountingLocationsDelete](docs/sdks/accounting/README.md#accountinglocationsdelete) - Delete Location
* [accountingDepartmentsAll](docs/sdks/accounting/README.md#accountingdepartmentsall) - List Departments
* [accountingDepartmentsAdd](docs/sdks/accounting/README.md#accountingdepartmentsadd) - Create Department
* [accountingDepartmentsOne](docs/sdks/accounting/README.md#accountingdepartmentsone) - Get Department
* [accountingDepartmentsUpdate](docs/sdks/accounting/README.md#accountingdepartmentsupdate) - Update Department
* [accountingDepartmentsDelete](docs/sdks/accounting/README.md#accountingdepartmentsdelete) - Delete Department
* [accountingAttachmentsAll](docs/sdks/accounting/README.md#accountingattachmentsall) - List Attachments
* [accountingAttachmentsOne](docs/sdks/accounting/README.md#accountingattachmentsone) - Get Attachment
* [accountingAttachmentsDelete](docs/sdks/accounting/README.md#accountingattachmentsdelete) - Delete Attachment
* [accountingAttachmentsDownload](docs/sdks/accounting/README.md#accountingattachmentsdownload) - Download Attachment
* [accountingTrackingCategoriesAll](docs/sdks/accounting/README.md#accountingtrackingcategoriesall) - List Tracking Categories
* [accountingTrackingCategoriesAdd](docs/sdks/accounting/README.md#accountingtrackingcategoriesadd) - Create Tracking Category
* [accountingTrackingCategoriesOne](docs/sdks/accounting/README.md#accountingtrackingcategoriesone) - Get Tracking Category
* [accountingTrackingCategoriesUpdate](docs/sdks/accounting/README.md#accountingtrackingcategoriesupdate) - Update Tracking Category
* [accountingTrackingCategoriesDelete](docs/sdks/accounting/README.md#accountingtrackingcategoriesdelete) - Delete Tracking Category
* [accountingBillPaymentsAll](docs/sdks/accounting/README.md#accountingbillpaymentsall) - List Bill Payments
* [accountingBillPaymentsAdd](docs/sdks/accounting/README.md#accountingbillpaymentsadd) - Create Bill Payment
* [accountingBillPaymentsOne](docs/sdks/accounting/README.md#accountingbillpaymentsone) - Get Bill Payment
* [accountingBillPaymentsUpdate](docs/sdks/accounting/README.md#accountingbillpaymentsupdate) - Update Bill Payment
* [accountingBillPaymentsDelete](docs/sdks/accounting/README.md#accountingbillpaymentsdelete) - Delete Bill Payment
* [accountingExpensesAll](docs/sdks/accounting/README.md#accountingexpensesall) - List Expenses
* [accountingExpensesAdd](docs/sdks/accounting/README.md#accountingexpensesadd) - Create Expense
* [accountingExpensesOne](docs/sdks/accounting/README.md#accountingexpensesone) - Get Expense
* [accountingExpensesUpdate](docs/sdks/accounting/README.md#accountingexpensesupdate) - Update Expense
* [accountingExpensesDelete](docs/sdks/accounting/README.md#accountingexpensesdelete) - Delete Expense


### [ats](docs/sdks/ats/README.md)

* [atsJobsAll](docs/sdks/ats/README.md#atsjobsall) - List Jobs
* [atsJobsOne](docs/sdks/ats/README.md#atsjobsone) - Get Job
* [atsApplicantsAll](docs/sdks/ats/README.md#atsapplicantsall) - List Applicants
* [atsApplicantsAdd](docs/sdks/ats/README.md#atsapplicantsadd) - Create Applicant
* [atsApplicantsOne](docs/sdks/ats/README.md#atsapplicantsone) - Get Applicant
* [atsApplicantsUpdate](docs/sdks/ats/README.md#atsapplicantsupdate) - Update Applicant
* [atsApplicantsDelete](docs/sdks/ats/README.md#atsapplicantsdelete) - Delete Applicant
* [atsApplicationsAll](docs/sdks/ats/README.md#atsapplicationsall) - List Applications
* [atsApplicationsAdd](docs/sdks/ats/README.md#atsapplicationsadd) - Create Application
* [atsApplicationsOne](docs/sdks/ats/README.md#atsapplicationsone) - Get Application
* [atsApplicationsUpdate](docs/sdks/ats/README.md#atsapplicationsupdate) - Update Application
* [atsApplicationsDelete](docs/sdks/ats/README.md#atsapplicationsdelete) - Delete Application

### [connector](docs/sdks/connector/README.md)

* [connectorConnectorsAll](docs/sdks/connector/README.md#connectorconnectorsall) - List Connectors
* [connectorConnectorsOne](docs/sdks/connector/README.md#connectorconnectorsone) - Get Connector
* [connectorConnectorDocsOne](docs/sdks/connector/README.md#connectorconnectordocsone) - Get Connector Doc content
* [connectorConnectorResourcesOne](docs/sdks/connector/README.md#connectorconnectorresourcesone) - Get Connector Resource
* [connectorApisAll](docs/sdks/connector/README.md#connectorapisall) - List APIs
* [connectorApisOne](docs/sdks/connector/README.md#connectorapisone) - Get API
* [connectorApiResourcesOne](docs/sdks/connector/README.md#connectorapiresourcesone) - Get API Resource
* [connectorApiResourceCoverageOne](docs/sdks/connector/README.md#connectorapiresourcecoverageone) - Get API Resource Coverage

### [crm](docs/sdks/crm/README.md)

* [crmCompaniesAll](docs/sdks/crm/README.md#crmcompaniesall) - List companies
* [crmCompaniesAdd](docs/sdks/crm/README.md#crmcompaniesadd) - Create company
* [crmCompaniesOne](docs/sdks/crm/README.md#crmcompaniesone) - Get company
* [crmCompaniesUpdate](docs/sdks/crm/README.md#crmcompaniesupdate) - Update company
* [crmCompaniesDelete](docs/sdks/crm/README.md#crmcompaniesdelete) - Delete company
* [crmContactsAll](docs/sdks/crm/README.md#crmcontactsall) - List contacts
* [crmContactsAdd](docs/sdks/crm/README.md#crmcontactsadd) - Create contact
* [crmContactsOne](docs/sdks/crm/README.md#crmcontactsone) - Get contact
* [crmContactsUpdate](docs/sdks/crm/README.md#crmcontactsupdate) - Update contact
* [crmContactsDelete](docs/sdks/crm/README.md#crmcontactsdelete) - Delete contact
* [crmOpportunitiesAll](docs/sdks/crm/README.md#crmopportunitiesall) - List opportunities
* [crmOpportunitiesAdd](docs/sdks/crm/README.md#crmopportunitiesadd) - Create opportunity
* [crmOpportunitiesOne](docs/sdks/crm/README.md#crmopportunitiesone) - Get opportunity
* [crmOpportunitiesUpdate](docs/sdks/crm/README.md#crmopportunitiesupdate) - Update opportunity
* [crmOpportunitiesDelete](docs/sdks/crm/README.md#crmopportunitiesdelete) - Delete opportunity
* [crmLeadsAll](docs/sdks/crm/README.md#crmleadsall) - List leads
* [crmLeadsAdd](docs/sdks/crm/README.md#crmleadsadd) - Create lead
* [crmLeadsOne](docs/sdks/crm/README.md#crmleadsone) - Get lead
* [crmLeadsUpdate](docs/sdks/crm/README.md#crmleadsupdate) - Update lead
* [crmLeadsDelete](docs/sdks/crm/README.md#crmleadsdelete) - Delete lead
* [crmPipelinesAll](docs/sdks/crm/README.md#crmpipelinesall) - List pipelines
* [crmPipelinesAdd](docs/sdks/crm/README.md#crmpipelinesadd) - Create pipeline
* [crmPipelinesOne](docs/sdks/crm/README.md#crmpipelinesone) - Get pipeline
* [crmPipelinesUpdate](docs/sdks/crm/README.md#crmpipelinesupdate) - Update pipeline
* [crmPipelinesDelete](docs/sdks/crm/README.md#crmpipelinesdelete) - Delete pipeline
* [crmNotesAll](docs/sdks/crm/README.md#crmnotesall) - List notes
* [crmNotesAdd](docs/sdks/crm/README.md#crmnotesadd) - Create note
* [crmNotesOne](docs/sdks/crm/README.md#crmnotesone) - Get note
* [crmNotesUpdate](docs/sdks/crm/README.md#crmnotesupdate) - Update note
* [crmNotesDelete](docs/sdks/crm/README.md#crmnotesdelete) - Delete note
* [crmUsersAll](docs/sdks/crm/README.md#crmusersall) - List users
* [crmUsersAdd](docs/sdks/crm/README.md#crmusersadd) - Create user
* [crmUsersOne](docs/sdks/crm/README.md#crmusersone) - Get user
* [crmUsersUpdate](docs/sdks/crm/README.md#crmusersupdate) - Update user
* [crmUsersDelete](docs/sdks/crm/README.md#crmusersdelete) - Delete user
* [crmActivitiesAll](docs/sdks/crm/README.md#crmactivitiesall) - List activities
* [crmActivitiesAdd](docs/sdks/crm/README.md#crmactivitiesadd) - Create activity
* [crmActivitiesOne](docs/sdks/crm/README.md#crmactivitiesone) - Get activity
* [crmActivitiesUpdate](docs/sdks/crm/README.md#crmactivitiesupdate) - Update activity
* [crmActivitiesDelete](docs/sdks/crm/README.md#crmactivitiesdelete) - Delete activity

### [ecommerce](docs/sdks/ecommerce/README.md)

* [ecommerceOrdersAll](docs/sdks/ecommerce/README.md#ecommerceordersall) - List Orders
* [ecommerceOrdersOne](docs/sdks/ecommerce/README.md#ecommerceordersone) - Get Order
* [ecommerceProductsAll](docs/sdks/ecommerce/README.md#ecommerceproductsall) - List Products
* [ecommerceProductsOne](docs/sdks/ecommerce/README.md#ecommerceproductsone) - Get Product
* [ecommerceCustomersAll](docs/sdks/ecommerce/README.md#ecommercecustomersall) - List Customers
* [ecommerceCustomersOne](docs/sdks/ecommerce/README.md#ecommercecustomersone) - Get Customer
* [ecommerceStoresOne](docs/sdks/ecommerce/README.md#ecommercestoresone) - Get Store

### [fileStorage](docs/sdks/filestorage/README.md)

* [fileStorageFilesAll](docs/sdks/filestorage/README.md#filestoragefilesall) - List Files
* [fileStorageFilesSearch](docs/sdks/filestorage/README.md#filestoragefilessearch) - Search Files
* [fileStorageFilesOne](docs/sdks/filestorage/README.md#filestoragefilesone) - Get File
* [fileStorageFilesUpdate](docs/sdks/filestorage/README.md#filestoragefilesupdate) - Rename or move File
* [fileStorageFilesDelete](docs/sdks/filestorage/README.md#filestoragefilesdelete) - Delete File
* [fileStorageFilesDownload](docs/sdks/filestorage/README.md#filestoragefilesdownload) - Download File
* [fileStorageFilesExport](docs/sdks/filestorage/README.md#filestoragefilesexport) - Export File
* [fileStorageFoldersAdd](docs/sdks/filestorage/README.md#filestoragefoldersadd) - Create Folder
* [fileStorageFoldersOne](docs/sdks/filestorage/README.md#filestoragefoldersone) - Get Folder
* [fileStorageFoldersUpdate](docs/sdks/filestorage/README.md#filestoragefoldersupdate) - Rename or move Folder
* [fileStorageFoldersDelete](docs/sdks/filestorage/README.md#filestoragefoldersdelete) - Delete Folder
* [fileStorageFoldersCopy](docs/sdks/filestorage/README.md#filestoragefolderscopy) - Copy Folder
* [fileStorageSharedLinksAll](docs/sdks/filestorage/README.md#filestoragesharedlinksall) - List SharedLinks
* [fileStorageSharedLinksAdd](docs/sdks/filestorage/README.md#filestoragesharedlinksadd) - Create Shared Link
* [fileStorageSharedLinksOne](docs/sdks/filestorage/README.md#filestoragesharedlinksone) - Get Shared Link
* [fileStorageSharedLinksUpdate](docs/sdks/filestorage/README.md#filestoragesharedlinksupdate) - Update Shared Link
* [fileStorageSharedLinksDelete](docs/sdks/filestorage/README.md#filestoragesharedlinksdelete) - Delete Shared Link
* [fileStorageUploadSessionsAdd](docs/sdks/filestorage/README.md#filestorageuploadsessionsadd) - Start Upload Session
* [fileStorageUploadSessionsOne](docs/sdks/filestorage/README.md#filestorageuploadsessionsone) - Get Upload Session
* [fileStorageUploadSessionsDelete](docs/sdks/filestorage/README.md#filestorageuploadsessionsdelete) - Abort Upload Session
* [fileStorageUploadSessionsFinish](docs/sdks/filestorage/README.md#filestorageuploadsessionsfinish) - Finish Upload Session
* [fileStorageDrivesAll](docs/sdks/filestorage/README.md#filestoragedrivesall) - List Drives
* [fileStorageDrivesAdd](docs/sdks/filestorage/README.md#filestoragedrivesadd) - Create Drive
* [fileStorageDrivesOne](docs/sdks/filestorage/README.md#filestoragedrivesone) - Get Drive
* [fileStorageDrivesUpdate](docs/sdks/filestorage/README.md#filestoragedrivesupdate) - Update Drive
* [fileStorageDrivesDelete](docs/sdks/filestorage/README.md#filestoragedrivesdelete) - Delete Drive
* [fileStorageDriveGroupsAll](docs/sdks/filestorage/README.md#filestoragedrivegroupsall) - List DriveGroups
* [fileStorageDriveGroupsAdd](docs/sdks/filestorage/README.md#filestoragedrivegroupsadd) - Create DriveGroup
* [fileStorageDriveGroupsOne](docs/sdks/filestorage/README.md#filestoragedrivegroupsone) - Get DriveGroup
* [fileStorageDriveGroupsUpdate](docs/sdks/filestorage/README.md#filestoragedrivegroupsupdate) - Update DriveGroup
* [fileStorageDriveGroupsDelete](docs/sdks/filestorage/README.md#filestoragedrivegroupsdelete) - Delete DriveGroup

### [hris](docs/sdks/hris/README.md)

* [hrisEmployeesAll](docs/sdks/hris/README.md#hrisemployeesall) - List Employees
* [hrisEmployeesAdd](docs/sdks/hris/README.md#hrisemployeesadd) - Create Employee
* [hrisEmployeesOne](docs/sdks/hris/README.md#hrisemployeesone) - Get Employee
* [hrisEmployeesUpdate](docs/sdks/hris/README.md#hrisemployeesupdate) - Update Employee
* [hrisEmployeesDelete](docs/sdks/hris/README.md#hrisemployeesdelete) - Delete Employee
* [hrisCompaniesAll](docs/sdks/hris/README.md#hriscompaniesall) - List Companies
* [hrisCompaniesAdd](docs/sdks/hris/README.md#hriscompaniesadd) - Create Company
* [hrisCompaniesOne](docs/sdks/hris/README.md#hriscompaniesone) - Get Company
* [hrisCompaniesUpdate](docs/sdks/hris/README.md#hriscompaniesupdate) - Update Company
* [hrisCompaniesDelete](docs/sdks/hris/README.md#hriscompaniesdelete) - Delete Company
* [hrisDepartmentsAll](docs/sdks/hris/README.md#hrisdepartmentsall) - List Departments
* [hrisDepartmentsAdd](docs/sdks/hris/README.md#hrisdepartmentsadd) - Create Department
* [hrisDepartmentsOne](docs/sdks/hris/README.md#hrisdepartmentsone) - Get Department
* [hrisDepartmentsUpdate](docs/sdks/hris/README.md#hrisdepartmentsupdate) - Update Department
* [hrisDepartmentsDelete](docs/sdks/hris/README.md#hrisdepartmentsdelete) - Delete Department
* [hrisPayrollsAll](docs/sdks/hris/README.md#hrispayrollsall) - List Payroll
* [hrisPayrollsOne](docs/sdks/hris/README.md#hrispayrollsone) - Get Payroll
* [hrisEmployeePayrollsAll](docs/sdks/hris/README.md#hrisemployeepayrollsall) - List Employee Payrolls
* [hrisEmployeePayrollsOne](docs/sdks/hris/README.md#hrisemployeepayrollsone) - Get Employee Payroll
* [hrisEmployeeSchedulesAll](docs/sdks/hris/README.md#hrisemployeeschedulesall) - List Employee Schedules
* [hrisTimeOffRequestsAll](docs/sdks/hris/README.md#hristimeoffrequestsall) - List Time Off Requests
* [hrisTimeOffRequestsAdd](docs/sdks/hris/README.md#hristimeoffrequestsadd) - Create Time Off Request
* [hrisTimeOffRequestsOne](docs/sdks/hris/README.md#hristimeoffrequestsone) - Get Time Off Request
* [hrisTimeOffRequestsUpdate](docs/sdks/hris/README.md#hristimeoffrequestsupdate) - Update Time Off Request
* [hrisTimeOffRequestsDelete](docs/sdks/hris/README.md#hristimeoffrequestsdelete) - Delete Time Off Request

### [issueTracking](docs/sdks/issuetracking/README.md)

* [issueTrackingCollectionsAll](docs/sdks/issuetracking/README.md#issuetrackingcollectionsall) - List Collections
* [issueTrackingCollectionsOne](docs/sdks/issuetracking/README.md#issuetrackingcollectionsone) - Get Collection
* [issueTrackingCollectionTicketsAll](docs/sdks/issuetracking/README.md#issuetrackingcollectionticketsall) - List Tickets
* [issueTrackingCollectionTicketsAdd](docs/sdks/issuetracking/README.md#issuetrackingcollectionticketsadd) - Create Ticket
* [issueTrackingCollectionTicketsOne](docs/sdks/issuetracking/README.md#issuetrackingcollectionticketsone) - Get Ticket
* [issueTrackingCollectionTicketsUpdate](docs/sdks/issuetracking/README.md#issuetrackingcollectionticketsupdate) - Update Ticket
* [issueTrackingCollectionTicketsDelete](docs/sdks/issuetracking/README.md#issuetrackingcollectionticketsdelete) - Delete Ticket
* [issueTrackingCollectionTicketCommentsAll](docs/sdks/issuetracking/README.md#issuetrackingcollectionticketcommentsall) - List Comments
* [issueTrackingCollectionTicketCommentsAdd](docs/sdks/issuetracking/README.md#issuetrackingcollectionticketcommentsadd) - Create Comment
* [issueTrackingCollectionTicketCommentsOne](docs/sdks/issuetracking/README.md#issuetrackingcollectionticketcommentsone) - Get Comment
* [issueTrackingCollectionTicketCommentsUpdate](docs/sdks/issuetracking/README.md#issuetrackingcollectionticketcommentsupdate) - Update Comment
* [issueTrackingCollectionTicketCommentsDelete](docs/sdks/issuetracking/README.md#issuetrackingcollectionticketcommentsdelete) - Delete Comment
* [issueTrackingCollectionUsersAll](docs/sdks/issuetracking/README.md#issuetrackingcollectionusersall) - List Users
* [issueTrackingCollectionUsersOne](docs/sdks/issuetracking/README.md#issuetrackingcollectionusersone) - Get user
* [issueTrackingCollectionTagsAll](docs/sdks/issuetracking/README.md#issuetrackingcollectiontagsall) - List Tags

### [lead](docs/sdks/lead/README.md)

* [leadLeadsAll](docs/sdks/lead/README.md#leadleadsall) - List leads
* [leadLeadsAdd](docs/sdks/lead/README.md#leadleadsadd) - Create lead
* [leadLeadsOne](docs/sdks/lead/README.md#leadleadsone) - Get lead
* [leadLeadsUpdate](docs/sdks/lead/README.md#leadleadsupdate) - Update lead
* [leadLeadsDelete](docs/sdks/lead/README.md#leadleadsdelete) - Delete lead

### [pos](docs/sdks/pos/README.md)

* [posOrdersAll](docs/sdks/pos/README.md#posordersall) - List Orders
* [posOrdersAdd](docs/sdks/pos/README.md#posordersadd) - Create Order
* [posOrdersOne](docs/sdks/pos/README.md#posordersone) - Get Order
* [posOrdersUpdate](docs/sdks/pos/README.md#posordersupdate) - Update Order
* [posOrdersDelete](docs/sdks/pos/README.md#posordersdelete) - Delete Order
* [posOrdersPay](docs/sdks/pos/README.md#posorderspay) - Pay Order
* [posPaymentsAll](docs/sdks/pos/README.md#pospaymentsall) - List Payments
* [posPaymentsAdd](docs/sdks/pos/README.md#pospaymentsadd) - Create Payment
* [posPaymentsOne](docs/sdks/pos/README.md#pospaymentsone) - Get Payment
* [posPaymentsUpdate](docs/sdks/pos/README.md#pospaymentsupdate) - Update Payment
* [posPaymentsDelete](docs/sdks/pos/README.md#pospaymentsdelete) - Delete Payment
* [posMerchantsAll](docs/sdks/pos/README.md#posmerchantsall) - List Merchants
* [posMerchantsAdd](docs/sdks/pos/README.md#posmerchantsadd) - Create Merchant
* [posMerchantsOne](docs/sdks/pos/README.md#posmerchantsone) - Get Merchant
* [posMerchantsUpdate](docs/sdks/pos/README.md#posmerchantsupdate) - Update Merchant
* [posMerchantsDelete](docs/sdks/pos/README.md#posmerchantsdelete) - Delete Merchant
* [posLocationsAll](docs/sdks/pos/README.md#poslocationsall) - List Locations
* [posLocationsAdd](docs/sdks/pos/README.md#poslocationsadd) - Create Location
* [posLocationsOne](docs/sdks/pos/README.md#poslocationsone) - Get Location
* [posLocationsUpdate](docs/sdks/pos/README.md#poslocationsupdate) - Update Location
* [posLocationsDelete](docs/sdks/pos/README.md#poslocationsdelete) - Delete Location
* [posItemsAll](docs/sdks/pos/README.md#positemsall) - List Items
* [posItemsAdd](docs/sdks/pos/README.md#positemsadd) - Create Item
* [posItemsOne](docs/sdks/pos/README.md#positemsone) - Get Item
* [posItemsUpdate](docs/sdks/pos/README.md#positemsupdate) - Update Item
* [posItemsDelete](docs/sdks/pos/README.md#positemsdelete) - Delete Item
* [posModifiersAll](docs/sdks/pos/README.md#posmodifiersall) - List Modifiers
* [posModifiersAdd](docs/sdks/pos/README.md#posmodifiersadd) - Create Modifier
* [posModifiersOne](docs/sdks/pos/README.md#posmodifiersone) - Get Modifier
* [posModifiersUpdate](docs/sdks/pos/README.md#posmodifiersupdate) - Update Modifier
* [posModifiersDelete](docs/sdks/pos/README.md#posmodifiersdelete) - Delete Modifier
* [posModifierGroupsAll](docs/sdks/pos/README.md#posmodifiergroupsall) - List Modifier Groups
* [posModifierGroupsAdd](docs/sdks/pos/README.md#posmodifiergroupsadd) - Create Modifier Group
* [posModifierGroupsOne](docs/sdks/pos/README.md#posmodifiergroupsone) - Get Modifier Group
* [posModifierGroupsUpdate](docs/sdks/pos/README.md#posmodifiergroupsupdate) - Update Modifier Group
* [posModifierGroupsDelete](docs/sdks/pos/README.md#posmodifiergroupsdelete) - Delete Modifier Group
* [posOrderTypesAll](docs/sdks/pos/README.md#posordertypesall) - List Order Types
* [posOrderTypesAdd](docs/sdks/pos/README.md#posordertypesadd) - Create Order Type
* [posOrderTypesOne](docs/sdks/pos/README.md#posordertypesone) - Get Order Type
* [posOrderTypesUpdate](docs/sdks/pos/README.md#posordertypesupdate) - Update Order Type
* [posOrderTypesDelete](docs/sdks/pos/README.md#posordertypesdelete) - Delete Order Type
* [posTendersAll](docs/sdks/pos/README.md#postendersall) - List Tenders
* [posTendersAdd](docs/sdks/pos/README.md#postendersadd) - Create Tender
* [posTendersOne](docs/sdks/pos/README.md#postendersone) - Get Tender
* [posTendersUpdate](docs/sdks/pos/README.md#postendersupdate) - Update Tender
* [posTendersDelete](docs/sdks/pos/README.md#postendersdelete) - Delete Tender

### [sms](docs/sdks/sms/README.md)

* [smsMessagesAll](docs/sdks/sms/README.md#smsmessagesall) - List Messages
* [smsMessagesAdd](docs/sdks/sms/README.md#smsmessagesadd) - Create Message
* [smsMessagesOne](docs/sdks/sms/README.md#smsmessagesone) - Get Message
* [smsMessagesUpdate](docs/sdks/sms/README.md#smsmessagesupdate) - Update Message
* [smsMessagesDelete](docs/sdks/sms/README.md#smsmessagesdelete) - Delete Message

### [vault](docs/sdks/vault/README.md)

* [vaultConsumersAdd](docs/sdks/vault/README.md#vaultconsumersadd) - Create consumer
* [vaultConsumersAll](docs/sdks/vault/README.md#vaultconsumersall) - Get all consumers
* [vaultConsumersOne](docs/sdks/vault/README.md#vaultconsumersone) - Get consumer
* [vaultConsumersUpdate](docs/sdks/vault/README.md#vaultconsumersupdate) - Update consumer
* [vaultConsumersDelete](docs/sdks/vault/README.md#vaultconsumersdelete) - Delete consumer
* [vaultConsumerRequestCountsAll](docs/sdks/vault/README.md#vaultconsumerrequestcountsall) - Consumer request counts
* [vaultConnectionsAll](docs/sdks/vault/README.md#vaultconnectionsall) - Get all connections
* [vaultConnectionsOne](docs/sdks/vault/README.md#vaultconnectionsone) - Get connection
* [vaultConnectionsUpdate](docs/sdks/vault/README.md#vaultconnectionsupdate) - Update connection
* [vaultConnectionsDelete](docs/sdks/vault/README.md#vaultconnectionsdelete) - Deletes a connection
* [vaultConnectionsImport](docs/sdks/vault/README.md#vaultconnectionsimport) - Import connection
* [vaultConnectionsToken](docs/sdks/vault/README.md#vaultconnectionstoken) - Authorize Access Token
* [vaultValidateConnectionState](docs/sdks/vault/README.md#vaultvalidateconnectionstate) - Validate Connection State
* [vaultCreateCallbackState](docs/sdks/vault/README.md#vaultcreatecallbackstate) - Create Callback State
* [vaultConnectionSettingsAll](docs/sdks/vault/README.md#vaultconnectionsettingsall) - Get resource settings
* [vaultConnectionSettingsUpdate](docs/sdks/vault/README.md#vaultconnectionsettingsupdate) - Update settings
* [vaultCustomFieldsAll](docs/sdks/vault/README.md#vaultcustomfieldsall) - Get resource custom fields
* [vaultConnectionCustomMappingsAll](docs/sdks/vault/README.md#vaultconnectioncustommappingsall) - List connection custom mappings
* [vaultCustomMappingsAll](docs/sdks/vault/README.md#vaultcustommappingsall) - List custom mappings
* [vaultSessionsCreate](docs/sdks/vault/README.md#vaultsessionscreate) - Create Session
* [vaultLogsAll](docs/sdks/vault/README.md#vaultlogsall) - Get all consumer request logs

### [webhook](docs/sdks/webhook/README.md)

* [webhookWebhooksAll](docs/sdks/webhook/README.md#webhookwebhooksall) - List webhook subscriptions
* [webhookWebhooksAdd](docs/sdks/webhook/README.md#webhookwebhooksadd) - Create webhook subscription
* [webhookWebhooksOne](docs/sdks/webhook/README.md#webhookwebhooksone) - Get webhook subscription
* [webhookWebhooksUpdate](docs/sdks/webhook/README.md#webhookwebhooksupdate) - Update webhook subscription
* [webhookWebhooksDelete](docs/sdks/webhook/README.md#webhookwebhooksdelete) - Delete webhook subscription
* [webhookEventLogsAll](docs/sdks/webhook/README.md#webhookeventlogsall) - List event logs

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

- [`accountingAccountingAttachmentsAll`](docs/sdks/accounting/README.md#accountingattachmentsall) - List Attachments
- [`accountingAccountingAttachmentsDelete`](docs/sdks/accounting/README.md#accountingattachmentsdelete) - Delete Attachment
- [`accountingAccountingAttachmentsDownload`](docs/sdks/accounting/README.md#accountingattachmentsdownload) - Download Attachment
- [`accountingAccountingAttachmentsOne`](docs/sdks/accounting/README.md#accountingattachmentsone) - Get Attachment
- [`accountingAccountingBalanceSheetOne`](docs/sdks/accounting/README.md#accountingbalancesheetone) - Get BalanceSheet
- [`accountingAccountingBillPaymentsAdd`](docs/sdks/accounting/README.md#accountingbillpaymentsadd) - Create Bill Payment
- [`accountingAccountingBillPaymentsAll`](docs/sdks/accounting/README.md#accountingbillpaymentsall) - List Bill Payments
- [`accountingAccountingBillPaymentsDelete`](docs/sdks/accounting/README.md#accountingbillpaymentsdelete) - Delete Bill Payment
- [`accountingAccountingBillPaymentsOne`](docs/sdks/accounting/README.md#accountingbillpaymentsone) - Get Bill Payment
- [`accountingAccountingBillPaymentsUpdate`](docs/sdks/accounting/README.md#accountingbillpaymentsupdate) - Update Bill Payment
- [`accountingAccountingBillsAdd`](docs/sdks/accounting/README.md#accountingbillsadd) - Create Bill
- [`accountingAccountingBillsAll`](docs/sdks/accounting/README.md#accountingbillsall) - List Bills
- [`accountingAccountingBillsDelete`](docs/sdks/accounting/README.md#accountingbillsdelete) - Delete Bill
- [`accountingAccountingBillsOne`](docs/sdks/accounting/README.md#accountingbillsone) - Get Bill
- [`accountingAccountingBillsUpdate`](docs/sdks/accounting/README.md#accountingbillsupdate) - Update Bill
- [`accountingAccountingCompanyInfoOne`](docs/sdks/accounting/README.md#accountingcompanyinfoone) - Get company info
- [`accountingAccountingCreditNotesAdd`](docs/sdks/accounting/README.md#accountingcreditnotesadd) - Create Credit Note
- [`accountingAccountingCreditNotesAll`](docs/sdks/accounting/README.md#accountingcreditnotesall) - List Credit Notes
- [`accountingAccountingCreditNotesDelete`](docs/sdks/accounting/README.md#accountingcreditnotesdelete) - Delete Credit Note
- [`accountingAccountingCreditNotesOne`](docs/sdks/accounting/README.md#accountingcreditnotesone) - Get Credit Note
- [`accountingAccountingCreditNotesUpdate`](docs/sdks/accounting/README.md#accountingcreditnotesupdate) - Update Credit Note
- [`accountingAccountingCustomersAdd`](docs/sdks/accounting/README.md#accountingcustomersadd) - Create Customer
- [`accountingAccountingCustomersAll`](docs/sdks/accounting/README.md#accountingcustomersall) - List Customers
- [`accountingAccountingCustomersDelete`](docs/sdks/accounting/README.md#accountingcustomersdelete) - Delete Customer
- [`accountingAccountingCustomersOne`](docs/sdks/accounting/README.md#accountingcustomersone) - Get Customer
- [`accountingAccountingCustomersUpdate`](docs/sdks/accounting/README.md#accountingcustomersupdate) - Update Customer
- [`accountingAccountingDepartmentsAdd`](docs/sdks/accounting/README.md#accountingdepartmentsadd) - Create Department
- [`accountingAccountingDepartmentsAll`](docs/sdks/accounting/README.md#accountingdepartmentsall) - List Departments
- [`accountingAccountingDepartmentsDelete`](docs/sdks/accounting/README.md#accountingdepartmentsdelete) - Delete Department
- [`accountingAccountingDepartmentsOne`](docs/sdks/accounting/README.md#accountingdepartmentsone) - Get Department
- [`accountingAccountingDepartmentsUpdate`](docs/sdks/accounting/README.md#accountingdepartmentsupdate) - Update Department
- [`accountingAccountingExpensesAdd`](docs/sdks/accounting/README.md#accountingexpensesadd) - Create Expense
- [`accountingAccountingExpensesAll`](docs/sdks/accounting/README.md#accountingexpensesall) - List Expenses
- [`accountingAccountingExpensesDelete`](docs/sdks/accounting/README.md#accountingexpensesdelete) - Delete Expense
- [`accountingAccountingExpensesOne`](docs/sdks/accounting/README.md#accountingexpensesone) - Get Expense
- [`accountingAccountingExpensesUpdate`](docs/sdks/accounting/README.md#accountingexpensesupdate) - Update Expense
- [`accountingAccountingInvoiceItemsAdd`](docs/sdks/accounting/README.md#accountinginvoiceitemsadd) - Create Invoice Item
- [`accountingAccountingInvoiceItemsAll`](docs/sdks/accounting/README.md#accountinginvoiceitemsall) - List Invoice Items
- [`accountingAccountingInvoiceItemsDelete`](docs/sdks/accounting/README.md#accountinginvoiceitemsdelete) - Delete Invoice Item
- [`accountingAccountingInvoiceItemsOne`](docs/sdks/accounting/README.md#accountinginvoiceitemsone) - Get Invoice Item
- [`accountingAccountingInvoiceItemsUpdate`](docs/sdks/accounting/README.md#accountinginvoiceitemsupdate) - Update Invoice Item
- [`accountingAccountingInvoicesAdd`](docs/sdks/accounting/README.md#accountinginvoicesadd) - Create Invoice
- [`accountingAccountingInvoicesAll`](docs/sdks/accounting/README.md#accountinginvoicesall) - List Invoices
- [`accountingAccountingInvoicesDelete`](docs/sdks/accounting/README.md#accountinginvoicesdelete) - Delete Invoice
- [`accountingAccountingInvoicesOne`](docs/sdks/accounting/README.md#accountinginvoicesone) - Get Invoice
- [`accountingAccountingInvoicesUpdate`](docs/sdks/accounting/README.md#accountinginvoicesupdate) - Update Invoice
- [`accountingAccountingJournalEntriesAdd`](docs/sdks/accounting/README.md#accountingjournalentriesadd) - Create Journal Entry
- [`accountingAccountingJournalEntriesAll`](docs/sdks/accounting/README.md#accountingjournalentriesall) - List Journal Entries
- [`accountingAccountingJournalEntriesDelete`](docs/sdks/accounting/README.md#accountingjournalentriesdelete) - Delete Journal Entry
- [`accountingAccountingJournalEntriesOne`](docs/sdks/accounting/README.md#accountingjournalentriesone) - Get Journal Entry
- [`accountingAccountingJournalEntriesUpdate`](docs/sdks/accounting/README.md#accountingjournalentriesupdate) - Update Journal Entry
- [`accountingAccountingLedgerAccountsAdd`](docs/sdks/accounting/README.md#accountingledgeraccountsadd) - Create Ledger Account
- [`accountingAccountingLedgerAccountsAll`](docs/sdks/accounting/README.md#accountingledgeraccountsall) - List Ledger Accounts
- [`accountingAccountingLedgerAccountsDelete`](docs/sdks/accounting/README.md#accountingledgeraccountsdelete) - Delete Ledger Account
- [`accountingAccountingLedgerAccountsOne`](docs/sdks/accounting/README.md#accountingledgeraccountsone) - Get Ledger Account
- [`accountingAccountingLedgerAccountsUpdate`](docs/sdks/accounting/README.md#accountingledgeraccountsupdate) - Update Ledger Account
- [`accountingAccountingLocationsAdd`](docs/sdks/accounting/README.md#accountinglocationsadd) - Create Location
- [`accountingAccountingLocationsAll`](docs/sdks/accounting/README.md#accountinglocationsall) - List Locations
- [`accountingAccountingLocationsDelete`](docs/sdks/accounting/README.md#accountinglocationsdelete) - Delete Location
- [`accountingAccountingLocationsOne`](docs/sdks/accounting/README.md#accountinglocationsone) - Get Location
- [`accountingAccountingLocationsUpdate`](docs/sdks/accounting/README.md#accountinglocationsupdate) - Update Location
- [`accountingAccountingPaymentsAdd`](docs/sdks/accounting/README.md#accountingpaymentsadd) - Create Payment
- [`accountingAccountingPaymentsAll`](docs/sdks/accounting/README.md#accountingpaymentsall) - List Payments
- [`accountingAccountingPaymentsDelete`](docs/sdks/accounting/README.md#accountingpaymentsdelete) - Delete Payment
- [`accountingAccountingPaymentsOne`](docs/sdks/accounting/README.md#accountingpaymentsone) - Get Payment
- [`accountingAccountingPaymentsUpdate`](docs/sdks/accounting/README.md#accountingpaymentsupdate) - Update Payment
- [`accountingAccountingProfitAndLossOne`](docs/sdks/accounting/README.md#accountingprofitandlossone) - Get Profit and Loss
- [`accountingAccountingPurchaseOrdersAdd`](docs/sdks/accounting/README.md#accountingpurchaseordersadd) - Create Purchase Order
- [`accountingAccountingPurchaseOrdersAll`](docs/sdks/accounting/README.md#accountingpurchaseordersall) - List Purchase Orders
- [`accountingAccountingPurchaseOrdersDelete`](docs/sdks/accounting/README.md#accountingpurchaseordersdelete) - Delete Purchase Order
- [`accountingAccountingPurchaseOrdersOne`](docs/sdks/accounting/README.md#accountingpurchaseordersone) - Get Purchase Order
- [`accountingAccountingPurchaseOrdersUpdate`](docs/sdks/accounting/README.md#accountingpurchaseordersupdate) - Update Purchase Order
- [`accountingAccountingSubsidiariesAdd`](docs/sdks/accounting/README.md#accountingsubsidiariesadd) - Create Subsidiary
- [`accountingAccountingSubsidiariesAll`](docs/sdks/accounting/README.md#accountingsubsidiariesall) - List Subsidiaries
- [`accountingAccountingSubsidiariesDelete`](docs/sdks/accounting/README.md#accountingsubsidiariesdelete) - Delete Subsidiary
- [`accountingAccountingSubsidiariesOne`](docs/sdks/accounting/README.md#accountingsubsidiariesone) - Get Subsidiary
- [`accountingAccountingSubsidiariesUpdate`](docs/sdks/accounting/README.md#accountingsubsidiariesupdate) - Update Subsidiary
- [`accountingAccountingSuppliersAdd`](docs/sdks/accounting/README.md#accountingsuppliersadd) - Create Supplier
- [`accountingAccountingSuppliersAll`](docs/sdks/accounting/README.md#accountingsuppliersall) - List Suppliers
- [`accountingAccountingSuppliersDelete`](docs/sdks/accounting/README.md#accountingsuppliersdelete) - Delete Supplier
- [`accountingAccountingSuppliersOne`](docs/sdks/accounting/README.md#accountingsuppliersone) - Get Supplier
- [`accountingAccountingSuppliersUpdate`](docs/sdks/accounting/README.md#accountingsuppliersupdate) - Update Supplier
- [`accountingAccountingTaxRatesAdd`](docs/sdks/accounting/README.md#accountingtaxratesadd) - Create Tax Rate
- [`accountingAccountingTaxRatesAll`](docs/sdks/accounting/README.md#accountingtaxratesall) - List Tax Rates
- [`accountingAccountingTaxRatesDelete`](docs/sdks/accounting/README.md#accountingtaxratesdelete) - Delete Tax Rate
- [`accountingAccountingTaxRatesOne`](docs/sdks/accounting/README.md#accountingtaxratesone) - Get Tax Rate
- [`accountingAccountingTaxRatesUpdate`](docs/sdks/accounting/README.md#accountingtaxratesupdate) - Update Tax Rate
- [`accountingAccountingTrackingCategoriesAdd`](docs/sdks/accounting/README.md#accountingtrackingcategoriesadd) - Create Tracking Category
- [`accountingAccountingTrackingCategoriesAll`](docs/sdks/accounting/README.md#accountingtrackingcategoriesall) - List Tracking Categories
- [`accountingAccountingTrackingCategoriesDelete`](docs/sdks/accounting/README.md#accountingtrackingcategoriesdelete) - Delete Tracking Category
- [`accountingAccountingTrackingCategoriesOne`](docs/sdks/accounting/README.md#accountingtrackingcategoriesone) - Get Tracking Category
- [`accountingAccountingTrackingCategoriesUpdate`](docs/sdks/accounting/README.md#accountingtrackingcategoriesupdate) - Update Tracking Category
- [`atsAtsApplicantsAdd`](docs/sdks/ats/README.md#atsapplicantsadd) - Create Applicant
- [`atsAtsApplicantsAll`](docs/sdks/ats/README.md#atsapplicantsall) - List Applicants
- [`atsAtsApplicantsDelete`](docs/sdks/ats/README.md#atsapplicantsdelete) - Delete Applicant
- [`atsAtsApplicantsOne`](docs/sdks/ats/README.md#atsapplicantsone) - Get Applicant
- [`atsAtsApplicantsUpdate`](docs/sdks/ats/README.md#atsapplicantsupdate) - Update Applicant
- [`atsAtsApplicationsAdd`](docs/sdks/ats/README.md#atsapplicationsadd) - Create Application
- [`atsAtsApplicationsAll`](docs/sdks/ats/README.md#atsapplicationsall) - List Applications
- [`atsAtsApplicationsDelete`](docs/sdks/ats/README.md#atsapplicationsdelete) - Delete Application
- [`atsAtsApplicationsOne`](docs/sdks/ats/README.md#atsapplicationsone) - Get Application
- [`atsAtsApplicationsUpdate`](docs/sdks/ats/README.md#atsapplicationsupdate) - Update Application
- [`atsAtsJobsAll`](docs/sdks/ats/README.md#atsjobsall) - List Jobs
- [`atsAtsJobsOne`](docs/sdks/ats/README.md#atsjobsone) - Get Job
- [`connectorConnectorApiResourceCoverageOne`](docs/sdks/connector/README.md#connectorapiresourcecoverageone) - Get API Resource Coverage
- [`connectorConnectorApiResourcesOne`](docs/sdks/connector/README.md#connectorapiresourcesone) - Get API Resource
- [`connectorConnectorApisAll`](docs/sdks/connector/README.md#connectorapisall) - List APIs
- [`connectorConnectorApisOne`](docs/sdks/connector/README.md#connectorapisone) - Get API
- [`connectorConnectorConnectorDocsOne`](docs/sdks/connector/README.md#connectorconnectordocsone) - Get Connector Doc content
- [`connectorConnectorConnectorResourcesOne`](docs/sdks/connector/README.md#connectorconnectorresourcesone) - Get Connector Resource
- [`connectorConnectorConnectorsAll`](docs/sdks/connector/README.md#connectorconnectorsall) - List Connectors
- [`connectorConnectorConnectorsOne`](docs/sdks/connector/README.md#connectorconnectorsone) - Get Connector
- [`crmCrmActivitiesAdd`](docs/sdks/crm/README.md#crmactivitiesadd) - Create activity
- [`crmCrmActivitiesAll`](docs/sdks/crm/README.md#crmactivitiesall) - List activities
- [`crmCrmActivitiesDelete`](docs/sdks/crm/README.md#crmactivitiesdelete) - Delete activity
- [`crmCrmActivitiesOne`](docs/sdks/crm/README.md#crmactivitiesone) - Get activity
- [`crmCrmActivitiesUpdate`](docs/sdks/crm/README.md#crmactivitiesupdate) - Update activity
- [`crmCrmCompaniesAdd`](docs/sdks/crm/README.md#crmcompaniesadd) - Create company
- [`crmCrmCompaniesAll`](docs/sdks/crm/README.md#crmcompaniesall) - List companies
- [`crmCrmCompaniesDelete`](docs/sdks/crm/README.md#crmcompaniesdelete) - Delete company
- [`crmCrmCompaniesOne`](docs/sdks/crm/README.md#crmcompaniesone) - Get company
- [`crmCrmCompaniesUpdate`](docs/sdks/crm/README.md#crmcompaniesupdate) - Update company
- [`crmCrmContactsAdd`](docs/sdks/crm/README.md#crmcontactsadd) - Create contact
- [`crmCrmContactsAll`](docs/sdks/crm/README.md#crmcontactsall) - List contacts
- [`crmCrmContactsDelete`](docs/sdks/crm/README.md#crmcontactsdelete) - Delete contact
- [`crmCrmContactsOne`](docs/sdks/crm/README.md#crmcontactsone) - Get contact
- [`crmCrmContactsUpdate`](docs/sdks/crm/README.md#crmcontactsupdate) - Update contact
- [`crmCrmLeadsAdd`](docs/sdks/crm/README.md#crmleadsadd) - Create lead
- [`crmCrmLeadsAll`](docs/sdks/crm/README.md#crmleadsall) - List leads
- [`crmCrmLeadsDelete`](docs/sdks/crm/README.md#crmleadsdelete) - Delete lead
- [`crmCrmLeadsOne`](docs/sdks/crm/README.md#crmleadsone) - Get lead
- [`crmCrmLeadsUpdate`](docs/sdks/crm/README.md#crmleadsupdate) - Update lead
- [`crmCrmNotesAdd`](docs/sdks/crm/README.md#crmnotesadd) - Create note
- [`crmCrmNotesAll`](docs/sdks/crm/README.md#crmnotesall) - List notes
- [`crmCrmNotesDelete`](docs/sdks/crm/README.md#crmnotesdelete) - Delete note
- [`crmCrmNotesOne`](docs/sdks/crm/README.md#crmnotesone) - Get note
- [`crmCrmNotesUpdate`](docs/sdks/crm/README.md#crmnotesupdate) - Update note
- [`crmCrmOpportunitiesAdd`](docs/sdks/crm/README.md#crmopportunitiesadd) - Create opportunity
- [`crmCrmOpportunitiesAll`](docs/sdks/crm/README.md#crmopportunitiesall) - List opportunities
- [`crmCrmOpportunitiesDelete`](docs/sdks/crm/README.md#crmopportunitiesdelete) - Delete opportunity
- [`crmCrmOpportunitiesOne`](docs/sdks/crm/README.md#crmopportunitiesone) - Get opportunity
- [`crmCrmOpportunitiesUpdate`](docs/sdks/crm/README.md#crmopportunitiesupdate) - Update opportunity
- [`crmCrmPipelinesAdd`](docs/sdks/crm/README.md#crmpipelinesadd) - Create pipeline
- [`crmCrmPipelinesAll`](docs/sdks/crm/README.md#crmpipelinesall) - List pipelines
- [`crmCrmPipelinesDelete`](docs/sdks/crm/README.md#crmpipelinesdelete) - Delete pipeline
- [`crmCrmPipelinesOne`](docs/sdks/crm/README.md#crmpipelinesone) - Get pipeline
- [`crmCrmPipelinesUpdate`](docs/sdks/crm/README.md#crmpipelinesupdate) - Update pipeline
- [`crmCrmUsersAdd`](docs/sdks/crm/README.md#crmusersadd) - Create user
- [`crmCrmUsersAll`](docs/sdks/crm/README.md#crmusersall) - List users
- [`crmCrmUsersDelete`](docs/sdks/crm/README.md#crmusersdelete) - Delete user
- [`crmCrmUsersOne`](docs/sdks/crm/README.md#crmusersone) - Get user
- [`crmCrmUsersUpdate`](docs/sdks/crm/README.md#crmusersupdate) - Update user
- [`ecommerceEcommerceCustomersAll`](docs/sdks/ecommerce/README.md#ecommercecustomersall) - List Customers
- [`ecommerceEcommerceCustomersOne`](docs/sdks/ecommerce/README.md#ecommercecustomersone) - Get Customer
- [`ecommerceEcommerceOrdersAll`](docs/sdks/ecommerce/README.md#ecommerceordersall) - List Orders
- [`ecommerceEcommerceOrdersOne`](docs/sdks/ecommerce/README.md#ecommerceordersone) - Get Order
- [`ecommerceEcommerceProductsAll`](docs/sdks/ecommerce/README.md#ecommerceproductsall) - List Products
- [`ecommerceEcommerceProductsOne`](docs/sdks/ecommerce/README.md#ecommerceproductsone) - Get Product
- [`ecommerceEcommerceStoresOne`](docs/sdks/ecommerce/README.md#ecommercestoresone) - Get Store
- [`fileStorageFileStorageDriveGroupsAdd`](docs/sdks/filestorage/README.md#filestoragedrivegroupsadd) - Create DriveGroup
- [`fileStorageFileStorageDriveGroupsAll`](docs/sdks/filestorage/README.md#filestoragedrivegroupsall) - List DriveGroups
- [`fileStorageFileStorageDriveGroupsDelete`](docs/sdks/filestorage/README.md#filestoragedrivegroupsdelete) - Delete DriveGroup
- [`fileStorageFileStorageDriveGroupsOne`](docs/sdks/filestorage/README.md#filestoragedrivegroupsone) - Get DriveGroup
- [`fileStorageFileStorageDriveGroupsUpdate`](docs/sdks/filestorage/README.md#filestoragedrivegroupsupdate) - Update DriveGroup
- [`fileStorageFileStorageDrivesAdd`](docs/sdks/filestorage/README.md#filestoragedrivesadd) - Create Drive
- [`fileStorageFileStorageDrivesAll`](docs/sdks/filestorage/README.md#filestoragedrivesall) - List Drives
- [`fileStorageFileStorageDrivesDelete`](docs/sdks/filestorage/README.md#filestoragedrivesdelete) - Delete Drive
- [`fileStorageFileStorageDrivesOne`](docs/sdks/filestorage/README.md#filestoragedrivesone) - Get Drive
- [`fileStorageFileStorageDrivesUpdate`](docs/sdks/filestorage/README.md#filestoragedrivesupdate) - Update Drive
- [`fileStorageFileStorageFilesAll`](docs/sdks/filestorage/README.md#filestoragefilesall) - List Files
- [`fileStorageFileStorageFilesDelete`](docs/sdks/filestorage/README.md#filestoragefilesdelete) - Delete File
- [`fileStorageFileStorageFilesDownload`](docs/sdks/filestorage/README.md#filestoragefilesdownload) - Download File
- [`fileStorageFileStorageFilesExport`](docs/sdks/filestorage/README.md#filestoragefilesexport) - Export File
- [`fileStorageFileStorageFilesOne`](docs/sdks/filestorage/README.md#filestoragefilesone) - Get File
- [`fileStorageFileStorageFilesSearch`](docs/sdks/filestorage/README.md#filestoragefilessearch) - Search Files
- [`fileStorageFileStorageFilesUpdate`](docs/sdks/filestorage/README.md#filestoragefilesupdate) - Rename or move File
- [`fileStorageFileStorageFoldersAdd`](docs/sdks/filestorage/README.md#filestoragefoldersadd) - Create Folder
- [`fileStorageFileStorageFoldersCopy`](docs/sdks/filestorage/README.md#filestoragefolderscopy) - Copy Folder
- [`fileStorageFileStorageFoldersDelete`](docs/sdks/filestorage/README.md#filestoragefoldersdelete) - Delete Folder
- [`fileStorageFileStorageFoldersOne`](docs/sdks/filestorage/README.md#filestoragefoldersone) - Get Folder
- [`fileStorageFileStorageFoldersUpdate`](docs/sdks/filestorage/README.md#filestoragefoldersupdate) - Rename or move Folder
- [`fileStorageFileStorageSharedLinksAdd`](docs/sdks/filestorage/README.md#filestoragesharedlinksadd) - Create Shared Link
- [`fileStorageFileStorageSharedLinksAll`](docs/sdks/filestorage/README.md#filestoragesharedlinksall) - List SharedLinks
- [`fileStorageFileStorageSharedLinksDelete`](docs/sdks/filestorage/README.md#filestoragesharedlinksdelete) - Delete Shared Link
- [`fileStorageFileStorageSharedLinksOne`](docs/sdks/filestorage/README.md#filestoragesharedlinksone) - Get Shared Link
- [`fileStorageFileStorageSharedLinksUpdate`](docs/sdks/filestorage/README.md#filestoragesharedlinksupdate) - Update Shared Link
- [`fileStorageFileStorageUploadSessionsAdd`](docs/sdks/filestorage/README.md#filestorageuploadsessionsadd) - Start Upload Session
- [`fileStorageFileStorageUploadSessionsDelete`](docs/sdks/filestorage/README.md#filestorageuploadsessionsdelete) - Abort Upload Session
- [`fileStorageFileStorageUploadSessionsFinish`](docs/sdks/filestorage/README.md#filestorageuploadsessionsfinish) - Finish Upload Session
- [`fileStorageFileStorageUploadSessionsOne`](docs/sdks/filestorage/README.md#filestorageuploadsessionsone) - Get Upload Session
- [`hrisHrisCompaniesAdd`](docs/sdks/hris/README.md#hriscompaniesadd) - Create Company
- [`hrisHrisCompaniesAll`](docs/sdks/hris/README.md#hriscompaniesall) - List Companies
- [`hrisHrisCompaniesDelete`](docs/sdks/hris/README.md#hriscompaniesdelete) - Delete Company
- [`hrisHrisCompaniesOne`](docs/sdks/hris/README.md#hriscompaniesone) - Get Company
- [`hrisHrisCompaniesUpdate`](docs/sdks/hris/README.md#hriscompaniesupdate) - Update Company
- [`hrisHrisDepartmentsAdd`](docs/sdks/hris/README.md#hrisdepartmentsadd) - Create Department
- [`hrisHrisDepartmentsAll`](docs/sdks/hris/README.md#hrisdepartmentsall) - List Departments
- [`hrisHrisDepartmentsDelete`](docs/sdks/hris/README.md#hrisdepartmentsdelete) - Delete Department
- [`hrisHrisDepartmentsOne`](docs/sdks/hris/README.md#hrisdepartmentsone) - Get Department
- [`hrisHrisDepartmentsUpdate`](docs/sdks/hris/README.md#hrisdepartmentsupdate) - Update Department
- [`hrisHrisEmployeePayrollsAll`](docs/sdks/hris/README.md#hrisemployeepayrollsall) - List Employee Payrolls
- [`hrisHrisEmployeePayrollsOne`](docs/sdks/hris/README.md#hrisemployeepayrollsone) - Get Employee Payroll
- [`hrisHrisEmployeesAdd`](docs/sdks/hris/README.md#hrisemployeesadd) - Create Employee
- [`hrisHrisEmployeesAll`](docs/sdks/hris/README.md#hrisemployeesall) - List Employees
- [`hrisHrisEmployeeSchedulesAll`](docs/sdks/hris/README.md#hrisemployeeschedulesall) - List Employee Schedules
- [`hrisHrisEmployeesDelete`](docs/sdks/hris/README.md#hrisemployeesdelete) - Delete Employee
- [`hrisHrisEmployeesOne`](docs/sdks/hris/README.md#hrisemployeesone) - Get Employee
- [`hrisHrisEmployeesUpdate`](docs/sdks/hris/README.md#hrisemployeesupdate) - Update Employee
- [`hrisHrisPayrollsAll`](docs/sdks/hris/README.md#hrispayrollsall) - List Payroll
- [`hrisHrisPayrollsOne`](docs/sdks/hris/README.md#hrispayrollsone) - Get Payroll
- [`hrisHrisTimeOffRequestsAdd`](docs/sdks/hris/README.md#hristimeoffrequestsadd) - Create Time Off Request
- [`hrisHrisTimeOffRequestsAll`](docs/sdks/hris/README.md#hristimeoffrequestsall) - List Time Off Requests
- [`hrisHrisTimeOffRequestsDelete`](docs/sdks/hris/README.md#hristimeoffrequestsdelete) - Delete Time Off Request
- [`hrisHrisTimeOffRequestsOne`](docs/sdks/hris/README.md#hristimeoffrequestsone) - Get Time Off Request
- [`hrisHrisTimeOffRequestsUpdate`](docs/sdks/hris/README.md#hristimeoffrequestsupdate) - Update Time Off Request
- [`issueTrackingIssueTrackingCollectionsAll`](docs/sdks/issuetracking/README.md#issuetrackingcollectionsall) - List Collections
- [`issueTrackingIssueTrackingCollectionsOne`](docs/sdks/issuetracking/README.md#issuetrackingcollectionsone) - Get Collection
- [`issueTrackingIssueTrackingCollectionTagsAll`](docs/sdks/issuetracking/README.md#issuetrackingcollectiontagsall) - List Tags
- [`issueTrackingIssueTrackingCollectionTicketCommentsAdd`](docs/sdks/issuetracking/README.md#issuetrackingcollectionticketcommentsadd) - Create Comment
- [`issueTrackingIssueTrackingCollectionTicketCommentsAll`](docs/sdks/issuetracking/README.md#issuetrackingcollectionticketcommentsall) - List Comments
- [`issueTrackingIssueTrackingCollectionTicketCommentsDelete`](docs/sdks/issuetracking/README.md#issuetrackingcollectionticketcommentsdelete) - Delete Comment
- [`issueTrackingIssueTrackingCollectionTicketCommentsOne`](docs/sdks/issuetracking/README.md#issuetrackingcollectionticketcommentsone) - Get Comment
- [`issueTrackingIssueTrackingCollectionTicketCommentsUpdate`](docs/sdks/issuetracking/README.md#issuetrackingcollectionticketcommentsupdate) - Update Comment
- [`issueTrackingIssueTrackingCollectionTicketsAdd`](docs/sdks/issuetracking/README.md#issuetrackingcollectionticketsadd) - Create Ticket
- [`issueTrackingIssueTrackingCollectionTicketsAll`](docs/sdks/issuetracking/README.md#issuetrackingcollectionticketsall) - List Tickets
- [`issueTrackingIssueTrackingCollectionTicketsDelete`](docs/sdks/issuetracking/README.md#issuetrackingcollectionticketsdelete) - Delete Ticket
- [`issueTrackingIssueTrackingCollectionTicketsOne`](docs/sdks/issuetracking/README.md#issuetrackingcollectionticketsone) - Get Ticket
- [`issueTrackingIssueTrackingCollectionTicketsUpdate`](docs/sdks/issuetracking/README.md#issuetrackingcollectionticketsupdate) - Update Ticket
- [`issueTrackingIssueTrackingCollectionUsersAll`](docs/sdks/issuetracking/README.md#issuetrackingcollectionusersall) - List Users
- [`issueTrackingIssueTrackingCollectionUsersOne`](docs/sdks/issuetracking/README.md#issuetrackingcollectionusersone) - Get user
- [`leadLeadLeadsAdd`](docs/sdks/lead/README.md#leadleadsadd) - Create lead
- [`leadLeadLeadsAll`](docs/sdks/lead/README.md#leadleadsall) - List leads
- [`leadLeadLeadsDelete`](docs/sdks/lead/README.md#leadleadsdelete) - Delete lead
- [`leadLeadLeadsOne`](docs/sdks/lead/README.md#leadleadsone) - Get lead
- [`leadLeadLeadsUpdate`](docs/sdks/lead/README.md#leadleadsupdate) - Update lead
- [`posPosItemsAdd`](docs/sdks/pos/README.md#positemsadd) - Create Item
- [`posPosItemsAll`](docs/sdks/pos/README.md#positemsall) - List Items
- [`posPosItemsDelete`](docs/sdks/pos/README.md#positemsdelete) - Delete Item
- [`posPosItemsOne`](docs/sdks/pos/README.md#positemsone) - Get Item
- [`posPosItemsUpdate`](docs/sdks/pos/README.md#positemsupdate) - Update Item
- [`posPosLocationsAdd`](docs/sdks/pos/README.md#poslocationsadd) - Create Location
- [`posPosLocationsAll`](docs/sdks/pos/README.md#poslocationsall) - List Locations
- [`posPosLocationsDelete`](docs/sdks/pos/README.md#poslocationsdelete) - Delete Location
- [`posPosLocationsOne`](docs/sdks/pos/README.md#poslocationsone) - Get Location
- [`posPosLocationsUpdate`](docs/sdks/pos/README.md#poslocationsupdate) - Update Location
- [`posPosMerchantsAdd`](docs/sdks/pos/README.md#posmerchantsadd) - Create Merchant
- [`posPosMerchantsAll`](docs/sdks/pos/README.md#posmerchantsall) - List Merchants
- [`posPosMerchantsDelete`](docs/sdks/pos/README.md#posmerchantsdelete) - Delete Merchant
- [`posPosMerchantsOne`](docs/sdks/pos/README.md#posmerchantsone) - Get Merchant
- [`posPosMerchantsUpdate`](docs/sdks/pos/README.md#posmerchantsupdate) - Update Merchant
- [`posPosModifierGroupsAdd`](docs/sdks/pos/README.md#posmodifiergroupsadd) - Create Modifier Group
- [`posPosModifierGroupsAll`](docs/sdks/pos/README.md#posmodifiergroupsall) - List Modifier Groups
- [`posPosModifierGroupsDelete`](docs/sdks/pos/README.md#posmodifiergroupsdelete) - Delete Modifier Group
- [`posPosModifierGroupsOne`](docs/sdks/pos/README.md#posmodifiergroupsone) - Get Modifier Group
- [`posPosModifierGroupsUpdate`](docs/sdks/pos/README.md#posmodifiergroupsupdate) - Update Modifier Group
- [`posPosModifiersAdd`](docs/sdks/pos/README.md#posmodifiersadd) - Create Modifier
- [`posPosModifiersAll`](docs/sdks/pos/README.md#posmodifiersall) - List Modifiers
- [`posPosModifiersDelete`](docs/sdks/pos/README.md#posmodifiersdelete) - Delete Modifier
- [`posPosModifiersOne`](docs/sdks/pos/README.md#posmodifiersone) - Get Modifier
- [`posPosModifiersUpdate`](docs/sdks/pos/README.md#posmodifiersupdate) - Update Modifier
- [`posPosOrdersAdd`](docs/sdks/pos/README.md#posordersadd) - Create Order
- [`posPosOrdersAll`](docs/sdks/pos/README.md#posordersall) - List Orders
- [`posPosOrdersDelete`](docs/sdks/pos/README.md#posordersdelete) - Delete Order
- [`posPosOrdersOne`](docs/sdks/pos/README.md#posordersone) - Get Order
- [`posPosOrdersPay`](docs/sdks/pos/README.md#posorderspay) - Pay Order
- [`posPosOrdersUpdate`](docs/sdks/pos/README.md#posordersupdate) - Update Order
- [`posPosOrderTypesAdd`](docs/sdks/pos/README.md#posordertypesadd) - Create Order Type
- [`posPosOrderTypesAll`](docs/sdks/pos/README.md#posordertypesall) - List Order Types
- [`posPosOrderTypesDelete`](docs/sdks/pos/README.md#posordertypesdelete) - Delete Order Type
- [`posPosOrderTypesOne`](docs/sdks/pos/README.md#posordertypesone) - Get Order Type
- [`posPosOrderTypesUpdate`](docs/sdks/pos/README.md#posordertypesupdate) - Update Order Type
- [`posPosPaymentsAdd`](docs/sdks/pos/README.md#pospaymentsadd) - Create Payment
- [`posPosPaymentsAll`](docs/sdks/pos/README.md#pospaymentsall) - List Payments
- [`posPosPaymentsDelete`](docs/sdks/pos/README.md#pospaymentsdelete) - Delete Payment
- [`posPosPaymentsOne`](docs/sdks/pos/README.md#pospaymentsone) - Get Payment
- [`posPosPaymentsUpdate`](docs/sdks/pos/README.md#pospaymentsupdate) - Update Payment
- [`posPosTendersAdd`](docs/sdks/pos/README.md#postendersadd) - Create Tender
- [`posPosTendersAll`](docs/sdks/pos/README.md#postendersall) - List Tenders
- [`posPosTendersDelete`](docs/sdks/pos/README.md#postendersdelete) - Delete Tender
- [`posPosTendersOne`](docs/sdks/pos/README.md#postendersone) - Get Tender
- [`posPosTendersUpdate`](docs/sdks/pos/README.md#postendersupdate) - Update Tender
- [`smsSmsMessagesAdd`](docs/sdks/sms/README.md#smsmessagesadd) - Create Message
- [`smsSmsMessagesAll`](docs/sdks/sms/README.md#smsmessagesall) - List Messages
- [`smsSmsMessagesDelete`](docs/sdks/sms/README.md#smsmessagesdelete) - Delete Message
- [`smsSmsMessagesOne`](docs/sdks/sms/README.md#smsmessagesone) - Get Message
- [`smsSmsMessagesUpdate`](docs/sdks/sms/README.md#smsmessagesupdate) - Update Message
- [`vaultVaultConnectionCustomMappingsAll`](docs/sdks/vault/README.md#vaultconnectioncustommappingsall) - List connection custom mappings
- [`vaultVaultConnectionsAll`](docs/sdks/vault/README.md#vaultconnectionsall) - Get all connections
- [`vaultVaultConnectionsDelete`](docs/sdks/vault/README.md#vaultconnectionsdelete) - Deletes a connection
- [`vaultVaultConnectionSettingsAll`](docs/sdks/vault/README.md#vaultconnectionsettingsall) - Get resource settings
- [`vaultVaultConnectionSettingsUpdate`](docs/sdks/vault/README.md#vaultconnectionsettingsupdate) - Update settings
- [`vaultVaultConnectionsImport`](docs/sdks/vault/README.md#vaultconnectionsimport) - Import connection
- [`vaultVaultConnectionsOne`](docs/sdks/vault/README.md#vaultconnectionsone) - Get connection
- [`vaultVaultConnectionsToken`](docs/sdks/vault/README.md#vaultconnectionstoken) - Authorize Access Token
- [`vaultVaultConnectionsUpdate`](docs/sdks/vault/README.md#vaultconnectionsupdate) - Update connection
- [`vaultVaultConsumerRequestCountsAll`](docs/sdks/vault/README.md#vaultconsumerrequestcountsall) - Consumer request counts
- [`vaultVaultConsumersAdd`](docs/sdks/vault/README.md#vaultconsumersadd) - Create consumer
- [`vaultVaultConsumersAll`](docs/sdks/vault/README.md#vaultconsumersall) - Get all consumers
- [`vaultVaultConsumersDelete`](docs/sdks/vault/README.md#vaultconsumersdelete) - Delete consumer
- [`vaultVaultConsumersOne`](docs/sdks/vault/README.md#vaultconsumersone) - Get consumer
- [`vaultVaultConsumersUpdate`](docs/sdks/vault/README.md#vaultconsumersupdate) - Update consumer
- [`vaultVaultCreateCallbackState`](docs/sdks/vault/README.md#vaultcreatecallbackstate) - Create Callback State
- [`vaultVaultCustomFieldsAll`](docs/sdks/vault/README.md#vaultcustomfieldsall) - Get resource custom fields
- [`vaultVaultCustomMappingsAll`](docs/sdks/vault/README.md#vaultcustommappingsall) - List custom mappings
- [`vaultVaultLogsAll`](docs/sdks/vault/README.md#vaultlogsall) - Get all consumer request logs
- [`vaultVaultSessionsCreate`](docs/sdks/vault/README.md#vaultsessionscreate) - Create Session
- [`vaultVaultValidateConnectionState`](docs/sdks/vault/README.md#vaultvalidateconnectionstate) - Validate Connection State
- [`webhookWebhookEventLogsAll`](docs/sdks/webhook/README.md#webhookeventlogsall) - List event logs
- [`webhookWebhookWebhooksAdd`](docs/sdks/webhook/README.md#webhookwebhooksadd) - Create webhook subscription
- [`webhookWebhookWebhooksAll`](docs/sdks/webhook/README.md#webhookwebhooksall) - List webhook subscriptions
- [`webhookWebhookWebhooksDelete`](docs/sdks/webhook/README.md#webhookwebhooksdelete) - Delete webhook subscription
- [`webhookWebhookWebhooksOne`](docs/sdks/webhook/README.md#webhookwebhooksone) - Get webhook subscription
- [`webhookWebhookWebhooksUpdate`](docs/sdks/webhook/README.md#webhookwebhooksupdate) - Update webhook subscription

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.accounting.accountingTaxRatesAll({
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
import { Apideck } from "apideck";

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
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.accounting.accountingTaxRatesAll({
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

In addition, when custom error responses are specified for an operation, the SDK may throw their associated Error type. You can refer to respective *Errors* tables in SDK docs for more details on possible error types for each operation. For example, the `accountingTaxRatesAll` method may throw the following errors:

| Error Type                     | Status Code | Content Type     |
| ------------------------------ | ----------- | ---------------- |
| errors.BadRequestResponse      | 400         | application/json |
| errors.UnauthorizedResponse    | 401         | application/json |
| errors.PaymentRequiredResponse | 402         | application/json |
| errors.NotFoundResponse        | 404         | application/json |
| errors.UnprocessableResponse   | 422         | application/json |
| errors.APIError                | 4XX, 5XX    | \*/\*            |

```typescript
import { Apideck } from "apideck";
import {
  BadRequestResponse,
  NotFoundResponse,
  PaymentRequiredResponse,
  SDKValidationError,
  UnauthorizedResponse,
  UnprocessableResponse,
} from "apideck/models/errors";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  let result;
  try {
    result = await apideck.accounting.accountingTaxRatesAll({
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
import { Apideck } from "apideck";

const apideck = new Apideck({
  serverURL: "https://unify.apideck.com",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.accounting.accountingTaxRatesAll({
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
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.fileStorage.fileStorageUploadSessionsAdd({
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
import { Apideck } from "apideck";
import { HTTPClient } from "apideck/lib/http";

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
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.accounting.accountingTaxRatesAll({
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
import { Apideck } from "apideck";

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
