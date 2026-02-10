# Detail2

## Example Usage

```typescript
import { Detail2 } from "@apideck/unify/models/errors";

let value: Detail2 = {
  type: "refresh_token_connector_error",
  message: "Token refresh failed with 401 error",
  debug: {
    response: {},
    credentialsExpireAtMs: 1620172800000,
    retryAfterMs: 1620000030000,
    cooldownRemainingMs: 30000,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Error type identifier                                                          | refresh_token_connector_error                                                  |
| `message`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | Detailed error message                                                         | Token refresh failed                                                           |
| `debug`                                                                        | [errors.DetailDebug](../../models/errors/detaildebug.md)                       | :heavy_minus_sign:                                                             | Debug information including request/response details and OAuth timing metadata |                                                                                |