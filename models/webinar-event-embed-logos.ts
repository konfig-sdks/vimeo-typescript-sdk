/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WebinarEventEmbedLogosCustom } from './webinar-event-embed-logos-custom';

/**
 * A collection of information about the logo in the corner of the embeddable player.
 * @export
 * @interface WebinarEventEmbedLogos
 */
export interface WebinarEventEmbedLogos {
    /**
     * 
     * @type {WebinarEventEmbedLogosCustom}
     * @memberof WebinarEventEmbedLogos
     */
    'custom': WebinarEventEmbedLogosCustom;
    /**
     * Whether the Vimeo logo appears in the embeddable player for the video.
     * @type {boolean}
     * @memberof WebinarEventEmbedLogos
     */
    'vimeo': boolean;
}
