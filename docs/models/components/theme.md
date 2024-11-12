# Theme

Theming options to change the look and feel of Vault.

## Example Usage

```typescript
import { Theme } from "apideck/models/components";

let value: Theme = {
  favicon: "https://res.cloudinary.com/apideck/icons/intercom",
  logo: "https://res.cloudinary.com/apideck/icons/intercom",
  primaryColor: "#286efa",
  sidepanelBackgroundColor: "#286efa",
  sidepanelTextColor: "#FFFFFF",
  vaultName: "Intercom",
  privacyUrl: "https://compliance.apideck.com/privacy-policy",
  termsUrl:
    "https://www.termsfeed.com/terms-conditions/957c85c1b089ae9e3219c83eff65377e",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `favicon`                                                                   | *string*                                                                    | :heavy_minus_sign:                                                          | The URL to the favicon to use for Vault.                                    | https://res.cloudinary.com/apideck/icons/intercom                           |
| `logo`                                                                      | *string*                                                                    | :heavy_minus_sign:                                                          | The URL to the logo to use for Vault.                                       | https://res.cloudinary.com/apideck/icons/intercom                           |
| `primaryColor`                                                              | *string*                                                                    | :heavy_minus_sign:                                                          | The primary color to use for Vault.                                         | #286efa                                                                     |
| `sidepanelBackgroundColor`                                                  | *string*                                                                    | :heavy_minus_sign:                                                          | The background color to use for the sidebar.                                | #286efa                                                                     |
| `sidepanelTextColor`                                                        | *string*                                                                    | :heavy_minus_sign:                                                          | The text color to use for the sidebar.                                      | #FFFFFF                                                                     |
| `vaultName`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | The name that will be shown in the sidebar.                                 | Intercom                                                                    |
| `privacyUrl`                                                                | *string*                                                                    | :heavy_minus_sign:                                                          | The URL to the privacy policy that will be shown in the sidebar.            | https://compliance.apideck.com/privacy-policy                               |
| `termsUrl`                                                                  | *string*                                                                    | :heavy_minus_sign:                                                          | The URL to the terms and conditions that will be shown in the sidebar.      | https://www.termsfeed.com/terms-conditions/957c85c1b089ae9e3219c83eff65377e |