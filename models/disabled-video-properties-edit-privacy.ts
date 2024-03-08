/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DisabledVideoPropertiesEditPrivacyReasonsInner } from './disabled-video-properties-edit-privacy-reasons-inner';

/**
 * An object that represents the reason why privacy editing is disabled for the video.
 * @export
 * @interface DisabledVideoPropertiesEditPrivacy
 */
export interface DisabledVideoPropertiesEditPrivacy {
    /**
     * The relative link to upgrade to privacy editing.
     * @type {string}
     * @memberof DisabledVideoPropertiesEditPrivacy
     */
    'enable_link': string;
    /**
     * The path to the edit privacy interaction object in the video response.
     * @type {string}
     * @memberof DisabledVideoPropertiesEditPrivacy
     */
    'key_path': string;
    /**
     * The capability required to activate privacy editing.  Option descriptions:  * `basic` - The user must have at least a Vimeo Basic account.  * `business` - The user must have at least a Vimeo Business account.  * `enterprise` - The user must have at least a Vimeo Enterprise account.  * `live_business` - The user must have at least a Vimeo Business Live account.  * `live_premium` - The user must have at least a Vimeo Premium account.  * `live_pro` - The user must have at least a Vimeo Pro Live account.  * `plus` - The user must have at least a Vimeo Plus account.  * `pro` - The user must have at least a Vimeo Pro account.  * `pro_unlimited` - The user must have at least a Vimeo Pro Unlimited account.  * `producer` - The user must have at least a Vimeo Producer account. 
     * @type {string}
     * @memberof DisabledVideoPropertiesEditPrivacy
     */
    'min_tier_for_capability': DisabledVideoPropertiesEditPrivacyMinTierForCapabilityEnum;
    /**
     * The reasons why privacy editing is disabled for the video.
     * @type {Array<DisabledVideoPropertiesEditPrivacyReasonsInner>}
     * @memberof DisabledVideoPropertiesEditPrivacy
     */
    'reasons': Array<DisabledVideoPropertiesEditPrivacyReasonsInner>;
}

type DisabledVideoPropertiesEditPrivacyMinTierForCapabilityEnum = 'basic' | 'business' | 'enterprise' | 'live_business' | 'live_premium' | 'live_pro' | 'plus' | 'pro' | 'pro_unlimited' | 'producer'

