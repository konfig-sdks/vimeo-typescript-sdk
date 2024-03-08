/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CreateWebinarRequestEmailSettings } from './create-webinar-request-email-settings';
import { CreateWebinarRequestPrivacy } from './create-webinar-request-privacy';
import { CreateWebinarRequestSchedule } from './create-webinar-request-schedule';

/**
 * 
 * @export
 * @interface CreateWebinarRequest
 */
export interface CreateWebinarRequest {
    /**
     * The title of the webinar.
     * @type {string}
     * @memberof CreateWebinarRequest
     */
    'title': string;
    /**
     * The description of the webinar.
     * @type {string}
     * @memberof CreateWebinarRequest
     */
    'description'?: string;
    /**
     * 
     * @type {CreateWebinarRequestEmailSettings}
     * @memberof CreateWebinarRequest
     */
    'email_settings'?: CreateWebinarRequestEmailSettings;
    /**
     * The URI of the webinar\'s folder.
     * @type {number}
     * @memberof CreateWebinarRequest
     */
    'folder_uri'?: number;
    /**
     * The password when **privacy.view** is `password`. Anyone with the password can view the videos generated by streaming to the webinar event.
     * @type {string}
     * @memberof CreateWebinarRequest
     */
    'password'?: string;
    /**
     * 
     * @type {CreateWebinarRequestPrivacy}
     * @memberof CreateWebinarRequest
     */
    'privacy'?: CreateWebinarRequestPrivacy;
    /**
     * 
     * @type {CreateWebinarRequestSchedule}
     * @memberof CreateWebinarRequest
     */
    'schedule'?: CreateWebinarRequestSchedule;
    /**
     * The time zone used in resolving the timestamps that are included in the automatically generated video titles for the webinar.
     * @type {string}
     * @memberof CreateWebinarRequest
     */
    'time_zone'?: string;
}
