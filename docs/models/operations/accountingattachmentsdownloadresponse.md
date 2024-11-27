# AccountingAttachmentsDownloadResponse

## Example Usage

```typescript
import { AccountingAttachmentsDownloadResponse } from "@apideck/sdk/models/operations";

// No examples available for this model
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getAttachmentDownloadResponse`                                                          | *ReadableStream<Uint8Array>*                                                             | :heavy_minus_sign:                                                                       | Attachment Download                                                                      |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |