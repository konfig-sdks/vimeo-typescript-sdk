/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LiveEventRecurringEmbedLogosCustom } from './live-event-recurring-embed-logos-custom';

/**
 * A collection of information about the logo in the corner of the embeddable player.
 * @export
 * @interface LiveEventRecurringEmbedLogos
 */
export interface LiveEventRecurringEmbedLogos {
    /**
     * 
     * @type {LiveEventRecurringEmbedLogosCustom}
     * @memberof LiveEventRecurringEmbedLogos
     */
    'custom': LiveEventRecurringEmbedLogosCustom;
    /**
     * Whether the Vimeo logo appears in the embeddable player for the video.
     * @type {boolean}
     * @memberof LiveEventRecurringEmbedLogos
     */
    'vimeo': boolean;
}

