# SmsMessagesOneResponse

## Example Usage

```typescript
import { SmsMessagesOneResponse } from "@apideck/sdk/models/operations";

let value: SmsMessagesOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getMessageResponse: {
    statusCode: 200,
    status: "OK",
    service: "twilio",
    resource: "Messages",
    operation: "one",
    data: {
      id: "12345",
      from: "+15017122661",
      to: "+15017122662",
      subject: "Picture",
      body: "Hi! How are you doing?",
      type: "sms",
      numberOfUnits: 1,
      numberOfMediaFiles: 1,
      direction: "outbound-api",
      status: "sent",
      scheduledAt: new Date("2020-09-30T07:43:32.000Z"),
      sentAt: new Date("2020-09-30T07:43:32.000Z"),
      webhookUrl:
        "https://unify.apideck.com/webhook/webhooks/eyz329dkffdl4949/x/sms",
      reference: "CUST001",
      price: {
        perUnit: "0.01",
        totalAmount: "0.01",
        currency: "USD",
      },
      error: {
        code: "X1",
        message: "Something went wrong",
      },
      messagingServiceId: "123456",
      updatedBy: "12345",
      createdBy: "12345",
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
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
  },
  unexpectedErrorResponse: {
    statusCode: 400,
    error: "Bad Request",
    typeName: "RequestHeadersValidationError",
    message: "Invalid Params",
    detail: "Missing Header: x-apideck-consumer-id",
    ref: "https://developers.apideck.com/errors#unauthorizederror",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `getMessageResponse`                                                                     | [components.GetMessageResponse](../../models/components/getmessageresponse.md)           | :heavy_minus_sign:                                                                       | Messages                                                                                 |
| `unexpectedErrorResponse`                                                                | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md) | :heavy_minus_sign:                                                                       | Unexpected error                                                                         |