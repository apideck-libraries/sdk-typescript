# Websites

## Example Usage

```typescript
import { Websites } from "@apideck/sdk/models/components";

let value: Websites = {
  id: "12345",
  url: "http://example.com",
  type: "primary",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_minus_sign:                                                   | Unique identifier for the website                                    | 12345                                                                |
| `url`                                                                | *string*                                                             | :heavy_check_mark:                                                   | The website URL                                                      | http://example.com                                                   |
| `type`                                                               | [components.ApplicantType](../../models/components/applicanttype.md) | :heavy_minus_sign:                                                   | The type of website                                                  | primary                                                              |