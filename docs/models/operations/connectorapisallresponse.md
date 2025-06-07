# ConnectorApisAllResponse

## Example Usage

```typescript
import { ConnectorApisAllResponse } from "@apideck/unify/models/operations";

let value: ConnectorApisAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getApisResponse`                                                                        | [components.GetApisResponse](../../models/components/getapisresponse.md)                 | :heavy_minus_sign:                                                                       | Apis                                                                                     |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |