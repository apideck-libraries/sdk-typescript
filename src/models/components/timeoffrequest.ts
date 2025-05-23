/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PassThroughBody,
  PassThroughBody$inboundSchema,
  PassThroughBody$Outbound,
  PassThroughBody$outboundSchema,
} from "./passthroughbody.js";

/**
 * The status of the time off request.
 */
export const TimeOffRequestStatusStatus = {
  Requested: "requested",
  Approved: "approved",
  Declined: "declined",
  Cancelled: "cancelled",
  Deleted: "deleted",
  Other: "other",
} as const;
/**
 * The status of the time off request.
 */
export type TimeOffRequestStatusStatus = ClosedEnum<
  typeof TimeOffRequestStatusStatus
>;

/**
 * The type of request
 */
export const RequestType = {
  Vacation: "vacation",
  Sick: "sick",
  Personal: "personal",
  JuryDuty: "jury_duty",
  Volunteer: "volunteer",
  Bereavement: "bereavement",
  Other: "other",
} as const;
/**
 * The type of request
 */
export type RequestType = ClosedEnum<typeof RequestType>;

/**
 * The unit of time off requested. Possible values include: `hours`, `days`, or `other`.
 */
export const Units = {
  Days: "days",
  Hours: "hours",
  Other: "other",
} as const;
/**
 * The unit of time off requested. Possible values include: `hours`, `days`, or `other`.
 */
export type Units = ClosedEnum<typeof Units>;

export type Notes = {
  employee?: string | null | undefined;
  manager?: string | null | undefined;
};

export type TimeOffRequest = {
  /**
   * A unique identifier for an object.
   */
  id?: string | undefined;
  /**
   * ID of the employee
   */
  employeeId?: string | null | undefined;
  /**
   * ID of the policy
   */
  policyId?: string | null | undefined;
  /**
   * The status of the time off request.
   */
  status?: TimeOffRequestStatusStatus | null | undefined;
  /**
   * Description of the time off request.
   */
  description?: string | null | undefined;
  /**
   * The start date of the time off request.
   */
  startDate?: string | null | undefined;
  /**
   * The end date of the time off request.
   */
  endDate?: string | null | undefined;
  /**
   * The date the request was made.
   */
  requestDate?: string | null | undefined;
  /**
   * The type of request
   */
  requestType?: RequestType | null | undefined;
  /**
   * The date the request was approved
   */
  approvalDate?: string | null | undefined;
  /**
   * The unit of time off requested. Possible values include: `hours`, `days`, or `other`.
   */
  units?: Units | null | undefined;
  /**
   * The amount of time off requested.
   */
  amount?: number | null | undefined;
  /**
   * The day part of the time off request.
   */
  dayPart?: string | null | undefined;
  notes?: Notes | undefined;
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
   * The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.
   */
  passThrough?: Array<PassThroughBody> | undefined;
  /**
   * The policy type of the time off request
   */
  policyType?: string | undefined;
};

export type TimeOffRequestInput = {
  /**
   * ID of the employee
   */
  employeeId?: string | null | undefined;
  /**
   * ID of the policy
   */
  policyId?: string | null | undefined;
  /**
   * The status of the time off request.
   */
  status?: TimeOffRequestStatusStatus | null | undefined;
  /**
   * Description of the time off request.
   */
  description?: string | null | undefined;
  /**
   * The start date of the time off request.
   */
  startDate?: string | null | undefined;
  /**
   * The end date of the time off request.
   */
  endDate?: string | null | undefined;
  /**
   * The date the request was made.
   */
  requestDate?: string | null | undefined;
  /**
   * The type of request
   */
  requestType?: RequestType | null | undefined;
  /**
   * The date the request was approved
   */
  approvalDate?: string | null | undefined;
  /**
   * The unit of time off requested. Possible values include: `hours`, `days`, or `other`.
   */
  units?: Units | null | undefined;
  /**
   * The amount of time off requested.
   */
  amount?: number | null | undefined;
  /**
   * The day part of the time off request.
   */
  dayPart?: string | null | undefined;
  notes?: Notes | undefined;
  /**
   * The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.
   */
  passThrough?: Array<PassThroughBody> | undefined;
  /**
   * The policy type of the time off request
   */
  policyType?: string | undefined;
};

/** @internal */
export const TimeOffRequestStatusStatus$inboundSchema: z.ZodNativeEnum<
  typeof TimeOffRequestStatusStatus
> = z.nativeEnum(TimeOffRequestStatusStatus);

/** @internal */
export const TimeOffRequestStatusStatus$outboundSchema: z.ZodNativeEnum<
  typeof TimeOffRequestStatusStatus
> = TimeOffRequestStatusStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimeOffRequestStatusStatus$ {
  /** @deprecated use `TimeOffRequestStatusStatus$inboundSchema` instead. */
  export const inboundSchema = TimeOffRequestStatusStatus$inboundSchema;
  /** @deprecated use `TimeOffRequestStatusStatus$outboundSchema` instead. */
  export const outboundSchema = TimeOffRequestStatusStatus$outboundSchema;
}

/** @internal */
export const RequestType$inboundSchema: z.ZodNativeEnum<typeof RequestType> = z
  .nativeEnum(RequestType);

/** @internal */
export const RequestType$outboundSchema: z.ZodNativeEnum<typeof RequestType> =
  RequestType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RequestType$ {
  /** @deprecated use `RequestType$inboundSchema` instead. */
  export const inboundSchema = RequestType$inboundSchema;
  /** @deprecated use `RequestType$outboundSchema` instead. */
  export const outboundSchema = RequestType$outboundSchema;
}

/** @internal */
export const Units$inboundSchema: z.ZodNativeEnum<typeof Units> = z.nativeEnum(
  Units,
);

/** @internal */
export const Units$outboundSchema: z.ZodNativeEnum<typeof Units> =
  Units$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Units$ {
  /** @deprecated use `Units$inboundSchema` instead. */
  export const inboundSchema = Units$inboundSchema;
  /** @deprecated use `Units$outboundSchema` instead. */
  export const outboundSchema = Units$outboundSchema;
}

/** @internal */
export const Notes$inboundSchema: z.ZodType<Notes, z.ZodTypeDef, unknown> = z
  .object({
    employee: z.nullable(z.string()).optional(),
    manager: z.nullable(z.string()).optional(),
  });

/** @internal */
export type Notes$Outbound = {
  employee?: string | null | undefined;
  manager?: string | null | undefined;
};

/** @internal */
export const Notes$outboundSchema: z.ZodType<
  Notes$Outbound,
  z.ZodTypeDef,
  Notes
> = z.object({
  employee: z.nullable(z.string()).optional(),
  manager: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Notes$ {
  /** @deprecated use `Notes$inboundSchema` instead. */
  export const inboundSchema = Notes$inboundSchema;
  /** @deprecated use `Notes$outboundSchema` instead. */
  export const outboundSchema = Notes$outboundSchema;
  /** @deprecated use `Notes$Outbound` instead. */
  export type Outbound = Notes$Outbound;
}

export function notesToJSON(notes: Notes): string {
  return JSON.stringify(Notes$outboundSchema.parse(notes));
}

export function notesFromJSON(
  jsonString: string,
): SafeParseResult<Notes, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Notes$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Notes' from JSON`,
  );
}

/** @internal */
export const TimeOffRequest$inboundSchema: z.ZodType<
  TimeOffRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  employee_id: z.nullable(z.string()).optional(),
  policy_id: z.nullable(z.string()).optional(),
  status: z.nullable(TimeOffRequestStatusStatus$inboundSchema).optional(),
  description: z.nullable(z.string()).optional(),
  start_date: z.nullable(z.string()).optional(),
  end_date: z.nullable(z.string()).optional(),
  request_date: z.nullable(z.string()).optional(),
  request_type: z.nullable(RequestType$inboundSchema).optional(),
  approval_date: z.nullable(z.string()).optional(),
  units: z.nullable(Units$inboundSchema).optional(),
  amount: z.nullable(z.number()).optional(),
  day_part: z.nullable(z.string()).optional(),
  notes: z.lazy(() => Notes$inboundSchema).optional(),
  custom_mappings: z.nullable(z.record(z.any())).optional(),
  updated_by: z.nullable(z.string()).optional(),
  created_by: z.nullable(z.string()).optional(),
  updated_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  pass_through: z.array(PassThroughBody$inboundSchema).optional(),
  policy_type: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "employee_id": "employeeId",
    "policy_id": "policyId",
    "start_date": "startDate",
    "end_date": "endDate",
    "request_date": "requestDate",
    "request_type": "requestType",
    "approval_date": "approvalDate",
    "day_part": "dayPart",
    "custom_mappings": "customMappings",
    "updated_by": "updatedBy",
    "created_by": "createdBy",
    "updated_at": "updatedAt",
    "created_at": "createdAt",
    "pass_through": "passThrough",
    "policy_type": "policyType",
  });
});

/** @internal */
export type TimeOffRequest$Outbound = {
  id?: string | undefined;
  employee_id?: string | null | undefined;
  policy_id?: string | null | undefined;
  status?: string | null | undefined;
  description?: string | null | undefined;
  start_date?: string | null | undefined;
  end_date?: string | null | undefined;
  request_date?: string | null | undefined;
  request_type?: string | null | undefined;
  approval_date?: string | null | undefined;
  units?: string | null | undefined;
  amount?: number | null | undefined;
  day_part?: string | null | undefined;
  notes?: Notes$Outbound | undefined;
  custom_mappings?: { [k: string]: any } | null | undefined;
  updated_by?: string | null | undefined;
  created_by?: string | null | undefined;
  updated_at?: string | null | undefined;
  created_at?: string | null | undefined;
  pass_through?: Array<PassThroughBody$Outbound> | undefined;
  policy_type?: string | undefined;
};

/** @internal */
export const TimeOffRequest$outboundSchema: z.ZodType<
  TimeOffRequest$Outbound,
  z.ZodTypeDef,
  TimeOffRequest
> = z.object({
  id: z.string().optional(),
  employeeId: z.nullable(z.string()).optional(),
  policyId: z.nullable(z.string()).optional(),
  status: z.nullable(TimeOffRequestStatusStatus$outboundSchema).optional(),
  description: z.nullable(z.string()).optional(),
  startDate: z.nullable(z.string()).optional(),
  endDate: z.nullable(z.string()).optional(),
  requestDate: z.nullable(z.string()).optional(),
  requestType: z.nullable(RequestType$outboundSchema).optional(),
  approvalDate: z.nullable(z.string()).optional(),
  units: z.nullable(Units$outboundSchema).optional(),
  amount: z.nullable(z.number()).optional(),
  dayPart: z.nullable(z.string()).optional(),
  notes: z.lazy(() => Notes$outboundSchema).optional(),
  customMappings: z.nullable(z.record(z.any())).optional(),
  updatedBy: z.nullable(z.string()).optional(),
  createdBy: z.nullable(z.string()).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  passThrough: z.array(PassThroughBody$outboundSchema).optional(),
  policyType: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    employeeId: "employee_id",
    policyId: "policy_id",
    startDate: "start_date",
    endDate: "end_date",
    requestDate: "request_date",
    requestType: "request_type",
    approvalDate: "approval_date",
    dayPart: "day_part",
    customMappings: "custom_mappings",
    updatedBy: "updated_by",
    createdBy: "created_by",
    updatedAt: "updated_at",
    createdAt: "created_at",
    passThrough: "pass_through",
    policyType: "policy_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimeOffRequest$ {
  /** @deprecated use `TimeOffRequest$inboundSchema` instead. */
  export const inboundSchema = TimeOffRequest$inboundSchema;
  /** @deprecated use `TimeOffRequest$outboundSchema` instead. */
  export const outboundSchema = TimeOffRequest$outboundSchema;
  /** @deprecated use `TimeOffRequest$Outbound` instead. */
  export type Outbound = TimeOffRequest$Outbound;
}

export function timeOffRequestToJSON(timeOffRequest: TimeOffRequest): string {
  return JSON.stringify(TimeOffRequest$outboundSchema.parse(timeOffRequest));
}

export function timeOffRequestFromJSON(
  jsonString: string,
): SafeParseResult<TimeOffRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TimeOffRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TimeOffRequest' from JSON`,
  );
}

/** @internal */
export const TimeOffRequestInput$inboundSchema: z.ZodType<
  TimeOffRequestInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  employee_id: z.nullable(z.string()).optional(),
  policy_id: z.nullable(z.string()).optional(),
  status: z.nullable(TimeOffRequestStatusStatus$inboundSchema).optional(),
  description: z.nullable(z.string()).optional(),
  start_date: z.nullable(z.string()).optional(),
  end_date: z.nullable(z.string()).optional(),
  request_date: z.nullable(z.string()).optional(),
  request_type: z.nullable(RequestType$inboundSchema).optional(),
  approval_date: z.nullable(z.string()).optional(),
  units: z.nullable(Units$inboundSchema).optional(),
  amount: z.nullable(z.number()).optional(),
  day_part: z.nullable(z.string()).optional(),
  notes: z.lazy(() => Notes$inboundSchema).optional(),
  pass_through: z.array(PassThroughBody$inboundSchema).optional(),
  policy_type: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "employee_id": "employeeId",
    "policy_id": "policyId",
    "start_date": "startDate",
    "end_date": "endDate",
    "request_date": "requestDate",
    "request_type": "requestType",
    "approval_date": "approvalDate",
    "day_part": "dayPart",
    "pass_through": "passThrough",
    "policy_type": "policyType",
  });
});

/** @internal */
export type TimeOffRequestInput$Outbound = {
  employee_id?: string | null | undefined;
  policy_id?: string | null | undefined;
  status?: string | null | undefined;
  description?: string | null | undefined;
  start_date?: string | null | undefined;
  end_date?: string | null | undefined;
  request_date?: string | null | undefined;
  request_type?: string | null | undefined;
  approval_date?: string | null | undefined;
  units?: string | null | undefined;
  amount?: number | null | undefined;
  day_part?: string | null | undefined;
  notes?: Notes$Outbound | undefined;
  pass_through?: Array<PassThroughBody$Outbound> | undefined;
  policy_type?: string | undefined;
};

/** @internal */
export const TimeOffRequestInput$outboundSchema: z.ZodType<
  TimeOffRequestInput$Outbound,
  z.ZodTypeDef,
  TimeOffRequestInput
> = z.object({
  employeeId: z.nullable(z.string()).optional(),
  policyId: z.nullable(z.string()).optional(),
  status: z.nullable(TimeOffRequestStatusStatus$outboundSchema).optional(),
  description: z.nullable(z.string()).optional(),
  startDate: z.nullable(z.string()).optional(),
  endDate: z.nullable(z.string()).optional(),
  requestDate: z.nullable(z.string()).optional(),
  requestType: z.nullable(RequestType$outboundSchema).optional(),
  approvalDate: z.nullable(z.string()).optional(),
  units: z.nullable(Units$outboundSchema).optional(),
  amount: z.nullable(z.number()).optional(),
  dayPart: z.nullable(z.string()).optional(),
  notes: z.lazy(() => Notes$outboundSchema).optional(),
  passThrough: z.array(PassThroughBody$outboundSchema).optional(),
  policyType: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    employeeId: "employee_id",
    policyId: "policy_id",
    startDate: "start_date",
    endDate: "end_date",
    requestDate: "request_date",
    requestType: "request_type",
    approvalDate: "approval_date",
    dayPart: "day_part",
    passThrough: "pass_through",
    policyType: "policy_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimeOffRequestInput$ {
  /** @deprecated use `TimeOffRequestInput$inboundSchema` instead. */
  export const inboundSchema = TimeOffRequestInput$inboundSchema;
  /** @deprecated use `TimeOffRequestInput$outboundSchema` instead. */
  export const outboundSchema = TimeOffRequestInput$outboundSchema;
  /** @deprecated use `TimeOffRequestInput$Outbound` instead. */
  export type Outbound = TimeOffRequestInput$Outbound;
}

export function timeOffRequestInputToJSON(
  timeOffRequestInput: TimeOffRequestInput,
): string {
  return JSON.stringify(
    TimeOffRequestInput$outboundSchema.parse(timeOffRequestInput),
  );
}

export function timeOffRequestInputFromJSON(
  jsonString: string,
): SafeParseResult<TimeOffRequestInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TimeOffRequestInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TimeOffRequestInput' from JSON`,
  );
}
