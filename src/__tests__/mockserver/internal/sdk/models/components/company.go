// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"mockserver/internal/sdk/types"
	"mockserver/internal/sdk/utils"
	"time"
)

type CompanyRowType struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

func (o *CompanyRowType) GetID() *string {
	if o == nil {
		return nil
	}
	return o.ID
}

func (o *CompanyRowType) GetName() *string {
	if o == nil {
		return nil
	}
	return o.Name
}

type Company struct {
	// Unique identifier for the company
	ID *string `json:"id,omitempty"`
	// Name of the company
	Name *string `json:"name"`
	// Number of interactions
	InteractionCount *int64 `json:"interaction_count,omitempty"`
	// Owner ID
	OwnerID *string `json:"owner_id,omitempty"`
	// The Image URL of the company
	Image *string `json:"image,omitempty"`
	// A description of the company
	Description *string `json:"description,omitempty"`
	// The VAT number of the company
	VatNumber *string `json:"vat_number,omitempty"`
	// Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
	Currency *Currency `json:"currency,omitempty"`
	// The status of the company
	Status *string `json:"status,omitempty"`
	// The fax number of the company
	Fax *string `json:"fax,omitempty"`
	// The annual revenue of the company
	AnnualRevenue *string `json:"annual_revenue,omitempty"`
	// Number of employees
	NumberOfEmployees *string `json:"number_of_employees,omitempty"`
	// The industry represents the type of business the company is in.
	Industry *string `json:"industry,omitempty"`
	// The ownership indicates the type of ownership of the company.
	Ownership *string `json:"ownership,omitempty"`
	// A sales tax number is a unique number that identifies a company for tax purposes.
	SalesTaxNumber *string `json:"sales_tax_number,omitempty"`
	// A payee number is a unique number that identifies a payee for tax purposes.
	PayeeNumber *string `json:"payee_number,omitempty"`
	// An ABN is necessary for operating a business, while a TFN (Tax File Number) is required for any person working in Australia.
	AbnOrTfn *string `json:"abn_or_tfn,omitempty"`
	// An ABN Branch (also known as a GST Branch) is used if part of your business needs to account for GST separately from its parent entity.
	AbnBranch *string `json:"abn_branch,omitempty"`
	// The Australian Company Number (ACN) is a nine digit number with the last digit being a check digit calculated using a modified modulus 10 calculation. ASIC has adopted a convention of always printing and displaying the ACN in the format XXX XXX XXX; three blocks of three characters, each block separated by a blank.
	Acn *string `json:"acn,omitempty"`
	// The first name of the person.
	FirstName *string `json:"first_name,omitempty"`
	// The last name of the person.
	LastName *string `json:"last_name,omitempty"`
	// Parent ID
	ParentID     *string         `json:"parent_id,omitempty"`
	BankAccounts []BankAccount   `json:"bank_accounts,omitempty"`
	Websites     []Website       `json:"websites,omitempty"`
	Addresses    []Address       `json:"addresses,omitempty"`
	SocialLinks  []SocialLink    `json:"social_links,omitempty"`
	PhoneNumbers []PhoneNumber   `json:"phone_numbers,omitempty"`
	Emails       []Email         `json:"emails,omitempty"`
	RowType      *CompanyRowType `json:"row_type,omitempty"`
	CustomFields []CustomField   `json:"custom_fields,omitempty"`
	Tags         []string        `json:"tags,omitempty"`
	// Whether the company is read-only or not
	ReadOnly *bool `json:"read_only,omitempty"`
	// Last activity date
	LastActivityAt *time.Time `json:"last_activity_at,omitempty"`
	// Whether the company is deleted or not
	Deleted *bool `json:"deleted,omitempty"`
	// A formal salutation for the person. For example, 'Mr', 'Mrs'
	Salutation *string `json:"salutation,omitempty"`
	// The date of birth of the person.
	Birthday *types.Date `json:"birthday,omitempty"`
	// When custom mappings are configured on the resource, the result is included here.
	CustomMappings map[string]any `json:"custom_mappings,omitempty"`
	// Updated by user ID
	UpdatedBy *string `json:"updated_by,omitempty"`
	// Created by user ID
	CreatedBy *string `json:"created_by,omitempty"`
	// Last updated date
	UpdatedAt *time.Time `json:"updated_at,omitempty"`
	// Creation date
	CreatedAt *time.Time `json:"created_at,omitempty"`
	// The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.
	PassThrough []PassThroughBody `json:"pass_through,omitempty"`
}

func (c Company) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(c, "", false)
}

func (c *Company) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &c, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *Company) GetID() *string {
	if o == nil {
		return nil
	}
	return o.ID
}

func (o *Company) GetName() *string {
	if o == nil {
		return nil
	}
	return o.Name
}

func (o *Company) GetInteractionCount() *int64 {
	if o == nil {
		return nil
	}
	return o.InteractionCount
}

func (o *Company) GetOwnerID() *string {
	if o == nil {
		return nil
	}
	return o.OwnerID
}

func (o *Company) GetImage() *string {
	if o == nil {
		return nil
	}
	return o.Image
}

func (o *Company) GetDescription() *string {
	if o == nil {
		return nil
	}
	return o.Description
}

func (o *Company) GetVatNumber() *string {
	if o == nil {
		return nil
	}
	return o.VatNumber
}

func (o *Company) GetCurrency() *Currency {
	if o == nil {
		return nil
	}
	return o.Currency
}

func (o *Company) GetStatus() *string {
	if o == nil {
		return nil
	}
	return o.Status
}

func (o *Company) GetFax() *string {
	if o == nil {
		return nil
	}
	return o.Fax
}

func (o *Company) GetAnnualRevenue() *string {
	if o == nil {
		return nil
	}
	return o.AnnualRevenue
}

func (o *Company) GetNumberOfEmployees() *string {
	if o == nil {
		return nil
	}
	return o.NumberOfEmployees
}

func (o *Company) GetIndustry() *string {
	if o == nil {
		return nil
	}
	return o.Industry
}

func (o *Company) GetOwnership() *string {
	if o == nil {
		return nil
	}
	return o.Ownership
}

func (o *Company) GetSalesTaxNumber() *string {
	if o == nil {
		return nil
	}
	return o.SalesTaxNumber
}

func (o *Company) GetPayeeNumber() *string {
	if o == nil {
		return nil
	}
	return o.PayeeNumber
}

func (o *Company) GetAbnOrTfn() *string {
	if o == nil {
		return nil
	}
	return o.AbnOrTfn
}

func (o *Company) GetAbnBranch() *string {
	if o == nil {
		return nil
	}
	return o.AbnBranch
}

func (o *Company) GetAcn() *string {
	if o == nil {
		return nil
	}
	return o.Acn
}

func (o *Company) GetFirstName() *string {
	if o == nil {
		return nil
	}
	return o.FirstName
}

func (o *Company) GetLastName() *string {
	if o == nil {
		return nil
	}
	return o.LastName
}

func (o *Company) GetParentID() *string {
	if o == nil {
		return nil
	}
	return o.ParentID
}

func (o *Company) GetBankAccounts() []BankAccount {
	if o == nil {
		return nil
	}
	return o.BankAccounts
}

func (o *Company) GetWebsites() []Website {
	if o == nil {
		return nil
	}
	return o.Websites
}

func (o *Company) GetAddresses() []Address {
	if o == nil {
		return nil
	}
	return o.Addresses
}

func (o *Company) GetSocialLinks() []SocialLink {
	if o == nil {
		return nil
	}
	return o.SocialLinks
}

func (o *Company) GetPhoneNumbers() []PhoneNumber {
	if o == nil {
		return nil
	}
	return o.PhoneNumbers
}

func (o *Company) GetEmails() []Email {
	if o == nil {
		return nil
	}
	return o.Emails
}

func (o *Company) GetRowType() *CompanyRowType {
	if o == nil {
		return nil
	}
	return o.RowType
}

func (o *Company) GetCustomFields() []CustomField {
	if o == nil {
		return nil
	}
	return o.CustomFields
}

func (o *Company) GetTags() []string {
	if o == nil {
		return nil
	}
	return o.Tags
}

func (o *Company) GetReadOnly() *bool {
	if o == nil {
		return nil
	}
	return o.ReadOnly
}

func (o *Company) GetLastActivityAt() *time.Time {
	if o == nil {
		return nil
	}
	return o.LastActivityAt
}

func (o *Company) GetDeleted() *bool {
	if o == nil {
		return nil
	}
	return o.Deleted
}

func (o *Company) GetSalutation() *string {
	if o == nil {
		return nil
	}
	return o.Salutation
}

func (o *Company) GetBirthday() *types.Date {
	if o == nil {
		return nil
	}
	return o.Birthday
}

func (o *Company) GetCustomMappings() map[string]any {
	if o == nil {
		return nil
	}
	return o.CustomMappings
}

func (o *Company) GetUpdatedBy() *string {
	if o == nil {
		return nil
	}
	return o.UpdatedBy
}

func (o *Company) GetCreatedBy() *string {
	if o == nil {
		return nil
	}
	return o.CreatedBy
}

func (o *Company) GetUpdatedAt() *time.Time {
	if o == nil {
		return nil
	}
	return o.UpdatedAt
}

func (o *Company) GetCreatedAt() *time.Time {
	if o == nil {
		return nil
	}
	return o.CreatedAt
}

func (o *Company) GetPassThrough() []PassThroughBody {
	if o == nil {
		return nil
	}
	return o.PassThrough
}

type CompanyInput struct {
	// Name of the company
	Name *string `json:"name"`
	// Owner ID
	OwnerID *string `json:"owner_id,omitempty"`
	// The Image URL of the company
	Image *string `json:"image,omitempty"`
	// A description of the company
	Description *string `json:"description,omitempty"`
	// The VAT number of the company
	VatNumber *string `json:"vat_number,omitempty"`
	// Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
	Currency *Currency `json:"currency,omitempty"`
	// The status of the company
	Status *string `json:"status,omitempty"`
	// The fax number of the company
	Fax *string `json:"fax,omitempty"`
	// The annual revenue of the company
	AnnualRevenue *string `json:"annual_revenue,omitempty"`
	// Number of employees
	NumberOfEmployees *string `json:"number_of_employees,omitempty"`
	// The industry represents the type of business the company is in.
	Industry *string `json:"industry,omitempty"`
	// The ownership indicates the type of ownership of the company.
	Ownership *string `json:"ownership,omitempty"`
	// A sales tax number is a unique number that identifies a company for tax purposes.
	SalesTaxNumber *string `json:"sales_tax_number,omitempty"`
	// A payee number is a unique number that identifies a payee for tax purposes.
	PayeeNumber *string `json:"payee_number,omitempty"`
	// An ABN is necessary for operating a business, while a TFN (Tax File Number) is required for any person working in Australia.
	AbnOrTfn *string `json:"abn_or_tfn,omitempty"`
	// An ABN Branch (also known as a GST Branch) is used if part of your business needs to account for GST separately from its parent entity.
	AbnBranch *string `json:"abn_branch,omitempty"`
	// The Australian Company Number (ACN) is a nine digit number with the last digit being a check digit calculated using a modified modulus 10 calculation. ASIC has adopted a convention of always printing and displaying the ACN in the format XXX XXX XXX; three blocks of three characters, each block separated by a blank.
	Acn *string `json:"acn,omitempty"`
	// The first name of the person.
	FirstName *string `json:"first_name,omitempty"`
	// The last name of the person.
	LastName     *string         `json:"last_name,omitempty"`
	BankAccounts []BankAccount   `json:"bank_accounts,omitempty"`
	Websites     []Website       `json:"websites,omitempty"`
	Addresses    []Address       `json:"addresses,omitempty"`
	SocialLinks  []SocialLink    `json:"social_links,omitempty"`
	PhoneNumbers []PhoneNumber   `json:"phone_numbers,omitempty"`
	Emails       []Email         `json:"emails,omitempty"`
	RowType      *CompanyRowType `json:"row_type,omitempty"`
	CustomFields []CustomField   `json:"custom_fields,omitempty"`
	Tags         []string        `json:"tags,omitempty"`
	// Whether the company is read-only or not
	ReadOnly *bool `json:"read_only,omitempty"`
	// A formal salutation for the person. For example, 'Mr', 'Mrs'
	Salutation *string `json:"salutation,omitempty"`
	// The date of birth of the person.
	Birthday *types.Date `json:"birthday,omitempty"`
	// The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.
	PassThrough []PassThroughBody `json:"pass_through,omitempty"`
}

func (c CompanyInput) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(c, "", false)
}

func (c *CompanyInput) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &c, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *CompanyInput) GetName() *string {
	if o == nil {
		return nil
	}
	return o.Name
}

func (o *CompanyInput) GetOwnerID() *string {
	if o == nil {
		return nil
	}
	return o.OwnerID
}

func (o *CompanyInput) GetImage() *string {
	if o == nil {
		return nil
	}
	return o.Image
}

func (o *CompanyInput) GetDescription() *string {
	if o == nil {
		return nil
	}
	return o.Description
}

func (o *CompanyInput) GetVatNumber() *string {
	if o == nil {
		return nil
	}
	return o.VatNumber
}

func (o *CompanyInput) GetCurrency() *Currency {
	if o == nil {
		return nil
	}
	return o.Currency
}

func (o *CompanyInput) GetStatus() *string {
	if o == nil {
		return nil
	}
	return o.Status
}

func (o *CompanyInput) GetFax() *string {
	if o == nil {
		return nil
	}
	return o.Fax
}

func (o *CompanyInput) GetAnnualRevenue() *string {
	if o == nil {
		return nil
	}
	return o.AnnualRevenue
}

func (o *CompanyInput) GetNumberOfEmployees() *string {
	if o == nil {
		return nil
	}
	return o.NumberOfEmployees
}

func (o *CompanyInput) GetIndustry() *string {
	if o == nil {
		return nil
	}
	return o.Industry
}

func (o *CompanyInput) GetOwnership() *string {
	if o == nil {
		return nil
	}
	return o.Ownership
}

func (o *CompanyInput) GetSalesTaxNumber() *string {
	if o == nil {
		return nil
	}
	return o.SalesTaxNumber
}

func (o *CompanyInput) GetPayeeNumber() *string {
	if o == nil {
		return nil
	}
	return o.PayeeNumber
}

func (o *CompanyInput) GetAbnOrTfn() *string {
	if o == nil {
		return nil
	}
	return o.AbnOrTfn
}

func (o *CompanyInput) GetAbnBranch() *string {
	if o == nil {
		return nil
	}
	return o.AbnBranch
}

func (o *CompanyInput) GetAcn() *string {
	if o == nil {
		return nil
	}
	return o.Acn
}

func (o *CompanyInput) GetFirstName() *string {
	if o == nil {
		return nil
	}
	return o.FirstName
}

func (o *CompanyInput) GetLastName() *string {
	if o == nil {
		return nil
	}
	return o.LastName
}

func (o *CompanyInput) GetBankAccounts() []BankAccount {
	if o == nil {
		return nil
	}
	return o.BankAccounts
}

func (o *CompanyInput) GetWebsites() []Website {
	if o == nil {
		return nil
	}
	return o.Websites
}

func (o *CompanyInput) GetAddresses() []Address {
	if o == nil {
		return nil
	}
	return o.Addresses
}

func (o *CompanyInput) GetSocialLinks() []SocialLink {
	if o == nil {
		return nil
	}
	return o.SocialLinks
}

func (o *CompanyInput) GetPhoneNumbers() []PhoneNumber {
	if o == nil {
		return nil
	}
	return o.PhoneNumbers
}

func (o *CompanyInput) GetEmails() []Email {
	if o == nil {
		return nil
	}
	return o.Emails
}

func (o *CompanyInput) GetRowType() *CompanyRowType {
	if o == nil {
		return nil
	}
	return o.RowType
}

func (o *CompanyInput) GetCustomFields() []CustomField {
	if o == nil {
		return nil
	}
	return o.CustomFields
}

func (o *CompanyInput) GetTags() []string {
	if o == nil {
		return nil
	}
	return o.Tags
}

func (o *CompanyInput) GetReadOnly() *bool {
	if o == nil {
		return nil
	}
	return o.ReadOnly
}

func (o *CompanyInput) GetSalutation() *string {
	if o == nil {
		return nil
	}
	return o.Salutation
}

func (o *CompanyInput) GetBirthday() *types.Date {
	if o == nil {
		return nil
	}
	return o.Birthday
}

func (o *CompanyInput) GetPassThrough() []PassThroughBody {
	if o == nil {
		return nil
	}
	return o.PassThrough
}
