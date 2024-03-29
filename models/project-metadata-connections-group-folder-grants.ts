/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the folder\'s group access grants.
 * @export
 * @interface ProjectMetadataConnectionsGroupFolderGrants
 */
export interface ProjectMetadataConnectionsGroupFolderGrants {
    /**
     * An array of HTTP methods permitted on this URI.
     * @type {Array<string>}
     * @memberof ProjectMetadataConnectionsGroupFolderGrants
     */
    'options': Array<string>;
    /**
     * The total number of group access grants on this connection.
     * @type {number}
     * @memberof ProjectMetadataConnectionsGroupFolderGrants
     */
    'total': number;
    /**
     * The API URI that resolves to the connection data.
     * @type {string}
     * @memberof ProjectMetadataConnectionsGroupFolderGrants
     */
    'uri': string;
}

