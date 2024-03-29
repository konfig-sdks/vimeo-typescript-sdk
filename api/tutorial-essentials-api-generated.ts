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
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TutorialEssentialsApi - axios parameter creator
 * @export
 */
export const TutorialEssentialsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method tests whether users who are working through the [Getting Started](https://developer.vimeo.com/api/guides/start) guides have set up their configurations correctly.
         * @summary Get started with the Vimeo API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tutorial: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/tutorial`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["create", "delete", "edit", "email", "interact", "private", "promo_codes", "public", "purchase", "purchased", "scim", "stats", "upload", "video_files"], configuration)
            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["create", "delete", "edit", "email", "interact", "private", "promo_codes", "public", "purchase", "purchased", "scim", "stats", "upload", "video_files"], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/tutorial',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TutorialEssentialsApi - functional programming interface
 * @export
 */
export const TutorialEssentialsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TutorialEssentialsApiAxiosParamCreator(configuration)
    return {
        /**
         * This method tests whether users who are working through the [Getting Started](https://developer.vimeo.com/api/guides/start) guides have set up their configurations correctly.
         * @summary Get started with the Vimeo API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tutorial(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tutorial(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TutorialEssentialsApi - factory interface
 * @export
 */
export const TutorialEssentialsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TutorialEssentialsApiFp(configuration)
    return {
        /**
         * This method tests whether users who are working through the [Getting Started](https://developer.vimeo.com/api/guides/start) guides have set up their configurations correctly.
         * @summary Get started with the Vimeo API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tutorial(options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.tutorial(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TutorialEssentialsApiGenerated - object-oriented interface
 * @export
 * @class TutorialEssentialsApiGenerated
 * @extends {BaseAPI}
 */
export class TutorialEssentialsApiGenerated extends BaseAPI {
    /**
     * This method tests whether users who are working through the [Getting Started](https://developer.vimeo.com/api/guides/start) guides have set up their configurations correctly.
     * @summary Get started with the Vimeo API
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TutorialEssentialsApiGenerated
     */
    public tutorial(options?: AxiosRequestConfig) {
        return TutorialEssentialsApiFp(this.configuration).tutorial(options).then((request) => request(this.axios, this.basePath));
    }
}
