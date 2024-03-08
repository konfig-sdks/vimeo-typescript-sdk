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
 * @interface UploadVideoRequestEmbedLogosCustom
 */
export interface UploadVideoRequestEmbedLogosCustom {
    /**
     * Whether to show the active custom logo on the embeddable player.
     * @type {boolean}
     * @memberof UploadVideoRequestEmbedLogosCustom
     */
    'active'?: boolean;
    /**
     * The URL that loads when the user clicks the custom logo.
     * @type {string}
     * @memberof UploadVideoRequestEmbedLogosCustom
     */
    'link'?: string;
    /**
     * Whether the custom logo is always visible on the embeddable player (`true`) or whether the logo appears and disappears with the rest of the UI (`false`).
     * @type {boolean}
     * @memberof UploadVideoRequestEmbedLogosCustom
     */
    'sticky'?: boolean;
}

