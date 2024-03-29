/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmbedPresetsEssentialsCreateEmbedPresetRequestEmbedLogosCustom } from './embed-presets-essentials-create-embed-preset-request-embed-logos-custom';

/**
 * 
 * @export
 * @interface EmbedPresetsEssentialsCreateEmbedPresetRequestEmbedLogos
 */
export interface EmbedPresetsEssentialsCreateEmbedPresetRequestEmbedLogos {
    /**
     * 
     * @type {EmbedPresetsEssentialsCreateEmbedPresetRequestEmbedLogosCustom}
     * @memberof EmbedPresetsEssentialsCreateEmbedPresetRequestEmbedLogos
     */
    'custom'?: EmbedPresetsEssentialsCreateEmbedPresetRequestEmbedLogosCustom;
    /**
     * Whether to show the Vimeo logo on the embeddable player.
     * @type {boolean}
     * @memberof EmbedPresetsEssentialsCreateEmbedPresetRequestEmbedLogos
     */
    'vimeo'?: boolean;
}

