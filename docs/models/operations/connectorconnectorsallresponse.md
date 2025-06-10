# ConnectorConnectorsAllResponse

## Example Usage

```typescript
import { ConnectorConnectorsAllResponse } from "@apideck/unify/models/operations";

let value: ConnectorConnectorsAllResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getConnectorsResponse`                                                                  | [components.GetConnectorsResponse](../../models/components/getconnectorsresponse.md)     | :heavy_minus_sign:                                                                       | Connectors                                                                               |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |