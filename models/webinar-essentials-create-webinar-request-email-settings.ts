/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WebinarEssentialsCreateWebinarRequestEmailSettingsEmailPreferences } from './webinar-essentials-create-webinar-request-email-settings-email-preferences';

/**
 * The settings for emails that are sent about the webinar. _This field is deprecated._
 * @export
 * @interface WebinarEssentialsCreateWebinarRequestEmailSettings
 */
export interface WebinarEssentialsCreateWebinarRequestEmailSettings {
    /**
     * The accent color scheme for emails that are sent about the webinar. _This field is deprecated._
     * @type {string}
     * @memberof WebinarEssentialsCreateWebinarRequestEmailSettings
     */
    'accent_color'?: string;
    /**
     * The custom link for emails that are sent about the webinar. _This field is deprecated._
     * @type {string}
     * @memberof WebinarEssentialsCreateWebinarRequestEmailSettings
     */
    'custom_link'?: string;
    /**
     * 
     * @type {WebinarEssentialsCreateWebinarRequestEmailSettingsEmailPreferences}
     * @memberof WebinarEssentialsCreateWebinarRequestEmailSettings
     */
    'email_preferences'?: WebinarEssentialsCreateWebinarRequestEmailSettingsEmailPreferences;
    /**
     * The name of the sender for emails that are sent about the webinar. _This field is deprecated._
     * @type {string}
     * @memberof WebinarEssentialsCreateWebinarRequestEmailSettings
     */
    'from'?: string;
    /**
     * The URI of the logo image to include in emails that are sent about the webinar. _This field is deprecated._
     * @type {string}
     * @memberof WebinarEssentialsCreateWebinarRequestEmailSettings
     */
    'logo_uri'?: string;
    /**
     * The sender\'s reply email address. _This field is deprecated._
     * @type {string}
     * @memberof WebinarEssentialsCreateWebinarRequestEmailSettings
     */
    'reply_email'?: string;
    /**
     * The sender\'s physical address. _This field is deprecated._
     * @type {string}
     * @memberof WebinarEssentialsCreateWebinarRequestEmailSettings
     */
    'sender_address'?: string;
    /**
     * The URL of the sender\'s privacy policy. _This field is deprecated._
     * @type {string}
     * @memberof WebinarEssentialsCreateWebinarRequestEmailSettings
     */
    'sender_policy_url'?: string;
    /**
     * Whether to include a custom link in emails that are sent about the webinar. _This field is deprecated._
     * @type {boolean}
     * @memberof WebinarEssentialsCreateWebinarRequestEmailSettings
     */
    'use_custom_link'?: boolean;
    /**
     * Whether to include a reply link in the footer of emails that are sent about the webinar. _This field is deprecated._
     * @type {boolean}
     * @memberof WebinarEssentialsCreateWebinarRequestEmailSettings
     */
    'use_reply_email'?: boolean;
    /**
     * Whether to include the sender\'s physical address in the footer of emails that are sent about the webinar. _This field is deprecated._
     * @type {boolean}
     * @memberof WebinarEssentialsCreateWebinarRequestEmailSettings
     */
    'use_sender_address'?: boolean;
    /**
     * Whether to include the URL of the sender\'s privacy policy in the footer of emails that are sent about the webinar. _This field is deprecated._
     * @type {boolean}
     * @memberof WebinarEssentialsCreateWebinarRequestEmailSettings
     */
    'use_sender_policy_url'?: boolean;
}

