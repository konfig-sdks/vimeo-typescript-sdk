/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ProjectMetadataConnections } from './project-metadata-connections';
import { ProjectMetadataInteractions } from './project-metadata-interactions';

/**
 * Information about the folders\'s metadata.
 * @export
 * @interface ProjectMetadata
 */
export interface ProjectMetadata {
    /**
     * 
     * @type {ProjectMetadataConnections}
     * @memberof ProjectMetadata
     */
    'connections': ProjectMetadataConnections;
    /**
     * 
     * @type {ProjectMetadataInteractions}
     * @memberof ProjectMetadata
     */
    'interactions': ProjectMetadataInteractions;
}

