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
 * @interface EmbedPresetsEssentialsCreatePresetRequestEmbedTitle
 */
export interface EmbedPresetsEssentialsCreatePresetRequestEmbedTitle {
    /**
     * How to handle the video title in the title bar of the embeddable player.  Option descriptions:  * `hide` - Hide the video title.  * `show` - Show the video title.  * `user` - Enable the user to decide. 
     * @type {string}
     * @memberof EmbedPresetsEssentialsCreatePresetRequestEmbedTitle
     */
    'name'?: EmbedPresetsEssentialsCreatePresetRequestEmbedTitleNameEnum;
    /**
     * How to handle the owner information in the title bar of the embeddable player.  Option descriptions:  * `hide` - Hide the owner info.  * `show` - Show the owner info.  * `user` - Enable the user to decide. 
     * @type {string}
     * @memberof EmbedPresetsEssentialsCreatePresetRequestEmbedTitle
     */
    'owner'?: EmbedPresetsEssentialsCreatePresetRequestEmbedTitleOwnerEnum;
    /**
     * How to handle the owner portrait in the title bar of the embeddable player.  Option descriptions:  * `hide` - Hide the portrait.  * `show` - Show the portrait.  * `user` - Enable the user to decide. 
     * @type {string}
     * @memberof EmbedPresetsEssentialsCreatePresetRequestEmbedTitle
     */
    'portrait'?: EmbedPresetsEssentialsCreatePresetRequestEmbedTitlePortraitEnum;
}

type EmbedPresetsEssentialsCreatePresetRequestEmbedTitleNameEnum = 'hide' | 'show' | 'user'
type EmbedPresetsEssentialsCreatePresetRequestEmbedTitleOwnerEnum = 'hide' | 'show' | 'user'
type EmbedPresetsEssentialsCreatePresetRequestEmbedTitlePortraitEnum = 'hide' | 'show' | 'user'

