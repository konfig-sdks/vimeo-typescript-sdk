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
 * @interface ShowcasesEssentialsCreateUserShowcaseRequest
 */
export interface ShowcasesEssentialsCreateUserShowcaseRequest {
    /**
     * The description of the showcase.
     * @type {string}
     * @memberof ShowcasesEssentialsCreateUserShowcaseRequest
     */
    'description'?: string;
    /**
     * The hexadecimal code for the color of the player buttons and showcase controls.
     * @type {string}
     * @memberof ShowcasesEssentialsCreateUserShowcaseRequest
     */
    'brand_color'?: string;
    /**
     * Whether the showcase should be hidden from Vimeo when unlisted.
     * @type {boolean}
     * @memberof ShowcasesEssentialsCreateUserShowcaseRequest
     */
    'hide_from_vimeo'?: boolean;
    /**
     * Whether to hide Vimeo navigation when displaying the showcase.
     * @type {boolean}
     * @memberof ShowcasesEssentialsCreateUserShowcaseRequest
     */
    'hide_nav'?: boolean;
    /**
     * Whether to include the upcoming event in the showcase.
     * @type {boolean}
     * @memberof ShowcasesEssentialsCreateUserShowcaseRequest
     */
    'hide_upcoming'?: boolean;
    /**
     * The type of layout for presenting the showcase.  Option descriptions:  * `grid` - The videos appear in a grid.  * `player` - The videos appear in the player. 
     * @type {string}
     * @memberof ShowcasesEssentialsCreateUserShowcaseRequest
     */
    'layout'?: ShowcasesEssentialsCreateUserShowcaseRequestLayoutEnum;
    /**
     * The name of the showcase.
     * @type {string}
     * @memberof ShowcasesEssentialsCreateUserShowcaseRequest
     */
    'name': string;
    /**
     * The showcase\'s password. This field is required only when **privacy** is `password`.
     * @type {string}
     * @memberof ShowcasesEssentialsCreateUserShowcaseRequest
     */
    'password'?: string;
    /**
     * The privacy level of the showcase.  Option descriptions:  * `anybody` - Anyone can access the showcase, either on Vimeo or through an embed.  * `embed_only` - The showcase doesn\'t appear on Vimeo, but it can be embedded on other sites.  * `nobody` - No one can access the showcase, including the authenticated user.  * `password` - Only those with the password can access the showcase.  * `team` - Only members of the authenticated user\'s team can access the showcase.  * `unlisted` - The showcase can\'t be accessed if the URL omits its unlisted hash. 
     * @type {string}
     * @memberof ShowcasesEssentialsCreateUserShowcaseRequest
     */
    'privacy'?: ShowcasesEssentialsCreateUserShowcaseRequestPrivacyEnum;
    /**
     * Whether showcase videos use the review mode URL.
     * @type {boolean}
     * @memberof ShowcasesEssentialsCreateUserShowcaseRequest
     */
    'review_mode'?: boolean;
    /**
     * The default sort order of the videos as they appear in the showcase.  Option descriptions:  * `added_first` - The videos appear according to when they were added to the showcase, with the most recently added first.  * `added_last` - The videos appear according to when they were added to the showcase, with the most recently added last.  * `alphabetical` - The videos appear alphabetically by their title.  * `arranged` - The videos appear as arranged by the owner of the showcase.  * `comments` - The videos appear according to their number of comments.  * `likes` - The videos appear according to their number of likes.  * `newest` - The videos appear in chronological order with the newest first.  * `oldest` - The videos appear in chronological order with the oldest first.  * `plays` - The videos appear according to their number of plays. 
     * @type {string}
     * @memberof ShowcasesEssentialsCreateUserShowcaseRequest
     */
    'sort'?: ShowcasesEssentialsCreateUserShowcaseRequestSortEnum;
    /**
     * The color theme of the showcase.  Option descriptions:  * `dark` - The showcase uses the dark theme.  * `standard` - The showcase uses the standard theme. 
     * @type {string}
     * @memberof ShowcasesEssentialsCreateUserShowcaseRequest
     */
    'theme'?: ShowcasesEssentialsCreateUserShowcaseRequestThemeEnum;
}

type ShowcasesEssentialsCreateUserShowcaseRequestLayoutEnum = 'grid' | 'player'
type ShowcasesEssentialsCreateUserShowcaseRequestPrivacyEnum = 'anybody' | 'embed_only' | 'nobody' | 'password' | 'team' | 'unlisted'
type ShowcasesEssentialsCreateUserShowcaseRequestSortEnum = 'added_first' | 'added_last' | 'alphabetical' | 'arranged' | 'comments' | 'likes' | 'newest' | 'oldest' | 'plays'
type ShowcasesEssentialsCreateUserShowcaseRequestThemeEnum = 'dark' | 'standard'


