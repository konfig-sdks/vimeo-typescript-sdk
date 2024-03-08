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
import { Activity31 } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * UsersFeedsApi - axios parameter creator
 * @export
 */
export const UsersFeedsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method returns every video in the authenticated user\'s feed.
         * @summary Get all the videos in the user\'s feed
         * @param {number} userId The ID of the user.
         * @param {string} [offset] The pagination offset. We recommend that you use the pagination links in the feed response instead of working with this value directly. For more details, see our [pagination documentation](https://developer.vimeo.com/api/common-formats#using-the-pagination-parameter).
         * @param {number} [page] The page number of the results to show.
         * @param {number} [perPage] The number of items to show on each page of results, up to a maximum of 100.
         * @param {'appears' | 'category_featured' | 'channel' | 'facebook_feed' | 'following' | 'group' | 'likes' | 'ondemand_publish' | 'share' | 'tagged_with' | 'twitter_timeline' | 'uploads'} [type] The feed type.  Option descriptions:  * &#x60;appears&#x60; - Videos in which the user appears.  * &#x60;category_featured&#x60; - Featured videos.  * &#x60;channel&#x60; - Channel videos.  * &#x60;facebook_feed&#x60; - Videos from the user\&#39;s Facebook feed.  * &#x60;following&#x60; - Videos from accounts that the user follows.  * &#x60;group&#x60; - Group videos.  * &#x60;likes&#x60; - Liked videos.  * &#x60;ondemand_publish&#x60; - On Demand videos.  * &#x60;share&#x60; - Shared videos.  * &#x60;tagged_with&#x60; - Tagged videos.  * &#x60;twitter_timeline&#x60; - Videos from the user\&#39;s Twitter timeline.  * &#x60;uploads&#x60; - Uploaded videos. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        feed: async (userId: number, offset?: string, page?: number, perPage?: number, type?: 'appears' | 'category_featured' | 'channel' | 'facebook_feed' | 'following' | 'group' | 'likes' | 'ondemand_publish' | 'share' | 'tagged_with' | 'twitter_timeline' | 'uploads', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('feed', 'userId', userId)
            const localVarPath = `/users/{user_id}/feed`
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["private"], configuration)
            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["private"], configuration)
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/users/{user_id}/feed',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method returns every video in the authenticated user\'s feed.
         * @summary Get all the videos in the user\'s feed
         * @param {string} [offset] The pagination offset. We recommend that you use the pagination links in the feed response instead of working with this value directly. For more details, see our [pagination documentation](https://developer.vimeo.com/api/common-formats#using-the-pagination-parameter).
         * @param {number} [page] The page number of the results to show.
         * @param {number} [perPage] The number of items to show on each page of results, up to a maximum of 100.
         * @param {'appears' | 'category_featured' | 'channel' | 'facebook_feed' | 'following' | 'group' | 'likes' | 'ondemand_publish' | 'share' | 'tagged_with' | 'twitter_timeline' | 'uploads'} [type] The feed type.  Option descriptions:  * &#x60;appears&#x60; - Videos in which the user appears.  * &#x60;category_featured&#x60; - Featured videos.  * &#x60;channel&#x60; - Channel videos.  * &#x60;facebook_feed&#x60; - Videos from the user\&#39;s Facebook feed.  * &#x60;following&#x60; - Videos from accounts that the user follows.  * &#x60;group&#x60; - Group videos.  * &#x60;likes&#x60; - Liked videos.  * &#x60;ondemand_publish&#x60; - On Demand videos.  * &#x60;share&#x60; - Shared videos.  * &#x60;tagged_with&#x60; - Tagged videos.  * &#x60;twitter_timeline&#x60; - Videos from the user\&#39;s Twitter timeline.  * &#x60;uploads&#x60; - Uploaded videos. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserFeedVideos: async (offset?: string, page?: number, perPage?: number, type?: 'appears' | 'category_featured' | 'channel' | 'facebook_feed' | 'following' | 'group' | 'likes' | 'ondemand_publish' | 'share' | 'tagged_with' | 'twitter_timeline' | 'uploads', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/me/feed`;
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["private"], configuration)
            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", ["private"], configuration)
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/me/feed',
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
 * UsersFeedsApi - functional programming interface
 * @export
 */
export const UsersFeedsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersFeedsApiAxiosParamCreator(configuration)
    return {
        /**
         * This method returns every video in the authenticated user\'s feed.
         * @summary Get all the videos in the user\'s feed
         * @param {UsersFeedsApiFeedRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async feed(requestParameters: UsersFeedsApiFeedRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Activity31>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.feed(requestParameters.userId, requestParameters.offset, requestParameters.page, requestParameters.perPage, requestParameters.type, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method returns every video in the authenticated user\'s feed.
         * @summary Get all the videos in the user\'s feed
         * @param {UsersFeedsApiGetUserFeedVideosRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserFeedVideos(requestParameters: UsersFeedsApiGetUserFeedVideosRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Activity31>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserFeedVideos(requestParameters.offset, requestParameters.page, requestParameters.perPage, requestParameters.type, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersFeedsApi - factory interface
 * @export
 */
export const UsersFeedsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersFeedsApiFp(configuration)
    return {
        /**
         * This method returns every video in the authenticated user\'s feed.
         * @summary Get all the videos in the user\'s feed
         * @param {UsersFeedsApiFeedRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        feed(requestParameters: UsersFeedsApiFeedRequest, options?: AxiosRequestConfig): AxiosPromise<Array<Activity31>> {
            return localVarFp.feed(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method returns every video in the authenticated user\'s feed.
         * @summary Get all the videos in the user\'s feed
         * @param {UsersFeedsApiGetUserFeedVideosRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserFeedVideos(requestParameters: UsersFeedsApiGetUserFeedVideosRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<Activity31>> {
            return localVarFp.getUserFeedVideos(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for feed operation in UsersFeedsApi.
 * @export
 * @interface UsersFeedsApiFeedRequest
 */
export type UsersFeedsApiFeedRequest = {
    
    /**
    * The ID of the user.
    * @type {number}
    * @memberof UsersFeedsApiFeed
    */
    readonly userId: number
    
    /**
    * The pagination offset. We recommend that you use the pagination links in the feed response instead of working with this value directly. For more details, see our [pagination documentation](https://developer.vimeo.com/api/common-formats#using-the-pagination-parameter).
    * @type {string}
    * @memberof UsersFeedsApiFeed
    */
    readonly offset?: string
    
    /**
    * The page number of the results to show.
    * @type {number}
    * @memberof UsersFeedsApiFeed
    */
    readonly page?: number
    
    /**
    * The number of items to show on each page of results, up to a maximum of 100.
    * @type {number}
    * @memberof UsersFeedsApiFeed
    */
    readonly perPage?: number
    
    /**
    * The feed type.  Option descriptions:  * `appears` - Videos in which the user appears.  * `category_featured` - Featured videos.  * `channel` - Channel videos.  * `facebook_feed` - Videos from the user\'s Facebook feed.  * `following` - Videos from accounts that the user follows.  * `group` - Group videos.  * `likes` - Liked videos.  * `ondemand_publish` - On Demand videos.  * `share` - Shared videos.  * `tagged_with` - Tagged videos.  * `twitter_timeline` - Videos from the user\'s Twitter timeline.  * `uploads` - Uploaded videos. 
    * @type {'appears' | 'category_featured' | 'channel' | 'facebook_feed' | 'following' | 'group' | 'likes' | 'ondemand_publish' | 'share' | 'tagged_with' | 'twitter_timeline' | 'uploads'}
    * @memberof UsersFeedsApiFeed
    */
    readonly type?: 'appears' | 'category_featured' | 'channel' | 'facebook_feed' | 'following' | 'group' | 'likes' | 'ondemand_publish' | 'share' | 'tagged_with' | 'twitter_timeline' | 'uploads'
    
}

/**
 * Request parameters for getUserFeedVideos operation in UsersFeedsApi.
 * @export
 * @interface UsersFeedsApiGetUserFeedVideosRequest
 */
export type UsersFeedsApiGetUserFeedVideosRequest = {
    
    /**
    * The pagination offset. We recommend that you use the pagination links in the feed response instead of working with this value directly. For more details, see our [pagination documentation](https://developer.vimeo.com/api/common-formats#using-the-pagination-parameter).
    * @type {string}
    * @memberof UsersFeedsApiGetUserFeedVideos
    */
    readonly offset?: string
    
    /**
    * The page number of the results to show.
    * @type {number}
    * @memberof UsersFeedsApiGetUserFeedVideos
    */
    readonly page?: number
    
    /**
    * The number of items to show on each page of results, up to a maximum of 100.
    * @type {number}
    * @memberof UsersFeedsApiGetUserFeedVideos
    */
    readonly perPage?: number
    
    /**
    * The feed type.  Option descriptions:  * `appears` - Videos in which the user appears.  * `category_featured` - Featured videos.  * `channel` - Channel videos.  * `facebook_feed` - Videos from the user\'s Facebook feed.  * `following` - Videos from accounts that the user follows.  * `group` - Group videos.  * `likes` - Liked videos.  * `ondemand_publish` - On Demand videos.  * `share` - Shared videos.  * `tagged_with` - Tagged videos.  * `twitter_timeline` - Videos from the user\'s Twitter timeline.  * `uploads` - Uploaded videos. 
    * @type {'appears' | 'category_featured' | 'channel' | 'facebook_feed' | 'following' | 'group' | 'likes' | 'ondemand_publish' | 'share' | 'tagged_with' | 'twitter_timeline' | 'uploads'}
    * @memberof UsersFeedsApiGetUserFeedVideos
    */
    readonly type?: 'appears' | 'category_featured' | 'channel' | 'facebook_feed' | 'following' | 'group' | 'likes' | 'ondemand_publish' | 'share' | 'tagged_with' | 'twitter_timeline' | 'uploads'
    
}

/**
 * UsersFeedsApiGenerated - object-oriented interface
 * @export
 * @class UsersFeedsApiGenerated
 * @extends {BaseAPI}
 */
export class UsersFeedsApiGenerated extends BaseAPI {
    /**
     * This method returns every video in the authenticated user\'s feed.
     * @summary Get all the videos in the user\'s feed
     * @param {UsersFeedsApiFeedRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersFeedsApiGenerated
     */
    public feed(requestParameters: UsersFeedsApiFeedRequest, options?: AxiosRequestConfig) {
        return UsersFeedsApiFp(this.configuration).feed(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method returns every video in the authenticated user\'s feed.
     * @summary Get all the videos in the user\'s feed
     * @param {UsersFeedsApiGetUserFeedVideosRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersFeedsApiGenerated
     */
    public getUserFeedVideos(requestParameters: UsersFeedsApiGetUserFeedVideosRequest = {}, options?: AxiosRequestConfig) {
        return UsersFeedsApiFp(this.configuration).getUserFeedVideos(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
