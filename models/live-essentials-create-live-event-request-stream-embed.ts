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
 * @interface LiveEssentialsCreateLiveEventRequestStreamEmbed
 */
export interface LiveEssentialsCreateLiveEventRequestStreamEmbed {
    /**
     * The embed permission level for the event.  Option descriptions:  * `private` - Only the user can embed the event.  * `public` - Anyone can embed the event.  * `whitelist` - Only those on the whitelist can embed the event. 
     * @type {string}
     * @memberof LiveEssentialsCreateLiveEventRequestStreamEmbed
     */
    'embed'?: LiveEssentialsCreateLiveEventRequestStreamEmbedEmbedEnum;
}

type LiveEssentialsCreateLiveEventRequestStreamEmbedEmbedEnum = 'private' | 'public' | 'whitelist'


