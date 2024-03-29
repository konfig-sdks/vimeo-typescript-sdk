/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The billing address of the card.
 * @export
 * @interface PaymentMethodCardBillingAddress
 */
export interface PaymentMethodCardBillingAddress {
    /**
     * The street address of the billing address.
     * @type {string}
     * @memberof PaymentMethodCardBillingAddress
     */
    'address'?: string;
    /**
     * The city of the billing address.
     * @type {string}
     * @memberof PaymentMethodCardBillingAddress
     */
    'city'?: string;
    /**
     * The country of the billing address.
     * @type {string}
     * @memberof PaymentMethodCardBillingAddress
     */
    'country'?: string;
    /**
     * The postal code of the billing address.
     * @type {string}
     * @memberof PaymentMethodCardBillingAddress
     */
    'postal_code'?: string;
    /**
     * The state of the billing address.
     * @type {string}
     * @memberof PaymentMethodCardBillingAddress
     */
    'state'?: string;
}

