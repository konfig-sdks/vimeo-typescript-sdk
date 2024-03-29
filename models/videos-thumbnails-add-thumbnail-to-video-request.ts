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
 * @interface VideosThumbnailsAddThumbnailToVideoRequest
 */
export interface VideosThumbnailsAddThumbnailToVideoRequest {
    /**
     * Whether the image created by the **time** field should be the default thumbnail for the video.
     * @type {boolean}
     * @memberof VideosThumbnailsAddThumbnailToVideoRequest
     */
    'active'?: boolean;
    /**
     * The time offset in seconds from which to create the thumbnail.
     * @type {number}
     * @memberof VideosThumbnailsAddThumbnailToVideoRequest
     */
    'time'?: number;
}

