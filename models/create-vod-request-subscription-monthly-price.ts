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
 * @interface CreateVodRequestSubscriptionMonthlyPrice
 */
export interface CreateVodRequestSubscriptionMonthlyPrice {
    /**
     * The monthly subscription price in United States dollars. This parameter is required when **rent.active** and **buy.active** are `false`.
     * @type {number}
     * @memberof CreateVodRequestSubscriptionMonthlyPrice
     */
    'USD'?: number;
}
