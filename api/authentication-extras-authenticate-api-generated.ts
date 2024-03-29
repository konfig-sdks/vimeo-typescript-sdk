/* tslint:disable */
/* eslint-disable */
/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Auth } from '../models';
// @ts-ignore
import { ClientAuthRequest } from '../models';
// @ts-ignore
import { ModelError } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * AuthenticationExtrasAuthenticateApi - axios parameter creator
 * @export
 */
export const AuthenticationExtrasAuthenticateApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method uses the OAuth protocol to authorize a client. For details on OAuth client authorization, see our [Working with Authentication](/api/authentication) guide or the [OAuth spec](https://tools.ietf.org/html/draft-ietf-oauth-v2-31#section-4.4).
         * @summary Authorize a client with OAuth
         * @param {ClientAuthRequest} clientAuthRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        auth: async (clientAuthRequest: ClientAuthRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientAuthRequest' is not null or undefined
            assertParamExists('auth', 'clientAuthRequest', clientAuthRequest)
            const localVarPath = `/oauth/authorize/client`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["create", "delete", "edit", "email", "interact", "private", "promo_codes", "public", "purchase", "purchased", "scim", "stats", "upload", "video_files"], configuration)
            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["create", "delete", "edit", "email", "interact", "private", "promo_codes", "public", "purchase", "purchased", "scim", "stats", "upload", "video_files"], configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/vnd.vimeo.auth+json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: clientAuthRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/oauth/authorize/client',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(clientAuthRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthenticationExtrasAuthenticateApi - functional programming interface
 * @export
 */
export const AuthenticationExtrasAuthenticateApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthenticationExtrasAuthenticateApiAxiosParamCreator(configuration)
    return {
        /**
         * This method uses the OAuth protocol to authorize a client. For details on OAuth client authorization, see our [Working with Authentication](/api/authentication) guide or the [OAuth spec](https://tools.ietf.org/html/draft-ietf-oauth-v2-31#section-4.4).
         * @summary Authorize a client with OAuth
         * @param {AuthenticationExtrasAuthenticateApiAuthRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async auth(requestParameters: AuthenticationExtrasAuthenticateApiAuthRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Auth>> {
            const clientAuthRequest: ClientAuthRequest = {
                grant_type: requestParameters.grant_type,
                scope: requestParameters.scope
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.auth(clientAuthRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthenticationExtrasAuthenticateApi - factory interface
 * @export
 */
export const AuthenticationExtrasAuthenticateApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthenticationExtrasAuthenticateApiFp(configuration)
    return {
        /**
         * This method uses the OAuth protocol to authorize a client. For details on OAuth client authorization, see our [Working with Authentication](/api/authentication) guide or the [OAuth spec](https://tools.ietf.org/html/draft-ietf-oauth-v2-31#section-4.4).
         * @summary Authorize a client with OAuth
         * @param {AuthenticationExtrasAuthenticateApiAuthRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        auth(requestParameters: AuthenticationExtrasAuthenticateApiAuthRequest, options?: AxiosRequestConfig): AxiosPromise<Auth> {
            return localVarFp.auth(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for auth operation in AuthenticationExtrasAuthenticateApi.
 * @export
 * @interface AuthenticationExtrasAuthenticateApiAuthRequest
 */
export type AuthenticationExtrasAuthenticateApiAuthRequest = {
    
} & ClientAuthRequest

/**
 * AuthenticationExtrasAuthenticateApiGenerated - object-oriented interface
 * @export
 * @class AuthenticationExtrasAuthenticateApiGenerated
 * @extends {BaseAPI}
 */
export class AuthenticationExtrasAuthenticateApiGenerated extends BaseAPI {
    /**
     * This method uses the OAuth protocol to authorize a client. For details on OAuth client authorization, see our [Working with Authentication](/api/authentication) guide or the [OAuth spec](https://tools.ietf.org/html/draft-ietf-oauth-v2-31#section-4.4).
     * @summary Authorize a client with OAuth
     * @param {AuthenticationExtrasAuthenticateApiAuthRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationExtrasAuthenticateApiGenerated
     */
    public auth(requestParameters: AuthenticationExtrasAuthenticateApiAuthRequest, options?: AxiosRequestConfig) {
        return AuthenticationExtrasAuthenticateApiFp(this.configuration).auth(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
