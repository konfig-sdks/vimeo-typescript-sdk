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
import { Picture } from '../models';
// @ts-ignore
import { ShowcasesCustomShowcaseLogosReplaceLogoRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ShowcasesCustomShowcaseLogosApi - axios parameter creator
 * @export
 */
export const ShowcasesCustomShowcaseLogosApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method adds an image file as a custom logo to the specified showcase. The authenticated user must be the owner of the showcase.  For information on how to upload the logo, see our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide.
         * @summary Add a custom logo to a showcase
         * @param {number} albumId The ID of the showcase.
         * @param {number} userId The ID of the user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addCustomLogo: async (albumId: number, userId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'albumId' is not null or undefined
            assertParamExists('addCustomLogo', 'albumId', albumId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('addCustomLogo', 'userId', userId)
            const localVarPath = `/users/{user_id}/albums/{album_id}/logos`
                .replace(`{${"album_id"}}`, encodeURIComponent(String(albumId !== undefined ? albumId : `-album_id-`)))
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId !== undefined ? userId : `-user_id-`)));
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
                pathTemplate: '/users/{user_id}/albums/{album_id}/logos',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method deletes the specified custom logo from its showcase. The authenticated user must be the owner of the showcase.
         * @summary Delete a custom showcase logo
         * @param {number} albumId The ID of the showcase.
         * @param {number} logoId The ID of the custom logo.
         * @param {number} userId The ID of the user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCustomLogo: async (albumId: number, logoId: number, userId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'albumId' is not null or undefined
            assertParamExists('deleteCustomLogo', 'albumId', albumId)
            // verify required parameter 'logoId' is not null or undefined
            assertParamExists('deleteCustomLogo', 'logoId', logoId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('deleteCustomLogo', 'userId', userId)
            const localVarPath = `/users/{user_id}/albums/{album_id}/logos/{logo_id}`
                .replace(`{${"album_id"}}`, encodeURIComponent(String(albumId !== undefined ? albumId : `-album_id-`)))
                .replace(`{${"logo_id"}}`, encodeURIComponent(String(logoId !== undefined ? logoId : `-logo_id-`)))
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId !== undefined ? userId : `-user_id-`)));
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
                pathTemplate: '/users/{user_id}/albums/{album_id}/logos/{logo_id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method returns a single custom logo of the specified showcase. The authenticated user must be the owner of the showcase.
         * @summary Get a specific custom showcase logo
         * @param {number} albumId The ID of the showcase.
         * @param {number} logoId The ID of the custom logo.
         * @param {number} userId The ID of the user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecificLogo: async (albumId: number, logoId: number, userId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'albumId' is not null or undefined
            assertParamExists('getSpecificLogo', 'albumId', albumId)
            // verify required parameter 'logoId' is not null or undefined
            assertParamExists('getSpecificLogo', 'logoId', logoId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getSpecificLogo', 'userId', userId)
            const localVarPath = `/users/{user_id}/albums/{album_id}/logos/{logo_id}`
                .replace(`{${"album_id"}}`, encodeURIComponent(String(albumId !== undefined ? albumId : `-album_id-`)))
                .replace(`{${"logo_id"}}`, encodeURIComponent(String(logoId !== undefined ? logoId : `-logo_id-`)))
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId !== undefined ? userId : `-user_id-`)));
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
                pathTemplate: '/users/{user_id}/albums/{album_id}/logos/{logo_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method returns every custom logo of the specified showcase. The authenticated user must be the owner of the showcase.
         * @summary Get all the custom logos of a showcase
         * @param {number} albumId The ID of the showcase.
         * @param {number} userId The ID of the user.
         * @param {number} [page] The page number of the results to show.
         * @param {number} [perPage] The number of items to show on each page of results, up to a maximum of 100.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllCustomLogos: async (albumId: number, userId: number, page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'albumId' is not null or undefined
            assertParamExists('listAllCustomLogos', 'albumId', albumId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('listAllCustomLogos', 'userId', userId)
            const localVarPath = `/users/{user_id}/albums/{album_id}/logos`
                .replace(`{${"album_id"}}`, encodeURIComponent(String(albumId !== undefined ? albumId : `-album_id-`)))
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId !== undefined ? userId : `-user_id-`)));
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
                pathTemplate: '/users/{user_id}/albums/{album_id}/logos',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method replaces the specified custom showcase logo with a new image file. The authenticated user must be the owner of the showcase.  For information on how to upload the logo, see our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide.
         * @summary Replace a custom showcase logo
         * @param {number} albumId The ID of the showcase.
         * @param {number} logoId The ID of the custom logo.
         * @param {number} userId The ID of the user.
         * @param {ShowcasesCustomShowcaseLogosReplaceLogoRequest} [showcasesCustomShowcaseLogosReplaceLogoRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        replaceLogo: async (albumId: number, logoId: number, userId: number, showcasesCustomShowcaseLogosReplaceLogoRequest?: ShowcasesCustomShowcaseLogosReplaceLogoRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'albumId' is not null or undefined
            assertParamExists('replaceLogo', 'albumId', albumId)
            // verify required parameter 'logoId' is not null or undefined
            assertParamExists('replaceLogo', 'logoId', logoId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('replaceLogo', 'userId', userId)
            const localVarPath = `/users/{user_id}/albums/{album_id}/logos/{logo_id}`
                .replace(`{${"album_id"}}`, encodeURIComponent(String(albumId !== undefined ? albumId : `-album_id-`)))
                .replace(`{${"logo_id"}}`, encodeURIComponent(String(logoId !== undefined ? logoId : `-logo_id-`)))
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId !== undefined ? userId : `-user_id-`)));
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
                requestBody: showcasesCustomShowcaseLogosReplaceLogoRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/users/{user_id}/albums/{album_id}/logos/{logo_id}',
                httpMethod: 'PATCH'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(showcasesCustomShowcaseLogosReplaceLogoRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ShowcasesCustomShowcaseLogosApi - functional programming interface
 * @export
 */
export const ShowcasesCustomShowcaseLogosApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ShowcasesCustomShowcaseLogosApiAxiosParamCreator(configuration)
    return {
        /**
         * This method adds an image file as a custom logo to the specified showcase. The authenticated user must be the owner of the showcase.  For information on how to upload the logo, see our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide.
         * @summary Add a custom logo to a showcase
         * @param {ShowcasesCustomShowcaseLogosApiAddCustomLogoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addCustomLogo(requestParameters: ShowcasesCustomShowcaseLogosApiAddCustomLogoRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Picture>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addCustomLogo(requestParameters.albumId, requestParameters.userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method deletes the specified custom logo from its showcase. The authenticated user must be the owner of the showcase.
         * @summary Delete a custom showcase logo
         * @param {ShowcasesCustomShowcaseLogosApiDeleteCustomLogoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCustomLogo(requestParameters: ShowcasesCustomShowcaseLogosApiDeleteCustomLogoRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteCustomLogo(requestParameters.albumId, requestParameters.logoId, requestParameters.userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method returns a single custom logo of the specified showcase. The authenticated user must be the owner of the showcase.
         * @summary Get a specific custom showcase logo
         * @param {ShowcasesCustomShowcaseLogosApiGetSpecificLogoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSpecificLogo(requestParameters: ShowcasesCustomShowcaseLogosApiGetSpecificLogoRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Picture>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSpecificLogo(requestParameters.albumId, requestParameters.logoId, requestParameters.userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method returns every custom logo of the specified showcase. The authenticated user must be the owner of the showcase.
         * @summary Get all the custom logos of a showcase
         * @param {ShowcasesCustomShowcaseLogosApiListAllCustomLogosRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAllCustomLogos(requestParameters: ShowcasesCustomShowcaseLogosApiListAllCustomLogosRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Picture>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAllCustomLogos(requestParameters.albumId, requestParameters.userId, requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method replaces the specified custom showcase logo with a new image file. The authenticated user must be the owner of the showcase.  For information on how to upload the logo, see our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide.
         * @summary Replace a custom showcase logo
         * @param {ShowcasesCustomShowcaseLogosApiReplaceLogoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async replaceLogo(requestParameters: ShowcasesCustomShowcaseLogosApiReplaceLogoRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Picture>> {
            const showcasesCustomShowcaseLogosReplaceLogoRequest: ShowcasesCustomShowcaseLogosReplaceLogoRequest = {
                active: requestParameters.active
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.replaceLogo(requestParameters.albumId, requestParameters.logoId, requestParameters.userId, showcasesCustomShowcaseLogosReplaceLogoRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ShowcasesCustomShowcaseLogosApi - factory interface
 * @export
 */
export const ShowcasesCustomShowcaseLogosApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ShowcasesCustomShowcaseLogosApiFp(configuration)
    return {
        /**
         * This method adds an image file as a custom logo to the specified showcase. The authenticated user must be the owner of the showcase.  For information on how to upload the logo, see our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide.
         * @summary Add a custom logo to a showcase
         * @param {ShowcasesCustomShowcaseLogosApiAddCustomLogoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addCustomLogo(requestParameters: ShowcasesCustomShowcaseLogosApiAddCustomLogoRequest, options?: AxiosRequestConfig): AxiosPromise<Picture> {
            return localVarFp.addCustomLogo(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method deletes the specified custom logo from its showcase. The authenticated user must be the owner of the showcase.
         * @summary Delete a custom showcase logo
         * @param {ShowcasesCustomShowcaseLogosApiDeleteCustomLogoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCustomLogo(requestParameters: ShowcasesCustomShowcaseLogosApiDeleteCustomLogoRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteCustomLogo(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method returns a single custom logo of the specified showcase. The authenticated user must be the owner of the showcase.
         * @summary Get a specific custom showcase logo
         * @param {ShowcasesCustomShowcaseLogosApiGetSpecificLogoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecificLogo(requestParameters: ShowcasesCustomShowcaseLogosApiGetSpecificLogoRequest, options?: AxiosRequestConfig): AxiosPromise<Picture> {
            return localVarFp.getSpecificLogo(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method returns every custom logo of the specified showcase. The authenticated user must be the owner of the showcase.
         * @summary Get all the custom logos of a showcase
         * @param {ShowcasesCustomShowcaseLogosApiListAllCustomLogosRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllCustomLogos(requestParameters: ShowcasesCustomShowcaseLogosApiListAllCustomLogosRequest, options?: AxiosRequestConfig): AxiosPromise<Array<Picture>> {
            return localVarFp.listAllCustomLogos(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method replaces the specified custom showcase logo with a new image file. The authenticated user must be the owner of the showcase.  For information on how to upload the logo, see our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide.
         * @summary Replace a custom showcase logo
         * @param {ShowcasesCustomShowcaseLogosApiReplaceLogoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        replaceLogo(requestParameters: ShowcasesCustomShowcaseLogosApiReplaceLogoRequest, options?: AxiosRequestConfig): AxiosPromise<Picture> {
            return localVarFp.replaceLogo(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addCustomLogo operation in ShowcasesCustomShowcaseLogosApi.
 * @export
 * @interface ShowcasesCustomShowcaseLogosApiAddCustomLogoRequest
 */
export type ShowcasesCustomShowcaseLogosApiAddCustomLogoRequest = {
    
    /**
    * The ID of the showcase.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseLogosApiAddCustomLogo
    */
    readonly albumId: number
    
    /**
    * The ID of the user.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseLogosApiAddCustomLogo
    */
    readonly userId: number
    
}

/**
 * Request parameters for deleteCustomLogo operation in ShowcasesCustomShowcaseLogosApi.
 * @export
 * @interface ShowcasesCustomShowcaseLogosApiDeleteCustomLogoRequest
 */
export type ShowcasesCustomShowcaseLogosApiDeleteCustomLogoRequest = {
    
    /**
    * The ID of the showcase.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseLogosApiDeleteCustomLogo
    */
    readonly albumId: number
    
    /**
    * The ID of the custom logo.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseLogosApiDeleteCustomLogo
    */
    readonly logoId: number
    
    /**
    * The ID of the user.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseLogosApiDeleteCustomLogo
    */
    readonly userId: number
    
}

/**
 * Request parameters for getSpecificLogo operation in ShowcasesCustomShowcaseLogosApi.
 * @export
 * @interface ShowcasesCustomShowcaseLogosApiGetSpecificLogoRequest
 */
export type ShowcasesCustomShowcaseLogosApiGetSpecificLogoRequest = {
    
    /**
    * The ID of the showcase.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseLogosApiGetSpecificLogo
    */
    readonly albumId: number
    
    /**
    * The ID of the custom logo.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseLogosApiGetSpecificLogo
    */
    readonly logoId: number
    
    /**
    * The ID of the user.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseLogosApiGetSpecificLogo
    */
    readonly userId: number
    
}

/**
 * Request parameters for listAllCustomLogos operation in ShowcasesCustomShowcaseLogosApi.
 * @export
 * @interface ShowcasesCustomShowcaseLogosApiListAllCustomLogosRequest
 */
export type ShowcasesCustomShowcaseLogosApiListAllCustomLogosRequest = {
    
    /**
    * The ID of the showcase.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseLogosApiListAllCustomLogos
    */
    readonly albumId: number
    
    /**
    * The ID of the user.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseLogosApiListAllCustomLogos
    */
    readonly userId: number
    
    /**
    * The page number of the results to show.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseLogosApiListAllCustomLogos
    */
    readonly page?: number
    
    /**
    * The number of items to show on each page of results, up to a maximum of 100.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseLogosApiListAllCustomLogos
    */
    readonly perPage?: number
    
}

/**
 * Request parameters for replaceLogo operation in ShowcasesCustomShowcaseLogosApi.
 * @export
 * @interface ShowcasesCustomShowcaseLogosApiReplaceLogoRequest
 */
export type ShowcasesCustomShowcaseLogosApiReplaceLogoRequest = {
    
    /**
    * The ID of the showcase.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseLogosApiReplaceLogo
    */
    readonly albumId: number
    
    /**
    * The ID of the custom logo.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseLogosApiReplaceLogo
    */
    readonly logoId: number
    
    /**
    * The ID of the user.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseLogosApiReplaceLogo
    */
    readonly userId: number
    
} & ShowcasesCustomShowcaseLogosReplaceLogoRequest

/**
 * ShowcasesCustomShowcaseLogosApiGenerated - object-oriented interface
 * @export
 * @class ShowcasesCustomShowcaseLogosApiGenerated
 * @extends {BaseAPI}
 */
export class ShowcasesCustomShowcaseLogosApiGenerated extends BaseAPI {
    /**
     * This method adds an image file as a custom logo to the specified showcase. The authenticated user must be the owner of the showcase.  For information on how to upload the logo, see our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide.
     * @summary Add a custom logo to a showcase
     * @param {ShowcasesCustomShowcaseLogosApiAddCustomLogoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowcasesCustomShowcaseLogosApiGenerated
     */
    public addCustomLogo(requestParameters: ShowcasesCustomShowcaseLogosApiAddCustomLogoRequest, options?: AxiosRequestConfig) {
        return ShowcasesCustomShowcaseLogosApiFp(this.configuration).addCustomLogo(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method deletes the specified custom logo from its showcase. The authenticated user must be the owner of the showcase.
     * @summary Delete a custom showcase logo
     * @param {ShowcasesCustomShowcaseLogosApiDeleteCustomLogoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowcasesCustomShowcaseLogosApiGenerated
     */
    public deleteCustomLogo(requestParameters: ShowcasesCustomShowcaseLogosApiDeleteCustomLogoRequest, options?: AxiosRequestConfig) {
        return ShowcasesCustomShowcaseLogosApiFp(this.configuration).deleteCustomLogo(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method returns a single custom logo of the specified showcase. The authenticated user must be the owner of the showcase.
     * @summary Get a specific custom showcase logo
     * @param {ShowcasesCustomShowcaseLogosApiGetSpecificLogoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowcasesCustomShowcaseLogosApiGenerated
     */
    public getSpecificLogo(requestParameters: ShowcasesCustomShowcaseLogosApiGetSpecificLogoRequest, options?: AxiosRequestConfig) {
        return ShowcasesCustomShowcaseLogosApiFp(this.configuration).getSpecificLogo(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method returns every custom logo of the specified showcase. The authenticated user must be the owner of the showcase.
     * @summary Get all the custom logos of a showcase
     * @param {ShowcasesCustomShowcaseLogosApiListAllCustomLogosRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowcasesCustomShowcaseLogosApiGenerated
     */
    public listAllCustomLogos(requestParameters: ShowcasesCustomShowcaseLogosApiListAllCustomLogosRequest, options?: AxiosRequestConfig) {
        return ShowcasesCustomShowcaseLogosApiFp(this.configuration).listAllCustomLogos(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method replaces the specified custom showcase logo with a new image file. The authenticated user must be the owner of the showcase.  For information on how to upload the logo, see our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide.
     * @summary Replace a custom showcase logo
     * @param {ShowcasesCustomShowcaseLogosApiReplaceLogoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowcasesCustomShowcaseLogosApiGenerated
     */
    public replaceLogo(requestParameters: ShowcasesCustomShowcaseLogosApiReplaceLogoRequest, options?: AxiosRequestConfig) {
        return ShowcasesCustomShowcaseLogosApiFp(this.configuration).replaceLogo(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
