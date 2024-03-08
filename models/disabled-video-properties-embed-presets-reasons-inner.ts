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
 * @interface DisabledVideoPropertiesEmbedPresetsReasonsInner
 */
export interface DisabledVideoPropertiesEmbedPresetsReasonsInner {
    /**
     * The icon that represents the reason why embed presets are disabled.  Option descriptions:  * `clock` - The reason is represented by a clock icon.  * `create` - The reason is represented by a create icon.  * `image` - The reason is represented by an image icon.  * `theme` - The reason is represented by a theme icon. 
     * @type {string}
     * @memberof DisabledVideoPropertiesEmbedPresetsReasonsInner
     */
    'icon': DisabledVideoPropertiesEmbedPresetsReasonsInnerIconEnum;
    /**
     * A user-deliverable message of why embed presets are disabled.
     * @type {string}
     * @memberof DisabledVideoPropertiesEmbedPresetsReasonsInner
     */
    'message': string;
}

type DisabledVideoPropertiesEmbedPresetsReasonsInnerIconEnum = 'clock' | 'create' | 'image' | 'theme'


