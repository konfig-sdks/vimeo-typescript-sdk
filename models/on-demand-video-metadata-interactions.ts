/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OnDemandVideoMetadataInteractionsLikes } from './on-demand-video-metadata-interactions-likes';
import { OnDemandVideoMetadataInteractionsWatchlater } from './on-demand-video-metadata-interactions-watchlater';

/**
 * 
 * @export
 * @interface OnDemandVideoMetadataInteractions
 */
export interface OnDemandVideoMetadataInteractions {
    /**
     * 
     * @type {OnDemandVideoMetadataInteractionsLikes}
     * @memberof OnDemandVideoMetadataInteractions
     */
    'likes': OnDemandVideoMetadataInteractionsLikes;
    /**
     * 
     * @type {OnDemandVideoMetadataInteractionsWatchlater}
     * @memberof OnDemandVideoMetadataInteractions
     */
    'watchlater': OnDemandVideoMetadataInteractionsWatchlater;
}

