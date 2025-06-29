// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package handler

import (
	"fmt"
	"log"
	"mockserver/internal/handler/assert"
	"mockserver/internal/logging"
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/types"
	"mockserver/internal/sdk/utils"
	"mockserver/internal/tracking"
	"net/http"
)

func pathGetVaultConnectionsUnifiedAPIServiceID(dir *logging.HTTPFileDirectory, rt *tracking.RequestTracker) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		test := req.Header.Get("x-speakeasy-test-name")
		instanceID := req.Header.Get("x-speakeasy-test-instance-id")

		count := rt.GetRequestCount(test, instanceID)

		switch fmt.Sprintf("%s[%d]", test, count) {
		case "vault.connectionsOne[0]":
			dir.HandlerFunc("vault.connectionsOne", testVaultConnectionsOneVaultConnectionsOne0)(w, req)
		default:
			http.Error(w, fmt.Sprintf("Unknown test: %s[%d]", test, count), http.StatusBadRequest)
		}
	}
}

func testVaultConnectionsOneVaultConnectionsOne0(w http.ResponseWriter, req *http.Request) {
	if err := assert.SecurityAuthorizationHeader(req, false, "Bearer"); err != nil {
		log.Printf("assertion error: %s\n", err)
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}
	if err := assert.AcceptHeader(req, []string{"application/json"}); err != nil {
		log.Printf("assertion error: %s\n", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	if err := assert.HeaderExists(req, "User-Agent"); err != nil {
		log.Printf("assertion error: %s\n", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	var respBody *components.GetConnectionResponse = &components.GetConnectionResponse{
		StatusCode: 200,
		Status:     "OK",
		Data: components.Connection{
			ID:               types.String("crm+salesforce"),
			ServiceID:        types.String("salesforce"),
			Name:             types.String("Salesforce"),
			TagLine:          types.String("CRM software solutions and enterprise cloud computing from Salesforce, the leader in customer relationship management (CRM) and PaaS. Free 30 day trial."),
			UnifiedAPI:       types.String("crm"),
			State:            components.ConnectionStateAuthorized.ToPointer(),
			IntegrationState: components.IntegrationStateConfigured.ToPointer(),
			AuthType:         components.AuthTypeOauth2.ToPointer(),
			OauthGrantType:   components.OAuthGrantTypeAuthorizationCode.ToPointer(),
			Enabled:          types.Bool(true),
			Website:          types.String("https://www.salesforce.com"),
			Icon:             types.String("https://res.cloudinary.com/apideck/image/upload/v1529456047/catalog/salesforce/icon128x128.png"),
			Logo:             types.String("https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/home/logo-salesforce-m.svg"),
			AuthorizeURL:     types.String("https://unify.apideck.com/vault/authorize/salesforce/<application-id>?state=<state>"),
			RevokeURL:        types.String("https://unify.apideck.com/vault/revoke/salesforce/<application-id>?state=<state>"),
			Settings: map[string]any{
				"instance_url": "https://eu28.salesforce.com",
				"api_key":      "12345xxxxxx",
			},
			Metadata: map[string]any{
				"account": map[string]any{
					"name": "My Company",
					"id":   "c01458a5-7276-41ce-bc19-639906b0450a",
				},
				"plan": "enterprise",
			},
			FormFields: []components.FormField{
				components.FormField{
					ID:                types.String("instance_url"),
					Label:             types.String("Instance url"),
					Placeholder:       types.String(""),
					Type:              components.FormFieldTypeText.ToPointer(),
					Required:          types.Bool(true),
					CustomField:       types.Bool(false),
					AllowCustomValues: types.Bool(false),
					Disabled:          types.Bool(false),
					Sensitive:         types.Bool(false),
				},
				components.FormField{
					ID:                types.String("api_key"),
					Label:             types.String("API Key"),
					Placeholder:       types.String(""),
					Type:              components.FormFieldTypeText.ToPointer(),
					Required:          types.Bool(true),
					CustomField:       types.Bool(false),
					AllowCustomValues: types.Bool(false),
					Disabled:          types.Bool(false),
					Sensitive:         types.Bool(true),
				},
			},
			Configuration: []components.Configuration{
				components.Configuration{
					Resource: types.String("leads"),
					Defaults: []components.Default{
						components.Default{
							Target: components.TargetCustomFields.ToPointer(),
							ID:     types.String("ProductInterest"),
							Options: []components.FormFieldOption{
								components.CreateFormFieldOptionGroup(
									components.FormFieldOptionGroup{
										ID:    types.String("1234"),
										Label: "General Channel",
										Options: []components.SimpleFormFieldOption{
											components.SimpleFormFieldOption{
												Label: "General Channel",
												Value: types.Pointer(components.CreateSimpleFormFieldOptionValue2Number(
													12.5,
												)),
												OptionType: components.SimpleFormFieldOptionOptionTypeSimple,
											},
											components.SimpleFormFieldOption{
												Label: "General Channel",
												Value: types.Pointer(components.CreateSimpleFormFieldOptionValue2Number(
													12.5,
												)),
												OptionType: components.SimpleFormFieldOptionOptionTypeSimple,
											},
											components.SimpleFormFieldOption{
												Label: "General Channel",
												Value: types.Pointer(components.CreateSimpleFormFieldOptionValue2Integer(
													123,
												)),
												OptionType: components.SimpleFormFieldOptionOptionTypeSimple,
											},
										},
										OptionType: components.FormFieldOptionGroupOptionTypeGroup,
									},
								),
								components.CreateFormFieldOptionSimple(
									components.SimpleFormFieldOption{
										Label: "General Channel",
										Value: types.Pointer(components.CreateSimpleFormFieldOptionValue2ArrayOfSimpleFormFieldOptionValue1(
											[]components.SimpleFormFieldOptionValue1{
												components.CreateSimpleFormFieldOptionValue1Str(
													"team",
												),
												components.CreateSimpleFormFieldOptionValue1Str(
													"general",
												),
											},
										)),
										OptionType: components.SimpleFormFieldOptionOptionTypeSimple,
									},
								),
							},
							Value: types.Pointer(components.CreateConnectionValue2Number(
								10.5,
							)),
						},
						components.Default{
							Target: components.TargetCustomFields.ToPointer(),
							ID:     types.String("ProductInterest"),
							Options: []components.FormFieldOption{
								components.CreateFormFieldOptionSimple(
									components.SimpleFormFieldOption{
										Label: "General Channel",
										Value: types.Pointer(components.CreateSimpleFormFieldOptionValue2Integer(
											123,
										)),
										OptionType: components.SimpleFormFieldOptionOptionTypeSimple,
									},
								),
								components.CreateFormFieldOptionSimple(
									components.SimpleFormFieldOption{
										Label: "General Channel",
										Value: types.Pointer(components.CreateSimpleFormFieldOptionValue2Str(
											"general",
										)),
										OptionType: components.SimpleFormFieldOptionOptionTypeSimple,
									},
								),
								components.CreateFormFieldOptionGroup(
									components.FormFieldOptionGroup{
										ID:    types.String("1234"),
										Label: "General Channel",
										Options: []components.SimpleFormFieldOption{
											components.SimpleFormFieldOption{
												Label: "General Channel",
												Value: types.Pointer(components.CreateSimpleFormFieldOptionValue2Integer(
													123,
												)),
												OptionType: components.SimpleFormFieldOptionOptionTypeSimple,
											},
											components.SimpleFormFieldOption{
												Label: "General Channel",
												Value: types.Pointer(components.CreateSimpleFormFieldOptionValue2Boolean(
													true,
												)),
												OptionType: components.SimpleFormFieldOptionOptionTypeSimple,
											},
											components.SimpleFormFieldOption{
												Label: "General Channel",
												Value: types.Pointer(components.CreateSimpleFormFieldOptionValue2Boolean(
													true,
												)),
												OptionType: components.SimpleFormFieldOptionOptionTypeSimple,
											},
										},
										OptionType: components.FormFieldOptionGroupOptionTypeGroup,
									},
								),
							},
							Value: types.Pointer(components.CreateConnectionValue2Number(
								10.5,
							)),
						},
					},
				},
				components.Configuration{
					Resource: types.String("leads"),
					Defaults: []components.Default{
						components.Default{
							Target: components.TargetCustomFields.ToPointer(),
							ID:     types.String("ProductInterest"),
							Options: []components.FormFieldOption{
								components.CreateFormFieldOptionSimple(
									components.SimpleFormFieldOption{
										Label: "General Channel",
										Value: types.Pointer(components.CreateSimpleFormFieldOptionValue2Integer(
											123,
										)),
										OptionType: components.SimpleFormFieldOptionOptionTypeSimple,
									},
								),
							},
							Value: types.Pointer(components.CreateConnectionValue2Boolean(
								true,
							)),
						},
					},
				},
				components.Configuration{
					Resource: types.String("leads"),
					Defaults: []components.Default{
						components.Default{
							Target: components.TargetCustomFields.ToPointer(),
							ID:     types.String("ProductInterest"),
							Options: []components.FormFieldOption{
								components.CreateFormFieldOptionGroup(
									components.FormFieldOptionGroup{
										ID:    types.String("1234"),
										Label: "General Channel",
										Options: []components.SimpleFormFieldOption{
											components.SimpleFormFieldOption{
												Label: "General Channel",
												Value: types.Pointer(components.CreateSimpleFormFieldOptionValue2ArrayOfSimpleFormFieldOptionValue1(
													[]components.SimpleFormFieldOptionValue1{
														components.CreateSimpleFormFieldOptionValue1Str(
															"team",
														),
														components.CreateSimpleFormFieldOptionValue1Str(
															"general",
														),
													},
												)),
												OptionType: components.SimpleFormFieldOptionOptionTypeSimple,
											},
											components.SimpleFormFieldOption{
												Label: "General Channel",
												Value: types.Pointer(components.CreateSimpleFormFieldOptionValue2Integer(
													123,
												)),
												OptionType: components.SimpleFormFieldOptionOptionTypeSimple,
											},
										},
										OptionType: components.FormFieldOptionGroupOptionTypeGroup,
									},
								),
								components.CreateFormFieldOptionSimple(
									components.SimpleFormFieldOption{
										Label: "General Channel",
										Value: types.Pointer(components.CreateSimpleFormFieldOptionValue2ArrayOfSimpleFormFieldOptionValue1(
											[]components.SimpleFormFieldOptionValue1{
												components.CreateSimpleFormFieldOptionValue1Str(
													"team",
												),
												components.CreateSimpleFormFieldOptionValue1Str(
													"general",
												),
											},
										)),
										OptionType: components.SimpleFormFieldOptionOptionTypeSimple,
									},
								),
								components.CreateFormFieldOptionSimple(
									components.SimpleFormFieldOption{
										Label: "General Channel",
										Value: types.Pointer(components.CreateSimpleFormFieldOptionValue2Number(
											12.5,
										)),
										OptionType: components.SimpleFormFieldOptionOptionTypeSimple,
									},
								),
							},
							Value: types.Pointer(components.CreateConnectionValue2Str(
								"GC5000 series",
							)),
						},
					},
				},
			},
			ConfigurableResources: []string{
				"opportunities",
				"companies",
				"contacts",
				"leads",
			},
			ResourceSchemaSupport: []string{
				"leads",
			},
			ResourceSettingsSupport: []string{
				"leads",
			},
			SettingsRequiredForAuthorization: []string{
				"client_id",
				"client_secret",
			},
			Subscriptions: []components.WebhookSubscription{
				components.WebhookSubscription{
					DownstreamID: types.String("5f5f5f5f5f5f5f5f5f5f5f5f"),
					UnifyEventTypes: []string{
						"crm.contact.created",
					},
					DownstreamEventTypes: []string{
						"contacts.CREATED",
					},
					ExecuteURL: types.String("https://unify.apideck.com/webhook/w/{lookupIdToken}/{serviceId}?e={downstreamEventType}"),
					CreatedAt:  types.String("2020-10-01T12:00:00.000Z"),
				},
			},
			HasGuide:  types.Bool(true),
			CreatedAt: types.Float64(1615563533390),
			CustomMappings: []components.CustomMapping{
				components.CustomMapping{
					ID:          types.String("hris+employees+first_aid_training"),
					Label:       types.String("First Aid Training"),
					Description: types.String("First Aid Training completed after 2019-01-01"),
					Value:       types.String("$.root.training.first_aid"),
					Key:         types.String("first_aid_training"),
					Required:    types.Bool(false),
					CustomField: types.Bool(true),
					ConsumerID:  types.String("test_user_id"),
					Example:     types.String("Some value"),
				},
				components.CustomMapping{
					ID:          types.String("hris+employees+first_aid_training"),
					Label:       types.String("First Aid Training"),
					Description: types.String("First Aid Training completed after 2019-01-01"),
					Value:       types.String("$.root.training.first_aid"),
					Key:         types.String("first_aid_training"),
					Required:    types.Bool(false),
					CustomField: types.Bool(true),
					ConsumerID:  types.String("test_user_id"),
					Example:     types.String("Some value"),
				},
			},
			UpdatedAt: types.Float64(1616662325753),
		},
	}
	respBodyBytes, err := utils.MarshalJSON(respBody, "", true)

	if err != nil {
		http.Error(
			w,
			"Unable to encode response body as JSON: "+err.Error(),
			http.StatusInternalServerError,
		)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	_, _ = w.Write(respBodyBytes)
}
