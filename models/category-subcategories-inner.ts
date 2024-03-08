/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface CategorySubcategoriesInner
 */
export interface CategorySubcategoriesInner {
    /**
     * The URL to access the subcategory in a browser.
     * @type {string}
     * @memberof CategorySubcategoriesInner
     */
    'link': string;
    /**
     * The display name that identifies the subcategory.
     * @type {string}
     * @memberof CategorySubcategoriesInner
     */
    'name': string;
    /**
     * The unique identifier to access the subcategory. resource.
     * @type {string}
     * @memberof CategorySubcategoriesInner
     */
    'uri': string;
}
