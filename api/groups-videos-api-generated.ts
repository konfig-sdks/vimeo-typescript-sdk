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
import { Video } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * GroupsVideosApi - axios parameter creator
 * @export
 */
export const GroupsVideosApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method adds a video to the specified group. The authenticated user must be the owner of the group.
         * @summary Add a video to a group
         * @param {number} groupId The ID of the group.
         * @param {number} videoId The ID of the video.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addToGroup: async (groupId: number, videoId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('addToGroup', 'groupId', groupId)
            // verify required parameter 'videoId' is not null or undefined
            assertParamExists('addToGroup', 'videoId', videoId)
            const localVarPath = `/groups/{group_id}/videos/{video_id}`
                .replace(`{${"group_id"}}`, encodeURIComponent(String(groupId !== undefined ? groupId : `-group_id-`)))
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
                pathTemplate: '/groups/{group_id}/videos/{video_id}',
                httpMethod: 'PUT'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method returns every video from the specified group.
         * @summary Get all the videos in a group
         * @param {number} groupId The ID of the group.
         * @param {'asc' | 'desc'} [direction] The sort direction of the results.  Option descriptions:  * &#x60;asc&#x60; - Sort the results in ascending order.  * &#x60;desc&#x60; - Sort the results in descending order. 
         * @param {'embeddable'} [filter] The attribute by which to filter the results.  Option descriptions:  * &#x60;embeddable&#x60; - Return embeddable videos. 
         * @param {boolean} [filterEmbeddable] Whether to filter the results by embeddable videos (&#x60;true&#x60;) or non-embeddable videos (&#x60;false&#x60;). This parameter is required only when **filter** is &#x60;embeddable&#x60;.
         * @param {number} [page] The page number of the results to show.
         * @param {number} [perPage] The number of items to show on each page of results, up to a maximum of 100.
         * @param {string} [query] The search query to use to filter the results.
         * @param {'alphabetical' | 'comments' | 'date' | 'duration' | 'likes' | 'plays'} [sort] The way to sort the results.  Option descriptions:  * &#x60;alphabetical&#x60; - Sort the results alphabetically.  * &#x60;comments&#x60; - Sort the results by number of comments.  * &#x60;date&#x60; - Sort the results by creation date.  * &#x60;duration&#x60; - Sort the results by duration.  * &#x60;likes&#x60; - Sort the results by number of likes.  * &#x60;plays&#x60; - Sort the results by number of plays. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllGroupVideos: async (groupId: number, direction?: 'asc' | 'desc', filter?: 'embeddable', filterEmbeddable?: boolean, page?: number, perPage?: number, query?: string, sort?: 'alphabetical' | 'comments' | 'date' | 'duration' | 'likes' | 'plays', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('getAllGroupVideos', 'groupId', groupId)
            const localVarPath = `/groups/{group_id}/videos`
                .replace(`{${"group_id"}}`, encodeURIComponent(String(groupId !== undefined ? groupId : `-group_id-`)));
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
            if (direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }

            if (filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }

            if (filterEmbeddable !== undefined) {
                localVarQueryParameter['filter_embeddable'] = filterEmbeddable;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }

            if (query !== undefined) {
                localVarQueryParameter['query'] = query;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/groups/{group_id}/videos',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method returns a single video from the specified group. You can use this method to determine whether the video belongs to the group.
         * @summary Get a specific video in a group
         * @param {number} groupId The ID of the group.
         * @param {number} videoId The ID of the video.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSingleVideo: async (groupId: number, videoId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('getSingleVideo', 'groupId', groupId)
            // verify required parameter 'videoId' is not null or undefined
            assertParamExists('getSingleVideo', 'videoId', videoId)
            const localVarPath = `/groups/{group_id}/videos/{video_id}`
                .replace(`{${"group_id"}}`, encodeURIComponent(String(groupId !== undefined ? groupId : `-group_id-`)))
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
                pathTemplate: '/groups/{group_id}/videos/{video_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method removes a video from the specified group. The authenticated user must be the owner of the group.
         * @summary Remove a video from a group
         * @param {number} groupId The ID of the group.
         * @param {number} videoId The ID of the video.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFromGroup: async (groupId: number, videoId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('removeFromGroup', 'groupId', groupId)
            // verify required parameter 'videoId' is not null or undefined
            assertParamExists('removeFromGroup', 'videoId', videoId)
            const localVarPath = `/groups/{group_id}/videos/{video_id}`
                .replace(`{${"group_id"}}`, encodeURIComponent(String(groupId !== undefined ? groupId : `-group_id-`)))
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
                pathTemplate: '/groups/{group_id}/videos/{video_id}',
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
 * GroupsVideosApi - functional programming interface
 * @export
 */
export const GroupsVideosApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupsVideosApiAxiosParamCreator(configuration)
    return {
        /**
         * This method adds a video to the specified group. The authenticated user must be the owner of the group.
         * @summary Add a video to a group
         * @param {GroupsVideosApiAddToGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addToGroup(requestParameters: GroupsVideosApiAddToGroupRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Video>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addToGroup(requestParameters.groupId, requestParameters.videoId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method returns every video from the specified group.
         * @summary Get all the videos in a group
         * @param {GroupsVideosApiGetAllGroupVideosRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllGroupVideos(requestParameters: GroupsVideosApiGetAllGroupVideosRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Video>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllGroupVideos(requestParameters.groupId, requestParameters.direction, requestParameters.filter, requestParameters.filterEmbeddable, requestParameters.page, requestParameters.perPage, requestParameters.query, requestParameters.sort, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method returns a single video from the specified group. You can use this method to determine whether the video belongs to the group.
         * @summary Get a specific video in a group
         * @param {GroupsVideosApiGetSingleVideoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSingleVideo(requestParameters: GroupsVideosApiGetSingleVideoRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Video>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSingleVideo(requestParameters.groupId, requestParameters.videoId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method removes a video from the specified group. The authenticated user must be the owner of the group.
         * @summary Remove a video from a group
         * @param {GroupsVideosApiRemoveFromGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeFromGroup(requestParameters: GroupsVideosApiRemoveFromGroupRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeFromGroup(requestParameters.groupId, requestParameters.videoId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GroupsVideosApi - factory interface
 * @export
 */
export const GroupsVideosApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupsVideosApiFp(configuration)
    return {
        /**
         * This method adds a video to the specified group. The authenticated user must be the owner of the group.
         * @summary Add a video to a group
         * @param {GroupsVideosApiAddToGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addToGroup(requestParameters: GroupsVideosApiAddToGroupRequest, options?: AxiosRequestConfig): AxiosPromise<Video> {
            return localVarFp.addToGroup(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method returns every video from the specified group.
         * @summary Get all the videos in a group
         * @param {GroupsVideosApiGetAllGroupVideosRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllGroupVideos(requestParameters: GroupsVideosApiGetAllGroupVideosRequest, options?: AxiosRequestConfig): AxiosPromise<Array<Video>> {
            return localVarFp.getAllGroupVideos(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method returns a single video from the specified group. You can use this method to determine whether the video belongs to the group.
         * @summary Get a specific video in a group
         * @param {GroupsVideosApiGetSingleVideoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSingleVideo(requestParameters: GroupsVideosApiGetSingleVideoRequest, options?: AxiosRequestConfig): AxiosPromise<Video> {
            return localVarFp.getSingleVideo(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method removes a video from the specified group. The authenticated user must be the owner of the group.
         * @summary Remove a video from a group
         * @param {GroupsVideosApiRemoveFromGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFromGroup(requestParameters: GroupsVideosApiRemoveFromGroupRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.removeFromGroup(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addToGroup operation in GroupsVideosApi.
 * @export
 * @interface GroupsVideosApiAddToGroupRequest
 */
export type GroupsVideosApiAddToGroupRequest = {
    
    /**
    * The ID of the group.
    * @type {number}
    * @memberof GroupsVideosApiAddToGroup
    */
    readonly groupId: number
    
    /**
    * The ID of the video.
    * @type {number}
    * @memberof GroupsVideosApiAddToGroup
    */
    readonly videoId: number
    
}

/**
 * Request parameters for getAllGroupVideos operation in GroupsVideosApi.
 * @export
 * @interface GroupsVideosApiGetAllGroupVideosRequest
 */
export type GroupsVideosApiGetAllGroupVideosRequest = {
    
    /**
    * The ID of the group.
    * @type {number}
    * @memberof GroupsVideosApiGetAllGroupVideos
    */
    readonly groupId: number
    
    /**
    * The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 
    * @type {'asc' | 'desc'}
    * @memberof GroupsVideosApiGetAllGroupVideos
    */
    readonly direction?: 'asc' | 'desc'
    
    /**
    * The attribute by which to filter the results.  Option descriptions:  * `embeddable` - Return embeddable videos. 
    * @type {'embeddable'}
    * @memberof GroupsVideosApiGetAllGroupVideos
    */
    readonly filter?: 'embeddable'
    
    /**
    * Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`.
    * @type {boolean}
    * @memberof GroupsVideosApiGetAllGroupVideos
    */
    readonly filterEmbeddable?: boolean
    
    /**
    * The page number of the results to show.
    * @type {number}
    * @memberof GroupsVideosApiGetAllGroupVideos
    */
    readonly page?: number
    
    /**
    * The number of items to show on each page of results, up to a maximum of 100.
    * @type {number}
    * @memberof GroupsVideosApiGetAllGroupVideos
    */
    readonly perPage?: number
    
    /**
    * The search query to use to filter the results.
    * @type {string}
    * @memberof GroupsVideosApiGetAllGroupVideos
    */
    readonly query?: string
    
    /**
    * The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `comments` - Sort the results by number of comments.  * `date` - Sort the results by creation date.  * `duration` - Sort the results by duration.  * `likes` - Sort the results by number of likes.  * `plays` - Sort the results by number of plays. 
    * @type {'alphabetical' | 'comments' | 'date' | 'duration' | 'likes' | 'plays'}
    * @memberof GroupsVideosApiGetAllGroupVideos
    */
    readonly sort?: 'alphabetical' | 'comments' | 'date' | 'duration' | 'likes' | 'plays'
    
}

/**
 * Request parameters for getSingleVideo operation in GroupsVideosApi.
 * @export
 * @interface GroupsVideosApiGetSingleVideoRequest
 */
export type GroupsVideosApiGetSingleVideoRequest = {
    
    /**
    * The ID of the group.
    * @type {number}
    * @memberof GroupsVideosApiGetSingleVideo
    */
    readonly groupId: number
    
    /**
    * The ID of the video.
    * @type {number}
    * @memberof GroupsVideosApiGetSingleVideo
    */
    readonly videoId: number
    
}

/**
 * Request parameters for removeFromGroup operation in GroupsVideosApi.
 * @export
 * @interface GroupsVideosApiRemoveFromGroupRequest
 */
export type GroupsVideosApiRemoveFromGroupRequest = {
    
    /**
    * The ID of the group.
    * @type {number}
    * @memberof GroupsVideosApiRemoveFromGroup
    */
    readonly groupId: number
    
    /**
    * The ID of the video.
    * @type {number}
    * @memberof GroupsVideosApiRemoveFromGroup
    */
    readonly videoId: number
    
}

/**
 * GroupsVideosApiGenerated - object-oriented interface
 * @export
 * @class GroupsVideosApiGenerated
 * @extends {BaseAPI}
 */
export class GroupsVideosApiGenerated extends BaseAPI {
    /**
     * This method adds a video to the specified group. The authenticated user must be the owner of the group.
     * @summary Add a video to a group
     * @param {GroupsVideosApiAddToGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsVideosApiGenerated
     */
    public addToGroup(requestParameters: GroupsVideosApiAddToGroupRequest, options?: AxiosRequestConfig) {
        return GroupsVideosApiFp(this.configuration).addToGroup(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method returns every video from the specified group.
     * @summary Get all the videos in a group
     * @param {GroupsVideosApiGetAllGroupVideosRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsVideosApiGenerated
     */
    public getAllGroupVideos(requestParameters: GroupsVideosApiGetAllGroupVideosRequest, options?: AxiosRequestConfig) {
        return GroupsVideosApiFp(this.configuration).getAllGroupVideos(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method returns a single video from the specified group. You can use this method to determine whether the video belongs to the group.
     * @summary Get a specific video in a group
     * @param {GroupsVideosApiGetSingleVideoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsVideosApiGenerated
     */
    public getSingleVideo(requestParameters: GroupsVideosApiGetSingleVideoRequest, options?: AxiosRequestConfig) {
        return GroupsVideosApiFp(this.configuration).getSingleVideo(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method removes a video from the specified group. The authenticated user must be the owner of the group.
     * @summary Remove a video from a group
     * @param {GroupsVideosApiRemoveFromGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsVideosApiGenerated
     */
    public removeFromGroup(requestParameters: GroupsVideosApiRemoveFromGroupRequest, options?: AxiosRequestConfig) {
        return GroupsVideosApiFp(this.configuration).removeFromGroup(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}