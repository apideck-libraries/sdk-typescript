# PaymentRequiredResponse

Payment Required

## Example Usage

```typescript
import { PaymentRequiredResponse } from "apideck/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_minus_sign:                                                                          | HTTP status code                                                                            | 402                                                                                         |
| `error`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)       | Payment Required                                                                            |
| `typeName`                                                                                  | *string*                                                                                    | :heavy_minus_sign:                                                                          | The type of error returned                                                                  | RequestLimitError                                                                           |
| `message`                                                                                   | *string*                                                                                    | :heavy_minus_sign:                                                                          | A human-readable message providing more details about the error.                            | Request Limit Reached                                                                       |
| `detail`                                                                                    | *string*                                                                                    | :heavy_minus_sign:                                                                          | Contains parameter or domain specific information related to the error and why it occurred. | You have reached your limit of 2000                                                         |
| `ref`                                                                                       | *string*                                                                                    | :heavy_minus_sign:                                                                          | Link to documentation of error type                                                         | https://developers.apideck.com/errors#requestlimiterror                                     |