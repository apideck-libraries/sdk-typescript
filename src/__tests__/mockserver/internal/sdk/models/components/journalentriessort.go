// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"encoding/json"
	"fmt"
	"mockserver/internal/sdk/utils"
)

// JournalEntriesSortBy - The field on which to sort the Journal Entries.
type JournalEntriesSortBy string

const (
	JournalEntriesSortByCreatedAt JournalEntriesSortBy = "created_at"
	JournalEntriesSortByUpdatedAt JournalEntriesSortBy = "updated_at"
)

func (e JournalEntriesSortBy) ToPointer() *JournalEntriesSortBy {
	return &e
}
func (e *JournalEntriesSortBy) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "created_at":
		fallthrough
	case "updated_at":
		*e = JournalEntriesSortBy(v)
		return nil
	default:
		return fmt.Errorf("invalid value for JournalEntriesSortBy: %v", v)
	}
}

type JournalEntriesSort struct {
	// The field on which to sort the Journal Entries.
	By *JournalEntriesSortBy `queryParam:"name=by"`
	// The direction in which to sort the results
	Direction *SortDirection `default:"asc" queryParam:"name=direction"`
}

func (j JournalEntriesSort) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(j, "", false)
}

func (j *JournalEntriesSort) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &j, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *JournalEntriesSort) GetBy() *JournalEntriesSortBy {
	if o == nil {
		return nil
	}
	return o.By
}

func (o *JournalEntriesSort) GetDirection() *SortDirection {
	if o == nil {
		return nil
	}
	return o.Direction
}
