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
 * @interface LiveEventActivationCreateRtmpLinksRequest2
 */
export interface LiveEventActivationCreateRtmpLinksRequest2 {
    /**
     * Whether the stream activates from the cloud composer. _This field is deprecated._
     * @type {boolean}
     * @memberof LiveEventActivationCreateRtmpLinksRequest2
     */
    'cloud_composing_streaming'?: boolean;
    /**
     * Whether the stream activates from the cloud composer.
     * @type {boolean}
     * @memberof LiveEventActivationCreateRtmpLinksRequest2
     */
    'streaming_start_requested'?: boolean;
}
