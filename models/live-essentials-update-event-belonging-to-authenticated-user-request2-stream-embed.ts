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
 * @interface LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest2StreamEmbed
 */
export interface LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest2StreamEmbed {
    /**
     * The embed permission level for the event.  Option descriptions:  * `private` - Only the user can embed the event.  * `public` - Anyone can embed the event.  * `whitelist` - Only those on the whitelist can embed the event. 
     * @type {string}
     * @memberof LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest2StreamEmbed
     */
    'embed'?: LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest2StreamEmbedEmbedEnum;
}

type LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest2StreamEmbedEmbedEnum = 'private' | 'public' | 'whitelist'

