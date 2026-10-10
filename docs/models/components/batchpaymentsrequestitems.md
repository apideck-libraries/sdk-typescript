# BatchPaymentsRequestItems

## Example Usage

```typescript
import { BatchPaymentsRequestItems } from "@apideck/unify/models/components";

let value: BatchPaymentsRequestItems = {
  ref: "item-1",
  data: {
    currency: "USD",
    currencyRate: 0.69,
    totalAmount: 49.99,
    reference: "123456",
    paymentMethod: "cash",
    paymentMethodReference: "123456",
    paymentMethodId: "12345",
    account: {
      id: "123456",
      name: "Bank account",
      nominalCode: "N091",
      code: "453",
      parentId: "123456",
      displayId: "123456",
    },
    transactionDate: new Date("2021-05-01T12:00:00.000Z"),
    customer: {
      id: "12345",
      displayName: "Windsurf Shop",
      email: "boring@boring.com",
    },
    companyId: "12345",
    subsidiary: {
      displayId: "123456",
      name: "Acme Inc.",
    },
    reconciled: true,
    status: "authorised",
    type: "accounts_receivable",
    allocations: [
      {
        id: "123456",
        amount: 49.99,
        allocationId: "123456",
      },
    ],
    note: "Some notes about this transaction",
    number: "123456",
    trackingCategories: null,
    customFields: [
      {
        id: "2389328923893298",
        name: "employee_level",
        refName: "Marketing",
        description: "Employee Level",
        value: "Uses Salesforce and Marketo",
      },
    ],
    rowVersion: "1-12345",
    displayId: "123456",
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
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                                               | Example                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ref`                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                        | A caller-supplied reference for this item, echoed back on the matching result so each outcome can be tied to the record it came from. Must be unique within the request. Never sent to the connector.                                                                                     | item-1                                                                                                                                                                                                                                                                                    |
| `data`                                                                                                                                                                                                                                                                                    | [components.PaymentCreateInput](../../models/components/paymentcreateinput.md)                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                        | The writable shape of Payment for a batch create. Identical to [Payment](the model returned on reads) with the read-only properties removed — the same properties the single-record create endpoint rejects, so a batched record and a single-record create accept exactly the same body. |                                                                                                                                                                                                                                                                                           |