# ErrorT

The error returned if your message status is failed or undelivered.

## Example Usage

```typescript
import { ErrorT } from "apideck/models/components";

let value: ErrorT = {
  code: "X1",
  message: "Something went wrong",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                        | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | The error_code provides more information about the failure. If the message was successful, this value is null | X1                                                                                                            |
| `message`                                                                                                     | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           | Something went wrong                                                                                          |