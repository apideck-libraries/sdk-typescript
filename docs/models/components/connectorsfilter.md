# ConnectorsFilter

## Example Usage

```typescript
import { ConnectorsFilter } from "@apideck/sdk/models/components";

let value: ConnectorsFilter = {
  unifiedApi: "file-storage",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `unifiedApi`                                                               | [components.UnifiedApiId](../../models/components/unifiedapiid.md)         | :heavy_minus_sign:                                                         | Name of Apideck Unified API                                                | crm                                                                        |
| `status`                                                                   | [components.ConnectorStatus](../../models/components/connectorstatus.md)   | :heavy_minus_sign:                                                         | Status of the connector. Connectors with status live or beta are callable. |                                                                            |