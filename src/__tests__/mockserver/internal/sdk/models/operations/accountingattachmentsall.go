// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
)

type AccountingAttachmentsAllGlobals struct {
	// ID of the consumer which you want to get or push data from
	ConsumerID *string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	// The ID of your Unify application
	AppID *string `header:"style=simple,explode=false,name=x-apideck-app-id"`
}

func (o *AccountingAttachmentsAllGlobals) GetConsumerID() *string {
	if o == nil {
		return nil
	}
	return o.ConsumerID
}

func (o *AccountingAttachmentsAllGlobals) GetAppID() *string {
	if o == nil {
		return nil
	}
	return o.AppID
}

type AccountingAttachmentsAllRequest struct {
	// The reference type of the document.
	ReferenceType components.AttachmentReferenceType `pathParam:"style=simple,explode=false,name=reference_type"`
	// The reference id of the object to retrieve.
	ReferenceID string `pathParam:"style=simple,explode=false,name=reference_id"`
	// Include raw response. Mostly used for debugging purposes
	Raw *bool `default:"false" queryParam:"style=form,explode=true,name=raw"`
	// ID of the consumer which you want to get or push data from
	ConsumerID *string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	// The ID of your Unify application
	AppID *string `header:"style=simple,explode=false,name=x-apideck-app-id"`
	// Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
	ServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
	// Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	// Number of results to return. Minimum 1, Maximum 200, Default 20
	Limit *int64 `default:"20" queryParam:"style=form,explode=true,name=limit"`
	// The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

func (a AccountingAttachmentsAllRequest) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(a, "", false)
}

func (a *AccountingAttachmentsAllRequest) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &a, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *AccountingAttachmentsAllRequest) GetReferenceType() components.AttachmentReferenceType {
	if o == nil {
		return components.AttachmentReferenceType("")
	}
	return o.ReferenceType
}

func (o *AccountingAttachmentsAllRequest) GetReferenceID() string {
	if o == nil {
		return ""
	}
	return o.ReferenceID
}

func (o *AccountingAttachmentsAllRequest) GetRaw() *bool {
	if o == nil {
		return nil
	}
	return o.Raw
}

func (o *AccountingAttachmentsAllRequest) GetConsumerID() *string {
	if o == nil {
		return nil
	}
	return o.ConsumerID
}

func (o *AccountingAttachmentsAllRequest) GetAppID() *string {
	if o == nil {
		return nil
	}
	return o.AppID
}

func (o *AccountingAttachmentsAllRequest) GetServiceID() *string {
	if o == nil {
		return nil
	}
	return o.ServiceID
}

func (o *AccountingAttachmentsAllRequest) GetCursor() *string {
	if o == nil {
		return nil
	}
	return o.Cursor
}

func (o *AccountingAttachmentsAllRequest) GetLimit() *int64 {
	if o == nil {
		return nil
	}
	return o.Limit
}

func (o *AccountingAttachmentsAllRequest) GetFields() *string {
	if o == nil {
		return nil
	}
	return o.Fields
}

type AccountingAttachmentsAllResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Attachments
	GetAttachmentsResponse *components.GetAttachmentsResponse
	// Unexpected error
	UnexpectedErrorResponse *components.UnexpectedErrorResponse

	Next func() (*AccountingAttachmentsAllResponse, error)
}

func (o *AccountingAttachmentsAllResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *AccountingAttachmentsAllResponse) GetGetAttachmentsResponse() *components.GetAttachmentsResponse {
	if o == nil {
		return nil
	}
	return o.GetAttachmentsResponse
}

func (o *AccountingAttachmentsAllResponse) GetUnexpectedErrorResponse() *components.UnexpectedErrorResponse {
	if o == nil {
		return nil
	}
	return o.UnexpectedErrorResponse
}
