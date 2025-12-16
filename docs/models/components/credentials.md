# Credentials

## Example Usage

```typescript
import { Credentials } from "@apideck/unify/models/components";

let value: Credentials = {
  refreshToken: "<refresh_token>",
  accessToken: "<access_token>",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `refreshToken`                                                                                  | *string*                                                                                        | :heavy_minus_sign:                                                                              | The refresh token can be used to obtain a new access token.                                     | 1234567890abcdefghijklmnopqrstuvwxyz                                                            |
| `accessToken`                                                                                   | *string*                                                                                        | :heavy_minus_sign:                                                                              | Access token                                                                                    | 1234567890abcdefghijklmnopqrstuvwxyz                                                            |
| `issuedAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_minus_sign:                                                                              | The datetime at which the token was issued. If omitted the token will be queued for refresh.    | 2020-01-01T00:00:00Z                                                                            |
| `expiresIn`                                                                                     | *number*                                                                                        | :heavy_minus_sign:                                                                              | The number of seconds until the token expires. If omitted the token will be queued for refresh. | 3600                                                                                            |