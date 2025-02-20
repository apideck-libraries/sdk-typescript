/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CustomMappings,
  CustomMappings$inboundSchema,
  CustomMappings$Outbound,
  CustomMappings$outboundSchema,
} from "./custommappings.js";
import {
  DeprecatedLinkedTrackingCategory,
  DeprecatedLinkedTrackingCategory$inboundSchema,
  DeprecatedLinkedTrackingCategory$Outbound,
  DeprecatedLinkedTrackingCategory$outboundSchema,
} from "./deprecatedlinkedtrackingcategory.js";
import {
  LinkedLedgerAccount,
  LinkedLedgerAccount$inboundSchema,
  LinkedLedgerAccount$Outbound,
  LinkedLedgerAccount$outboundSchema,
} from "./linkedledgeraccount.js";
import {
  LinkedLedgerAccountInput,
  LinkedLedgerAccountInput$inboundSchema,
  LinkedLedgerAccountInput$Outbound,
  LinkedLedgerAccountInput$outboundSchema,
} from "./linkedledgeraccountinput.js";
import {
  LinkedTaxRate,
  LinkedTaxRate$inboundSchema,
  LinkedTaxRate$Outbound,
  LinkedTaxRate$outboundSchema,
} from "./linkedtaxrate.js";
import {
  LinkedTaxRateInput,
  LinkedTaxRateInput$inboundSchema,
  LinkedTaxRateInput$Outbound,
  LinkedTaxRateInput$outboundSchema,
} from "./linkedtaxrateinput.js";
import {
  LinkedTrackingCategory,
  LinkedTrackingCategory$inboundSchema,
  LinkedTrackingCategory$Outbound,
  LinkedTrackingCategory$outboundSchema,
} from "./linkedtrackingcategory.js";
import {
  PassThroughBody,
  PassThroughBody$inboundSchema,
  PassThroughBody$Outbound,
  PassThroughBody$outboundSchema,
} from "./passthroughbody.js";

/**
 * Item type
 */
export const InvoiceItemTypeType = {
  Inventory: "inventory",
  Service: "service",
  Other: "other",
} as const;
/**
 * Item type
 */
export type InvoiceItemTypeType = ClosedEnum<typeof InvoiceItemTypeType>;

export type SalesDetails = {
  unitPrice?: number | null | undefined;
  /**
   * Description of the unit type the item is sold as, ie: kg, hour.
   */
  unitOfMeasure?: string | null | undefined;
  /**
   * Amounts are including tax
   */
  taxInclusive?: boolean | null | undefined;
  taxRate?: LinkedTaxRate | undefined;
};

export type PurchaseDetails = {
  unitPrice?: number | null | undefined;
  /**
   * Description of the unit type the item is sold as, ie: kg, hour.
   */
  unitOfMeasure?: string | null | undefined;
  /**
   * Amounts are including tax
   */
  taxInclusive?: boolean | null | undefined;
  taxRate?: LinkedTaxRate | undefined;
};

export type InvoiceItem = {
  /**
   * The ID of the item.
   */
  id?: string | undefined;
  /**
   * Item name
   */
  name?: string | null | undefined;
  /**
   * A short description of the item
   */
  description?: string | null | undefined;
  /**
   * User defined item code
   */
  code?: string | null | undefined;
  /**
   * Item will be available on sales transactions
   */
  sold?: boolean | null | undefined;
  /**
   * Item is available for purchase transactions
   */
  purchased?: boolean | null | undefined;
  /**
   * Item is inventoried
   */
  tracked?: boolean | null | undefined;
  /**
   * If true, transactions for this item are taxable
   */
  taxable?: boolean | null | undefined;
  /**
   * The date of opening balance if inventory item is tracked - YYYY-MM-DD.
   */
  inventoryDate?: RFCDate | null | undefined;
  /**
   * Item type
   */
  type?: InvoiceItemTypeType | null | undefined;
  salesDetails?: SalesDetails | undefined;
  purchaseDetails?: PurchaseDetails | undefined;
  quantity?: number | null | undefined;
  unitPrice?: number | null | undefined;
  assetAccount?: LinkedLedgerAccount | null | undefined;
  incomeAccount?: LinkedLedgerAccount | null | undefined;
  expenseAccount?: LinkedLedgerAccount | null | undefined;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  trackingCategory?: DeprecatedLinkedTrackingCategory | null | undefined;
  /**
   * A list of linked tracking categories.
   */
  trackingCategories?: Array<LinkedTrackingCategory | null> | null | undefined;
  active?: boolean | null | undefined;
  /**
   * When custom mappings are configured on the resource, the result is included here.
   */
  customMappings?: CustomMappings | null | undefined;
  /**
   * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
   */
  rowVersion?: string | null | undefined;
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
   * The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.
   */
  passThrough?: Array<PassThroughBody> | undefined;
};

export type InvoiceItemSalesDetails = {
  unitPrice?: number | null | undefined;
  /**
   * Description of the unit type the item is sold as, ie: kg, hour.
   */
  unitOfMeasure?: string | null | undefined;
  /**
   * Amounts are including tax
   */
  taxInclusive?: boolean | null | undefined;
  taxRate?: LinkedTaxRateInput | undefined;
};

export type InvoiceItemPurchaseDetails = {
  unitPrice?: number | null | undefined;
  /**
   * Description of the unit type the item is sold as, ie: kg, hour.
   */
  unitOfMeasure?: string | null | undefined;
  /**
   * Amounts are including tax
   */
  taxInclusive?: boolean | null | undefined;
  taxRate?: LinkedTaxRateInput | undefined;
};

export type InvoiceItemInput = {
  /**
   * Item name
   */
  name?: string | null | undefined;
  /**
   * A short description of the item
   */
  description?: string | null | undefined;
  /**
   * User defined item code
   */
  code?: string | null | undefined;
  /**
   * Item will be available on sales transactions
   */
  sold?: boolean | null | undefined;
  /**
   * Item is available for purchase transactions
   */
  purchased?: boolean | null | undefined;
  /**
   * Item is inventoried
   */
  tracked?: boolean | null | undefined;
  /**
   * If true, transactions for this item are taxable
   */
  taxable?: boolean | null | undefined;
  /**
   * The date of opening balance if inventory item is tracked - YYYY-MM-DD.
   */
  inventoryDate?: RFCDate | null | undefined;
  /**
   * Item type
   */
  type?: InvoiceItemTypeType | null | undefined;
  salesDetails?: InvoiceItemSalesDetails | undefined;
  purchaseDetails?: InvoiceItemPurchaseDetails | undefined;
  quantity?: number | null | undefined;
  unitPrice?: number | null | undefined;
  assetAccount?: LinkedLedgerAccountInput | null | undefined;
  incomeAccount?: LinkedLedgerAccountInput | null | undefined;
  expenseAccount?: LinkedLedgerAccountInput | null | undefined;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  trackingCategory?: DeprecatedLinkedTrackingCategory | null | undefined;
  /**
   * A list of linked tracking categories.
   */
  trackingCategories?: Array<LinkedTrackingCategory | null> | null | undefined;
  active?: boolean | null | undefined;
  /**
   * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
   */
  rowVersion?: string | null | undefined;
  /**
   * The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.
   */
  passThrough?: Array<PassThroughBody> | undefined;
};

/** @internal */
export const InvoiceItemTypeType$inboundSchema: z.ZodNativeEnum<
  typeof InvoiceItemTypeType
> = z.nativeEnum(InvoiceItemTypeType);

/** @internal */
export const InvoiceItemTypeType$outboundSchema: z.ZodNativeEnum<
  typeof InvoiceItemTypeType
> = InvoiceItemTypeType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceItemTypeType$ {
  /** @deprecated use `InvoiceItemTypeType$inboundSchema` instead. */
  export const inboundSchema = InvoiceItemTypeType$inboundSchema;
  /** @deprecated use `InvoiceItemTypeType$outboundSchema` instead. */
  export const outboundSchema = InvoiceItemTypeType$outboundSchema;
}

/** @internal */
export const SalesDetails$inboundSchema: z.ZodType<
  SalesDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  unit_price: z.nullable(z.number()).optional(),
  unit_of_measure: z.nullable(z.string()).optional(),
  tax_inclusive: z.nullable(z.boolean()).optional(),
  tax_rate: LinkedTaxRate$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "unit_price": "unitPrice",
    "unit_of_measure": "unitOfMeasure",
    "tax_inclusive": "taxInclusive",
    "tax_rate": "taxRate",
  });
});

/** @internal */
export type SalesDetails$Outbound = {
  unit_price?: number | null | undefined;
  unit_of_measure?: string | null | undefined;
  tax_inclusive?: boolean | null | undefined;
  tax_rate?: LinkedTaxRate$Outbound | undefined;
};

/** @internal */
export const SalesDetails$outboundSchema: z.ZodType<
  SalesDetails$Outbound,
  z.ZodTypeDef,
  SalesDetails
> = z.object({
  unitPrice: z.nullable(z.number()).optional(),
  unitOfMeasure: z.nullable(z.string()).optional(),
  taxInclusive: z.nullable(z.boolean()).optional(),
  taxRate: LinkedTaxRate$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    unitPrice: "unit_price",
    unitOfMeasure: "unit_of_measure",
    taxInclusive: "tax_inclusive",
    taxRate: "tax_rate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SalesDetails$ {
  /** @deprecated use `SalesDetails$inboundSchema` instead. */
  export const inboundSchema = SalesDetails$inboundSchema;
  /** @deprecated use `SalesDetails$outboundSchema` instead. */
  export const outboundSchema = SalesDetails$outboundSchema;
  /** @deprecated use `SalesDetails$Outbound` instead. */
  export type Outbound = SalesDetails$Outbound;
}

export function salesDetailsToJSON(salesDetails: SalesDetails): string {
  return JSON.stringify(SalesDetails$outboundSchema.parse(salesDetails));
}

export function salesDetailsFromJSON(
  jsonString: string,
): SafeParseResult<SalesDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SalesDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SalesDetails' from JSON`,
  );
}

/** @internal */
export const PurchaseDetails$inboundSchema: z.ZodType<
  PurchaseDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  unit_price: z.nullable(z.number()).optional(),
  unit_of_measure: z.nullable(z.string()).optional(),
  tax_inclusive: z.nullable(z.boolean()).optional(),
  tax_rate: LinkedTaxRate$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "unit_price": "unitPrice",
    "unit_of_measure": "unitOfMeasure",
    "tax_inclusive": "taxInclusive",
    "tax_rate": "taxRate",
  });
});

/** @internal */
export type PurchaseDetails$Outbound = {
  unit_price?: number | null | undefined;
  unit_of_measure?: string | null | undefined;
  tax_inclusive?: boolean | null | undefined;
  tax_rate?: LinkedTaxRate$Outbound | undefined;
};

/** @internal */
export const PurchaseDetails$outboundSchema: z.ZodType<
  PurchaseDetails$Outbound,
  z.ZodTypeDef,
  PurchaseDetails
> = z.object({
  unitPrice: z.nullable(z.number()).optional(),
  unitOfMeasure: z.nullable(z.string()).optional(),
  taxInclusive: z.nullable(z.boolean()).optional(),
  taxRate: LinkedTaxRate$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    unitPrice: "unit_price",
    unitOfMeasure: "unit_of_measure",
    taxInclusive: "tax_inclusive",
    taxRate: "tax_rate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PurchaseDetails$ {
  /** @deprecated use `PurchaseDetails$inboundSchema` instead. */
  export const inboundSchema = PurchaseDetails$inboundSchema;
  /** @deprecated use `PurchaseDetails$outboundSchema` instead. */
  export const outboundSchema = PurchaseDetails$outboundSchema;
  /** @deprecated use `PurchaseDetails$Outbound` instead. */
  export type Outbound = PurchaseDetails$Outbound;
}

export function purchaseDetailsToJSON(
  purchaseDetails: PurchaseDetails,
): string {
  return JSON.stringify(PurchaseDetails$outboundSchema.parse(purchaseDetails));
}

export function purchaseDetailsFromJSON(
  jsonString: string,
): SafeParseResult<PurchaseDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PurchaseDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PurchaseDetails' from JSON`,
  );
}

/** @internal */
export const InvoiceItem$inboundSchema: z.ZodType<
  InvoiceItem,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  code: z.nullable(z.string()).optional(),
  sold: z.nullable(z.boolean()).optional(),
  purchased: z.nullable(z.boolean()).optional(),
  tracked: z.nullable(z.boolean()).optional(),
  taxable: z.nullable(z.boolean()).optional(),
  inventory_date: z.nullable(z.string().transform(v => new RFCDate(v)))
    .optional(),
  type: z.nullable(InvoiceItemTypeType$inboundSchema).optional(),
  sales_details: z.lazy(() => SalesDetails$inboundSchema).optional(),
  purchase_details: z.lazy(() => PurchaseDetails$inboundSchema).optional(),
  quantity: z.nullable(z.number()).optional(),
  unit_price: z.nullable(z.number()).optional(),
  asset_account: z.nullable(LinkedLedgerAccount$inboundSchema).optional(),
  income_account: z.nullable(LinkedLedgerAccount$inboundSchema).optional(),
  expense_account: z.nullable(LinkedLedgerAccount$inboundSchema).optional(),
  tracking_category: z.nullable(DeprecatedLinkedTrackingCategory$inboundSchema)
    .optional(),
  tracking_categories: z.nullable(
    z.array(z.nullable(LinkedTrackingCategory$inboundSchema)),
  ).optional(),
  active: z.nullable(z.boolean()).optional(),
  custom_mappings: z.nullable(CustomMappings$inboundSchema).optional(),
  row_version: z.nullable(z.string()).optional(),
  updated_by: z.nullable(z.string()).optional(),
  created_by: z.nullable(z.string()).optional(),
  updated_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  pass_through: z.array(PassThroughBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "inventory_date": "inventoryDate",
    "sales_details": "salesDetails",
    "purchase_details": "purchaseDetails",
    "unit_price": "unitPrice",
    "asset_account": "assetAccount",
    "income_account": "incomeAccount",
    "expense_account": "expenseAccount",
    "tracking_category": "trackingCategory",
    "tracking_categories": "trackingCategories",
    "custom_mappings": "customMappings",
    "row_version": "rowVersion",
    "updated_by": "updatedBy",
    "created_by": "createdBy",
    "updated_at": "updatedAt",
    "created_at": "createdAt",
    "pass_through": "passThrough",
  });
});

/** @internal */
export type InvoiceItem$Outbound = {
  id?: string | undefined;
  name?: string | null | undefined;
  description?: string | null | undefined;
  code?: string | null | undefined;
  sold?: boolean | null | undefined;
  purchased?: boolean | null | undefined;
  tracked?: boolean | null | undefined;
  taxable?: boolean | null | undefined;
  inventory_date?: string | null | undefined;
  type?: string | null | undefined;
  sales_details?: SalesDetails$Outbound | undefined;
  purchase_details?: PurchaseDetails$Outbound | undefined;
  quantity?: number | null | undefined;
  unit_price?: number | null | undefined;
  asset_account?: LinkedLedgerAccount$Outbound | null | undefined;
  income_account?: LinkedLedgerAccount$Outbound | null | undefined;
  expense_account?: LinkedLedgerAccount$Outbound | null | undefined;
  tracking_category?:
    | DeprecatedLinkedTrackingCategory$Outbound
    | null
    | undefined;
  tracking_categories?:
    | Array<LinkedTrackingCategory$Outbound | null>
    | null
    | undefined;
  active?: boolean | null | undefined;
  custom_mappings?: CustomMappings$Outbound | null | undefined;
  row_version?: string | null | undefined;
  updated_by?: string | null | undefined;
  created_by?: string | null | undefined;
  updated_at?: string | null | undefined;
  created_at?: string | null | undefined;
  pass_through?: Array<PassThroughBody$Outbound> | undefined;
};

/** @internal */
export const InvoiceItem$outboundSchema: z.ZodType<
  InvoiceItem$Outbound,
  z.ZodTypeDef,
  InvoiceItem
> = z.object({
  id: z.string().optional(),
  name: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  code: z.nullable(z.string()).optional(),
  sold: z.nullable(z.boolean()).optional(),
  purchased: z.nullable(z.boolean()).optional(),
  tracked: z.nullable(z.boolean()).optional(),
  taxable: z.nullable(z.boolean()).optional(),
  inventoryDate: z.nullable(z.instanceof(RFCDate).transform(v => v.toString()))
    .optional(),
  type: z.nullable(InvoiceItemTypeType$outboundSchema).optional(),
  salesDetails: z.lazy(() => SalesDetails$outboundSchema).optional(),
  purchaseDetails: z.lazy(() => PurchaseDetails$outboundSchema).optional(),
  quantity: z.nullable(z.number()).optional(),
  unitPrice: z.nullable(z.number()).optional(),
  assetAccount: z.nullable(LinkedLedgerAccount$outboundSchema).optional(),
  incomeAccount: z.nullable(LinkedLedgerAccount$outboundSchema).optional(),
  expenseAccount: z.nullable(LinkedLedgerAccount$outboundSchema).optional(),
  trackingCategory: z.nullable(DeprecatedLinkedTrackingCategory$outboundSchema)
    .optional(),
  trackingCategories: z.nullable(
    z.array(z.nullable(LinkedTrackingCategory$outboundSchema)),
  ).optional(),
  active: z.nullable(z.boolean()).optional(),
  customMappings: z.nullable(CustomMappings$outboundSchema).optional(),
  rowVersion: z.nullable(z.string()).optional(),
  updatedBy: z.nullable(z.string()).optional(),
  createdBy: z.nullable(z.string()).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  passThrough: z.array(PassThroughBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    inventoryDate: "inventory_date",
    salesDetails: "sales_details",
    purchaseDetails: "purchase_details",
    unitPrice: "unit_price",
    assetAccount: "asset_account",
    incomeAccount: "income_account",
    expenseAccount: "expense_account",
    trackingCategory: "tracking_category",
    trackingCategories: "tracking_categories",
    customMappings: "custom_mappings",
    rowVersion: "row_version",
    updatedBy: "updated_by",
    createdBy: "created_by",
    updatedAt: "updated_at",
    createdAt: "created_at",
    passThrough: "pass_through",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceItem$ {
  /** @deprecated use `InvoiceItem$inboundSchema` instead. */
  export const inboundSchema = InvoiceItem$inboundSchema;
  /** @deprecated use `InvoiceItem$outboundSchema` instead. */
  export const outboundSchema = InvoiceItem$outboundSchema;
  /** @deprecated use `InvoiceItem$Outbound` instead. */
  export type Outbound = InvoiceItem$Outbound;
}

export function invoiceItemToJSON(invoiceItem: InvoiceItem): string {
  return JSON.stringify(InvoiceItem$outboundSchema.parse(invoiceItem));
}

export function invoiceItemFromJSON(
  jsonString: string,
): SafeParseResult<InvoiceItem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InvoiceItem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InvoiceItem' from JSON`,
  );
}

/** @internal */
export const InvoiceItemSalesDetails$inboundSchema: z.ZodType<
  InvoiceItemSalesDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  unit_price: z.nullable(z.number()).optional(),
  unit_of_measure: z.nullable(z.string()).optional(),
  tax_inclusive: z.nullable(z.boolean()).optional(),
  tax_rate: LinkedTaxRateInput$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "unit_price": "unitPrice",
    "unit_of_measure": "unitOfMeasure",
    "tax_inclusive": "taxInclusive",
    "tax_rate": "taxRate",
  });
});

/** @internal */
export type InvoiceItemSalesDetails$Outbound = {
  unit_price?: number | null | undefined;
  unit_of_measure?: string | null | undefined;
  tax_inclusive?: boolean | null | undefined;
  tax_rate?: LinkedTaxRateInput$Outbound | undefined;
};

/** @internal */
export const InvoiceItemSalesDetails$outboundSchema: z.ZodType<
  InvoiceItemSalesDetails$Outbound,
  z.ZodTypeDef,
  InvoiceItemSalesDetails
> = z.object({
  unitPrice: z.nullable(z.number()).optional(),
  unitOfMeasure: z.nullable(z.string()).optional(),
  taxInclusive: z.nullable(z.boolean()).optional(),
  taxRate: LinkedTaxRateInput$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    unitPrice: "unit_price",
    unitOfMeasure: "unit_of_measure",
    taxInclusive: "tax_inclusive",
    taxRate: "tax_rate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceItemSalesDetails$ {
  /** @deprecated use `InvoiceItemSalesDetails$inboundSchema` instead. */
  export const inboundSchema = InvoiceItemSalesDetails$inboundSchema;
  /** @deprecated use `InvoiceItemSalesDetails$outboundSchema` instead. */
  export const outboundSchema = InvoiceItemSalesDetails$outboundSchema;
  /** @deprecated use `InvoiceItemSalesDetails$Outbound` instead. */
  export type Outbound = InvoiceItemSalesDetails$Outbound;
}

export function invoiceItemSalesDetailsToJSON(
  invoiceItemSalesDetails: InvoiceItemSalesDetails,
): string {
  return JSON.stringify(
    InvoiceItemSalesDetails$outboundSchema.parse(invoiceItemSalesDetails),
  );
}

export function invoiceItemSalesDetailsFromJSON(
  jsonString: string,
): SafeParseResult<InvoiceItemSalesDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InvoiceItemSalesDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InvoiceItemSalesDetails' from JSON`,
  );
}

/** @internal */
export const InvoiceItemPurchaseDetails$inboundSchema: z.ZodType<
  InvoiceItemPurchaseDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  unit_price: z.nullable(z.number()).optional(),
  unit_of_measure: z.nullable(z.string()).optional(),
  tax_inclusive: z.nullable(z.boolean()).optional(),
  tax_rate: LinkedTaxRateInput$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "unit_price": "unitPrice",
    "unit_of_measure": "unitOfMeasure",
    "tax_inclusive": "taxInclusive",
    "tax_rate": "taxRate",
  });
});

/** @internal */
export type InvoiceItemPurchaseDetails$Outbound = {
  unit_price?: number | null | undefined;
  unit_of_measure?: string | null | undefined;
  tax_inclusive?: boolean | null | undefined;
  tax_rate?: LinkedTaxRateInput$Outbound | undefined;
};

/** @internal */
export const InvoiceItemPurchaseDetails$outboundSchema: z.ZodType<
  InvoiceItemPurchaseDetails$Outbound,
  z.ZodTypeDef,
  InvoiceItemPurchaseDetails
> = z.object({
  unitPrice: z.nullable(z.number()).optional(),
  unitOfMeasure: z.nullable(z.string()).optional(),
  taxInclusive: z.nullable(z.boolean()).optional(),
  taxRate: LinkedTaxRateInput$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    unitPrice: "unit_price",
    unitOfMeasure: "unit_of_measure",
    taxInclusive: "tax_inclusive",
    taxRate: "tax_rate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceItemPurchaseDetails$ {
  /** @deprecated use `InvoiceItemPurchaseDetails$inboundSchema` instead. */
  export const inboundSchema = InvoiceItemPurchaseDetails$inboundSchema;
  /** @deprecated use `InvoiceItemPurchaseDetails$outboundSchema` instead. */
  export const outboundSchema = InvoiceItemPurchaseDetails$outboundSchema;
  /** @deprecated use `InvoiceItemPurchaseDetails$Outbound` instead. */
  export type Outbound = InvoiceItemPurchaseDetails$Outbound;
}

export function invoiceItemPurchaseDetailsToJSON(
  invoiceItemPurchaseDetails: InvoiceItemPurchaseDetails,
): string {
  return JSON.stringify(
    InvoiceItemPurchaseDetails$outboundSchema.parse(invoiceItemPurchaseDetails),
  );
}

export function invoiceItemPurchaseDetailsFromJSON(
  jsonString: string,
): SafeParseResult<InvoiceItemPurchaseDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InvoiceItemPurchaseDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InvoiceItemPurchaseDetails' from JSON`,
  );
}

/** @internal */
export const InvoiceItemInput$inboundSchema: z.ZodType<
  InvoiceItemInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  code: z.nullable(z.string()).optional(),
  sold: z.nullable(z.boolean()).optional(),
  purchased: z.nullable(z.boolean()).optional(),
  tracked: z.nullable(z.boolean()).optional(),
  taxable: z.nullable(z.boolean()).optional(),
  inventory_date: z.nullable(z.string().transform(v => new RFCDate(v)))
    .optional(),
  type: z.nullable(InvoiceItemTypeType$inboundSchema).optional(),
  sales_details: z.lazy(() => InvoiceItemSalesDetails$inboundSchema).optional(),
  purchase_details: z.lazy(() => InvoiceItemPurchaseDetails$inboundSchema)
    .optional(),
  quantity: z.nullable(z.number()).optional(),
  unit_price: z.nullable(z.number()).optional(),
  asset_account: z.nullable(LinkedLedgerAccountInput$inboundSchema).optional(),
  income_account: z.nullable(LinkedLedgerAccountInput$inboundSchema).optional(),
  expense_account: z.nullable(LinkedLedgerAccountInput$inboundSchema)
    .optional(),
  tracking_category: z.nullable(DeprecatedLinkedTrackingCategory$inboundSchema)
    .optional(),
  tracking_categories: z.nullable(
    z.array(z.nullable(LinkedTrackingCategory$inboundSchema)),
  ).optional(),
  active: z.nullable(z.boolean()).optional(),
  row_version: z.nullable(z.string()).optional(),
  pass_through: z.array(PassThroughBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "inventory_date": "inventoryDate",
    "sales_details": "salesDetails",
    "purchase_details": "purchaseDetails",
    "unit_price": "unitPrice",
    "asset_account": "assetAccount",
    "income_account": "incomeAccount",
    "expense_account": "expenseAccount",
    "tracking_category": "trackingCategory",
    "tracking_categories": "trackingCategories",
    "row_version": "rowVersion",
    "pass_through": "passThrough",
  });
});

/** @internal */
export type InvoiceItemInput$Outbound = {
  name?: string | null | undefined;
  description?: string | null | undefined;
  code?: string | null | undefined;
  sold?: boolean | null | undefined;
  purchased?: boolean | null | undefined;
  tracked?: boolean | null | undefined;
  taxable?: boolean | null | undefined;
  inventory_date?: string | null | undefined;
  type?: string | null | undefined;
  sales_details?: InvoiceItemSalesDetails$Outbound | undefined;
  purchase_details?: InvoiceItemPurchaseDetails$Outbound | undefined;
  quantity?: number | null | undefined;
  unit_price?: number | null | undefined;
  asset_account?: LinkedLedgerAccountInput$Outbound | null | undefined;
  income_account?: LinkedLedgerAccountInput$Outbound | null | undefined;
  expense_account?: LinkedLedgerAccountInput$Outbound | null | undefined;
  tracking_category?:
    | DeprecatedLinkedTrackingCategory$Outbound
    | null
    | undefined;
  tracking_categories?:
    | Array<LinkedTrackingCategory$Outbound | null>
    | null
    | undefined;
  active?: boolean | null | undefined;
  row_version?: string | null | undefined;
  pass_through?: Array<PassThroughBody$Outbound> | undefined;
};

/** @internal */
export const InvoiceItemInput$outboundSchema: z.ZodType<
  InvoiceItemInput$Outbound,
  z.ZodTypeDef,
  InvoiceItemInput
> = z.object({
  name: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  code: z.nullable(z.string()).optional(),
  sold: z.nullable(z.boolean()).optional(),
  purchased: z.nullable(z.boolean()).optional(),
  tracked: z.nullable(z.boolean()).optional(),
  taxable: z.nullable(z.boolean()).optional(),
  inventoryDate: z.nullable(z.instanceof(RFCDate).transform(v => v.toString()))
    .optional(),
  type: z.nullable(InvoiceItemTypeType$outboundSchema).optional(),
  salesDetails: z.lazy(() => InvoiceItemSalesDetails$outboundSchema).optional(),
  purchaseDetails: z.lazy(() => InvoiceItemPurchaseDetails$outboundSchema)
    .optional(),
  quantity: z.nullable(z.number()).optional(),
  unitPrice: z.nullable(z.number()).optional(),
  assetAccount: z.nullable(LinkedLedgerAccountInput$outboundSchema).optional(),
  incomeAccount: z.nullable(LinkedLedgerAccountInput$outboundSchema).optional(),
  expenseAccount: z.nullable(LinkedLedgerAccountInput$outboundSchema)
    .optional(),
  trackingCategory: z.nullable(DeprecatedLinkedTrackingCategory$outboundSchema)
    .optional(),
  trackingCategories: z.nullable(
    z.array(z.nullable(LinkedTrackingCategory$outboundSchema)),
  ).optional(),
  active: z.nullable(z.boolean()).optional(),
  rowVersion: z.nullable(z.string()).optional(),
  passThrough: z.array(PassThroughBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    inventoryDate: "inventory_date",
    salesDetails: "sales_details",
    purchaseDetails: "purchase_details",
    unitPrice: "unit_price",
    assetAccount: "asset_account",
    incomeAccount: "income_account",
    expenseAccount: "expense_account",
    trackingCategory: "tracking_category",
    trackingCategories: "tracking_categories",
    rowVersion: "row_version",
    passThrough: "pass_through",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceItemInput$ {
  /** @deprecated use `InvoiceItemInput$inboundSchema` instead. */
  export const inboundSchema = InvoiceItemInput$inboundSchema;
  /** @deprecated use `InvoiceItemInput$outboundSchema` instead. */
  export const outboundSchema = InvoiceItemInput$outboundSchema;
  /** @deprecated use `InvoiceItemInput$Outbound` instead. */
  export type Outbound = InvoiceItemInput$Outbound;
}

export function invoiceItemInputToJSON(
  invoiceItemInput: InvoiceItemInput,
): string {
  return JSON.stringify(
    InvoiceItemInput$outboundSchema.parse(invoiceItemInput),
  );
}

export function invoiceItemInputFromJSON(
  jsonString: string,
): SafeParseResult<InvoiceItemInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InvoiceItemInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InvoiceItemInput' from JSON`,
  );
}
