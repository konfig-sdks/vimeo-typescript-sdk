/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the video version that is created from the trim operation.
 * @export
 * @interface TrimmedVideoMetadataConnectionsCreatedVersion
 */
export interface TrimmedVideoMetadataConnectionsCreatedVersion {
    /**
     * An array of HTTP methods permitted on this URI.
     * @type {Array<string>}
     * @memberof TrimmedVideoMetadataConnectionsCreatedVersion
     */
    'options': Array<string>;
    /**
     * The API URI that resolves to the connection data.
     * @type {string}
     * @memberof TrimmedVideoMetadataConnectionsCreatedVersion
     */
    'uri': string;
}

