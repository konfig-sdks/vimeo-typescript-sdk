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
 * @interface OnDemandPageEpisodesBuy
 */
export interface OnDemandPageEpisodesBuy {
    /**
     * Whether all the videos on the On Demand page can be purchased as a whole.
     * @type {boolean}
     * @memberof OnDemandPageEpisodesBuy
     */
    'active': boolean;
    /**
     * The default price to buy an episode.
     * @type {number}
     * @memberof OnDemandPageEpisodesBuy
     */
    'price': number | null;
}

