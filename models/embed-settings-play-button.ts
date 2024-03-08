/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A representation of the play button\'s settings.
 * @export
 * @interface EmbedSettingsPlayButton
 */
export interface EmbedSettingsPlayButton {
    /**
     * The position of the play button within the embeddable player.  Option descriptions:  * `auto` - Use Vimeo\'s default positioning for the play button.  * `bottom` - The play button is positioned at the bottom of the player, except when in tiny mode.  * `center` - The play button is positioned in the center of the player. 
     * @type {string}
     * @memberof EmbedSettingsPlayButton
     */
    'position': EmbedSettingsPlayButtonPositionEnum;
}

type EmbedSettingsPlayButtonPositionEnum = 'auto' | 'bottom' | 'center'


