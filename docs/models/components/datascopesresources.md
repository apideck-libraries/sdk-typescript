# DataScopesResources

Data scopes resource configuration that can be either detailed field permissions or a wildcard


## Supported Types

### `{ [k: string]: { [k: string]: components.DataScopesResources1 } }`

```typescript
const value: { [k: string]: { [k: string]: components.DataScopesResources1 } } =
  {
    "hris.employees": {
      "id": {
        read: true,
        write: false,
      },
      "first_name": {
        read: true,
        write: true,
      },
      "last_name": {
        read: true,
        write: true,
      },
      "email": {
        read: true,
        write: true,
      },
      "addresses[].street": {
        read: true,
        write: false,
      },
      "addresses[].city": {
        read: true,
        write: false,
      },
      "employment.job_title": {
        read: true,
        write: true,
      },
      "custom_fields[].employee_number": {
        read: true,
        write: false,
      },
    },
    "hris.departments": {
      "id": {
        read: true,
        write: false,
      },
      "name": {
        read: true,
        write: true,
      },
      "code": {
        read: true,
        write: false,
      },
    },
  };
```

### `components.DataScopesResources2`

```typescript
const value: components.DataScopesResources2 = "*";
```

