# CreateCallbackStateResponse

Callback state created

## Example Usage

```typescript
import { CreateCallbackStateResponse } from "@apideck/sdk/models/components";

let value: CreateCallbackStateResponse = {
  statusCode: 200,
  status: "OK",
  data: {
    state: "123e4567-e89b-12d3-a456-426614174000",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                             | *number*                                                                                                 | :heavy_check_mark:                                                                                       | HTTP Response Status Code                                                                                | 200                                                                                                      |
| `status`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | HTTP Response Status                                                                                     | OK                                                                                                       |
| `data`                                                                                                   | [components.CreateCallbackStateResponseData](../../models/components/createcallbackstateresponsedata.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |