/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about where and how to report the requested user.
 * @export
 * @interface UserMetadataInteractionsReport
 */
export interface UserMetadataInteractionsReport {
    /**
     * An array of the HTTP methods permitted on this URI.
     * @type {Array<string>}
     * @memberof UserMetadataInteractionsReport
     */
    'options': Array<string>;
    /**
     * A list of valid reasons for reporting a video.
     * @type {Array<string>}
     * @memberof UserMetadataInteractionsReport
     */
    'reason': Array<string>;
    /**
     * The API URI that resolves to the connection data.
     * @type {string}
     * @memberof UserMetadataInteractionsReport
     */
    'uri': string;
}

