# ConnectorApisAllRequest

## Example Usage

```typescript
import { ConnectorApisAllRequest } from "@apideck/sdk/models/operations";

let value: ConnectorApisAllRequest = {
  filter: {
    status: "beta",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                         | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. |                                                                                                                  |
| `limit`                                                                                                          | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | Number of results to return. Minimum 1, Maximum 200, Default 20                                                  |                                                                                                                  |
| `filter`                                                                                                         | [components.ApisFilter](../../models/components/apisfilter.md)                                                   | :heavy_minus_sign:                                                                                               | Apply filters                                                                                                    | {<br/>"status": "beta"<br/>}                                                                                     |