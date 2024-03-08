/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the videos related to this category.
 * @export
 * @interface CategoryMetadataConnectionsVideos
 */
export interface CategoryMetadataConnectionsVideos {
    /**
     * An array of HTTP methods permitted on this URI.
     * @type {Array<string>}
     * @memberof CategoryMetadataConnectionsVideos
     */
    'options': Array<string>;
    /**
     * The total number of videos on this connection.
     * @type {number}
     * @memberof CategoryMetadataConnectionsVideos
     */
    'total': number;
    /**
     * The API URI that resolves to the connection data.
     * @type {string}
     * @memberof CategoryMetadataConnectionsVideos
     */
    'uri': string;
}

