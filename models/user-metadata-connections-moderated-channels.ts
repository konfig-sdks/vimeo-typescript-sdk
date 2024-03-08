/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the channels that the authenticated user moderates.
 * @export
 * @interface UserMetadataConnectionsModeratedChannels
 */
export interface UserMetadataConnectionsModeratedChannels {
    /**
     * An array of HTTP methods permitted on this URI.
     * @type {Array<string>}
     * @memberof UserMetadataConnectionsModeratedChannels
     */
    'options': Array<string>;
    /**
     * The total number of channels on this connection.
     * @type {number}
     * @memberof UserMetadataConnectionsModeratedChannels
     */
    'total': number;
    /**
     * The API URI that resolves to the connection data.
     * @type {string}
     * @memberof UserMetadataConnectionsModeratedChannels
     */
    'uri': string;
}
