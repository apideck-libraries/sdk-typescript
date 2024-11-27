# SchemaSupport

When a connector has schema_support, a call can be made to retrieve a json schema that describes a downstream resource.

## Example Usage

```typescript
import { SchemaSupport } from "@apideck/sdk/models/components";

let value: SchemaSupport = {
  supported: true,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `supported`                                            | *boolean*                                              | :heavy_minus_sign:                                     | Can a resource schema be retrieved for this connector? | true                                                   |