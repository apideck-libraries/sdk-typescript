# TicketInput

## Example Usage

```typescript
import { TicketInput } from "@apideck/sdk/models/components";

let value: TicketInput = {
  parentId: "12345",
  type: "Technical",
  subject: "Technical Support Request",
  description: "I am facing issues with my internet connection",
  status: "open",
  priority: "high",
  assignees: [
    {
      id: "12345",
    },
  ],
  dueDate: new Date("2020-09-30T07:43:32.000Z"),
  tags: [
    {
      id: "12345",
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
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `parentId`                                                                                                                                                               | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | The ticket's parent ID                                                                                                                                                   | 12345                                                                                                                                                                    |
| `type`                                                                                                                                                                   | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | The ticket's type                                                                                                                                                        | Technical                                                                                                                                                                |
| `subject`                                                                                                                                                                | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Subject of the ticket                                                                                                                                                    | Technical Support Request                                                                                                                                                |
| `description`                                                                                                                                                            | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | The ticket's description. HTML version of description is mapped if supported by the third-party platform                                                                 | I am facing issues with my internet connection                                                                                                                           |
| `status`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | The current status of the ticket. Possible values include: open, in_progress, closed, or - in cases where there is no clear mapping - the original value passed through. | open                                                                                                                                                                     |
| `priority`                                                                                                                                                               | [components.Priority](../../models/components/priority.md)                                                                                                               | :heavy_minus_sign:                                                                                                                                                       | Priority of the ticket                                                                                                                                                   | high                                                                                                                                                                     |
| `assignees`                                                                                                                                                              | [components.AssigneeInput](../../models/components/assigneeinput.md)[]                                                                                                   | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `dueDate`                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                            | :heavy_minus_sign:                                                                                                                                                       | Due date of the ticket                                                                                                                                                   | 2020-09-30T07:43:32.000Z                                                                                                                                                 |
| `tags`                                                                                                                                                                   | [components.CollectionTagInput](../../models/components/collectiontaginput.md)[]                                                                                         | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `passThrough`                                                                                                                                                            | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                                               | :heavy_minus_sign:                                                                                                                                                       | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.                  |                                                                                                                                                                          |