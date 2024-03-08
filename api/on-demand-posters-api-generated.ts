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
import { LegacyError } from '../models';
// @ts-ignore
import { OnDemandPostersUpdatePosterRequest } from '../models';
// @ts-ignore
import { Picture } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * OnDemandPostersApi - axios parameter creator
 * @export
 */
export const OnDemandPostersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method adds a poster image to the specified On Demand page. The authenticated user must be the owner of the page.
         * @summary Add a poster to an On Demand page
         * @param {number} ondemandId The ID of the On Demand page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addPosterToPage: async (ondemandId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ondemandId' is not null or undefined
            assertParamExists('addPosterToPage', 'ondemandId', ondemandId)
            const localVarPath = `/ondemand/pages/{ondemand_id}/pictures`
                .replace(`{${"ondemand_id"}}`, encodeURIComponent(String(ondemandId !== undefined ? ondemandId : `-ondemand_id-`)));
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["upload"], configuration)
            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["upload"], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/ondemand/pages/{ondemand_id}/pictures',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method returns every poster on the specified On Demand page.
         * @summary Get all the posters on an On Demand page
         * @param {number} ondemandId The ID of the On Demand page.
         * @param {number} [page] The page number of the results to show.
         * @param {number} [perPage] The number of items to show on each page of results, up to a maximum of 100.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOnDemandPagePosters: async (ondemandId: number, page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ondemandId' is not null or undefined
            assertParamExists('getOnDemandPagePosters', 'ondemandId', ondemandId)
            const localVarPath = `/ondemand/pages/{ondemand_id}/pictures`
                .replace(`{${"ondemand_id"}}`, encodeURIComponent(String(ondemandId !== undefined ? ondemandId : `-ondemand_id-`)));
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
            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/ondemand/pages/{ondemand_id}/pictures',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method returns a single poster on the specified On Demand page.
         * @summary Get a specific poster on an On Demand page
         * @param {number} ondemandId The ID of the On Demand page.
         * @param {number} posterId The ID of the poster.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecificPoster: async (ondemandId: number, posterId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ondemandId' is not null or undefined
            assertParamExists('getSpecificPoster', 'ondemandId', ondemandId)
            // verify required parameter 'posterId' is not null or undefined
            assertParamExists('getSpecificPoster', 'posterId', posterId)
            const localVarPath = `/ondemand/pages/{ondemand_id}/pictures/{poster_id}`
                .replace(`{${"ondemand_id"}}`, encodeURIComponent(String(ondemandId !== undefined ? ondemandId : `-ondemand_id-`)))
                .replace(`{${"poster_id"}}`, encodeURIComponent(String(posterId !== undefined ? posterId : `-poster_id-`)));
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
                pathTemplate: '/ondemand/pages/{ondemand_id}/pictures/{poster_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method edits a poster image on the specified On Demand page. The authenticated user must be the owner of the page.
         * @summary Edit a poster on an On Demand page
         * @param {number} ondemandId The ID of the On Demand page.
         * @param {number} posterId The ID of the poster.
         * @param {OnDemandPostersUpdatePosterRequest} [onDemandPostersUpdatePosterRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePoster: async (ondemandId: number, posterId: number, onDemandPostersUpdatePosterRequest?: OnDemandPostersUpdatePosterRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ondemandId' is not null or undefined
            assertParamExists('updatePoster', 'ondemandId', ondemandId)
            // verify required parameter 'posterId' is not null or undefined
            assertParamExists('updatePoster', 'posterId', posterId)
            const localVarPath = `/ondemand/pages/{ondemand_id}/pictures/{poster_id}`
                .replace(`{${"ondemand_id"}}`, encodeURIComponent(String(ondemandId !== undefined ? ondemandId : `-ondemand_id-`)))
                .replace(`{${"poster_id"}}`, encodeURIComponent(String(posterId !== undefined ? posterId : `-poster_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["edit"], configuration)
            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["edit"], configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/vnd.vimeo.picture+json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: onDemandPostersUpdatePosterRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/ondemand/pages/{ondemand_id}/pictures/{poster_id}',
                httpMethod: 'PATCH'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(onDemandPostersUpdatePosterRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OnDemandPostersApi - functional programming interface
 * @export
 */
export const OnDemandPostersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OnDemandPostersApiAxiosParamCreator(configuration)
    return {
        /**
         * This method adds a poster image to the specified On Demand page. The authenticated user must be the owner of the page.
         * @summary Add a poster to an On Demand page
         * @param {OnDemandPostersApiAddPosterToPageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addPosterToPage(requestParameters: OnDemandPostersApiAddPosterToPageRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Picture>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addPosterToPage(requestParameters.ondemandId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method returns every poster on the specified On Demand page.
         * @summary Get all the posters on an On Demand page
         * @param {OnDemandPostersApiGetOnDemandPagePostersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOnDemandPagePosters(requestParameters: OnDemandPostersApiGetOnDemandPagePostersRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Picture>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOnDemandPagePosters(requestParameters.ondemandId, requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method returns a single poster on the specified On Demand page.
         * @summary Get a specific poster on an On Demand page
         * @param {OnDemandPostersApiGetSpecificPosterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSpecificPoster(requestParameters: OnDemandPostersApiGetSpecificPosterRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Picture>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSpecificPoster(requestParameters.ondemandId, requestParameters.posterId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method edits a poster image on the specified On Demand page. The authenticated user must be the owner of the page.
         * @summary Edit a poster on an On Demand page
         * @param {OnDemandPostersApiUpdatePosterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePoster(requestParameters: OnDemandPostersApiUpdatePosterRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Picture>> {
            const onDemandPostersUpdatePosterRequest: OnDemandPostersUpdatePosterRequest = {
                active: requestParameters.active
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePoster(requestParameters.ondemandId, requestParameters.posterId, onDemandPostersUpdatePosterRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OnDemandPostersApi - factory interface
 * @export
 */
export const OnDemandPostersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OnDemandPostersApiFp(configuration)
    return {
        /**
         * This method adds a poster image to the specified On Demand page. The authenticated user must be the owner of the page.
         * @summary Add a poster to an On Demand page
         * @param {OnDemandPostersApiAddPosterToPageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addPosterToPage(requestParameters: OnDemandPostersApiAddPosterToPageRequest, options?: AxiosRequestConfig): AxiosPromise<Picture> {
            return localVarFp.addPosterToPage(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method returns every poster on the specified On Demand page.
         * @summary Get all the posters on an On Demand page
         * @param {OnDemandPostersApiGetOnDemandPagePostersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOnDemandPagePosters(requestParameters: OnDemandPostersApiGetOnDemandPagePostersRequest, options?: AxiosRequestConfig): AxiosPromise<Array<Picture>> {
            return localVarFp.getOnDemandPagePosters(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method returns a single poster on the specified On Demand page.
         * @summary Get a specific poster on an On Demand page
         * @param {OnDemandPostersApiGetSpecificPosterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecificPoster(requestParameters: OnDemandPostersApiGetSpecificPosterRequest, options?: AxiosRequestConfig): AxiosPromise<Picture> {
            return localVarFp.getSpecificPoster(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method edits a poster image on the specified On Demand page. The authenticated user must be the owner of the page.
         * @summary Edit a poster on an On Demand page
         * @param {OnDemandPostersApiUpdatePosterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePoster(requestParameters: OnDemandPostersApiUpdatePosterRequest, options?: AxiosRequestConfig): AxiosPromise<Picture> {
            return localVarFp.updatePoster(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addPosterToPage operation in OnDemandPostersApi.
 * @export
 * @interface OnDemandPostersApiAddPosterToPageRequest
 */
export type OnDemandPostersApiAddPosterToPageRequest = {
    
    /**
    * The ID of the On Demand page.
    * @type {number}
    * @memberof OnDemandPostersApiAddPosterToPage
    */
    readonly ondemandId: number
    
}

/**
 * Request parameters for getOnDemandPagePosters operation in OnDemandPostersApi.
 * @export
 * @interface OnDemandPostersApiGetOnDemandPagePostersRequest
 */
export type OnDemandPostersApiGetOnDemandPagePostersRequest = {
    
    /**
    * The ID of the On Demand page.
    * @type {number}
    * @memberof OnDemandPostersApiGetOnDemandPagePosters
    */
    readonly ondemandId: number
    
    /**
    * The page number of the results to show.
    * @type {number}
    * @memberof OnDemandPostersApiGetOnDemandPagePosters
    */
    readonly page?: number
    
    /**
    * The number of items to show on each page of results, up to a maximum of 100.
    * @type {number}
    * @memberof OnDemandPostersApiGetOnDemandPagePosters
    */
    readonly perPage?: number
    
}

/**
 * Request parameters for getSpecificPoster operation in OnDemandPostersApi.
 * @export
 * @interface OnDemandPostersApiGetSpecificPosterRequest
 */
export type OnDemandPostersApiGetSpecificPosterRequest = {
    
    /**
    * The ID of the On Demand page.
    * @type {number}
    * @memberof OnDemandPostersApiGetSpecificPoster
    */
    readonly ondemandId: number
    
    /**
    * The ID of the poster.
    * @type {number}
    * @memberof OnDemandPostersApiGetSpecificPoster
    */
    readonly posterId: number
    
}

/**
 * Request parameters for updatePoster operation in OnDemandPostersApi.
 * @export
 * @interface OnDemandPostersApiUpdatePosterRequest
 */
export type OnDemandPostersApiUpdatePosterRequest = {
    
    /**
    * The ID of the On Demand page.
    * @type {number}
    * @memberof OnDemandPostersApiUpdatePoster
    */
    readonly ondemandId: number
    
    /**
    * The ID of the poster.
    * @type {number}
    * @memberof OnDemandPostersApiUpdatePoster
    */
    readonly posterId: number
    
} & OnDemandPostersUpdatePosterRequest

/**
 * OnDemandPostersApiGenerated - object-oriented interface
 * @export
 * @class OnDemandPostersApiGenerated
 * @extends {BaseAPI}
 */
export class OnDemandPostersApiGenerated extends BaseAPI {
    /**
     * This method adds a poster image to the specified On Demand page. The authenticated user must be the owner of the page.
     * @summary Add a poster to an On Demand page
     * @param {OnDemandPostersApiAddPosterToPageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OnDemandPostersApiGenerated
     */
    public addPosterToPage(requestParameters: OnDemandPostersApiAddPosterToPageRequest, options?: AxiosRequestConfig) {
        return OnDemandPostersApiFp(this.configuration).addPosterToPage(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method returns every poster on the specified On Demand page.
     * @summary Get all the posters on an On Demand page
     * @param {OnDemandPostersApiGetOnDemandPagePostersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OnDemandPostersApiGenerated
     */
    public getOnDemandPagePosters(requestParameters: OnDemandPostersApiGetOnDemandPagePostersRequest, options?: AxiosRequestConfig) {
        return OnDemandPostersApiFp(this.configuration).getOnDemandPagePosters(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method returns a single poster on the specified On Demand page.
     * @summary Get a specific poster on an On Demand page
     * @param {OnDemandPostersApiGetSpecificPosterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OnDemandPostersApiGenerated
     */
    public getSpecificPoster(requestParameters: OnDemandPostersApiGetSpecificPosterRequest, options?: AxiosRequestConfig) {
        return OnDemandPostersApiFp(this.configuration).getSpecificPoster(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method edits a poster image on the specified On Demand page. The authenticated user must be the owner of the page.
     * @summary Edit a poster on an On Demand page
     * @param {OnDemandPostersApiUpdatePosterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OnDemandPostersApiGenerated
     */
    public updatePoster(requestParameters: OnDemandPostersApiUpdatePosterRequest, options?: AxiosRequestConfig) {
        return OnDemandPostersApiFp(this.configuration).updatePoster(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}