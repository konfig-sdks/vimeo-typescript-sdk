/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the authenticated user\'s followers.
 * @export
 * @interface UserMetadataConnectionsFollowers
 */
export interface UserMetadataConnectionsFollowers {
    /**
     * An array of HTTP methods permitted on this URI.
     * @type {Array<string>}
     * @memberof UserMetadataConnectionsFollowers
     */
    'options': Array<string>;
    /**
     * The total number of followers on this connection.
     * @type {number}
     * @memberof UserMetadataConnectionsFollowers
     */
    'total': number;
    /**
     * The API URI that resolves to the connection data.
     * @type {string}
     * @memberof UserMetadataConnectionsFollowers
     */
    'uri': string;
}

