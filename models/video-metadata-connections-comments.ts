/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the comments on the video.
 * @export
 * @interface VideoMetadataConnectionsComments
 */
export interface VideoMetadataConnectionsComments {
    /**
     * An array of HTTP methods permitted on this URI.
     * @type {Array<string>}
     * @memberof VideoMetadataConnectionsComments
     */
    'options': Array<string>;
    /**
     * The total number of comments on this connection.
     * @type {number}
     * @memberof VideoMetadataConnectionsComments
     */
    'total': number;
    /**
     * The API URI that resolves to the connection data.
     * @type {string}
     * @memberof VideoMetadataConnectionsComments
     */
    'uri': string;
}
