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
import { Tag } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TagsEssentialsApi - axios parameter creator
 * @export
 */
export const TagsEssentialsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method returns the specified tag.
         * @summary Get a tag
         * @param {string} word The tag to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tag: async (word: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'word' is not null or undefined
            assertParamExists('tag', 'word', word)
            const localVarPath = `/tags/{word}`
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
                pathTemplate: '/tags/{word}',
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
 * TagsEssentialsApi - functional programming interface
 * @export
 */
export const TagsEssentialsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TagsEssentialsApiAxiosParamCreator(configuration)
    return {
        /**
         * This method returns the specified tag.
         * @summary Get a tag
         * @param {TagsEssentialsApiTagRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tag(requestParameters: TagsEssentialsApiTagRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Tag>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tag(requestParameters.word, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TagsEssentialsApi - factory interface
 * @export
 */
export const TagsEssentialsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TagsEssentialsApiFp(configuration)
    return {
        /**
         * This method returns the specified tag.
         * @summary Get a tag
         * @param {TagsEssentialsApiTagRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tag(requestParameters: TagsEssentialsApiTagRequest, options?: AxiosRequestConfig): AxiosPromise<Tag> {
            return localVarFp.tag(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for tag operation in TagsEssentialsApi.
 * @export
 * @interface TagsEssentialsApiTagRequest
 */
export type TagsEssentialsApiTagRequest = {
    
    /**
    * The tag to return.
    * @type {string}
    * @memberof TagsEssentialsApiTag
    */
    readonly word: string
    
}

/**
 * TagsEssentialsApiGenerated - object-oriented interface
 * @export
 * @class TagsEssentialsApiGenerated
 * @extends {BaseAPI}
 */
export class TagsEssentialsApiGenerated extends BaseAPI {
    /**
     * This method returns the specified tag.
     * @summary Get a tag
     * @param {TagsEssentialsApiTagRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsEssentialsApiGenerated
     */
    public tag(requestParameters: TagsEssentialsApiTagRequest, options?: AxiosRequestConfig) {
        return TagsEssentialsApiFp(this.configuration).tag(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
