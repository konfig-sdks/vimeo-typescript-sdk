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
 * @interface ChannelsVideosAddMultipleToChannelRequest
 */
export interface ChannelsVideosAddMultipleToChannelRequest {
    /**
     * A member of an array representing the URIs of the videos to add. For each member in the array, use the format `{\"video_uri\":\"x\"}` where **x** is a video URI. For more information on batch requests like this, see [Using Common Formats and Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests).
     * @type {string}
     * @memberof ChannelsVideosAddMultipleToChannelRequest
     */
    'video_uri': string;
}

