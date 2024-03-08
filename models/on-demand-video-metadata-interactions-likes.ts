/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the authenticated user\'s interaction to like the video.
 * @export
 * @interface OnDemandVideoMetadataInteractionsLikes
 */
export interface OnDemandVideoMetadataInteractionsLikes {
    /**
     * Whether the authenticated user has liked the video.
     * @type {boolean}
     * @memberof OnDemandVideoMetadataInteractionsLikes
     */
    'added': boolean;
    /**
     * The time in ISO 8601 format when the authenticated user liked the video.
     * @type {string}
     * @memberof OnDemandVideoMetadataInteractionsLikes
     */
    'added_time': string;
    /**
     * The URI for the authenticated user to like the video.
     * @type {string}
     * @memberof OnDemandVideoMetadataInteractionsLikes
     */
    'uri': string;
}

