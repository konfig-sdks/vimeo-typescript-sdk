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
 * @interface LiveEssentialsCreateEventForUserRequestEmbedLogosCustom
 */
export interface LiveEssentialsCreateEventForUserRequestEmbedLogosCustom {
    /**
     * Whether to show the custom logo on the embed player.
     * @type {boolean}
     * @memberof LiveEssentialsCreateEventForUserRequestEmbedLogosCustom
     */
    'active'?: boolean;
    /**
     * The URL that loads when the user clicks the custom logo.
     * @type {string}
     * @memberof LiveEssentialsCreateEventForUserRequestEmbedLogosCustom
     */
    'link'?: string;
    /**
     * Whether to show the custom logo persistently (`true`) or hide it with the rest of the UI (`false`).
     * @type {boolean}
     * @memberof LiveEssentialsCreateEventForUserRequestEmbedLogosCustom
     */
    'sticky'?: boolean;
}

