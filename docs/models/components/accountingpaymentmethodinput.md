# AccountingPaymentMethodInput

## Example Usage

```typescript
import { AccountingPaymentMethodInput } from "@apideck/unify/models/components";

let value: AccountingPaymentMethodInput = {
  name: "Cash",
  type: "cash",
  status: "active",
  rowVersion: "1-12345",
  passThrough: [
    {
      serviceId: "<id>",
      extendPaths: [
        {
          path: "$.nested.property",
          value: {
            "TaxClassificationRef": {
              "value": "EUC-99990201-V1-00020000",
            },
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             | Example                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The name of the payment method.                                                                                                                         | Cash                                                                                                                                                    |
| `type`                                                                                                                                                  | [components.AccountingPaymentMethodType](../../models/components/accountingpaymentmethodtype.md)                                                        | :heavy_minus_sign:                                                                                                                                      | The type of payment method.                                                                                                                             | cash                                                                                                                                                    |
| `status`                                                                                                                                                | [components.AccountingPaymentMethodStatus](../../models/components/accountingpaymentmethodstatus.md)                                                    | :heavy_minus_sign:                                                                                                                                      | The status of the payment method.                                                                                                                       | active                                                                                                                                                  |
| `rowVersion`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.              | 1-12345                                                                                                                                                 |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |