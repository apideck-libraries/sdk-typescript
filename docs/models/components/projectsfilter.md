# ProjectsFilter

## Example Usage

```typescript
import { ProjectsFilter } from "@apideck/unify/models/components";

let value: ProjectsFilter = {
  name: "Website Redesign",
  status: "active",
  customerId: "12345",
  updatedSince: new Date("2020-09-30T07:43:32.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Name of project to search for                                                                 | Website Redesign                                                                              |
| `status`                                                                                      | [components.ProjectStatus](../../models/components/projectstatus.md)                          | :heavy_minus_sign:                                                                            | Status of projects to filter by                                                               | active                                                                                        |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Filter projects by customer ID                                                                | 12345                                                                                         |
| `updatedSince`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Return projects modified after this date                                                      | 2020-09-30T07:43:32.000Z                                                                      |