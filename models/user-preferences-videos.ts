/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { UserPreferencesVideosPrivacy } from './user-preferences-videos-privacy';

/**
 * 
 * @export
 * @interface UserPreferencesVideos
 */
export interface UserPreferencesVideos {
    /**
     * The password for viewing the authenticated user\'s videos.
     * @type {string}
     * @memberof UserPreferencesVideos
     */
    'password'?: string;
    /**
     * 
     * @type {UserPreferencesVideosPrivacy}
     * @memberof UserPreferencesVideos
     */
    'privacy'?: UserPreferencesVideosPrivacy;
    /**
     * An array of the authorized user\'s default content ratings.  Option descriptions:  * `drugs` - The video contains drug or alcohol use.  * `language` - The video contains profanity or sexually suggestive content.  * `nudity` - The video contains nudity.  * `safe` - The video is suitable for all audiences.  * `unrated` - The video hasn\'t been rated.  * `violence` - The video contains violent or graphic content. 
     * @type {Array<string>}
     * @memberof UserPreferencesVideos
     */
    'rating': UserPreferencesVideosRatingEnum;
}

type UserPreferencesVideosRatingEnum = 


