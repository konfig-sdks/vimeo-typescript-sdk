/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the users that the authenticated user is following.
 * @export
 * @interface UserMetadataConnectionsFollowing
 */
export interface UserMetadataConnectionsFollowing {
    /**
     * An array of HTTP methods permitted on this URI.
     * @type {Array<string>}
     * @memberof UserMetadataConnectionsFollowing
     */
    'options': Array<string>;
    /**
     * The total number of users on this connection.
     * @type {number}
     * @memberof UserMetadataConnectionsFollowing
     */
    'total': number;
    /**
     * The API URI that resolves to the connection data.
     * @type {string}
     * @memberof UserMetadataConnectionsFollowing
     */
    'uri': string;
}

