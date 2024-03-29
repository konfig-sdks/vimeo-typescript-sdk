/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the channels to which the video can be added. This data requires a bearer token with the `private` scope.
 * @export
 * @interface VideoMetadataConnectionsAvailableChannels
 */
export interface VideoMetadataConnectionsAvailableChannels {
    /**
     * An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
     * @type {Array<string>}
     * @memberof VideoMetadataConnectionsAvailableChannels
     */
    'options': Array<string>;
    /**
     * The total number of channels on this connection. This data requires a bearer token with the `private` scope.
     * @type {number}
     * @memberof VideoMetadataConnectionsAvailableChannels
     */
    'total': number;
    /**
     * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
     * @type {string}
     * @memberof VideoMetadataConnectionsAvailableChannels
     */
    'uri': string;
}

