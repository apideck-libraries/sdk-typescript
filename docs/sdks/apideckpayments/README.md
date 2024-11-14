# ApideckPayments
(*pos.payments*)

## Overview

### Available Operations

* [list](#list) - List Payments
* [create](#create) - Create Payment
* [get](#get) - Get Payment
* [update](#update) - Update Payment
* [delete](#delete) - Delete Payment

## list

List Payments

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.payments.list({
    serviceId: "salesforce",
    fields: "id,updated_at",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "apideck/core.js";
import { posPaymentsList } from "apideck/funcs/posPaymentsList.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPaymentsList(apideck, {
    serviceId: "salesforce",
    fields: "id,updated_at",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PosPaymentsAllRequest](../../models/operations/pospaymentsallrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosPaymentsAllResponse](../../models/operations/pospaymentsallresponse.md)\>**

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

Create Payment

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.payments.create({
    serviceId: "salesforce",
    posPayment: {
      sourceId: "12345",
      orderId: "12345",
      merchantId: "12345",
      customerId: "12345",
      employeeId: "12345",
      locationId: "12345",
      deviceId: "12345",
      tenderId: "12345",
      externalPaymentId: "12345",
      idempotencyKey: "random_string",
      amount: 27.5,
      currency: "USD",
      tip: 7,
      tax: 20,
      total: 37.5,
      appFee: 3,
      changeBackCashAmount: 20,
      approved: 37.5,
      refunded: 37.5,
      processingFees: [
        {
          amount: 1.05,
          effectiveAt: new Date("2020-09-30T07:43:32.000Z"),
          processingType: "initial",
        },
      ],
      source: "external",
      status: "approved",
      cardDetails: {
        card: {
          bin: "41111",
          cardType: "credit",
          prepaidType: "prepaid",
          cardholderName: "John Doe",
          customerId: "12345",
          merchantId: "12345",
          expMonth: 1,
          expYear: 2022,
          fingerprint: " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
          last4: "The last 4 digits of the card number.",
          enabled: true,
          billingAddress: {
            id: "123",
            type: "primary",
            string: "25 Spring Street, Blackburn, VIC 3130",
            name: "HQ US",
            line1: "Main street",
            line2: "apt #",
            line3: "Suite #",
            line4: "delivery instructions",
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
          referenceId: "card-001",
          version: "230320320320",
        },
      },
      bankAccount: {
        country: "US",
      },
      externalDetails: {
        type: "bank_transfer",
        source: "<value>",
        sourceFeeAmount: 2.5,
      },
      serviceCharges: [
        {
          name: "Charge for delivery",
          amount: 27500,
          percentage: 12.5,
          currency: "USD",
          active: true,
        },
      ],
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
            {
              path: "$.nested.property",
              value: {
                "TaxClassificationRef": {
                  "value": "EUC-99990201-V1-00020000",
                },
              },
            },
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
            {
              path: "$.nested.property",
              value: {
                "TaxClassificationRef": {
                  "value": "EUC-99990201-V1-00020000",
                },
              },
            },
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

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "apideck/core.js";
import { posPaymentsCreate } from "apideck/funcs/posPaymentsCreate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPaymentsCreate(apideck, {
    serviceId: "salesforce",
    posPayment: {
      sourceId: "12345",
      orderId: "12345",
      merchantId: "12345",
      customerId: "12345",
      employeeId: "12345",
      locationId: "12345",
      deviceId: "12345",
      tenderId: "12345",
      externalPaymentId: "12345",
      idempotencyKey: "random_string",
      amount: 27.5,
      currency: "USD",
      tip: 7,
      tax: 20,
      total: 37.5,
      appFee: 3,
      changeBackCashAmount: 20,
      approved: 37.5,
      refunded: 37.5,
      processingFees: [
        {
          amount: 1.05,
          effectiveAt: new Date("2020-09-30T07:43:32.000Z"),
          processingType: "initial",
        },
      ],
      source: "external",
      status: "approved",
      cardDetails: {
        card: {
          bin: "41111",
          cardType: "credit",
          prepaidType: "prepaid",
          cardholderName: "John Doe",
          customerId: "12345",
          merchantId: "12345",
          expMonth: 1,
          expYear: 2022,
          fingerprint: " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
          last4: "The last 4 digits of the card number.",
          enabled: true,
          billingAddress: {
            id: "123",
            type: "primary",
            string: "25 Spring Street, Blackburn, VIC 3130",
            name: "HQ US",
            line1: "Main street",
            line2: "apt #",
            line3: "Suite #",
            line4: "delivery instructions",
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
          referenceId: "card-001",
          version: "230320320320",
        },
      },
      bankAccount: {
        country: "US",
      },
      externalDetails: {
        type: "bank_transfer",
        source: "<value>",
        sourceFeeAmount: 2.5,
      },
      serviceCharges: [
        {
          name: "Charge for delivery",
          amount: 27500,
          percentage: 12.5,
          currency: "USD",
          active: true,
        },
      ],
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
            {
              path: "$.nested.property",
              value: {
                "TaxClassificationRef": {
                  "value": "EUC-99990201-V1-00020000",
                },
              },
            },
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
            {
              path: "$.nested.property",
              value: {
                "TaxClassificationRef": {
                  "value": "EUC-99990201-V1-00020000",
                },
              },
            },
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

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PosPaymentsAddRequest](../../models/operations/pospaymentsaddrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosPaymentsAddResponse](../../models/operations/pospaymentsaddresponse.md)\>**

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

Get Payment

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.payments.get({
    id: "<id>",
    serviceId: "salesforce",
    fields: "id,updated_at",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "apideck/core.js";
import { posPaymentsGet } from "apideck/funcs/posPaymentsGet.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPaymentsGet(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    fields: "id,updated_at",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PosPaymentsOneRequest](../../models/operations/pospaymentsonerequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosPaymentsOneResponse](../../models/operations/pospaymentsoneresponse.md)\>**

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

Update Payment

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.payments.update({
    id: "<id>",
    serviceId: "salesforce",
    posPayment: {
      sourceId: "12345",
      orderId: "12345",
      merchantId: "12345",
      customerId: "12345",
      employeeId: "12345",
      locationId: "12345",
      deviceId: "12345",
      tenderId: "12345",
      externalPaymentId: "12345",
      idempotencyKey: "random_string",
      amount: 27.5,
      currency: "USD",
      tip: 7,
      tax: 20,
      total: 37.5,
      appFee: 3,
      changeBackCashAmount: 20,
      approved: 37.5,
      refunded: 37.5,
      processingFees: [
        {
          amount: 1.05,
          effectiveAt: new Date("2020-09-30T07:43:32.000Z"),
          processingType: "initial",
        },
      ],
      source: "external",
      status: "approved",
      cardDetails: {
        card: {
          bin: "41111",
          cardType: "credit",
          prepaidType: "prepaid",
          cardholderName: "John Doe",
          customerId: "12345",
          merchantId: "12345",
          expMonth: 1,
          expYear: 2022,
          fingerprint: " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
          last4: "The last 4 digits of the card number.",
          enabled: true,
          billingAddress: {
            id: "123",
            type: "primary",
            string: "25 Spring Street, Blackburn, VIC 3130",
            name: "HQ US",
            line1: "Main street",
            line2: "apt #",
            line3: "Suite #",
            line4: "delivery instructions",
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
          referenceId: "card-001",
          version: "230320320320",
        },
      },
      bankAccount: {
        country: "US",
      },
      externalDetails: {
        type: "stored_balance",
        source: "<value>",
        sourceFeeAmount: 2.5,
      },
      serviceCharges: [
        {
          name: "Charge for delivery",
          amount: 27500,
          percentage: 12.5,
          currency: "USD",
          active: true,
        },
      ],
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

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "apideck/core.js";
import { posPaymentsUpdate } from "apideck/funcs/posPaymentsUpdate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPaymentsUpdate(apideck, {
    id: "<id>",
    serviceId: "salesforce",
    posPayment: {
      sourceId: "12345",
      orderId: "12345",
      merchantId: "12345",
      customerId: "12345",
      employeeId: "12345",
      locationId: "12345",
      deviceId: "12345",
      tenderId: "12345",
      externalPaymentId: "12345",
      idempotencyKey: "random_string",
      amount: 27.5,
      currency: "USD",
      tip: 7,
      tax: 20,
      total: 37.5,
      appFee: 3,
      changeBackCashAmount: 20,
      approved: 37.5,
      refunded: 37.5,
      processingFees: [
        {
          amount: 1.05,
          effectiveAt: new Date("2020-09-30T07:43:32.000Z"),
          processingType: "initial",
        },
      ],
      source: "external",
      status: "approved",
      cardDetails: {
        card: {
          bin: "41111",
          cardType: "credit",
          prepaidType: "prepaid",
          cardholderName: "John Doe",
          customerId: "12345",
          merchantId: "12345",
          expMonth: 1,
          expYear: 2022,
          fingerprint: " Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.",
          last4: "The last 4 digits of the card number.",
          enabled: true,
          billingAddress: {
            id: "123",
            type: "primary",
            string: "25 Spring Street, Blackburn, VIC 3130",
            name: "HQ US",
            line1: "Main street",
            line2: "apt #",
            line3: "Suite #",
            line4: "delivery instructions",
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
          referenceId: "card-001",
          version: "230320320320",
        },
      },
      bankAccount: {
        country: "US",
      },
      externalDetails: {
        type: "stored_balance",
        source: "<value>",
        sourceFeeAmount: 2.5,
      },
      serviceCharges: [
        {
          name: "Charge for delivery",
          amount: 27500,
          percentage: 12.5,
          currency: "USD",
          active: true,
        },
      ],
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

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PosPaymentsUpdateRequest](../../models/operations/pospaymentsupdaterequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosPaymentsUpdateResponse](../../models/operations/pospaymentsupdateresponse.md)\>**

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

Delete Payment

### Example Usage

```typescript
import { Apideck } from "apideck";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.pos.payments.delete({
    id: "<id>",
    serviceId: "salesforce",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "apideck/core.js";
import { posPaymentsDelete } from "apideck/funcs/posPaymentsDelete.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  customerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await posPaymentsDelete(apideck, {
    id: "<id>",
    serviceId: "salesforce",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PosPaymentsDeleteRequest](../../models/operations/pospaymentsdeleterequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PosPaymentsDeleteResponse](../../models/operations/pospaymentsdeleteresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |