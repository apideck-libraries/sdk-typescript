# BatchTrackingCategoriesRequest

A batch of tracking categories to write in a single request. Each item is processed independently: some may succeed while others fail, and the response carries one result per item in the order they were sent.

## Example Usage

```typescript
import { BatchTrackingCategoriesRequest } from "@apideck/unify/models/components";

let value: BatchTrackingCategoriesRequest = {
  items: [
    {
      ref: "item-1",
      data: {
        parentId: "12345",
        parentName: "Area",
        name: "Department",
        code: "100",
        status: "active",
        rowVersion: "1-12345",
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
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                                                                                                                                                                                                                                                                                          | [components.Items](../../models/components/items.md)[]                                                                                                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                               | The records to write. The per-connector limit is the real cap and is usually lower than the ceiling here: read `batch_support.resources[<resource>].max_items` on the Connector API for the connector you are calling, or the resource gotchas. This ceiling exists so an oversized array is rejected by request validation before any per-item work runs, rather than after it. |