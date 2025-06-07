# SmsMessagesDeleteResponse

## Example Usage

```typescript
import { SmsMessagesDeleteResponse } from "@apideck/unify/models/operations";

let value: SmsMessagesDeleteResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deleteMessageResponse`                                                                  | [components.DeleteMessageResponse](../../models/components/deletemessageresponse.md)     | :heavy_minus_sign:                                                                       | Messages                                                                                 |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |