/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequestEmailSettings } from './webinar-essentials-update-webinar-belonging-to-authenticated-user-request-email-settings';
import { WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequestPrivacy } from './webinar-essentials-update-webinar-belonging-to-authenticated-user-request-privacy';
import { WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequestSchedule } from './webinar-essentials-update-webinar-belonging-to-authenticated-user-request-schedule';

/**
 * 
 * @export
 * @interface WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequest
 */
export interface WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequest {
    /**
     * The title of the webinar.
     * @type {string}
     * @memberof WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequest
     */
    'title'?: string;
    /**
     * The description of the webinar.
     * @type {string}
     * @memberof WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequest
     */
    'description'?: string;
    /**
     * 
     * @type {WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequestEmailSettings}
     * @memberof WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequest
     */
    'email_settings'?: WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequestEmailSettings;
    /**
     * The password when **privacy.view** is `password`. Anyone with the password can view the videos generated by streaming to the webinar event.
     * @type {string}
     * @memberof WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequest
     */
    'password'?: string;
    /**
     * 
     * @type {WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequestPrivacy}
     * @memberof WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequest
     */
    'privacy'?: WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequestPrivacy;
    /**
     * 
     * @type {WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequestSchedule}
     * @memberof WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequest
     */
    'schedule'?: WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequestSchedule;
    /**
     * The status of the webinar.  Option descriptions:  * `ended` - The webinar has ended.  * `started` - The webinar has started. 
     * @type {string}
     * @memberof WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequest
     */
    'status'?: WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequestStatusEnum;
    /**
     * The time zone used in resolving the timestamps that are included in the automatically generated video titles for the webinar.
     * @type {string}
     * @memberof WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequest
     */
    'time_zone'?: string;
}

type WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequestStatusEnum = 'ended' | 'started'

