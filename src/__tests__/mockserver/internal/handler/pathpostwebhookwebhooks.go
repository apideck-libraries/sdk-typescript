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

func pathPostWebhookWebhooks(dir *logging.HTTPFileDirectory, rt *tracking.RequestTracker) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		test := req.Header.Get("x-speakeasy-test-name")
		instanceID := req.Header.Get("x-speakeasy-test-instance-id")

		count := rt.GetRequestCount(test, instanceID)

		switch fmt.Sprintf("%s[%d]", test, count) {
		case "webhook.webhooksAdd[0]":
			dir.HandlerFunc("webhook.webhooksAdd", testWebhookWebhooksAddWebhookWebhooksAdd0)(w, req)
		default:
			http.Error(w, fmt.Sprintf("Unknown test: %s[%d]", test, count), http.StatusBadRequest)
		}
	}
}

func testWebhookWebhooksAddWebhookWebhooksAdd0(w http.ResponseWriter, req *http.Request) {
	if err := assert.SecurityAuthorizationHeader(req, false, "Bearer"); err != nil {
		log.Printf("assertion error: %s\n", err)
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}
	if err := assert.ContentType(req, "application/json", true); err != nil {
		log.Printf("assertion error: %s\n", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
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
	var respBody *components.CreateWebhookResponse = &components.CreateWebhookResponse{
		StatusCode: 200,
		Status:     "OK",
		Data: components.Webhook{
			ID:             types.String("1234"),
			Description:    types.String("A description"),
			UnifiedAPI:     components.UnifiedAPIIDCrm,
			Status:         components.StatusEnabled,
			DisabledReason: components.DisabledReasonRetryLimit.ToPointer(),
			DeliveryURL:    "https://example.com/my/webhook/endpoint",
			ExecuteBaseURL: "https://unify.apideck.com/webhook/webhooks/1234/execute",
			Events: []components.WebhookEventType{
				components.WebhookEventTypeVaultConnectionCreated,
				components.WebhookEventTypeVaultConnectionUpdated,
			},
			UpdatedAt: types.MustNewTimeFromString("2020-09-30T07:43:32.000Z"),
			CreatedAt: types.MustNewTimeFromString("2020-09-30T07:43:32.000Z"),
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
	w.WriteHeader(http.StatusCreated)
	_, _ = w.Write(respBodyBytes)
}
