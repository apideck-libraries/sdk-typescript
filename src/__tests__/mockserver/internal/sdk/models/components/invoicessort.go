// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"encoding/json"
	"fmt"
	"mockserver/internal/sdk/utils"
)

// InvoicesSortBy - The field on which to sort the Invoices
type InvoicesSortBy string

const (
	InvoicesSortByCreatedAt InvoicesSortBy = "created_at"
	InvoicesSortByUpdatedAt InvoicesSortBy = "updated_at"
)

func (e InvoicesSortBy) ToPointer() *InvoicesSortBy {
	return &e
}
func (e *InvoicesSortBy) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "created_at":
		fallthrough
	case "updated_at":
		*e = InvoicesSortBy(v)
		return nil
	default:
		return fmt.Errorf("invalid value for InvoicesSortBy: %v", v)
	}
}

type InvoicesSort struct {
	// The field on which to sort the Invoices
	By *InvoicesSortBy `queryParam:"name=by"`
	// The direction in which to sort the results
	Direction *SortDirection `default:"asc" queryParam:"name=direction"`
}

func (i InvoicesSort) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(i, "", false)
}

func (i *InvoicesSort) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &i, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *InvoicesSort) GetBy() *InvoicesSortBy {
	if o == nil {
		return nil
	}
	return o.By
}

func (o *InvoicesSort) GetDirection() *SortDirection {
	if o == nil {
		return nil
	}
	return o.Direction
}
