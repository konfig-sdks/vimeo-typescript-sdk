/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PaymentMethodCardBillingAddress } from './payment-method-card-billing-address';

/**
 * Information about the card used to make the payment.
 * @export
 * @interface PaymentMethodCard
 */
export interface PaymentMethodCard {
    /**
     * 
     * @type {PaymentMethodCardBillingAddress}
     * @memberof PaymentMethodCard
     */
    'billing_address'?: PaymentMethodCardBillingAddress;
    /**
     * The bank identification number of the card.
     * @type {string}
     * @memberof PaymentMethodCard
     */
    'bin'?: string;
    /**
     * The brand of the card.
     * @type {string}
     * @memberof PaymentMethodCard
     */
    'brand'?: string;
    /**
     * The name of the cardholder.
     * @type {string}
     * @memberof PaymentMethodCard
     */
    'cardholder_name'?: string;
    /**
     * The expiration month of the card.
     * @type {number}
     * @memberof PaymentMethodCard
     */
    'expiration_month'?: number;
    /**
     * The expiration year of the card.
     * @type {number}
     * @memberof PaymentMethodCard
     */
    'expiration_year'?: number;
    /**
     * The last four digits of the card.
     * @type {string}
     * @memberof PaymentMethodCard
     */
    'last_four_digits'?: string;
}

