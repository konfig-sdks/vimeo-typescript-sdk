/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the video\'s team permissions list. This data requires a bearer token with the `private` scope.
 * @export
 * @interface VideoMetadataConnectionsTeamPermissions
 */
export interface VideoMetadataConnectionsTeamPermissions {
    /**
     * An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.
     * @type {Array<string>}
     * @memberof VideoMetadataConnectionsTeamPermissions
     */
    'options': Array<string>;
}

