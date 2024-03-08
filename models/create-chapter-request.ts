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
 * @interface CreateChapterRequest
 */
export interface CreateChapterRequest {
    /**
     * The title of the chapter.
     * @type {string}
     * @memberof CreateChapterRequest
     */
    'title'?: string | null;
    /**
     * The URI of the chapter\'s active thumbnail.
     * @type {string}
     * @memberof CreateChapterRequest
     */
    'active_thumbnail_uri'?: string;
    /**
     * An array of URIs of the thumbnails associated with the video chapter.
     * @type {Array<string>}
     * @memberof CreateChapterRequest
     */
    'thumbnail_uris'?: Array<string>;
    /**
     * The timecode of the chapter in seconds from the start of the video.
     * @type {number}
     * @memberof CreateChapterRequest
     */
    'timecode'?: number | null;
}
