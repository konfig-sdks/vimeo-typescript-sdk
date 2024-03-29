/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Picture } from './picture';
import { User } from './user';
import { WebinarEmailSettingsEmailEventReminder24Hrs } from './webinar-email-settings-email-event-reminder24-hrs';
import { WebinarEmailSettingsEmailPostEventThankYou } from './webinar-email-settings-email-post-event-thank-you';
import { WebinarEmailSettingsEmailRegistrationConfirmation } from './webinar-email-settings-email-registration-confirmation';

/**
 * 
 * @export
 * @interface WebinarEmailSettings
 */
export interface WebinarEmailSettings {
    /**
     * The accent color scheme for emails that are sent about the webinar.
     * @type {string}
     * @memberof WebinarEmailSettings
     */
    'accent_color': string;
    /**
     * The custom link for emails that are sent about the webinar.
     * @type {string}
     * @memberof WebinarEmailSettings
     */
    'custom_link': string | null;
    /**
     * 
     * @type {WebinarEmailSettingsEmailEventReminder24Hrs}
     * @memberof WebinarEmailSettings
     */
    'email_event_reminder_24_hrs': WebinarEmailSettingsEmailEventReminder24Hrs;
    /**
     * 
     * @type {WebinarEmailSettingsEmailPostEventThankYou}
     * @memberof WebinarEmailSettings
     */
    'email_post_event_thank_you': WebinarEmailSettingsEmailPostEventThankYou;
    /**
     * A list of preferences for the emails to send during the webinar event.
     * @type {Array<string>}
     * @memberof WebinarEmailSettings
     */
    'email_preferences': Array<string>;
    /**
     * 
     * @type {WebinarEmailSettingsEmailRegistrationConfirmation}
     * @memberof WebinarEmailSettings
     */
    'email_registration_confirmation': WebinarEmailSettingsEmailRegistrationConfirmation;
    /**
     * The time in ISO 8601 format when the follow-up email was sent.
     * @type {string}
     * @memberof WebinarEmailSettings
     */
    'follow_up_send_on': string;
    /**
     * The user who manually triggered the follow-up email.
     * @type {User}
     * @memberof WebinarEmailSettings
     */
    'follow_up_sender': User;
    /**
     * The name of the sender for emails that are sent about the webinar.
     * @type {string}
     * @memberof WebinarEmailSettings
     */
    'from': string;
    /**
     * The URI of the logo image to include in emails that are sent about the webinar.
     * @type {string}
     * @memberof WebinarEmailSettings
     */
    'logo_uri': string | null;
    /**
     * The logo to include in emails that are sent about the webinar.
     * @type {Picture}
     * @memberof WebinarEmailSettings
     */
    'pictures': Picture;
    /**
     * The sender\'s reply email address.
     * @type {string}
     * @memberof WebinarEmailSettings
     */
    'reply_email': string | null;
    /**
     * The sender\'s physical address.
     * @type {string}
     * @memberof WebinarEmailSettings
     */
    'sender_address': string | null;
    /**
     * The URL of the sender\'s privacy policy.
     * @type {string}
     * @memberof WebinarEmailSettings
     */
    'sender_policy_url': string | null;
    /**
     * Whether to include a custom link in emails that are sent about the webinar.
     * @type {boolean}
     * @memberof WebinarEmailSettings
     */
    'use_custom_link': boolean;
    /**
     * Whether to include a reply link in the footer of emails that are sent about the webinar.
     * @type {boolean}
     * @memberof WebinarEmailSettings
     */
    'use_reply_email': boolean;
    /**
     * Whether to include the sender\'s physical address in the footer of emails that are sent about the webinar.
     * @type {boolean}
     * @memberof WebinarEmailSettings
     */
    'use_sender_address': boolean;
    /**
     * Whether to include the URL of the sender\'s privacy policy in the footer of emails that are sent about the webinar.
     * @type {boolean}
     * @memberof WebinarEmailSettings
     */
    'use_sender_policy_url': boolean;
}

