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
 * @interface EditVodRequestPreorder
 */
export interface EditVodRequestPreorder {
    /**
     * Whether to enable preorders on the On Demand page.
     * @type {boolean}
     * @memberof EditVodRequestPreorder
     */
    'active'?: boolean;
    /**
     * The time in ISO 8601 format when the On Demand page will be published. This parameter is required when **preorder.active** is `true`.
     * @type {string}
     * @memberof EditVodRequestPreorder
     */
    'publish_time'?: string;
}
