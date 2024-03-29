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
import { LiveEventSessionStatus } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * LiveEventSessionsApi - axios parameter creator
 * @export
 */
export const LiveEventSessionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method returns the ingest status of the specified event.
         * @summary Get the ingest status of a one-time live event
         * @param {number} videoId The ID of the event.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getIngestStatus: async (videoId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'videoId' is not null or undefined
            assertParamExists('getIngestStatus', 'videoId', videoId)
            const localVarPath = `/videos/{video_id}/sessions/status`
                .replace(`{${"video_id"}}`, encodeURIComponent(String(videoId !== undefined ? videoId : `-video_id-`)));
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
                pathTemplate: '/videos/{video_id}/sessions/status',
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
 * LiveEventSessionsApi - functional programming interface
 * @export
 */
export const LiveEventSessionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LiveEventSessionsApiAxiosParamCreator(configuration)
    return {
        /**
         * This method returns the ingest status of the specified event.
         * @summary Get the ingest status of a one-time live event
         * @param {LiveEventSessionsApiGetIngestStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getIngestStatus(requestParameters: LiveEventSessionsApiGetIngestStatusRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LiveEventSessionStatus>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getIngestStatus(requestParameters.videoId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LiveEventSessionsApi - factory interface
 * @export
 */
export const LiveEventSessionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LiveEventSessionsApiFp(configuration)
    return {
        /**
         * This method returns the ingest status of the specified event.
         * @summary Get the ingest status of a one-time live event
         * @param {LiveEventSessionsApiGetIngestStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getIngestStatus(requestParameters: LiveEventSessionsApiGetIngestStatusRequest, options?: AxiosRequestConfig): AxiosPromise<LiveEventSessionStatus> {
            return localVarFp.getIngestStatus(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getIngestStatus operation in LiveEventSessionsApi.
 * @export
 * @interface LiveEventSessionsApiGetIngestStatusRequest
 */
export type LiveEventSessionsApiGetIngestStatusRequest = {
    
    /**
    * The ID of the event.
    * @type {number}
    * @memberof LiveEventSessionsApiGetIngestStatus
    */
    readonly videoId: number
    
}

/**
 * LiveEventSessionsApiGenerated - object-oriented interface
 * @export
 * @class LiveEventSessionsApiGenerated
 * @extends {BaseAPI}
 */
export class LiveEventSessionsApiGenerated extends BaseAPI {
    /**
     * This method returns the ingest status of the specified event.
     * @summary Get the ingest status of a one-time live event
     * @param {LiveEventSessionsApiGetIngestStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LiveEventSessionsApiGenerated
     */
    public getIngestStatus(requestParameters: LiveEventSessionsApiGetIngestStatusRequest, options?: AxiosRequestConfig) {
        return LiveEventSessionsApiFp(this.configuration).getIngestStatus(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
