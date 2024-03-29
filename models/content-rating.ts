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
 * @interface ContentRating
 */
export interface ContentRating {
    /**
     * The reason for the content rating.  Option descriptions:  * `advertisement` - The content contains an advertisement.  * `drugs` - The content contains drug or alcohol use.  * `language` - The content contains profanity or sexually suggestive language.  * `nudity` - The content contains nudity.  * `safe` - The content is suitable for all audiences.  * `unrated` - The content hasn\'t been rated.  * `violence` - The content contains violence or is graphic. 
     * @type {string}
     * @memberof ContentRating
     */
    'code': ContentRatingCodeEnum;
    /**
     * The name of the content rating.
     * @type {string}
     * @memberof ContentRating
     */
    'name': string;
    /**
     * The canonical relative URI of the content rating.
     * @type {string}
     * @memberof ContentRating
     */
    'uri': string | null;
}

type ContentRatingCodeEnum = 'advertisement' | 'drugs' | 'language' | 'nudity' | 'safe' | 'unrated' | 'violence'


