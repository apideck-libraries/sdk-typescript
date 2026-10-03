# ErrorT

Why this item did not complete. Present when `status` is `failed`, meaning the record was not written, and when `status` is `uncertain`, meaning it is unknown whether it was. Also present, more rarely, alongside `created`/`updated`: the record WAS written and post-write processing failed, so the item reports the error beside its success status.

Per-item failures are independent — one item's rejection says nothing about the others. The exception is a failure of the request itself, such as a timeout: where a connector writes the whole batch in one call, every item shares that outcome and carries the same error.

## Example Usage

```typescript
import { ErrorT } from "@apideck/unify/models/components";

let value: ErrorT = {
  statusCode: 502,
  error: "Bad Gateway",
  typeName: "PostWriteProcessingError",
  message: "The record was written, but processing its response failed.",
  detail: "The record was written, but processing its response failed.",
  ref: "https://developers.apideck.com/errors#postwriteprocessingerror",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_minus_sign:                                                                          | HTTP status code                                                                            | 502                                                                                         |
| `error`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)       | Bad Gateway                                                                                 |
| `typeName`                                                                                  | *string*                                                                                    | :heavy_minus_sign:                                                                          | The type of error returned                                                                  | PostWriteProcessingError                                                                    |
| `message`                                                                                   | *string*                                                                                    | :heavy_minus_sign:                                                                          | A human-readable message providing more details about the error.                            | The record was written, but processing its response failed.                                 |
| `detail`                                                                                    | *components.BatchItemResultDetail*                                                          | :heavy_minus_sign:                                                                          | Contains parameter or domain specific information related to the error and why it occurred. | The record was written, but processing its response failed.                                 |
| `ref`                                                                                       | *string*                                                                                    | :heavy_minus_sign:                                                                          | Link to documentation of error type                                                         | https://developers.apideck.com/errors#postwriteprocessingerror                              |