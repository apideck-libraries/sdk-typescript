# VaultConnectionSettingsAllRequest

## Example Usage

```typescript
import { VaultConnectionSettingsAllRequest } from "@apideck/unify/models/operations";

let value: VaultConnectionSettingsAllRequest = {
  unifiedApi: "crm",
  serviceId: "pipedrive",
  resource: "leads",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `unifiedApi`                         | *string*                             | :heavy_check_mark:                   | Unified API                          | crm                                  |
| `serviceId`                          | *string*                             | :heavy_check_mark:                   | Service ID of the resource to return | pipedrive                            |
| `resource`                           | *string*                             | :heavy_check_mark:                   | Name of the resource (plural)        | leads                                |