/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OnDemandVideoBuy } from './on-demand-video-buy';
import { OnDemandVideoInteractions } from './on-demand-video-interactions';
import { OnDemandVideoMetadata } from './on-demand-video-metadata';
import { OnDemandVideoRent } from './on-demand-video-rent';
import { Picture } from './picture';
import { User } from './user';

/**
 * 
 * @export
 * @interface OnDemandVideo
 */
export interface OnDemandVideo {
    /**
     * The description of the video.
     * @type {string}
     * @memberof OnDemandVideo
     */
    'description'?: string;
    /**
     * 
     * @type {OnDemandVideoBuy}
     * @memberof OnDemandVideo
     */
    'buy': OnDemandVideoBuy | null;
    /**
     * The duration of the video.
     * @type {string}
     * @memberof OnDemandVideo
     */
    'duration'?: string;
    /**
     * The episode number of the video.
     * @type {number}
     * @memberof OnDemandVideo
     */
    'episode'?: number;
    /**
     * 
     * @type {OnDemandVideoInteractions}
     * @memberof OnDemandVideo
     */
    'interactions': OnDemandVideoInteractions;
    /**
     * The link to the video on Vimeo.
     * @type {string}
     * @memberof OnDemandVideo
     */
    'link': string;
    /**
     * 
     * @type {OnDemandVideoMetadata}
     * @memberof OnDemandVideo
     */
    'metadata': OnDemandVideoMetadata;
    /**
     * The title of the video.
     * @type {string}
     * @memberof OnDemandVideo
     */
    'name'?: string;
    /**
     * An array of HTTP methods permitted on this URI.
     * @type {Array<string>}
     * @memberof OnDemandVideo
     */
    'options'?: Array<string>;
    /**
     * The active picture of the video.
     * @type {Picture}
     * @memberof OnDemandVideo
     */
    'pictures'?: Picture;
    /**
     * The authenticated user\'s most recent play position in the video, in seconds.
     * @type {number}
     * @memberof OnDemandVideo
     */
    'play_progress': number;
    /**
     * The position of the video relative to the other videos on the On Demand page.
     * @type {number}
     * @memberof OnDemandVideo
     */
    'position'?: number;
    /**
     * The time in ISO 8601 format when the video was created or published.
     * @type {string}
     * @memberof OnDemandVideo
     */
    'release_date'?: string;
    /**
     * The year that the video was released.
     * @type {number}
     * @memberof OnDemandVideo
     */
    'release_year': number | null;
    /**
     * 
     * @type {OnDemandVideoRent}
     * @memberof OnDemandVideo
     */
    'rent': OnDemandVideoRent | null;
    /**
     * The type of video.  Option descriptions:  * `extra` - The video is an extra feature.  * `main` - The video is a main feature.  * `trailer` - The video is a trailer. 
     * @type {string}
     * @memberof OnDemandVideo
     */
    'type': OnDemandVideoTypeEnum;
    /**
     * The video container\'s relative URI.
     * @type {string}
     * @memberof OnDemandVideo
     */
    'uri': string;
    /**
     * The owner of the video.
     * @type {User}
     * @memberof OnDemandVideo
     */
    'user'?: User;
}

type OnDemandVideoTypeEnum = 'extra' | 'main' | 'trailer'

