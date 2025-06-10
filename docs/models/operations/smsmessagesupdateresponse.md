# SmsMessagesUpdateResponse

## Example Usage

```typescript
import { SmsMessagesUpdateResponse } from "@apideck/unify/models/operations";

let value: SmsMessagesUpdateResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updateMessageResponse`                                                                  | [components.UpdateMessageResponse](../../models/components/updatemessageresponse.md)     | :heavy_minus_sign:                                                                       | Messages                                                                                 |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |