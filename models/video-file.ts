/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { VideoFileLog } from './video-file-log';

/**
 * 
 * @export
 * @interface VideoFile
 */
export interface VideoFile {
    /**
     * The codec of the video file.  Option descriptions:  * `AV1` - The codec is AV1.  * `H264` - The codec is H264.  * `HEVC` - The codec is HEVC. 
     * @type {string}
     * @memberof VideoFile
     */
    'codec': VideoFileCodecEnum;
    /**
     * The time in ISO 8601 format when the video file was created.
     * @type {string}
     * @memberof VideoFile
     */
    'created_time': string;
    /**
     * The time in ISO 8601 format when the video file expires.
     * @type {string}
     * @memberof VideoFile
     */
    'expires'?: string;
    /**
     * The frames per second of the video.
     * @type {number}
     * @memberof VideoFile
     */
    'fps': number;
    /**
     * The height of the video in pixels.
     * @type {number}
     * @memberof VideoFile
     */
    'height': number | null;
    /**
     * The direct link to the video file.
     * @type {string}
     * @memberof VideoFile
     */
    'link': string;
    /**
     * 
     * @type {VideoFileLog}
     * @memberof VideoFile
     */
    'log'?: VideoFileLog;
    /**
     * The MD5 hash of the video file.
     * @type {string}
     * @memberof VideoFile
     */
    'md5': string;
    /**
     * The public name of the video file.
     * @type {string}
     * @memberof VideoFile
     */
    'public_name': string;
    /**
     * The video quality as determined by height and width.  Option descriptions:  * `hd` - The video is in high definition.  * `hls` - The video is suitable for HTTP live streaming.  * `mobile` - The video is mobile quality.  * `sd` - The video is in standard definition.  * `source` - The video\'s source file.  * `uhd` - The video resolution is 2K or higher. 
     * @type {string}
     * @memberof VideoFile
     */
    'quality': VideoFileQualityEnum;
    /**
     * The video rendition.  Option descriptions:  * `1080p` - The video has 1080p resolution.  * `240p` - The video has 240p resolution.  * `2k` - The video has 2K resolution.  * `360p` - The video has 360p resolution.  * `480p` - The video has 480p resolution.  * `4k` - The video has 4K resolution.  * `540p` - The video has 540p resolution.  * `5k` - The video has 5K resolution.  * `6k` - The video has 6K resolution.  * `720p` - The video has 720p resolution.  * `7k` - The video has 7K resolution.  * `8k` - The video has 8K resolution.  * `adaptive` - The video rendition is adaptive (for example, HLS or DASH).  * `source` - The video is the source file. 
     * @type {string}
     * @memberof VideoFile
     */
    'rendition': VideoFileRenditionEnum;
    /**
     * The approximate size in bytes of the video file.
     * @type {number}
     * @memberof VideoFile
     */
    'size': number | null;
    /**
     * The converted size of the video file rounded to two decimal places.
     * @type {string}
     * @memberof VideoFile
     */
    'size_short': string;
    /**
     * The source link of the video file.
     * @type {string}
     * @memberof VideoFile
     */
    'source_link'?: string | null;
    /**
     * The type of video file.  Option descriptions:  * `source` - The video file is a source file.  * `video/mp4` - The video file is in MP4 format.  * `video/webm` - The video file is in WebM format.  * `vp6/x-video` - The video file is in VP6 format. 
     * @type {string}
     * @memberof VideoFile
     */
    'type': VideoFileTypeEnum;
    /**
     * The ID of the video file.
     * @type {string}
     * @memberof VideoFile
     */
    'video_file_id'?: string;
    /**
     * The width of the video in pixels.
     * @type {number}
     * @memberof VideoFile
     */
    'width': number | null;
}

type VideoFileCodecEnum = 'AV1' | 'H264' | 'HEVC'
type VideoFileQualityEnum = 'hd' | 'hls' | 'mobile' | 'sd' | 'source' | 'uhd'
type VideoFileRenditionEnum = '1080p' | '240p' | '2k' | '360p' | '480p' | '4k' | '540p' | '5k' | '6k' | '720p' | '7k' | '8k' | 'adaptive' | 'source'
type VideoFileTypeEnum = 'source' | 'video/mp4' | 'video/webm' | 'vp6/x-video'


