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
import { ChannelsTagsAddMultipleTagsToChannelRequest } from '../models';
// @ts-ignore
import { LegacyError } from '../models';
// @ts-ignore
import { ModelError } from '../models';
// @ts-ignore
import { Tag } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ChannelsTagsApi - axios parameter creator
 * @export
 */
export const ChannelsTagsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method adds multiple tags to the specified channel. Include the tags as a JSON array in the body of the request using the **tag** field, like this: `[{ \"tag\": \"funny\" }, { \"tag\": \"concert\" }]`. The authenticated user must be the owner of the channel. For more information on batch requests like this one, see [Using Common Formats and Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests).
         * @summary Add a list of tags to a channel
         * @param {number} channelId The ID of the channel.
         * @param {ChannelsTagsAddMultipleTagsToChannelRequest} channelsTagsAddMultipleTagsToChannelRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addMultipleTagsToChannel: async (channelId: number, channelsTagsAddMultipleTagsToChannelRequest: ChannelsTagsAddMultipleTagsToChannelRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'channelId' is not null or undefined
            assertParamExists('addMultipleTagsToChannel', 'channelId', channelId)
            // verify required parameter 'channelsTagsAddMultipleTagsToChannelRequest' is not null or undefined
            assertParamExists('addMultipleTagsToChannel', 'channelsTagsAddMultipleTagsToChannelRequest', channelsTagsAddMultipleTagsToChannelRequest)
            const localVarPath = `/channels/{channel_id}/tags`
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

    
            localVarHeaderParameter['Content-Type'] = 'application/vnd.vimeo.tag+json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: channelsTagsAddMultipleTagsToChannelRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/channels/{channel_id}/tags',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(channelsTagsAddMultipleTagsToChannelRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method adds a single tag to the specified channel. The authenticated user must be the owner of the channel.
         * @summary Add a specific tag to a channel
         * @param {number} channelId The ID of the channel.
         * @param {string} word The word to use as the tag.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addTagToChannel: async (channelId: number, word: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'channelId' is not null or undefined
            assertParamExists('addTagToChannel', 'channelId', channelId)
            // verify required parameter 'word' is not null or undefined
            assertParamExists('addTagToChannel', 'word', word)
            const localVarPath = `/channels/{channel_id}/tags/{word}`
                .replace(`{${"channel_id"}}`, encodeURIComponent(String(channelId !== undefined ? channelId : `-channel_id-`)))
                .replace(`{${"word"}}`, encodeURIComponent(String(word !== undefined ? word : `-word-`)));
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
                pathTemplate: '/channels/{channel_id}/tags/{word}',
                httpMethod: 'PUT'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method determines whether a tag has been added to the specified channel.
         * @summary Check if a tag has been added to a channel
         * @param {number} channelId The ID of the channel.
         * @param {string} word The word to use as the tag.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkIfTagAddedToChannel: async (channelId: number, word: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'channelId' is not null or undefined
            assertParamExists('checkIfTagAddedToChannel', 'channelId', channelId)
            // verify required parameter 'word' is not null or undefined
            assertParamExists('checkIfTagAddedToChannel', 'word', word)
            const localVarPath = `/channels/{channel_id}/tags/{word}`
                .replace(`{${"channel_id"}}`, encodeURIComponent(String(channelId !== undefined ? channelId : `-channel_id-`)))
                .replace(`{${"word"}}`, encodeURIComponent(String(word !== undefined ? word : `-word-`)));
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
                pathTemplate: '/channels/{channel_id}/tags/{word}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method returns every tag that has been added to the specified channel.
         * @summary Get all the tags that have been added to a channel
         * @param {number} channelId The ID of the channel.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllChannelTags: async (channelId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'channelId' is not null or undefined
            assertParamExists('getAllChannelTags', 'channelId', channelId)
            const localVarPath = `/channels/{channel_id}/tags`
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/channels/{channel_id}/tags',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method removes a single tag from the specified channel. The authenticated user must be the owner of the channel.
         * @summary Remove a tag from a channel
         * @param {number} channelId The ID of the channel.
         * @param {string} word The word to use as the tag.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeTagFromChannel: async (channelId: number, word: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'channelId' is not null or undefined
            assertParamExists('removeTagFromChannel', 'channelId', channelId)
            // verify required parameter 'word' is not null or undefined
            assertParamExists('removeTagFromChannel', 'word', word)
            const localVarPath = `/channels/{channel_id}/tags/{word}`
                .replace(`{${"channel_id"}}`, encodeURIComponent(String(channelId !== undefined ? channelId : `-channel_id-`)))
                .replace(`{${"word"}}`, encodeURIComponent(String(word !== undefined ? word : `-word-`)));
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
                pathTemplate: '/channels/{channel_id}/tags/{word}',
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
 * ChannelsTagsApi - functional programming interface
 * @export
 */
export const ChannelsTagsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ChannelsTagsApiAxiosParamCreator(configuration)
    return {
        /**
         * This method adds multiple tags to the specified channel. Include the tags as a JSON array in the body of the request using the **tag** field, like this: `[{ \"tag\": \"funny\" }, { \"tag\": \"concert\" }]`. The authenticated user must be the owner of the channel. For more information on batch requests like this one, see [Using Common Formats and Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests).
         * @summary Add a list of tags to a channel
         * @param {ChannelsTagsApiAddMultipleTagsToChannelRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addMultipleTagsToChannel(requestParameters: ChannelsTagsApiAddMultipleTagsToChannelRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Tag>>> {
            const channelsTagsAddMultipleTagsToChannelRequest: ChannelsTagsAddMultipleTagsToChannelRequest = {
                tag: requestParameters.tag
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.addMultipleTagsToChannel(requestParameters.channelId, channelsTagsAddMultipleTagsToChannelRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method adds a single tag to the specified channel. The authenticated user must be the owner of the channel.
         * @summary Add a specific tag to a channel
         * @param {ChannelsTagsApiAddTagToChannelRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addTagToChannel(requestParameters: ChannelsTagsApiAddTagToChannelRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addTagToChannel(requestParameters.channelId, requestParameters.word, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method determines whether a tag has been added to the specified channel.
         * @summary Check if a tag has been added to a channel
         * @param {ChannelsTagsApiCheckIfTagAddedToChannelRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkIfTagAddedToChannel(requestParameters: ChannelsTagsApiCheckIfTagAddedToChannelRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkIfTagAddedToChannel(requestParameters.channelId, requestParameters.word, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method returns every tag that has been added to the specified channel.
         * @summary Get all the tags that have been added to a channel
         * @param {ChannelsTagsApiGetAllChannelTagsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllChannelTags(requestParameters: ChannelsTagsApiGetAllChannelTagsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Tag>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllChannelTags(requestParameters.channelId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method removes a single tag from the specified channel. The authenticated user must be the owner of the channel.
         * @summary Remove a tag from a channel
         * @param {ChannelsTagsApiRemoveTagFromChannelRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeTagFromChannel(requestParameters: ChannelsTagsApiRemoveTagFromChannelRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeTagFromChannel(requestParameters.channelId, requestParameters.word, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ChannelsTagsApi - factory interface
 * @export
 */
export const ChannelsTagsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ChannelsTagsApiFp(configuration)
    return {
        /**
         * This method adds multiple tags to the specified channel. Include the tags as a JSON array in the body of the request using the **tag** field, like this: `[{ \"tag\": \"funny\" }, { \"tag\": \"concert\" }]`. The authenticated user must be the owner of the channel. For more information on batch requests like this one, see [Using Common Formats and Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests).
         * @summary Add a list of tags to a channel
         * @param {ChannelsTagsApiAddMultipleTagsToChannelRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addMultipleTagsToChannel(requestParameters: ChannelsTagsApiAddMultipleTagsToChannelRequest, options?: AxiosRequestConfig): AxiosPromise<Array<Tag>> {
            return localVarFp.addMultipleTagsToChannel(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method adds a single tag to the specified channel. The authenticated user must be the owner of the channel.
         * @summary Add a specific tag to a channel
         * @param {ChannelsTagsApiAddTagToChannelRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addTagToChannel(requestParameters: ChannelsTagsApiAddTagToChannelRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.addTagToChannel(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method determines whether a tag has been added to the specified channel.
         * @summary Check if a tag has been added to a channel
         * @param {ChannelsTagsApiCheckIfTagAddedToChannelRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkIfTagAddedToChannel(requestParameters: ChannelsTagsApiCheckIfTagAddedToChannelRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.checkIfTagAddedToChannel(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method returns every tag that has been added to the specified channel.
         * @summary Get all the tags that have been added to a channel
         * @param {ChannelsTagsApiGetAllChannelTagsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllChannelTags(requestParameters: ChannelsTagsApiGetAllChannelTagsRequest, options?: AxiosRequestConfig): AxiosPromise<Array<Tag>> {
            return localVarFp.getAllChannelTags(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method removes a single tag from the specified channel. The authenticated user must be the owner of the channel.
         * @summary Remove a tag from a channel
         * @param {ChannelsTagsApiRemoveTagFromChannelRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeTagFromChannel(requestParameters: ChannelsTagsApiRemoveTagFromChannelRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.removeTagFromChannel(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addMultipleTagsToChannel operation in ChannelsTagsApi.
 * @export
 * @interface ChannelsTagsApiAddMultipleTagsToChannelRequest
 */
export type ChannelsTagsApiAddMultipleTagsToChannelRequest = {
    
    /**
    * The ID of the channel.
    * @type {number}
    * @memberof ChannelsTagsApiAddMultipleTagsToChannel
    */
    readonly channelId: number
    
} & ChannelsTagsAddMultipleTagsToChannelRequest

/**
 * Request parameters for addTagToChannel operation in ChannelsTagsApi.
 * @export
 * @interface ChannelsTagsApiAddTagToChannelRequest
 */
export type ChannelsTagsApiAddTagToChannelRequest = {
    
    /**
    * The ID of the channel.
    * @type {number}
    * @memberof ChannelsTagsApiAddTagToChannel
    */
    readonly channelId: number
    
    /**
    * The word to use as the tag.
    * @type {string}
    * @memberof ChannelsTagsApiAddTagToChannel
    */
    readonly word: string
    
}

/**
 * Request parameters for checkIfTagAddedToChannel operation in ChannelsTagsApi.
 * @export
 * @interface ChannelsTagsApiCheckIfTagAddedToChannelRequest
 */
export type ChannelsTagsApiCheckIfTagAddedToChannelRequest = {
    
    /**
    * The ID of the channel.
    * @type {number}
    * @memberof ChannelsTagsApiCheckIfTagAddedToChannel
    */
    readonly channelId: number
    
    /**
    * The word to use as the tag.
    * @type {string}
    * @memberof ChannelsTagsApiCheckIfTagAddedToChannel
    */
    readonly word: string
    
}

/**
 * Request parameters for getAllChannelTags operation in ChannelsTagsApi.
 * @export
 * @interface ChannelsTagsApiGetAllChannelTagsRequest
 */
export type ChannelsTagsApiGetAllChannelTagsRequest = {
    
    /**
    * The ID of the channel.
    * @type {number}
    * @memberof ChannelsTagsApiGetAllChannelTags
    */
    readonly channelId: number
    
}

/**
 * Request parameters for removeTagFromChannel operation in ChannelsTagsApi.
 * @export
 * @interface ChannelsTagsApiRemoveTagFromChannelRequest
 */
export type ChannelsTagsApiRemoveTagFromChannelRequest = {
    
    /**
    * The ID of the channel.
    * @type {number}
    * @memberof ChannelsTagsApiRemoveTagFromChannel
    */
    readonly channelId: number
    
    /**
    * The word to use as the tag.
    * @type {string}
    * @memberof ChannelsTagsApiRemoveTagFromChannel
    */
    readonly word: string
    
}

/**
 * ChannelsTagsApiGenerated - object-oriented interface
 * @export
 * @class ChannelsTagsApiGenerated
 * @extends {BaseAPI}
 */
export class ChannelsTagsApiGenerated extends BaseAPI {
    /**
     * This method adds multiple tags to the specified channel. Include the tags as a JSON array in the body of the request using the **tag** field, like this: `[{ \"tag\": \"funny\" }, { \"tag\": \"concert\" }]`. The authenticated user must be the owner of the channel. For more information on batch requests like this one, see [Using Common Formats and Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests).
     * @summary Add a list of tags to a channel
     * @param {ChannelsTagsApiAddMultipleTagsToChannelRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsTagsApiGenerated
     */
    public addMultipleTagsToChannel(requestParameters: ChannelsTagsApiAddMultipleTagsToChannelRequest, options?: AxiosRequestConfig) {
        return ChannelsTagsApiFp(this.configuration).addMultipleTagsToChannel(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method adds a single tag to the specified channel. The authenticated user must be the owner of the channel.
     * @summary Add a specific tag to a channel
     * @param {ChannelsTagsApiAddTagToChannelRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsTagsApiGenerated
     */
    public addTagToChannel(requestParameters: ChannelsTagsApiAddTagToChannelRequest, options?: AxiosRequestConfig) {
        return ChannelsTagsApiFp(this.configuration).addTagToChannel(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method determines whether a tag has been added to the specified channel.
     * @summary Check if a tag has been added to a channel
     * @param {ChannelsTagsApiCheckIfTagAddedToChannelRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsTagsApiGenerated
     */
    public checkIfTagAddedToChannel(requestParameters: ChannelsTagsApiCheckIfTagAddedToChannelRequest, options?: AxiosRequestConfig) {
        return ChannelsTagsApiFp(this.configuration).checkIfTagAddedToChannel(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method returns every tag that has been added to the specified channel.
     * @summary Get all the tags that have been added to a channel
     * @param {ChannelsTagsApiGetAllChannelTagsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsTagsApiGenerated
     */
    public getAllChannelTags(requestParameters: ChannelsTagsApiGetAllChannelTagsRequest, options?: AxiosRequestConfig) {
        return ChannelsTagsApiFp(this.configuration).getAllChannelTags(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method removes a single tag from the specified channel. The authenticated user must be the owner of the channel.
     * @summary Remove a tag from a channel
     * @param {ChannelsTagsApiRemoveTagFromChannelRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsTagsApiGenerated
     */
    public removeTagFromChannel(requestParameters: ChannelsTagsApiRemoveTagFromChannelRequest, options?: AxiosRequestConfig) {
        return ChannelsTagsApiFp(this.configuration).removeTagFromChannel(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
