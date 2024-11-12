# PhoneNumber

## Example Usage

```typescript
import { PhoneNumber } from "apideck/models/components";

let value: PhoneNumber = {
  id: "12345",
  countryCode: "1",
  areaCode: "323",
  number: "111-111-1111",
  extension: "105",
  type: "primary",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_minus_sign:                                                       | Unique identifier of the phone number                                    | 12345                                                                    |
| `countryCode`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | The country code of the phone number, e.g. +1                            | 1                                                                        |
| `areaCode`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | The area code of the phone number, e.g. 323                              | 323                                                                      |
| `number`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | The phone number                                                         | 111-111-1111                                                             |
| `extension`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | The extension of the phone number                                        | 105                                                                      |
| `type`                                                                   | [components.PhoneNumberType](../../models/components/phonenumbertype.md) | :heavy_minus_sign:                                                       | The type of phone number                                                 | primary                                                                  |