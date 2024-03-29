/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * An object containing data on the value of **upgrade_to_role** and whether it\'s required for the interaction.
 * @export
 * @interface VideoMetadataInteractionsCanRequestTeamRoleUpgradePropertiesUpgradeToRole
 */
export interface VideoMetadataInteractionsCanRequestTeamRoleUpgradePropertiesUpgradeToRole {
    /**
     * Whether the upgrade role must be sent to achieve the desired action.
     * @type {boolean}
     * @memberof VideoMetadataInteractionsCanRequestTeamRoleUpgradePropertiesUpgradeToRole
     */
    'required': boolean;
    /**
     * The value of the team role to which the user should be upgraded.
     * @type {number}
     * @memberof VideoMetadataInteractionsCanRequestTeamRoleUpgradePropertiesUpgradeToRole
     */
    'value': number;
}

