# NoteInput

## Example Usage

```typescript
import { NoteInput } from "apideck/models/components";

let value: NoteInput = {
  title: "Meeting Notes",
  content: "Office hours are 9AM-6PM",
  ownerId: "12345",
  contactId: "12345",
  companyId: "12345",
  opportunityId: "12345",
  leadId: "12345",
  active: true,
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
| `title`                                                                                                                                                 | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The title of the note                                                                                                                                   | Meeting Notes                                                                                                                                           |
| `content`                                                                                                                                               | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The content of the note.                                                                                                                                | Office hours are 9AM-6PM                                                                                                                                |
| `ownerId`                                                                                                                                               | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The user that owns the note.                                                                                                                            | 12345                                                                                                                                                   |
| `contactId`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The contact that is related to the note.                                                                                                                | 12345                                                                                                                                                   |
| `companyId`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The company that is related to the note.                                                                                                                | 12345                                                                                                                                                   |
| `opportunityId`                                                                                                                                         | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The opportunity that is related to the note.                                                                                                            | 12345                                                                                                                                                   |
| `leadId`                                                                                                                                                | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The lead that is related to the note.                                                                                                                   | 12345                                                                                                                                                   |
| `active`                                                                                                                                                | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Whether the Note is active or not.                                                                                                                      | true                                                                                                                                                    |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |