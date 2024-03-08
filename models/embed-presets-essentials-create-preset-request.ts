/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmbedPresetsEssentialsCreatePresetRequestEmbed } from './embed-presets-essentials-create-preset-request-embed';

/**
 * 
 * @export
 * @interface EmbedPresetsEssentialsCreatePresetRequest
 */
export interface EmbedPresetsEssentialsCreatePresetRequest {
    /**
     * 
     * @type {EmbedPresetsEssentialsCreatePresetRequestEmbed}
     * @memberof EmbedPresetsEssentialsCreatePresetRequest
     */
    'embed'?: EmbedPresetsEssentialsCreatePresetRequestEmbed;
    /**
     * The name of the embed preset.
     * @type {string}
     * @memberof EmbedPresetsEssentialsCreatePresetRequest
     */
    'name'?: string;
}

