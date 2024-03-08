/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the video\'s thumbnails.
 * @export
 * @interface VideoMetadataConnectionsPictures
 */
export interface VideoMetadataConnectionsPictures {
    /**
     * An array of HTTP methods permitted on this URI.
     * @type {Array<string>}
     * @memberof VideoMetadataConnectionsPictures
     */
    'options': Array<string>;
    /**
     * Total number of thumbnails on this connection.
     * @type {number}
     * @memberof VideoMetadataConnectionsPictures
     */
    'total': number;
    /**
     * The API URI that resolves to the connection data.
     * @type {string}
     * @memberof VideoMetadataConnectionsPictures
     */
    'uri': string;
}
