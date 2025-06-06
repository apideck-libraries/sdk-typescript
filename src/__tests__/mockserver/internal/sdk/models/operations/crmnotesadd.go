// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
)

type CrmNotesAddGlobals struct {
	// ID of the consumer which you want to get or push data from
	ConsumerID *string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	// The ID of your Unify application
	AppID *string `header:"style=simple,explode=false,name=x-apideck-app-id"`
}

func (o *CrmNotesAddGlobals) GetConsumerID() *string {
	if o == nil {
		return nil
	}
	return o.ConsumerID
}

func (o *CrmNotesAddGlobals) GetAppID() *string {
	if o == nil {
		return nil
	}
	return o.AppID
}

type CrmNotesAddRequest struct {
	// Include raw response. Mostly used for debugging purposes
	Raw *bool `default:"false" queryParam:"style=form,explode=true,name=raw"`
	// ID of the consumer which you want to get or push data from
	ConsumerID *string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	// The ID of your Unify application
	AppID *string `header:"style=simple,explode=false,name=x-apideck-app-id"`
	// Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
	ServiceID *string              `header:"style=simple,explode=false,name=x-apideck-service-id"`
	Note      components.NoteInput `request:"mediaType=application/json"`
}

func (c CrmNotesAddRequest) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(c, "", false)
}

func (c *CrmNotesAddRequest) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &c, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *CrmNotesAddRequest) GetRaw() *bool {
	if o == nil {
		return nil
	}
	return o.Raw
}

func (o *CrmNotesAddRequest) GetConsumerID() *string {
	if o == nil {
		return nil
	}
	return o.ConsumerID
}

func (o *CrmNotesAddRequest) GetAppID() *string {
	if o == nil {
		return nil
	}
	return o.AppID
}

func (o *CrmNotesAddRequest) GetServiceID() *string {
	if o == nil {
		return nil
	}
	return o.ServiceID
}

func (o *CrmNotesAddRequest) GetNote() components.NoteInput {
	if o == nil {
		return components.NoteInput{}
	}
	return o.Note
}

type CrmNotesAddResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Note created
	CreateNoteResponse *components.CreateNoteResponse
	// Unexpected error
	UnexpectedErrorResponse *components.UnexpectedErrorResponse
}

func (o *CrmNotesAddResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *CrmNotesAddResponse) GetCreateNoteResponse() *components.CreateNoteResponse {
	if o == nil {
		return nil
	}
	return o.CreateNoteResponse
}

func (o *CrmNotesAddResponse) GetUnexpectedErrorResponse() *components.UnexpectedErrorResponse {
	if o == nil {
		return nil
	}
	return o.UnexpectedErrorResponse
}
