/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface VideosUploadsBeginVideoUploadProcessRequestEmbedEndScreen
 */
export interface VideosUploadsBeginVideoUploadProcessRequestEmbedEndScreen {
    /**
     * The end screen type.  Option descriptions:  * `empty` - The end screen is empty.  * `loop` - The end screen loops the video playback.  * `share` - The end screen includes sharing options.  * `thumbnail` - The end screen includes the thumbnail of the video. 
     * @type {string}
     * @memberof VideosUploadsBeginVideoUploadProcessRequestEmbedEndScreen
     */
    'type'?: VideosUploadsBeginVideoUploadProcessRequestEmbedEndScreenTypeEnum;
}

type VideosUploadsBeginVideoUploadProcessRequestEmbedEndScreenTypeEnum = 'empty' | 'loop' | 'share' | 'thumbnail'

