/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { VideoMetadataInteractionsCanRequestTeamRoleUpgradePropertiesFolderUri } from './video-metadata-interactions-can-request-team-role-upgrade-properties-folder-uri';
import { VideoMetadataInteractionsCanRequestTeamRoleUpgradePropertiesStatus } from './video-metadata-interactions-can-request-team-role-upgrade-properties-status';
import { VideoMetadataInteractionsCanRequestTeamRoleUpgradePropertiesUpgradeToRole } from './video-metadata-interactions-can-request-team-role-upgrade-properties-upgrade-to-role';

/**
 * An object of suggested fields to be used for this interaction.
 * @export
 * @interface VideoMetadataInteractionsCanRequestTeamRoleUpgradeProperties
 */
export interface VideoMetadataInteractionsCanRequestTeamRoleUpgradeProperties {
    /**
     * 
     * @type {VideoMetadataInteractionsCanRequestTeamRoleUpgradePropertiesFolderUri}
     * @memberof VideoMetadataInteractionsCanRequestTeamRoleUpgradeProperties
     */
    'folder_uri': VideoMetadataInteractionsCanRequestTeamRoleUpgradePropertiesFolderUri;
    /**
     * 
     * @type {VideoMetadataInteractionsCanRequestTeamRoleUpgradePropertiesStatus}
     * @memberof VideoMetadataInteractionsCanRequestTeamRoleUpgradeProperties
     */
    'status': VideoMetadataInteractionsCanRequestTeamRoleUpgradePropertiesStatus;
    /**
     * 
     * @type {VideoMetadataInteractionsCanRequestTeamRoleUpgradePropertiesUpgradeToRole}
     * @memberof VideoMetadataInteractionsCanRequestTeamRoleUpgradeProperties
     */
    'upgrade_to_role': VideoMetadataInteractionsCanRequestTeamRoleUpgradePropertiesUpgradeToRole;
}
