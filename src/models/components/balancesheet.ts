/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Currency,
  Currency$inboundSchema,
  Currency$outboundSchema,
} from "./currency.js";

/**
 * A balance sheet assets account represents the financial position of a company at a specific point in time.
 */
export type BalanceSheetAssetsAccount = {
  /**
   * The unique identifier for the account.
   */
  accountId?: string | undefined;
  /**
   * The account code of the account
   */
  code?: string | undefined;
  /**
   * The name of the account.
   */
  name?: string | undefined;
  /**
   * The amount or value of the item
   */
  value?: number | undefined;
  /**
   * A list of balance sheet accounts
   */
  items?: any | undefined;
};

/**
 * A balance sheet liabilities account represents the financial position of a company at a specific point in time.
 */
export type BalanceSheetLiabilitiesAccount = {
  /**
   * The unique identifier for the account.
   */
  accountId?: string | undefined;
  /**
   * The account code of the account
   */
  code?: string | undefined;
  /**
   * The name of the account.
   */
  name?: string | undefined;
  /**
   * The amount or value of the item
   */
  value?: number | undefined;
  /**
   * A list of balance sheet accounts
   */
  items?: any | undefined;
};

/**
 * A balance sheet equity account represents the financial position of a company at a specific point in time.
 */
export type BalanceSheetEquityAccount = {
  /**
   * The unique identifier for the account.
   */
  accountId?: string | undefined;
  /**
   * The account code of the account
   */
  code?: string | undefined;
  /**
   * The name of the account.
   */
  name?: string | undefined;
  /**
   * The amount or value of the item
   */
  value?: number | undefined;
  /**
   * A list of balance sheet accounts
   */
  items?: any | undefined;
};

/**
 * A balance sheet uncategorized items account represents the financial position of a company at a specific point in time.
 */
export type BalanceSheetUncategorizedItemsAccount = {
  /**
   * The unique identifier for the account.
   */
  accountId?: string | undefined;
  /**
   * The account code of the account
   */
  code?: string | undefined;
  /**
   * The name of the account.
   */
  name?: string | undefined;
  /**
   * The amount or value of the item
   */
  value?: number | undefined;
  /**
   * A list of balance sheet accounts
   */
  items?: any | undefined;
};

export type Reports = {
  /**
   * A unique identifier for an object.
   */
  id?: string | undefined;
  /**
   * The name of the report
   */
  reportName?: string | undefined;
  /**
   * The start date of the report
   */
  startDate?: string | undefined;
  /**
   * The start date of the report
   */
  endDate: string;
  /**
   * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
   */
  currency?: Currency | null | undefined;
  /**
   * A balance sheet assets account represents the financial position of a company at a specific point in time.
   */
  assets: BalanceSheetAssetsAccount;
  /**
   * A balance sheet liabilities account represents the financial position of a company at a specific point in time.
   */
  liabilities: BalanceSheetLiabilitiesAccount;
  /**
   * A balance sheet equity account represents the financial position of a company at a specific point in time.
   */
  equity: BalanceSheetEquityAccount;
  /**
   * The net assets of the balance sheet
   */
  netAssets?: number | undefined;
  /**
   * When custom mappings are configured on the resource, the result is included here.
   */
  customMappings?: { [k: string]: any } | null | undefined;
  /**
   * The user who last updated the object.
   */
  updatedBy?: string | null | undefined;
  /**
   * The user who created the object.
   */
  createdBy?: string | null | undefined;
  /**
   * The date and time when the object was last updated.
   */
  updatedAt?: Date | null | undefined;
  /**
   * The date and time when the object was created.
   */
  createdAt?: Date | null | undefined;
  /**
   * A balance sheet uncategorized items account represents the financial position of a company at a specific point in time.
   */
  uncategorizedItems?: BalanceSheetUncategorizedItemsAccount | undefined;
};

export type BalanceSheet = {
  reports: Array<Reports>;
};

/** @internal */
export const BalanceSheetAssetsAccount$inboundSchema: z.ZodType<
  BalanceSheetAssetsAccount,
  z.ZodTypeDef,
  unknown
> = z.object({
  account_id: z.string().optional(),
  code: z.string().optional(),
  name: z.string().optional(),
  value: z.number().optional(),
  items: z.any().optional(),
}).transform((v) => {
  return remap$(v, {
    "account_id": "accountId",
  });
});

/** @internal */
export type BalanceSheetAssetsAccount$Outbound = {
  account_id?: string | undefined;
  code?: string | undefined;
  name?: string | undefined;
  value?: number | undefined;
  items?: any | undefined;
};

/** @internal */
export const BalanceSheetAssetsAccount$outboundSchema: z.ZodType<
  BalanceSheetAssetsAccount$Outbound,
  z.ZodTypeDef,
  BalanceSheetAssetsAccount
> = z.object({
  accountId: z.string().optional(),
  code: z.string().optional(),
  name: z.string().optional(),
  value: z.number().optional(),
  items: z.any().optional(),
}).transform((v) => {
  return remap$(v, {
    accountId: "account_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BalanceSheetAssetsAccount$ {
  /** @deprecated use `BalanceSheetAssetsAccount$inboundSchema` instead. */
  export const inboundSchema = BalanceSheetAssetsAccount$inboundSchema;
  /** @deprecated use `BalanceSheetAssetsAccount$outboundSchema` instead. */
  export const outboundSchema = BalanceSheetAssetsAccount$outboundSchema;
  /** @deprecated use `BalanceSheetAssetsAccount$Outbound` instead. */
  export type Outbound = BalanceSheetAssetsAccount$Outbound;
}

export function balanceSheetAssetsAccountToJSON(
  balanceSheetAssetsAccount: BalanceSheetAssetsAccount,
): string {
  return JSON.stringify(
    BalanceSheetAssetsAccount$outboundSchema.parse(balanceSheetAssetsAccount),
  );
}

export function balanceSheetAssetsAccountFromJSON(
  jsonString: string,
): SafeParseResult<BalanceSheetAssetsAccount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BalanceSheetAssetsAccount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BalanceSheetAssetsAccount' from JSON`,
  );
}

/** @internal */
export const BalanceSheetLiabilitiesAccount$inboundSchema: z.ZodType<
  BalanceSheetLiabilitiesAccount,
  z.ZodTypeDef,
  unknown
> = z.object({
  account_id: z.string().optional(),
  code: z.string().optional(),
  name: z.string().optional(),
  value: z.number().optional(),
  items: z.any().optional(),
}).transform((v) => {
  return remap$(v, {
    "account_id": "accountId",
  });
});

/** @internal */
export type BalanceSheetLiabilitiesAccount$Outbound = {
  account_id?: string | undefined;
  code?: string | undefined;
  name?: string | undefined;
  value?: number | undefined;
  items?: any | undefined;
};

/** @internal */
export const BalanceSheetLiabilitiesAccount$outboundSchema: z.ZodType<
  BalanceSheetLiabilitiesAccount$Outbound,
  z.ZodTypeDef,
  BalanceSheetLiabilitiesAccount
> = z.object({
  accountId: z.string().optional(),
  code: z.string().optional(),
  name: z.string().optional(),
  value: z.number().optional(),
  items: z.any().optional(),
}).transform((v) => {
  return remap$(v, {
    accountId: "account_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BalanceSheetLiabilitiesAccount$ {
  /** @deprecated use `BalanceSheetLiabilitiesAccount$inboundSchema` instead. */
  export const inboundSchema = BalanceSheetLiabilitiesAccount$inboundSchema;
  /** @deprecated use `BalanceSheetLiabilitiesAccount$outboundSchema` instead. */
  export const outboundSchema = BalanceSheetLiabilitiesAccount$outboundSchema;
  /** @deprecated use `BalanceSheetLiabilitiesAccount$Outbound` instead. */
  export type Outbound = BalanceSheetLiabilitiesAccount$Outbound;
}

export function balanceSheetLiabilitiesAccountToJSON(
  balanceSheetLiabilitiesAccount: BalanceSheetLiabilitiesAccount,
): string {
  return JSON.stringify(
    BalanceSheetLiabilitiesAccount$outboundSchema.parse(
      balanceSheetLiabilitiesAccount,
    ),
  );
}

export function balanceSheetLiabilitiesAccountFromJSON(
  jsonString: string,
): SafeParseResult<BalanceSheetLiabilitiesAccount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BalanceSheetLiabilitiesAccount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BalanceSheetLiabilitiesAccount' from JSON`,
  );
}

/** @internal */
export const BalanceSheetEquityAccount$inboundSchema: z.ZodType<
  BalanceSheetEquityAccount,
  z.ZodTypeDef,
  unknown
> = z.object({
  account_id: z.string().optional(),
  code: z.string().optional(),
  name: z.string().optional(),
  value: z.number().optional(),
  items: z.any().optional(),
}).transform((v) => {
  return remap$(v, {
    "account_id": "accountId",
  });
});

/** @internal */
export type BalanceSheetEquityAccount$Outbound = {
  account_id?: string | undefined;
  code?: string | undefined;
  name?: string | undefined;
  value?: number | undefined;
  items?: any | undefined;
};

/** @internal */
export const BalanceSheetEquityAccount$outboundSchema: z.ZodType<
  BalanceSheetEquityAccount$Outbound,
  z.ZodTypeDef,
  BalanceSheetEquityAccount
> = z.object({
  accountId: z.string().optional(),
  code: z.string().optional(),
  name: z.string().optional(),
  value: z.number().optional(),
  items: z.any().optional(),
}).transform((v) => {
  return remap$(v, {
    accountId: "account_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BalanceSheetEquityAccount$ {
  /** @deprecated use `BalanceSheetEquityAccount$inboundSchema` instead. */
  export const inboundSchema = BalanceSheetEquityAccount$inboundSchema;
  /** @deprecated use `BalanceSheetEquityAccount$outboundSchema` instead. */
  export const outboundSchema = BalanceSheetEquityAccount$outboundSchema;
  /** @deprecated use `BalanceSheetEquityAccount$Outbound` instead. */
  export type Outbound = BalanceSheetEquityAccount$Outbound;
}

export function balanceSheetEquityAccountToJSON(
  balanceSheetEquityAccount: BalanceSheetEquityAccount,
): string {
  return JSON.stringify(
    BalanceSheetEquityAccount$outboundSchema.parse(balanceSheetEquityAccount),
  );
}

export function balanceSheetEquityAccountFromJSON(
  jsonString: string,
): SafeParseResult<BalanceSheetEquityAccount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BalanceSheetEquityAccount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BalanceSheetEquityAccount' from JSON`,
  );
}

/** @internal */
export const BalanceSheetUncategorizedItemsAccount$inboundSchema: z.ZodType<
  BalanceSheetUncategorizedItemsAccount,
  z.ZodTypeDef,
  unknown
> = z.object({
  account_id: z.string().optional(),
  code: z.string().optional(),
  name: z.string().optional(),
  value: z.number().optional(),
  items: z.any().optional(),
}).transform((v) => {
  return remap$(v, {
    "account_id": "accountId",
  });
});

/** @internal */
export type BalanceSheetUncategorizedItemsAccount$Outbound = {
  account_id?: string | undefined;
  code?: string | undefined;
  name?: string | undefined;
  value?: number | undefined;
  items?: any | undefined;
};

/** @internal */
export const BalanceSheetUncategorizedItemsAccount$outboundSchema: z.ZodType<
  BalanceSheetUncategorizedItemsAccount$Outbound,
  z.ZodTypeDef,
  BalanceSheetUncategorizedItemsAccount
> = z.object({
  accountId: z.string().optional(),
  code: z.string().optional(),
  name: z.string().optional(),
  value: z.number().optional(),
  items: z.any().optional(),
}).transform((v) => {
  return remap$(v, {
    accountId: "account_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BalanceSheetUncategorizedItemsAccount$ {
  /** @deprecated use `BalanceSheetUncategorizedItemsAccount$inboundSchema` instead. */
  export const inboundSchema =
    BalanceSheetUncategorizedItemsAccount$inboundSchema;
  /** @deprecated use `BalanceSheetUncategorizedItemsAccount$outboundSchema` instead. */
  export const outboundSchema =
    BalanceSheetUncategorizedItemsAccount$outboundSchema;
  /** @deprecated use `BalanceSheetUncategorizedItemsAccount$Outbound` instead. */
  export type Outbound = BalanceSheetUncategorizedItemsAccount$Outbound;
}

export function balanceSheetUncategorizedItemsAccountToJSON(
  balanceSheetUncategorizedItemsAccount: BalanceSheetUncategorizedItemsAccount,
): string {
  return JSON.stringify(
    BalanceSheetUncategorizedItemsAccount$outboundSchema.parse(
      balanceSheetUncategorizedItemsAccount,
    ),
  );
}

export function balanceSheetUncategorizedItemsAccountFromJSON(
  jsonString: string,
): SafeParseResult<BalanceSheetUncategorizedItemsAccount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      BalanceSheetUncategorizedItemsAccount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BalanceSheetUncategorizedItemsAccount' from JSON`,
  );
}

/** @internal */
export const Reports$inboundSchema: z.ZodType<Reports, z.ZodTypeDef, unknown> =
  z.object({
    id: z.string().optional(),
    report_name: z.string().optional(),
    start_date: z.string().optional(),
    end_date: z.string(),
    currency: z.nullable(Currency$inboundSchema).optional(),
    assets: z.lazy(() => BalanceSheetAssetsAccount$inboundSchema),
    liabilities: z.lazy(() => BalanceSheetLiabilitiesAccount$inboundSchema),
    equity: z.lazy(() => BalanceSheetEquityAccount$inboundSchema),
    net_assets: z.number().optional(),
    custom_mappings: z.nullable(z.record(z.any())).optional(),
    updated_by: z.nullable(z.string()).optional(),
    created_by: z.nullable(z.string()).optional(),
    updated_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
    created_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
    uncategorized_items: z.lazy(() =>
      BalanceSheetUncategorizedItemsAccount$inboundSchema
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      "report_name": "reportName",
      "start_date": "startDate",
      "end_date": "endDate",
      "net_assets": "netAssets",
      "custom_mappings": "customMappings",
      "updated_by": "updatedBy",
      "created_by": "createdBy",
      "updated_at": "updatedAt",
      "created_at": "createdAt",
      "uncategorized_items": "uncategorizedItems",
    });
  });

/** @internal */
export type Reports$Outbound = {
  id?: string | undefined;
  report_name?: string | undefined;
  start_date?: string | undefined;
  end_date: string;
  currency?: string | null | undefined;
  assets: BalanceSheetAssetsAccount$Outbound;
  liabilities: BalanceSheetLiabilitiesAccount$Outbound;
  equity: BalanceSheetEquityAccount$Outbound;
  net_assets?: number | undefined;
  custom_mappings?: { [k: string]: any } | null | undefined;
  updated_by?: string | null | undefined;
  created_by?: string | null | undefined;
  updated_at?: string | null | undefined;
  created_at?: string | null | undefined;
  uncategorized_items?:
    | BalanceSheetUncategorizedItemsAccount$Outbound
    | undefined;
};

/** @internal */
export const Reports$outboundSchema: z.ZodType<
  Reports$Outbound,
  z.ZodTypeDef,
  Reports
> = z.object({
  id: z.string().optional(),
  reportName: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string(),
  currency: z.nullable(Currency$outboundSchema).optional(),
  assets: z.lazy(() => BalanceSheetAssetsAccount$outboundSchema),
  liabilities: z.lazy(() => BalanceSheetLiabilitiesAccount$outboundSchema),
  equity: z.lazy(() => BalanceSheetEquityAccount$outboundSchema),
  netAssets: z.number().optional(),
  customMappings: z.nullable(z.record(z.any())).optional(),
  updatedBy: z.nullable(z.string()).optional(),
  createdBy: z.nullable(z.string()).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  uncategorizedItems: z.lazy(() =>
    BalanceSheetUncategorizedItemsAccount$outboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    reportName: "report_name",
    startDate: "start_date",
    endDate: "end_date",
    netAssets: "net_assets",
    customMappings: "custom_mappings",
    updatedBy: "updated_by",
    createdBy: "created_by",
    updatedAt: "updated_at",
    createdAt: "created_at",
    uncategorizedItems: "uncategorized_items",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Reports$ {
  /** @deprecated use `Reports$inboundSchema` instead. */
  export const inboundSchema = Reports$inboundSchema;
  /** @deprecated use `Reports$outboundSchema` instead. */
  export const outboundSchema = Reports$outboundSchema;
  /** @deprecated use `Reports$Outbound` instead. */
  export type Outbound = Reports$Outbound;
}

export function reportsToJSON(reports: Reports): string {
  return JSON.stringify(Reports$outboundSchema.parse(reports));
}

export function reportsFromJSON(
  jsonString: string,
): SafeParseResult<Reports, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Reports$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Reports' from JSON`,
  );
}

/** @internal */
export const BalanceSheet$inboundSchema: z.ZodType<
  BalanceSheet,
  z.ZodTypeDef,
  unknown
> = z.object({
  reports: z.array(z.lazy(() => Reports$inboundSchema)),
});

/** @internal */
export type BalanceSheet$Outbound = {
  reports: Array<Reports$Outbound>;
};

/** @internal */
export const BalanceSheet$outboundSchema: z.ZodType<
  BalanceSheet$Outbound,
  z.ZodTypeDef,
  BalanceSheet
> = z.object({
  reports: z.array(z.lazy(() => Reports$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BalanceSheet$ {
  /** @deprecated use `BalanceSheet$inboundSchema` instead. */
  export const inboundSchema = BalanceSheet$inboundSchema;
  /** @deprecated use `BalanceSheet$outboundSchema` instead. */
  export const outboundSchema = BalanceSheet$outboundSchema;
  /** @deprecated use `BalanceSheet$Outbound` instead. */
  export type Outbound = BalanceSheet$Outbound;
}

export function balanceSheetToJSON(balanceSheet: BalanceSheet): string {
  return JSON.stringify(BalanceSheet$outboundSchema.parse(balanceSheet));
}

export function balanceSheetFromJSON(
  jsonString: string,
): SafeParseResult<BalanceSheet, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BalanceSheet$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BalanceSheet' from JSON`,
  );
}
