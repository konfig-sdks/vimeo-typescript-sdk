/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LiveEventMetadataInteractions } from './live-event-metadata-interactions';
import { LiveEventRecurringMetadataConnections } from './live-event-recurring-metadata-connections';

/**
 * Metadata about the event.
 * @export
 * @interface LiveEventRecurringMetadata
 */
export interface LiveEventRecurringMetadata {
    /**
     * 
     * @type {LiveEventRecurringMetadataConnections}
     * @memberof LiveEventRecurringMetadata
     */
    'connections': LiveEventRecurringMetadataConnections;
    /**
     * 
     * @type {LiveEventMetadataInteractions}
     * @memberof LiveEventRecurringMetadata
     */
    'interactions': LiveEventMetadataInteractions;
}

