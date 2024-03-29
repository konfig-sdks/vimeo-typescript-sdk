/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WebinarEmailContent } from './webinar-email-content';

/**
 * The email customization details for the webinar registration confirmation email.
 * @export
 * @interface WebinarEmailSettingsEmailRegistrationConfirmation
 */
export interface WebinarEmailSettingsEmailRegistrationConfirmation {
    /**
     * The email custom details for the webinar registration confirmation email.
     * @type {WebinarEmailContent}
     * @memberof WebinarEmailSettingsEmailRegistrationConfirmation
     */
    'custom': WebinarEmailContent;
    /**
     * The email default details for the webinar registration confirmation email.
     * @type {WebinarEmailContent}
     * @memberof WebinarEmailSettingsEmailRegistrationConfirmation
     */
    'default': WebinarEmailContent;
}

