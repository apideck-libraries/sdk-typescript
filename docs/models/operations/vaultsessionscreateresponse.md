# VaultSessionsCreateResponse

## Example Usage

```typescript
import { VaultSessionsCreateResponse } from "@apideck/unify/models/operations";

let value: VaultSessionsCreateResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createSessionResponse`                                                                  | [components.CreateSessionResponse](../../models/components/createsessionresponse.md)     | :heavy_minus_sign:                                                                       | Session created                                                                          |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |