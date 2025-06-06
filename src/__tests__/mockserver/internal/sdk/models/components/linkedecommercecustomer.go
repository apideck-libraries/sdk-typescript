// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

// LinkedEcommerceCustomer - The customer this entity is linked to.
type LinkedEcommerceCustomer struct {
	// The ID of the customer this entity is linked to.
	ID *string `json:"id,omitempty"`
	// Full name of the customer
	Name *string `json:"name,omitempty"`
	// First name of the customer
	FirstName *string `json:"first_name,omitempty"`
	// Last name of the customer
	LastName *string `json:"last_name,omitempty"`
	// Company name of the customer
	CompanyName  *string       `json:"company_name,omitempty"`
	PhoneNumbers []PhoneNumber `json:"phone_numbers,omitempty"`
	Emails       []Email       `json:"emails,omitempty"`
}

func (o *LinkedEcommerceCustomer) GetID() *string {
	if o == nil {
		return nil
	}
	return o.ID
}

func (o *LinkedEcommerceCustomer) GetName() *string {
	if o == nil {
		return nil
	}
	return o.Name
}

func (o *LinkedEcommerceCustomer) GetFirstName() *string {
	if o == nil {
		return nil
	}
	return o.FirstName
}

func (o *LinkedEcommerceCustomer) GetLastName() *string {
	if o == nil {
		return nil
	}
	return o.LastName
}

func (o *LinkedEcommerceCustomer) GetCompanyName() *string {
	if o == nil {
		return nil
	}
	return o.CompanyName
}

func (o *LinkedEcommerceCustomer) GetPhoneNumbers() []PhoneNumber {
	if o == nil {
		return nil
	}
	return o.PhoneNumbers
}

func (o *LinkedEcommerceCustomer) GetEmails() []Email {
	if o == nil {
		return nil
	}
	return o.Emails
}
