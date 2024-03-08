/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { HlsDashVideoFile } from './hls-dash-video-file';
import { PlayProgressiveInner } from './play-progressive-inner';

/**
 * 
 * @export
 * @interface Play
 */
export interface Play {
    /**
     * The DASH video file.
     * @type {HlsDashVideoFile}
     * @memberof Play
     */
    'dash'?: HlsDashVideoFile;
    /**
     * The HLS video file.
     * @type {HlsDashVideoFile}
     * @memberof Play
     */
    'hls'?: HlsDashVideoFile;
    /**
     * The progressive video files.
     * @type {Array<PlayProgressiveInner>}
     * @memberof Play
     */
    'progressive'?: Array<PlayProgressiveInner>;
    /**
     * The play status of the video.  Option descriptions:  * `playable` - The video is playable.  * `purchase_required` - The video must be purchased.  * `restricted` - Playback for the video is restricted.  * `unavailable` - The video is unavailable. 
     * @type {string}
     * @memberof Play
     */
    'status': PlayStatusEnum;
}

type PlayStatusEnum = 'playable' | 'purchase_required' | 'restricted' | 'unavailable'


