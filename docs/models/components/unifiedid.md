# UnifiedId

A object containing a unique identifier for the resource that was created, updated, or deleted.

## Example Usage

```typescript
import { UnifiedId } from "@apideck/unify/models/components";

let value: UnifiedId = {
  id: "12345",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `id`                                  | *string*                              | :heavy_check_mark:                    | The unique identifier of the resource | 12345                                 |