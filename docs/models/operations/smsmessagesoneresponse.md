# SmsMessagesOneResponse


## Supported Types

### `components.GetMessageResponse`

```typescript
const value: components.GetMessageResponse = {
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
};
```

### `components.UnexpectedErrorResponse`

```typescript
const value: components.UnexpectedErrorResponse = {
  statusCode: 400,
  error: "Bad Request",
  typeName: "RequestHeadersValidationError",
  message: "Invalid Params",
  detail: {},
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

