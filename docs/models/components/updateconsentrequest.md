# UpdateConsentRequest

## Example Usage

```typescript
import { UpdateConsentRequest } from "@apideck/unify/models/components";

let value: UpdateConsentRequest = {
  resources: "*",
  granted: true,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `resources`                                                       | *components.UpdateConsentRequestResources*                        | :heavy_check_mark:                                                | N/A                                                               |                                                                   |
| `granted`                                                         | *boolean*                                                         | :heavy_check_mark:                                                | Whether consent is being granted (true) or denied/revoked (false) | true                                                              |