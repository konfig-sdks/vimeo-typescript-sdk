/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The preferences for emails that are sent about the webinar. _This field is deprecated._
 * @export
 * @interface WebinarEssentialsCreateWebinarRequestEmailSettingsEmailPreferences
 */
export interface WebinarEssentialsCreateWebinarRequestEmailSettingsEmailPreferences {
    /**
     * Whether to send a reminder email 15 minutes before the webinar starts. _This field is deprecated._
     * @type {boolean}
     * @memberof WebinarEssentialsCreateWebinarRequestEmailSettingsEmailPreferences
     */
    'email_event_reminder_15_min'?: boolean;
    /**
     * Whether to send a reminder email 1 hour before the webinar starts. _This field is deprecated._
     * @type {boolean}
     * @memberof WebinarEssentialsCreateWebinarRequestEmailSettingsEmailPreferences
     */
    'email_event_reminder_1_hrs'?: boolean;
    /**
     * Whether to send a reminder email 24 hours before the webinar starts. _This field is deprecated._
     * @type {boolean}
     * @memberof WebinarEssentialsCreateWebinarRequestEmailSettingsEmailPreferences
     */
    'email_event_reminder_24_hrs'?: boolean;
    /**
     * Whether to send post-event thank-you emails to no-shows. _This field is deprecated._
     * @type {boolean}
     * @memberof WebinarEssentialsCreateWebinarRequestEmailSettingsEmailPreferences
     */
    'email_post_event_no_show_thank_you'?: boolean;
    /**
     * Whether to send post-event thank-you emails. _This field is deprecated._
     * @type {boolean}
     * @memberof WebinarEssentialsCreateWebinarRequestEmailSettingsEmailPreferences
     */
    'email_post_event_thank_you'?: boolean;
    /**
     * Whether to send a registration confirmation email after webinar registration. _This field is deprecated._
     * @type {boolean}
     * @memberof WebinarEssentialsCreateWebinarRequestEmailSettingsEmailPreferences
     */
    'email_registration_confirmation'?: boolean;
}

