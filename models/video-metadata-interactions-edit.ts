/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about where and how to edit a video.
 * @export
 * @interface VideoMetadataInteractionsEdit
 */
export interface VideoMetadataInteractionsEdit {
    /**
     * An array of video fields that a user can\'t interact with.
     * @type {Array<string>}
     * @memberof VideoMetadataInteractionsEdit
     */
    'blocked_fields': Array<string>;
    /**
     * An array of HTTP methods permitted on this URI.
     * @type {Array<string>}
     * @memberof VideoMetadataInteractionsEdit
     */
    'options': Array<string>;
    /**
     * The API URI that resolves to the connection data.
     * @type {string}
     * @memberof VideoMetadataInteractionsEdit
     */
    'uri': string;
}

