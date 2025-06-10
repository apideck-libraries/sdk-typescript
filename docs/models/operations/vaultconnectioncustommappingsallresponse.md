# VaultConnectionCustomMappingsAllResponse

## Example Usage

```typescript
import { VaultConnectionCustomMappingsAllResponse } from "@apideck/unify/models/operations";

let value: VaultConnectionCustomMappingsAllResponse = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `getCustomMappingsResponse`                                                                  | [components.GetCustomMappingsResponse](../../models/components/getcustommappingsresponse.md) | :heavy_minus_sign:                                                                           | Custom mapping                                                                               |
| `unexpectedErrorResponse`                                                                    | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)     | :heavy_minus_sign:                                                                           | Unexpected error                                                                             |