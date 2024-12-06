import {
  AfterErrorContext,
  AfterErrorHook,
  AfterSuccessContext,
  AfterSuccessHook,
  BeforeRequestContext,
  BeforeRequestHook,
  SDKInitHook,
  SDKInitOptions,
} from "./types";

export class HeadersHook
  implements SDKInitHook, BeforeRequestHook, AfterSuccessHook, AfterErrorHook
{
  sdkInit(opts: SDKInitOptions): SDKInitOptions {
    const { baseURL, client } = opts;

    // modify the baseURL or wrap the client used by the SDK here and return the updated values
    return { baseURL: baseURL, client: client };
  }

  beforeRequest(_: BeforeRequestContext, request: Request): Request {
    // modify the request object before it is sent, such as adding headers or query parameters, or throw an error to stop the request from being sent
    const apiKey = request.headers.get("Authorization");
    request.headers.set("Authorization", `Bearer ${apiKey}`);
    return request;
  }

  afterSuccess(_: AfterSuccessContext, response: Response): Response {
    // modify the response object before deserialization or throw an error to stop the response from being deserialized
    return response;
  }

  afterError(
    _: AfterErrorContext,
    response: Response | null,
    error: unknown,
  ): { response: Response | null; error: unknown } {
    // modify the response before it is deserialized as a custom error or the error object before it is returned or throw an error to stop processing of other error hooks and return early
    return { response, error };
  }
}