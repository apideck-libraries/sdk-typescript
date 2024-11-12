# Links

Links to navigate to previous or next pages through the API

## Example Usage

```typescript
import { Links } from "apideck/models/components";

let value: Links = {
  previous:
    "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D",
  current: "https://unify.apideck.com/crm/companies",
  next:
    "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `previous`                                                                | *string*                                                                  | :heavy_minus_sign:                                                        | Link to navigate to the previous page through the API                     | https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D |
| `current`                                                                 | *string*                                                                  | :heavy_minus_sign:                                                        | Link to navigate to the current page through the API                      | https://unify.apideck.com/crm/companies                                   |
| `next`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | Link to navigate to the previous page through the API                     | https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM    |