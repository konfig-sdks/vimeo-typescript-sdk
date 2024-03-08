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
 * @interface LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest1EmbedLogosCustom
 */
export interface LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest1EmbedLogosCustom {
    /**
     * Whether to show the custom logo on the embed player.
     * @type {boolean}
     * @memberof LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest1EmbedLogosCustom
     */
    'active'?: boolean;
    /**
     * The URL that loads when the user clicks the custom logo.
     * @type {string}
     * @memberof LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest1EmbedLogosCustom
     */
    'link'?: string;
    /**
     * Whether to show the custom logo persistently (`true`) or hide it with the rest of the UI (`false`).
     * @type {boolean}
     * @memberof LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest1EmbedLogosCustom
     */
    'sticky'?: boolean;
}
