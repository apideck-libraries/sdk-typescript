/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The current status of the product (active or archived).
 */
export const ProductStatus = {
  Active: "active",
  Archived: "archived",
} as const;
/**
 * The current status of the product (active or archived).
 */
export type ProductStatus = ClosedEnum<typeof ProductStatus>;

export type Images = {
  /**
   * A unique identifier for an object.
   */
  id?: string | null | undefined;
  /**
   * The URL of an image of the product.
   */
  url?: string | null | undefined;
};

export type EcommerceProductOptions = {
  /**
   * A unique identifier for the option of the product.
   */
  id?: string | null | undefined;
  /**
   * The name of the option for the product.
   */
  name?: string | null | undefined;
  values?: Array<string | null> | undefined;
};

export type EcommerceProductVariantsOptions = {
  /**
   * A unique identifier for the option of the variant.
   */
  id?: string | null | undefined;
  /**
   * The name of the option for the variant.
   */
  name?: string | null | undefined;
  /**
   * The value of the option for the variant.
   */
  value?: string | null | undefined;
};

export type EcommerceProductImages = {
  /**
   * A unique identifier for an object.
   */
  id?: string | null | undefined;
  /**
   * The URL of an image of the variant.
   */
  url?: string | null | undefined;
};

export type Variants = {
  /**
   * A unique identifier for the variant of the product.
   */
  id?: string | null | undefined;
  /**
   * The name for the variant, used for displaying to customers.
   */
  name?: string | null | undefined;
  /**
   * The price of the variant.
   */
  price?: string | null | undefined;
  /**
   * The stock keeping unit of the variant.
   */
  sku?: string | null | undefined;
  /**
   * The quantity of the variant in stock.
   */
  inventoryQuantity?: string | null | undefined;
  /**
   * The weight of the variant.
   */
  weight?: string | null | undefined;
  /**
   * The unit of measurement for the weight of the variant.
   */
  weightUnit?: string | null | undefined;
  options?: Array<EcommerceProductVariantsOptions> | undefined;
  images?: Array<EcommerceProductImages> | undefined;
};

export type EcommerceProductCategories = {
  /**
   * A unique identifier for an object.
   */
  id?: string | null | undefined;
  /**
   * The name of the category.
   */
  name?: string | null | undefined;
};

export type EcommerceProduct = {
  /**
   * A unique identifier for an object.
   */
  id: string;
  /**
   * The name of the product as it should be displayed to customers.
   */
  name?: string | null | undefined;
  /**
   * A detailed description of the product.
   */
  description?: string | null | undefined;
  /**
   * The current status of the product (active or archived).
   */
  status?: ProductStatus | null | undefined;
  /**
   * The price of the product.
   */
  price?: string | null | undefined;
  /**
   * The stock keeping unit of the product.
   */
  sku?: string | null | undefined;
  /**
   * The quantity of the product in stock.
   */
  inventoryQuantity?: string | null | undefined;
  /**
   * An array of image URLs for the product.
   */
  images?: Array<Images> | null | undefined;
  /**
   * The weight of the product.
   */
  weight?: string | null | undefined;
  /**
   * The unit of measurement for the weight of the product.
   */
  weightUnit?: string | null | undefined;
  /**
   * An array of options for the product.
   */
  options?: Array<EcommerceProductOptions> | undefined;
  variants?: Array<Variants> | undefined;
  /**
   * An array of tags for the product, used for organization and searching.
   */
  tags?: Array<string | null> | undefined;
  /**
   * An array of categories for the product, used for organization and searching.
   */
  categories?: Array<EcommerceProductCategories> | undefined;
  /**
   * When custom mappings are configured on the resource, the result is included here.
   */
  customMappings?: { [k: string]: any } | null | undefined;
  /**
   * The date and time when the object was created.
   */
  createdAt?: Date | null | undefined;
  /**
   * The date and time when the object was last updated.
   */
  updatedAt?: Date | null | undefined;
};

/** @internal */
export const ProductStatus$inboundSchema: z.ZodNativeEnum<
  typeof ProductStatus
> = z.nativeEnum(ProductStatus);

/** @internal */
export const ProductStatus$outboundSchema: z.ZodNativeEnum<
  typeof ProductStatus
> = ProductStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductStatus$ {
  /** @deprecated use `ProductStatus$inboundSchema` instead. */
  export const inboundSchema = ProductStatus$inboundSchema;
  /** @deprecated use `ProductStatus$outboundSchema` instead. */
  export const outboundSchema = ProductStatus$outboundSchema;
}

/** @internal */
export const Images$inboundSchema: z.ZodType<Images, z.ZodTypeDef, unknown> = z
  .object({
    id: z.nullable(z.string()).optional(),
    url: z.nullable(z.string()).optional(),
  });

/** @internal */
export type Images$Outbound = {
  id?: string | null | undefined;
  url?: string | null | undefined;
};

/** @internal */
export const Images$outboundSchema: z.ZodType<
  Images$Outbound,
  z.ZodTypeDef,
  Images
> = z.object({
  id: z.nullable(z.string()).optional(),
  url: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Images$ {
  /** @deprecated use `Images$inboundSchema` instead. */
  export const inboundSchema = Images$inboundSchema;
  /** @deprecated use `Images$outboundSchema` instead. */
  export const outboundSchema = Images$outboundSchema;
  /** @deprecated use `Images$Outbound` instead. */
  export type Outbound = Images$Outbound;
}

export function imagesToJSON(images: Images): string {
  return JSON.stringify(Images$outboundSchema.parse(images));
}

export function imagesFromJSON(
  jsonString: string,
): SafeParseResult<Images, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Images$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Images' from JSON`,
  );
}

/** @internal */
export const EcommerceProductOptions$inboundSchema: z.ZodType<
  EcommerceProductOptions,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  values: z.array(z.nullable(z.string())).optional(),
});

/** @internal */
export type EcommerceProductOptions$Outbound = {
  id?: string | null | undefined;
  name?: string | null | undefined;
  values?: Array<string | null> | undefined;
};

/** @internal */
export const EcommerceProductOptions$outboundSchema: z.ZodType<
  EcommerceProductOptions$Outbound,
  z.ZodTypeDef,
  EcommerceProductOptions
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  values: z.array(z.nullable(z.string())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EcommerceProductOptions$ {
  /** @deprecated use `EcommerceProductOptions$inboundSchema` instead. */
  export const inboundSchema = EcommerceProductOptions$inboundSchema;
  /** @deprecated use `EcommerceProductOptions$outboundSchema` instead. */
  export const outboundSchema = EcommerceProductOptions$outboundSchema;
  /** @deprecated use `EcommerceProductOptions$Outbound` instead. */
  export type Outbound = EcommerceProductOptions$Outbound;
}

export function ecommerceProductOptionsToJSON(
  ecommerceProductOptions: EcommerceProductOptions,
): string {
  return JSON.stringify(
    EcommerceProductOptions$outboundSchema.parse(ecommerceProductOptions),
  );
}

export function ecommerceProductOptionsFromJSON(
  jsonString: string,
): SafeParseResult<EcommerceProductOptions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EcommerceProductOptions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EcommerceProductOptions' from JSON`,
  );
}

/** @internal */
export const EcommerceProductVariantsOptions$inboundSchema: z.ZodType<
  EcommerceProductVariantsOptions,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  value: z.nullable(z.string()).optional(),
});

/** @internal */
export type EcommerceProductVariantsOptions$Outbound = {
  id?: string | null | undefined;
  name?: string | null | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const EcommerceProductVariantsOptions$outboundSchema: z.ZodType<
  EcommerceProductVariantsOptions$Outbound,
  z.ZodTypeDef,
  EcommerceProductVariantsOptions
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  value: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EcommerceProductVariantsOptions$ {
  /** @deprecated use `EcommerceProductVariantsOptions$inboundSchema` instead. */
  export const inboundSchema = EcommerceProductVariantsOptions$inboundSchema;
  /** @deprecated use `EcommerceProductVariantsOptions$outboundSchema` instead. */
  export const outboundSchema = EcommerceProductVariantsOptions$outboundSchema;
  /** @deprecated use `EcommerceProductVariantsOptions$Outbound` instead. */
  export type Outbound = EcommerceProductVariantsOptions$Outbound;
}

export function ecommerceProductVariantsOptionsToJSON(
  ecommerceProductVariantsOptions: EcommerceProductVariantsOptions,
): string {
  return JSON.stringify(
    EcommerceProductVariantsOptions$outboundSchema.parse(
      ecommerceProductVariantsOptions,
    ),
  );
}

export function ecommerceProductVariantsOptionsFromJSON(
  jsonString: string,
): SafeParseResult<EcommerceProductVariantsOptions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EcommerceProductVariantsOptions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EcommerceProductVariantsOptions' from JSON`,
  );
}

/** @internal */
export const EcommerceProductImages$inboundSchema: z.ZodType<
  EcommerceProductImages,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  url: z.nullable(z.string()).optional(),
});

/** @internal */
export type EcommerceProductImages$Outbound = {
  id?: string | null | undefined;
  url?: string | null | undefined;
};

/** @internal */
export const EcommerceProductImages$outboundSchema: z.ZodType<
  EcommerceProductImages$Outbound,
  z.ZodTypeDef,
  EcommerceProductImages
> = z.object({
  id: z.nullable(z.string()).optional(),
  url: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EcommerceProductImages$ {
  /** @deprecated use `EcommerceProductImages$inboundSchema` instead. */
  export const inboundSchema = EcommerceProductImages$inboundSchema;
  /** @deprecated use `EcommerceProductImages$outboundSchema` instead. */
  export const outboundSchema = EcommerceProductImages$outboundSchema;
  /** @deprecated use `EcommerceProductImages$Outbound` instead. */
  export type Outbound = EcommerceProductImages$Outbound;
}

export function ecommerceProductImagesToJSON(
  ecommerceProductImages: EcommerceProductImages,
): string {
  return JSON.stringify(
    EcommerceProductImages$outboundSchema.parse(ecommerceProductImages),
  );
}

export function ecommerceProductImagesFromJSON(
  jsonString: string,
): SafeParseResult<EcommerceProductImages, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EcommerceProductImages$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EcommerceProductImages' from JSON`,
  );
}

/** @internal */
export const Variants$inboundSchema: z.ZodType<
  Variants,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  price: z.nullable(z.string()).optional(),
  sku: z.nullable(z.string()).optional(),
  inventory_quantity: z.nullable(z.string()).optional(),
  weight: z.nullable(z.string()).optional(),
  weight_unit: z.nullable(z.string()).optional(),
  options: z.array(z.lazy(() => EcommerceProductVariantsOptions$inboundSchema))
    .optional(),
  images: z.array(z.lazy(() => EcommerceProductImages$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "inventory_quantity": "inventoryQuantity",
    "weight_unit": "weightUnit",
  });
});

/** @internal */
export type Variants$Outbound = {
  id?: string | null | undefined;
  name?: string | null | undefined;
  price?: string | null | undefined;
  sku?: string | null | undefined;
  inventory_quantity?: string | null | undefined;
  weight?: string | null | undefined;
  weight_unit?: string | null | undefined;
  options?: Array<EcommerceProductVariantsOptions$Outbound> | undefined;
  images?: Array<EcommerceProductImages$Outbound> | undefined;
};

/** @internal */
export const Variants$outboundSchema: z.ZodType<
  Variants$Outbound,
  z.ZodTypeDef,
  Variants
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  price: z.nullable(z.string()).optional(),
  sku: z.nullable(z.string()).optional(),
  inventoryQuantity: z.nullable(z.string()).optional(),
  weight: z.nullable(z.string()).optional(),
  weightUnit: z.nullable(z.string()).optional(),
  options: z.array(z.lazy(() => EcommerceProductVariantsOptions$outboundSchema))
    .optional(),
  images: z.array(z.lazy(() => EcommerceProductImages$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    inventoryQuantity: "inventory_quantity",
    weightUnit: "weight_unit",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Variants$ {
  /** @deprecated use `Variants$inboundSchema` instead. */
  export const inboundSchema = Variants$inboundSchema;
  /** @deprecated use `Variants$outboundSchema` instead. */
  export const outboundSchema = Variants$outboundSchema;
  /** @deprecated use `Variants$Outbound` instead. */
  export type Outbound = Variants$Outbound;
}

export function variantsToJSON(variants: Variants): string {
  return JSON.stringify(Variants$outboundSchema.parse(variants));
}

export function variantsFromJSON(
  jsonString: string,
): SafeParseResult<Variants, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Variants$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Variants' from JSON`,
  );
}

/** @internal */
export const EcommerceProductCategories$inboundSchema: z.ZodType<
  EcommerceProductCategories,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
});

/** @internal */
export type EcommerceProductCategories$Outbound = {
  id?: string | null | undefined;
  name?: string | null | undefined;
};

/** @internal */
export const EcommerceProductCategories$outboundSchema: z.ZodType<
  EcommerceProductCategories$Outbound,
  z.ZodTypeDef,
  EcommerceProductCategories
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EcommerceProductCategories$ {
  /** @deprecated use `EcommerceProductCategories$inboundSchema` instead. */
  export const inboundSchema = EcommerceProductCategories$inboundSchema;
  /** @deprecated use `EcommerceProductCategories$outboundSchema` instead. */
  export const outboundSchema = EcommerceProductCategories$outboundSchema;
  /** @deprecated use `EcommerceProductCategories$Outbound` instead. */
  export type Outbound = EcommerceProductCategories$Outbound;
}

export function ecommerceProductCategoriesToJSON(
  ecommerceProductCategories: EcommerceProductCategories,
): string {
  return JSON.stringify(
    EcommerceProductCategories$outboundSchema.parse(ecommerceProductCategories),
  );
}

export function ecommerceProductCategoriesFromJSON(
  jsonString: string,
): SafeParseResult<EcommerceProductCategories, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EcommerceProductCategories$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EcommerceProductCategories' from JSON`,
  );
}

/** @internal */
export const EcommerceProduct$inboundSchema: z.ZodType<
  EcommerceProduct,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  status: z.nullable(ProductStatus$inboundSchema).optional(),
  price: z.nullable(z.string()).optional(),
  sku: z.nullable(z.string()).optional(),
  inventory_quantity: z.nullable(z.string()).optional(),
  images: z.nullable(z.array(z.lazy(() => Images$inboundSchema))).optional(),
  weight: z.nullable(z.string()).optional(),
  weight_unit: z.nullable(z.string()).optional(),
  options: z.array(z.lazy(() => EcommerceProductOptions$inboundSchema))
    .optional(),
  variants: z.array(z.lazy(() => Variants$inboundSchema)).optional(),
  tags: z.array(z.nullable(z.string())).optional(),
  categories: z.array(z.lazy(() => EcommerceProductCategories$inboundSchema))
    .optional(),
  custom_mappings: z.nullable(z.record(z.any())).optional(),
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  updated_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "inventory_quantity": "inventoryQuantity",
    "weight_unit": "weightUnit",
    "custom_mappings": "customMappings",
    "created_at": "createdAt",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type EcommerceProduct$Outbound = {
  id: string;
  name?: string | null | undefined;
  description?: string | null | undefined;
  status?: string | null | undefined;
  price?: string | null | undefined;
  sku?: string | null | undefined;
  inventory_quantity?: string | null | undefined;
  images?: Array<Images$Outbound> | null | undefined;
  weight?: string | null | undefined;
  weight_unit?: string | null | undefined;
  options?: Array<EcommerceProductOptions$Outbound> | undefined;
  variants?: Array<Variants$Outbound> | undefined;
  tags?: Array<string | null> | undefined;
  categories?: Array<EcommerceProductCategories$Outbound> | undefined;
  custom_mappings?: { [k: string]: any } | null | undefined;
  created_at?: string | null | undefined;
  updated_at?: string | null | undefined;
};

/** @internal */
export const EcommerceProduct$outboundSchema: z.ZodType<
  EcommerceProduct$Outbound,
  z.ZodTypeDef,
  EcommerceProduct
> = z.object({
  id: z.string(),
  name: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  status: z.nullable(ProductStatus$outboundSchema).optional(),
  price: z.nullable(z.string()).optional(),
  sku: z.nullable(z.string()).optional(),
  inventoryQuantity: z.nullable(z.string()).optional(),
  images: z.nullable(z.array(z.lazy(() => Images$outboundSchema))).optional(),
  weight: z.nullable(z.string()).optional(),
  weightUnit: z.nullable(z.string()).optional(),
  options: z.array(z.lazy(() => EcommerceProductOptions$outboundSchema))
    .optional(),
  variants: z.array(z.lazy(() => Variants$outboundSchema)).optional(),
  tags: z.array(z.nullable(z.string())).optional(),
  categories: z.array(z.lazy(() => EcommerceProductCategories$outboundSchema))
    .optional(),
  customMappings: z.nullable(z.record(z.any())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    inventoryQuantity: "inventory_quantity",
    weightUnit: "weight_unit",
    customMappings: "custom_mappings",
    createdAt: "created_at",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EcommerceProduct$ {
  /** @deprecated use `EcommerceProduct$inboundSchema` instead. */
  export const inboundSchema = EcommerceProduct$inboundSchema;
  /** @deprecated use `EcommerceProduct$outboundSchema` instead. */
  export const outboundSchema = EcommerceProduct$outboundSchema;
  /** @deprecated use `EcommerceProduct$Outbound` instead. */
  export type Outbound = EcommerceProduct$Outbound;
}

export function ecommerceProductToJSON(
  ecommerceProduct: EcommerceProduct,
): string {
  return JSON.stringify(
    EcommerceProduct$outboundSchema.parse(ecommerceProduct),
  );
}

export function ecommerceProductFromJSON(
  jsonString: string,
): SafeParseResult<EcommerceProduct, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EcommerceProduct$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EcommerceProduct' from JSON`,
  );
}
