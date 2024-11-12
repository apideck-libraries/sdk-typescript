# LogsFilter

## Example Usage

```typescript
import { LogsFilter } from "apideck/models/components";

let value: LogsFilter = {
  connectorId: "crm+salesforce",
  statusCode: 201,
  excludeUnifiedApis: "vault,proxy",
};
```

## Fields

| Field                | Type                 | Required             | Description          | Example              |
| -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `connectorId`        | *string*             | :heavy_minus_sign:   | N/A                  | crm+salesforce       |
| `statusCode`         | *number*             | :heavy_minus_sign:   | N/A                  | 201                  |
| `excludeUnifiedApis` | *string*             | :heavy_minus_sign:   | N/A                  | vault,proxy          |