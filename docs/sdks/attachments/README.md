# Attachments
(*accounting.attachments*)

## Overview

### Available Operations

* [list](#list) - List Attachments
* [upload](#upload) - Upload attachment
* [get](#get) - Get Attachment
* [delete](#delete) - Delete Attachment
* [download](#download) - Download Attachment

## list

List Attachments

### Example Usage

```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.attachments.list({
    referenceType: "invoice",
    referenceId: "123456",
    serviceId: "salesforce",
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
import { accountingAttachmentsList } from "@apideck/unify/funcs/accountingAttachmentsList.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingAttachmentsList(apideck, {
    referenceType: "invoice",
    referenceId: "123456",
    serviceId: "salesforce",
    fields: "id,updated_at",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("accountingAttachmentsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingAttachmentsAllRequest](../../models/operations/accountingattachmentsallrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingAttachmentsAllResponse](../../models/operations/accountingattachmentsallresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## upload

Upload attachment

### Example Usage

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
    xApideckMetadata: "{\"name\":\"document.pdf\",\"description\":\"Invoice attachment\"}",
    serviceId: "salesforce",
    requestBody: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "@apideck/unify/core.js";
import { accountingAttachmentsUpload } from "@apideck/unify/funcs/accountingAttachmentsUpload.js";
import { openAsBlob } from "node:fs";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingAttachmentsUpload(apideck, {
    referenceType: "invoice",
    referenceId: "123456",
    xApideckMetadata: "{\"name\":\"document.pdf\",\"description\":\"Invoice attachment\"}",
    serviceId: "salesforce",
    requestBody: await openAsBlob("example.file"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingAttachmentsUpload failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingAttachmentsUploadRequest](../../models/operations/accountingattachmentsuploadrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.AccountingAttachmentsUploadResponse](../../models/operations/accountingattachmentsuploadresponse.md)\>**

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

Get Attachment

### Example Usage

```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.attachments.get({
    referenceType: "invoice",
    referenceId: "123456",
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
import { accountingAttachmentsGet } from "@apideck/unify/funcs/accountingAttachmentsGet.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingAttachmentsGet(apideck, {
    referenceType: "invoice",
    referenceId: "123456",
    id: "<id>",
    serviceId: "salesforce",
    fields: "id,updated_at",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingAttachmentsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingAttachmentsOneRequest](../../models/operations/accountingattachmentsonerequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingAttachmentsOneResponse](../../models/operations/accountingattachmentsoneresponse.md)\>**

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

Delete Attachment

### Example Usage

```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.attachments.delete({
    referenceType: "invoice",
    referenceId: "123456",
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
import { accountingAttachmentsDelete } from "@apideck/unify/funcs/accountingAttachmentsDelete.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingAttachmentsDelete(apideck, {
    referenceType: "invoice",
    referenceId: "123456",
    id: "<id>",
    serviceId: "salesforce",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingAttachmentsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingAttachmentsDeleteRequest](../../models/operations/accountingattachmentsdeleterequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingAttachmentsDeleteResponse](../../models/operations/accountingattachmentsdeleteresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## download

Download Attachment

### Example Usage

```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.attachments.download({
    referenceType: "invoice",
    referenceId: "123456",
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
import { accountingAttachmentsDownload } from "@apideck/unify/funcs/accountingAttachmentsDownload.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingAttachmentsDownload(apideck, {
    referenceType: "invoice",
    referenceId: "123456",
    id: "<id>",
    serviceId: "salesforce",
    fields: "id,updated_at",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingAttachmentsDownload failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingAttachmentsDownloadRequest](../../models/operations/accountingattachmentsdownloadrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingAttachmentsDownloadResponse](../../models/operations/accountingattachmentsdownloadresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |