# EcommerceCustomersOneResponse


## Supported Types

### `components.GetEcommerceCustomerResponse`

```typescript
const value: components.GetEcommerceCustomerResponse = {
  statusCode: 200,
  status: "OK",
  service: "shopify",
  resource: "customers",
  operation: "one",
  data: {
    id: "12345",
    name: "John Doe",
    firstName: "John",
    lastName: "Doe",
    companyName: "Acme Inc.",
    status: "active",
    currency: "USD",
    emails: [
      {
        id: "123",
        email: "elon@musk.com",
        type: "primary",
      },
    ],
    phoneNumbers: [
      {
        id: "12345",
        countryCode: "1",
        areaCode: "323",
        number: "111-111-1111",
        extension: "105",
        type: "primary",
      },
    ],
    addresses: [
      {
        type: "billing",
        id: "12345",
        line1: "Main street",
        line2: "apt #",
        city: "Anytown",
        state: "Ohio",
        postalCode: "12345",
        country: "US",
      },
    ],
    orders: [
      {
        id: "12345",
        total: "199.99",
        status: "active",
      },
    ],
    createdAt: new Date("2020-09-30T07:43:32.000Z"),
    updatedAt: new Date("2020-09-30T07:43:32.000Z"),
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
  detail: "Missing Header: x-apideck-consumer-id",
  ref: "https://developers.apideck.com/errors#unauthorizederror",
};
```

