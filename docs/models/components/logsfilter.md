# LogsFilter

## Example Usage

```typescript
import { LogsFilter } from "@apideck/unify/models/components";

let value: LogsFilter = {
  connectorId: "crm+salesforce",
  statusCode: 201,
  statusCodes: [
    200,
    201,
    204,
  ],
  excludeUnifiedApis: "vault,proxy",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `connectorId`                                                                                           | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | crm+salesforce                                                                                          |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Filter by a single HTTP status code. For backward compatibility - use status_codes for multiple values. | 201                                                                                                     |
| `statusCodes`                                                                                           | *number*[]                                                                                              | :heavy_minus_sign:                                                                                      | Filter by multiple HTTP status codes. Values must be between 100-599. Maximum 50 status codes allowed.  | [<br/>200,<br/>201,<br/>204<br/>]                                                                       |
| `excludeUnifiedApis`                                                                                    | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     | vault,proxy                                                                                             |