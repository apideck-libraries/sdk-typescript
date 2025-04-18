
# Migration Guide: @apideck/node to @apideck/unify


This guide helps you migrate from the previous `@apideck/node` SDK to the new `@apideck/unify` SDK.


## Key Changes

1. **Package Name and import**

````bash
# Old package
npm install @apideck/node

# New package
npm install @apideck/unify

# For Yarn users, also install zod
yarn add @apideck/unify zod
````

Now you will have to import `@apideck/unify`

```ts
import { Apideck } from "@apideck/unify";
```


2. **Method Naming Changes**

```ts
// Old SDK
const { crm } = apideck;
const response = await crm.contactsAll({
  limit: 10
});
const contact = await crm.contactsAdd({
  contact: { /* contact data */ }
});

// New SDK
const response = await apideck.crm.contacts.list({
  limit: 10
});
const contact = await apideck.crm.contacts.create({
  contact: { /* contact data */ }
});
```

3. **Response Structure**

The new SDK wraps all responses in a typed response object that includes both the API response and HTTP metadata:

```ts
// Old SDK
const { data, meta } = await crm.contactsAll();
console.log(data[0].id);

// New SDK
const result = await apideck.crm.contacts.list();
console.log(result.getContactsResponse.data[0].id);

// Access HTTP metadata
console.log(result.httpMeta.response.status);
console.log(result.httpMeta.response.headers);
```

Every response includes httpMeta which provides access to the raw HTTP request and response:
The `httpMeta` object is essential because it provides detailed information about the HTTP request and response, which can be crucial for debugging and logging purposes.

```ts
const result = await apideck.crm.contacts.list();

// Access HTTP metadata
const { httpMeta } = result;
console.log({
  requestUrl: httpMeta.request.url,
  requestMethod: httpMeta.request.method,
  responseStatus: httpMeta.response.status,
  responseHeaders: Object.fromEntries(httpMeta.response.headers)
});
```


4. **Method Naming Convention Changes**


| Old Method | New Method |
| contactsAll | contacts.list |
| contactsAdd | contacts.create |
| contactsOne | contacts.get |
| contactsUpdate | contacts.update |
| contactsDelete | contacts.delete |
...


5. **Error Handling**

```ts
// Old SDK
try {
  const response = await crm.contactsAll();
} catch (error) {
  console.error(error);
}

// New SDK
try {
  const result = await apideck.crm.contacts.list();
} catch (error) {
  if (error instanceof SDKValidationError) {
    console.error("Validation error:", error.pretty());
  } else if (error instanceof APIError) {
    console.error("API error:", error.message);
  }
}
```

For more information about error handling, please refer to the [Error Handling Documentation](https://github.com/apideck-libraries/sdk-typescript/tree/main?tab=readme-ov-file#error-handling).


6. **Working with dates**

The new SDK uses RFC3339 format for all date and date-time fields. This ensures consistent date handling across all API operations. The SDK provides an `RFCDate` helper to make working with dates easier.

```typescript
// Old SDK
const result = await crm.opportunitiesAll({
  updated_since: "2020-09-30"
});

// New SDK - Using native Date
const result = await apideck.crm.opportunities.list({
  serviceId: "salesforce",
  filter: {
    updatedSince: new Date("2020-09-30T07:43:32.000Z") // RFC3339 format
  }
});

// New SDK - Using RFCDate helper
import { RFCDate } from "@apideck/unify";

const result = await apideck.crm.opportunities.list({
  serviceId: "salesforce",
  filter: {
    // RFCDate for date-only fields (automatically handles timezone)
    updatedSince: new RFCDate("2020-09-30")
  }
});

// Example setting dates in create operations
const opportunity = await apideck.crm.opportunities.create({
  serviceId: "salesforce",
  opportunity: {
    title: "New Deal",
    // Use RFCDate for date-only fields
    closeDate: new RFCDate("2024-12-31"),
  }
});
```

The SDK will automatically validate that dates are in the correct format and will throw a `SDKValidationError` if an invalid date format is provided.



## Breaking Changes

1. Package name has changed from `@apideck/node` to `@apideck/unify`
2. All API method names have been restructured for consistency
3. Response structure now includes typed response wrappers (e.g., `getContactsResponse`) and `httpMeta`
4. The `utils.uploadFile` helper has been replaced with a dedicated API method
5. Some property names in request/response objects may have changed to follow camelCase convention
6. The new SDK uses RFC3339 format for all date and date-time fields


## Need help?

If you encounter any issues during migration:

1. Checkout out our [documentation](https://github.com/apideck-libraries/sdk-typescript/tree/main?tab=readme-ov-file#apideck)
2. Open an issue on our [GitHub repository](https://github.com/apideck-libraries/sdk-typescript/issues)
3. Contact our support at `support@apideck.com`



