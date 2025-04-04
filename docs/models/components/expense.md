# Expense

## Example Usage

```typescript
import { Expense } from "@apideck/unify/models/components";

let value: Expense = {
  id: "12345",
  number: "OIT00546",
  transactionDate: new Date("2021-05-01T12:00:00.000Z"),
  accountId: "123456",
  customerId: "12345",
  supplierId: "12345",
  companyId: "12345",
  departmentId: "12345",
  paymentType: "cash",
  currency: "USD",
  currencyRate: 0.69,
  type: "expense",
  memo: "For travel expenses incurred on 2024-05-15",
  taxRate: {
    id: "123456",
    code: "N-T",
    name: "GST on Purchases",
    rate: 10,
  },
  totalAmount: 275,
  lineItems: [
    {
      id: "12345",
      trackingCategories: [
        {
          id: "123456",
          name: "New York",
        },
      ],
      accountId: "123456",
      customerId: "12345",
      departmentId: "12345",
      locationId: "12345",
      subsidiaryId: "12345",
      taxRate: {
        id: "123456",
        code: "N-T",
        name: "GST on Purchases",
        rate: 10,
      },
      description: "Travel US.",
      totalAmount: 275,
      billable: true,
    },
  ],
  customFields: [
    {
      id: "2389328923893298",
      name: "employee_level",
      description: "Employee Level",
      value: 10,
    },
  ],
  updatedAt: new Date("2020-09-30T07:43:32.000Z"),
  createdAt: new Date("2020-09-30T07:43:32.000Z"),
  rowVersion: "1-12345",
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
| `id`                                                                                                                                                    | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A unique identifier for an object.                                                                                                                      | 12345                                                                                                                                                   |
| `number`                                                                                                                                                | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Number.                                                                                                                                                 | OIT00546                                                                                                                                                |
| `transactionDate`                                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_check_mark:                                                                                                                                      | The date of the transaction - YYYY:MM::DDThh:mm:ss.sTZD                                                                                                 | 2021-05-01T12:00:00.000Z                                                                                                                                |
| `accountId`                                                                                                                                             | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | The unique identifier for the ledger account that this expense should be credited to.                                                                   | 123456                                                                                                                                                  |
| `customerId`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The ID of the customer this entity is linked to. Used for expenses that should be marked as billable to customers.                                      | 12345                                                                                                                                                   |
| `supplierId`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The ID of the supplier this entity is linked to.                                                                                                        | 12345                                                                                                                                                   |
| `companyId`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The company or subsidiary id the transaction belongs to                                                                                                 | 12345                                                                                                                                                   |
| `departmentId`                                                                                                                                          | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The ID of the department                                                                                                                                | 12345                                                                                                                                                   |
| `paymentType`                                                                                                                                           | [components.ExpensePaymentType](../../models/components/expensepaymenttype.md)                                                                          | :heavy_minus_sign:                                                                                                                                      | The type of payment for the expense.                                                                                                                    | cash                                                                                                                                                    |
| `currency`                                                                                                                                              | [components.Currency](../../models/components/currency.md)                                                                                              | :heavy_minus_sign:                                                                                                                                      | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).                      | USD                                                                                                                                                     |
| `currencyRate`                                                                                                                                          | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Currency Exchange Rate at the time entity was recorded/generated.                                                                                       | 0.69                                                                                                                                                    |
| `type`                                                                                                                                                  | [components.ExpenseType](../../models/components/expensetype.md)                                                                                        | :heavy_minus_sign:                                                                                                                                      | The type of expense.                                                                                                                                    | expense                                                                                                                                                 |
| `memo`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The memo of the expense.                                                                                                                                | For travel expenses incurred on 2024-05-15                                                                                                              |
| `taxRate`                                                                                                                                               | [components.LinkedTaxRate](../../models/components/linkedtaxrate.md)                                                                                    | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `totalAmount`                                                                                                                                           | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The total amount of the expense line item.                                                                                                              | 275                                                                                                                                                     |
| `lineItems`                                                                                                                                             | [components.ExpenseLineItem](../../models/components/expenselineitem.md)[]                                                                              | :heavy_check_mark:                                                                                                                                      | Expense line items linked to this expense.                                                                                                              |                                                                                                                                                         |
| `customFields`                                                                                                                                          | [components.CustomField](../../models/components/customfield.md)[]                                                                                      | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `customMappings`                                                                                                                                        | [components.CustomMappings](../../models/components/custommappings.md)                                                                                  | :heavy_minus_sign:                                                                                                                                      | When custom mappings are configured on the resource, the result is included here.                                                                       |                                                                                                                                                         |
| `updatedAt`                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_minus_sign:                                                                                                                                      | The date and time when the object was last updated.                                                                                                     | 2020-09-30T07:43:32.000Z                                                                                                                                |
| `createdAt`                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_minus_sign:                                                                                                                                      | The date and time when the object was created.                                                                                                          | 2020-09-30T07:43:32.000Z                                                                                                                                |
| `rowVersion`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.              | 1-12345                                                                                                                                                 |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |