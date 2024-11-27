# CreateCallbackState

## Example Usage

```typescript
import { CreateCallbackState } from "@apideck/sdk/models/components";

let value: CreateCallbackState = {
  redirectUri: "https://example.com/callback",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `redirectUri`                                                | *string*                                                     | :heavy_minus_sign:                                           | The redirect URI to be used after the connection is created. | https://example.com/callback                                 |