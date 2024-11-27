# PaginationCoverageMode

How pagination is implemented on this connector. Native mode means Apideck is using the pagination parameters of the connector. With virtual pagination, the connector does not support pagination, but Apideck emulates it.

## Example Usage

```typescript
import { PaginationCoverageMode } from "@apideck/sdk/models/components";

let value: PaginationCoverageMode = "native";
```

## Values

```typescript
"native" | "virtual"
```