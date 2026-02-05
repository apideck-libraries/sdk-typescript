# DownstreamErrors

## Example Usage

```typescript
import { DownstreamErrors } from "@apideck/unify/models/errors";

let value: DownstreamErrors = {};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `message`                                  | *string*                                   | :heavy_minus_sign:                         | Error message from the downstream provider |
| `detail`                                   | *string*                                   | :heavy_minus_sign:                         | Additional error details                   |
| `code`                                     | *string*                                   | :heavy_minus_sign:                         | Error code from the downstream provider    |