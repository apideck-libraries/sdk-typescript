// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"encoding/json"
	"fmt"
)

// InvoiceItemType - The type of invoice item, indicating whether it is an inventory item, a service, or another type.
type InvoiceItemType string

const (
	InvoiceItemTypeInventory InvoiceItemType = "inventory"
	InvoiceItemTypeService   InvoiceItemType = "service"
	InvoiceItemTypeOther     InvoiceItemType = "other"
)

func (e InvoiceItemType) ToPointer() *InvoiceItemType {
	return &e
}
func (e *InvoiceItemType) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "inventory":
		fallthrough
	case "service":
		fallthrough
	case "other":
		*e = InvoiceItemType(v)
		return nil
	default:
		return fmt.Errorf("invalid value for InvoiceItemType: %v", v)
	}
}

type InvoiceItemsFilter struct {
	// Name of Invoice Items to search for
	Name *string `queryParam:"name=name"`
	// The type of invoice item, indicating whether it is an inventory item, a service, or another type.
	Type *InvoiceItemType `queryParam:"name=type"`
}

func (o *InvoiceItemsFilter) GetName() *string {
	if o == nil {
		return nil
	}
	return o.Name
}

func (o *InvoiceItemsFilter) GetType() *InvoiceItemType {
	if o == nil {
		return nil
	}
	return o.Type
}
