/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface OttDestination
 */
export interface OttDestination {
    /**
     * The OTT destination\'s canonical relative URI.
     * @type {string}
     * @memberof OttDestination
     */
    'id': string;
    /**
     * The ID of the OTT channel.
     * @type {number}
     * @memberof OttDestination
     */
    'ott_channel_id': number;
    /**
     * The name of the OTT channel.
     * @type {string}
     * @memberof OttDestination
     */
    'ott_channel_name': string;
    /**
     * The subdomain of the OTT channel.
     * @type {string}
     * @memberof OttDestination
     */
    'ott_channel_subdomain': string;
    /**
     * The ID of the OTT event.
     * @type {number}
     * @memberof OttDestination
     */
    'ott_event_id': number;
    /**
     * The ID of the current recurring live event.
     * @type {number}
     * @memberof OttDestination
     */
    'recurring_live_event_id': number;
}

