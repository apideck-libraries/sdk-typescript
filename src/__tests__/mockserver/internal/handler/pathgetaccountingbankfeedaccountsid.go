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

func pathGetAccountingBankFeedAccountsID(dir *logging.HTTPFileDirectory, rt *tracking.RequestTracker) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		test := req.Header.Get("x-speakeasy-test-name")
		instanceID := req.Header.Get("x-speakeasy-test-instance-id")

		count := rt.GetRequestCount(test, instanceID)

		switch fmt.Sprintf("%s[%d]", test, count) {
		case "accounting.bankFeedAccountsOne[0]":
			dir.HandlerFunc("accounting.bankFeedAccountsOne", testAccountingBankFeedAccountsOneAccountingBankFeedAccountsOne0)(w, req)
		default:
			http.Error(w, fmt.Sprintf("Unknown test: %s[%d]", test, count), http.StatusBadRequest)
		}
	}
}

func testAccountingBankFeedAccountsOneAccountingBankFeedAccountsOne0(w http.ResponseWriter, req *http.Request) {
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
	var respBody *components.GetBankFeedAccountResponse = &components.GetBankFeedAccountResponse{
		StatusCode: 200,
		Status:     "OK",
		Service:    "quickbooks",
		Resource:   "bank-feed-accounts",
		Operation:  "one",
		Data: components.BankFeedAccount{
			ID:                  "12345",
			BankAccountType:     components.BankAccountTypeBank.ToPointer(),
			SourceAccountID:     types.String("src_456"),
			TargetAccountID:     types.String("tgt_789"),
			TargetAccountName:   types.String("Main Company Checking"),
			TargetAccountNumber: types.String("NL91ABNA0417164300"),
			Currency:            components.CurrencyUsd.ToPointer(),
			FeedStatus:          components.FeedStatusPending.ToPointer(),
			Country:             types.String("US"),
			CustomFields: []components.CustomField{
				components.CustomField{
					ID:          types.String("2389328923893298"),
					Name:        types.String("employee_level"),
					Description: types.String("Employee Level"),
					Value: types.Pointer(components.CreateCustomFieldValueUnionCustomFieldValue1(
						components.CustomFieldValue1{},
					)),
				},
				components.CustomField{
					ID:          types.String("2389328923893298"),
					Name:        types.String("employee_level"),
					Description: types.String("Employee Level"),
					Value: types.Pointer(components.CreateCustomFieldValueUnionCustomFieldValue1(
						components.CustomFieldValue1{},
					)),
				},
				components.CustomField{
					ID:          types.String("2389328923893298"),
					Name:        types.String("employee_level"),
					Description: types.String("Employee Level"),
					Value: types.Pointer(components.CreateCustomFieldValueUnionCustomFieldValue1(
						components.CustomFieldValue1{},
					)),
				},
			},
			CreatedAt: types.MustNewTimeFromString("2020-09-30T07:43:32.000Z"),
			UpdatedAt: types.MustNewTimeFromString("2020-09-30T07:43:32.000Z"),
			UpdatedBy: types.String("12345"),
			CreatedBy: types.String("12345"),
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
