/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmbedPresetsEssentialsCreatePresetRequestEmbedLogosCustom } from './embed-presets-essentials-create-preset-request-embed-logos-custom';

/**
 * 
 * @export
 * @interface EmbedPresetsEssentialsCreatePresetRequestEmbedLogos
 */
export interface EmbedPresetsEssentialsCreatePresetRequestEmbedLogos {
    /**
     * 
     * @type {EmbedPresetsEssentialsCreatePresetRequestEmbedLogosCustom}
     * @memberof EmbedPresetsEssentialsCreatePresetRequestEmbedLogos
     */
    'custom'?: EmbedPresetsEssentialsCreatePresetRequestEmbedLogosCustom;
    /**
     * Whether to show the Vimeo logo on the embeddable player.
     * @type {boolean}
     * @memberof EmbedPresetsEssentialsCreatePresetRequestEmbedLogos
     */
    'vimeo'?: boolean;
}

