/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmbedPresetsEssentialsCreatePresetRequestEmbedButtons } from './embed-presets-essentials-create-preset-request-embed-buttons';
import { EmbedPresetsEssentialsCreatePresetRequestEmbedColors } from './embed-presets-essentials-create-preset-request-embed-colors';
import { EmbedPresetsEssentialsCreatePresetRequestEmbedLogos } from './embed-presets-essentials-create-preset-request-embed-logos';
import { EmbedPresetsEssentialsCreatePresetRequestEmbedPlayButton } from './embed-presets-essentials-create-preset-request-embed-play-button';
import { EmbedPresetsEssentialsCreatePresetRequestEmbedTitle } from './embed-presets-essentials-create-preset-request-embed-title';

/**
 * 
 * @export
 * @interface EmbedPresetsEssentialsCreatePresetRequestEmbed
 */
export interface EmbedPresetsEssentialsCreatePresetRequestEmbed {
    /**
     * 
     * @type {EmbedPresetsEssentialsCreatePresetRequestEmbedTitle}
     * @memberof EmbedPresetsEssentialsCreatePresetRequestEmbed
     */
    'title'?: EmbedPresetsEssentialsCreatePresetRequestEmbedTitle;
    /**
     * Whether AirPlay is enabled in the embeddable player.
     * @type {boolean}
     * @memberof EmbedPresetsEssentialsCreatePresetRequestEmbed
     */
    'airplay'?: boolean;
    /**
     * Whether multiple audio tracks can appear in the embeddable player.
     * @type {boolean}
     * @memberof EmbedPresetsEssentialsCreatePresetRequestEmbed
     */
    'audio_tracks'?: boolean;
    /**
     * 
     * @type {EmbedPresetsEssentialsCreatePresetRequestEmbedButtons}
     * @memberof EmbedPresetsEssentialsCreatePresetRequestEmbed
     */
    'buttons'?: EmbedPresetsEssentialsCreatePresetRequestEmbedButtons;
    /**
     * Whether chapters are enabled in the embeddable player.
     * @type {boolean}
     * @memberof EmbedPresetsEssentialsCreatePresetRequestEmbed
     */
    'chapters'?: boolean;
    /**
     * Whether the Chromecast button appears in the embeddable player.
     * @type {boolean}
     * @memberof EmbedPresetsEssentialsCreatePresetRequestEmbed
     */
    'chromecast'?: boolean;
    /**
     * Whether closed captions are enabled in the embeddable player.
     * @type {boolean}
     * @memberof EmbedPresetsEssentialsCreatePresetRequestEmbed
     */
    'closed_captions'?: boolean;
    /**
     * The main color of the embeddable player.
     * @type {string}
     * @memberof EmbedPresetsEssentialsCreatePresetRequestEmbed
     */
    'color'?: string;
    /**
     * 
     * @type {EmbedPresetsEssentialsCreatePresetRequestEmbedColors}
     * @memberof EmbedPresetsEssentialsCreatePresetRequestEmbed
     */
    'colors'?: EmbedPresetsEssentialsCreatePresetRequestEmbedColors;
    /**
     * 
     * @type {EmbedPresetsEssentialsCreatePresetRequestEmbedLogos}
     * @memberof EmbedPresetsEssentialsCreatePresetRequestEmbed
     */
    'logos'?: EmbedPresetsEssentialsCreatePresetRequestEmbedLogos;
    /**
     * 
     * @type {EmbedPresetsEssentialsCreatePresetRequestEmbedPlayButton}
     * @memberof EmbedPresetsEssentialsCreatePresetRequestEmbed
     */
    'play_button'?: EmbedPresetsEssentialsCreatePresetRequestEmbedPlayButton;
    /**
     * Whether to show the playbar on the embeddable player.
     * @type {boolean}
     * @memberof EmbedPresetsEssentialsCreatePresetRequestEmbed
     */
    'playbar'?: boolean;
    /**
     * Whether to show the quality selector in the embeddable player.
     * @type {boolean}
     * @memberof EmbedPresetsEssentialsCreatePresetRequestEmbed
     */
    'quality_selector'?: boolean;
    /**
     * Whether the transcript controls appear in the embeddable player.
     * @type {boolean}
     * @memberof EmbedPresetsEssentialsCreatePresetRequestEmbed
     */
    'transcript'?: boolean;
    /**
     * Whether to show the volume selector on the embeddable player.
     * @type {boolean}
     * @memberof EmbedPresetsEssentialsCreatePresetRequestEmbed
     */
    'volume'?: boolean;
}

