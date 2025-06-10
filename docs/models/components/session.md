# Session

## Example Usage

```typescript
import { Session } from "@apideck/unify/models/components";

let value: Session = {
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
    sessionLength: "30m",
  },
  theme: {
    favicon: "https://res.cloudinary.com/apideck/icons/intercom",
    logo: "https://res.cloudinary.com/apideck/icons/intercom",
    primaryColor: "#286efa",
    sidepanelBackgroundColor: "#286efa",
    sidepanelTextColor: "#FFFFFF",
    vaultName: "Intercom",
    privacyUrl: "https://compliance.apideck.com/privacy-policy",
    termsUrl:
      "https://www.termsfeed.com/terms-conditions/957c85c1b089ae9e3219c83eff65377e",
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
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `consumerMetadata`                                                                                                    | [components.ConsumerMetadata](../../models/components/consumermetadata.md)                                            | :heavy_minus_sign:                                                                                                    | The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended. |                                                                                                                       |
| `redirectUri`                                                                                                         | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | The URL to redirect the user to after the session has been configured.                                                | https://mysaas.com/dashboard                                                                                          |
| `settings`                                                                                                            | [components.Settings](../../models/components/settings.md)                                                            | :heavy_minus_sign:                                                                                                    | Settings to change the way the Vault is displayed.                                                                    |                                                                                                                       |
| `theme`                                                                                                               | [components.Theme](../../models/components/theme.md)                                                                  | :heavy_minus_sign:                                                                                                    | Theming options to change the look and feel of Vault.                                                                 |                                                                                                                       |
| `customConsumerSettings`                                                                                              | Record<string, *any*>                                                                                                 | :heavy_minus_sign:                                                                                                    | Custom consumer settings that are passed as part of the session.                                                      | {<br/>"feature_flag_1": true,<br/>"tax_rates": [<br/>{<br/>"id": "6",<br/>"label": "6%"<br/>},<br/>{<br/>"id": "21",<br/>"label": "21%"<br/>}<br/>]<br/>} |