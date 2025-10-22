# ExpenseInput


## Supported Types

### `components.Expense1Input`

```typescript
const value: components.Expense1Input = {
  number: "OIT00546",
  transactionDate: new Date("2021-05-01T12:00:00.000Z"),
  accountId: "123456",
  account: {
    id: "123456",
    nominalCode: "N091",
    code: "453",
    parentId: "123456",
    displayId: "123456",
  },
  bankAccount: {
    id: "ba_123456",
    name: "Main Operating Account",
    accountNumber: "123465",
    bankName: "Chase Bank",
  },
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
    rate: 10,
  },
  totalAmount: 275,
  lineItems: [],
  reference: "INV-2024-001",
  sourceDocumentUrl: "https://www.invoicesolution.com/expense/123456",
  customFields: [
    {
      id: "2389328923893298",
      name: "employee_level",
      description: "Employee Level",
      value: "Uses Salesforce and Marketo",
    },
  ],
  status: "draft",
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

### `components.Expense2Input`

```typescript
const value: components.Expense2Input = {
  number: "OIT00546",
  transactionDate: new Date("2021-05-01T12:00:00.000Z"),
  account: {
    id: "123456",
    nominalCode: "N091",
    code: "453",
    parentId: "123456",
    displayId: "123456",
  },
  bankAccount: {
    id: "ba_123456",
    name: "Main Operating Account",
    accountNumber: "123465",
    bankName: "Chase Bank",
  },
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
    rate: 10,
  },
  totalAmount: 275,
  lineItems: [
    {
      trackingCategories: null,
      account: {
        id: "123456",
        nominalCode: "N091",
        code: "453",
        parentId: "123456",
        displayId: "123456",
      },
      customerId: "12345",
      departmentId: "12345",
      locationId: "12345",
      subsidiaryId: "12345",
      taxRate: {
        id: "123456",
        rate: 10,
      },
      description: "Travel US.",
      totalAmount: 275,
      billable: true,
      lineNumber: 1,
      rebilling: {
        rebillable: true,
        rebillStatus: "billed",
        linkedTransactionId: "txn_abc123",
        linkedTransactionLineId: "line_xyz789",
      },
    },
  ],
  reference: "INV-2024-001",
  sourceDocumentUrl: "https://www.invoicesolution.com/expense/123456",
  customFields: [
    {
      id: "2389328923893298",
      name: "employee_level",
      description: "Employee Level",
      value: "Uses Salesforce and Marketo",
    },
  ],
  status: "draft",
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

### `components.Expense3`

```typescript
const value: components.Expense3 = {
  number: "OIT00546",
  transactionDate: new Date("2021-05-01T12:00:00.000Z"),
  account: {
    id: "123456",
    nominalCode: "N091",
    code: "453",
    parentId: "123456",
    displayId: "123456",
  },
  bankAccount: {
    id: "ba_123456",
    name: "Main Operating Account",
    accountNumber: "123465",
    bankName: "Chase Bank",
  },
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
    rate: 10,
  },
  totalAmount: 275,
  lineItems: [],
  reference: "INV-2024-001",
  sourceDocumentUrl: "https://www.invoicesolution.com/expense/123456",
  customFields: [
    {
      id: "2389328923893298",
      name: "employee_level",
      description: "Employee Level",
      value: "Uses Salesforce and Marketo",
    },
  ],
  status: "draft",
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

