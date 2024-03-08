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
 * @interface LiveEventDestinationsUpdateDestinationRequest
 */
export interface LiveEventDestinationsUpdateDestinationRequest {
    /**
     * The title to display for the simulcast.
     * @type {string}
     * @memberof LiveEventDestinationsUpdateDestinationRequest
     */
    'display_name'?: string;
    /**
     * Whether the destination is enabled for simulcasting.
     * @type {boolean}
     * @memberof LiveEventDestinationsUpdateDestinationRequest
     */
    'is_enabled'?: boolean;
    /**
     * The privacy setting of the destination. Be sure to choose a value that corresponds to your service.  Option descriptions:  * `CONNECTIONS` - The privacy setting is `CONNECTIONS` for LinkedIn.  * `PUBLIC` - The privacy setting is `PUBLIC` for LinkedIn.  * `all_friends` - The privacy setting is `all_friends` for Facebook.  * `everyone` - The privacy setting is `everyone` for Facebook.  * `private` - The privacy setting is `private` for YouTube.  * `public` - The privacy setting is `public` for YouTube.  * `self` - The privacy setting is `self` for Facebook.  * `unlisted` - The privacy setting is `unlisted` for YouTube. 
     * @type {string}
     * @memberof LiveEventDestinationsUpdateDestinationRequest
     */
    'privacy'?: LiveEventDestinationsUpdateDestinationRequestPrivacyEnum;
    /**
     * The ID of the destination on the specified service, such as the YouTube channel ID or the Facebook page ID.
     * @type {string}
     * @memberof LiveEventDestinationsUpdateDestinationRequest
     */
    'provider_destination_id'?: string;
    /**
     * The service to simulcast to.  Option descriptions:  * `custom_rtmp` - Simulcast to a custom service.  * `facebook` - Simulcast to Facebook Live.  * `linkedin` - Simulcast to LinkedIn Live.  * `youtube` - Simulcast to YouTube Live. 
     * @type {string}
     * @memberof LiveEventDestinationsUpdateDestinationRequest
     */
    'service_name'?: LiveEventDestinationsUpdateDestinationRequestServiceNameEnum;
    /**
     * The RTMP stream key.
     * @type {string}
     * @memberof LiveEventDestinationsUpdateDestinationRequest
     */
    'stream_key'?: string;
    /**
     * The RTMP URL for receiving the video stream.
     * @type {string}
     * @memberof LiveEventDestinationsUpdateDestinationRequest
     */
    'stream_url'?: string;
    /**
     * The type of the simulcast destination.  Option descriptions:  * `channel` - The destination is a YouTube channel.  * `custom` - The destination is custom.  * `organization` - The destination is a LinkedIn organization.  * `page` - The destination is a Facebook page.  * `profile` - The destination is a Facebook or LinkedIn profile. 
     * @type {string}
     * @memberof LiveEventDestinationsUpdateDestinationRequest
     */
    'type'?: LiveEventDestinationsUpdateDestinationRequestTypeEnum;
}

type LiveEventDestinationsUpdateDestinationRequestPrivacyEnum = 'CONNECTIONS' | 'PUBLIC' | 'all_friends' | 'everyone' | 'private' | 'public' | 'self' | 'unlisted'
type LiveEventDestinationsUpdateDestinationRequestServiceNameEnum = 'custom_rtmp' | 'facebook' | 'linkedin' | 'youtube'
type LiveEventDestinationsUpdateDestinationRequestTypeEnum = 'channel' | 'custom' | 'organization' | 'page' | 'profile'


