/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the videos that belong to the event.
 * @export
 * @interface LiveEventMetadataConnectionsVideos
 */
export interface LiveEventMetadataConnectionsVideos {
    /**
     * An array of the HTTP methods permitted on this URI.
     * @type {Array<string>}
     * @memberof LiveEventMetadataConnectionsVideos
     */
    'options': Array<string>;
    /**
     * The total number of videos on this connection.
     * @type {number}
     * @memberof LiveEventMetadataConnectionsVideos
     */
    'total': number;
    /**
     * The API URI that resolves to the connection data.
     * @type {string}
     * @memberof LiveEventMetadataConnectionsVideos
     */
    'uri': string;
}
