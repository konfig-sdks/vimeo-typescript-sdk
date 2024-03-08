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
 * @interface EmailCaptureFormHiddenFieldsInnerConnectedFieldsInner
 */
export interface EmailCaptureFormHiddenFieldsInnerConnectedFieldsInner {
    /**
     * The ID of the provider field.
     * @type {string}
     * @memberof EmailCaptureFormHiddenFieldsInnerConnectedFieldsInner
     */
    'email_service_provider_field_id': string;
    /**
     * The ID of the field in the form associated with the connected field.
     * @type {number}
     * @memberof EmailCaptureFormHiddenFieldsInnerConnectedFieldsInner
     */
    'form_field_id': number;
    /**
     * A third-party email service provider.  Option descriptions:  * `1` - The provider is Mailchimp.  * `2` - The provider is Campaign Monitor.  * `3` - The provider is Constant Contact.  * `4` - The provider is Infusionsoft.  * `5` - The provider is HubSpot.  * `6` - The provider is Constant Contact V3.  * `7` - The provider is Marketo. 
     * @type {string}
     * @memberof EmailCaptureFormHiddenFieldsInnerConnectedFieldsInner
     */
    'provider_id': EmailCaptureFormHiddenFieldsInnerConnectedFieldsInnerProviderIdEnum;
}

type EmailCaptureFormHiddenFieldsInnerConnectedFieldsInnerProviderIdEnum = '1' | '2' | '3' | '4' | '5' | '6' | '7'

