// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

// GetFileResponse - File
type GetFileResponse struct {
	// HTTP Response Status Code
	StatusCode int64 `json:"status_code"`
	// HTTP Response Status
	Status string `json:"status"`
	// Apideck ID of service provider
	Service string `json:"service"`
	// Unified API resource name
	Resource string `json:"resource"`
	// Operation performed
	Operation string      `json:"operation"`
	Data      UnifiedFile `json:"data"`
	// Raw response from the integration when raw=true query param is provided
	Raw map[string]any `json:"_raw,omitempty"`
}

func (o *GetFileResponse) GetStatusCode() int64 {
	if o == nil {
		return 0
	}
	return o.StatusCode
}

func (o *GetFileResponse) GetStatus() string {
	if o == nil {
		return ""
	}
	return o.Status
}

func (o *GetFileResponse) GetService() string {
	if o == nil {
		return ""
	}
	return o.Service
}

func (o *GetFileResponse) GetResource() string {
	if o == nil {
		return ""
	}
	return o.Resource
}

func (o *GetFileResponse) GetOperation() string {
	if o == nil {
		return ""
	}
	return o.Operation
}

func (o *GetFileResponse) GetData() UnifiedFile {
	if o == nil {
		return UnifiedFile{}
	}
	return o.Data
}

func (o *GetFileResponse) GetRaw() map[string]any {
	if o == nil {
		return nil
	}
	return o.Raw
}
