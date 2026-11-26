# AccountingGoodsReceiptsAddRequest

## Example Usage

```typescript
import { AccountingGoodsReceiptsAddRequest } from "@apideck/unify/models/operations";

let value: AccountingGoodsReceiptsAddRequest = {
  serviceId: "salesforce",
  companyId: "12345",
  goodsReceiptCreateInput: {
    purchaseOrderId: "4500000004",
    receivedDate: new Date("2026-09-01"),
    postedDate: new Date("2026-09-01"),
    reference: "DN-78910",
    notes: "Partial delivery, remainder expected next week.",
    locationId: "1710/171A",
    lineItems: [
      {
        purchaseOrder: {
          id: "123456",
          lineId: "123456",
          lineNumber: "1",
        },
        quantityReceived: 4,
        unitOfMeasure: "pc.",
        description: "Pallet 1 of 2",
        locationId: "1710/171A",
      },
    ],
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

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  | Example                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `raw`                                                                                                                                                        | *boolean*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                           | Include raw response. Mostly used for debugging purposes                                                                                                     |                                                                                                                                                              |
| `consumerId`                                                                                                                                                 | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | ID of the consumer which you want to get or push data from                                                                                                   | test-consumer                                                                                                                                                |
| `appId`                                                                                                                                                      | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | The ID of your Unify application                                                                                                                             | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                                                                                      |
| `serviceId`                                                                                                                                                  | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.                | salesforce                                                                                                                                                   |
| `companyId`                                                                                                                                                  | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | The ID of the company to scope requests to. For connectors that support multi-company, this overrides the default company configured in connection settings. | 12345                                                                                                                                                        |
| `goodsReceiptCreateInput`                                                                                                                                    | [components.GoodsReceiptCreateInput](../../models/components/goodsreceiptcreateinput.md)                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |                                                                                                                                                              |