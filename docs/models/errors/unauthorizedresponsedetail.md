# UnauthorizedResponseDetail

Contains parameter or domain specific information related to the error and why it occurred.


## Supported Types

### `string`

```typescript
const value: string = "Missing authentication";
```

### `errors.Two`

```typescript
const value: errors.Two = {
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

