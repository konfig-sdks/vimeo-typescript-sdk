/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the event\'s live video, where applicable.
 * @export
 * @interface WebinarEventMetadataConnectionsLiveVideo
 */
export interface WebinarEventMetadataConnectionsLiveVideo {
    /**
     * An array of the HTTP methods permitted on this URI.
     * @type {Array<string>}
     * @memberof WebinarEventMetadataConnectionsLiveVideo
     */
    'options': Array<string>;
    /**
     * The status of the live video\'s RTMP link.  Option descriptions:  * `streaming` - The stream is open and receiving content. 
     * @type {string}
     * @memberof WebinarEventMetadataConnectionsLiveVideo
     */
    'status': WebinarEventMetadataConnectionsLiveVideoStatusEnum;
    /**
     * The API URI that resolves to the connection data.
     * @type {string}
     * @memberof WebinarEventMetadataConnectionsLiveVideo
     */
    'uri': string;
}

type WebinarEventMetadataConnectionsLiveVideoStatusEnum = 'streaming'

