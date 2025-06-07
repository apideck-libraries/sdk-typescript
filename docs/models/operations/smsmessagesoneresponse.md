# SmsMessagesOneResponse

## Example Usage

```typescript
import { SmsMessagesOneResponse } from "@apideck/unify/models/operations";

let value: SmsMessagesOneResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getMessageResponse`                                                                     | [components.GetMessageResponse](../../models/components/getmessageresponse.md)           | :heavy_minus_sign:                                                                       | Messages                                                                                 |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |