# ConnectorApiResourcesOneResponse

## Example Usage

```typescript
import { ConnectorApiResourcesOneResponse } from "@apideck/unify/models/operations";

let value: ConnectorApiResourcesOneResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getApiResourceResponse`                                                                 | [components.GetApiResourceResponse](../../models/components/getapiresourceresponse.md)   | :heavy_minus_sign:                                                                       | ApiResources                                                                             |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |