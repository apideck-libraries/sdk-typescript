# Accounting.Refunds

## Overview

### Available Operations

* [list](#list) - List Refunds
* [create](#create) - Create Refund
* [get](#get) - Get Refund
* [update](#update) - Update Refund
* [delete](#delete) - Delete Refund

## list

List Refunds

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.refundsAll" method="get" path="/accounting/refunds" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.refunds.list({
    serviceId: "salesforce",
    filter: {
      updatedSince: new Date("2020-09-30T07:43:32.000Z"),
      customerId: "123abc",
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
import { accountingRefundsList } from "@apideck/unify/funcs/accountingRefundsList.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingRefundsList(apideck, {
    serviceId: "salesforce",
    filter: {
      updatedSince: new Date("2020-09-30T07:43:32.000Z"),
      customerId: "123abc",
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
    console.log("accountingRefundsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingRefundsAllRequest](../../models/operations/accountingrefundsallrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingRefundsAllResponse](../../models/operations/accountingrefundsallresponse.md)\>**

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

Create Refund

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.refundsAdd" method="post" path="/accounting/refunds" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.refunds.create({
    serviceId: "salesforce",
    refund: {
      number: "RF-00001",
      customer: null,
      companyId: "12345",
      currency: "USD",
      currencyRate: 0.69,
      taxInclusive: true,
      subTotal: 250,
      totalAmount: 49.99,
      totalTax: 25,
      refundDate: new Date("2021-05-01T12:00:00.000Z"),
      status: "paid",
      type: "refund_receipt",
      paymentMethod: "cash",
      paymentMethodReference: "123456",
      paymentMethodId: "12345",
      account: {
        id: "123456",
        name: "Bank account",
        nominalCode: "N091",
        code: "453",
        parentId: "123456",
        displayId: "123456",
      },
      lineItems: [
        {
          id: "12345",
          rowId: "12345",
          code: "120-C",
          lineNumber: 1,
          description: "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
          type: "sales_item",
          taxAmount: 27500,
          totalAmount: 27500,
          quantity: 1,
          unitPrice: 27500.5,
          unitOfMeasure: "pc.",
          discountPercentage: 0.01,
          discountAmount: 19.99,
          serviceDate: new Date("2024-01-15"),
          categoryId: "12345",
          locationId: "12345",
          departmentId: "12345",
          subsidiaryId: "12345",
          shippingId: "12345",
          memo: "Some memo",
          prepaid: true,
          item: {
            id: "12344",
            code: "120-C",
            name: "Model Y",
          },
          taxApplicableOn: "Domestic_Purchase_of_Goods_and_Services",
          taxRecoverability: "Fully_Recoverable",
          taxMethod: "Due_to_Supplier",
          worktags: [
            {
              id: "123456",
              value: "New York",
            },
          ],
          taxRate: {
            id: "123456",
            code: "N-T",
            rate: 10,
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
          ledgerAccount: {
            id: "123456",
            name: "Bank account",
            nominalCode: "N091",
            code: "453",
            parentId: "123456",
            displayId: "123456",
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
        },
      ],
      allocations: [
        {
          id: "123456",
          amount: 49.99,
          allocationId: "123456",
        },
      ],
      taxCode: "1234",
      discountPercentage: 5.5,
      discountAmount: 25,
      note: "Refund for returned items",
      customerMemo: "Thank you for your business and have a great day!",
      reference: "REF-123456",
      billingAddress: {
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
      shippingAddress: {
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
      department: {
        displayId: "123456",
        name: "Acme Inc.",
      },
      location: {
        id: "123456",
        displayId: "123456",
        name: "New York Office",
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
import { accountingRefundsCreate } from "@apideck/unify/funcs/accountingRefundsCreate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingRefundsCreate(apideck, {
    serviceId: "salesforce",
    refund: {
      number: "RF-00001",
      customer: null,
      companyId: "12345",
      currency: "USD",
      currencyRate: 0.69,
      taxInclusive: true,
      subTotal: 250,
      totalAmount: 49.99,
      totalTax: 25,
      refundDate: new Date("2021-05-01T12:00:00.000Z"),
      status: "paid",
      type: "refund_receipt",
      paymentMethod: "cash",
      paymentMethodReference: "123456",
      paymentMethodId: "12345",
      account: {
        id: "123456",
        name: "Bank account",
        nominalCode: "N091",
        code: "453",
        parentId: "123456",
        displayId: "123456",
      },
      lineItems: [
        {
          id: "12345",
          rowId: "12345",
          code: "120-C",
          lineNumber: 1,
          description: "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
          type: "sales_item",
          taxAmount: 27500,
          totalAmount: 27500,
          quantity: 1,
          unitPrice: 27500.5,
          unitOfMeasure: "pc.",
          discountPercentage: 0.01,
          discountAmount: 19.99,
          serviceDate: new Date("2024-01-15"),
          categoryId: "12345",
          locationId: "12345",
          departmentId: "12345",
          subsidiaryId: "12345",
          shippingId: "12345",
          memo: "Some memo",
          prepaid: true,
          item: {
            id: "12344",
            code: "120-C",
            name: "Model Y",
          },
          taxApplicableOn: "Domestic_Purchase_of_Goods_and_Services",
          taxRecoverability: "Fully_Recoverable",
          taxMethod: "Due_to_Supplier",
          worktags: [
            {
              id: "123456",
              value: "New York",
            },
          ],
          taxRate: {
            id: "123456",
            code: "N-T",
            rate: 10,
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
          ledgerAccount: {
            id: "123456",
            name: "Bank account",
            nominalCode: "N091",
            code: "453",
            parentId: "123456",
            displayId: "123456",
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
        },
      ],
      allocations: [
        {
          id: "123456",
          amount: 49.99,
          allocationId: "123456",
        },
      ],
      taxCode: "1234",
      discountPercentage: 5.5,
      discountAmount: 25,
      note: "Refund for returned items",
      customerMemo: "Thank you for your business and have a great day!",
      reference: "REF-123456",
      billingAddress: {
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
      shippingAddress: {
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
      department: {
        displayId: "123456",
        name: "Acme Inc.",
      },
      location: {
        id: "123456",
        displayId: "123456",
        name: "New York Office",
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
    console.log("accountingRefundsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingRefundsAddRequest](../../models/operations/accountingrefundsaddrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingRefundsAddResponse](../../models/operations/accountingrefundsaddresponse.md)\>**

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

Get Refund

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.refundsOne" method="get" path="/accounting/refunds/{id}" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.refunds.get({
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
import { accountingRefundsGet } from "@apideck/unify/funcs/accountingRefundsGet.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingRefundsGet(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    fields: "id,updated_at",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingRefundsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingRefundsOneRequest](../../models/operations/accountingrefundsonerequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingRefundsOneResponse](../../models/operations/accountingrefundsoneresponse.md)\>**

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

Update Refund

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.refundsUpdate" method="patch" path="/accounting/refunds/{id}" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.refunds.update({
    id: "<id>",
    serviceId: "salesforce",
    refund: {
      number: "RF-00001",
      customer: {
        id: "12345",
        displayName: "Windsurf Shop",
        email: "boring@boring.com",
      },
      companyId: "12345",
      currency: "USD",
      currencyRate: 0.69,
      taxInclusive: true,
      subTotal: 250,
      totalAmount: 49.99,
      totalTax: 25,
      refundDate: new Date("2021-05-01T12:00:00.000Z"),
      status: "paid",
      type: "refund_receipt",
      paymentMethod: "cash",
      paymentMethodReference: "123456",
      paymentMethodId: "12345",
      account: {
        id: "123456",
        name: "Bank account",
        nominalCode: "N091",
        code: "453",
        parentId: "123456",
        displayId: "123456",
      },
      lineItems: [
        {
          id: "12345",
          rowId: "12345",
          code: "120-C",
          lineNumber: 1,
          description: "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
          type: "sales_item",
          taxAmount: 27500,
          totalAmount: 27500,
          quantity: 1,
          unitPrice: 27500.5,
          unitOfMeasure: "pc.",
          discountPercentage: 0.01,
          discountAmount: 19.99,
          serviceDate: new Date("2024-01-15"),
          categoryId: "12345",
          locationId: "12345",
          departmentId: "12345",
          subsidiaryId: "12345",
          shippingId: "12345",
          memo: "Some memo",
          prepaid: true,
          item: {
            id: "12344",
            code: "120-C",
            name: "Model Y",
          },
          taxApplicableOn: "Domestic_Purchase_of_Goods_and_Services",
          taxRecoverability: "Fully_Recoverable",
          taxMethod: "Due_to_Supplier",
          worktags: [
            {
              id: "123456",
              value: "New York",
            },
          ],
          taxRate: {
            id: "123456",
            code: "N-T",
            rate: 10,
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
          ledgerAccount: {
            id: "123456",
            name: "Bank account",
            nominalCode: "N091",
            code: "453",
            parentId: "123456",
            displayId: "123456",
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
        },
      ],
      allocations: [
        {
          id: "123456",
          amount: 49.99,
          allocationId: "123456",
        },
      ],
      taxCode: "1234",
      discountPercentage: 5.5,
      discountAmount: 25,
      note: "Refund for returned items",
      customerMemo: "Thank you for your business and have a great day!",
      reference: "REF-123456",
      billingAddress: {
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
      shippingAddress: {
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
      department: {
        displayId: "123456",
        name: "Acme Inc.",
      },
      location: {
        id: "123456",
        displayId: "123456",
        name: "New York Office",
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
import { accountingRefundsUpdate } from "@apideck/unify/funcs/accountingRefundsUpdate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingRefundsUpdate(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    refund: {
      number: "RF-00001",
      customer: {
        id: "12345",
        displayName: "Windsurf Shop",
        email: "boring@boring.com",
      },
      companyId: "12345",
      currency: "USD",
      currencyRate: 0.69,
      taxInclusive: true,
      subTotal: 250,
      totalAmount: 49.99,
      totalTax: 25,
      refundDate: new Date("2021-05-01T12:00:00.000Z"),
      status: "paid",
      type: "refund_receipt",
      paymentMethod: "cash",
      paymentMethodReference: "123456",
      paymentMethodId: "12345",
      account: {
        id: "123456",
        name: "Bank account",
        nominalCode: "N091",
        code: "453",
        parentId: "123456",
        displayId: "123456",
      },
      lineItems: [
        {
          id: "12345",
          rowId: "12345",
          code: "120-C",
          lineNumber: 1,
          description: "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
          type: "sales_item",
          taxAmount: 27500,
          totalAmount: 27500,
          quantity: 1,
          unitPrice: 27500.5,
          unitOfMeasure: "pc.",
          discountPercentage: 0.01,
          discountAmount: 19.99,
          serviceDate: new Date("2024-01-15"),
          categoryId: "12345",
          locationId: "12345",
          departmentId: "12345",
          subsidiaryId: "12345",
          shippingId: "12345",
          memo: "Some memo",
          prepaid: true,
          item: {
            id: "12344",
            code: "120-C",
            name: "Model Y",
          },
          taxApplicableOn: "Domestic_Purchase_of_Goods_and_Services",
          taxRecoverability: "Fully_Recoverable",
          taxMethod: "Due_to_Supplier",
          worktags: [
            {
              id: "123456",
              value: "New York",
            },
          ],
          taxRate: {
            id: "123456",
            code: "N-T",
            rate: 10,
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
          ledgerAccount: {
            id: "123456",
            name: "Bank account",
            nominalCode: "N091",
            code: "453",
            parentId: "123456",
            displayId: "123456",
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
        },
      ],
      allocations: [
        {
          id: "123456",
          amount: 49.99,
          allocationId: "123456",
        },
      ],
      taxCode: "1234",
      discountPercentage: 5.5,
      discountAmount: 25,
      note: "Refund for returned items",
      customerMemo: "Thank you for your business and have a great day!",
      reference: "REF-123456",
      billingAddress: {
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
      shippingAddress: {
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
      department: {
        displayId: "123456",
        name: "Acme Inc.",
      },
      location: {
        id: "123456",
        displayId: "123456",
        name: "New York Office",
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
    console.log("accountingRefundsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingRefundsUpdateRequest](../../models/operations/accountingrefundsupdaterequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingRefundsUpdateResponse](../../models/operations/accountingrefundsupdateresponse.md)\>**

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

Delete Refund

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.refundsDelete" method="delete" path="/accounting/refunds/{id}" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.refunds.delete({
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
import { accountingRefundsDelete } from "@apideck/unify/funcs/accountingRefundsDelete.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingRefundsDelete(apideck, {
    id: "<id>",
    serviceId: "salesforce",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingRefundsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingRefundsDeleteRequest](../../models/operations/accountingrefundsdeleterequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingRefundsDeleteResponse](../../models/operations/accountingrefundsdeleteresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |