/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the event owner\'s email quota.
 * @export
 * @interface LiveEventEmailQuota
 */
export interface LiveEventEmailQuota {
    /**
     * The maximum number of entity emails that the user can send.
     * @type {number}
     * @memberof LiveEventEmailQuota
     */
    'capping': number;
    /**
     * The current number of entity emails that the user has sent.
     * @type {number}
     * @memberof LiveEventEmailQuota
     */
    'total': number;
}

