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
import { Group } from '../models';
// @ts-ignore
import { LegacyError } from '../models';
// @ts-ignore
import { User } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * GroupsUsersApi - axios parameter creator
 * @export
 */
export const GroupsUsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method determines whether the authenticated user belongs to the specified group.
         * @summary Check if a user has joined a group
         * @param {number} groupId The ID of the group.
         * @param {number} userId The ID of the user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkBelongGroup: async (groupId: number, userId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('checkBelongGroup', 'groupId', groupId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('checkBelongGroup', 'userId', userId)
            const localVarPath = `/users/{user_id}/groups/{group_id}`
                .replace(`{${"group_id"}}`, encodeURIComponent(String(groupId !== undefined ? groupId : `-group_id-`)))
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
                pathTemplate: '/users/{user_id}/groups/{group_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method determines whether the authenticated user belongs to the specified group.
         * @summary Check if a user has joined a group
         * @param {number} groupId The ID of the group.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkUserJoinedGroup: async (groupId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('checkUserJoinedGroup', 'groupId', groupId)
            const localVarPath = `/me/groups/{group_id}`
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/me/groups/{group_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method returns every user who belongs to the specified group.
         * @summary Get all the members of a group
         * @param {number} groupId The ID of the group.
         * @param {'asc' | 'desc'} [direction] The sort direction of the results.  Option descriptions:  * &#x60;asc&#x60; - Sort the results in ascending order.  * &#x60;desc&#x60; - Sort the results in descending order. 
         * @param {'moderators'} [filter] The attribute by which to filter the results.  Option descriptions:  * &#x60;moderators&#x60; - Return group moderators. 
         * @param {number} [page] The page number of the results to show.
         * @param {number} [perPage] The number of items to show on each page of results, up to a maximum of 100.
         * @param {string} [query] The search query to use to filter the results.
         * @param {'alphabetical' | 'date'} [sort] The way to sort the results.  Option descriptions:  * &#x60;alphabetical&#x60; - Sort the results alphabetically.  * &#x60;date&#x60; - Sort the results by creation date. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroupUsers: async (groupId: number, direction?: 'asc' | 'desc', filter?: 'moderators', page?: number, perPage?: number, query?: string, sort?: 'alphabetical' | 'date', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('getGroupUsers', 'groupId', groupId)
            const localVarPath = `/groups/{group_id}/users`
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
                pathTemplate: '/groups/{group_id}/users',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method returns every group to which the authenticated user belongs.
         * @summary Get all the groups that the user has joined
         * @param {'asc' | 'desc'} [direction] The sort direction of the results.  Option descriptions:  * &#x60;asc&#x60; - Sort the results in ascending order.  * &#x60;desc&#x60; - Sort the results in descending order. 
         * @param {'moderated'} [filter] The attribute by which to filter the results.  Option descriptions:  * &#x60;moderated&#x60; - Return moderated groups. 
         * @param {number} [page] The page number of the results to show.
         * @param {number} [perPage] The number of items to show on each page of results, up to a maximum of 100.
         * @param {string} [query] The search query to use to filter the results.
         * @param {'alphabetical' | 'date' | 'members' | 'videos'} [sort] The way to sort the results.  Option descriptions:  * &#x60;alphabetical&#x60; - Sort the results alphabetically.  * &#x60;date&#x60; - Sort the results by creation date.  * &#x60;members&#x60; - Sort the results by number of members.  * &#x60;videos&#x60; - Sort the results by number of videos. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserGroups: async (direction?: 'asc' | 'desc', filter?: 'moderated', page?: number, perPage?: number, query?: string, sort?: 'alphabetical' | 'date' | 'members' | 'videos', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/me/groups`;
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
                pathTemplate: '/me/groups',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method returns every group to which the authenticated user belongs.
         * @summary Get all the groups that the user has joined
         * @param {number} userId The ID of the user.
         * @param {'asc' | 'desc'} [direction] The sort direction of the results.  Option descriptions:  * &#x60;asc&#x60; - Sort the results in ascending order.  * &#x60;desc&#x60; - Sort the results in descending order. 
         * @param {'moderated'} [filter] The attribute by which to filter the results.  Option descriptions:  * &#x60;moderated&#x60; - Return moderated groups. 
         * @param {number} [page] The page number of the results to show.
         * @param {number} [perPage] The number of items to show on each page of results, up to a maximum of 100.
         * @param {string} [query] The search query to use to filter the results.
         * @param {'alphabetical' | 'date' | 'members' | 'videos'} [sort] The way to sort the results.  Option descriptions:  * &#x60;alphabetical&#x60; - Sort the results alphabetically.  * &#x60;date&#x60; - Sort the results by creation date.  * &#x60;members&#x60; - Sort the results by number of members.  * &#x60;videos&#x60; - Sort the results by number of videos. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserGroupsList: async (userId: number, direction?: 'asc' | 'desc', filter?: 'moderated', page?: number, perPage?: number, query?: string, sort?: 'alphabetical' | 'date' | 'members' | 'videos', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getUserGroupsList', 'userId', userId)
            const localVarPath = `/users/{user_id}/groups`
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
            if (direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }

            if (filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
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
                pathTemplate: '/users/{user_id}/groups',
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
 * GroupsUsersApi - functional programming interface
 * @export
 */
export const GroupsUsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupsUsersApiAxiosParamCreator(configuration)
    return {
        /**
         * This method determines whether the authenticated user belongs to the specified group.
         * @summary Check if a user has joined a group
         * @param {GroupsUsersApiCheckBelongGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkBelongGroup(requestParameters: GroupsUsersApiCheckBelongGroupRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkBelongGroup(requestParameters.groupId, requestParameters.userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method determines whether the authenticated user belongs to the specified group.
         * @summary Check if a user has joined a group
         * @param {GroupsUsersApiCheckUserJoinedGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkUserJoinedGroup(requestParameters: GroupsUsersApiCheckUserJoinedGroupRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkUserJoinedGroup(requestParameters.groupId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method returns every user who belongs to the specified group.
         * @summary Get all the members of a group
         * @param {GroupsUsersApiGetGroupUsersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroupUsers(requestParameters: GroupsUsersApiGetGroupUsersRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<User>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroupUsers(requestParameters.groupId, requestParameters.direction, requestParameters.filter, requestParameters.page, requestParameters.perPage, requestParameters.query, requestParameters.sort, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method returns every group to which the authenticated user belongs.
         * @summary Get all the groups that the user has joined
         * @param {GroupsUsersApiGetUserGroupsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserGroups(requestParameters: GroupsUsersApiGetUserGroupsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Group>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserGroups(requestParameters.direction, requestParameters.filter, requestParameters.page, requestParameters.perPage, requestParameters.query, requestParameters.sort, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method returns every group to which the authenticated user belongs.
         * @summary Get all the groups that the user has joined
         * @param {GroupsUsersApiGetUserGroupsListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserGroupsList(requestParameters: GroupsUsersApiGetUserGroupsListRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Group>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserGroupsList(requestParameters.userId, requestParameters.direction, requestParameters.filter, requestParameters.page, requestParameters.perPage, requestParameters.query, requestParameters.sort, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GroupsUsersApi - factory interface
 * @export
 */
export const GroupsUsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupsUsersApiFp(configuration)
    return {
        /**
         * This method determines whether the authenticated user belongs to the specified group.
         * @summary Check if a user has joined a group
         * @param {GroupsUsersApiCheckBelongGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkBelongGroup(requestParameters: GroupsUsersApiCheckBelongGroupRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.checkBelongGroup(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method determines whether the authenticated user belongs to the specified group.
         * @summary Check if a user has joined a group
         * @param {GroupsUsersApiCheckUserJoinedGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkUserJoinedGroup(requestParameters: GroupsUsersApiCheckUserJoinedGroupRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.checkUserJoinedGroup(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method returns every user who belongs to the specified group.
         * @summary Get all the members of a group
         * @param {GroupsUsersApiGetGroupUsersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroupUsers(requestParameters: GroupsUsersApiGetGroupUsersRequest, options?: AxiosRequestConfig): AxiosPromise<Array<User>> {
            return localVarFp.getGroupUsers(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method returns every group to which the authenticated user belongs.
         * @summary Get all the groups that the user has joined
         * @param {GroupsUsersApiGetUserGroupsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserGroups(requestParameters: GroupsUsersApiGetUserGroupsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<Group>> {
            return localVarFp.getUserGroups(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method returns every group to which the authenticated user belongs.
         * @summary Get all the groups that the user has joined
         * @param {GroupsUsersApiGetUserGroupsListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserGroupsList(requestParameters: GroupsUsersApiGetUserGroupsListRequest, options?: AxiosRequestConfig): AxiosPromise<Array<Group>> {
            return localVarFp.getUserGroupsList(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for checkBelongGroup operation in GroupsUsersApi.
 * @export
 * @interface GroupsUsersApiCheckBelongGroupRequest
 */
export type GroupsUsersApiCheckBelongGroupRequest = {
    
    /**
    * The ID of the group.
    * @type {number}
    * @memberof GroupsUsersApiCheckBelongGroup
    */
    readonly groupId: number
    
    /**
    * The ID of the user.
    * @type {number}
    * @memberof GroupsUsersApiCheckBelongGroup
    */
    readonly userId: number
    
}

/**
 * Request parameters for checkUserJoinedGroup operation in GroupsUsersApi.
 * @export
 * @interface GroupsUsersApiCheckUserJoinedGroupRequest
 */
export type GroupsUsersApiCheckUserJoinedGroupRequest = {
    
    /**
    * The ID of the group.
    * @type {number}
    * @memberof GroupsUsersApiCheckUserJoinedGroup
    */
    readonly groupId: number
    
}

/**
 * Request parameters for getGroupUsers operation in GroupsUsersApi.
 * @export
 * @interface GroupsUsersApiGetGroupUsersRequest
 */
export type GroupsUsersApiGetGroupUsersRequest = {
    
    /**
    * The ID of the group.
    * @type {number}
    * @memberof GroupsUsersApiGetGroupUsers
    */
    readonly groupId: number
    
    /**
    * The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 
    * @type {'asc' | 'desc'}
    * @memberof GroupsUsersApiGetGroupUsers
    */
    readonly direction?: 'asc' | 'desc'
    
    /**
    * The attribute by which to filter the results.  Option descriptions:  * `moderators` - Return group moderators. 
    * @type {'moderators'}
    * @memberof GroupsUsersApiGetGroupUsers
    */
    readonly filter?: 'moderators'
    
    /**
    * The page number of the results to show.
    * @type {number}
    * @memberof GroupsUsersApiGetGroupUsers
    */
    readonly page?: number
    
    /**
    * The number of items to show on each page of results, up to a maximum of 100.
    * @type {number}
    * @memberof GroupsUsersApiGetGroupUsers
    */
    readonly perPage?: number
    
    /**
    * The search query to use to filter the results.
    * @type {string}
    * @memberof GroupsUsersApiGetGroupUsers
    */
    readonly query?: string
    
    /**
    * The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by creation date. 
    * @type {'alphabetical' | 'date'}
    * @memberof GroupsUsersApiGetGroupUsers
    */
    readonly sort?: 'alphabetical' | 'date'
    
}

/**
 * Request parameters for getUserGroups operation in GroupsUsersApi.
 * @export
 * @interface GroupsUsersApiGetUserGroupsRequest
 */
export type GroupsUsersApiGetUserGroupsRequest = {
    
    /**
    * The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 
    * @type {'asc' | 'desc'}
    * @memberof GroupsUsersApiGetUserGroups
    */
    readonly direction?: 'asc' | 'desc'
    
    /**
    * The attribute by which to filter the results.  Option descriptions:  * `moderated` - Return moderated groups. 
    * @type {'moderated'}
    * @memberof GroupsUsersApiGetUserGroups
    */
    readonly filter?: 'moderated'
    
    /**
    * The page number of the results to show.
    * @type {number}
    * @memberof GroupsUsersApiGetUserGroups
    */
    readonly page?: number
    
    /**
    * The number of items to show on each page of results, up to a maximum of 100.
    * @type {number}
    * @memberof GroupsUsersApiGetUserGroups
    */
    readonly perPage?: number
    
    /**
    * The search query to use to filter the results.
    * @type {string}
    * @memberof GroupsUsersApiGetUserGroups
    */
    readonly query?: string
    
    /**
    * The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by creation date.  * `members` - Sort the results by number of members.  * `videos` - Sort the results by number of videos. 
    * @type {'alphabetical' | 'date' | 'members' | 'videos'}
    * @memberof GroupsUsersApiGetUserGroups
    */
    readonly sort?: 'alphabetical' | 'date' | 'members' | 'videos'
    
}

/**
 * Request parameters for getUserGroupsList operation in GroupsUsersApi.
 * @export
 * @interface GroupsUsersApiGetUserGroupsListRequest
 */
export type GroupsUsersApiGetUserGroupsListRequest = {
    
    /**
    * The ID of the user.
    * @type {number}
    * @memberof GroupsUsersApiGetUserGroupsList
    */
    readonly userId: number
    
    /**
    * The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 
    * @type {'asc' | 'desc'}
    * @memberof GroupsUsersApiGetUserGroupsList
    */
    readonly direction?: 'asc' | 'desc'
    
    /**
    * The attribute by which to filter the results.  Option descriptions:  * `moderated` - Return moderated groups. 
    * @type {'moderated'}
    * @memberof GroupsUsersApiGetUserGroupsList
    */
    readonly filter?: 'moderated'
    
    /**
    * The page number of the results to show.
    * @type {number}
    * @memberof GroupsUsersApiGetUserGroupsList
    */
    readonly page?: number
    
    /**
    * The number of items to show on each page of results, up to a maximum of 100.
    * @type {number}
    * @memberof GroupsUsersApiGetUserGroupsList
    */
    readonly perPage?: number
    
    /**
    * The search query to use to filter the results.
    * @type {string}
    * @memberof GroupsUsersApiGetUserGroupsList
    */
    readonly query?: string
    
    /**
    * The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by creation date.  * `members` - Sort the results by number of members.  * `videos` - Sort the results by number of videos. 
    * @type {'alphabetical' | 'date' | 'members' | 'videos'}
    * @memberof GroupsUsersApiGetUserGroupsList
    */
    readonly sort?: 'alphabetical' | 'date' | 'members' | 'videos'
    
}

/**
 * GroupsUsersApiGenerated - object-oriented interface
 * @export
 * @class GroupsUsersApiGenerated
 * @extends {BaseAPI}
 */
export class GroupsUsersApiGenerated extends BaseAPI {
    /**
     * This method determines whether the authenticated user belongs to the specified group.
     * @summary Check if a user has joined a group
     * @param {GroupsUsersApiCheckBelongGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsUsersApiGenerated
     */
    public checkBelongGroup(requestParameters: GroupsUsersApiCheckBelongGroupRequest, options?: AxiosRequestConfig) {
        return GroupsUsersApiFp(this.configuration).checkBelongGroup(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method determines whether the authenticated user belongs to the specified group.
     * @summary Check if a user has joined a group
     * @param {GroupsUsersApiCheckUserJoinedGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsUsersApiGenerated
     */
    public checkUserJoinedGroup(requestParameters: GroupsUsersApiCheckUserJoinedGroupRequest, options?: AxiosRequestConfig) {
        return GroupsUsersApiFp(this.configuration).checkUserJoinedGroup(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method returns every user who belongs to the specified group.
     * @summary Get all the members of a group
     * @param {GroupsUsersApiGetGroupUsersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsUsersApiGenerated
     */
    public getGroupUsers(requestParameters: GroupsUsersApiGetGroupUsersRequest, options?: AxiosRequestConfig) {
        return GroupsUsersApiFp(this.configuration).getGroupUsers(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method returns every group to which the authenticated user belongs.
     * @summary Get all the groups that the user has joined
     * @param {GroupsUsersApiGetUserGroupsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsUsersApiGenerated
     */
    public getUserGroups(requestParameters: GroupsUsersApiGetUserGroupsRequest = {}, options?: AxiosRequestConfig) {
        return GroupsUsersApiFp(this.configuration).getUserGroups(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method returns every group to which the authenticated user belongs.
     * @summary Get all the groups that the user has joined
     * @param {GroupsUsersApiGetUserGroupsListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsUsersApiGenerated
     */
    public getUserGroupsList(requestParameters: GroupsUsersApiGetUserGroupsListRequest, options?: AxiosRequestConfig) {
        return GroupsUsersApiFp(this.configuration).getUserGroupsList(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
