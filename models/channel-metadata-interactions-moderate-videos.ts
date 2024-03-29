/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * An action indicating that the authenticated user is a moderator of the channel and may therefore add or remove videos from the channel. This data requires a bearer token with the `private` scope.
 * @export
 * @interface ChannelMetadataInteractionsModerateVideos
 */
export interface ChannelMetadataInteractionsModerateVideos {
    /**
     * An array of HTTP methods allowed on this URI. This data requires a bearer token with the `private` scope.
     * @type {Array<string>}
     * @memberof ChannelMetadataInteractionsModerateVideos
     */
    'options': Array<string>;
    /**
     * The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.
     * @type {string}
     * @memberof ChannelMetadataInteractionsModerateVideos
     */
    'uri': string;
}

