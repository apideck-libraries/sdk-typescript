// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
)

type SmsMessagesDeleteGlobals struct {
	// ID of the consumer which you want to get or push data from
	ConsumerID *string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	// The ID of your Unify application
	AppID *string `header:"style=simple,explode=false,name=x-apideck-app-id"`
}

func (o *SmsMessagesDeleteGlobals) GetConsumerID() *string {
	if o == nil {
		return nil
	}
	return o.ConsumerID
}

func (o *SmsMessagesDeleteGlobals) GetAppID() *string {
	if o == nil {
		return nil
	}
	return o.AppID
}

type SmsMessagesDeleteRequest struct {
	// ID of the record you are acting upon.
	ID string `pathParam:"style=simple,explode=false,name=id"`
	// ID of the consumer which you want to get or push data from
	ConsumerID *string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	// The ID of your Unify application
	AppID *string `header:"style=simple,explode=false,name=x-apideck-app-id"`
	// Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
	ServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
	// Include raw response. Mostly used for debugging purposes
	Raw *bool `default:"false" queryParam:"style=form,explode=true,name=raw"`
}

func (s SmsMessagesDeleteRequest) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(s, "", false)
}

func (s *SmsMessagesDeleteRequest) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &s, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *SmsMessagesDeleteRequest) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *SmsMessagesDeleteRequest) GetConsumerID() *string {
	if o == nil {
		return nil
	}
	return o.ConsumerID
}

func (o *SmsMessagesDeleteRequest) GetAppID() *string {
	if o == nil {
		return nil
	}
	return o.AppID
}

func (o *SmsMessagesDeleteRequest) GetServiceID() *string {
	if o == nil {
		return nil
	}
	return o.ServiceID
}

func (o *SmsMessagesDeleteRequest) GetRaw() *bool {
	if o == nil {
		return nil
	}
	return o.Raw
}

type SmsMessagesDeleteResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Messages
	DeleteMessageResponse *components.DeleteMessageResponse
	// Unexpected error
	UnexpectedErrorResponse *components.UnexpectedErrorResponse
}

func (o *SmsMessagesDeleteResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *SmsMessagesDeleteResponse) GetDeleteMessageResponse() *components.DeleteMessageResponse {
	if o == nil {
		return nil
	}
	return o.DeleteMessageResponse
}

func (o *SmsMessagesDeleteResponse) GetUnexpectedErrorResponse() *components.UnexpectedErrorResponse {
	if o == nil {
		return nil
	}
	return o.UnexpectedErrorResponse
}
