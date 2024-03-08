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
import { ModelError } from '../models';
// @ts-ignore
import { Picture } from '../models';
// @ts-ignore
import { ShowcasesCustomShowcaseThumbnailsReplaceCustomThumbnailRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ShowcasesCustomShowcaseThumbnailsApi - axios parameter creator
 * @export
 */
export const ShowcasesCustomShowcaseThumbnailsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method adds an uploaded image file as a custom thumbnail for the specified showcase. The image doesn\'t need to be a still from a showcase video, unlike with the [standard thumbnail method](https://developer.vimeo.com/api/reference/albums#set_video_as_album_thumbnail). The authenticated user must be the owner of the showcase.  For information on how to upload the thumbnail, see our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide, and follow the same steps.
         * @summary Add a custom thumbnail to a showcase
         * @param {number} albumId The ID of the showcase.
         * @param {number} userId The ID of the user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addCustomThumbnail: async (albumId: number, userId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'albumId' is not null or undefined
            assertParamExists('addCustomThumbnail', 'albumId', albumId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('addCustomThumbnail', 'userId', userId)
            const localVarPath = `/users/{user_id}/albums/{album_id}/custom_thumbnails`
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
                pathTemplate: '/users/{user_id}/albums/{album_id}/custom_thumbnails',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method deletes the specified custom thumbnail from its showcase. The authenticated user must be the owner of the showcase.
         * @summary Delete a custom showcase thumbnail
         * @param {number} albumId The ID of the showcase.
         * @param {number} thumbnailId The ID of the custom thumbnail.
         * @param {number} userId The ID of the user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCustomThumbnail: async (albumId: number, thumbnailId: number, userId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'albumId' is not null or undefined
            assertParamExists('deleteCustomThumbnail', 'albumId', albumId)
            // verify required parameter 'thumbnailId' is not null or undefined
            assertParamExists('deleteCustomThumbnail', 'thumbnailId', thumbnailId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('deleteCustomThumbnail', 'userId', userId)
            const localVarPath = `/users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}`
                .replace(`{${"album_id"}}`, encodeURIComponent(String(albumId !== undefined ? albumId : `-album_id-`)))
                .replace(`{${"thumbnail_id"}}`, encodeURIComponent(String(thumbnailId !== undefined ? thumbnailId : `-thumbnail_id-`)))
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
                pathTemplate: '/users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method returns a single custom thumbnail of the specified showcase. The authenticated user must be the owner of the showcase.
         * @summary Get a specific custom showcase thumbnail
         * @param {number} albumId The ID of the showcase.
         * @param {number} thumbnailId The ID of the custom thumbnail.
         * @param {number} userId The ID of the user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecificThumbnail: async (albumId: number, thumbnailId: number, userId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'albumId' is not null or undefined
            assertParamExists('getSpecificThumbnail', 'albumId', albumId)
            // verify required parameter 'thumbnailId' is not null or undefined
            assertParamExists('getSpecificThumbnail', 'thumbnailId', thumbnailId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getSpecificThumbnail', 'userId', userId)
            const localVarPath = `/users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}`
                .replace(`{${"album_id"}}`, encodeURIComponent(String(albumId !== undefined ? albumId : `-album_id-`)))
                .replace(`{${"thumbnail_id"}}`, encodeURIComponent(String(thumbnailId !== undefined ? thumbnailId : `-thumbnail_id-`)))
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
                pathTemplate: '/users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method returns every custom thumbnail of the specified showcase. The authenticated user must be the owner of the showcase.
         * @summary Get all the custom thumbnails of a showcase
         * @param {number} albumId The ID of the showcase.
         * @param {number} userId The ID of the user.
         * @param {number} [page] The page number of the results to show.
         * @param {number} [perPage] The number of items to show on each page of results, up to a maximum of 100.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (albumId: number, userId: number, page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'albumId' is not null or undefined
            assertParamExists('list', 'albumId', albumId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('list', 'userId', userId)
            const localVarPath = `/users/{user_id}/albums/{album_id}/custom_thumbnails`
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
                pathTemplate: '/users/{user_id}/albums/{album_id}/custom_thumbnails',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method replaces the specified custom showcase thumbnail with a new image file. The authenticated user must be the owner of the showcase.  For information on how to upload the thumbnail, see our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide.
         * @summary Replace a custom showcase thumbnail
         * @param {number} albumId The ID of the showcase.
         * @param {number} thumbnailId The ID of the custom thumbnail.
         * @param {number} userId The ID of the user.
         * @param {ShowcasesCustomShowcaseThumbnailsReplaceCustomThumbnailRequest} [showcasesCustomShowcaseThumbnailsReplaceCustomThumbnailRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        replaceCustomThumbnail: async (albumId: number, thumbnailId: number, userId: number, showcasesCustomShowcaseThumbnailsReplaceCustomThumbnailRequest?: ShowcasesCustomShowcaseThumbnailsReplaceCustomThumbnailRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'albumId' is not null or undefined
            assertParamExists('replaceCustomThumbnail', 'albumId', albumId)
            // verify required parameter 'thumbnailId' is not null or undefined
            assertParamExists('replaceCustomThumbnail', 'thumbnailId', thumbnailId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('replaceCustomThumbnail', 'userId', userId)
            const localVarPath = `/users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}`
                .replace(`{${"album_id"}}`, encodeURIComponent(String(albumId !== undefined ? albumId : `-album_id-`)))
                .replace(`{${"thumbnail_id"}}`, encodeURIComponent(String(thumbnailId !== undefined ? thumbnailId : `-thumbnail_id-`)))
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
                requestBody: showcasesCustomShowcaseThumbnailsReplaceCustomThumbnailRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}',
                httpMethod: 'PATCH'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(showcasesCustomShowcaseThumbnailsReplaceCustomThumbnailRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ShowcasesCustomShowcaseThumbnailsApi - functional programming interface
 * @export
 */
export const ShowcasesCustomShowcaseThumbnailsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ShowcasesCustomShowcaseThumbnailsApiAxiosParamCreator(configuration)
    return {
        /**
         * This method adds an uploaded image file as a custom thumbnail for the specified showcase. The image doesn\'t need to be a still from a showcase video, unlike with the [standard thumbnail method](https://developer.vimeo.com/api/reference/albums#set_video_as_album_thumbnail). The authenticated user must be the owner of the showcase.  For information on how to upload the thumbnail, see our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide, and follow the same steps.
         * @summary Add a custom thumbnail to a showcase
         * @param {ShowcasesCustomShowcaseThumbnailsApiAddCustomThumbnailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addCustomThumbnail(requestParameters: ShowcasesCustomShowcaseThumbnailsApiAddCustomThumbnailRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Picture>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addCustomThumbnail(requestParameters.albumId, requestParameters.userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method deletes the specified custom thumbnail from its showcase. The authenticated user must be the owner of the showcase.
         * @summary Delete a custom showcase thumbnail
         * @param {ShowcasesCustomShowcaseThumbnailsApiDeleteCustomThumbnailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCustomThumbnail(requestParameters: ShowcasesCustomShowcaseThumbnailsApiDeleteCustomThumbnailRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteCustomThumbnail(requestParameters.albumId, requestParameters.thumbnailId, requestParameters.userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method returns a single custom thumbnail of the specified showcase. The authenticated user must be the owner of the showcase.
         * @summary Get a specific custom showcase thumbnail
         * @param {ShowcasesCustomShowcaseThumbnailsApiGetSpecificThumbnailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSpecificThumbnail(requestParameters: ShowcasesCustomShowcaseThumbnailsApiGetSpecificThumbnailRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Picture>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSpecificThumbnail(requestParameters.albumId, requestParameters.thumbnailId, requestParameters.userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method returns every custom thumbnail of the specified showcase. The authenticated user must be the owner of the showcase.
         * @summary Get all the custom thumbnails of a showcase
         * @param {ShowcasesCustomShowcaseThumbnailsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(requestParameters: ShowcasesCustomShowcaseThumbnailsApiListRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Picture>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(requestParameters.albumId, requestParameters.userId, requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method replaces the specified custom showcase thumbnail with a new image file. The authenticated user must be the owner of the showcase.  For information on how to upload the thumbnail, see our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide.
         * @summary Replace a custom showcase thumbnail
         * @param {ShowcasesCustomShowcaseThumbnailsApiReplaceCustomThumbnailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async replaceCustomThumbnail(requestParameters: ShowcasesCustomShowcaseThumbnailsApiReplaceCustomThumbnailRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Picture>> {
            const showcasesCustomShowcaseThumbnailsReplaceCustomThumbnailRequest: ShowcasesCustomShowcaseThumbnailsReplaceCustomThumbnailRequest = {
                active: requestParameters.active
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.replaceCustomThumbnail(requestParameters.albumId, requestParameters.thumbnailId, requestParameters.userId, showcasesCustomShowcaseThumbnailsReplaceCustomThumbnailRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ShowcasesCustomShowcaseThumbnailsApi - factory interface
 * @export
 */
export const ShowcasesCustomShowcaseThumbnailsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ShowcasesCustomShowcaseThumbnailsApiFp(configuration)
    return {
        /**
         * This method adds an uploaded image file as a custom thumbnail for the specified showcase. The image doesn\'t need to be a still from a showcase video, unlike with the [standard thumbnail method](https://developer.vimeo.com/api/reference/albums#set_video_as_album_thumbnail). The authenticated user must be the owner of the showcase.  For information on how to upload the thumbnail, see our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide, and follow the same steps.
         * @summary Add a custom thumbnail to a showcase
         * @param {ShowcasesCustomShowcaseThumbnailsApiAddCustomThumbnailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addCustomThumbnail(requestParameters: ShowcasesCustomShowcaseThumbnailsApiAddCustomThumbnailRequest, options?: AxiosRequestConfig): AxiosPromise<Picture> {
            return localVarFp.addCustomThumbnail(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method deletes the specified custom thumbnail from its showcase. The authenticated user must be the owner of the showcase.
         * @summary Delete a custom showcase thumbnail
         * @param {ShowcasesCustomShowcaseThumbnailsApiDeleteCustomThumbnailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCustomThumbnail(requestParameters: ShowcasesCustomShowcaseThumbnailsApiDeleteCustomThumbnailRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteCustomThumbnail(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method returns a single custom thumbnail of the specified showcase. The authenticated user must be the owner of the showcase.
         * @summary Get a specific custom showcase thumbnail
         * @param {ShowcasesCustomShowcaseThumbnailsApiGetSpecificThumbnailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecificThumbnail(requestParameters: ShowcasesCustomShowcaseThumbnailsApiGetSpecificThumbnailRequest, options?: AxiosRequestConfig): AxiosPromise<Picture> {
            return localVarFp.getSpecificThumbnail(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method returns every custom thumbnail of the specified showcase. The authenticated user must be the owner of the showcase.
         * @summary Get all the custom thumbnails of a showcase
         * @param {ShowcasesCustomShowcaseThumbnailsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: ShowcasesCustomShowcaseThumbnailsApiListRequest, options?: AxiosRequestConfig): AxiosPromise<Array<Picture>> {
            return localVarFp.list(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method replaces the specified custom showcase thumbnail with a new image file. The authenticated user must be the owner of the showcase.  For information on how to upload the thumbnail, see our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide.
         * @summary Replace a custom showcase thumbnail
         * @param {ShowcasesCustomShowcaseThumbnailsApiReplaceCustomThumbnailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        replaceCustomThumbnail(requestParameters: ShowcasesCustomShowcaseThumbnailsApiReplaceCustomThumbnailRequest, options?: AxiosRequestConfig): AxiosPromise<Picture> {
            return localVarFp.replaceCustomThumbnail(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addCustomThumbnail operation in ShowcasesCustomShowcaseThumbnailsApi.
 * @export
 * @interface ShowcasesCustomShowcaseThumbnailsApiAddCustomThumbnailRequest
 */
export type ShowcasesCustomShowcaseThumbnailsApiAddCustomThumbnailRequest = {
    
    /**
    * The ID of the showcase.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseThumbnailsApiAddCustomThumbnail
    */
    readonly albumId: number
    
    /**
    * The ID of the user.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseThumbnailsApiAddCustomThumbnail
    */
    readonly userId: number
    
}

/**
 * Request parameters for deleteCustomThumbnail operation in ShowcasesCustomShowcaseThumbnailsApi.
 * @export
 * @interface ShowcasesCustomShowcaseThumbnailsApiDeleteCustomThumbnailRequest
 */
export type ShowcasesCustomShowcaseThumbnailsApiDeleteCustomThumbnailRequest = {
    
    /**
    * The ID of the showcase.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseThumbnailsApiDeleteCustomThumbnail
    */
    readonly albumId: number
    
    /**
    * The ID of the custom thumbnail.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseThumbnailsApiDeleteCustomThumbnail
    */
    readonly thumbnailId: number
    
    /**
    * The ID of the user.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseThumbnailsApiDeleteCustomThumbnail
    */
    readonly userId: number
    
}

/**
 * Request parameters for getSpecificThumbnail operation in ShowcasesCustomShowcaseThumbnailsApi.
 * @export
 * @interface ShowcasesCustomShowcaseThumbnailsApiGetSpecificThumbnailRequest
 */
export type ShowcasesCustomShowcaseThumbnailsApiGetSpecificThumbnailRequest = {
    
    /**
    * The ID of the showcase.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseThumbnailsApiGetSpecificThumbnail
    */
    readonly albumId: number
    
    /**
    * The ID of the custom thumbnail.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseThumbnailsApiGetSpecificThumbnail
    */
    readonly thumbnailId: number
    
    /**
    * The ID of the user.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseThumbnailsApiGetSpecificThumbnail
    */
    readonly userId: number
    
}

/**
 * Request parameters for list operation in ShowcasesCustomShowcaseThumbnailsApi.
 * @export
 * @interface ShowcasesCustomShowcaseThumbnailsApiListRequest
 */
export type ShowcasesCustomShowcaseThumbnailsApiListRequest = {
    
    /**
    * The ID of the showcase.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseThumbnailsApiList
    */
    readonly albumId: number
    
    /**
    * The ID of the user.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseThumbnailsApiList
    */
    readonly userId: number
    
    /**
    * The page number of the results to show.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseThumbnailsApiList
    */
    readonly page?: number
    
    /**
    * The number of items to show on each page of results, up to a maximum of 100.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseThumbnailsApiList
    */
    readonly perPage?: number
    
}

/**
 * Request parameters for replaceCustomThumbnail operation in ShowcasesCustomShowcaseThumbnailsApi.
 * @export
 * @interface ShowcasesCustomShowcaseThumbnailsApiReplaceCustomThumbnailRequest
 */
export type ShowcasesCustomShowcaseThumbnailsApiReplaceCustomThumbnailRequest = {
    
    /**
    * The ID of the showcase.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseThumbnailsApiReplaceCustomThumbnail
    */
    readonly albumId: number
    
    /**
    * The ID of the custom thumbnail.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseThumbnailsApiReplaceCustomThumbnail
    */
    readonly thumbnailId: number
    
    /**
    * The ID of the user.
    * @type {number}
    * @memberof ShowcasesCustomShowcaseThumbnailsApiReplaceCustomThumbnail
    */
    readonly userId: number
    
} & ShowcasesCustomShowcaseThumbnailsReplaceCustomThumbnailRequest

/**
 * ShowcasesCustomShowcaseThumbnailsApiGenerated - object-oriented interface
 * @export
 * @class ShowcasesCustomShowcaseThumbnailsApiGenerated
 * @extends {BaseAPI}
 */
export class ShowcasesCustomShowcaseThumbnailsApiGenerated extends BaseAPI {
    /**
     * This method adds an uploaded image file as a custom thumbnail for the specified showcase. The image doesn\'t need to be a still from a showcase video, unlike with the [standard thumbnail method](https://developer.vimeo.com/api/reference/albums#set_video_as_album_thumbnail). The authenticated user must be the owner of the showcase.  For information on how to upload the thumbnail, see our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide, and follow the same steps.
     * @summary Add a custom thumbnail to a showcase
     * @param {ShowcasesCustomShowcaseThumbnailsApiAddCustomThumbnailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowcasesCustomShowcaseThumbnailsApiGenerated
     */
    public addCustomThumbnail(requestParameters: ShowcasesCustomShowcaseThumbnailsApiAddCustomThumbnailRequest, options?: AxiosRequestConfig) {
        return ShowcasesCustomShowcaseThumbnailsApiFp(this.configuration).addCustomThumbnail(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method deletes the specified custom thumbnail from its showcase. The authenticated user must be the owner of the showcase.
     * @summary Delete a custom showcase thumbnail
     * @param {ShowcasesCustomShowcaseThumbnailsApiDeleteCustomThumbnailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowcasesCustomShowcaseThumbnailsApiGenerated
     */
    public deleteCustomThumbnail(requestParameters: ShowcasesCustomShowcaseThumbnailsApiDeleteCustomThumbnailRequest, options?: AxiosRequestConfig) {
        return ShowcasesCustomShowcaseThumbnailsApiFp(this.configuration).deleteCustomThumbnail(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method returns a single custom thumbnail of the specified showcase. The authenticated user must be the owner of the showcase.
     * @summary Get a specific custom showcase thumbnail
     * @param {ShowcasesCustomShowcaseThumbnailsApiGetSpecificThumbnailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowcasesCustomShowcaseThumbnailsApiGenerated
     */
    public getSpecificThumbnail(requestParameters: ShowcasesCustomShowcaseThumbnailsApiGetSpecificThumbnailRequest, options?: AxiosRequestConfig) {
        return ShowcasesCustomShowcaseThumbnailsApiFp(this.configuration).getSpecificThumbnail(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method returns every custom thumbnail of the specified showcase. The authenticated user must be the owner of the showcase.
     * @summary Get all the custom thumbnails of a showcase
     * @param {ShowcasesCustomShowcaseThumbnailsApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowcasesCustomShowcaseThumbnailsApiGenerated
     */
    public list(requestParameters: ShowcasesCustomShowcaseThumbnailsApiListRequest, options?: AxiosRequestConfig) {
        return ShowcasesCustomShowcaseThumbnailsApiFp(this.configuration).list(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method replaces the specified custom showcase thumbnail with a new image file. The authenticated user must be the owner of the showcase.  For information on how to upload the thumbnail, see our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide.
     * @summary Replace a custom showcase thumbnail
     * @param {ShowcasesCustomShowcaseThumbnailsApiReplaceCustomThumbnailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShowcasesCustomShowcaseThumbnailsApiGenerated
     */
    public replaceCustomThumbnail(requestParameters: ShowcasesCustomShowcaseThumbnailsApiReplaceCustomThumbnailRequest, options?: AxiosRequestConfig) {
        return ShowcasesCustomShowcaseThumbnailsApiFp(this.configuration).replaceCustomThumbnail(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
