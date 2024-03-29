/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CreateVodRequestEpisodesBuyPrice } from './create-vod-request-episodes-buy-price';

/**
 * 
 * @export
 * @interface CreateVodRequestEpisodesBuy
 */
export interface CreateVodRequestEpisodesBuy {
    /**
     * Whether episodes can be purchased.
     * @type {boolean}
     * @memberof CreateVodRequestEpisodesBuy
     */
    'active'?: boolean;
    /**
     * Whether people who buy episodes can download them. To use this parameter, **type** must be `series`.
     * @type {boolean}
     * @memberof CreateVodRequestEpisodesBuy
     */
    'download'?: boolean;
    /**
     * 
     * @type {CreateVodRequestEpisodesBuyPrice}
     * @memberof CreateVodRequestEpisodesBuy
     */
    'price'?: CreateVodRequestEpisodesBuyPrice;
}

