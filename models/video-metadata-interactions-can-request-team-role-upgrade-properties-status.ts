/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * An object containing data on the value of **status** and whether it\'s required for the interaction.
 * @export
 * @interface VideoMetadataInteractionsCanRequestTeamRoleUpgradePropertiesStatus
 */
export interface VideoMetadataInteractionsCanRequestTeamRoleUpgradePropertiesStatus {
    /**
     * Whether the status of the role upgrade request must be sent to achieve the desired action.
     * @type {boolean}
     * @memberof VideoMetadataInteractionsCanRequestTeamRoleUpgradePropertiesStatus
     */
    'required': boolean;
    /**
     * The status of the role upgrade request to which the team member should have access.
     * @type {string}
     * @memberof VideoMetadataInteractionsCanRequestTeamRoleUpgradePropertiesStatus
     */
    'value': string;
}

