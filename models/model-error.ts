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
 * @interface ModelError
 */
export interface ModelError {
    /**
     * The error message that technical users receive.
     * @type {string}
     * @memberof ModelError
     */
    'developer_message': string;
    /**
     * The error message that general users receive.
     * @type {string}
     * @memberof ModelError
     */
    'error': string;
    /**
     * The error code.
     * @type {number}
     * @memberof ModelError
     */
    'error_code': number;
    /**
     * A link to more information about the error.
     * @type {string}
     * @memberof ModelError
     */
    'link': string;
}
