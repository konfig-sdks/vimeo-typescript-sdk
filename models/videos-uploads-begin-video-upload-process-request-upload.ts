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
 * @interface VideosUploadsBeginVideoUploadProcessRequestUpload
 */
export interface VideosUploadsBeginVideoUploadProcessRequestUpload {
    /**
     * The upload approach.  Option descriptions:  * `post` - Use the `post` approach.  * `pull` - Use the `pull` approach.  * `tus` - Use the `tus` approach. 
     * @type {string}
     * @memberof VideosUploadsBeginVideoUploadProcessRequestUpload
     */
    'approach': VideosUploadsBeginVideoUploadProcessRequestUploadApproachEnum;
    /**
     * The public URL at which the video is hosted. The URL must be valid for at least 24 hours. Use this parameter when **approach** is `pull`.
     * @type {string}
     * @memberof VideosUploadsBeginVideoUploadProcessRequestUpload
     */
    'link'?: string;
    /**
     * The app\'s redirect URL. Use this parameter when **approach** is `post`.
     * @type {string}
     * @memberof VideosUploadsBeginVideoUploadProcessRequestUpload
     */
    'redirect_url'?: string;
    /**
     * The size in bytes of the video to upload. The maximum value of this field is `268435456000`, which corresponds to 250 GB.
     * @type {string}
     * @memberof VideosUploadsBeginVideoUploadProcessRequestUpload
     */
    'size'?: string;
}

type VideosUploadsBeginVideoUploadProcessRequestUploadApproachEnum = 'post' | 'pull' | 'tus'


