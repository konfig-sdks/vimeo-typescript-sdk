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
 * @interface UserPreferencesVideosPrivacy
 */
export interface UserPreferencesVideosPrivacy {
    /**
     * Whether other users can add the authenticated user\'s videos.
     * @type {boolean}
     * @memberof UserPreferencesVideosPrivacy
     */
    'add'?: boolean;
    /**
     * The authenticated user\'s privacy preference for comments.  Option descriptions:  * `anybody` - Anyone can comment on the user\'s videos.  * `contacts` - Only contacts can comment on the user\'s videos.  * `nobody` - No one can comment on the user\'s videos. 
     * @type {string}
     * @memberof UserPreferencesVideosPrivacy
     */
    'comments'?: UserPreferencesVideosPrivacyCommentsEnum;
    /**
     * Whether other users can download the authenticated user\'s videos.
     * @type {boolean}
     * @memberof UserPreferencesVideosPrivacy
     */
    'download'?: boolean;
    /**
     * The authenticated user\'s privacy preference for embeds.  Option descriptions:  * `private` - Only the user can embed their own videos.  * `public` - Anyone can embed the user\'s videos.  * `whitelist` - Only those on the whitelist can embed the user\'s videos. 
     * @type {string}
     * @memberof UserPreferencesVideosPrivacy
     */
    'embed'?: UserPreferencesVideosPrivacyEmbedEnum;
    /**
     * The default password for the video.
     * @type {string}
     * @memberof UserPreferencesVideosPrivacy
     */
    'password'?: string;
    /**
     * The authenticated user\'s privacy preference for views.  Option descriptions:  * `anybody` - Anyone can view the user\'s videos. This privacy setting appears as `Public` on the Vimeo front end.  * `contacts` - Only contacts can view the user\'s videos. _This field is deprecated._  * `disable` - Views are disabled for the user\'s videos. This privacy setting appears as `Hide from Vimeo` on the Vimeo front end.  * `nobody` - No one except the user can view the user\'s videos. This privacy setting appears as `Private` on the Vimeo front end.  * `password` - Only those with the password can view the user\'s videos.  * `unlisted` - Anybody can view the user\'s videos if they have a link.  * `users` - Only other Vimeo members can view the user\'s videos. _This field is deprecated._ 
     * @type {string}
     * @memberof UserPreferencesVideosPrivacy
     */
    'view'?: UserPreferencesVideosPrivacyViewEnum;
}

type UserPreferencesVideosPrivacyCommentsEnum = 'anybody' | 'contacts' | 'nobody'
type UserPreferencesVideosPrivacyEmbedEnum = 'private' | 'public' | 'whitelist'
type UserPreferencesVideosPrivacyViewEnum = 'anybody' | 'contacts' | 'disable' | 'nobody' | 'password' | 'unlisted' | 'users'


