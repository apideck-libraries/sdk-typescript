# Warnings

Advisory warning emitted when an optional workflow step fails non-fatally. The overall request still succeeds (HTTP 200); inspect this to detect partial or degraded data.

## Example Usage

```typescript
import { Warnings } from "@apideck/unify/models/components";

let value: Warnings = {
  type: "downstream_request_failed",
  statusCode: 429,
  operation: "getManager",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `type`                                                                      | *string*                                                                    | :heavy_minus_sign:                                                          | Discriminator for the warning kind.                                         | downstream_request_failed                                                   |
| `statusCode`                                                                | *number*                                                                    | :heavy_minus_sign:                                                          | HTTP status code returned by the failed downstream request, when available. | 429                                                                         |
| `error`                                                                     | *string*                                                                    | :heavy_minus_sign:                                                          | Short error description from the downstream provider, when available.       |                                                                             |
| `operation`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | Identifier of the workflow step that failed.                                | getManager                                                                  |
| `message`                                                                   | *string*                                                                    | :heavy_minus_sign:                                                          | Detailed message from the downstream provider, when available.              |                                                                             |