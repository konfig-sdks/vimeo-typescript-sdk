/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequestEmbedLogosCustom } from './live-essentials-update-event-belonging-to-authenticated-user-request-embed-logos-custom';

/**
 * 
 * @export
 * @interface LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequestEmbedLogos
 */
export interface LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequestEmbedLogos {
    /**
     * 
     * @type {LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequestEmbedLogosCustom}
     * @memberof LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequestEmbedLogos
     */
    'custom'?: LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequestEmbedLogosCustom;
    /**
     * Whether to show the Vimeo logo on the embed player.
     * @type {boolean}
     * @memberof LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequestEmbedLogos
     */
    'vimeo'?: boolean;
}

