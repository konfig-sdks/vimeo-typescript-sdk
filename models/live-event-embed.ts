/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LiveEventEmbedColors } from './live-event-embed-colors';
import { LiveEventEmbedEmbedProperties } from './live-event-embed-embed-properties';
import { LiveEventEmbedLogos } from './live-event-embed-logos';

/**
 * The event\'s embed data.
 * @export
 * @interface LiveEventEmbed
 */
export interface LiveEventEmbed {
    /**
     * Whether the embedded RLE player should display the video title.
     * @type {boolean}
     * @memberof LiveEventEmbed
     */
    'title': boolean;
    /**
     * Whether AirPlay is enabled in the embeddable player.
     * @type {boolean}
     * @memberof LiveEventEmbed
     */
    'airplay': boolean;
    /**
     * Whether the embedded RLE player should autoplay the RLE content.
     * @type {boolean}
     * @memberof LiveEventEmbed
     */
    'autoplay': boolean;
    /**
     * The list of user-uploaded logos for configuration of the embed player.
     * @type {Array<string>}
     * @memberof LiveEventEmbed
     */
    'available_player_logos': Array<string>;
    /**
     * Whether the embedded RLE player should display the author\'s name.
     * @type {boolean}
     * @memberof LiveEventEmbed
     */
    'byline': boolean;
    /**
     * The chat\'s iFrame source URL.
     * @type {string}
     * @memberof LiveEventEmbed
     */
    'chat_embed_source': string | null;
    /**
     * Whether the Chromecast button appears in the embeddable player.
     * @type {boolean}
     * @memberof LiveEventEmbed
     */
    'chromecast': boolean;
    /**
     * Whether closed captions are enabled in the embeddable player.
     * @type {boolean}
     * @memberof LiveEventEmbed
     */
    'closed_captions': boolean;
    /**
     * The first player color, which controls the color of the progress bar, buttons, and more.
     * @type {string}
     * @memberof LiveEventEmbed
     */
    'color': string;
    /**
     * 
     * @type {LiveEventEmbedColors}
     * @memberof LiveEventEmbed
     */
    'colors': LiveEventEmbedColors;
    /**
     * The embed code for RLE chat.
     * @type {string}
     * @memberof LiveEventEmbed
     */
    'embed_chat': string | null;
    /**
     * 
     * @type {LiveEventEmbedEmbedProperties}
     * @memberof LiveEventEmbed
     */
    'embed_properties': LiveEventEmbedEmbedProperties | null;
    /**
     * Whether the embedded RLE player should display the event schedule.
     * @type {boolean}
     * @memberof LiveEventEmbed
     */
    'event_schedule': boolean;
    /**
     * Whether the embedded RLE player should include the fullscreen controls.
     * @type {boolean}
     * @memberof LiveEventEmbed
     */
    'fullscreen_button': boolean;
    /**
     * Whether the Live label should be visible over the player.
     * @type {boolean}
     * @memberof LiveEventEmbed
     */
    'hide_live_label': boolean;
    /**
     * Whether the embedded RLE player should hide the viewer counter.
     * @type {boolean}
     * @memberof LiveEventEmbed
     */
    'hide_viewer_count': boolean;
    /**
     * The fixed HTML code to embed the event\'s playlist on a website.
     * @type {string}
     * @memberof LiveEventEmbed
     */
    'html': string | null;
    /**
     * Whether the embedded RLE player should include the `like` button.
     * @type {boolean}
     * @memberof LiveEventEmbed
     */
    'like_button': boolean;
    /**
     * 
     * @type {LiveEventEmbedLogos}
     * @memberof LiveEventEmbed
     */
    'logos': LiveEventEmbedLogos;
    /**
     * Whether the embedded RLE player should loop back to the first video once content is exhausted.
     * @type {boolean}
     * @memberof LiveEventEmbed
     */
    'loop': boolean;
    /**
     * Whether picture-in-picture is enabled and the button appears in the embeddable player.
     * @type {boolean}
     * @memberof LiveEventEmbed
     */
    'pip': boolean;
    /**
     * The position of the player\'s play button.  Option descriptions:  * `0` - The play button has the default position.  * `1` - The play button appears at the bottom of the interface.  * `2` - The play button appears in the center of the interface. 
     * @type {string}
     * @memberof LiveEventEmbed
     */
    'play_button_position': LiveEventEmbedPlayButtonPositionEnum;
    /**
     * Whether the embedded RLE player should include the playbar.
     * @type {boolean}
     * @memberof LiveEventEmbed
     */
    'playbar': boolean;
    /**
     * Whether the playlist component appears in the embeddable player for this RLE.
     * @type {boolean}
     * @memberof LiveEventEmbed
     */
    'playlist': boolean;
    /**
     * Whether the embedded RLE player should display the author\'s portrait.
     * @type {boolean}
     * @memberof LiveEventEmbed
     */
    'portrait': boolean;
    /**
     * The responsive HTML code to embed the event\'s playlist on a website.
     * @type {string}
     * @memberof LiveEventEmbed
     */
    'responsive_html': string | null;
    /**
     * Whether the schedule component appears in the embeddable player for this RLE.
     * @type {boolean}
     * @memberof LiveEventEmbed
     */
    'schedule': boolean;
    /**
     * Whether the embedded RLE player should display the latest video placeholder.
     * @type {boolean}
     * @memberof LiveEventEmbed
     */
    'show_latest_archived_clip': boolean;
    /**
     * Whether the embedded RLE player should display the schedule timezone.
     * @type {boolean}
     * @memberof LiveEventEmbed
     */
    'show_timezone': boolean;
    /**
     * Whether the embedded RLE player should use a custom color or the default Vimeo blue.
     * @type {string}
     * @memberof LiveEventEmbed
     */
    'use_color': string;
    /**
     * Whether the embedded RLE player should include the volume controls.
     * @type {boolean}
     * @memberof LiveEventEmbed
     */
    'volume': boolean;
}

type LiveEventEmbedPlayButtonPositionEnum = '0' | '1' | '2'

