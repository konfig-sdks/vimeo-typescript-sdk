/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about removing this video from the user\'s list of watched videos.
 * @export
 * @interface VideoMetadataInteractionsWatched
 */
export interface VideoMetadataInteractionsWatched {
    /**
     * Whether the user has watched the video.
     * @type {boolean}
     * @memberof VideoMetadataInteractionsWatched
     */
    'added': boolean;
    /**
     * The time in ISO 8601 format when the user watched the video.
     * @type {string}
     * @memberof VideoMetadataInteractionsWatched
     */
    'added_time': string;
    /**
     * An array of HTTP methods permitted on this URI.
     * @type {Array<string>}
     * @memberof VideoMetadataInteractionsWatched
     */
    'options': Array<string>;
    /**
     * The API URI that resolves to the connection data.
     * @type {string}
     * @memberof VideoMetadataInteractionsWatched
     */
    'uri': string;
}

