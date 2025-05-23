// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
)

type FileStorageFoldersUpdateGlobals struct {
	// ID of the consumer which you want to get or push data from
	ConsumerID *string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	// The ID of your Unify application
	AppID *string `header:"style=simple,explode=false,name=x-apideck-app-id"`
}

func (o *FileStorageFoldersUpdateGlobals) GetConsumerID() *string {
	if o == nil {
		return nil
	}
	return o.ConsumerID
}

func (o *FileStorageFoldersUpdateGlobals) GetAppID() *string {
	if o == nil {
		return nil
	}
	return o.AppID
}

type FileStorageFoldersUpdateRequest struct {
	// ID of the record you are acting upon.
	ID string `pathParam:"style=simple,explode=false,name=id"`
	// ID of the consumer which you want to get or push data from
	ConsumerID *string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	// The ID of your Unify application
	AppID *string `header:"style=simple,explode=false,name=x-apideck-app-id"`
	// Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
	ServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
	// Include raw response. Mostly used for debugging purposes
	Raw                 *bool                          `default:"false" queryParam:"style=form,explode=true,name=raw"`
	UpdateFolderRequest components.UpdateFolderRequest `request:"mediaType=application/json"`
}

func (f FileStorageFoldersUpdateRequest) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(f, "", false)
}

func (f *FileStorageFoldersUpdateRequest) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &f, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *FileStorageFoldersUpdateRequest) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *FileStorageFoldersUpdateRequest) GetConsumerID() *string {
	if o == nil {
		return nil
	}
	return o.ConsumerID
}

func (o *FileStorageFoldersUpdateRequest) GetAppID() *string {
	if o == nil {
		return nil
	}
	return o.AppID
}

func (o *FileStorageFoldersUpdateRequest) GetServiceID() *string {
	if o == nil {
		return nil
	}
	return o.ServiceID
}

func (o *FileStorageFoldersUpdateRequest) GetRaw() *bool {
	if o == nil {
		return nil
	}
	return o.Raw
}

func (o *FileStorageFoldersUpdateRequest) GetUpdateFolderRequest() components.UpdateFolderRequest {
	if o == nil {
		return components.UpdateFolderRequest{}
	}
	return o.UpdateFolderRequest
}

type FileStorageFoldersUpdateResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Folders
	UpdateFolderResponse *components.UpdateFolderResponse
	// Unexpected error
	UnexpectedErrorResponse *components.UnexpectedErrorResponse
}

func (o *FileStorageFoldersUpdateResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *FileStorageFoldersUpdateResponse) GetUpdateFolderResponse() *components.UpdateFolderResponse {
	if o == nil {
		return nil
	}
	return o.UpdateFolderResponse
}

func (o *FileStorageFoldersUpdateResponse) GetUnexpectedErrorResponse() *components.UnexpectedErrorResponse {
	if o == nil {
		return nil
	}
	return o.UnexpectedErrorResponse
}
