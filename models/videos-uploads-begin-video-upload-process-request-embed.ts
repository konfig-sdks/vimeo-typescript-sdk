/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmbedPresetsEssentialsCreatePresetRequestEmbedTitle } from './embed-presets-essentials-create-preset-request-embed-title';
import { VideosUploadsBeginVideoUploadProcessRequestEmbedButtons } from './videos-uploads-begin-video-upload-process-request-embed-buttons';
import { VideosUploadsBeginVideoUploadProcessRequestEmbedEndScreen } from './videos-uploads-begin-video-upload-process-request-embed-end-screen';
import { VideosUploadsBeginVideoUploadProcessRequestEmbedLogos } from './videos-uploads-begin-video-upload-process-request-embed-logos';

/**
 * 
 * @export
 * @interface VideosUploadsBeginVideoUploadProcessRequestEmbed
 */
export interface VideosUploadsBeginVideoUploadProcessRequestEmbed {
    /**
     * 
     * @type {EmbedPresetsEssentialsCreatePresetRequestEmbedTitle}
     * @memberof VideosUploadsBeginVideoUploadProcessRequestEmbed
     */
    'title'?: EmbedPresetsEssentialsCreatePresetRequestEmbedTitle;
    /**
     * 
     * @type {VideosUploadsBeginVideoUploadProcessRequestEmbedButtons}
     * @memberof VideosUploadsBeginVideoUploadProcessRequestEmbed
     */
    'buttons'?: VideosUploadsBeginVideoUploadProcessRequestEmbedButtons;
    /**
     * The main color of the embeddable player.
     * @type {string}
     * @memberof VideosUploadsBeginVideoUploadProcessRequestEmbed
     */
    'color'?: string;
    /**
     * 
     * @type {VideosUploadsBeginVideoUploadProcessRequestEmbedEndScreen}
     * @memberof VideosUploadsBeginVideoUploadProcessRequestEmbed
     */
    'end_screen'?: VideosUploadsBeginVideoUploadProcessRequestEmbedEndScreen;
    /**
     * 
     * @type {VideosUploadsBeginVideoUploadProcessRequestEmbedLogos}
     * @memberof VideosUploadsBeginVideoUploadProcessRequestEmbed
     */
    'logos'?: VideosUploadsBeginVideoUploadProcessRequestEmbedLogos;
    /**
     * Whether to show the playbar on the embeddable player.
     * @type {boolean}
     * @memberof VideosUploadsBeginVideoUploadProcessRequestEmbed
     */
    'playbar'?: boolean;
    /**
     * Whether to show the volume selector on the embeddable player.
     * @type {boolean}
     * @memberof VideosUploadsBeginVideoUploadProcessRequestEmbed
     */
    'volume'?: boolean;
}

