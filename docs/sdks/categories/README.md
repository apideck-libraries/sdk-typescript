# Categories
(*accounting.categories*)

## Overview

### Available Operations

* [list](#list) - List Categories
* [get](#get) - Get Category

## list

List Categories

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.categoriesAll" method="get" path="/accounting/categories" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.categories.list({
    serviceId: "salesforce",
    fields: "id,updated_at",
    filter: {
      type: "expense",
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
import { accountingCategoriesList } from "@apideck/unify/funcs/accountingCategoriesList.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingCategoriesList(apideck, {
    serviceId: "salesforce",
    fields: "id,updated_at",
    filter: {
      type: "expense",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("accountingCategoriesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingCategoriesAllRequest](../../models/operations/accountingcategoriesallrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingCategoriesAllResponse](../../models/operations/accountingcategoriesallresponse.md)\>**

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

Get Category

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.categoriesOne" method="get" path="/accounting/categories/{id}" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.categories.get({
    id: "<id>",
    serviceId: "salesforce",
    fields: "id,updated_at",
    filter: {
      type: "expense",
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
import { accountingCategoriesGet } from "@apideck/unify/funcs/accountingCategoriesGet.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingCategoriesGet(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    fields: "id,updated_at",
    filter: {
      type: "expense",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingCategoriesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingCategoriesOneRequest](../../models/operations/accountingcategoriesonerequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingCategoriesOneResponse](../../models/operations/accountingcategoriesoneresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |