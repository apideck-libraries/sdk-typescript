// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
)

type AccountingDepartmentsUpdateGlobals struct {
	// ID of the consumer which you want to get or push data from
	ConsumerID *string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	// The ID of your Unify application
	AppID *string `header:"style=simple,explode=false,name=x-apideck-app-id"`
}

func (o *AccountingDepartmentsUpdateGlobals) GetConsumerID() *string {
	if o == nil {
		return nil
	}
	return o.ConsumerID
}

func (o *AccountingDepartmentsUpdateGlobals) GetAppID() *string {
	if o == nil {
		return nil
	}
	return o.AppID
}

type AccountingDepartmentsUpdateRequest struct {
	// ID of the record you are acting upon.
	ID string `pathParam:"style=simple,explode=false,name=id"`
	// ID of the consumer which you want to get or push data from
	ConsumerID *string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	// The ID of your Unify application
	AppID *string `header:"style=simple,explode=false,name=x-apideck-app-id"`
	// Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
	ServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
	// Include raw response. Mostly used for debugging purposes
	Raw                  *bool                                `default:"false" queryParam:"style=form,explode=true,name=raw"`
	AccountingDepartment components.AccountingDepartmentInput `request:"mediaType=application/json"`
}

func (a AccountingDepartmentsUpdateRequest) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(a, "", false)
}

func (a *AccountingDepartmentsUpdateRequest) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &a, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *AccountingDepartmentsUpdateRequest) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *AccountingDepartmentsUpdateRequest) GetConsumerID() *string {
	if o == nil {
		return nil
	}
	return o.ConsumerID
}

func (o *AccountingDepartmentsUpdateRequest) GetAppID() *string {
	if o == nil {
		return nil
	}
	return o.AppID
}

func (o *AccountingDepartmentsUpdateRequest) GetServiceID() *string {
	if o == nil {
		return nil
	}
	return o.ServiceID
}

func (o *AccountingDepartmentsUpdateRequest) GetRaw() *bool {
	if o == nil {
		return nil
	}
	return o.Raw
}

func (o *AccountingDepartmentsUpdateRequest) GetAccountingDepartment() components.AccountingDepartmentInput {
	if o == nil {
		return components.AccountingDepartmentInput{}
	}
	return o.AccountingDepartment
}

type AccountingDepartmentsUpdateResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Department
	UpdateAccountingDepartmentResponse *components.UpdateAccountingDepartmentResponse
	// Unexpected error
	UnexpectedErrorResponse *components.UnexpectedErrorResponse
}

func (o *AccountingDepartmentsUpdateResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *AccountingDepartmentsUpdateResponse) GetUpdateAccountingDepartmentResponse() *components.UpdateAccountingDepartmentResponse {
	if o == nil {
		return nil
	}
	return o.UpdateAccountingDepartmentResponse
}

func (o *AccountingDepartmentsUpdateResponse) GetUnexpectedErrorResponse() *components.UnexpectedErrorResponse {
	if o == nil {
		return nil
	}
	return o.UnexpectedErrorResponse
}
