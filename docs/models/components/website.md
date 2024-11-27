# Website

## Example Usage

```typescript
import { Website } from "@apideck/sdk/models/components";

let value: Website = {
  id: "12345",
  url: "http://example.com",
  type: "primary",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_minus_sign:                                               | Unique identifier for the website                                | 12345                                                            |
| `url`                                                            | *string*                                                         | :heavy_check_mark:                                               | The website URL                                                  | http://example.com                                               |
| `type`                                                           | [components.WebsiteType](../../models/components/websitetype.md) | :heavy_minus_sign:                                               | The type of website                                              | primary                                                          |