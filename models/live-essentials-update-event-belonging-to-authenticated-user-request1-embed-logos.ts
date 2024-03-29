/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest1EmbedLogosCustom } from './live-essentials-update-event-belonging-to-authenticated-user-request1-embed-logos-custom';

/**
 * 
 * @export
 * @interface LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest1EmbedLogos
 */
export interface LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest1EmbedLogos {
    /**
     * 
     * @type {LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest1EmbedLogosCustom}
     * @memberof LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest1EmbedLogos
     */
    'custom'?: LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest1EmbedLogosCustom;
    /**
     * Whether to show the Vimeo logo on the embed player.
     * @type {boolean}
     * @memberof LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest1EmbedLogos
     */
    'vimeo'?: boolean;
}

