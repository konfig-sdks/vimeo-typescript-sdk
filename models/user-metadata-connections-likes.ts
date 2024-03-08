/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the videos that the authenticated user has liked.
 * @export
 * @interface UserMetadataConnectionsLikes
 */
export interface UserMetadataConnectionsLikes {
    /**
     * An array of HTTP methods permitted on this URI.
     * @type {Array<string>}
     * @memberof UserMetadataConnectionsLikes
     */
    'options': Array<string>;
    /**
     * The total number of likes on this connection.
     * @type {number}
     * @memberof UserMetadataConnectionsLikes
     */
    'total': number;
    /**
     * The API URI that resolves to the connection data.
     * @type {string}
     * @memberof UserMetadataConnectionsLikes
     */
    'uri': string;
}

