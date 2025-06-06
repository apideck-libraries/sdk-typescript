// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"mockserver/internal/sdk/utils"
	"time"
)

type LedgerAccountsFilter struct {
	UpdatedSince *time.Time `queryParam:"name=updated_since"`
}

func (l LedgerAccountsFilter) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(l, "", false)
}

func (l *LedgerAccountsFilter) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &l, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *LedgerAccountsFilter) GetUpdatedSince() *time.Time {
	if o == nil {
		return nil
	}
	return o.UpdatedSince
}
