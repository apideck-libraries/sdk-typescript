# VaultSessionsCreateRequest

## Example Usage

```typescript
import { VaultSessionsCreateRequest } from "@apideck/unify/models/operations";

let value: VaultSessionsCreateRequest = {
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
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `consumerId`                                               | *string*                                                   | :heavy_minus_sign:                                         | ID of the consumer which you want to get or push data from | test-consumer                                              |
| `appId`                                                    | *string*                                                   | :heavy_minus_sign:                                         | The ID of your Unify application                           | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                    |
| `session`                                                  | [components.Session](../../models/components/session.md)   | :heavy_minus_sign:                                         | Additional redirect uri and/or consumer metadata           |                                                            |