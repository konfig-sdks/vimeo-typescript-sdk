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
import { Domain } from '../models';
// @ts-ignore
import { LegacyError } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * VideosEmbedPrivacyApi - axios parameter creator
 * @export
 */
export const VideosEmbedPrivacyApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method adds the specified domain to a video\'s whitelist.
         * @summary Add a domain to a video\'s whitelist
         * @param {string} domain The domain name.
         * @param {number} videoId The ID of the video.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addDomainToWhitelist: async (domain: string, videoId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'domain' is not null or undefined
            assertParamExists('addDomainToWhitelist', 'domain', domain)
            // verify required parameter 'videoId' is not null or undefined
            assertParamExists('addDomainToWhitelist', 'videoId', videoId)
            const localVarPath = `/videos/{video_id}/privacy/domains/{domain}`
                .replace(`{${"domain"}}`, encodeURIComponent(String(domain !== undefined ? domain : `-domain-`)))
                .replace(`{${"video_id"}}`, encodeURIComponent(String(videoId !== undefined ? videoId : `-video_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["edit"], configuration)
            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["edit"], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/videos/{video_id}/privacy/domains/{domain}',
                httpMethod: 'PUT'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method returns every domain on the specified video\'s whitelist.
         * @summary Get all the domains on a video\'s whitelist
         * @param {number} videoId The ID of the video.
         * @param {number} [page] The page number of the results to show.
         * @param {number} [perPage] The number of items to show on each page of results, up to a maximum of 100.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listWhitelistDomains: async (videoId: number, page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'videoId' is not null or undefined
            assertParamExists('listWhitelistDomains', 'videoId', videoId)
            const localVarPath = `/videos/{video_id}/privacy/domains`
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
                pathTemplate: '/videos/{video_id}/privacy/domains',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method removes the specified domain from a video\'s whitelist.
         * @summary Remove a domain from a video\'s whitelist
         * @param {string} domain The domain name.
         * @param {number} videoId The ID of the video.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeDomainFromWhitelist: async (domain: string, videoId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'domain' is not null or undefined
            assertParamExists('removeDomainFromWhitelist', 'domain', domain)
            // verify required parameter 'videoId' is not null or undefined
            assertParamExists('removeDomainFromWhitelist', 'videoId', videoId)
            const localVarPath = `/videos/{video_id}/privacy/domains/{domain}`
                .replace(`{${"domain"}}`, encodeURIComponent(String(domain !== undefined ? domain : `-domain-`)))
                .replace(`{${"video_id"}}`, encodeURIComponent(String(videoId !== undefined ? videoId : `-video_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["edit"], configuration)
            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["edit"], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/videos/{video_id}/privacy/domains/{domain}',
                httpMethod: 'DELETE'
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
 * VideosEmbedPrivacyApi - functional programming interface
 * @export
 */
export const VideosEmbedPrivacyApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = VideosEmbedPrivacyApiAxiosParamCreator(configuration)
    return {
        /**
         * This method adds the specified domain to a video\'s whitelist.
         * @summary Add a domain to a video\'s whitelist
         * @param {VideosEmbedPrivacyApiAddDomainToWhitelistRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addDomainToWhitelist(requestParameters: VideosEmbedPrivacyApiAddDomainToWhitelistRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addDomainToWhitelist(requestParameters.domain, requestParameters.videoId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method returns every domain on the specified video\'s whitelist.
         * @summary Get all the domains on a video\'s whitelist
         * @param {VideosEmbedPrivacyApiListWhitelistDomainsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listWhitelistDomains(requestParameters: VideosEmbedPrivacyApiListWhitelistDomainsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Domain>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listWhitelistDomains(requestParameters.videoId, requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method removes the specified domain from a video\'s whitelist.
         * @summary Remove a domain from a video\'s whitelist
         * @param {VideosEmbedPrivacyApiRemoveDomainFromWhitelistRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeDomainFromWhitelist(requestParameters: VideosEmbedPrivacyApiRemoveDomainFromWhitelistRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeDomainFromWhitelist(requestParameters.domain, requestParameters.videoId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * VideosEmbedPrivacyApi - factory interface
 * @export
 */
export const VideosEmbedPrivacyApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = VideosEmbedPrivacyApiFp(configuration)
    return {
        /**
         * This method adds the specified domain to a video\'s whitelist.
         * @summary Add a domain to a video\'s whitelist
         * @param {VideosEmbedPrivacyApiAddDomainToWhitelistRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addDomainToWhitelist(requestParameters: VideosEmbedPrivacyApiAddDomainToWhitelistRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.addDomainToWhitelist(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method returns every domain on the specified video\'s whitelist.
         * @summary Get all the domains on a video\'s whitelist
         * @param {VideosEmbedPrivacyApiListWhitelistDomainsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listWhitelistDomains(requestParameters: VideosEmbedPrivacyApiListWhitelistDomainsRequest, options?: AxiosRequestConfig): AxiosPromise<Array<Domain>> {
            return localVarFp.listWhitelistDomains(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method removes the specified domain from a video\'s whitelist.
         * @summary Remove a domain from a video\'s whitelist
         * @param {VideosEmbedPrivacyApiRemoveDomainFromWhitelistRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeDomainFromWhitelist(requestParameters: VideosEmbedPrivacyApiRemoveDomainFromWhitelistRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.removeDomainFromWhitelist(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addDomainToWhitelist operation in VideosEmbedPrivacyApi.
 * @export
 * @interface VideosEmbedPrivacyApiAddDomainToWhitelistRequest
 */
export type VideosEmbedPrivacyApiAddDomainToWhitelistRequest = {
    
    /**
    * The domain name.
    * @type {string}
    * @memberof VideosEmbedPrivacyApiAddDomainToWhitelist
    */
    readonly domain: string
    
    /**
    * The ID of the video.
    * @type {number}
    * @memberof VideosEmbedPrivacyApiAddDomainToWhitelist
    */
    readonly videoId: number
    
}

/**
 * Request parameters for listWhitelistDomains operation in VideosEmbedPrivacyApi.
 * @export
 * @interface VideosEmbedPrivacyApiListWhitelistDomainsRequest
 */
export type VideosEmbedPrivacyApiListWhitelistDomainsRequest = {
    
    /**
    * The ID of the video.
    * @type {number}
    * @memberof VideosEmbedPrivacyApiListWhitelistDomains
    */
    readonly videoId: number
    
    /**
    * The page number of the results to show.
    * @type {number}
    * @memberof VideosEmbedPrivacyApiListWhitelistDomains
    */
    readonly page?: number
    
    /**
    * The number of items to show on each page of results, up to a maximum of 100.
    * @type {number}
    * @memberof VideosEmbedPrivacyApiListWhitelistDomains
    */
    readonly perPage?: number
    
}

/**
 * Request parameters for removeDomainFromWhitelist operation in VideosEmbedPrivacyApi.
 * @export
 * @interface VideosEmbedPrivacyApiRemoveDomainFromWhitelistRequest
 */
export type VideosEmbedPrivacyApiRemoveDomainFromWhitelistRequest = {
    
    /**
    * The domain name.
    * @type {string}
    * @memberof VideosEmbedPrivacyApiRemoveDomainFromWhitelist
    */
    readonly domain: string
    
    /**
    * The ID of the video.
    * @type {number}
    * @memberof VideosEmbedPrivacyApiRemoveDomainFromWhitelist
    */
    readonly videoId: number
    
}

/**
 * VideosEmbedPrivacyApiGenerated - object-oriented interface
 * @export
 * @class VideosEmbedPrivacyApiGenerated
 * @extends {BaseAPI}
 */
export class VideosEmbedPrivacyApiGenerated extends BaseAPI {
    /**
     * This method adds the specified domain to a video\'s whitelist.
     * @summary Add a domain to a video\'s whitelist
     * @param {VideosEmbedPrivacyApiAddDomainToWhitelistRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideosEmbedPrivacyApiGenerated
     */
    public addDomainToWhitelist(requestParameters: VideosEmbedPrivacyApiAddDomainToWhitelistRequest, options?: AxiosRequestConfig) {
        return VideosEmbedPrivacyApiFp(this.configuration).addDomainToWhitelist(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method returns every domain on the specified video\'s whitelist.
     * @summary Get all the domains on a video\'s whitelist
     * @param {VideosEmbedPrivacyApiListWhitelistDomainsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideosEmbedPrivacyApiGenerated
     */
    public listWhitelistDomains(requestParameters: VideosEmbedPrivacyApiListWhitelistDomainsRequest, options?: AxiosRequestConfig) {
        return VideosEmbedPrivacyApiFp(this.configuration).listWhitelistDomains(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method removes the specified domain from a video\'s whitelist.
     * @summary Remove a domain from a video\'s whitelist
     * @param {VideosEmbedPrivacyApiRemoveDomainFromWhitelistRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideosEmbedPrivacyApiGenerated
     */
    public removeDomainFromWhitelist(requestParameters: VideosEmbedPrivacyApiRemoveDomainFromWhitelistRequest, options?: AxiosRequestConfig) {
        return VideosEmbedPrivacyApiFp(this.configuration).removeDomainFromWhitelist(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
