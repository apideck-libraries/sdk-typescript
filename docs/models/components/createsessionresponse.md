# CreateSessionResponse

Session created

## Example Usage

```typescript
import { CreateSessionResponse } from "@apideck/unify/models/components";

let value: CreateSessionResponse = {
  statusCode: 200,
  status: "OK",
  data: {
    sessionUri:
      "http://vault.apideck.com/session/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdW1lcl9pZCI6InRlc3RfdXNlcl9pZCIsImFwcGxpY2F0aW9uX2lkIj",
    sessionToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdW1lcl9pZCI6InRlc3RfdXNlcl9pZCIsImFwcGxpY2F0aW9uX2lkIj",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                 | *number*                                                                                     | :heavy_check_mark:                                                                           | HTTP Response Status Code                                                                    | 200                                                                                          |
| `status`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | HTTP Response Status                                                                         | OK                                                                                           |
| `data`                                                                                       | [components.CreateSessionResponseData](../../models/components/createsessionresponsedata.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `raw`                                                                                        | Record<string, *any*>                                                                        | :heavy_minus_sign:                                                                           | Raw response from the integration when raw=true query param is provided                      |                                                                                              |