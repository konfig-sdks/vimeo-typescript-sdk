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
 * @interface PermissionPolicy
 */
export interface PermissionPolicy {
    /**
     * The time at which the permission policy was created.
     * @type {string}
     * @memberof PermissionPolicy
     */
    'created_on': string;
    /**
     * The display description of the permission policy, translated where applicable.
     * @type {string}
     * @memberof PermissionPolicy
     */
    'display_description': string;
    /**
     * The display name of the permission policy, translated where applicable.
     * @type {string}
     * @memberof PermissionPolicy
     */
    'display_name': string;
    /**
     * The time at which the permission policy was last modified.
     * @type {string}
     * @memberof PermissionPolicy
     */
    'modified_on': string | null;
    /**
     * The name of the permission policy.
     * @type {string}
     * @memberof PermissionPolicy
     */
    'name': string;
    /**
     * The permission actions associated with the policy.
     * @type {object}
     * @memberof PermissionPolicy
     */
    'permission_actions': object;
    /**
     * The URI of the permission policy.
     * @type {string}
     * @memberof PermissionPolicy
     */
    'uri': string;
}

