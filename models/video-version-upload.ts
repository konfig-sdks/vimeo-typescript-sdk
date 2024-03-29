/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The version\'s upload information.
 * @export
 * @interface VideoVersionUpload
 */
export interface VideoVersionUpload {
    /**
     * The approach for uploading the video.  Option descriptions:  * `post` - The video upload uses the POST approach.  * `pull` - The video upload uses the pull approach.  * `tus` - The video upload uses the tus approach. 
     * @type {string}
     * @memberof VideoVersionUpload
     */
    'approach'?: VideoVersionUploadApproachEnum;
    /**
     * The HTML form for uploading a video through the POST approach.
     * @type {string}
     * @memberof VideoVersionUpload
     */
    'form'?: string;
    /**
     * The ID of the Google Cloud Storage upload.
     * @type {string}
     * @memberof VideoVersionUpload
     */
    'gcs_uid'?: string;
    /**
     * The link of the video to capture through the pull approach.
     * @type {string}
     * @memberof VideoVersionUpload
     */
    'link'?: string;
    /**
     * The redirect URL for the upload app.
     * @type {string}
     * @memberof VideoVersionUpload
     */
    'redirect_url'?: string;
    /**
     * The file size in bytes of the uploaded video.
     * @type {number}
     * @memberof VideoVersionUpload
     */
    'size'?: number;
    /**
     * The status code for the availability of the uploaded video.  Option descriptions:  * `complete` - The upload is complete.  * `error` - The upload ended with an error.  * `in_progress` - The upload is underway. 
     * @type {string}
     * @memberof VideoVersionUpload
     */
    'status': VideoVersionUploadStatusEnum;
    /**
     * The link for sending video file data.
     * @type {string}
     * @memberof VideoVersionUpload
     */
    'upload_link'?: string;
}

type VideoVersionUploadApproachEnum = 'post' | 'pull' | 'tus'
type VideoVersionUploadStatusEnum = 'complete' | 'error' | 'in_progress'


