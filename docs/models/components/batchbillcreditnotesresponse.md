# BatchBillCreditNotesResponse

Bill Credit Notes batch processed

## Example Usage

```typescript
import { BatchBillCreditNotesResponse } from "@apideck/unify/models/components";

let value: BatchBillCreditNotesResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "bill-credit-notes",
  operation: "add",
  data: [
    {
      ref: "item-1",
      id: "12345",
      downstreamId: "12345",
      status: "created",
      error: {
        statusCode: 502,
        error: "Bad Gateway",
        typeName: "PostWriteProcessingError",
        message: "The record was written, but processing its response failed.",
        detail: "The record was written, but processing its response failed.",
        ref: "https://developers.apideck.com/errors#postwriteprocessingerror",
      },
      warnings: [
        {
          type: "currency_not_configured",
          operation: "invoicesAdd",
          message:
            "Currency \"CAD\" is not configured for this organization -- the request was sent without currency_id.",
          statusCode: 200,
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `statusCode`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | HTTP Response Status Code                                                  | 200                                                                        |
| `status`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | HTTP Response Status                                                       | OK                                                                         |
| `service`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | Apideck ID of service provider                                             | quickbooks                                                                 |
| `resource`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | Unified API resource name                                                  | bill-credit-notes                                                          |
| `operation`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | Operation performed                                                        | add                                                                        |
| `data`                                                                     | [components.BatchItemResult](../../models/components/batchitemresult.md)[] | :heavy_check_mark:                                                         | One result per item in the request, in the order the items were sent.      |                                                                            |
| `raw`                                                                      | Record<string, *any*>                                                      | :heavy_minus_sign:                                                         | Raw response from the integration when raw=true query param is provided    |                                                                            |