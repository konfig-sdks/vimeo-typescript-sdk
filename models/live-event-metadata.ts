/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LiveEventMetadataConnections } from './live-event-metadata-connections';
import { LiveEventMetadataInteractions } from './live-event-metadata-interactions';

/**
 * Metadata about the event.
 * @export
 * @interface LiveEventMetadata
 */
export interface LiveEventMetadata {
    /**
     * 
     * @type {LiveEventMetadataConnections}
     * @memberof LiveEventMetadata
     */
    'connections': LiveEventMetadataConnections;
    /**
     * 
     * @type {LiveEventMetadataInteractions}
     * @memberof LiveEventMetadata
     */
    'interactions': LiveEventMetadataInteractions;
}

