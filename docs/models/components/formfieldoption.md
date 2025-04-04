# FormFieldOption


## Supported Types

### `components.SimpleFormFieldOption`

```typescript
const value: components.SimpleFormFieldOption = {
  label: "General Channel",
  value: 123,
  optionType: "simple",
};
```

### `components.FormFieldOptionGroup`

```typescript
const value: components.FormFieldOptionGroup = {
  id: "1234",
  label: "General Channel",
  options: [
    {
      label: "General Channel",
      value: [
        "team",
        "general",
      ],
      optionType: "simple",
    },
  ],
  optionType: "group",
};
```

