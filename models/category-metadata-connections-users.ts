/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the users related to this category.
 * @export
 * @interface CategoryMetadataConnectionsUsers
 */
export interface CategoryMetadataConnectionsUsers {
    /**
     * An array of HTTP methods permitted on this URI.
     * @type {Array<string>}
     * @memberof CategoryMetadataConnectionsUsers
     */
    'options': Array<string>;
    /**
     * The total number of users on this connection.
     * @type {number}
     * @memberof CategoryMetadataConnectionsUsers
     */
    'total': number;
    /**
     * The API URI that resolves to the connection data.
     * @type {string}
     * @memberof CategoryMetadataConnectionsUsers
     */
    'uri': string;
}

