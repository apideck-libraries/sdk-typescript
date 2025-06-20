// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type EcommerceOrderLineItemOption struct {
	// A unique identifier for the option.
	ID *string `json:"id,omitempty"`
	// The name of the option.
	Name *string `json:"name,omitempty"`
	// The value of the option.
	Value *string `json:"value,omitempty"`
}

func (o *EcommerceOrderLineItemOption) GetID() *string {
	if o == nil {
		return nil
	}
	return o.ID
}

func (o *EcommerceOrderLineItemOption) GetName() *string {
	if o == nil {
		return nil
	}
	return o.Name
}

func (o *EcommerceOrderLineItemOption) GetValue() *string {
	if o == nil {
		return nil
	}
	return o.Value
}

// EcommerceOrderLineItem - A single line item of an ecommerce order, representing a product or variant with associated options, quantity, and pricing information.
type EcommerceOrderLineItem struct {
	// A unique identifier for an object.
	ID *string `json:"id,omitempty"`
	// A unique identifier for the product associated with the line item.
	ProductID *string `json:"product_id,omitempty"`
	// A unique identifier for the variant of the product associated with the line item, if applicable.
	VariantID *string `json:"variant_id,omitempty"`
	// The SKU of the product or variant associated with the line item.
	Sku *string `json:"sku,omitempty"`
	// The name of the product or variant associated with the line item.
	Name *string `json:"name"`
	// The description of the product or variant associated with the line item.
	Description *string                        `json:"description,omitempty"`
	Options     []EcommerceOrderLineItemOption `json:"options,omitempty"`
	// The quantity of the product or variant associated with the line item.
	Quantity *string `json:"quantity"`
	// The unit price of the product or variant associated with the line item.
	UnitPrice *string `json:"unit_price,omitempty"`
	// The tax rate applied to the product or variant associated with the line item.
	TaxRate *string `json:"tax_rate,omitempty"`
	// The total tax amount applied to the product or variant associated with the line item.
	TaxAmount *string `json:"tax_amount,omitempty"`
	// Whether the line item has been refunded.
	IsRefunded *bool `json:"is_refunded,omitempty"`
	// The amount of the line item that has been refunded.
	RefundedAmount *string `json:"refunded_amount,omitempty"`
	// The quantity of the line item that has been refunded.
	RefundedQuantity *string `json:"refunded_quantity,omitempty"`
	// The sub total for the product(s) or variant associated with the line item, excluding taxes and discounts.
	SubTotal *string `json:"sub_total,omitempty"`
	// The total amount for the product(s) or variant associated with the line item, including taxes and discounts.
	TotalAmount *string             `json:"total_amount,omitempty"`
	Discounts   []EcommerceDiscount `json:"discounts,omitempty"`
}

func (o *EcommerceOrderLineItem) GetID() *string {
	if o == nil {
		return nil
	}
	return o.ID
}

func (o *EcommerceOrderLineItem) GetProductID() *string {
	if o == nil {
		return nil
	}
	return o.ProductID
}

func (o *EcommerceOrderLineItem) GetVariantID() *string {
	if o == nil {
		return nil
	}
	return o.VariantID
}

func (o *EcommerceOrderLineItem) GetSku() *string {
	if o == nil {
		return nil
	}
	return o.Sku
}

func (o *EcommerceOrderLineItem) GetName() *string {
	if o == nil {
		return nil
	}
	return o.Name
}

func (o *EcommerceOrderLineItem) GetDescription() *string {
	if o == nil {
		return nil
	}
	return o.Description
}

func (o *EcommerceOrderLineItem) GetOptions() []EcommerceOrderLineItemOption {
	if o == nil {
		return nil
	}
	return o.Options
}

func (o *EcommerceOrderLineItem) GetQuantity() *string {
	if o == nil {
		return nil
	}
	return o.Quantity
}

func (o *EcommerceOrderLineItem) GetUnitPrice() *string {
	if o == nil {
		return nil
	}
	return o.UnitPrice
}

func (o *EcommerceOrderLineItem) GetTaxRate() *string {
	if o == nil {
		return nil
	}
	return o.TaxRate
}

func (o *EcommerceOrderLineItem) GetTaxAmount() *string {
	if o == nil {
		return nil
	}
	return o.TaxAmount
}

func (o *EcommerceOrderLineItem) GetIsRefunded() *bool {
	if o == nil {
		return nil
	}
	return o.IsRefunded
}

func (o *EcommerceOrderLineItem) GetRefundedAmount() *string {
	if o == nil {
		return nil
	}
	return o.RefundedAmount
}

func (o *EcommerceOrderLineItem) GetRefundedQuantity() *string {
	if o == nil {
		return nil
	}
	return o.RefundedQuantity
}

func (o *EcommerceOrderLineItem) GetSubTotal() *string {
	if o == nil {
		return nil
	}
	return o.SubTotal
}

func (o *EcommerceOrderLineItem) GetTotalAmount() *string {
	if o == nil {
		return nil
	}
	return o.TotalAmount
}

func (o *EcommerceOrderLineItem) GetDiscounts() []EcommerceDiscount {
	if o == nil {
		return nil
	}
	return o.Discounts
}
