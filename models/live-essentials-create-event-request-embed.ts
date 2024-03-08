/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LiveEssentialsCreateEventRequestEmbedLogos } from './live-essentials-create-event-request-embed-logos';

/**
 * The embed settings of the event and the videos generated by streaming to this event.
 * @export
 * @interface LiveEssentialsCreateEventRequestEmbed
 */
export interface LiveEssentialsCreateEventRequestEmbed {
    /**
     * Whether playback starts automatically on load.
     * @type {boolean}
     * @memberof LiveEssentialsCreateEventRequestEmbed
     */
    'autoplay'?: boolean;
    /**
     * The hexadecimal color code for the main color of the embed player.
     * @type {string}
     * @memberof LiveEssentialsCreateEventRequestEmbed
     */
    'color'?: string;
    /**
     * 
     * @type {LiveEssentialsCreateEventRequestEmbedLogos}
     * @memberof LiveEssentialsCreateEventRequestEmbed
     */
    'logos'?: LiveEssentialsCreateEventRequestEmbedLogos;
    /**
     * Whether the playlist should start from the beginning again after reaching the end of the last video.
     * @type {boolean}
     * @memberof LiveEssentialsCreateEventRequestEmbed
     */
    'loop'?: boolean;
    /**
     * Whether to show the playlist controls on the embed player.
     * @type {boolean}
     * @memberof LiveEssentialsCreateEventRequestEmbed
     */
    'playlist'?: boolean;
    /**
     * Whether to show the event schedule on the embed player.
     * @type {boolean}
     * @memberof LiveEssentialsCreateEventRequestEmbed
     */
    'schedule'?: boolean;
    /**
     * Whether to show the latest archived video in the embed player when off-air.
     * @type {boolean}
     * @memberof LiveEssentialsCreateEventRequestEmbed
     */
    'show_latest_archived_clip'?: boolean;
    /**
     * Whether the embed player should use (`true`) or ignore (`false`) the **embed.color** value.
     * @type {boolean}
     * @memberof LiveEssentialsCreateEventRequestEmbed
     */
    'use_color'?: boolean;
}

