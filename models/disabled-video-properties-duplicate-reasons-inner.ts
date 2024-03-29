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
 * @interface DisabledVideoPropertiesDuplicateReasonsInner
 */
export interface DisabledVideoPropertiesDuplicateReasonsInner {
    /**
     * The icon that represents the reason why duplication is disabled.  Option descriptions:  * `clock` - The reason is represented by a clock icon.  * `create` - The reason is represented by a create icon.  * `image` - The reason is represented by an image icon.  * `theme` - The reason is represented by a theme icon. 
     * @type {string}
     * @memberof DisabledVideoPropertiesDuplicateReasonsInner
     */
    'icon': DisabledVideoPropertiesDuplicateReasonsInnerIconEnum;
    /**
     * A user-deliverable message of why duplication is disabled.
     * @type {string}
     * @memberof DisabledVideoPropertiesDuplicateReasonsInner
     */
    'message': string;
}

type DisabledVideoPropertiesDuplicateReasonsInnerIconEnum = 'clock' | 'create' | 'image' | 'theme'


