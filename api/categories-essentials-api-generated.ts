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
import { Category } from '../models';
// @ts-ignore
import { LegacyError } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CategoriesEssentialsApi - axios parameter creator
 * @export
 */
export const CategoriesEssentialsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method returns every available category.
         * @summary Get all categories
         * @param {'asc' | 'desc'} [direction] The sort direction of the results.  Option descriptions:  * &#x60;asc&#x60; - Sort the results in ascending order.  * &#x60;desc&#x60; - Sort the results in descending order. 
         * @param {number} [page] The page number of the results to show.
         * @param {number} [perPage] The number of items to show on each page of results, up to a maximum of 100.
         * @param {'last_video_featured_time' | 'name'} [sort] The way to sort the results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categories: async (direction?: 'asc' | 'desc', page?: number, perPage?: number, sort?: 'last_video_featured_time' | 'name', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/categories`;
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
                pathTemplate: '/categories',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method returns the specified category.
         * @summary Get a specific category
         * @param {string} category The name of the category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        category: async (category: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'category' is not null or undefined
            assertParamExists('category', 'category', category)
            const localVarPath = `/categories/{category}`
                .replace(`{${"category"}}`, encodeURIComponent(String(category !== undefined ? category : `-category-`)));
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
                pathTemplate: '/categories/{category}',
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
 * CategoriesEssentialsApi - functional programming interface
 * @export
 */
export const CategoriesEssentialsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CategoriesEssentialsApiAxiosParamCreator(configuration)
    return {
        /**
         * This method returns every available category.
         * @summary Get all categories
         * @param {CategoriesEssentialsApiCategoriesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async categories(requestParameters: CategoriesEssentialsApiCategoriesRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Category>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.categories(requestParameters.direction, requestParameters.page, requestParameters.perPage, requestParameters.sort, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method returns the specified category.
         * @summary Get a specific category
         * @param {CategoriesEssentialsApiCategoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async category(requestParameters: CategoriesEssentialsApiCategoryRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Category>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.category(requestParameters.category, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CategoriesEssentialsApi - factory interface
 * @export
 */
export const CategoriesEssentialsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CategoriesEssentialsApiFp(configuration)
    return {
        /**
         * This method returns every available category.
         * @summary Get all categories
         * @param {CategoriesEssentialsApiCategoriesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categories(requestParameters: CategoriesEssentialsApiCategoriesRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<Category>> {
            return localVarFp.categories(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This method returns the specified category.
         * @summary Get a specific category
         * @param {CategoriesEssentialsApiCategoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        category(requestParameters: CategoriesEssentialsApiCategoryRequest, options?: AxiosRequestConfig): AxiosPromise<Category> {
            return localVarFp.category(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for categories operation in CategoriesEssentialsApi.
 * @export
 * @interface CategoriesEssentialsApiCategoriesRequest
 */
export type CategoriesEssentialsApiCategoriesRequest = {
    
    /**
    * The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 
    * @type {'asc' | 'desc'}
    * @memberof CategoriesEssentialsApiCategories
    */
    readonly direction?: 'asc' | 'desc'
    
    /**
    * The page number of the results to show.
    * @type {number}
    * @memberof CategoriesEssentialsApiCategories
    */
    readonly page?: number
    
    /**
    * The number of items to show on each page of results, up to a maximum of 100.
    * @type {number}
    * @memberof CategoriesEssentialsApiCategories
    */
    readonly perPage?: number
    
    /**
    * The way to sort the results.
    * @type {'last_video_featured_time' | 'name'}
    * @memberof CategoriesEssentialsApiCategories
    */
    readonly sort?: 'last_video_featured_time' | 'name'
    
}

/**
 * Request parameters for category operation in CategoriesEssentialsApi.
 * @export
 * @interface CategoriesEssentialsApiCategoryRequest
 */
export type CategoriesEssentialsApiCategoryRequest = {
    
    /**
    * The name of the category.
    * @type {string}
    * @memberof CategoriesEssentialsApiCategory
    */
    readonly category: string
    
}

/**
 * CategoriesEssentialsApiGenerated - object-oriented interface
 * @export
 * @class CategoriesEssentialsApiGenerated
 * @extends {BaseAPI}
 */
export class CategoriesEssentialsApiGenerated extends BaseAPI {
    /**
     * This method returns every available category.
     * @summary Get all categories
     * @param {CategoriesEssentialsApiCategoriesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesEssentialsApiGenerated
     */
    public categories(requestParameters: CategoriesEssentialsApiCategoriesRequest = {}, options?: AxiosRequestConfig) {
        return CategoriesEssentialsApiFp(this.configuration).categories(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method returns the specified category.
     * @summary Get a specific category
     * @param {CategoriesEssentialsApiCategoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesEssentialsApiGenerated
     */
    public category(requestParameters: CategoriesEssentialsApiCategoryRequest, options?: AxiosRequestConfig) {
        return CategoriesEssentialsApiFp(this.configuration).category(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
