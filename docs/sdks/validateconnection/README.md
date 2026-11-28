# Vault.ValidateConnection

## Overview

### Available Operations

* [state](#state) - Validate Connection State

## state

This endpoint checks a connection again and returns its updated state.
For OAuth2 connectors and custom connectors with an OAuth grant (except connectors used only for authentication), this operation first forces the refresh flow for an access token regardless of its expiry.
Then, for connectors that support connection validation (`validation_support: true`), it sends the connector's validation request with the stored credentials.
The validation request is not sent when the connection is disabled, does not have the settings that the request needs, or still needs OAuth authorization.
When the connector has no OAuth refresh and no connection validation, nothing is sent to the integration, and the state is computed from the stored connection.
When the integration rejects the forced token refresh with a non-recoverable error, and no other process saved a newer token in the meantime, the connection is marked as not valid, `vault.connection.token_refresh.failed` is triggered, and the operation returns an error. Its `state` becomes `invalid` only when the connector supports connection validation and no refresh-token retention is active (`credentials_expire_at` is not a future time).

The result is saved on the connection. When the connection `state` changes, `vault.connection.updated` is triggered, and `vault.connection.callable` too when the connection becomes callable. Use this operation to check an `invalid` connection again: reading the connection does not check it.

Note:
  - Do not include any credentials in the request body. The operation uses the credentials stored on the connection.
  - If a refresh token flow was performed and successful, the new access token will then be used for subsequent API requests.
  - A connection that is waiting for confirmation is returned with its stored state, without a refresh or a validation request.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="vault.validateConnectionState" method="post" path="/vault/connections/{unified_api}/{service_id}/validate" -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const result = await apideck.vault.validateConnection.state({
    serviceId: "pipedrive",
    unifiedApi: "crm",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApideckCore } from "@apideck/unify/core.js";
import { vaultValidateConnectionState } from "@apideck/unify/funcs/vaultValidateConnectionState.js";

// Use `ApideckCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apideck = new ApideckCore({
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
});

async function run() {
  const res = await vaultValidateConnectionState(apideck, {
    serviceId: "pipedrive",
    unifiedApi: "crm",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("vaultValidateConnectionState failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.VaultValidateConnectionStateRequest](../../models/operations/vaultvalidateconnectionstaterequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.VaultValidateConnectionStateResponse](../../models/operations/vaultvalidateconnectionstateresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.BadRequestResponse      | 400                            | application/json               |
| errors.UnauthorizedResponse    | 401                            | application/json               |
| errors.PaymentRequiredResponse | 402                            | application/json               |
| errors.NotFoundResponse        | 404                            | application/json               |
| errors.UnprocessableResponse   | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |