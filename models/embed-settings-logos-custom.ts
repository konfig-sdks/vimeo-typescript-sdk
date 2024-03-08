/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A collection of information relating to custom logos in the embeddable player.
 * @export
 * @interface EmbedSettingsLogosCustom
 */
export interface EmbedSettingsLogosCustom {
    /**
     * Whether the custom logo appears in the embeddable player.
     * @type {boolean}
     * @memberof EmbedSettingsLogosCustom
     */
    'active': boolean;
    /**
     * The URL that loads upon clicking the custom logo.
     * @type {string}
     * @memberof EmbedSettingsLogosCustom
     */
    'link': string | null;
    /**
     * Whether the custom logo appears even when the player interface is hidden.
     * @type {boolean}
     * @memberof EmbedSettingsLogosCustom
     */
    'sticky': boolean;
    /**
     * The URL of the selected custom logo.
     * @type {string}
     * @memberof EmbedSettingsLogosCustom
     */
    'url': string | null;
    /**
     * Whether the custom logo should use the URL link.
     * @type {boolean}
     * @memberof EmbedSettingsLogosCustom
     */
    'use_link': boolean;
}
