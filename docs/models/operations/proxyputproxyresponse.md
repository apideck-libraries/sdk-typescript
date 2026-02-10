# ProxyPutProxyResponse

## Example Usage

```typescript
import { ProxyPutProxyResponse } from "@apideck/unify/models/operations";

// No examples available for this model
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `responseJson`                                                     | Record<string, *any*>                                              | :heavy_minus_sign:                                                 | Ok                                                                 |
| `responseBinary`                                                   | *ReadableStream<Uint8Array>*                                       | :heavy_minus_sign:                                                 | Ok                                                                 |
| `responsePdf`                                                      | *ReadableStream<Uint8Array>*                                       | :heavy_minus_sign:                                                 | Ok                                                                 |
| `responseXml`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | Ok                                                                 |
| `responseCsv`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | Ok                                                                 |
| `responseText`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | Ok                                                                 |
| `errorJson`                                                        | Record<string, *any*>                                              | :heavy_minus_sign:                                                 | Proxy error                                                        |
| `errorXml`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | Proxy error                                                        |
| `errorHtml`                                                        | *string*                                                           | :heavy_minus_sign:                                                 | Proxy error                                                        |
| `errorText`                                                        | *string*                                                           | :heavy_minus_sign:                                                 | Proxy error                                                        |