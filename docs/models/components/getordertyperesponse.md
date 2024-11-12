# GetOrderTypeResponse

OrderTypes

## Example Usage

```typescript
import { GetOrderTypeResponse } from "apideck/models/components";

let value: GetOrderTypeResponse = {
  statusCode: 200,
  status: "OK",
  service: "clover",
  resource: "OrderTypes",
  operation: "one",
  data: {
    id: "12345",
    name: "Default order type",
    default: true,
    updatedBy: "12345",
    createdBy: "12345",
    updatedAt: new Date("2020-09-30T07:43:32.000Z"),
    createdAt: new Date("2020-09-30T07:43:32.000Z"),
    passThrough: [
      {
        serviceId: "<id>",
        extendPaths: [
          {
            path: "$.nested.property",
            value: {
              "TaxClassificationRef": {
                "value": "EUC-99990201-V1-00020000",
              },
            },
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `statusCode`                                                 | *number*                                                     | :heavy_check_mark:                                           | HTTP Response Status Code                                    | 200                                                          |
| `status`                                                     | *string*                                                     | :heavy_check_mark:                                           | HTTP Response Status                                         | OK                                                           |
| `service`                                                    | *string*                                                     | :heavy_check_mark:                                           | Apideck ID of service provider                               | clover                                                       |
| `resource`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unified API resource name                                    | OrderTypes                                                   |
| `operation`                                                  | *string*                                                     | :heavy_check_mark:                                           | Operation performed                                          | one                                                          |
| `data`                                                       | [components.OrderType](../../models/components/ordertype.md) | :heavy_check_mark:                                           | N/A                                                          |                                                              |