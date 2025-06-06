// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type WebhookWebhooksUpdateGlobals struct {
	// The ID of your Unify application
	AppID *string `header:"style=simple,explode=false,name=x-apideck-app-id"`
}

func (o *WebhookWebhooksUpdateGlobals) GetAppID() *string {
	if o == nil {
		return nil
	}
	return o.AppID
}

type WebhookWebhooksUpdateRequest struct {
	// JWT Webhook token that represents the unifiedApi and applicationId associated to the event source.
	ID string `pathParam:"style=simple,explode=false,name=id"`
	// The ID of your Unify application
	AppID                *string                         `header:"style=simple,explode=false,name=x-apideck-app-id"`
	UpdateWebhookRequest components.UpdateWebhookRequest `request:"mediaType=application/json"`
}

func (o *WebhookWebhooksUpdateRequest) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *WebhookWebhooksUpdateRequest) GetAppID() *string {
	if o == nil {
		return nil
	}
	return o.AppID
}

func (o *WebhookWebhooksUpdateRequest) GetUpdateWebhookRequest() components.UpdateWebhookRequest {
	if o == nil {
		return components.UpdateWebhookRequest{}
	}
	return o.UpdateWebhookRequest
}

type WebhookWebhooksUpdateResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Webhooks
	UpdateWebhookResponse *components.UpdateWebhookResponse
	// Unexpected error
	UnexpectedErrorResponse *components.UnexpectedErrorResponse
}

func (o *WebhookWebhooksUpdateResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *WebhookWebhooksUpdateResponse) GetUpdateWebhookResponse() *components.UpdateWebhookResponse {
	if o == nil {
		return nil
	}
	return o.UpdateWebhookResponse
}

func (o *WebhookWebhooksUpdateResponse) GetUnexpectedErrorResponse() *components.UnexpectedErrorResponse {
	if o == nil {
		return nil
	}
	return o.UnexpectedErrorResponse
}
