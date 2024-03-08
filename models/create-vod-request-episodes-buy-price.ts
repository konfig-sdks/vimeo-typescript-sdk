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
 * @interface CreateVodRequestEpisodesBuyPrice
 */
export interface CreateVodRequestEpisodesBuyPrice {
    /**
     * The purchase price per episode in United States dollars. This parameter is required when **episodes.buy.active** is `true`.
     * @type {number}
     * @memberof CreateVodRequestEpisodesBuyPrice
     */
    'USD'?: number;
}
