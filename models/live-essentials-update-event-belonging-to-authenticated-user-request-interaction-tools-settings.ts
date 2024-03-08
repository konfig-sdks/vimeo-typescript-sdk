/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The settings for the interaction tools.
 * @export
 * @interface LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequestInteractionToolsSettings
 */
export interface LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequestInteractionToolsSettings {
    /**
     * Whether anonymous questions are disabled for the interaction tools settings.
     * @type {boolean}
     * @memberof LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequestInteractionToolsSettings
     */
    'is_anonymous_questions_disabled'?: boolean;
    /**
     * Whether the Q&A is moderated for the interaction tools settings.
     * @type {boolean}
     * @memberof LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequestInteractionToolsSettings
     */
    'is_qna_moderated'?: boolean;
}

