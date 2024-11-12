# BadRequestResponse

Bad Request

## Example Usage

```typescript
import { BadRequestResponse } from "apideck/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_minus_sign:                                                                          | HTTP status code                                                                            | 400                                                                                         |
| `error`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)       | Bad Request                                                                                 |
| `typeName`                                                                                  | *string*                                                                                    | :heavy_minus_sign:                                                                          | The type of error returned                                                                  | RequestValidationError                                                                      |
| `message`                                                                                   | *string*                                                                                    | :heavy_minus_sign:                                                                          | A human-readable message providing more details about the error.                            | Invalid Params                                                                              |
| `detail`                                                                                    | *errors.Detail*                                                                             | :heavy_minus_sign:                                                                          | Contains parameter or domain specific information related to the error and why it occurred. |                                                                                             |
| `ref`                                                                                       | *string*                                                                                    | :heavy_minus_sign:                                                                          | Link to documentation of error type                                                         | https://developers.apideck.com/errors#requestvalidationerror                                |