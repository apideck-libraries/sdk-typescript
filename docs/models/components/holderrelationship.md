# HolderRelationship

The holder's relationship to the account.

## Example Usage

```typescript
import { HolderRelationship } from "@apideck/unify/models/components";

let value: HolderRelationship = "primary";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"authorized_signer" | "authorized_user" | "business" | "for_benefit_of" | "for_benefit_of_primary" | "for_benefit_of_primary_joint_restricted" | "for_benefit_of_secondary" | "for_benefit_of_secondary_joint_restricted" | "for_benefit_of_sole_owner_restricted" | "power_of_attorney" | "primary" | "primary_borrower" | "primary_joint" | "primary_joint_tenants" | "secondary" | "secondary_borrower" | "secondary_joint" | "secondary_joint_tenants" | "sole_owner" | "trustee" | "uniform_transfer_to_minor" | Unrecognized<string>
```