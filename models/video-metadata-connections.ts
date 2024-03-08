/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AncestorPath } from './ancestor-path';
import { VideoMetadataConnectionsAvailableChannels } from './video-metadata-connections-available-channels';
import { VideoMetadataConnectionsComments } from './video-metadata-connections-comments';
import { VideoMetadataConnectionsCredits } from './video-metadata-connections-credits';
import { VideoMetadataConnectionsLikes } from './video-metadata-connections-likes';
import { VideoMetadataConnectionsOndemand } from './video-metadata-connections-ondemand';
import { VideoMetadataConnectionsPictures } from './video-metadata-connections-pictures';
import { VideoMetadataConnectionsRecommendations } from './video-metadata-connections-recommendations';
import { VideoMetadataConnectionsRelated } from './video-metadata-connections-related';
import { VideoMetadataConnectionsResourceCreatorTeamUser } from './video-metadata-connections-resource-creator-team-user';
import { VideoMetadataConnectionsSeason } from './video-metadata-connections-season';
import { VideoMetadataConnectionsTeamPermissions } from './video-metadata-connections-team-permissions';
import { VideoMetadataConnectionsTexttracks } from './video-metadata-connections-texttracks';
import { VideoMetadataConnectionsTrailer } from './video-metadata-connections-trailer';
import { VideoMetadataConnectionsUsersWithAccess } from './video-metadata-connections-users-with-access';
import { VideoMetadataConnectionsVersions } from './video-metadata-connections-versions';

/**
 * A list of resource URIs related to the video.
 * @export
 * @interface VideoMetadataConnections
 */
export interface VideoMetadataConnections {
    /**
     * Information about the video\'s ancestry, ordered from the direct parent folder to higher-level ancestors.
     * @type {Array<AncestorPath>}
     * @memberof VideoMetadataConnections
     */
    'ancestor_path': Array<AncestorPath>;
    /**
     * 
     * @type {VideoMetadataConnectionsAvailableChannels}
     * @memberof VideoMetadataConnections
     */
    'available_channels': VideoMetadataConnectionsAvailableChannels;
    /**
     * 
     * @type {VideoMetadataConnectionsComments}
     * @memberof VideoMetadataConnections
     */
    'comments': VideoMetadataConnectionsComments;
    /**
     * 
     * @type {VideoMetadataConnectionsCredits}
     * @memberof VideoMetadataConnections
     */
    'credits': VideoMetadataConnectionsCredits | null;
    /**
     * 
     * @type {VideoMetadataConnectionsLikes}
     * @memberof VideoMetadataConnections
     */
    'likes': VideoMetadataConnectionsLikes;
    /**
     * 
     * @type {VideoMetadataConnectionsOndemand}
     * @memberof VideoMetadataConnections
     */
    'ondemand': VideoMetadataConnectionsOndemand;
    /**
     * 
     * @type {VideoMetadataConnectionsPictures}
     * @memberof VideoMetadataConnections
     */
    'pictures': VideoMetadataConnectionsPictures;
    /**
     * 
     * @type {VideoMetadataConnectionsRecommendations}
     * @memberof VideoMetadataConnections
     */
    'recommendations': VideoMetadataConnectionsRecommendations | null;
    /**
     * 
     * @type {VideoMetadataConnectionsRelated}
     * @memberof VideoMetadataConnections
     */
    'related': VideoMetadataConnectionsRelated | null;
    /**
     * 
     * @type {VideoMetadataConnectionsResourceCreatorTeamUser}
     * @memberof VideoMetadataConnections
     */
    'resource_creator_team_user': VideoMetadataConnectionsResourceCreatorTeamUser;
    /**
     * 
     * @type {VideoMetadataConnectionsSeason}
     * @memberof VideoMetadataConnections
     */
    'season': VideoMetadataConnectionsSeason;
    /**
     * 
     * @type {VideoMetadataConnectionsTeamPermissions}
     * @memberof VideoMetadataConnections
     */
    'team_permissions': VideoMetadataConnectionsTeamPermissions;
    /**
     * 
     * @type {VideoMetadataConnectionsTexttracks}
     * @memberof VideoMetadataConnections
     */
    'texttracks': VideoMetadataConnectionsTexttracks;
    /**
     * 
     * @type {VideoMetadataConnectionsTrailer}
     * @memberof VideoMetadataConnections
     */
    'trailer': VideoMetadataConnectionsTrailer;
    /**
     * 
     * @type {VideoMetadataConnectionsUsersWithAccess}
     * @memberof VideoMetadataConnections
     */
    'users_with_access': VideoMetadataConnectionsUsersWithAccess;
    /**
     * 
     * @type {VideoMetadataConnectionsVersions}
     * @memberof VideoMetadataConnections
     */
    'versions': VideoMetadataConnectionsVersions;
}

