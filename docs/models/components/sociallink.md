# SocialLink

## Example Usage

```typescript
import { SocialLink } from "apideck/models/components";

let value: SocialLink = {
  id: "12345",
  url: "https://www.twitter.com/apideck",
  type: "twitter",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_minus_sign:                                           | Unique identifier of the social link                         | 12345                                                        |
| `url`                                                        | *string*                                                     | :heavy_check_mark:                                           | URL of the social link, e.g. https://www.twitter.com/apideck | https://www.twitter.com/apideck                              |
| `type`                                                       | *string*                                                     | :heavy_minus_sign:                                           | Type of the social link, e.g. twitter                        | twitter                                                      |