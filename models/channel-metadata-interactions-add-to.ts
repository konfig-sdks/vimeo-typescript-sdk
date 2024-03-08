/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * When a channel appears in the context of adding or removing a video from it (`/videos/{video_id}/available_channels`), include information about adding or removing the video. This data requires a bearer token with the `private` scope.
 * @export
 * @interface ChannelMetadataInteractionsAddTo
 */
export interface ChannelMetadataInteractionsAddTo {
    /**
     * An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
     * @type {Array<string>}
     * @memberof ChannelMetadataInteractionsAddTo
     */
    'options': Array<string>;
    /**
     * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
     * @type {string}
     * @memberof ChannelMetadataInteractionsAddTo
     */
    'uri': string;
}

