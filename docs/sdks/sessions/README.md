# Sessions
(*vault.sessions*)

## Overview

### Available Operations

* [create](#create) - Create Session

## create

Making a POST request to this endpoint will initiate a Hosted Vault session. Redirect the consumer to the returned
URL to allow temporary access to manage their integrations and settings.

Note: This is a short lived token that will expire after 1 hour (TTL: 3600).


### Example Usage

```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.vault.sessions.create({
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    session: {
      consumerMetadata: {
        accountName: "SpaceX",
        userName: "Elon Musk",
        email: "elon@musk.com",
        image: "https://www.spacex.com/static/images/share.jpg",
      },
      redirectUri: "https://mysaas.com/dashboard",
      settings: {
        unifiedApis: [
          "crm",
        ],
      },
      theme: {
        favicon: "https://res.cloudinary.com/apideck/icons/intercom",
        logo: "https://res.cloudinary.com/apideck/icons/intercom",
        primaryColor: "#286efa",
        sidepanelBackgroundColor: "#286efa",
        sidepanelTextColor: "#FFFFFF",
        vaultName: "Intercom",
        privacyUrl: "https://compliance.apideck.com/privacy-policy",
        termsUrl: "https://www.termsfeed.com/terms-conditions/957c85c1b089ae9e3219c83eff65377e",
      },
      customConsumerSettings: {
        "feature_flag_1": true,
        "tax_rates": [
          {
            "id": "6",
            "label": "6%",
          },
          {
            "id": "21",
            "label": "21%",
          },
        ],
      },
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
import { ApideckCore } from "@apideck/unify/core.js";
import { vaultSessionsCreate } from "@apideck/unify/funcs/vaultSessionsCreate.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const res = await vaultSessionsCreate(apideck, {
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    session: {
      consumerMetadata: {
        accountName: "SpaceX",
        userName: "Elon Musk",
        email: "elon@musk.com",
        image: "https://www.spacex.com/static/images/share.jpg",
      },
      redirectUri: "https://mysaas.com/dashboard",
      settings: {
        unifiedApis: [
          "crm",
        ],
      },
      theme: {
        favicon: "https://res.cloudinary.com/apideck/icons/intercom",
        logo: "https://res.cloudinary.com/apideck/icons/intercom",
        primaryColor: "#286efa",
        sidepanelBackgroundColor: "#286efa",
        sidepanelTextColor: "#FFFFFF",
        vaultName: "Intercom",
        privacyUrl: "https://compliance.apideck.com/privacy-policy",
        termsUrl: "https://www.termsfeed.com/terms-conditions/957c85c1b089ae9e3219c83eff65377e",
      },
      customConsumerSettings: {
        "feature_flag_1": true,
        "tax_rates": [
          {
            "id": "6",
            "label": "6%",
          },
          {
            "id": "21",
            "label": "21%",
          },
        ],
      },
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
| `request`                                                                                                                                                                      | [operations.VaultSessionsCreateRequest](../../models/operations/vaultsessionscreaterequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.VaultSessionsCreateResponse](../../models/operations/vaultsessionscreateresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |