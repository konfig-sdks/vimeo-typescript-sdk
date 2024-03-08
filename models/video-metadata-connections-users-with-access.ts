/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the user privacy of the video, if the video privacy setting is `users`.
 * @export
 * @interface VideoMetadataConnectionsUsersWithAccess
 */
export interface VideoMetadataConnectionsUsersWithAccess {
    /**
     * An array of HTTP methods permitted on this URI.
     * @type {Array<string>}
     * @memberof VideoMetadataConnectionsUsersWithAccess
     */
    'options': Array<string>;
    /**
     * The total number of users on this connection.
     * @type {number}
     * @memberof VideoMetadataConnectionsUsersWithAccess
     */
    'total': number;
    /**
     * The API URI that resolves to the connection data.
     * @type {string}
     * @memberof VideoMetadataConnectionsUsersWithAccess
     */
    'uri': string;
}

