/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about where and how to validate a video field.
 * @export
 * @interface VideoMetadataInteractionsValidate
 */
export interface VideoMetadataInteractionsValidate {
    /**
     * An array of HTTP methods permitted on this URI.
     * @type {Array<string>}
     * @memberof VideoMetadataInteractionsValidate
     */
    'options': Array<string>;
    /**
     * The URI that resolves to the connection data.
     * @type {string}
     * @memberof VideoMetadataInteractionsValidate
     */
    'uri': string;
}

