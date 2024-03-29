/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { GroupMetadataConnectionsUsers } from './group-metadata-connections-users';
import { GroupMetadataConnectionsVideos } from './group-metadata-connections-videos';

/**
 * A collection of information that is connected to this resource.
 * @export
 * @interface GroupMetadataConnections
 */
export interface GroupMetadataConnections {
    /**
     * 
     * @type {GroupMetadataConnectionsUsers}
     * @memberof GroupMetadataConnections
     */
    'users': GroupMetadataConnectionsUsers;
    /**
     * 
     * @type {GroupMetadataConnectionsVideos}
     * @memberof GroupMetadataConnections
     */
    'videos': GroupMetadataConnectionsVideos;
}

