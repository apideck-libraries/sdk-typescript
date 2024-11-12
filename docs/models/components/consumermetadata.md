# ConsumerMetadata

The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended.

## Example Usage

```typescript
import { ConsumerMetadata } from "apideck/models/components";

let value: ConsumerMetadata = {
  accountName: "SpaceX",
  userName: "Elon Musk",
  email: "elon@musk.com",
  image: "https://www.spacex.com/static/images/share.jpg",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `accountName`                                              | *string*                                                   | :heavy_minus_sign:                                         | The name of the account as shown in the sidebar.           | SpaceX                                                     |
| `userName`                                                 | *string*                                                   | :heavy_minus_sign:                                         | The name of the user as shown in the sidebar.              | Elon Musk                                                  |
| `email`                                                    | *string*                                                   | :heavy_minus_sign:                                         | The email of the user as shown in the sidebar.             | elon@musk.com                                              |
| `image`                                                    | *string*                                                   | :heavy_minus_sign:                                         | The avatar of the user in the sidebar. Must be a valid URL | https://www.spacex.com/static/images/share.jpg             |