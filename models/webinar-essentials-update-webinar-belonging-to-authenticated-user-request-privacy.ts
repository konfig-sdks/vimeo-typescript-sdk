/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The privacy settings of the webinar.
 * @export
 * @interface WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequestPrivacy
 */
export interface WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequestPrivacy {
    /**
     * The initial embed privacy of the webinar.  Option descriptions:  * `private` - The webinar can\'t be embedded on any domain.  * `public` - The webinar can be embedded on any domain.  * `whitelist` - The webinar can be embedded on whitelisted domains only. 
     * @type {string}
     * @memberof WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequestPrivacy
     */
    'embed'?: WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequestPrivacyEmbedEnum;
    /**
     * The initial privacy of the webinar. This can\'t be updated once the webinar is in session.  Option descriptions:  * `anybody` - Anyone can access the webinar. This privacy setting appears as `Public` on the Vimeo front end.  * `nobody` - No one except the owner can access the webinar. This privacy setting appears as `Private` on the Vimeo front end.  * `password` - Only those with the password can access the live event.  * `team` - Only members of the authenticated user\'s team can access the webinar. 
     * @type {string}
     * @memberof WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequestPrivacy
     */
    'view'?: WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequestPrivacyViewEnum;
}

type WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequestPrivacyEmbedEnum = 'private' | 'public' | 'whitelist'
type WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequestPrivacyViewEnum = 'anybody' | 'nobody' | 'password' | 'team'


