# OrderStatus

Order status. Clover specific: If no value is set, the status defaults to hidden, which indicates a hidden order. A hidden order is not displayed in user interfaces and can only be retrieved by its id. When creating an order via the REST API the value must be manually set to 'open'. More info [https://docs.clover.com/reference/orderupdateorder]()

## Example Usage

```typescript
import { OrderStatus } from "apideck/models/components";

let value: OrderStatus = "open";
```

## Values

```typescript
"open" | "draft" | "delivered" | "delayed" | "voided" | "completed" | "hidden"
```