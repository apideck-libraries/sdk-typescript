// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
)

type IssueTrackingCollectionsOneGlobals struct {
	// ID of the consumer which you want to get or push data from
	ConsumerID *string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	// The ID of your Unify application
	AppID *string `header:"style=simple,explode=false,name=x-apideck-app-id"`
}

func (o *IssueTrackingCollectionsOneGlobals) GetConsumerID() *string {
	if o == nil {
		return nil
	}
	return o.ConsumerID
}

func (o *IssueTrackingCollectionsOneGlobals) GetAppID() *string {
	if o == nil {
		return nil
	}
	return o.AppID
}

type IssueTrackingCollectionsOneRequest struct {
	// The collection ID
	CollectionID string `pathParam:"style=simple,explode=false,name=collection_id"`
	// ID of the consumer which you want to get or push data from
	ConsumerID *string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	// The ID of your Unify application
	AppID *string `header:"style=simple,explode=false,name=x-apideck-app-id"`
	// Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
	ServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
	// Include raw response. Mostly used for debugging purposes
	Raw *bool `default:"false" queryParam:"style=form,explode=true,name=raw"`
	// The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

func (i IssueTrackingCollectionsOneRequest) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(i, "", false)
}

func (i *IssueTrackingCollectionsOneRequest) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &i, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *IssueTrackingCollectionsOneRequest) GetCollectionID() string {
	if o == nil {
		return ""
	}
	return o.CollectionID
}

func (o *IssueTrackingCollectionsOneRequest) GetConsumerID() *string {
	if o == nil {
		return nil
	}
	return o.ConsumerID
}

func (o *IssueTrackingCollectionsOneRequest) GetAppID() *string {
	if o == nil {
		return nil
	}
	return o.AppID
}

func (o *IssueTrackingCollectionsOneRequest) GetServiceID() *string {
	if o == nil {
		return nil
	}
	return o.ServiceID
}

func (o *IssueTrackingCollectionsOneRequest) GetRaw() *bool {
	if o == nil {
		return nil
	}
	return o.Raw
}

func (o *IssueTrackingCollectionsOneRequest) GetFields() *string {
	if o == nil {
		return nil
	}
	return o.Fields
}

type IssueTrackingCollectionsOneResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Get a Collection
	GetCollectionResponse *components.GetCollectionResponse
	// Unexpected error
	UnexpectedErrorResponse *components.UnexpectedErrorResponse
}

func (o *IssueTrackingCollectionsOneResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *IssueTrackingCollectionsOneResponse) GetGetCollectionResponse() *components.GetCollectionResponse {
	if o == nil {
		return nil
	}
	return o.GetCollectionResponse
}

func (o *IssueTrackingCollectionsOneResponse) GetUnexpectedErrorResponse() *components.UnexpectedErrorResponse {
	if o == nil {
		return nil
	}
	return o.UnexpectedErrorResponse
}
