/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LiveEventMetadataConnectionsLiveVideo } from './live-event-metadata-connections-live-video';
import { LiveEventMetadataConnectionsPictures } from './live-event-metadata-connections-pictures';
import { LiveEventMetadataConnectionsPreLiveVideo } from './live-event-metadata-connections-pre-live-video';
import { LiveEventMetadataConnectionsTeamMember } from './live-event-metadata-connections-team-member';
import { LiveEventMetadataConnectionsVideos } from './live-event-metadata-connections-videos';

/**
 * A collection of information that is connected to this resource.
 * @export
 * @interface LiveEventMetadataConnections
 */
export interface LiveEventMetadataConnections {
    /**
     * 
     * @type {LiveEventMetadataConnectionsLiveVideo}
     * @memberof LiveEventMetadataConnections
     */
    'live_video': LiveEventMetadataConnectionsLiveVideo | null;
    /**
     * 
     * @type {LiveEventMetadataConnectionsPictures}
     * @memberof LiveEventMetadataConnections
     */
    'pictures': LiveEventMetadataConnectionsPictures;
    /**
     * 
     * @type {LiveEventMetadataConnectionsPreLiveVideo}
     * @memberof LiveEventMetadataConnections
     */
    'pre_live_video': LiveEventMetadataConnectionsPreLiveVideo | null;
    /**
     * 
     * @type {LiveEventMetadataConnectionsTeamMember}
     * @memberof LiveEventMetadataConnections
     */
    'team_member': LiveEventMetadataConnectionsTeamMember | null;
    /**
     * 
     * @type {LiveEventMetadataConnectionsVideos}
     * @memberof LiveEventMetadataConnections
     */
    'videos': LiveEventMetadataConnectionsVideos;
}

