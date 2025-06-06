// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type ConnectorApisOneGlobals struct {
	// The ID of your Unify application
	AppID *string `header:"style=simple,explode=false,name=x-apideck-app-id"`
}

func (o *ConnectorApisOneGlobals) GetAppID() *string {
	if o == nil {
		return nil
	}
	return o.AppID
}

type ConnectorApisOneRequest struct {
	// The ID of your Unify application
	AppID *string `header:"style=simple,explode=false,name=x-apideck-app-id"`
	// ID of the record you are acting upon.
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

func (o *ConnectorApisOneRequest) GetAppID() *string {
	if o == nil {
		return nil
	}
	return o.AppID
}

func (o *ConnectorApisOneRequest) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

type ConnectorApisOneResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Apis
	GetAPIResponse *components.GetAPIResponse
	// Unexpected error
	UnexpectedErrorResponse *components.UnexpectedErrorResponse
}

func (o *ConnectorApisOneResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *ConnectorApisOneResponse) GetGetAPIResponse() *components.GetAPIResponse {
	if o == nil {
		return nil
	}
	return o.GetAPIResponse
}

func (o *ConnectorApisOneResponse) GetUnexpectedErrorResponse() *components.UnexpectedErrorResponse {
	if o == nil {
		return nil
	}
	return o.UnexpectedErrorResponse
}
