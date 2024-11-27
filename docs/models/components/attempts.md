# Attempts

## Example Usage

```typescript
import { Attempts } from "@apideck/sdk/models/components";

let value: Attempts = {
  timestamp: "2021-07-12T14:26:17.420Z",
  executionAttempt: 3,
  statusCode: 200,
  success: true,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                       | *string*                                                                                          | :heavy_minus_sign:                                                                                | ISO Date and time when the request was made.                                                      | 2021-07-12T14:26:17.420Z                                                                          |
| `executionAttempt`                                                                                | *number*                                                                                          | :heavy_minus_sign:                                                                                | Number of attempts webhook endpoint was called before a success was returned or eventually failed | 3                                                                                                 |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_minus_sign:                                                                                | HTTP Status code that was returned.                                                               | 200                                                                                               |
| `success`                                                                                         | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | Whether or not the request was successful.                                                        | true                                                                                              |