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
import { ChannelsPrivateChannelMembersPermitUserAccessRequest } from '../models';
// @ts-ignore
import { ModelError } from '../models';
// @ts-ignore
import { User } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ChannelsPrivateChannelMembersApi - axios parameter creator
 * @export
 */
export const ChannelsPrivateChannelMembersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method returns all the users who have access to the specified private channel. The authenticated user must be the owner of the channel.
         * @summary Get all the users who can access a private channel
         * @param {number} channelId The ID of the channel.
         * @param {'asc' | 'desc'} [direction] The sort direction of the results.  Option descriptions:  * &#x60;asc&#x60; - Sort the results in ascending order.  * &#x60;desc&#x60; - Sort the results in descending order. 
         * @param {number} [page] The page number of the results to show.
         * @param {number} [perPage] The number of items to show on each page of results, up to a maximum of 100.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAccessibleUsers: async (channelId: number, direction?: 'asc' | 'desc', page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'channelId' is not null or undefined
            assertParamExists('getAccessibleUsers', 'channelId', channelId)
            const localVarPath = `/channels/{channel_id}/privacy/users`
                .replace(`{${"channel_id"}}`, encodeURIComponent(String(channelId !== undefined ? channelId : `-channel_id-`)));
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
                pathTemplate: '/channels/{channel_id}/privacy/users',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method gives multiple users access to the specified private channel. The authenticated user must be the owner of the channel.
         * @summary Permit a list of users to access a private channel
         * @param {number} channelId The ID of the channel.
         * @param {ChannelsPrivateChannelMembersPermitUserAccessRequest} channelsPrivateChannelMembersPermitUserAccessRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        permitUserAccess: async (channelId: number, channelsPrivateChannelMembersPermitUserAccessRequest: ChannelsPrivateChannelMembersPermitUserAccessRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'channelId' is not null or undefined
            assertParamExists('permitUserAccess', 'channelId', channelId)
            // verify required parameter 'channelsPrivateChannelMembersPermitUserAccessRequest' is not null or undefined
            assertParamExists('permitUserAccess', 'channelsPrivateChannelMembersPermitUserAccessRequest', channelsPrivateChannelMembersPermitUserAccessRequest)
            const localVarPath = `/channels/{channel_id}/privacy/users`
                .replace(`{${"channel_id"}}`, encodeURIComponent(String(channelId !== undefined ? channelId : `-channel_id-`)));
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

    
            localVarHeaderParameter['Content-Type'] = 'application/vnd.vimeo.user+json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: channelsPrivateChannelMembersPermitUserAccessRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/channels/{channel_id}/privacy/users',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(channelsPrivateChannelMembersPermitUserAccessRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method gives a single user access to the specified private channel. The authenticated user must be the owner of the channel.
         * @summary Permit a specific user to access a private channel
         * @param {number} channelId The ID of the channel.
         * @param {number} userId The ID of the user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        permitUserAccess_1: async (channelId: number, userId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'channelId' is not null or undefined
            assertParamExists('permitUserAccess_1', 'channelId', channelId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('permitUserAccess_1', 'userId', userId)
            const localVarPath = `/channels/{channel_id}/privacy/users/{user_id}`
                .replace(`{${"channel_id"}}`, encodeURIComponent(String(channelId !== undefined ? channelId : `-channel_id-`)))
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId !== undefined ? userId : `-user_id-`)));
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
                pathTemplate: '/channels/{channel_id}/privacy/users/{user_id}',
                httpMethod: 'PUT'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method prevents a single user from being able to access the specified private channel. The authenticated user must be the owner of the channel.
         * @summary Restrict a user from accessing a private channel
         * @param {number} channelId The ID of the channel.
         * @param {number} userId The ID of the user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        restrictUserAccess: async (channelId: number, userId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'channelId' is not null or undefined
            assertParamExists('restrictUserAccess', 'channelId', channelId)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('restrictUserAccess', 'userId', userId)
            const localVarPath = `/channels/{channel_id}/privacy/users/{user_id}`
                .replace(`{${"channel_id"}}`, encodeURIComponent(String(channelId !== undefined ? channelId : `-channel_id-`)))
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
                pathTemplate: '/channels/{channel_id}/privacy/users/{user_id}',
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
 * ChannelsPrivateChannelMembersApi - functional programming interface
 * @export
 */
export const ChannelsPrivateChannelMembersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ChannelsPrivateChannelMembersApiAxiosParamCreator(configuration)
    return {
        /**
         * This method returns all the users who have access to the specified private channel. The authenticated user must be the owner of the channel.
         * @summary Get all the users who can access a private channel
         * @param {ChannelsPrivateChannelMembersApiGetAccessibleUsersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAccessibleUsers(requestParameters: ChannelsPrivateChannelMembersApiGetAccessibleUsersRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<User>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAccessibleUsers(requestParameters.channelId, requestParameters.direction, requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method gives multiple users access to the specified private channel. The authenticated user must be the owner of the channel.
         * @summary Permit a list of users to access a private channel
         * @param {ChannelsPrivateChannelMembersApiPermitUserAccessRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async permitUserAccess(requestParameters: ChannelsPrivateChannelMembersApiPermitUserAccessRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<User>>> {
            const channelsPrivateChannelMembersPermitUserAccessRequest: ChannelsPrivateChannelMembersPermitUserAccessRequest = {
                users: requestParameters.users
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.permitUserAccess(requestParameters.channelId, channelsPrivateChannelMembersPermitUserAccessRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method gives a single user access to the specified private channel. The authenticated user must be the owner of the channel.
         * @summary Permit a specific user to access a private channel
         * @param {ChannelsPrivateChannelMembersApiPermitUserAccess0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async permitUserAccess_1(requestParameters: ChannelsPrivateChannelMembersApiPermitUserAccess0Request, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.permitUserAccess_1(requestParameters.channelId, requestParameters.userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method prevents a single user from being able to access the specified private channel. The authenticated user must be the owner of the channel.
         * @summary Restrict a user from accessing a private channel
         * @param {ChannelsPrivateChannelMembersApiRestrictUserAccessRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async restrictUserAccess(requestParameters: ChannelsPrivateChannelMembersApiRestrictUserAccessRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.restrictUserAccess(requestParameters.channelId, requestParameters.userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ChannelsPrivateChannelMembersApi - factory interface
 * @export
 */
export const ChannelsPrivateChannelMembersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ChannelsPrivateChannelMembersApiFp(configuration)
    return {
        /**
         * This method returns all the users who have access to the specified private channel. The authenticated user must be the owner of the channel.
         * @summary Get all the users who can access a private channel
         * @param {ChannelsPrivateChannelMembersApiGetAccessibleUsersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAccessibleUsers(requestParameters: ChannelsPrivateChannelMembersApiGetAccessibleUsersRequest, options?: AxiosRequestConfig): AxiosPromise<Array<User>> {
            return localVarFp.getAccessibleUsers(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method gives multiple users access to the specified private channel. The authenticated user must be the owner of the channel.
         * @summary Permit a list of users to access a private channel
         * @param {ChannelsPrivateChannelMembersApiPermitUserAccessRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        permitUserAccess(requestParameters: ChannelsPrivateChannelMembersApiPermitUserAccessRequest, options?: AxiosRequestConfig): AxiosPromise<Array<User>> {
            return localVarFp.permitUserAccess(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method gives a single user access to the specified private channel. The authenticated user must be the owner of the channel.
         * @summary Permit a specific user to access a private channel
         * @param {ChannelsPrivateChannelMembersApiPermitUserAccess0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        permitUserAccess_1(requestParameters: ChannelsPrivateChannelMembersApiPermitUserAccess0Request, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.permitUserAccess_1(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method prevents a single user from being able to access the specified private channel. The authenticated user must be the owner of the channel.
         * @summary Restrict a user from accessing a private channel
         * @param {ChannelsPrivateChannelMembersApiRestrictUserAccessRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        restrictUserAccess(requestParameters: ChannelsPrivateChannelMembersApiRestrictUserAccessRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.restrictUserAccess(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getAccessibleUsers operation in ChannelsPrivateChannelMembersApi.
 * @export
 * @interface ChannelsPrivateChannelMembersApiGetAccessibleUsersRequest
 */
export type ChannelsPrivateChannelMembersApiGetAccessibleUsersRequest = {
    
    /**
    * The ID of the channel.
    * @type {number}
    * @memberof ChannelsPrivateChannelMembersApiGetAccessibleUsers
    */
    readonly channelId: number
    
    /**
    * The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 
    * @type {'asc' | 'desc'}
    * @memberof ChannelsPrivateChannelMembersApiGetAccessibleUsers
    */
    readonly direction?: 'asc' | 'desc'
    
    /**
    * The page number of the results to show.
    * @type {number}
    * @memberof ChannelsPrivateChannelMembersApiGetAccessibleUsers
    */
    readonly page?: number
    
    /**
    * The number of items to show on each page of results, up to a maximum of 100.
    * @type {number}
    * @memberof ChannelsPrivateChannelMembersApiGetAccessibleUsers
    */
    readonly perPage?: number
    
}

/**
 * Request parameters for permitUserAccess operation in ChannelsPrivateChannelMembersApi.
 * @export
 * @interface ChannelsPrivateChannelMembersApiPermitUserAccessRequest
 */
export type ChannelsPrivateChannelMembersApiPermitUserAccessRequest = {
    
    /**
    * The ID of the channel.
    * @type {number}
    * @memberof ChannelsPrivateChannelMembersApiPermitUserAccess
    */
    readonly channelId: number
    
} & ChannelsPrivateChannelMembersPermitUserAccessRequest

/**
 * Request parameters for permitUserAccess_1 operation in ChannelsPrivateChannelMembersApi.
 * @export
 * @interface ChannelsPrivateChannelMembersApiPermitUserAccess0Request
 */
export type ChannelsPrivateChannelMembersApiPermitUserAccess0Request = {
    
    /**
    * The ID of the channel.
    * @type {number}
    * @memberof ChannelsPrivateChannelMembersApiPermitUserAccess0
    */
    readonly channelId: number
    
    /**
    * The ID of the user.
    * @type {number}
    * @memberof ChannelsPrivateChannelMembersApiPermitUserAccess0
    */
    readonly userId: number
    
}

/**
 * Request parameters for restrictUserAccess operation in ChannelsPrivateChannelMembersApi.
 * @export
 * @interface ChannelsPrivateChannelMembersApiRestrictUserAccessRequest
 */
export type ChannelsPrivateChannelMembersApiRestrictUserAccessRequest = {
    
    /**
    * The ID of the channel.
    * @type {number}
    * @memberof ChannelsPrivateChannelMembersApiRestrictUserAccess
    */
    readonly channelId: number
    
    /**
    * The ID of the user.
    * @type {number}
    * @memberof ChannelsPrivateChannelMembersApiRestrictUserAccess
    */
    readonly userId: number
    
}

/**
 * ChannelsPrivateChannelMembersApiGenerated - object-oriented interface
 * @export
 * @class ChannelsPrivateChannelMembersApiGenerated
 * @extends {BaseAPI}
 */
export class ChannelsPrivateChannelMembersApiGenerated extends BaseAPI {
    /**
     * This method returns all the users who have access to the specified private channel. The authenticated user must be the owner of the channel.
     * @summary Get all the users who can access a private channel
     * @param {ChannelsPrivateChannelMembersApiGetAccessibleUsersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsPrivateChannelMembersApiGenerated
     */
    public getAccessibleUsers(requestParameters: ChannelsPrivateChannelMembersApiGetAccessibleUsersRequest, options?: AxiosRequestConfig) {
        return ChannelsPrivateChannelMembersApiFp(this.configuration).getAccessibleUsers(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method gives multiple users access to the specified private channel. The authenticated user must be the owner of the channel.
     * @summary Permit a list of users to access a private channel
     * @param {ChannelsPrivateChannelMembersApiPermitUserAccessRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsPrivateChannelMembersApiGenerated
     */
    public permitUserAccess(requestParameters: ChannelsPrivateChannelMembersApiPermitUserAccessRequest, options?: AxiosRequestConfig) {
        return ChannelsPrivateChannelMembersApiFp(this.configuration).permitUserAccess(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method gives a single user access to the specified private channel. The authenticated user must be the owner of the channel.
     * @summary Permit a specific user to access a private channel
     * @param {ChannelsPrivateChannelMembersApiPermitUserAccess0Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsPrivateChannelMembersApiGenerated
     */
    public permitUserAccess_1(requestParameters: ChannelsPrivateChannelMembersApiPermitUserAccess0Request, options?: AxiosRequestConfig) {
        return ChannelsPrivateChannelMembersApiFp(this.configuration).permitUserAccess_1(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method prevents a single user from being able to access the specified private channel. The authenticated user must be the owner of the channel.
     * @summary Restrict a user from accessing a private channel
     * @param {ChannelsPrivateChannelMembersApiRestrictUserAccessRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsPrivateChannelMembersApiGenerated
     */
    public restrictUserAccess(requestParameters: ChannelsPrivateChannelMembersApiRestrictUserAccessRequest, options?: AxiosRequestConfig) {
        return ChannelsPrivateChannelMembersApiFp(this.configuration).restrictUserAccess(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}