/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the event\'s pre-live video, where applicable. A pre-live video is either activated or in the process of being activated.
 * @export
 * @interface WebinarEventMetadataConnectionsPreLiveVideo
 */
export interface WebinarEventMetadataConnectionsPreLiveVideo {
    /**
     * An array of the HTTP methods permitted on this URI.
     * @type {Array<string>}
     * @memberof WebinarEventMetadataConnectionsPreLiveVideo
     */
    'options': Array<string>;
    /**
     * The status of the pre-live video\'s RTMP link.  Option descriptions:  * `pending` - Vimeo is working on setting up the connection.  * `ready` - Resources have been provisioned for the event.  * `streaming` - Live video is currently streaming to the RTMP link.  * `unavailable` - The connection is ready, but streaming to the RTMP link has not yet begun. 
     * @type {string}
     * @memberof WebinarEventMetadataConnectionsPreLiveVideo
     */
    'status': WebinarEventMetadataConnectionsPreLiveVideoStatusEnum;
    /**
     * The API URI that resolves to the connection data.
     * @type {string}
     * @memberof WebinarEventMetadataConnectionsPreLiveVideo
     */
    'uri': string;
}

type WebinarEventMetadataConnectionsPreLiveVideoStatusEnum = 'pending' | 'ready' | 'streaming' | 'unavailable'

