// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type VaultConnectionsUpdateGlobals struct {
	// ID of the consumer which you want to get or push data from
	ConsumerID *string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	// The ID of your Unify application
	AppID *string `header:"style=simple,explode=false,name=x-apideck-app-id"`
}

func (o *VaultConnectionsUpdateGlobals) GetConsumerID() *string {
	if o == nil {
		return nil
	}
	return o.ConsumerID
}

func (o *VaultConnectionsUpdateGlobals) GetAppID() *string {
	if o == nil {
		return nil
	}
	return o.AppID
}

type VaultConnectionsUpdateRequest struct {
	// ID of the consumer which you want to get or push data from
	ConsumerID *string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	// The ID of your Unify application
	AppID *string `header:"style=simple,explode=false,name=x-apideck-app-id"`
	// Service ID of the resource to return
	ServiceID string `pathParam:"style=simple,explode=false,name=service_id"`
	// Unified API
	UnifiedAPI string `pathParam:"style=simple,explode=false,name=unified_api"`
	// Fields that need to be updated on the resource
	Connection components.ConnectionInput `request:"mediaType=application/json"`
}

func (o *VaultConnectionsUpdateRequest) GetConsumerID() *string {
	if o == nil {
		return nil
	}
	return o.ConsumerID
}

func (o *VaultConnectionsUpdateRequest) GetAppID() *string {
	if o == nil {
		return nil
	}
	return o.AppID
}

func (o *VaultConnectionsUpdateRequest) GetServiceID() string {
	if o == nil {
		return ""
	}
	return o.ServiceID
}

func (o *VaultConnectionsUpdateRequest) GetUnifiedAPI() string {
	if o == nil {
		return ""
	}
	return o.UnifiedAPI
}

func (o *VaultConnectionsUpdateRequest) GetConnection() components.ConnectionInput {
	if o == nil {
		return components.ConnectionInput{}
	}
	return o.Connection
}

type VaultConnectionsUpdateResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Connection updated
	UpdateConnectionResponse *components.UpdateConnectionResponse
	// Unexpected error
	UnexpectedErrorResponse *components.UnexpectedErrorResponse
}

func (o *VaultConnectionsUpdateResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *VaultConnectionsUpdateResponse) GetUpdateConnectionResponse() *components.UpdateConnectionResponse {
	if o == nil {
		return nil
	}
	return o.UpdateConnectionResponse
}

func (o *VaultConnectionsUpdateResponse) GetUnexpectedErrorResponse() *components.UnexpectedErrorResponse {
	if o == nil {
		return nil
	}
	return o.UnexpectedErrorResponse
}
