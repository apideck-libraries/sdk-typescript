// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
)

type AccountingTrackingCategoriesAddGlobals struct {
	// ID of the consumer which you want to get or push data from
	ConsumerID *string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	// The ID of your Unify application
	AppID *string `header:"style=simple,explode=false,name=x-apideck-app-id"`
}

func (o *AccountingTrackingCategoriesAddGlobals) GetConsumerID() *string {
	if o == nil {
		return nil
	}
	return o.ConsumerID
}

func (o *AccountingTrackingCategoriesAddGlobals) GetAppID() *string {
	if o == nil {
		return nil
	}
	return o.AppID
}

type AccountingTrackingCategoriesAddRequest struct {
	// Include raw response. Mostly used for debugging purposes
	Raw *bool `default:"false" queryParam:"style=form,explode=true,name=raw"`
	// ID of the consumer which you want to get or push data from
	ConsumerID *string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	// The ID of your Unify application
	AppID *string `header:"style=simple,explode=false,name=x-apideck-app-id"`
	// Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
	ServiceID        *string                          `header:"style=simple,explode=false,name=x-apideck-service-id"`
	TrackingCategory components.TrackingCategoryInput `request:"mediaType=application/json"`
}

func (a AccountingTrackingCategoriesAddRequest) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(a, "", false)
}

func (a *AccountingTrackingCategoriesAddRequest) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &a, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *AccountingTrackingCategoriesAddRequest) GetRaw() *bool {
	if o == nil {
		return nil
	}
	return o.Raw
}

func (o *AccountingTrackingCategoriesAddRequest) GetConsumerID() *string {
	if o == nil {
		return nil
	}
	return o.ConsumerID
}

func (o *AccountingTrackingCategoriesAddRequest) GetAppID() *string {
	if o == nil {
		return nil
	}
	return o.AppID
}

func (o *AccountingTrackingCategoriesAddRequest) GetServiceID() *string {
	if o == nil {
		return nil
	}
	return o.ServiceID
}

func (o *AccountingTrackingCategoriesAddRequest) GetTrackingCategory() components.TrackingCategoryInput {
	if o == nil {
		return components.TrackingCategoryInput{}
	}
	return o.TrackingCategory
}

type AccountingTrackingCategoriesAddResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Tracking category created
	CreateTrackingCategoryResponse *components.CreateTrackingCategoryResponse
	// Unexpected error
	UnexpectedErrorResponse *components.UnexpectedErrorResponse
}

func (o *AccountingTrackingCategoriesAddResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *AccountingTrackingCategoriesAddResponse) GetCreateTrackingCategoryResponse() *components.CreateTrackingCategoryResponse {
	if o == nil {
		return nil
	}
	return o.CreateTrackingCategoryResponse
}

func (o *AccountingTrackingCategoriesAddResponse) GetUnexpectedErrorResponse() *components.UnexpectedErrorResponse {
	if o == nil {
		return nil
	}
	return o.UnexpectedErrorResponse
}
