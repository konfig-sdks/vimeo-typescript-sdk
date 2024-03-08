/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the time or times that the event is expected to be live.
 * @export
 * @interface LiveEssentialsCreateEventRequestSchedule
 */
export interface LiveEssentialsCreateEventRequestSchedule {
    /**
     * The time in ISO 8601 format when the event is expected to be live, with the zero UTC offset `Z`. This parameter is required when **schedule.type** is `weekly`.
     * @type {string}
     * @memberof LiveEssentialsCreateEventRequestSchedule
     */
    'daily_time'?: string;
    /**
     * How often the event is expected to be live.  Option descriptions:  * `single` - The event is live one time only.  * `weekly` - The event is live on a weekly basis. 
     * @type {string}
     * @memberof LiveEssentialsCreateEventRequestSchedule
     */
    'type'?: LiveEssentialsCreateEventRequestScheduleTypeEnum;
    /**
     * A non-empty array of weekdays on which the event is expected to be live. Weekdays can range from 1 to 7, where 1 is Monday and 7 is Sunday. This parameter is required when **schedule.type** is `weekly`.
     * @type {Array<string>}
     * @memberof LiveEssentialsCreateEventRequestSchedule
     */
    'weekdays'?: Array<string>;
}

type LiveEssentialsCreateEventRequestScheduleTypeEnum = 'single' | 'weekly'

