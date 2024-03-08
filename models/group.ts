/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { GroupMetadata } from './group-metadata';
import { GroupPrivacy } from './group-privacy';
import { Picture } from './picture';
import { User } from './user';

/**
 * 
 * @export
 * @interface Group
 */
export interface Group {
    /**
     * The group\'s description.
     * @type {string}
     * @memberof Group
     */
    'description': string | null;
    /**
     * The time in ISO 8601 format when the group was created.
     * @type {string}
     * @memberof Group
     */
    'created_time': string;
    /**
     * The link to the group.
     * @type {string}
     * @memberof Group
     */
    'link': string;
    /**
     * 
     * @type {GroupMetadata}
     * @memberof Group
     */
    'metadata': GroupMetadata;
    /**
     * The time in ISO 8601 format when the group was last modified.
     * @type {string}
     * @memberof Group
     */
    'modified_time': string;
    /**
     * The group\'s display name.
     * @type {string}
     * @memberof Group
     */
    'name': string;
    /**
     * The active picture for the group.
     * @type {Picture}
     * @memberof Group
     */
    'pictures': Picture;
    /**
     * 
     * @type {GroupPrivacy}
     * @memberof Group
     */
    'privacy': GroupPrivacy;
    /**
     * The resource key of the group.
     * @type {string}
     * @memberof Group
     */
    'resource_key': string;
    /**
     * The canonical relative URI of the group.
     * @type {string}
     * @memberof Group
     */
    'uri': string;
    /**
     * The owner of the group.
     * @type {User}
     * @memberof Group
     */
    'user'?: User;
}

