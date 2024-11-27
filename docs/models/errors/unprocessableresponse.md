# UnprocessableResponse

Unprocessable

## Example Usage

```typescript
import { UnprocessableResponse } from "@apideck/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_minus_sign:                                                                          | HTTP status code                                                                            | 422                                                                                         |
| `error`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)       | Unprocessable Entity                                                                        |
| `typeName`                                                                                  | *string*                                                                                    | :heavy_minus_sign:                                                                          | The type of error returned                                                                  | InvalidStateError                                                                           |
| `message`                                                                                   | *string*                                                                                    | :heavy_minus_sign:                                                                          | A human-readable message providing more details about the error.                            | Invalid State                                                                               |
| `detail`                                                                                    | *errors.UnprocessableResponseDetail*                                                        | :heavy_minus_sign:                                                                          | Contains parameter or domain specific information related to the error and why it occurred. |                                                                                             |
| `ref`                                                                                       | *string*                                                                                    | :heavy_minus_sign:                                                                          | Link to documentation of error type                                                         | https://developers.apideck.com/errors#invalidstateerror                                     |