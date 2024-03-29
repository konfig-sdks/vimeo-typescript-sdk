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
 * @interface CreateProjectRequest
 */
export interface CreateProjectRequest {
    /**
     * The name of the folder.
     * @type {string}
     * @memberof CreateProjectRequest
     */
    'name': string;
    /**
     * The URI of the parent folder.
     * @type {string}
     * @memberof CreateProjectRequest
     */
    'parent_folder_uri'?: string;
}

