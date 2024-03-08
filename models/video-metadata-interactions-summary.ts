/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about whether the current user can create or get a summary for the video.
 * @export
 * @interface VideoMetadataInteractionsSummary
 */
export interface VideoMetadataInteractionsSummary {
    /**
     * Whether the summary method is disabled.
     * @type {boolean}
     * @memberof VideoMetadataInteractionsSummary
     */
    'disabled': boolean;
    /**
     * An array of HTTP methods permitted on this URI.
     * @type {Array<string>}
     * @memberof VideoMetadataInteractionsSummary
     */
    'options': Array<string>;
    /**
     * The reason why the summary method is disabled.  Option descriptions:  * `transcript_ready_but_not_english` - The transcript is ready, but isn\'t in English.  * `transcript_status_does_not_exist` - The transcript doesn\'t exist.  * `transcript_status_exceeds_maximum_duration` - The transcript duration is too long.  * `transcript_status_failed` - The transcript job failed.  * `transcript_status_in_progress` - The transcript job is in progress.  * `transcript_status_language_not_supported` - The transcript\'s language isn\'t supported.  * `transcript_status_no_speech` - There\'s no speech detected for the transcript.  * `transcript_status_not_started` - The transcript job hasn\'t started.  * `transcript_status_unknown` - The transcript job status is unknown.  * `video_not_ready` - The video isn\'t ready.  * `video_too_short` - The video is too short. 
     * @type {string}
     * @memberof VideoMetadataInteractionsSummary
     */
    'reason': VideoMetadataInteractionsSummaryReasonEnum;
    /**
     * The API URI that resolves to the connection data.
     * @type {string}
     * @memberof VideoMetadataInteractionsSummary
     */
    'uri': string;
}

type VideoMetadataInteractionsSummaryReasonEnum = 'transcript_ready_but_not_english' | 'transcript_status_does_not_exist' | 'transcript_status_exceeds_maximum_duration' | 'transcript_status_failed' | 'transcript_status_in_progress' | 'transcript_status_language_not_supported' | 'transcript_status_no_speech' | 'transcript_status_not_started' | 'transcript_status_unknown' | 'video_not_ready' | 'video_too_short'

