/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TeamMembershipMetadataConnections } from './team-membership-metadata-connections';

/**
 * The metadata of the team membership.
 * @export
 * @interface TeamMembershipMetadata
 */
export interface TeamMembershipMetadata {
    /**
     * 
     * @type {TeamMembershipMetadataConnections}
     * @memberof TeamMembershipMetadata
     */
    'connections': TeamMembershipMetadataConnections;
}

