# Accounting.ExpenseReports

## Overview

### Available Operations

* [list](#list) - List Expense Reports
* [create](#create) - Create Expense Report
* [get](#get) - Get Expense Report
* [update](#update) - Update Expense Report
* [delete](#delete) - Delete Expense Report

## list

List Expense Reports

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.expenseReportsAll" method="get" path="/accounting/expense-reports" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.expenseReports.list({
    serviceId: "salesforce",
    fields: "id,updated_at",
    filter: {
      updatedSince: new Date("2020-09-30T07:43:32.000Z"),
      status: "submitted",
    },
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "@apideck/unify/core.js";
import { accountingExpenseReportsList } from "@apideck/unify/funcs/accountingExpenseReportsList.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingExpenseReportsList(apideck, {
    serviceId: "salesforce",
    fields: "id,updated_at",
    filter: {
      updatedSince: new Date("2020-09-30T07:43:32.000Z"),
      status: "submitted",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("accountingExpenseReportsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingExpenseReportsAllRequest](../../models/operations/accountingexpensereportsallrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingExpenseReportsAllResponse](../../models/operations/accountingexpensereportsallresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## create

Create Expense Report

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.expenseReportsAdd" method="post" path="/accounting/expense-reports" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.expenseReports.create({
    serviceId: "salesforce",
    expenseReport: {
      displayId: "123456",
      number: "ER-001",
      title: "Q1 Business Travel",
      employee: {
        id: "12345",
        displayName: "John Doe",
      },
      status: "submitted",
      transactionDate: new Date("2021-05-01T12:00:00.000Z"),
      postingDate: new Date("2024-06-01"),
      dueDate: new Date("2024-06-15"),
      currency: "USD",
      currencyRate: 0.69,
      subTotal: 250,
      totalTax: 25,
      totalAmount: 1250.75,
      reimbursableAmount: 1100,
      memo: "Business travel expenses for Q1 client meetings",
      department: {
        displayId: "123456",
        name: "Acme Inc.",
      },
      location: {
        id: "123456",
        displayId: "123456",
        name: "New York Office",
      },
      account: null,
      accountingPeriod: {
        id: "12345",
        name: "Q1 2024",
      },
      lineItems: [],
      subsidiary: {
        displayId: "123456",
        name: "Acme Inc.",
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
      taxInclusive: true,
      approvedBy: {
        id: "12345",
        displayName: "Jane Smith",
      },
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
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "@apideck/unify/core.js";
import { accountingExpenseReportsCreate } from "@apideck/unify/funcs/accountingExpenseReportsCreate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingExpenseReportsCreate(apideck, {
    serviceId: "salesforce",
    expenseReport: {
      displayId: "123456",
      number: "ER-001",
      title: "Q1 Business Travel",
      employee: {
        id: "12345",
        displayName: "John Doe",
      },
      status: "submitted",
      transactionDate: new Date("2021-05-01T12:00:00.000Z"),
      postingDate: new Date("2024-06-01"),
      dueDate: new Date("2024-06-15"),
      currency: "USD",
      currencyRate: 0.69,
      subTotal: 250,
      totalTax: 25,
      totalAmount: 1250.75,
      reimbursableAmount: 1100,
      memo: "Business travel expenses for Q1 client meetings",
      department: {
        displayId: "123456",
        name: "Acme Inc.",
      },
      location: {
        id: "123456",
        displayId: "123456",
        name: "New York Office",
      },
      account: null,
      accountingPeriod: {
        id: "12345",
        name: "Q1 2024",
      },
      lineItems: [],
      subsidiary: {
        displayId: "123456",
        name: "Acme Inc.",
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
      taxInclusive: true,
      approvedBy: {
        id: "12345",
        displayName: "Jane Smith",
      },
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingExpenseReportsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingExpenseReportsAddRequest](../../models/operations/accountingexpensereportsaddrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingExpenseReportsAddResponse](../../models/operations/accountingexpensereportsaddresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## get

Get Expense Report

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.expenseReportsOne" method="get" path="/accounting/expense-reports/{id}" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.expenseReports.get({
    id: "<id>",
    serviceId: "salesforce",
    fields: "id,updated_at",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "@apideck/unify/core.js";
import { accountingExpenseReportsGet } from "@apideck/unify/funcs/accountingExpenseReportsGet.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingExpenseReportsGet(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    fields: "id,updated_at",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingExpenseReportsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingExpenseReportsOneRequest](../../models/operations/accountingexpensereportsonerequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingExpenseReportsOneResponse](../../models/operations/accountingexpensereportsoneresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## update

Update Expense Report

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.expenseReportsUpdate" method="patch" path="/accounting/expense-reports/{id}" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.expenseReports.update({
    id: "<id>",
    serviceId: "salesforce",
    expenseReport: {
      displayId: "123456",
      number: "ER-001",
      title: "Q1 Business Travel",
      employee: {
        id: "12345",
        displayName: "John Doe",
      },
      status: "submitted",
      transactionDate: new Date("2021-05-01T12:00:00.000Z"),
      postingDate: new Date("2024-06-01"),
      dueDate: new Date("2024-06-15"),
      currency: "USD",
      currencyRate: 0.69,
      subTotal: 250,
      totalTax: 25,
      totalAmount: 1250.75,
      reimbursableAmount: 1100,
      memo: "Business travel expenses for Q1 client meetings",
      department: {
        displayId: "123456",
        name: "Acme Inc.",
      },
      location: {
        id: "123456",
        displayId: "123456",
        name: "New York Office",
      },
      account: {
        id: "123456",
        name: "Bank account",
        nominalCode: "N091",
        code: "453",
        parentId: "123456",
        displayId: "123456",
      },
      accountingPeriod: {
        id: "12345",
        name: "Q1 2024",
      },
      lineItems: [],
      subsidiary: {
        displayId: "123456",
        name: "Acme Inc.",
      },
      trackingCategories: null,
      taxInclusive: true,
      approvedBy: {
        id: "12345",
        displayName: "Jane Smith",
      },
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
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "@apideck/unify/core.js";
import { accountingExpenseReportsUpdate } from "@apideck/unify/funcs/accountingExpenseReportsUpdate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingExpenseReportsUpdate(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    expenseReport: {
      displayId: "123456",
      number: "ER-001",
      title: "Q1 Business Travel",
      employee: {
        id: "12345",
        displayName: "John Doe",
      },
      status: "submitted",
      transactionDate: new Date("2021-05-01T12:00:00.000Z"),
      postingDate: new Date("2024-06-01"),
      dueDate: new Date("2024-06-15"),
      currency: "USD",
      currencyRate: 0.69,
      subTotal: 250,
      totalTax: 25,
      totalAmount: 1250.75,
      reimbursableAmount: 1100,
      memo: "Business travel expenses for Q1 client meetings",
      department: {
        displayId: "123456",
        name: "Acme Inc.",
      },
      location: {
        id: "123456",
        displayId: "123456",
        name: "New York Office",
      },
      account: {
        id: "123456",
        name: "Bank account",
        nominalCode: "N091",
        code: "453",
        parentId: "123456",
        displayId: "123456",
      },
      accountingPeriod: {
        id: "12345",
        name: "Q1 2024",
      },
      lineItems: [],
      subsidiary: {
        displayId: "123456",
        name: "Acme Inc.",
      },
      trackingCategories: null,
      taxInclusive: true,
      approvedBy: {
        id: "12345",
        displayName: "Jane Smith",
      },
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingExpenseReportsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingExpenseReportsUpdateRequest](../../models/operations/accountingexpensereportsupdaterequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingExpenseReportsUpdateResponse](../../models/operations/accountingexpensereportsupdateresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## delete

Delete Expense Report

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.expenseReportsDelete" method="delete" path="/accounting/expense-reports/{id}" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.expenseReports.delete({
    id: "<id>",
    serviceId: "salesforce",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "@apideck/unify/core.js";
import { accountingExpenseReportsDelete } from "@apideck/unify/funcs/accountingExpenseReportsDelete.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingExpenseReportsDelete(apideck, {
    id: "<id>",
    serviceId: "salesforce",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingExpenseReportsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingExpenseReportsDeleteRequest](../../models/operations/accountingexpensereportsdeleterequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingExpenseReportsDeleteResponse](../../models/operations/accountingexpensereportsdeleteresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |