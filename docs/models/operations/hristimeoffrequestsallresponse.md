# HrisTimeOffRequestsAllResponse

## Example Usage

```typescript
import { HrisTimeOffRequestsAllResponse } from "@apideck/unify/models/operations";

let value: HrisTimeOffRequestsAllResponse = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `getTimeOffRequestsResponse`                                                                   | [components.GetTimeOffRequestsResponse](../../models/components/gettimeoffrequestsresponse.md) | :heavy_minus_sign:                                                                             | TimeOffRequests                                                                                |
| `unexpectedErrorResponse`                                                                      | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)       | :heavy_minus_sign:                                                                             | Unexpected error                                                                               |