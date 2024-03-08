/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OnDemandEssentialsCreatePageRequestBuyPrice } from './on-demand-essentials-create-page-request-buy-price';

/**
 * 
 * @export
 * @interface OnDemandEssentialsCreatePageRequestBuy
 */
export interface OnDemandEssentialsCreatePageRequestBuy {
    /**
     * Whether the video can be purchased. This parameter is required when **rent.active** is `false`.
     * @type {boolean}
     * @memberof OnDemandEssentialsCreatePageRequestBuy
     */
    'active'?: boolean;
    /**
     * Whether people who buy the video can download it. To use this parameter, **type** must be `film`.
     * @type {boolean}
     * @memberof OnDemandEssentialsCreatePageRequestBuy
     */
    'download'?: boolean;
    /**
     * 
     * @type {OnDemandEssentialsCreatePageRequestBuyPrice}
     * @memberof OnDemandEssentialsCreatePageRequestBuy
     */
    'price'?: OnDemandEssentialsCreatePageRequestBuyPrice;
}
