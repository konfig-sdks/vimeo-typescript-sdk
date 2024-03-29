/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OnDemandSeasonMetadata } from './on-demand-season-metadata';
import { User } from './user';

/**
 * 
 * @export
 * @interface OnDemandSeason
 */
export interface OnDemandSeason {
    /**
     * The description of the season.
     * @type {string}
     * @memberof OnDemandSeason
     */
    'description': string;
    /**
     * 
     * @type {OnDemandSeasonMetadata}
     * @memberof OnDemandSeason
     */
    'metadata': OnDemandSeasonMetadata;
    /**
     * The name of the season.
     * @type {string}
     * @memberof OnDemandSeason
     */
    'name': string;
    /**
     * The position of the season relative to other seasons in the series.
     * @type {number}
     * @memberof OnDemandSeason
     */
    'position': number;
    /**
     * The unique identifier of the On Demand season.
     * @type {string}
     * @memberof OnDemandSeason
     */
    'resource_key': string;
    /**
     * The type of the season.
     * @type {string}
     * @memberof OnDemandSeason
     */
    'type': string;
    /**
     * The season container\'s relative URI.
     * @type {string}
     * @memberof OnDemandSeason
     */
    'uri': string;
    /**
     * The creator of the season\'s On Demand page.
     * @type {User}
     * @memberof OnDemandSeason
     */
    'user': User;
}

