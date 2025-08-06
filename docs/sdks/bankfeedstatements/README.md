# BankFeedStatements
(*accounting.bankFeedStatements*)

## Overview

### Available Operations

* [list](#list) - List Bank Feed Statements
* [create](#create) - Create Bank Feed Statement
* [get](#get) - Get Bank Feed Statement
* [update](#update) - Update Bank Feed Statement
* [delete](#delete) - Delete Bank Feed Statement

## list

List Bank Feed Statements

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.bankFeedStatementsAll" method="get" path="/accounting/bank-feed-statements" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.bankFeedStatements.list({
    serviceId: "salesforce",
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

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "@apideck/unify/core.js";
import { accountingBankFeedStatementsList } from "@apideck/unify/funcs/accountingBankFeedStatementsList.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingBankFeedStatementsList(apideck, {
    serviceId: "salesforce",
    passThrough: {
      "search": "San Francisco",
    },
    fields: "id,updated_at",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("accountingBankFeedStatementsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingBankFeedStatementsAllRequest](../../models/operations/accountingbankfeedstatementsallrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingBankFeedStatementsAllResponse](../../models/operations/accountingbankfeedstatementsallresponse.md)\>**

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

Create Bank Feed Statement

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.bankFeedStatementsAdd" method="post" path="/accounting/bank-feed-statements" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.bankFeedStatements.create({
    serviceId: "salesforce",
    bankFeedStatement: {
      bankFeedAccountId: "acc_456",
      status: "pending",
      startDate: new Date("2021-05-01T12:00:00.000Z"),
      endDate: new Date("2025-01-31T12:00:00.000Z"),
      startBalance: 10500.25,
      startBalanceCreditOrDebit: "debit",
      endBalance: 9800.5,
      endBalanceCreditOrDebit: "debit",
      transactions: [
        {
          postedDate: new Date("2025-01-15T12:00:00.000Z"),
          description: "Payment received from ACME Corp",
          amount: 250,
          creditOrDebit: "debit",
          sourceTransactionId: "txn_987",
          counterparty: "ACME Corp",
          reference: "INV-2025-01",
          transactionType: "payment",
        },
        {
          postedDate: new Date("2025-01-15T12:00:00.000Z"),
          description: "Payment received from ACME Corp",
          amount: 250,
          creditOrDebit: "debit",
          sourceTransactionId: "txn_987",
          counterparty: "ACME Corp",
          reference: "INV-2025-01",
          transactionType: "payment",
        },
        {
          postedDate: new Date("2025-01-15T12:00:00.000Z"),
          description: "Payment received from ACME Corp",
          amount: 250,
          creditOrDebit: "debit",
          sourceTransactionId: "txn_987",
          counterparty: "ACME Corp",
          reference: "INV-2025-01",
          transactionType: "payment",
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
import { accountingBankFeedStatementsCreate } from "@apideck/unify/funcs/accountingBankFeedStatementsCreate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingBankFeedStatementsCreate(apideck, {
    serviceId: "salesforce",
    bankFeedStatement: {
      bankFeedAccountId: "acc_456",
      status: "pending",
      startDate: new Date("2021-05-01T12:00:00.000Z"),
      endDate: new Date("2025-01-31T12:00:00.000Z"),
      startBalance: 10500.25,
      startBalanceCreditOrDebit: "debit",
      endBalance: 9800.5,
      endBalanceCreditOrDebit: "debit",
      transactions: [
        {
          postedDate: new Date("2025-01-15T12:00:00.000Z"),
          description: "Payment received from ACME Corp",
          amount: 250,
          creditOrDebit: "debit",
          sourceTransactionId: "txn_987",
          counterparty: "ACME Corp",
          reference: "INV-2025-01",
          transactionType: "payment",
        },
        {
          postedDate: new Date("2025-01-15T12:00:00.000Z"),
          description: "Payment received from ACME Corp",
          amount: 250,
          creditOrDebit: "debit",
          sourceTransactionId: "txn_987",
          counterparty: "ACME Corp",
          reference: "INV-2025-01",
          transactionType: "payment",
        },
        {
          postedDate: new Date("2025-01-15T12:00:00.000Z"),
          description: "Payment received from ACME Corp",
          amount: 250,
          creditOrDebit: "debit",
          sourceTransactionId: "txn_987",
          counterparty: "ACME Corp",
          reference: "INV-2025-01",
          transactionType: "payment",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingBankFeedStatementsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingBankFeedStatementsAddRequest](../../models/operations/accountingbankfeedstatementsaddrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingBankFeedStatementsAddResponse](../../models/operations/accountingbankfeedstatementsaddresponse.md)\>**

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

Get Bank Feed Statement

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.bankFeedStatementsOne" method="get" path="/accounting/bank-feed-statements/{id}" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.bankFeedStatements.get({
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
import { accountingBankFeedStatementsGet } from "@apideck/unify/funcs/accountingBankFeedStatementsGet.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingBankFeedStatementsGet(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    fields: "id,updated_at",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingBankFeedStatementsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingBankFeedStatementsOneRequest](../../models/operations/accountingbankfeedstatementsonerequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingBankFeedStatementsOneResponse](../../models/operations/accountingbankfeedstatementsoneresponse.md)\>**

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

Update Bank Feed Statement

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.bankFeedStatementsUpdate" method="patch" path="/accounting/bank-feed-statements/{id}" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.bankFeedStatements.update({
    id: "<id>",
    serviceId: "salesforce",
    bankFeedStatement: {
      bankFeedAccountId: "acc_456",
      status: "pending",
      startDate: new Date("2021-05-01T12:00:00.000Z"),
      endDate: new Date("2025-01-31T12:00:00.000Z"),
      startBalance: 10500.25,
      startBalanceCreditOrDebit: "debit",
      endBalance: 9800.5,
      endBalanceCreditOrDebit: "debit",
      transactions: [
        {
          postedDate: new Date("2025-01-15T12:00:00.000Z"),
          description: "Payment received from ACME Corp",
          amount: 250,
          creditOrDebit: "debit",
          sourceTransactionId: "txn_987",
          counterparty: "ACME Corp",
          reference: "INV-2025-01",
          transactionType: "payment",
        },
        {
          postedDate: new Date("2025-01-15T12:00:00.000Z"),
          description: "Payment received from ACME Corp",
          amount: 250,
          creditOrDebit: "debit",
          sourceTransactionId: "txn_987",
          counterparty: "ACME Corp",
          reference: "INV-2025-01",
          transactionType: "payment",
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
import { accountingBankFeedStatementsUpdate } from "@apideck/unify/funcs/accountingBankFeedStatementsUpdate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingBankFeedStatementsUpdate(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    bankFeedStatement: {
      bankFeedAccountId: "acc_456",
      status: "pending",
      startDate: new Date("2021-05-01T12:00:00.000Z"),
      endDate: new Date("2025-01-31T12:00:00.000Z"),
      startBalance: 10500.25,
      startBalanceCreditOrDebit: "debit",
      endBalance: 9800.5,
      endBalanceCreditOrDebit: "debit",
      transactions: [
        {
          postedDate: new Date("2025-01-15T12:00:00.000Z"),
          description: "Payment received from ACME Corp",
          amount: 250,
          creditOrDebit: "debit",
          sourceTransactionId: "txn_987",
          counterparty: "ACME Corp",
          reference: "INV-2025-01",
          transactionType: "payment",
        },
        {
          postedDate: new Date("2025-01-15T12:00:00.000Z"),
          description: "Payment received from ACME Corp",
          amount: 250,
          creditOrDebit: "debit",
          sourceTransactionId: "txn_987",
          counterparty: "ACME Corp",
          reference: "INV-2025-01",
          transactionType: "payment",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingBankFeedStatementsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingBankFeedStatementsUpdateRequest](../../models/operations/accountingbankfeedstatementsupdaterequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingBankFeedStatementsUpdateResponse](../../models/operations/accountingbankfeedstatementsupdateresponse.md)\>**

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

Delete Bank Feed Statement

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.bankFeedStatementsDelete" method="delete" path="/accounting/bank-feed-statements/{id}" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.bankFeedStatements.delete({
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
import { accountingBankFeedStatementsDelete } from "@apideck/unify/funcs/accountingBankFeedStatementsDelete.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingBankFeedStatementsDelete(apideck, {
    id: "<id>",
    serviceId: "salesforce",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingBankFeedStatementsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingBankFeedStatementsDeleteRequest](../../models/operations/accountingbankfeedstatementsdeleterequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingBankFeedStatementsDeleteResponse](../../models/operations/accountingbankfeedstatementsdeleteresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |