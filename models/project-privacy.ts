/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The privacy settings of the folder.
 * @export
 * @interface ProjectPrivacy
 */
export interface ProjectPrivacy {
    /**
     * The privacy setting for accessing the folder.  Option descriptions:  * `anybody` - Anyone with the link can access the contents of the folder. This privacy setting appears as `Public` on the Vimeo front end.  * `nobody` - Only the owner and those team members that the owner has explicitly invited can access the contents of the folder. This privacy setting appears as `Private` on the Vimeo front end.  * `team` - Only those team members with the link can access the contents of the folder. 
     * @type {string}
     * @memberof ProjectPrivacy
     */
    'view': ProjectPrivacyViewEnum;
}

type ProjectPrivacyViewEnum = 'anybody' | 'nobody' | 'team'

