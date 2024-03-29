/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { VideosVersionsAddVideoVersionRequestUpload } from './videos-versions-add-video-version-request-upload';

/**
 * 
 * @export
 * @interface VideosVersionsAddVideoVersionRequest
 */
export interface VideosVersionsAddVideoVersionRequest {
    /**
     * The name of the version.
     * @type {string}
     * @memberof VideosVersionsAddVideoVersionRequest
     */
    'file_name': string;
    /**
     * 
     * @type {VideosVersionsAddVideoVersionRequestUpload}
     * @memberof VideosVersionsAddVideoVersionRequest
     */
    'upload': VideosVersionsAddVideoVersionRequestUpload;
}

