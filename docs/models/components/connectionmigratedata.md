# ConnectionMigrateData

## Example Usage

```typescript
import { ConnectionMigrateData } from "@apideck/unify/models/components";

let value: ConnectionMigrateData = {
  targetServiceId: "intuit-enterprise-suite",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `targetServiceId`                                                                                                                | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The service id of the connector to migrate this connection to. Must be one of the source connector's declared migration targets. | intuit-enterprise-suite                                                                                                          |