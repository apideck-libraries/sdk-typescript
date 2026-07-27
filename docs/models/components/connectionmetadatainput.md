# ConnectionMetadataInput

Attach your own consumer specific metadata

## Example Usage

```typescript
import { ConnectionMetadataInput } from "@apideck/unify/models/components";

let value: ConnectionMetadataInput = {
  additionalProperties: {
    "account": {
      "name": "My Company",
      "id": "c01458a5-7276-41ce-bc19-639906b0450a",
    },
    "plan": "enterprise",
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `additionalProperties`                                                                                      | Record<string, *any*>                                                                                       | :heavy_minus_sign:                                                                                          | N/A                                                                                                         | {<br/>"account": {<br/>"name": "My Company",<br/>"id": "c01458a5-7276-41ce-bc19-639906b0450a"<br/>},<br/>"plan": "enterprise"<br/>} |