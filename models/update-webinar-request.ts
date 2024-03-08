/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { UpdateWebinarRequestEmailSettings } from './update-webinar-request-email-settings';
import { UpdateWebinarRequestPrivacy } from './update-webinar-request-privacy';
import { UpdateWebinarRequestSchedule } from './update-webinar-request-schedule';

/**
 * 
 * @export
 * @interface UpdateWebinarRequest
 */
export interface UpdateWebinarRequest {
    /**
     * The title of the webinar.
     * @type {string}
     * @memberof UpdateWebinarRequest
     */
    'title'?: string;
    /**
     * The description of the webinar.
     * @type {string}
     * @memberof UpdateWebinarRequest
     */
    'description'?: string;
    /**
     * 
     * @type {UpdateWebinarRequestEmailSettings}
     * @memberof UpdateWebinarRequest
     */
    'email_settings'?: UpdateWebinarRequestEmailSettings;
    /**
     * The password when **privacy.view** is `password`. Anyone with the password can view the videos generated by streaming to the webinar event.
     * @type {string}
     * @memberof UpdateWebinarRequest
     */
    'password'?: string;
    /**
     * 
     * @type {UpdateWebinarRequestPrivacy}
     * @memberof UpdateWebinarRequest
     */
    'privacy'?: UpdateWebinarRequestPrivacy;
    /**
     * 
     * @type {UpdateWebinarRequestSchedule}
     * @memberof UpdateWebinarRequest
     */
    'schedule'?: UpdateWebinarRequestSchedule;
    /**
     * The status of the webinar.  Option descriptions:  * `ended` - The webinar has ended.  * `started` - The webinar has started. 
     * @type {string}
     * @memberof UpdateWebinarRequest
     */
    'status'?: UpdateWebinarRequestStatusEnum;
    /**
     * The time zone used in resolving the timestamps that are included in the automatically generated video titles for the webinar.
     * @type {string}
     * @memberof UpdateWebinarRequest
     */
    'time_zone'?: string;
}

type UpdateWebinarRequestStatusEnum = 'ended' | 'started'


