# Accounting.GoodsReceipts

## Overview

### Available Operations

* [list](#list) - List Goods Receipts
* [create](#create) - Create Goods Receipt
* [get](#get) - Get Goods Receipt

## list

List Goods Receipts

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.goodsReceiptsAll" method="get" path="/accounting/goods-receipts" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.goodsReceipts.list({
    serviceId: "salesforce",
    companyId: "12345",
    filter: {
      updatedSince: new Date("2026-09-01T07:43:32.000Z"),
      supplierId: "123abc",
      purchaseOrderId: "123456",
    },
    sort: {
      by: "updated_at",
      direction: "desc",
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

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "@apideck/unify/core.js";
import { accountingGoodsReceiptsList } from "@apideck/unify/funcs/accountingGoodsReceiptsList.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingGoodsReceiptsList(apideck, {
    serviceId: "salesforce",
    companyId: "12345",
    filter: {
      updatedSince: new Date("2026-09-01T07:43:32.000Z"),
      supplierId: "123abc",
      purchaseOrderId: "123456",
    },
    sort: {
      by: "updated_at",
      direction: "desc",
    },
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
    console.log("accountingGoodsReceiptsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingGoodsReceiptsAllRequest](../../models/operations/accountinggoodsreceiptsallrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingGoodsReceiptsAllResponse](../../models/operations/accountinggoodsreceiptsallresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.BadRequestResponse       | 400                             | application/json                |
| errors.UnauthorizedResponse     | 401                             | application/json                |
| errors.PaymentRequiredResponse  | 402                             | application/json                |
| errors.NotFoundResponse         | 404                             | application/json                |
| errors.MethodNotAllowedResponse | 405                             | application/json                |
| errors.UnprocessableResponse    | 422                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## create

Create a Goods Receipt against a purchase order. `purchase_order_id` is required and every line names the purchase order line it receives against; a receipt that is not tied to a purchase order cannot be created. The response returns the `id` of the new receipt only: read it with `GET /accounting/goods-receipts/{id}` to see the posted document.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.goodsReceiptsAdd" method="post" path="/accounting/goods-receipts" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.goodsReceipts.create({
    serviceId: "salesforce",
    companyId: "12345",
    goodsReceiptCreateInput: {
      purchaseOrderId: "4500000004",
      receivedDate: new Date("2026-09-01"),
      postedDate: new Date("2026-09-01"),
      reference: "DN-78910",
      notes: "Partial delivery, remainder expected next week.",
      locationId: "1710/171A",
      lineItems: [],
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
import { accountingGoodsReceiptsCreate } from "@apideck/unify/funcs/accountingGoodsReceiptsCreate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingGoodsReceiptsCreate(apideck, {
    serviceId: "salesforce",
    companyId: "12345",
    goodsReceiptCreateInput: {
      purchaseOrderId: "4500000004",
      receivedDate: new Date("2026-09-01"),
      postedDate: new Date("2026-09-01"),
      reference: "DN-78910",
      notes: "Partial delivery, remainder expected next week.",
      locationId: "1710/171A",
      lineItems: [],
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
    console.log("accountingGoodsReceiptsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingGoodsReceiptsAddRequest](../../models/operations/accountinggoodsreceiptsaddrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingGoodsReceiptsAddResponse](../../models/operations/accountinggoodsreceiptsaddresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.BadRequestResponse       | 400                             | application/json                |
| errors.UnauthorizedResponse     | 401                             | application/json                |
| errors.PaymentRequiredResponse  | 402                             | application/json                |
| errors.NotFoundResponse         | 404                             | application/json                |
| errors.MethodNotAllowedResponse | 405                             | application/json                |
| errors.UnprocessableResponse    | 422                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## get

Get Goods Receipt

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.goodsReceiptsOne" method="get" path="/accounting/goods-receipts/{id}" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.goodsReceipts.get({
    id: "<id>",
    serviceId: "salesforce",
    companyId: "12345",
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
import { accountingGoodsReceiptsGet } from "@apideck/unify/funcs/accountingGoodsReceiptsGet.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingGoodsReceiptsGet(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    companyId: "12345",
    fields: "id,updated_at",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingGoodsReceiptsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingGoodsReceiptsOneRequest](../../models/operations/accountinggoodsreceiptsonerequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingGoodsReceiptsOneResponse](../../models/operations/accountinggoodsreceiptsoneresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.BadRequestResponse       | 400                             | application/json                |
| errors.UnauthorizedResponse     | 401                             | application/json                |
| errors.PaymentRequiredResponse  | 402                             | application/json                |
| errors.NotFoundResponse         | 404                             | application/json                |
| errors.MethodNotAllowedResponse | 405                             | application/json                |
| errors.UnprocessableResponse    | 422                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |