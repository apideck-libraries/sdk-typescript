# GetCustomFieldsResponse

Custom mapping

## Example Usage

```typescript
import { GetCustomFieldsResponse } from "apideck/models/components";

let value: GetCustomFieldsResponse = {
  statusCode: 200,
  status: "OK",
  data: [
    {
      id: "123456",
      name: "SSN",
      description: "Employee Level",
      value: "495172776",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `statusCode`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | HTTP Response Status Code                                                      | 200                                                                            |
| `status`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | HTTP Response Status                                                           | OK                                                                             |
| `data`                                                                         | [components.CustomFieldFinder](../../models/components/customfieldfinder.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |