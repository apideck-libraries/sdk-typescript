// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

// SchemaSupport - When a connector has schema_support, a call can be made to retrieve a json schema that describes a downstream resource.
type SchemaSupport struct {
	// Can a resource schema be retrieved for this connector?
	Supported *bool `json:"supported,omitempty"`
}

func (o *SchemaSupport) GetSupported() *bool {
	if o == nil {
		return nil
	}
	return o.Supported
}
