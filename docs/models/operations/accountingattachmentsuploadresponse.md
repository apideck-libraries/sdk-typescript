# AccountingAttachmentsUploadResponse

## Example Usage

```typescript
import { AccountingAttachmentsUploadResponse } from "@apideck/unify/models/operations";

let value: AccountingAttachmentsUploadResponse = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createAttachmentResponse`                                                                 | [components.CreateAttachmentResponse](../../models/components/createattachmentresponse.md) | :heavy_minus_sign:                                                                         | Attachments                                                                                |
| `unexpectedErrorResponse`                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)   | :heavy_minus_sign:                                                                         | Unexpected error                                                                           |