/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ChannelMetadataConnectionsPrivacyUsers } from './channel-metadata-connections-privacy-users';
import { ChannelMetadataConnectionsUsers } from './channel-metadata-connections-users';
import { ChannelMetadataConnectionsVideos } from './channel-metadata-connections-videos';

/**
 * A collection of information that is connected to this resource.
 * @export
 * @interface ChannelMetadataConnections
 */
export interface ChannelMetadataConnections {
    /**
     * 
     * @type {ChannelMetadataConnectionsPrivacyUsers}
     * @memberof ChannelMetadataConnections
     */
    'privacy_users': ChannelMetadataConnectionsPrivacyUsers;
    /**
     * 
     * @type {ChannelMetadataConnectionsUsers}
     * @memberof ChannelMetadataConnections
     */
    'users': ChannelMetadataConnectionsUsers;
    /**
     * 
     * @type {ChannelMetadataConnectionsVideos}
     * @memberof ChannelMetadataConnections
     */
    'videos': ChannelMetadataConnectionsVideos;
}
