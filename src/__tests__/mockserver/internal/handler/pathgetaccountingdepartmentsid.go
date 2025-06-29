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

func pathGetAccountingDepartmentsID(dir *logging.HTTPFileDirectory, rt *tracking.RequestTracker) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		test := req.Header.Get("x-speakeasy-test-name")
		instanceID := req.Header.Get("x-speakeasy-test-instance-id")

		count := rt.GetRequestCount(test, instanceID)

		switch fmt.Sprintf("%s[%d]", test, count) {
		case "accounting.departmentsOne[0]":
			dir.HandlerFunc("accounting.departmentsOne", testAccountingDepartmentsOneAccountingDepartmentsOne0)(w, req)
		default:
			http.Error(w, fmt.Sprintf("Unknown test: %s[%d]", test, count), http.StatusBadRequest)
		}
	}
}

func testAccountingDepartmentsOneAccountingDepartmentsOne0(w http.ResponseWriter, req *http.Request) {
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
	var respBody *components.GetAccountingDepartmentResponse = &components.GetAccountingDepartmentResponse{
		StatusCode: 200,
		Status:     "OK",
		Service:    "xero",
		Resource:   "subsidiaries",
		Operation:  "one",
		Data: components.AccountingDepartment{
			ID:       types.String("12345"),
			ParentID: types.String("12345"),
			Name:     types.String("Sales"),
			Status:   components.DepartmentStatusActive.ToPointer(),
			Subsidiaries: []components.SubsidiaryReference{
				components.SubsidiaryReference{
					ID:   types.String("12345"),
					Name: types.String("SpaceX"),
				},
				components.SubsidiaryReference{
					ID:   types.String("12345"),
					Name: types.String("SpaceX"),
				},
				components.SubsidiaryReference{
					ID:   types.String("12345"),
					Name: types.String("SpaceX"),
				},
			},
			RowVersion: types.String("1-12345"),
			UpdatedBy:  types.String("12345"),
			CreatedBy:  types.String("12345"),
			UpdatedAt:  types.MustNewTimeFromString("2020-09-30T07:43:32.000Z"),
			CreatedAt:  types.MustNewTimeFromString("2020-09-30T07:43:32.000Z"),
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
					},
				},
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
