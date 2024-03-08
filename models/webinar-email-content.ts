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
 * @interface WebinarEmailContent
 */
export interface WebinarEmailContent {
    /**
     * The HTML body of the email.
     * @type {string}
     * @memberof WebinarEmailContent
     */
    'body': string;
    /**
     * The target link for the call-to-action button in the email.
     * @type {string}
     * @memberof WebinarEmailContent
     */
    'button_link': string;
    /**
     * The text for the call-to-action button in the email.
     * @type {string}
     * @memberof WebinarEmailContent
     */
    'button_text': string;
    /**
     * The HTML header section of the email.
     * @type {string}
     * @memberof WebinarEmailContent
     */
    'header': string;
    /**
     * The time in ISO 8601 format when the webinar email content was updated.
     * @type {string}
     * @memberof WebinarEmailContent
     */
    'modified_time': string;
    /**
     * The HTML subject of the email.
     * @type {string}
     * @memberof WebinarEmailContent
     */
    'subject': string;
    /**
     * The email type for which the content was customized.  Option descriptions:  * `email_event_reminder_24_hrs` - The webinar reminder email, which goes out 24 hours before the event.  * `email_post_event_thank_you` - The webinar post-event thank-you email.  * `email_registration_confirmation` - The webinar registration confirmation email. 
     * @type {string}
     * @memberof WebinarEmailContent
     */
    'type': WebinarEmailContentTypeEnum;
    /**
     * Whether to show the calendar in the email.
     * @type {boolean}
     * @memberof WebinarEmailContent
     */
    'use_calender': boolean;
    /**
     * Whether to include a custom link in emails that are sent about the webinar.
     * @type {boolean}
     * @memberof WebinarEmailContent
     */
    'use_custom_link': boolean;
}

type WebinarEmailContentTypeEnum = 'email_event_reminder_24_hrs' | 'email_post_event_thank_you' | 'email_registration_confirmation'


