/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Subscription information for an On Demand video.
 * @export
 * @interface VideoMetadataInteractionsSubscribe
 */
export interface VideoMetadataInteractionsSubscribe {
    /**
     * Whether the On Demand video has DRM.
     * @type {boolean}
     * @memberof VideoMetadataInteractionsSubscribe
     */
    'drm'?: boolean;
    /**
     * The time in ISO 8601 format when the subscription expires.
     * @type {string}
     * @memberof VideoMetadataInteractionsSubscribe
     */
    'expires_time'?: string;
    /**
     * The time in ISO 8601 format when the subscription was purchased.
     * @type {string}
     * @memberof VideoMetadataInteractionsSubscribe
     */
    'purchase_time'?: string;
    /**
     * The stream type.
     * @type {string}
     * @memberof VideoMetadataInteractionsSubscribe
     */
    'stream'?: string;
}

