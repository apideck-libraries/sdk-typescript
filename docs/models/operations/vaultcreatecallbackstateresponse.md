# VaultCreateCallbackStateResponse

## Example Usage

```typescript
import { VaultCreateCallbackStateResponse } from "@apideck/unify/models/operations";

let value: VaultCreateCallbackStateResponse = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createCallbackStateResponse`                                                                    | [components.CreateCallbackStateResponse](../../models/components/createcallbackstateresponse.md) | :heavy_minus_sign:                                                                               | Callback state created                                                                           |
| `unexpectedErrorResponse`                                                                        | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)         | :heavy_minus_sign:                                                                               | Unexpected error                                                                                 |