/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LiveEventInteractionToolsSettingsInner } from './live-event-interaction-tools-settings-inner';
import { LiveEventRecurringEmailQuota } from './live-event-recurring-email-quota';
import { LiveEventRecurringEmbed } from './live-event-recurring-embed';
import { LiveEventRecurringMetadata } from './live-event-recurring-metadata';
import { LiveEventRecurringStreamPrivacy } from './live-event-recurring-stream-privacy';
import { LiveEventSchedule } from './live-event-schedule';
import { Picture } from './picture';
import { Project } from './project';
import { User } from './user';

/**
 * 
 * @export
 * @interface LiveEventRecurring
 */
export interface LiveEventRecurring {
    /**
     * The title of the event. This field is also optionally used as the base title for videos created by streaming to the event.
     * @type {string}
     * @memberof LiveEventRecurring
     */
    'title': string;
    /**
     * Information about the associated showcase.
     * @type {Array<string>}
     * @memberof LiveEventRecurring
     */
    'album': Array<string> | null;
    /**
     * Whether the share link for the videos generated by streaming to the event is usable.
     * @type {boolean}
     * @memberof LiveEventRecurring
     */
    'allow_share_link': boolean;
    /**
     * An array of privacy settings supported for this event and the requesting user.
     * @type {Array<string>}
     * @memberof LiveEventRecurring
     */
    'allowed_privacies': Array<string>;
    /**
     * Whether the automated closed captions feature is enabled.
     * @type {boolean}
     * @memberof LiveEventRecurring
     */
    'auto_cc_enabled': boolean | null;
    /**
     * A comma-separated list of keywords for enhancing the speech detection of automated closed captions.
     * @type {string}
     * @memberof LiveEventRecurring
     */
    'auto_cc_keywords': string | null;
    /**
     * The language of the automated closed captions.  Option descriptions:  * `de-DE` - The language is German.  * `en-US` - The language is English.  * `es-ES` - The language is Spanish.  * `fr-FR` - The language is French.  * `pt-BR` - The language is Portuguese. 
     * @type {string}
     * @memberof LiveEventRecurring
     */
    'auto_cc_language': LiveEventRecurringAutoCcLanguageEnum;
    /**
     * The amount of time remaining to the user to access the automated closed captions feature.
     * @type {number}
     * @memberof LiveEventRecurring
     */
    'auto_cc_remaining': number | null;
    /**
     * When the value of this field is `true`, the title for the next video in the event is generated based on the time of the stream and the **title** field of the event.
     * @type {boolean}
     * @memberof LiveEventRecurring
     */
    'automatically_title_stream': boolean;
    /**
     * Whether to display live chat on the event page on Vimeo.
     * @type {boolean}
     * @memberof LiveEventRecurring
     */
    'chat_enabled': boolean;
    /**
     * The time in ISO 8601 format when the event was completed.
     * @type {string}
     * @memberof LiveEventRecurring
     */
    'completed_on': string;
    /**
     * The event\'s granular content ratings.  Option descriptions:  * `advertisement` - The event contains advertisements.  * `drugs` - The event contains drug or alcohol use.  * `language` - The event contains profanity or sexually suggestive content.  * `nudity` - The event contains nudity.  * `safe` - The event is safe for all audiences.  * `unrated` - The event hasn\'t been rated.  * `violence` - The event contains violence. 
     * @type {Array<string>}
     * @memberof LiveEventRecurring
     */
    'content_rating': LiveEventRecurringContentRatingEnum;
    /**
     * The time in ISO 8601 format when the event was created.
     * @type {string}
     * @memberof LiveEventRecurring
     */
    'created_time': string;
    /**
     * Whether the DVR feature is enabled.
     * @type {boolean}
     * @memberof LiveEventRecurring
     */
    'dvr': boolean;
    /**
     * 
     * @type {LiveEventRecurringEmailQuota}
     * @memberof LiveEventRecurring
     */
    'email_quota': LiveEventRecurringEmailQuota;
    /**
     * 
     * @type {LiveEventRecurringEmbed}
     * @memberof LiveEventRecurring
     */
    'embed': LiveEventRecurringEmbed;
    /**
     * Whether the event was created from a showcase.
     * @type {boolean}
     * @memberof LiveEventRecurring
     */
    'from_showcase': boolean;
    /**
     * Whether the event was created from a webinar.
     * @type {boolean}
     * @memberof LiveEventRecurring
     */
    'from_webinar'?: boolean;
    /**
     * The first video to be played in the playlist.
     * @type {object}
     * @memberof LiveEventRecurring
     */
    'head_clip': object | null;
    /**
     * The settings for the interaction tools.
     * @type {Array<LiveEventInteractionToolsSettingsInner>}
     * @memberof LiveEventRecurring
     */
    'interaction_tools_settings': Array<LiveEventInteractionToolsSettingsInner> | null;
    /**
     * The type of latency.  Option descriptions:  * `fail-safe` - The latency is in the failsafe range, with a delay of 60-75 seconds.  * `low` - The latency is low, with a delay of 5-7 seconds.  * `standard` - The latency is standard, with a delay of 15-20 seconds. 
     * @type {string}
     * @memberof LiveEventRecurring
     */
    'latency': LiveEventRecurringLatencyEnum;
    /**
     * The unique ID for the registered viewer.
     * @type {string}
     * @memberof LiveEventRecurring
     */
    'lead_uuid': string;
    /**
     * The URI to access the event on Vimeo.
     * @type {string}
     * @memberof LiveEventRecurring
     */
    'link': string;
    /**
     * A list of videos belonging to the event, including their video IDs and dates streamed.
     * @type {Array<string>}
     * @memberof LiveEventRecurring
     */
    'live_clips': Array<string>;
    /**
     * _This field is deprecated in favor of the following method:_ [Get all the destinations of a one-time live event](https://developer.vimeo.com/api/reference/live#get_one_time_event_destinations).
     * @type {Array<string>}
     * @memberof LiveEventRecurring
     */
    'live_destinations': Array<string> | null;
    /**
     * Whether the low-latency feature is enabled.
     * @type {boolean}
     * @memberof LiveEventRecurring
     */
    'low_latency': boolean;
    /**
     * 
     * @type {LiveEventRecurringMetadata}
     * @memberof LiveEventRecurring
     */
    'metadata': LiveEventRecurringMetadata;
    /**
     * The date in ISO 8601 format on which the next occurrence of the event is expected to be live.
     * @type {string}
     * @memberof LiveEventRecurring
     */
    'next_occurrence_time': string | null;
    /**
     * Information about the folder that contains the event.
     * @type {Project}
     * @memberof LiveEventRecurring
     */
    'parent_folder': Project;
    /**
     * The active thumbnail image of the event.
     * @type {Picture}
     * @memberof LiveEventRecurring
     */
    'pictures': Picture;
    /**
     * The order in which the videos inside the event appear in the playlist.  Option descriptions:  * `added_first` - The videos appear according to when they were added to the event, with the most recently added first.  * `added_last` - The videos appear according to when they were added to the event, with the most recently added last.  * `alphabetical` - The videos appear alphabetically by their title.  * `arranged` - The videos appear as arranged by the owner of the event.  * `comments` - The videos appear according to their number of comments.  * `duration` - The videos appear in order of duration.  * `likes` - The videos appear according to their number of likes.  * `newest` - The videos appear in chronological order, with the newest first.  * `oldest` - The videos appear in chronological order, with the oldest first.  * `plays` - The videos appear according to their number of plays. 
     * @type {string}
     * @memberof LiveEventRecurring
     */
    'playlist_sort': LiveEventRecurringPlaylistSortEnum;
    /**
     * The preferred streaming method.  Option descriptions:  * `browser` - Stream in the browser.  * `encoder` - Stream by the encoder. 
     * @type {string}
     * @memberof LiveEventRecurring
     */
    'preferred_stream_method': LiveEventRecurringPreferredStreamMethodEnum;
    /**
     * The upstream RTMP link. Send your live content to this link to create a live video on the event.
     * @type {string}
     * @memberof LiveEventRecurring
     */
    'rtmp_link': string | null;
    /**
     * Whether to preview the RTMP stream before the event goes live.
     * @type {boolean}
     * @memberof LiveEventRecurring
     */
    'rtmp_preview': boolean;
    /**
     * The upstream RTMPS link. Send your live content to this link to create a live video on the event.
     * @type {string}
     * @memberof LiveEventRecurring
     */
    'rtmps_link': string | null;
    /**
     * The description of the time or times that the event is expected to be live.
     * @type {LiveEventSchedule}
     * @memberof LiveEventRecurring
     */
    'schedule': LiveEventSchedule;
    /**
     * Whether the scheduled playback feature is enabled.
     * @type {boolean}
     * @memberof LiveEventRecurring
     */
    'scheduled_playback': boolean;
    /**
     * The status of the event.  Option descriptions:  * `ended` - The user ended the event.  * `started` - The user started the event. 
     * @type {string}
     * @memberof LiveEventRecurring
     */
    'status': LiveEventRecurringStatusEnum;
    /**
     * The description of the next video streamed to the event.
     * @type {string}
     * @memberof LiveEventRecurring
     */
    'stream_description': string | null;
    /**
     * The stream key used in conjunction with the RTMP and RTMPS links.
     * @type {string}
     * @memberof LiveEventRecurring
     */
    'stream_key': string | null;
    /**
     * The stream mode of the event.  Option descriptions:  * `live` - The stream is live playback.  * `record` - The stream is in record mode.  * `simulive` - The stream is scheduled media playback. 
     * @type {string}
     * @memberof LiveEventRecurring
     */
    'stream_mode': LiveEventRecurringStreamModeEnum;
    /**
     * The password that anyone can use to access the videos generated by streaming to the event.
     * @type {string}
     * @memberof LiveEventRecurring
     */
    'stream_password': string | null;
    /**
     * 
     * @type {LiveEventRecurringStreamPrivacy}
     * @memberof LiveEventRecurring
     */
    'stream_privacy': LiveEventRecurringStreamPrivacy;
    /**
     * The title of the next video streamed to the event. This field applies only when **automatically_title_stream** is `false`.
     * @type {string}
     * @memberof LiveEventRecurring
     */
    'stream_title': string;
    /**
     * The event\'s video. An event always has a video, which is either in a pre-live state (ready to be streamed to) or in a live state (which is currently being streamed to).
     * @type {object}
     * @memberof LiveEventRecurring
     */
    'streamable_clip': object | null;
    /**
     * The time zone used in resolving the timestamps included in auto-generated video titles.
     * @type {string}
     * @memberof LiveEventRecurring
     */
    'time_zone': string;
    /**
     * Whether to ignore the time limit of the automated closed captions feature.
     * @type {boolean}
     * @memberof LiveEventRecurring
     */
    'unlimited_auto_cc': boolean | null;
    /**
     * Whether 24/7 streaming is enabled for the event.
     * @type {boolean}
     * @memberof LiveEventRecurring
     */
    'unlimited_duration': boolean;
    /**
     * The event\'s canonical relative URI.
     * @type {string}
     * @memberof LiveEventRecurring
     */
    'uri': string;
    /**
     * The owner of the event.
     * @type {User}
     * @memberof LiveEventRecurring
     */
    'user': User;
    /**
     * The URI to access the event on Vimeo with or without an unlisted hash.
     * @type {string}
     * @memberof LiveEventRecurring
     */
    'view_link': string;
    /**
     * Information about the associated webinar.
     * @type {Array<string>}
     * @memberof LiveEventRecurring
     */
    'webinar': Array<string> | null;
}

type LiveEventRecurringAutoCcLanguageEnum = 'de-DE' | 'en-US' | 'es-ES' | 'fr-FR' | 'pt-BR'
type LiveEventRecurringContentRatingEnum = 
type LiveEventRecurringLatencyEnum = 'fail-safe' | 'low' | 'standard'
type LiveEventRecurringPlaylistSortEnum = 'added_first' | 'added_last' | 'alphabetical' | 'arranged' | 'comments' | 'duration' | 'likes' | 'newest' | 'oldest' | 'plays'
type LiveEventRecurringPreferredStreamMethodEnum = 'browser' | 'encoder'
type LiveEventRecurringStatusEnum = 'ended' | 'started'
type LiveEventRecurringStreamModeEnum = 'live' | 'record' | 'simulive'


