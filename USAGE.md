<!-- Start SDK Example Usage [usage] -->
```typescript
import { Apideck } from "@apideck/unify";

const apideck = new Apideck({
  apiKey: process.env["APIDECK_API_KEY"] ?? "",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
});

async function run() {
  const result = await apideck.accounting.taxRates.list({
    raw: false,
    serviceId: "salesforce",
    limit: 20,
    filter: {
      assets: true,
      equity: true,
      expenses: true,
      liabilities: true,
      revenue: true,
    },
    passThrough: {
      "search": "San Francisco",
    },
    fields: "id,updated_at",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```
<!-- End SDK Example Usage [usage] -->