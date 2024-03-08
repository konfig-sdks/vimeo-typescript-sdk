/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about purchasing the video.
 * @export
 * @interface OnDemandVideoBuy
 */
export interface OnDemandVideoBuy {
    /**
     * Whether the video can be purchased.
     * @type {boolean}
     * @memberof OnDemandVideoBuy
     */
    'active': boolean;
    /**
     * A map of currency type to price.
     * @type {object}
     * @memberof OnDemandVideoBuy
     */
    'price': object;
    /**
     * Whether the video has been purchased.
     * @type {boolean}
     * @memberof OnDemandVideoBuy
     */
    'purchased'?: boolean;
}
