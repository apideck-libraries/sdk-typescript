# PosModifierGroupsOneResponse

## Example Usage

```typescript
import { PosModifierGroupsOneResponse } from "apideck/models/operations";

let value: PosModifierGroupsOneResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getModifierGroupResponse: {
    statusCode: 200,
    status: "OK",
    service: "square",
    resource: "ModifierGroups",
    operation: "one",
    data: {
      id: "12345",
      name: "Modifier",
      alternateName: "Modifier New",
      minimumRequired: 1,
      maximumAllowed: 5,
      selectionType: "single",
      presentAtAllLocations: false,
      modifiers: [
        {
          id: "12345",
          name: "Modifier",
          alternateName: "Modifier New",
          priceAmount: 10,
          currency: "USD",
          available: true,
        },
      ],
      deleted: true,
      rowVersion: "1-12345",
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

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `getModifierGroupResponse`                                                                 | [components.GetModifierGroupResponse](../../models/components/getmodifiergroupresponse.md) | :heavy_minus_sign:                                                                         | ModifierGroups                                                                             |
| `unexpectedErrorResponse`                                                                  | [components.UnexpectedErrorResponse](../../models/components/unexpectederrorresponse.md)   | :heavy_minus_sign:                                                                         | Unexpected error                                                                           |