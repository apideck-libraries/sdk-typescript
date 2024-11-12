# DeleteConsumerResponse

Consumer deleted

## Example Usage

```typescript
import { DeleteConsumerResponse } from "apideck/models/components";

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