# AtsApplicationsDeleteResponse

## Example Usage

```typescript
import { AtsApplicationsDeleteResponse } from "@apideck/unify/models/operations";

let value: AtsApplicationsDeleteResponse = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `deleteApplicationResponse`                                                                  | [components.DeleteApplicationResponse](../../models/components/deleteapplicationresponse.md) | :heavy_minus_sign:                                                                           | Applications                                                                                 |
| `unexpectedErrorResponse`                                                                    | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)     | :heavy_minus_sign:                                                                           | Unexpected error                                                                             |