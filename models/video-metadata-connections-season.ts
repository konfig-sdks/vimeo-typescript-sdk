/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the video\'s season.
 * @export
 * @interface VideoMetadataConnectionsSeason
 */
export interface VideoMetadataConnectionsSeason {
    /**
     * The name of the season.
     * @type {string}
     * @memberof VideoMetadataConnectionsSeason
     */
    'name': string;
    /**
     * An array of HTTP methods permitted on this URI.
     * @type {Array<string>}
     * @memberof VideoMetadataConnectionsSeason
     */
    'options': Array<string>;
    /**
     * The API URI that resolves to the connection data.
     * @type {string}
     * @memberof VideoMetadataConnectionsSeason
     */
    'uri': string;
}
