# GetCustomMappingsResponse

Custom mapping

## Example Usage

```typescript
import { GetCustomMappingsResponse } from "@apideck/unify/models/components";

let value: GetCustomMappingsResponse = {
  statusCode: 200,
  status: "OK",
  data: [
    {
      id: "hris+employees+first_aid_training",
      label: "First Aid Training",
      description: "First Aid Training completed after 2019-01-01",
      value: "$.root.training.first_aid",
      key: "first_aid_training",
      required: false,
      customField: true,
      consumerId: "test_user_id",
      example: "Some value",
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `statusCode`                                                           | *number*                                                               | :heavy_check_mark:                                                     | HTTP Response Status Code                                              | 200                                                                    |
| `status`                                                               | *string*                                                               | :heavy_check_mark:                                                     | HTTP Response Status                                                   | OK                                                                     |
| `data`                                                                 | [components.CustomMapping](../../models/components/custommapping.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |