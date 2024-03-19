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
 * @interface SubscriptionItemsInner
 */
export interface SubscriptionItemsInner {
    /**
     * The ID of the billing plan for the subscription item.
     * @type {string}
     * @memberof SubscriptionItemsInner
     */
    'billing_plan_id': string;
    /**
     * The time in 8601 format when the subscription item was created.
     * @type {string}
     * @memberof SubscriptionItemsInner
     */
    'created_at': string;
    /**
     * The ID of the subscription item.
     * @type {string}
     * @memberof SubscriptionItemsInner
     */
    'id': string;
    /**
     * The metadata of the subscription item.
     * @type {object}
     * @memberof SubscriptionItemsInner
     */
    'metadata'?: object;
    /**
     * The promotional code for the subscription item.
     * @type {string}
     * @memberof SubscriptionItemsInner
     */
    'promo_code'?: string;
    /**
     * The ID of the promotional code for the subscription item.
     * @type {string}
     * @memberof SubscriptionItemsInner
     */
    'promo_code_id'?: string;
    /**
     * The quantity of the subscription item.
     * @type {number}
     * @memberof SubscriptionItemsInner
     */
    'quantity': number;
    /**
     * The time in 8601 format when the subscription item was synced.
     * @type {string}
     * @memberof SubscriptionItemsInner
     */
    'synced_at': string;
    /**
     * The time in 8601 format when the subscription item was updated.
     * @type {string}
     * @memberof SubscriptionItemsInner
     */
    'updated_at': string;
}
