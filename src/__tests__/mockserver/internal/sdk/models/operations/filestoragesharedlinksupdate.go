// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
)

type FileStorageSharedLinksUpdateGlobals struct {
	// ID of the consumer which you want to get or push data from
	ConsumerID *string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	// The ID of your Unify application
	AppID *string `header:"style=simple,explode=false,name=x-apideck-app-id"`
}

func (o *FileStorageSharedLinksUpdateGlobals) GetConsumerID() *string {
	if o == nil {
		return nil
	}
	return o.ConsumerID
}

func (o *FileStorageSharedLinksUpdateGlobals) GetAppID() *string {
	if o == nil {
		return nil
	}
	return o.AppID
}

type FileStorageSharedLinksUpdateRequest struct {
	// ID of the record you are acting upon.
	ID string `pathParam:"style=simple,explode=false,name=id"`
	// ID of the consumer which you want to get or push data from
	ConsumerID *string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	// The ID of your Unify application
	AppID *string `header:"style=simple,explode=false,name=x-apideck-app-id"`
	// Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
	ServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
	// Include raw response. Mostly used for debugging purposes
	Raw        *bool                      `default:"false" queryParam:"style=form,explode=true,name=raw"`
	SharedLink components.SharedLinkInput `request:"mediaType=application/json"`
}

func (f FileStorageSharedLinksUpdateRequest) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(f, "", false)
}

func (f *FileStorageSharedLinksUpdateRequest) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &f, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *FileStorageSharedLinksUpdateRequest) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *FileStorageSharedLinksUpdateRequest) GetConsumerID() *string {
	if o == nil {
		return nil
	}
	return o.ConsumerID
}

func (o *FileStorageSharedLinksUpdateRequest) GetAppID() *string {
	if o == nil {
		return nil
	}
	return o.AppID
}

func (o *FileStorageSharedLinksUpdateRequest) GetServiceID() *string {
	if o == nil {
		return nil
	}
	return o.ServiceID
}

func (o *FileStorageSharedLinksUpdateRequest) GetRaw() *bool {
	if o == nil {
		return nil
	}
	return o.Raw
}

func (o *FileStorageSharedLinksUpdateRequest) GetSharedLink() components.SharedLinkInput {
	if o == nil {
		return components.SharedLinkInput{}
	}
	return o.SharedLink
}

type FileStorageSharedLinksUpdateResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Shared Links
	UpdateSharedLinkResponse *components.UpdateSharedLinkResponse
	// Unexpected error
	UnexpectedErrorResponse *components.UnexpectedErrorResponse
}

func (o *FileStorageSharedLinksUpdateResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *FileStorageSharedLinksUpdateResponse) GetUpdateSharedLinkResponse() *components.UpdateSharedLinkResponse {
	if o == nil {
		return nil
	}
	return o.UpdateSharedLinkResponse
}

func (o *FileStorageSharedLinksUpdateResponse) GetUnexpectedErrorResponse() *components.UnexpectedErrorResponse {
	if o == nil {
		return nil
	}
	return o.UnexpectedErrorResponse
}
