/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * An action indicating if the authenticated user has followed this channel. This data requires a bearer token with the `private` scope.
 * @export
 * @interface ChannelMetadataInteractionsFollow
 */
export interface ChannelMetadataInteractionsFollow {
    /**
     * Whether the authenticated user has followed this channel. This data requires a bearer token with the `private` scope.
     * @type {boolean}
     * @memberof ChannelMetadataInteractionsFollow
     */
    'added': boolean;
    /**
     * The time in ISO 8601 format that the user followed this channel, or the null value if the user hasn\'t followed the channel. This data requires a bearer token with the `private` scope.
     * @type {string}
     * @memberof ChannelMetadataInteractionsFollow
     */
    'added_time': string | null;
    /**
     * Whether the authenticated user is a moderator or subscriber. This data requires a bearer token with the `private` scope.  Option descriptions:  * `moderator` - The authenticated user is a moderator.  * `subscriber` - The authenticated user is a subscriber. 
     * @type {string}
     * @memberof ChannelMetadataInteractionsFollow
     */
    'type': ChannelMetadataInteractionsFollowTypeEnum;
    /**
     * The URI for following or unfollowing this channel. PUT to this URI to follow the channel, or DELETE to this URI to unfollow the channel. This data requires a bearer token with the `private` scope.
     * @type {string}
     * @memberof ChannelMetadataInteractionsFollow
     */
    'uri': string;
}

type ChannelMetadataInteractionsFollowTypeEnum = 'moderator' | 'subscriber'


