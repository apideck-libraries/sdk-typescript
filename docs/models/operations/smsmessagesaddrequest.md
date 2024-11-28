# SmsMessagesAddRequest

## Example Usage

```typescript
import { SmsMessagesAddRequest } from "@apideck/unify/models/operations";

let value: SmsMessagesAddRequest = {
  serviceId: "salesforce",
  message: {
    from: "+15017122661",
    to: "+15017122662",
    subject: "Picture",
    body: "Hi! How are you doing?",
    type: "sms",
    scheduledAt: new Date("2020-09-30T07:43:32.000Z"),
    webhookUrl:
      "https://unify.apideck.com/webhook/webhooks/eyz329dkffdl4949/x/sms",
    reference: "CUST001",
    messagingServiceId: "123456",
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

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `raw`                                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Include raw response. Mostly used for debugging purposes                                                                                      |                                                                                                                                               |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `message`                                                                                                                                     | [components.MessageInput](../../models/components/messageinput.md)                                                                            | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |