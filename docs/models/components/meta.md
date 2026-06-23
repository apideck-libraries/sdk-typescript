# Meta

Response metadata

## Example Usage

```typescript
import { Meta } from "@apideck/unify/models/components";

let value: Meta = {
  itemsOnPage: 50,
  cursors: {
    previous: "em9oby1jcm06OnBhZ2U6OjE=",
    current: "em9oby1jcm06OnBhZ2U6OjI=",
    next: "em9oby1jcm06OnBhZ2U6OjM=",
  },
  totalCount: 1,
  warnings: [
    {
      type: "downstream_request_failed",
      statusCode: 429,
      operation: "getManager",
    },
  ],
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    | Example                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `itemsOnPage`                                                                                                                                  | *number*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | Number of items returned in the data property of the response                                                                                  | 50                                                                                                                                             |
| `cursors`                                                                                                                                      | [components.Cursors](../../models/components/cursors.md)                                                                                       | :heavy_minus_sign:                                                                                                                             | Cursors to navigate to previous or next pages through the API                                                                                  |                                                                                                                                                |
| `totalCount`                                                                                                                                   | *number*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | Number of records available in total for this resource                                                                                         | 1                                                                                                                                              |
| `warnings`                                                                                                                                     | [components.Warnings](../../models/components/warnings.md)[]                                                                                   | :heavy_minus_sign:                                                                                                                             | Non-fatal warnings emitted when optional workflow steps failed. Present only when at least one step degraded; the response status remains 200. |                                                                                                                                                |