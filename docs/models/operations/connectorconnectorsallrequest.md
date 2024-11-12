# ConnectorConnectorsAllRequest

## Example Usage

```typescript
import { ConnectorConnectorsAllRequest } from "apideck/models/operations";

let value: ConnectorConnectorsAllRequest = {
  filter: {
    unifiedApi: "file-storage",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                         | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. |                                                                                                                  |
| `limit`                                                                                                          | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | Number of results to return. Minimum 1, Maximum 200, Default 20                                                  |                                                                                                                  |
| `filter`                                                                                                         | [components.ConnectorsFilter](../../models/components/connectorsfilter.md)                                       | :heavy_minus_sign:                                                                                               | Apply filters                                                                                                    | {<br/>"unified_api": "file-storage"<br/>}                                                                        |