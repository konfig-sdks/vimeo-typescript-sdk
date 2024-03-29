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
 * @interface EditShowcaseRequest
 */
export interface EditShowcaseRequest {
    /**
     * The description of the showcase.
     * @type {string}
     * @memberof EditShowcaseRequest
     */
    'description'?: string;
    /**
     * The hexadecimal code for the color of the player buttons and showcase controls.
     * @type {string}
     * @memberof EditShowcaseRequest
     */
    'brand_color'?: string;
    /**
     * The custom domain of the showcase.
     * @type {string}
     * @memberof EditShowcaseRequest
     */
    'domain'?: string | null;
    /**
     * Whether to hide Vimeo navigation when displaying the showcase.
     * @type {boolean}
     * @memberof EditShowcaseRequest
     */
    'hide_nav'?: boolean;
    /**
     * Whether to include the upcoming event in the showcase.
     * @type {boolean}
     * @memberof EditShowcaseRequest
     */
    'hide_upcoming'?: boolean;
    /**
     * The type of layout for presenting the showcase.  Option descriptions:  * `grid` - The videos appear in a grid.  * `player` - The videos appear in the player. 
     * @type {string}
     * @memberof EditShowcaseRequest
     */
    'layout'?: EditShowcaseRequestLayoutEnum;
    /**
     * The name of the showcase.
     * @type {string}
     * @memberof EditShowcaseRequest
     */
    'name'?: string;
    /**
     * The showcase\'s password. This field is required only when **privacy** is `password`.
     * @type {string}
     * @memberof EditShowcaseRequest
     */
    'password'?: string;
    /**
     * The privacy level of the showcase.  Option descriptions:  * `anybody` - Anyone can access the showcase, either on Vimeo or through an embed.  * `embed_only` - The showcase doesn\'t appear on Vimeo, but it can be embedded on other sites.  * `nobody` - No one can access the showcase, including the authenticated user.  * `password` - Only people with the password can access the showcase.  * `team` - Only members of the authenticated user\'s team can access the showcase.  * `unlisted` - The showcase can\'t be accessed if the URL omits its unlisted hash. 
     * @type {string}
     * @memberof EditShowcaseRequest
     */
    'privacy'?: EditShowcaseRequestPrivacyEnum;
    /**
     * Whether showcase videos use the review mode URL.
     * @type {boolean}
     * @memberof EditShowcaseRequest
     */
    'review_mode'?: boolean;
    /**
     * The default sort order of the videos as they appear in the showcase.  Option descriptions:  * `added_first` - The videos appear according to when they were added to the showcase, with the most recently added first.  * `added_last` - The videos appear according to when they were added to the showcase, with the most recently added last.  * `alphabetical` - The videos appear alphabetically by their title.  * `arranged` - The videos appear as arranged by the owner of the showcase.  * `comments` - The videos appear according to their number of comments.  * `likes` - The videos appear according to their number of likes.  * `newest` - The videos appear in chronological order with the newest first.  * `oldest` - The videos appear in chronological order with the oldest first.  * `plays` - The videos appear according to their number of plays. 
     * @type {string}
     * @memberof EditShowcaseRequest
     */
    'sort'?: EditShowcaseRequestSortEnum;
    /**
     * The color theme of the showcase.  Option descriptions:  * `dark` - The showcase uses the dark theme.  * `standard` - The showcase uses the standard theme. 
     * @type {string}
     * @memberof EditShowcaseRequest
     */
    'theme'?: EditShowcaseRequestThemeEnum;
    /**
     * The custom Vimeo URL of the showcase.
     * @type {string}
     * @memberof EditShowcaseRequest
     */
    'url'?: string | null;
    /**
     * Whether the user has opted for a custom domain for their showcase.
     * @type {boolean}
     * @memberof EditShowcaseRequest
     */
    'use_custom_domain'?: boolean;
}

type EditShowcaseRequestLayoutEnum = 'grid' | 'player'
type EditShowcaseRequestPrivacyEnum = 'anybody' | 'embed_only' | 'nobody' | 'password' | 'team' | 'unlisted'
type EditShowcaseRequestSortEnum = 'added_first' | 'added_last' | 'alphabetical' | 'arranged' | 'comments' | 'likes' | 'newest' | 'oldest' | 'plays'
type EditShowcaseRequestThemeEnum = 'dark' | 'standard'


