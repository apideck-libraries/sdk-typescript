# ApisFilter

## Example Usage

```typescript
import { ApisFilter } from "@apideck/sdk/models/components";

let value: ApisFilter = {
  status: "beta",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `status`                                                       | [components.ApiStatus](../../models/components/apistatus.md)   | :heavy_minus_sign:                                             | Status of the API. APIs with status live or beta are callable. |