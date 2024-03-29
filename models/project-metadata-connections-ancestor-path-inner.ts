/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface ProjectMetadataConnectionsAncestorPathInner
 */
export interface ProjectMetadataConnectionsAncestorPathInner {
    /**
     * Whether the user can upload to this ancestor folder.
     * @type {boolean}
     * @memberof ProjectMetadataConnectionsAncestorPathInner
     */
    'can_upload': boolean;
    /**
     * The name of the folder.
     * @type {string}
     * @memberof ProjectMetadataConnectionsAncestorPathInner
     */
    'name': string;
    /**
     * The URI of the ancestor folder.
     * @type {string}
     * @memberof ProjectMetadataConnectionsAncestorPathInner
     */
    'uri': string;
}

