/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OnDemandEssentialsCreatePageRequestBuy } from './on-demand-essentials-create-page-request-buy';
import { OnDemandEssentialsCreatePageRequestEpisodes } from './on-demand-essentials-create-page-request-episodes';
import { OnDemandEssentialsCreatePageRequestRent } from './on-demand-essentials-create-page-request-rent';
import { OnDemandEssentialsCreatePageRequestSubscription } from './on-demand-essentials-create-page-request-subscription';

/**
 * 
 * @export
 * @interface OnDemandEssentialsCreatePageRequest
 */
export interface OnDemandEssentialsCreatePageRequest {
    /**
     * The description of the On Demand page.
     * @type {string}
     * @memberof OnDemandEssentialsCreatePageRequest
     */
    'description': string;
    /**
     * An array of accepted currencies.  Option descriptions:  * `AUD` - The currency is in Australian dollars.  * `CAD` - The currency is in Canadian dollars.  * `CHF` - The currency is in Swiss francs.  * `DKK` - The currency is in Danish krone.  * `EUR` - The currency is in euros.  * `GBP` - The currency is in British pounds.  * `JPY` - The currency is in Japanese yen.  * `KRW` - The currency is in South Korean won.  * `NOK` - The currency is in Norwegian krone.  * `PLN` - The currency is in Polish zloty.  * `SEK` - The currency is in Swedish krona.  * `USD` - The currency is in United States dollars. 
     * @type {string}
     * @memberof OnDemandEssentialsCreatePageRequest
     */
    'accepted_currencies'?: OnDemandEssentialsCreatePageRequestAcceptedCurrenciesEnum;
    /**
     * 
     * @type {OnDemandEssentialsCreatePageRequestBuy}
     * @memberof OnDemandEssentialsCreatePageRequest
     */
    'buy'?: OnDemandEssentialsCreatePageRequestBuy;
    /**
     * The content rating of the video, given either as a comma-separated list or as a JSON array, depending on the request format.  Option descriptions:  * `drugs` - The video contains drug or alcohol use.  * `language` - The video contains profanity or sexually suggestive content.  * `nudity` - The video contains nudity.  * `safe` - The video is suitable for all audiences.  * `unrated` - The video hasn\'t been rated.  * `violence` - The video contains violent or graphic content. 
     * @type {string}
     * @memberof OnDemandEssentialsCreatePageRequest
     */
    'content_rating': OnDemandEssentialsCreatePageRequestContentRatingEnum;
    /**
     * The custom domain of the On Demand page.
     * @type {string}
     * @memberof OnDemandEssentialsCreatePageRequest
     */
    'domain_link'?: string;
    /**
     * 
     * @type {OnDemandEssentialsCreatePageRequestEpisodes}
     * @memberof OnDemandEssentialsCreatePageRequest
     */
    'episodes'?: OnDemandEssentialsCreatePageRequestEpisodes;
    /**
     * The custom string to use in the Vimeo URL of the On Demand page.
     * @type {string}
     * @memberof OnDemandEssentialsCreatePageRequest
     */
    'link'?: string;
    /**
     * The name of the On Demand page.
     * @type {string}
     * @memberof OnDemandEssentialsCreatePageRequest
     */
    'name': string;
    /**
     * 
     * @type {OnDemandEssentialsCreatePageRequestRent}
     * @memberof OnDemandEssentialsCreatePageRequest
     */
    'rent'?: OnDemandEssentialsCreatePageRequestRent;
    /**
     * 
     * @type {OnDemandEssentialsCreatePageRequestSubscription}
     * @memberof OnDemandEssentialsCreatePageRequest
     */
    'subscription'?: OnDemandEssentialsCreatePageRequestSubscription;
    /**
     * The type of the On Demand page.  Option descriptions:  * `film` - The On Demand page is a film.  * `series` - The On Demand page is a series. 
     * @type {string}
     * @memberof OnDemandEssentialsCreatePageRequest
     */
    'type': OnDemandEssentialsCreatePageRequestTypeEnum;
}

type OnDemandEssentialsCreatePageRequestAcceptedCurrenciesEnum = 'AUD' | 'CAD' | 'CHF' | 'DKK' | 'EUR' | 'GBP' | 'JPY' | 'KRW' | 'NOK' | 'PLN' | 'SEK' | 'USD'
type OnDemandEssentialsCreatePageRequestContentRatingEnum = 'drugs' | 'language' | 'nudity' | 'safe' | 'unrated' | 'violence'
type OnDemandEssentialsCreatePageRequestTypeEnum = 'film' | 'series'


