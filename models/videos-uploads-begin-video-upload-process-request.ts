/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { VideosUploadsBeginVideoUploadProcessRequestEmbed } from './videos-uploads-begin-video-upload-process-request-embed';
import { VideosUploadsBeginVideoUploadProcessRequestPrivacy } from './videos-uploads-begin-video-upload-process-request-privacy';
import { VideosUploadsBeginVideoUploadProcessRequestReviewPage } from './videos-uploads-begin-video-upload-process-request-review-page';
import { VideosUploadsBeginVideoUploadProcessRequestSpatial } from './videos-uploads-begin-video-upload-process-request-spatial';
import { VideosUploadsBeginVideoUploadProcessRequestUpload } from './videos-uploads-begin-video-upload-process-request-upload';

/**
 * 
 * @export
 * @interface VideosUploadsBeginVideoUploadProcessRequest
 */
export interface VideosUploadsBeginVideoUploadProcessRequest {
    /**
     * The description of the video.
     * @type {string}
     * @memberof VideosUploadsBeginVideoUploadProcessRequest
     */
    'description'?: string;
    /**
     * A list of values describing the content in this video. For a full list of values, use the [`/contentratings`](https://developer.vimeo.com/api/reference/videos#get_content_ratings) endpoint.
     * @type {Array<string>}
     * @memberof VideosUploadsBeginVideoUploadProcessRequest
     */
    'content_rating'?: Array<string>;
    /**
     * 
     * @type {VideosUploadsBeginVideoUploadProcessRequestEmbed}
     * @memberof VideosUploadsBeginVideoUploadProcessRequest
     */
    'embed'?: VideosUploadsBeginVideoUploadProcessRequestEmbed;
    /**
     * The complete list of domains the video can be embedded on. This field requires that **privacy_embed** have the value `whitelist`.
     * @type {Array<string>}
     * @memberof VideosUploadsBeginVideoUploadProcessRequest
     */
    'embed_domains'?: Array<string>;
    /**
     * The URI of the folder to which the video is uploaded.
     * @type {string}
     * @memberof VideosUploadsBeginVideoUploadProcessRequest
     */
    'folder_uri'?: string;
    /**
     * Whether to hide the video from everyone except the video\'s owner. When the value is `true`, unlisted video links work only for the video\'s owner.
     * @type {boolean}
     * @memberof VideosUploadsBeginVideoUploadProcessRequest
     */
    'hide_from_vimeo'?: boolean;
    /**
     * The Creative Commons license under which the video is offered.  Option descriptions:  * `by` - The video is offered under CC BY, or the attibution-only license.  * `by-nc` - The video is offered under CC BY-NC, or the Attribution-NonCommercial license.  * `by-nc-nd` - The video is offered under CC BY-NC-ND, or the Attribution-NonCommercian-NoDerivs license.  * `by-nc-sa` - The video is offered under CC BY-NC-SA, or the Attribution-NonCommercial-ShareAlike licence.  * `by-nd` - The video is offered under CC BY-ND, or the Attribution-NoDerivs license.  * `by-sa` - The video is offered under CC BY-SA, or the Attribution-ShareAlike license.  * `cc0` - The video is offered under CC0, or the public domain license. 
     * @type {string}
     * @memberof VideosUploadsBeginVideoUploadProcessRequest
     */
    'license'?: VideosUploadsBeginVideoUploadProcessRequestLicenseEnum;
    /**
     * The video\'s default language. For a full list of supported languages, use the [`/languages?filter=texttracks`](https://developer.vimeo.com/api/reference/videos#get_languages) endpoint.
     * @type {string}
     * @memberof VideosUploadsBeginVideoUploadProcessRequest
     */
    'locale'?: string;
    /**
     * The title of the video.
     * @type {string}
     * @memberof VideosUploadsBeginVideoUploadProcessRequest
     */
    'name'?: string;
    /**
     * The password. This field is required when **privacy.view** is `password`.
     * @type {string}
     * @memberof VideosUploadsBeginVideoUploadProcessRequest
     */
    'password'?: string;
    /**
     * 
     * @type {VideosUploadsBeginVideoUploadProcessRequestPrivacy}
     * @memberof VideosUploadsBeginVideoUploadProcessRequest
     */
    'privacy'?: VideosUploadsBeginVideoUploadProcessRequestPrivacy;
    /**
     * 
     * @type {VideosUploadsBeginVideoUploadProcessRequestReviewPage}
     * @memberof VideosUploadsBeginVideoUploadProcessRequest
     */
    'review_page'?: VideosUploadsBeginVideoUploadProcessRequestReviewPage;
    /**
     * 
     * @type {VideosUploadsBeginVideoUploadProcessRequestSpatial}
     * @memberof VideosUploadsBeginVideoUploadProcessRequest
     */
    'spatial'?: VideosUploadsBeginVideoUploadProcessRequestSpatial;
    /**
     * 
     * @type {VideosUploadsBeginVideoUploadProcessRequestUpload}
     * @memberof VideosUploadsBeginVideoUploadProcessRequest
     */
    'upload': VideosUploadsBeginVideoUploadProcessRequestUpload;
}

type VideosUploadsBeginVideoUploadProcessRequestLicenseEnum = 'by' | 'by-nc' | 'by-nc-nd' | 'by-nc-sa' | 'by-nd' | 'by-sa' | 'cc0'


