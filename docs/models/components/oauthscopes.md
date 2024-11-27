# OauthScopes

## Example Usage

```typescript
import { OauthScopes } from "@apideck/sdk/models/components";

let value: OauthScopes = {
  id: "contacts:all",
  label: "Read/write on the Contacts resource",
  defaultApis: [
    "crm",
  ],
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                  | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | ID of the OAuth scope.                                                                                                | contacts:all                                                                                                          |
| `label`                                                                                                               | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | Label of the OAuth scope.                                                                                             | Read/write on the Contacts resource                                                                                   |
| `defaultApis`                                                                                                         | *string*[]                                                                                                            | :heavy_minus_sign:                                                                                                    | List of Unified APIs that request this OAuth Scope by default. Application owners can customize the requested scopes. |                                                                                                                       |