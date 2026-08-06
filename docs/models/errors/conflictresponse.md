# ConflictResponse

Conflict — a connection already exists for the target connector

## Example Usage

```typescript
import { ConflictResponse } from "@apideck/unify/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_minus_sign:                                                                          | HTTP status code                                                                            | 409                                                                                         |
| `error`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)       | Conflict                                                                                    |
| `typeName`                                                                                  | *string*                                                                                    | :heavy_minus_sign:                                                                          | The type of error returned                                                                  | ConflictError                                                                               |
| `message`                                                                                   | *string*                                                                                    | :heavy_minus_sign:                                                                          | A human-readable message providing more details about the error.                            | Conflict                                                                                    |
| `detail`                                                                                    | *errors.ConflictResponseDetail*                                                             | :heavy_minus_sign:                                                                          | Contains parameter or domain specific information related to the error and why it occurred. |                                                                                             |
| `ref`                                                                                       | *string*                                                                                    | :heavy_minus_sign:                                                                          | Link to documentation of error type                                                         | https://developers.apideck.com/errors#conflicterror                                         |