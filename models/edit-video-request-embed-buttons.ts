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
 * @interface EditVideoRequestEmbedButtons
 */
export interface EditVideoRequestEmbedButtons {
    /**
     * Whether to show the `embed` button on the embeddable player.
     * @type {boolean}
     * @memberof EditVideoRequestEmbedButtons
     */
    'embed'?: boolean;
    /**
     * Whether to show the `fullscreen` button on the embeddable player.
     * @type {boolean}
     * @memberof EditVideoRequestEmbedButtons
     */
    'fullscreen'?: boolean;
    /**
     * Whether to show the `HD` button on the embeddable player.
     * @type {boolean}
     * @memberof EditVideoRequestEmbedButtons
     */
    'hd'?: boolean;
    /**
     * Whether to show the `like` button on the embeddable player.
     * @type {boolean}
     * @memberof EditVideoRequestEmbedButtons
     */
    'like'?: boolean;
    /**
     * Whether to show the `scaling` button on the embeddable player in fullscreen mode.
     * @type {boolean}
     * @memberof EditVideoRequestEmbedButtons
     */
    'scaling'?: boolean;
    /**
     * Whether to show the `share` button on the embeddable player.
     * @type {boolean}
     * @memberof EditVideoRequestEmbedButtons
     */
    'share'?: boolean;
    /**
     * Whether to show the `watch later` button on the embeddable player.
     * @type {boolean}
     * @memberof EditVideoRequestEmbedButtons
     */
    'watchlater'?: boolean;
}
