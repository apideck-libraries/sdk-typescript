// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

// GetUsersResponse - Users
type GetUsersResponse struct {
	// HTTP Response Status Code
	StatusCode int64 `json:"status_code"`
	// HTTP Response Status
	Status string `json:"status"`
	// Apideck ID of service provider
	Service string `json:"service"`
	// Unified API resource name
	Resource string `json:"resource"`
	// Operation performed
	Operation string       `json:"operation"`
	Data      []UserOutput `json:"data"`
	// Raw response from the integration when raw=true query param is provided
	Raw map[string]any `json:"_raw,omitempty"`
	// Response metadata
	Meta *Meta `json:"meta,omitempty"`
	// Links to navigate to previous or next pages through the API
	Links *Links `json:"links,omitempty"`
}

func (o *GetUsersResponse) GetStatusCode() int64 {
	if o == nil {
		return 0
	}
	return o.StatusCode
}

func (o *GetUsersResponse) GetStatus() string {
	if o == nil {
		return ""
	}
	return o.Status
}

func (o *GetUsersResponse) GetService() string {
	if o == nil {
		return ""
	}
	return o.Service
}

func (o *GetUsersResponse) GetResource() string {
	if o == nil {
		return ""
	}
	return o.Resource
}

func (o *GetUsersResponse) GetOperation() string {
	if o == nil {
		return ""
	}
	return o.Operation
}

func (o *GetUsersResponse) GetData() []UserOutput {
	if o == nil {
		return []UserOutput{}
	}
	return o.Data
}

func (o *GetUsersResponse) GetRaw() map[string]any {
	if o == nil {
		return nil
	}
	return o.Raw
}

func (o *GetUsersResponse) GetMeta() *Meta {
	if o == nil {
		return nil
	}
	return o.Meta
}

func (o *GetUsersResponse) GetLinks() *Links {
	if o == nil {
		return nil
	}
	return o.Links
}
