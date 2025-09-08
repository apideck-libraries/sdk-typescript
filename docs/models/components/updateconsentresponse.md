# UpdateConsentResponse

Consent updated

## Example Usage

```typescript
import { UpdateConsentResponse } from "@apideck/unify/models/components";

let value: UpdateConsentResponse = {
  statusCode: 200,
  status: "OK",
  data: {
    id: "con_1234567890",
    createdAt: "2025-04-15T14:30:00Z",
    granted: true,
    resources: {
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
    },
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP Response Status Code                                               | 200                                                                     |
| `status`                                                                | *string*                                                                | :heavy_check_mark:                                                      | HTTP Response Status                                                    | OK                                                                      |
| `data`                                                                  | [components.ConsentRecord](../../models/components/consentrecord.md)    | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |
| `raw`                                                                   | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | Raw response from the integration when raw=true query param is provided |                                                                         |