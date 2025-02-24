# DeleteConsumerResponse

Consumer deleted

## Example Usage

```typescript
import { DeleteConsumerResponse } from "@apideck/unify/models/components";

let value: DeleteConsumerResponse = {
  statusCode: 200,
  status: "OK",
  data: {
    consumerId: "test_consumer_id",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                   | *number*                                                                                       | :heavy_check_mark:                                                                             | HTTP Response Status Code                                                                      | 200                                                                                            |
| `status`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | HTTP Response Status                                                                           | OK                                                                                             |
| `data`                                                                                         | [components.DeleteConsumerResponseData](../../models/components/deleteconsumerresponsedata.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `raw`                                                                                          | Record<string, *any*>                                                                          | :heavy_minus_sign:                                                                             | Raw response from the integration when raw=true query param is provided                        |                                                                                                |