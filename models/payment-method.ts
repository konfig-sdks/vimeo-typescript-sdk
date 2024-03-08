/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PaymentMethodCard } from './payment-method-card';

/**
 * 
 * @export
 * @interface PaymentMethod
 */
export interface PaymentMethod {
    /**
     * The ID of the account.
     * @type {string}
     * @memberof PaymentMethod
     */
    'account_id': string;
    /**
     * 
     * @type {PaymentMethodCard}
     * @memberof PaymentMethod
     */
    'card'?: PaymentMethodCard;
    /**
     * The time when the payment method was created.
     * @type {string}
     * @memberof PaymentMethod
     */
    'created_at': string;
    /**
     * The time when the payment method was disabled.
     * @type {string}
     * @memberof PaymentMethod
     */
    'disabled_at': string;
    /**
     * The ID of the payment method.
     * @type {string}
     * @memberof PaymentMethod
     */
    'id': string;
    /**
     * Whether the payment method is the default payment method for the account.
     * @type {boolean}
     * @memberof PaymentMethod
     */
    'is_default': boolean;
    /**
     * The type of payment method.  Option descriptions:  * `0` - The payment method type is unspecified.  * `1` - The payment method is a card.  * `2` - The payment method is a PayPal account.  * `3` - The payment method is a bank account.  * `4` - The payment method is Apple Pay.  * `5` - The payment method is Google Pay. 
     * @type {string}
     * @memberof PaymentMethod
     */
    'type': PaymentMethodTypeEnum;
    /**
     * The time when the payment method was last updated.
     * @type {string}
     * @memberof PaymentMethod
     */
    'updated_at': string;
}

type PaymentMethodTypeEnum = '0' | '1' | '2' | '3' | '4' | '5'


