/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import { RFCDate } from "../../types/rfcdate.js";
import {
  Address,
  Address$inboundSchema,
  Address$Outbound,
  Address$outboundSchema,
} from "./address.js";
import {
  Currency,
  Currency$inboundSchema,
  Currency$outboundSchema,
} from "./currency.js";
import {
  CustomField,
  CustomField$inboundSchema,
  CustomField$Outbound,
  CustomField$outboundSchema,
} from "./customfield.js";
import {
  CustomMappings,
  CustomMappings$inboundSchema,
  CustomMappings$Outbound,
  CustomMappings$outboundSchema,
} from "./custommappings.js";
import {
  Department,
  Department$inboundSchema,
  Department$Outbound,
  Department$outboundSchema,
} from "./department.js";
import {
  JobStatus,
  JobStatus$inboundSchema,
  JobStatus$outboundSchema,
} from "./jobstatus.js";

/**
 * The visibility of the job
 */
export const Visibility = {
  Draft: "draft",
  Public: "public",
  Internal: "internal",
} as const;
/**
 * The visibility of the job
 */
export type Visibility = ClosedEnum<typeof Visibility>;

export const EmploymentTerms = {
  FullTime: "full-time",
  PartTime: "part-time",
  Internship: "internship",
  Contractor: "contractor",
  Employee: "employee",
  Freelance: "freelance",
  Temp: "temp",
  Seasonal: "seasonal",
  Volunteer: "volunteer",
  Other: "other",
} as const;
export type EmploymentTerms = ClosedEnum<typeof EmploymentTerms>;

/**
 * Details of the branch for which the job is created.
 */
export type Branch = {
  /**
   * A unique identifier for an object.
   */
  id?: string | undefined;
  /**
   * Name of the branch.
   */
  name?: string | undefined;
};

export type Blocks = {
  title?: string | undefined;
  content?: string | undefined;
};

export type Salary = {
  /**
   * Minimum salary payable for the job role.
   */
  min?: number | undefined;
  /**
   * Maximum salary payable for the job role.
   */
  max?: number | undefined;
  /**
   * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
   */
  currency?: Currency | null | undefined;
  interval?: string | null | undefined;
};

export const JobType = {
  JobPortal: "job_portal",
  JobDescription: "job_description",
} as const;
export type JobType = ClosedEnum<typeof JobType>;

export type JobLinks = {
  type?: JobType | undefined;
  url?: string | undefined;
};

export type Job = {
  /**
   * A unique identifier for an object.
   */
  id?: string | undefined;
  slug?: string | null | undefined;
  /**
   * The job title of the person.
   */
  title?: string | null | undefined;
  /**
   * Sequence in relation to other jobs.
   */
  sequence?: number | undefined;
  /**
   * The visibility of the job
   */
  visibility?: Visibility | undefined;
  /**
   * The status of the job.
   */
  status?: JobStatus | undefined;
  /**
   * The code of the job.
   */
  code?: string | undefined;
  /**
   * language code according to ISO 639-1. For the United States - EN
   */
  language?: string | null | undefined;
  employmentTerms?: EmploymentTerms | null | undefined;
  /**
   * Level of experience required for the job role.
   */
  experience?: string | undefined;
  /**
   * Specifies the location for the job posting.
   */
  location?: string | null | undefined;
  /**
   * Specifies whether the posting is for a remote job.
   */
  remote?: boolean | null | undefined;
  /**
   * A job's Requisition ID (Req ID) allows your organization to identify and track a job based on alphanumeric naming conventions unique to your company's internal processes.
   */
  requisitionId?: string | undefined;
  department?: Department | undefined;
  /**
   * Details of the branch for which the job is created.
   */
  branch?: Branch | undefined;
  /**
   * The recruiter is generally someone who is tasked to help the hiring manager find and screen qualified applicant
   */
  recruiters?: Array<string> | null | undefined;
  hiringManagers?: Array<string> | undefined;
  followers?: Array<string> | null | undefined;
  /**
   * A description of the object.
   */
  description?: string | null | undefined;
  /**
   * The job description in HTML format
   */
  descriptionHtml?: string | null | undefined;
  blocks?: Array<Blocks> | undefined;
  closing?: string | null | undefined;
  /**
   * The closing section of the job description in HTML format
   */
  closingHtml?: string | null | undefined;
  closingDate?: RFCDate | null | undefined;
  salary?: Salary | undefined;
  /**
   * URL of the job description
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  url?: string | null | undefined;
  /**
   * URL of the job portal
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  jobPortalUrl?: string | null | undefined;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  recordUrl?: string | null | undefined;
  links?: Array<JobLinks> | undefined;
  confidential?: boolean | undefined;
  /**
   * Specifies whether an employee of the organization can apply for the job.
   */
  availableToEmployees?: boolean | undefined;
  tags?: Array<string> | null | undefined;
  addresses?: Array<Address> | undefined;
  customFields?: Array<CustomField> | undefined;
  /**
   * Flag to indicate if the object is deleted.
   */
  deleted?: boolean | null | undefined;
  ownerId?: string | null | undefined;
  publishedAt?: Date | null | undefined;
  /**
   * When custom mappings are configured on the resource, the result is included here.
   */
  customMappings?: CustomMappings | null | undefined;
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
};

/** @internal */
export const Visibility$inboundSchema: z.ZodNativeEnum<typeof Visibility> = z
  .nativeEnum(Visibility);

/** @internal */
export const Visibility$outboundSchema: z.ZodNativeEnum<typeof Visibility> =
  Visibility$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Visibility$ {
  /** @deprecated use `Visibility$inboundSchema` instead. */
  export const inboundSchema = Visibility$inboundSchema;
  /** @deprecated use `Visibility$outboundSchema` instead. */
  export const outboundSchema = Visibility$outboundSchema;
}

/** @internal */
export const EmploymentTerms$inboundSchema: z.ZodNativeEnum<
  typeof EmploymentTerms
> = z.nativeEnum(EmploymentTerms);

/** @internal */
export const EmploymentTerms$outboundSchema: z.ZodNativeEnum<
  typeof EmploymentTerms
> = EmploymentTerms$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmploymentTerms$ {
  /** @deprecated use `EmploymentTerms$inboundSchema` instead. */
  export const inboundSchema = EmploymentTerms$inboundSchema;
  /** @deprecated use `EmploymentTerms$outboundSchema` instead. */
  export const outboundSchema = EmploymentTerms$outboundSchema;
}

/** @internal */
export const Branch$inboundSchema: z.ZodType<Branch, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional(),
  });

/** @internal */
export type Branch$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
};

/** @internal */
export const Branch$outboundSchema: z.ZodType<
  Branch$Outbound,
  z.ZodTypeDef,
  Branch
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Branch$ {
  /** @deprecated use `Branch$inboundSchema` instead. */
  export const inboundSchema = Branch$inboundSchema;
  /** @deprecated use `Branch$outboundSchema` instead. */
  export const outboundSchema = Branch$outboundSchema;
  /** @deprecated use `Branch$Outbound` instead. */
  export type Outbound = Branch$Outbound;
}

/** @internal */
export const Blocks$inboundSchema: z.ZodType<Blocks, z.ZodTypeDef, unknown> = z
  .object({
    title: z.string().optional(),
    content: z.string().optional(),
  });

/** @internal */
export type Blocks$Outbound = {
  title?: string | undefined;
  content?: string | undefined;
};

/** @internal */
export const Blocks$outboundSchema: z.ZodType<
  Blocks$Outbound,
  z.ZodTypeDef,
  Blocks
> = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Blocks$ {
  /** @deprecated use `Blocks$inboundSchema` instead. */
  export const inboundSchema = Blocks$inboundSchema;
  /** @deprecated use `Blocks$outboundSchema` instead. */
  export const outboundSchema = Blocks$outboundSchema;
  /** @deprecated use `Blocks$Outbound` instead. */
  export type Outbound = Blocks$Outbound;
}

/** @internal */
export const Salary$inboundSchema: z.ZodType<Salary, z.ZodTypeDef, unknown> = z
  .object({
    min: z.number().int().optional(),
    max: z.number().int().optional(),
    currency: z.nullable(Currency$inboundSchema).optional(),
    interval: z.nullable(z.string()).optional(),
  });

/** @internal */
export type Salary$Outbound = {
  min?: number | undefined;
  max?: number | undefined;
  currency?: string | null | undefined;
  interval?: string | null | undefined;
};

/** @internal */
export const Salary$outboundSchema: z.ZodType<
  Salary$Outbound,
  z.ZodTypeDef,
  Salary
> = z.object({
  min: z.number().int().optional(),
  max: z.number().int().optional(),
  currency: z.nullable(Currency$outboundSchema).optional(),
  interval: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Salary$ {
  /** @deprecated use `Salary$inboundSchema` instead. */
  export const inboundSchema = Salary$inboundSchema;
  /** @deprecated use `Salary$outboundSchema` instead. */
  export const outboundSchema = Salary$outboundSchema;
  /** @deprecated use `Salary$Outbound` instead. */
  export type Outbound = Salary$Outbound;
}

/** @internal */
export const JobType$inboundSchema: z.ZodNativeEnum<typeof JobType> = z
  .nativeEnum(JobType);

/** @internal */
export const JobType$outboundSchema: z.ZodNativeEnum<typeof JobType> =
  JobType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobType$ {
  /** @deprecated use `JobType$inboundSchema` instead. */
  export const inboundSchema = JobType$inboundSchema;
  /** @deprecated use `JobType$outboundSchema` instead. */
  export const outboundSchema = JobType$outboundSchema;
}

/** @internal */
export const JobLinks$inboundSchema: z.ZodType<
  JobLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: JobType$inboundSchema.optional(),
  url: z.string().optional(),
});

/** @internal */
export type JobLinks$Outbound = {
  type?: string | undefined;
  url?: string | undefined;
};

/** @internal */
export const JobLinks$outboundSchema: z.ZodType<
  JobLinks$Outbound,
  z.ZodTypeDef,
  JobLinks
> = z.object({
  type: JobType$outboundSchema.optional(),
  url: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobLinks$ {
  /** @deprecated use `JobLinks$inboundSchema` instead. */
  export const inboundSchema = JobLinks$inboundSchema;
  /** @deprecated use `JobLinks$outboundSchema` instead. */
  export const outboundSchema = JobLinks$outboundSchema;
  /** @deprecated use `JobLinks$Outbound` instead. */
  export type Outbound = JobLinks$Outbound;
}

/** @internal */
export const Job$inboundSchema: z.ZodType<Job, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string().optional(),
    slug: z.nullable(z.string()).optional(),
    title: z.nullable(z.string()).optional(),
    sequence: z.number().int().optional(),
    visibility: Visibility$inboundSchema.optional(),
    status: JobStatus$inboundSchema.optional(),
    code: z.string().optional(),
    language: z.nullable(z.string()).optional(),
    employment_terms: z.nullable(EmploymentTerms$inboundSchema).optional(),
    experience: z.string().optional(),
    location: z.nullable(z.string()).optional(),
    remote: z.nullable(z.boolean()).optional(),
    requisition_id: z.string().optional(),
    department: Department$inboundSchema.optional(),
    branch: z.lazy(() => Branch$inboundSchema).optional(),
    recruiters: z.nullable(z.array(z.string())).optional(),
    hiring_managers: z.array(z.string()).optional(),
    followers: z.nullable(z.array(z.string())).optional(),
    description: z.nullable(z.string()).optional(),
    description_html: z.nullable(z.string()).optional(),
    blocks: z.array(z.lazy(() => Blocks$inboundSchema)).optional(),
    closing: z.nullable(z.string()).optional(),
    closing_html: z.nullable(z.string()).optional(),
    closing_date: z.nullable(z.string().transform(v => new RFCDate(v)))
      .optional(),
    salary: z.lazy(() => Salary$inboundSchema).optional(),
    url: z.nullable(z.string()).optional(),
    job_portal_url: z.nullable(z.string()).optional(),
    record_url: z.nullable(z.string()).optional(),
    links: z.array(z.lazy(() => JobLinks$inboundSchema)).optional(),
    confidential: z.boolean().optional(),
    available_to_employees: z.boolean().optional(),
    tags: z.nullable(z.array(z.string())).optional(),
    addresses: z.array(Address$inboundSchema).optional(),
    custom_fields: z.array(CustomField$inboundSchema).optional(),
    deleted: z.nullable(z.boolean()).optional(),
    owner_id: z.nullable(z.string()).optional(),
    published_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
    custom_mappings: z.nullable(CustomMappings$inboundSchema).optional(),
    updated_by: z.nullable(z.string()).optional(),
    created_by: z.nullable(z.string()).optional(),
    updated_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
    created_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      "employment_terms": "employmentTerms",
      "requisition_id": "requisitionId",
      "hiring_managers": "hiringManagers",
      "description_html": "descriptionHtml",
      "closing_html": "closingHtml",
      "closing_date": "closingDate",
      "job_portal_url": "jobPortalUrl",
      "record_url": "recordUrl",
      "available_to_employees": "availableToEmployees",
      "custom_fields": "customFields",
      "owner_id": "ownerId",
      "published_at": "publishedAt",
      "custom_mappings": "customMappings",
      "updated_by": "updatedBy",
      "created_by": "createdBy",
      "updated_at": "updatedAt",
      "created_at": "createdAt",
    });
  });

/** @internal */
export type Job$Outbound = {
  id?: string | undefined;
  slug?: string | null | undefined;
  title?: string | null | undefined;
  sequence?: number | undefined;
  visibility?: string | undefined;
  status?: string | undefined;
  code?: string | undefined;
  language?: string | null | undefined;
  employment_terms?: string | null | undefined;
  experience?: string | undefined;
  location?: string | null | undefined;
  remote?: boolean | null | undefined;
  requisition_id?: string | undefined;
  department?: Department$Outbound | undefined;
  branch?: Branch$Outbound | undefined;
  recruiters?: Array<string> | null | undefined;
  hiring_managers?: Array<string> | undefined;
  followers?: Array<string> | null | undefined;
  description?: string | null | undefined;
  description_html?: string | null | undefined;
  blocks?: Array<Blocks$Outbound> | undefined;
  closing?: string | null | undefined;
  closing_html?: string | null | undefined;
  closing_date?: string | null | undefined;
  salary?: Salary$Outbound | undefined;
  url?: string | null | undefined;
  job_portal_url?: string | null | undefined;
  record_url?: string | null | undefined;
  links?: Array<JobLinks$Outbound> | undefined;
  confidential?: boolean | undefined;
  available_to_employees?: boolean | undefined;
  tags?: Array<string> | null | undefined;
  addresses?: Array<Address$Outbound> | undefined;
  custom_fields?: Array<CustomField$Outbound> | undefined;
  deleted?: boolean | null | undefined;
  owner_id?: string | null | undefined;
  published_at?: string | null | undefined;
  custom_mappings?: CustomMappings$Outbound | null | undefined;
  updated_by?: string | null | undefined;
  created_by?: string | null | undefined;
  updated_at?: string | null | undefined;
  created_at?: string | null | undefined;
};

/** @internal */
export const Job$outboundSchema: z.ZodType<Job$Outbound, z.ZodTypeDef, Job> = z
  .object({
    id: z.string().optional(),
    slug: z.nullable(z.string()).optional(),
    title: z.nullable(z.string()).optional(),
    sequence: z.number().int().optional(),
    visibility: Visibility$outboundSchema.optional(),
    status: JobStatus$outboundSchema.optional(),
    code: z.string().optional(),
    language: z.nullable(z.string()).optional(),
    employmentTerms: z.nullable(EmploymentTerms$outboundSchema).optional(),
    experience: z.string().optional(),
    location: z.nullable(z.string()).optional(),
    remote: z.nullable(z.boolean()).optional(),
    requisitionId: z.string().optional(),
    department: Department$outboundSchema.optional(),
    branch: z.lazy(() => Branch$outboundSchema).optional(),
    recruiters: z.nullable(z.array(z.string())).optional(),
    hiringManagers: z.array(z.string()).optional(),
    followers: z.nullable(z.array(z.string())).optional(),
    description: z.nullable(z.string()).optional(),
    descriptionHtml: z.nullable(z.string()).optional(),
    blocks: z.array(z.lazy(() => Blocks$outboundSchema)).optional(),
    closing: z.nullable(z.string()).optional(),
    closingHtml: z.nullable(z.string()).optional(),
    closingDate: z.nullable(z.instanceof(RFCDate).transform(v => v.toString()))
      .optional(),
    salary: z.lazy(() => Salary$outboundSchema).optional(),
    url: z.nullable(z.string()).optional(),
    jobPortalUrl: z.nullable(z.string()).optional(),
    recordUrl: z.nullable(z.string()).optional(),
    links: z.array(z.lazy(() => JobLinks$outboundSchema)).optional(),
    confidential: z.boolean().optional(),
    availableToEmployees: z.boolean().optional(),
    tags: z.nullable(z.array(z.string())).optional(),
    addresses: z.array(Address$outboundSchema).optional(),
    customFields: z.array(CustomField$outboundSchema).optional(),
    deleted: z.nullable(z.boolean()).optional(),
    ownerId: z.nullable(z.string()).optional(),
    publishedAt: z.nullable(z.date().transform(v => v.toISOString()))
      .optional(),
    customMappings: z.nullable(CustomMappings$outboundSchema).optional(),
    updatedBy: z.nullable(z.string()).optional(),
    createdBy: z.nullable(z.string()).optional(),
    updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
    createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  }).transform((v) => {
    return remap$(v, {
      employmentTerms: "employment_terms",
      requisitionId: "requisition_id",
      hiringManagers: "hiring_managers",
      descriptionHtml: "description_html",
      closingHtml: "closing_html",
      closingDate: "closing_date",
      jobPortalUrl: "job_portal_url",
      recordUrl: "record_url",
      availableToEmployees: "available_to_employees",
      customFields: "custom_fields",
      ownerId: "owner_id",
      publishedAt: "published_at",
      customMappings: "custom_mappings",
      updatedBy: "updated_by",
      createdBy: "created_by",
      updatedAt: "updated_at",
      createdAt: "created_at",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Job$ {
  /** @deprecated use `Job$inboundSchema` instead. */
  export const inboundSchema = Job$inboundSchema;
  /** @deprecated use `Job$outboundSchema` instead. */
  export const outboundSchema = Job$outboundSchema;
  /** @deprecated use `Job$Outbound` instead. */
  export type Outbound = Job$Outbound;
}
