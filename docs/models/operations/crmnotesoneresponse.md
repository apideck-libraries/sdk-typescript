# CrmNotesOneResponse


## Supported Types

### `components.GetNoteResponse`

```typescript
const value: components.GetNoteResponse = {
  statusCode: 200,
  status: "OK",
  service: "zoho-crm",
  resource: "notes",
  operation: "one",
  data: {
    id: "12345",
    title: "Meeting Notes",
    content: "Office hours are 9AM-6PM",
    ownerId: "12345",
    contactId: "12345",
    companyId: "12345",
    opportunityId: "12345",
    leadId: "12345",
    active: true,
    updatedBy: "12345",
    createdBy: "12345",
    updatedAt: "2020-09-30T07:43:32.000Z",
    createdAt: "2020-09-30T07:43:32.000Z",
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

