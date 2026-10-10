# Accounting.SalesOrders

## Overview

### Available Operations

* [list](#list) - List Sales Orders
* [create](#create) - Create Sales Order
* [get](#get) - Get Sales Order
* [update](#update) - Update Sales Order
* [delete](#delete) - Delete Sales Order

## list

List Sales Orders

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.salesOrdersAll" method="get" path="/accounting/sales-orders" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.salesOrders.list({
    serviceId: "salesforce",
    companyId: "12345",
    filter: {
      updatedSince: new Date("2020-09-30T07:43:32.000Z"),
      createdSince: new Date("2020-09-30T07:43:32.000Z"),
      number: "SO000123",
      customerId: "123abc",
    },
    passThrough: {
      "search": "San Francisco",
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
import { accountingSalesOrdersList } from "@apideck/unify/funcs/accountingSalesOrdersList.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingSalesOrdersList(apideck, {
    serviceId: "salesforce",
    companyId: "12345",
    filter: {
      updatedSince: new Date("2020-09-30T07:43:32.000Z"),
      createdSince: new Date("2020-09-30T07:43:32.000Z"),
      number: "SO000123",
      customerId: "123abc",
    },
    passThrough: {
      "search": "San Francisco",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("accountingSalesOrdersList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingSalesOrdersAllRequest](../../models/operations/accountingsalesordersallrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingSalesOrdersAllResponse](../../models/operations/accountingsalesordersallresponse.md)\>**

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

Create Sales Order

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.salesOrdersAdd" method="post" path="/accounting/sales-orders" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.salesOrders.create({
    serviceId: "salesforce",
    companyId: "12345",
    salesOrder: {
      number: "SO000123",
      customer: {
        id: "12345",
        displayName: "Windsurf Shop",
        email: "boring@boring.com",
      },
      quoteId: "123456",
      companyId: "12345",
      departmentId: "12345",
      locationId: "12345",
      projectId: "12345",
      subsidiaryId: "12345",
      orderDate: new Date("2020-09-30"),
      deliveryDate: new Date("2020-10-15"),
      orderType: "SO",
      terms: "Net 30",
      termsId: "12345",
      poNumber: "90000117",
      reference: "INV-2024-001",
      status: "open",
      currency: "USD",
      currencyRate: 0.69,
      taxInclusive: true,
      subTotal: 27500,
      totalTax: 2500,
      taxCode: "1234",
      discountPercentage: 5.5,
      discountAmount: 25,
      total: 30000,
      shippingMethod: "FEDEX",
      paymentMethod: "cash",
      customerMemo: "Thank you for your order!",
      notes: "Ship with next consignment",
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
              refName: "Marketing",
              description: "Employee Level",
              value: "Uses Salesforce and Marketo",
            },
          ],
          rowVersion: "1-12345",
        },
      ],
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
      trackingCategories: [
        {
          id: "123456",
          code: "100",
          name: "New York",
          parentId: "123456",
          parentName: "New York",
        },
      ],
      templateId: "123456",
      sourceDocumentUrl: "https://www.ordersolution.com/order/123456",
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          refName: "Marketing",
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
import { accountingSalesOrdersCreate } from "@apideck/unify/funcs/accountingSalesOrdersCreate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingSalesOrdersCreate(apideck, {
    serviceId: "salesforce",
    companyId: "12345",
    salesOrder: {
      number: "SO000123",
      customer: {
        id: "12345",
        displayName: "Windsurf Shop",
        email: "boring@boring.com",
      },
      quoteId: "123456",
      companyId: "12345",
      departmentId: "12345",
      locationId: "12345",
      projectId: "12345",
      subsidiaryId: "12345",
      orderDate: new Date("2020-09-30"),
      deliveryDate: new Date("2020-10-15"),
      orderType: "SO",
      terms: "Net 30",
      termsId: "12345",
      poNumber: "90000117",
      reference: "INV-2024-001",
      status: "open",
      currency: "USD",
      currencyRate: 0.69,
      taxInclusive: true,
      subTotal: 27500,
      totalTax: 2500,
      taxCode: "1234",
      discountPercentage: 5.5,
      discountAmount: 25,
      total: 30000,
      shippingMethod: "FEDEX",
      paymentMethod: "cash",
      customerMemo: "Thank you for your order!",
      notes: "Ship with next consignment",
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
              refName: "Marketing",
              description: "Employee Level",
              value: "Uses Salesforce and Marketo",
            },
          ],
          rowVersion: "1-12345",
        },
      ],
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
      trackingCategories: [
        {
          id: "123456",
          code: "100",
          name: "New York",
          parentId: "123456",
          parentName: "New York",
        },
      ],
      templateId: "123456",
      sourceDocumentUrl: "https://www.ordersolution.com/order/123456",
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          refName: "Marketing",
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
    console.log("accountingSalesOrdersCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingSalesOrdersAddRequest](../../models/operations/accountingsalesordersaddrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingSalesOrdersAddResponse](../../models/operations/accountingsalesordersaddresponse.md)\>**

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

Get Sales Order

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.salesOrdersOne" method="get" path="/accounting/sales-orders/{id}" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.salesOrders.get({
    id: "<id>",
    serviceId: "salesforce",
    companyId: "12345",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "@apideck/unify/core.js";
import { accountingSalesOrdersGet } from "@apideck/unify/funcs/accountingSalesOrdersGet.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingSalesOrdersGet(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    companyId: "12345",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingSalesOrdersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingSalesOrdersOneRequest](../../models/operations/accountingsalesordersonerequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingSalesOrdersOneResponse](../../models/operations/accountingsalesordersoneresponse.md)\>**

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

Update Sales Order

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.salesOrdersUpdate" method="patch" path="/accounting/sales-orders/{id}" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.salesOrders.update({
    id: "<id>",
    serviceId: "salesforce",
    companyId: "12345",
    salesOrder: {
      number: "SO000123",
      customer: {
        id: "12345",
        displayName: "Windsurf Shop",
        email: "boring@boring.com",
      },
      quoteId: "123456",
      companyId: "12345",
      departmentId: "12345",
      locationId: "12345",
      projectId: "12345",
      subsidiaryId: "12345",
      orderDate: new Date("2020-09-30"),
      deliveryDate: new Date("2020-10-15"),
      orderType: "SO",
      terms: "Net 30",
      termsId: "12345",
      poNumber: "90000117",
      reference: "INV-2024-001",
      status: "open",
      currency: "USD",
      currencyRate: 0.69,
      taxInclusive: true,
      subTotal: 27500,
      totalTax: 2500,
      taxCode: "1234",
      discountPercentage: 5.5,
      discountAmount: 25,
      total: 30000,
      shippingMethod: "FEDEX",
      paymentMethod: "cash",
      customerMemo: "Thank you for your order!",
      notes: "Ship with next consignment",
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
              refName: "Marketing",
              description: "Employee Level",
              value: "Uses Salesforce and Marketo",
            },
          ],
          rowVersion: "1-12345",
        },
      ],
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
      trackingCategories: [
        {
          id: "123456",
          code: "100",
          name: "New York",
          parentId: "123456",
          parentName: "New York",
        },
      ],
      templateId: "123456",
      sourceDocumentUrl: "https://www.ordersolution.com/order/123456",
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          refName: "Marketing",
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
import { accountingSalesOrdersUpdate } from "@apideck/unify/funcs/accountingSalesOrdersUpdate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingSalesOrdersUpdate(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    companyId: "12345",
    salesOrder: {
      number: "SO000123",
      customer: {
        id: "12345",
        displayName: "Windsurf Shop",
        email: "boring@boring.com",
      },
      quoteId: "123456",
      companyId: "12345",
      departmentId: "12345",
      locationId: "12345",
      projectId: "12345",
      subsidiaryId: "12345",
      orderDate: new Date("2020-09-30"),
      deliveryDate: new Date("2020-10-15"),
      orderType: "SO",
      terms: "Net 30",
      termsId: "12345",
      poNumber: "90000117",
      reference: "INV-2024-001",
      status: "open",
      currency: "USD",
      currencyRate: 0.69,
      taxInclusive: true,
      subTotal: 27500,
      totalTax: 2500,
      taxCode: "1234",
      discountPercentage: 5.5,
      discountAmount: 25,
      total: 30000,
      shippingMethod: "FEDEX",
      paymentMethod: "cash",
      customerMemo: "Thank you for your order!",
      notes: "Ship with next consignment",
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
              refName: "Marketing",
              description: "Employee Level",
              value: "Uses Salesforce and Marketo",
            },
          ],
          rowVersion: "1-12345",
        },
      ],
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
      trackingCategories: [
        {
          id: "123456",
          code: "100",
          name: "New York",
          parentId: "123456",
          parentName: "New York",
        },
      ],
      templateId: "123456",
      sourceDocumentUrl: "https://www.ordersolution.com/order/123456",
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          refName: "Marketing",
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
    console.log("accountingSalesOrdersUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingSalesOrdersUpdateRequest](../../models/operations/accountingsalesordersupdaterequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingSalesOrdersUpdateResponse](../../models/operations/accountingsalesordersupdateresponse.md)\>**

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

Delete Sales Order

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accounting.salesOrdersDelete" method="delete" path="/accounting/sales-orders/{id}" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.accounting.salesOrders.delete({
    id: "<id>",
    serviceId: "salesforce",
    companyId: "12345",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "@apideck/unify/core.js";
import { accountingSalesOrdersDelete } from "@apideck/unify/funcs/accountingSalesOrdersDelete.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await accountingSalesOrdersDelete(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    companyId: "12345",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingSalesOrdersDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountingSalesOrdersDeleteRequest](../../models/operations/accountingsalesordersdeleterequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountingSalesOrdersDeleteResponse](../../models/operations/accountingsalesordersdeleteresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |