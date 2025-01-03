/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CustomMappings,
  CustomMappings$inboundSchema,
  CustomMappings$Outbound,
  CustomMappings$outboundSchema,
} from "./custommappings.js";

export type Income = {
  /**
   * Total income
   */
  total: number | null;
  records?: any | undefined;
};

export type Expenses = {
  /**
   * Total expense
   */
  total: number | null;
  records?: any | undefined;
};

export type NetIncome = {
  /**
   * Total net income
   */
  total: number | null;
  records?: any | undefined;
};

export type NetOperatingIncome = {
  /**
   * Total net operating income
   */
  total: number | null;
  records?: any | undefined;
};

export type GrossProfit = {
  /**
   * Total gross profit
   */
  total: number | null;
  records?: any | undefined;
};

export type ProfitAndLoss = {
  /**
   * A unique identifier for an object.
   */
  id?: string | undefined;
  /**
   * The name of the report
   */
  reportName: string;
  /**
   * The start date of the report
   */
  startDate?: string | undefined;
  /**
   * The start date of the report
   */
  endDate?: string | undefined;
  currency: string;
  /**
   * Customer id
   */
  customerId?: string | undefined;
  income: Income;
  expenses: Expenses;
  netIncome?: NetIncome | null | undefined;
  netOperatingIncome?: NetOperatingIncome | null | undefined;
  grossProfit?: GrossProfit | null | undefined;
  /**
   * When custom mappings are configured on the resource, the result is included here.
   */
  customMappings?: CustomMappings | null | undefined;
};

/** @internal */
export const Income$inboundSchema: z.ZodType<Income, z.ZodTypeDef, unknown> = z
  .object({
    total: z.nullable(z.number()),
    records: z.any().optional(),
  });

/** @internal */
export type Income$Outbound = {
  total: number | null;
  records?: any | undefined;
};

/** @internal */
export const Income$outboundSchema: z.ZodType<
  Income$Outbound,
  z.ZodTypeDef,
  Income
> = z.object({
  total: z.nullable(z.number()),
  records: z.any().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Income$ {
  /** @deprecated use `Income$inboundSchema` instead. */
  export const inboundSchema = Income$inboundSchema;
  /** @deprecated use `Income$outboundSchema` instead. */
  export const outboundSchema = Income$outboundSchema;
  /** @deprecated use `Income$Outbound` instead. */
  export type Outbound = Income$Outbound;
}

export function incomeToJSON(income: Income): string {
  return JSON.stringify(Income$outboundSchema.parse(income));
}

export function incomeFromJSON(
  jsonString: string,
): SafeParseResult<Income, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Income$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Income' from JSON`,
  );
}

/** @internal */
export const Expenses$inboundSchema: z.ZodType<
  Expenses,
  z.ZodTypeDef,
  unknown
> = z.object({
  total: z.nullable(z.number()),
  records: z.any().optional(),
});

/** @internal */
export type Expenses$Outbound = {
  total: number | null;
  records?: any | undefined;
};

/** @internal */
export const Expenses$outboundSchema: z.ZodType<
  Expenses$Outbound,
  z.ZodTypeDef,
  Expenses
> = z.object({
  total: z.nullable(z.number()),
  records: z.any().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Expenses$ {
  /** @deprecated use `Expenses$inboundSchema` instead. */
  export const inboundSchema = Expenses$inboundSchema;
  /** @deprecated use `Expenses$outboundSchema` instead. */
  export const outboundSchema = Expenses$outboundSchema;
  /** @deprecated use `Expenses$Outbound` instead. */
  export type Outbound = Expenses$Outbound;
}

export function expensesToJSON(expenses: Expenses): string {
  return JSON.stringify(Expenses$outboundSchema.parse(expenses));
}

export function expensesFromJSON(
  jsonString: string,
): SafeParseResult<Expenses, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Expenses$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Expenses' from JSON`,
  );
}

/** @internal */
export const NetIncome$inboundSchema: z.ZodType<
  NetIncome,
  z.ZodTypeDef,
  unknown
> = z.object({
  total: z.nullable(z.number()),
  records: z.any().optional(),
});

/** @internal */
export type NetIncome$Outbound = {
  total: number | null;
  records?: any | undefined;
};

/** @internal */
export const NetIncome$outboundSchema: z.ZodType<
  NetIncome$Outbound,
  z.ZodTypeDef,
  NetIncome
> = z.object({
  total: z.nullable(z.number()),
  records: z.any().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NetIncome$ {
  /** @deprecated use `NetIncome$inboundSchema` instead. */
  export const inboundSchema = NetIncome$inboundSchema;
  /** @deprecated use `NetIncome$outboundSchema` instead. */
  export const outboundSchema = NetIncome$outboundSchema;
  /** @deprecated use `NetIncome$Outbound` instead. */
  export type Outbound = NetIncome$Outbound;
}

export function netIncomeToJSON(netIncome: NetIncome): string {
  return JSON.stringify(NetIncome$outboundSchema.parse(netIncome));
}

export function netIncomeFromJSON(
  jsonString: string,
): SafeParseResult<NetIncome, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NetIncome$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NetIncome' from JSON`,
  );
}

/** @internal */
export const NetOperatingIncome$inboundSchema: z.ZodType<
  NetOperatingIncome,
  z.ZodTypeDef,
  unknown
> = z.object({
  total: z.nullable(z.number()),
  records: z.any().optional(),
});

/** @internal */
export type NetOperatingIncome$Outbound = {
  total: number | null;
  records?: any | undefined;
};

/** @internal */
export const NetOperatingIncome$outboundSchema: z.ZodType<
  NetOperatingIncome$Outbound,
  z.ZodTypeDef,
  NetOperatingIncome
> = z.object({
  total: z.nullable(z.number()),
  records: z.any().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NetOperatingIncome$ {
  /** @deprecated use `NetOperatingIncome$inboundSchema` instead. */
  export const inboundSchema = NetOperatingIncome$inboundSchema;
  /** @deprecated use `NetOperatingIncome$outboundSchema` instead. */
  export const outboundSchema = NetOperatingIncome$outboundSchema;
  /** @deprecated use `NetOperatingIncome$Outbound` instead. */
  export type Outbound = NetOperatingIncome$Outbound;
}

export function netOperatingIncomeToJSON(
  netOperatingIncome: NetOperatingIncome,
): string {
  return JSON.stringify(
    NetOperatingIncome$outboundSchema.parse(netOperatingIncome),
  );
}

export function netOperatingIncomeFromJSON(
  jsonString: string,
): SafeParseResult<NetOperatingIncome, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NetOperatingIncome$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NetOperatingIncome' from JSON`,
  );
}

/** @internal */
export const GrossProfit$inboundSchema: z.ZodType<
  GrossProfit,
  z.ZodTypeDef,
  unknown
> = z.object({
  total: z.nullable(z.number()),
  records: z.any().optional(),
});

/** @internal */
export type GrossProfit$Outbound = {
  total: number | null;
  records?: any | undefined;
};

/** @internal */
export const GrossProfit$outboundSchema: z.ZodType<
  GrossProfit$Outbound,
  z.ZodTypeDef,
  GrossProfit
> = z.object({
  total: z.nullable(z.number()),
  records: z.any().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GrossProfit$ {
  /** @deprecated use `GrossProfit$inboundSchema` instead. */
  export const inboundSchema = GrossProfit$inboundSchema;
  /** @deprecated use `GrossProfit$outboundSchema` instead. */
  export const outboundSchema = GrossProfit$outboundSchema;
  /** @deprecated use `GrossProfit$Outbound` instead. */
  export type Outbound = GrossProfit$Outbound;
}

export function grossProfitToJSON(grossProfit: GrossProfit): string {
  return JSON.stringify(GrossProfit$outboundSchema.parse(grossProfit));
}

export function grossProfitFromJSON(
  jsonString: string,
): SafeParseResult<GrossProfit, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GrossProfit$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GrossProfit' from JSON`,
  );
}

/** @internal */
export const ProfitAndLoss$inboundSchema: z.ZodType<
  ProfitAndLoss,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  report_name: z.string(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  currency: z.string(),
  customer_id: z.string().optional(),
  income: z.lazy(() => Income$inboundSchema),
  expenses: z.lazy(() => Expenses$inboundSchema),
  net_income: z.nullable(z.lazy(() => NetIncome$inboundSchema)).optional(),
  net_operating_income: z.nullable(
    z.lazy(() => NetOperatingIncome$inboundSchema),
  ).optional(),
  gross_profit: z.nullable(z.lazy(() => GrossProfit$inboundSchema)).optional(),
  custom_mappings: z.nullable(CustomMappings$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "report_name": "reportName",
    "start_date": "startDate",
    "end_date": "endDate",
    "customer_id": "customerId",
    "net_income": "netIncome",
    "net_operating_income": "netOperatingIncome",
    "gross_profit": "grossProfit",
    "custom_mappings": "customMappings",
  });
});

/** @internal */
export type ProfitAndLoss$Outbound = {
  id?: string | undefined;
  report_name: string;
  start_date?: string | undefined;
  end_date?: string | undefined;
  currency: string;
  customer_id?: string | undefined;
  income: Income$Outbound;
  expenses: Expenses$Outbound;
  net_income?: NetIncome$Outbound | null | undefined;
  net_operating_income?: NetOperatingIncome$Outbound | null | undefined;
  gross_profit?: GrossProfit$Outbound | null | undefined;
  custom_mappings?: CustomMappings$Outbound | null | undefined;
};

/** @internal */
export const ProfitAndLoss$outboundSchema: z.ZodType<
  ProfitAndLoss$Outbound,
  z.ZodTypeDef,
  ProfitAndLoss
> = z.object({
  id: z.string().optional(),
  reportName: z.string(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  currency: z.string(),
  customerId: z.string().optional(),
  income: z.lazy(() => Income$outboundSchema),
  expenses: z.lazy(() => Expenses$outboundSchema),
  netIncome: z.nullable(z.lazy(() => NetIncome$outboundSchema)).optional(),
  netOperatingIncome: z.nullable(
    z.lazy(() => NetOperatingIncome$outboundSchema),
  ).optional(),
  grossProfit: z.nullable(z.lazy(() => GrossProfit$outboundSchema)).optional(),
  customMappings: z.nullable(CustomMappings$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    reportName: "report_name",
    startDate: "start_date",
    endDate: "end_date",
    customerId: "customer_id",
    netIncome: "net_income",
    netOperatingIncome: "net_operating_income",
    grossProfit: "gross_profit",
    customMappings: "custom_mappings",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProfitAndLoss$ {
  /** @deprecated use `ProfitAndLoss$inboundSchema` instead. */
  export const inboundSchema = ProfitAndLoss$inboundSchema;
  /** @deprecated use `ProfitAndLoss$outboundSchema` instead. */
  export const outboundSchema = ProfitAndLoss$outboundSchema;
  /** @deprecated use `ProfitAndLoss$Outbound` instead. */
  export type Outbound = ProfitAndLoss$Outbound;
}

export function profitAndLossToJSON(profitAndLoss: ProfitAndLoss): string {
  return JSON.stringify(ProfitAndLoss$outboundSchema.parse(profitAndLoss));
}

export function profitAndLossFromJSON(
  jsonString: string,
): SafeParseResult<ProfitAndLoss, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProfitAndLoss$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProfitAndLoss' from JSON`,
  );
}
