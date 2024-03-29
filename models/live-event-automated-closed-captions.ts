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
 * @interface LiveEventAutomatedClosedCaptions
 */
export interface LiveEventAutomatedClosedCaptions {
    /**
     * Whether automated closed captions can be enabled.
     * @type {boolean}
     * @memberof LiveEventAutomatedClosedCaptions
     */
    'auto_cc_can_be_enabled': boolean;
    /**
     * Whether the option for automated closed captions is enabled.
     * @type {boolean}
     * @memberof LiveEventAutomatedClosedCaptions
     */
    'auto_cc_enabled': boolean;
    /**
     * Whether automated closed captions are unlimited for the user.
     * @type {boolean}
     * @memberof LiveEventAutomatedClosedCaptions
     */
    'auto_cc_is_unlimited': boolean;
    /**
     * A comma-separated list of keywords for enhancing the speech detection of automated closed captions.
     * @type {string}
     * @memberof LiveEventAutomatedClosedCaptions
     */
    'auto_cc_keywords': string;
    /**
     * The language of the automated closed captions.
     * @type {string}
     * @memberof LiveEventAutomatedClosedCaptions
     */
    'auto_cc_language': string | null;
    /**
     * The number of minutes remaining for automated closed captions in the user\'s current period.
     * @type {number}
     * @memberof LiveEventAutomatedClosedCaptions
     */
    'auto_cc_remaining': number;
    /**
     * The ID of the event.
     * @type {number}
     * @memberof LiveEventAutomatedClosedCaptions
     */
    'event_id': number;
}

