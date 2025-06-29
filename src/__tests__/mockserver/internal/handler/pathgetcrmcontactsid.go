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

func pathGetCrmContactsID(dir *logging.HTTPFileDirectory, rt *tracking.RequestTracker) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		test := req.Header.Get("x-speakeasy-test-name")
		instanceID := req.Header.Get("x-speakeasy-test-instance-id")

		count := rt.GetRequestCount(test, instanceID)

		switch fmt.Sprintf("%s[%d]", test, count) {
		case "crm.contactsOne[0]":
			dir.HandlerFunc("crm.contactsOne", testCrmContactsOneCrmContactsOne0)(w, req)
		default:
			http.Error(w, fmt.Sprintf("Unknown test: %s[%d]", test, count), http.StatusBadRequest)
		}
	}
}

func testCrmContactsOneCrmContactsOne0(w http.ResponseWriter, req *http.Request) {
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
	var respBody *components.GetContactResponse = &components.GetContactResponse{
		StatusCode: 200,
		Status:     "OK",
		Service:    "zoho-crm",
		Resource:   "companies",
		Operation:  "one",
		Data: components.Contact{
			ID:             types.String("12345"),
			Name:           types.String("Elon Musk"),
			OwnerID:        types.String("54321"),
			Type:           components.ContactTypePersonal.ToPointer(),
			CompanyID:      types.String("23456"),
			CompanyName:    types.String("23456"),
			LeadID:         types.String("34567"),
			FirstName:      types.String("Elon"),
			MiddleName:     types.String("D."),
			LastName:       types.String("Musk"),
			Prefix:         types.String("Mr."),
			Suffix:         types.String("PhD"),
			Title:          types.String("CEO"),
			Department:     types.String("Engineering"),
			Language:       types.String("EN"),
			Gender:         components.ContactGenderFemale.ToPointer(),
			Birthday:       types.String("2000-08-12"),
			PhotoURL:       types.String("https://unavatar.io/elon-musk"),
			LeadSource:     types.String("Cold Call"),
			Fax:            types.String("+12129876543"),
			Description:    types.String("Internal champion"),
			CurrentBalance: types.Float64(10.5),
			Status:         types.String("open"),
			Active:         types.Bool(true),
			Websites: []components.Website{
				components.Website{
					ID:   types.String("12345"),
					URL:  "http://example.com",
					Type: components.WebsiteTypePrimary.ToPointer(),
				},
				components.Website{
					ID:   types.String("12345"),
					URL:  "http://example.com",
					Type: components.WebsiteTypePrimary.ToPointer(),
				},
				components.Website{
					ID:   types.String("12345"),
					URL:  "http://example.com",
					Type: components.WebsiteTypePrimary.ToPointer(),
				},
			},
			Addresses: []components.Address{
				components.Address{
					ID:           types.String("123"),
					Type:         components.AddressTypePrimary.ToPointer(),
					String:       types.String("25 Spring Street, Blackburn, VIC 3130"),
					Name:         types.String("HQ US"),
					Line1:        types.String("Main street"),
					Line2:        types.String("apt #"),
					Line3:        types.String("Suite #"),
					Line4:        types.String("delivery instructions"),
					StreetNumber: types.String("25"),
					City:         types.String("San Francisco"),
					State:        types.String("CA"),
					PostalCode:   types.String("94104"),
					Country:      types.String("US"),
					Latitude:     types.String("40.759211"),
					Longitude:    types.String("-73.984638"),
					County:       types.String("Santa Clara"),
					ContactName:  types.String("Elon Musk"),
					Salutation:   types.String("Mr"),
					PhoneNumber:  types.String("111-111-1111"),
					Fax:          types.String("122-111-1111"),
					Email:        types.String("elon@musk.com"),
					Website:      types.String("https://elonmusk.com"),
					Notes:        types.String("Address notes or delivery instructions."),
					RowVersion:   types.String("1-12345"),
				},
				components.Address{
					ID:           types.String("123"),
					Type:         components.AddressTypePrimary.ToPointer(),
					String:       types.String("25 Spring Street, Blackburn, VIC 3130"),
					Name:         types.String("HQ US"),
					Line1:        types.String("Main street"),
					Line2:        types.String("apt #"),
					Line3:        types.String("Suite #"),
					Line4:        types.String("delivery instructions"),
					StreetNumber: types.String("25"),
					City:         types.String("San Francisco"),
					State:        types.String("CA"),
					PostalCode:   types.String("94104"),
					Country:      types.String("US"),
					Latitude:     types.String("40.759211"),
					Longitude:    types.String("-73.984638"),
					County:       types.String("Santa Clara"),
					ContactName:  types.String("Elon Musk"),
					Salutation:   types.String("Mr"),
					PhoneNumber:  types.String("111-111-1111"),
					Fax:          types.String("122-111-1111"),
					Email:        types.String("elon@musk.com"),
					Website:      types.String("https://elonmusk.com"),
					Notes:        types.String("Address notes or delivery instructions."),
					RowVersion:   types.String("1-12345"),
				},
			},
			SocialLinks: []components.SocialLink{
				components.SocialLink{
					ID:   types.String("12345"),
					URL:  "https://www.twitter.com/apideck",
					Type: types.String("twitter"),
				},
				components.SocialLink{
					ID:   types.String("12345"),
					URL:  "https://www.twitter.com/apideck",
					Type: types.String("twitter"),
				},
			},
			PhoneNumbers: []components.PhoneNumber{
				components.PhoneNumber{
					ID:          types.String("12345"),
					CountryCode: types.String("1"),
					AreaCode:    types.String("323"),
					Number:      "111-111-1111",
					Extension:   types.String("105"),
					Type:        components.PhoneNumberTypePrimary.ToPointer(),
				},
				components.PhoneNumber{
					ID:          types.String("12345"),
					CountryCode: types.String("1"),
					AreaCode:    types.String("323"),
					Number:      "111-111-1111",
					Extension:   types.String("105"),
					Type:        components.PhoneNumberTypePrimary.ToPointer(),
				},
			},
			Emails: []components.Email{
				components.Email{
					ID:    types.String("123"),
					Email: types.String("elon@musk.com"),
					Type:  components.EmailTypePrimary.ToPointer(),
				},
				components.Email{
					ID:    types.String("123"),
					Email: types.String("elon@musk.com"),
					Type:  components.EmailTypePrimary.ToPointer(),
				},
				components.Email{
					ID:    types.String("123"),
					Email: types.String("elon@musk.com"),
					Type:  components.EmailTypePrimary.ToPointer(),
				},
			},
			EmailDomain: types.String("gmail.com"),
			CustomFields: []components.CustomField{
				components.CustomField{
					ID:          types.String("2389328923893298"),
					Name:        types.String("employee_level"),
					Description: types.String("Employee Level"),
					Value: types.Pointer(components.CreateCustomFieldValueUnionBoolean(
						true,
					)),
				},
				components.CustomField{
					ID:          types.String("2389328923893298"),
					Name:        types.String("employee_level"),
					Description: types.String("Employee Level"),
					Value: types.Pointer(components.CreateCustomFieldValueUnionNumber(
						10,
					)),
				},
			},
			Tags: []string{
				"New",
			},
			FirstCallAt:    types.MustNewTimeFromString("2020-09-30T07:43:32.000Z"),
			FirstEmailAt:   types.MustNewTimeFromString("2020-09-30T07:43:32.000Z"),
			LastActivityAt: types.MustNewTimeFromString("2020-09-30T07:43:32.000Z"),
			UpdatedAt:      types.MustNewTimeFromString("2017-08-12T20:43:21.291Z"),
			CreatedAt:      types.MustNewTimeFromString("2017-08-12T20:43:21.291Z"),
			OpportunityIds: []string{
				"12345",
			},
			PassThrough: []components.PassThroughBody{
				components.PassThroughBody{
					ServiceID: "<id>",
					ExtendPaths: []components.ExtendPath{
						components.ExtendPath{
							Path: "$.nested.property",
							Value: map[string]any{
								"TaxClassificationRef": map[string]any{
									"value": "EUC-99990201-V1-00020000",
								},
							},
						},
						components.ExtendPath{
							Path: "$.nested.property",
							Value: map[string]any{
								"TaxClassificationRef": map[string]any{
									"value": "EUC-99990201-V1-00020000",
								},
							},
						},
						components.ExtendPath{
							Path: "$.nested.property",
							Value: map[string]any{
								"TaxClassificationRef": map[string]any{
									"value": "EUC-99990201-V1-00020000",
								},
							},
						},
					},
				},
			},
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
