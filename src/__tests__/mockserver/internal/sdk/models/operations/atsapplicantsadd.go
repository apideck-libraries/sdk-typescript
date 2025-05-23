// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
)

type AtsApplicantsAddGlobals struct {
	// ID of the consumer which you want to get or push data from
	ConsumerID *string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	// The ID of your Unify application
	AppID *string `header:"style=simple,explode=false,name=x-apideck-app-id"`
}

func (o *AtsApplicantsAddGlobals) GetConsumerID() *string {
	if o == nil {
		return nil
	}
	return o.ConsumerID
}

func (o *AtsApplicantsAddGlobals) GetAppID() *string {
	if o == nil {
		return nil
	}
	return o.AppID
}

type AtsApplicantsAddRequest struct {
	// Include raw response. Mostly used for debugging purposes
	Raw *bool `default:"false" queryParam:"style=form,explode=true,name=raw"`
	// ID of the consumer which you want to get or push data from
	ConsumerID *string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	// The ID of your Unify application
	AppID *string `header:"style=simple,explode=false,name=x-apideck-app-id"`
	// Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
	ServiceID *string                   `header:"style=simple,explode=false,name=x-apideck-service-id"`
	Applicant components.ApplicantInput `request:"mediaType=application/json"`
}

func (a AtsApplicantsAddRequest) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(a, "", false)
}

func (a *AtsApplicantsAddRequest) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &a, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *AtsApplicantsAddRequest) GetRaw() *bool {
	if o == nil {
		return nil
	}
	return o.Raw
}

func (o *AtsApplicantsAddRequest) GetConsumerID() *string {
	if o == nil {
		return nil
	}
	return o.ConsumerID
}

func (o *AtsApplicantsAddRequest) GetAppID() *string {
	if o == nil {
		return nil
	}
	return o.AppID
}

func (o *AtsApplicantsAddRequest) GetServiceID() *string {
	if o == nil {
		return nil
	}
	return o.ServiceID
}

func (o *AtsApplicantsAddRequest) GetApplicant() components.ApplicantInput {
	if o == nil {
		return components.ApplicantInput{}
	}
	return o.Applicant
}

type AtsApplicantsAddResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Applicants
	CreateApplicantResponse *components.CreateApplicantResponse
	// Unexpected error
	UnexpectedErrorResponse *components.UnexpectedErrorResponse
}

func (o *AtsApplicantsAddResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *AtsApplicantsAddResponse) GetCreateApplicantResponse() *components.CreateApplicantResponse {
	if o == nil {
		return nil
	}
	return o.CreateApplicantResponse
}

func (o *AtsApplicantsAddResponse) GetUnexpectedErrorResponse() *components.UnexpectedErrorResponse {
	if o == nil {
		return nil
	}
	return o.UnexpectedErrorResponse
}
