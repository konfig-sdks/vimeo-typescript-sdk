/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EditVodRequestPreorder } from './edit-vod-request-preorder';
import { EditVodRequestPublish } from './edit-vod-request-publish';

/**
 * 
 * @export
 * @interface EditVodRequest
 */
export interface EditVodRequest {
    /**
     * The custom string to use in the Vimeo URL of the On Demand page.
     * @type {string}
     * @memberof EditVodRequest
     */
    'link'?: string;
    /**
     * 
     * @type {EditVodRequestPreorder}
     * @memberof EditVodRequest
     */
    'preorder'?: EditVodRequestPreorder;
    /**
     * 
     * @type {EditVodRequestPublish}
     * @memberof EditVodRequest
     */
    'publish'?: EditVodRequestPublish;
    /**
     * Whether to publish the On Demand page automatically after all videos have finished transcoding.
     * @type {boolean}
     * @memberof EditVodRequest
     */
    'publish_when_ready'?: boolean;
}

