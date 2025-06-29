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

func pathGetVaultLogs(dir *logging.HTTPFileDirectory, rt *tracking.RequestTracker) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		test := req.Header.Get("x-speakeasy-test-name")
		instanceID := req.Header.Get("x-speakeasy-test-instance-id")

		count := rt.GetRequestCount(test, instanceID)

		switch fmt.Sprintf("%s[%d]", test, count) {
		case "vault.logsAll[0]":
			dir.HandlerFunc("vault.logsAll", testVaultLogsAllVaultLogsAll0)(w, req)
		default:
			http.Error(w, fmt.Sprintf("Unknown test: %s[%d]", test, count), http.StatusBadRequest)
		}
	}
}

func testVaultLogsAllVaultLogsAll0(w http.ResponseWriter, req *http.Request) {
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
	var respBody *components.GetLogsResponse = &components.GetLogsResponse{
		StatusCode: 200,
		Status:     "OK",
		Data: []components.Log{
			components.Log{
				APIStyle:     "REST",
				BaseURL:      "unify.apideck.com",
				ChildRequest: false,
				ConsumerID:   "test-consumer",
				Duration:     2220.379304,
				ErrorMessage: types.String("Refresh token is invalid"),
				Execution:    2248,
				HasChildren:  false,
				HTTPMethod:   "GET",
				ID:           "0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f",
				Latency:      27.620695999999953,
				Operation: components.Operation{
					ID:   "connectionsAll",
					Name: "Get All Connections",
				},
				ParentID: types.String("0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f"),
				Path:     "/vault/connections",
				Sandbox:  false,
				Service: components.LogService{
					ID:   "apideck-vault",
					Name: "Apideck Vault",
				},
				SourceIP:   types.String("94.227.131.238"),
				StatusCode: 200,
				Success:    true,
				Timestamp:  "2021-07-12T14:26:17.420Z",
				UnifiedAPI: components.UnifiedAPIEnumVault,
			},
			components.Log{
				APIStyle:     "REST",
				BaseURL:      "unify.apideck.com",
				ChildRequest: false,
				ConsumerID:   "test-consumer",
				Duration:     2220.379304,
				ErrorMessage: types.String("Refresh token is invalid"),
				Execution:    2248,
				HasChildren:  false,
				HTTPMethod:   "GET",
				ID:           "0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f",
				Latency:      27.620695999999953,
				Operation: components.Operation{
					ID:   "connectionsAll",
					Name: "Get All Connections",
				},
				ParentID: types.String("0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f"),
				Path:     "/vault/connections",
				Sandbox:  false,
				Service: components.LogService{
					ID:   "apideck-vault",
					Name: "Apideck Vault",
				},
				SourceIP:   types.String("94.227.131.238"),
				StatusCode: 200,
				Success:    true,
				Timestamp:  "2021-07-12T14:26:17.420Z",
				UnifiedAPI: components.UnifiedAPIEnumVault,
			},
			components.Log{
				APIStyle:     "REST",
				BaseURL:      "unify.apideck.com",
				ChildRequest: false,
				ConsumerID:   "test-consumer",
				Duration:     2220.379304,
				ErrorMessage: types.String("Refresh token is invalid"),
				Execution:    2248,
				HasChildren:  false,
				HTTPMethod:   "GET",
				ID:           "0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f",
				Latency:      27.620695999999953,
				Operation: components.Operation{
					ID:   "connectionsAll",
					Name: "Get All Connections",
				},
				ParentID: types.String("0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f"),
				Path:     "/vault/connections",
				Sandbox:  false,
				Service: components.LogService{
					ID:   "apideck-vault",
					Name: "Apideck Vault",
				},
				SourceIP:   types.String("94.227.131.238"),
				StatusCode: 200,
				Success:    true,
				Timestamp:  "2021-07-12T14:26:17.420Z",
				UnifiedAPI: components.UnifiedAPIEnumVault,
			},
		},
		Meta: &components.Meta{
			ItemsOnPage: types.Int64(50),
			Cursors: &components.Cursors{
				Previous: types.String("em9oby1jcm06OnBhZ2U6OjE="),
				Current:  types.String("em9oby1jcm06OnBhZ2U6OjI="),
				Next:     types.String("em9oby1jcm06OnBhZ2U6OjM="),
			},
		},
		Links: &components.Links{
			Previous: types.String("https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D"),
			Current:  types.String("https://unify.apideck.com/crm/companies"),
			Next:     types.String("https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM"),
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
