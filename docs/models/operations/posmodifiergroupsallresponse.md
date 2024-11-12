# PosModifierGroupsAllResponse


## Supported Types

### `components.GetModifierGroupsResponse`

```typescript
const value: components.GetModifierGroupsResponse = {
  statusCode: 200,
  status: "OK",
  service: "square",
  resource: "ModifierGroups",
  operation: "all",
  data: [
    {
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
  ],
  meta: {
    itemsOnPage: 50,
    cursors: {
      previous: "em9oby1jcm06OnBhZ2U6OjE=",
      current: "em9oby1jcm06OnBhZ2U6OjI=",
      next: "em9oby1jcm06OnBhZ2U6OjM=",
    },
  },
  links: {
    previous:
      "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D",
    current: "https://unify.apideck.com/crm/companies",
    next:
      "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM",
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

