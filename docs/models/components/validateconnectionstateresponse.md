# ValidateConnectionStateResponse

Connection access token refreshed

## Example Usage

```typescript
import { ValidateConnectionStateResponse } from "@apideck/unify/models/components";

let value: ValidateConnectionStateResponse = {
  statusCode: 200,
  status: "OK",
  data: {
    id: "crm+salesforce",
    state: "authorized",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                                     | *number*                                                                                                         | :heavy_check_mark:                                                                                               | HTTP Response Status Code                                                                                        | 200                                                                                                              |
| `status`                                                                                                         | *string*                                                                                                         | :heavy_check_mark:                                                                                               | HTTP Response Status                                                                                             | OK                                                                                                               |
| `data`                                                                                                           | [components.ValidateConnectionStateResponseData](../../models/components/validateconnectionstateresponsedata.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |
| `raw`                                                                                                            | Record<string, *any*>                                                                                            | :heavy_minus_sign:                                                                                               | Raw response from the integration when raw=true query param is provided                                          |                                                                                                                  |