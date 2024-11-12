# ExtendPaths

## Example Usage

```typescript
import { ExtendPaths } from "apideck/models/components";

let value: ExtendPaths = {
  path: "$.nested.property",
  value: {
    "TaxClassificationRef": {
      "value": "EUC-99990201-V1-00020000",
    },
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `path`                                                              | *string*                                                            | :heavy_check_mark:                                                  | JSONPath string specifying where to apply the value.                | $.nested.property                                                   |
| `value`                                                             | *any*                                                               | :heavy_check_mark:                                                  | The value to set at the specified path, can be any type.            | {<br/>"TaxClassificationRef": {<br/>"value": "EUC-99990201-V1-00020000"<br/>}<br/>} |