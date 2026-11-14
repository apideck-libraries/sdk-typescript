# ConfirmConnectionResponse

Connection confirmed

## Example Usage

```typescript
import { ConfirmConnectionResponse } from "@apideck/unify/models/components";

let value: ConfirmConnectionResponse = {
  statusCode: 200,
  status: "OK",
  data: {
    confirmed: true,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                         | *number*                                                                                             | :heavy_check_mark:                                                                                   | HTTP Response Status Code                                                                            | 200                                                                                                  |
| `status`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | HTTP Response Status                                                                                 | OK                                                                                                   |
| `data`                                                                                               | [components.ConfirmConnectionResponseData](../../models/components/confirmconnectionresponsedata.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |