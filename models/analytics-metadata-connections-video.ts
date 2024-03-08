/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The associated video object.
 * @export
 * @interface AnalyticsMetadataConnectionsVideo
 */
export interface AnalyticsMetadataConnectionsVideo {
    /**
     * The title of the associated video.
     * @type {string}
     * @memberof AnalyticsMetadataConnectionsVideo
     */
    'title': string;
    /**
     * The duration of the associated video.
     * @type {number}
     * @memberof AnalyticsMetadataConnectionsVideo
     */
    'duration': number;
    /**
     * An array of HTTP methods permitted on this URI.
     * @type {Array<string>}
     * @memberof AnalyticsMetadataConnectionsVideo
     */
    'options': Array<string>;
    /**
     * The API URI that resolves to the connection data.
     * @type {string}
     * @memberof AnalyticsMetadataConnectionsVideo
     */
    'uri': string;
}

