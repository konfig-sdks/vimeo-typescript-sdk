/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The initial privacy settings of videos generated by streaming to the event as well as the embed privacy of the entire collection.
 * @export
 * @interface LiveEventRecurringStreamPrivacy
 */
export interface LiveEventRecurringStreamPrivacy {
    /**
     * The event\'s embed permission setting.  Option descriptions:  * `private` - The event can\'t be embedded on any domain.  * `public` - The event can be embedded on any domain.  * `whitelist` - The event can be embedded on whitelisted domains only. 
     * @type {string}
     * @memberof LiveEventRecurringStreamPrivacy
     */
    'embed': LiveEventRecurringStreamPrivacyEmbedEnum;
    /**
     * The hash for unlisted events.
     * @type {string}
     * @memberof LiveEventRecurringStreamPrivacy
     */
    'unlisted_hash': string | null;
    /**
     * The general privacy setting for generated videos and the embed privacy of the entire collection.  Option descriptions:  * `anybody` - Anyone can access the videos. This privacy setting appears as `Public` on the Vimeo front end.  * `embed_only` - The videos don\'t appear on Vimeo, but they can be embedded elsewhere.  * `nobody` - Only the event owner can access the videos. This privacy setting appears as `Private` on the Vimeo front end.  * `password` - Only those with the password can access the videos.  * `unlisted` - Only those with the private link can access the videos. 
     * @type {string}
     * @memberof LiveEventRecurringStreamPrivacy
     */
    'view': LiveEventRecurringStreamPrivacyViewEnum;
}

type LiveEventRecurringStreamPrivacyEmbedEnum = 'private' | 'public' | 'whitelist'
type LiveEventRecurringStreamPrivacyViewEnum = 'anybody' | 'embed_only' | 'nobody' | 'password' | 'unlisted'


