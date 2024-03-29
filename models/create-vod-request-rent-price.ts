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
 * @interface CreateVodRequestRentPrice
 */
export interface CreateVodRequestRentPrice {
    /**
     * The rental price of the video in Australian dollars.
     * @type {number}
     * @memberof CreateVodRequestRentPrice
     */
    'AUD'?: number;
    /**
     * The rental price of the video in Canadian dollars.
     * @type {number}
     * @memberof CreateVodRequestRentPrice
     */
    'CAD'?: number;
    /**
     * The rental price of the video in Swiss francs.
     * @type {number}
     * @memberof CreateVodRequestRentPrice
     */
    'CHF'?: number;
    /**
     * The rental price of the video in Danish krone.
     * @type {number}
     * @memberof CreateVodRequestRentPrice
     */
    'DKK'?: number;
    /**
     * The rental price of the video in euros.
     * @type {number}
     * @memberof CreateVodRequestRentPrice
     */
    'EUR'?: number;
    /**
     * The rental price of the video in British pounds.
     * @type {number}
     * @memberof CreateVodRequestRentPrice
     */
    'GBP'?: number;
    /**
     * The rental price of the video in Japanese yen.
     * @type {number}
     * @memberof CreateVodRequestRentPrice
     */
    'JPY'?: number;
    /**
     * The rental price of the video in South Korean won.
     * @type {number}
     * @memberof CreateVodRequestRentPrice
     */
    'KRW'?: number;
    /**
     * The rental price of the video in Norwegian krone.
     * @type {number}
     * @memberof CreateVodRequestRentPrice
     */
    'NOK'?: number;
    /**
     * The rental price of the video in Polish zloty.
     * @type {number}
     * @memberof CreateVodRequestRentPrice
     */
    'PLN'?: number;
    /**
     * The rental price of the video in Swedish krona.
     * @type {number}
     * @memberof CreateVodRequestRentPrice
     */
    'SEK'?: number;
    /**
     * When **type** is `film`, the rental price of the video in United States dollars. When **type** is `series`, the rental price of the entire collection in United States dollars.
     * @type {number}
     * @memberof CreateVodRequestRentPrice
     */
    'USD'?: number;
}

