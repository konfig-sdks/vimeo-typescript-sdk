/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * An action indicating that someone has joined the group. This data requires a bearer token with the `private` scope.
 * @export
 * @interface GroupMetadataInteractionsJoin
 */
export interface GroupMetadataInteractionsJoin {
    /**
     * The user\'s title. If this field isn\'t applicable, it takes the null value. This data requires a bearer token with the `private` scope.
     * @type {string}
     * @memberof GroupMetadataInteractionsJoin
     */
    'title': string | null;
    /**
     * Whether the user has followed the group. This data requires a bearer token with the `private` scope.
     * @type {boolean}
     * @memberof GroupMetadataInteractionsJoin
     */
    'added': boolean;
    /**
     * The time in ISO 8601 format when the user joined the group. This data requires a bearer token with the `private` scope.
     * @type {string}
     * @memberof GroupMetadataInteractionsJoin
     */
    'added_time': string | null;
    /**
     * Whether the user is a moderator or subscriber. This data requires a bearer token with the `private` scope.  Option descriptions:  * `member` - The user is a member.  * `moderator` - The user is a moderator. 
     * @type {string}
     * @memberof GroupMetadataInteractionsJoin
     */
    'type': GroupMetadataInteractionsJoinTypeEnum;
    /**
     * The URI for following the group. PUT to this URI to follow the group, or DELETE to this URI to unfollow the group. This data requires a bearer token with the `private` scope.
     * @type {string}
     * @memberof GroupMetadataInteractionsJoin
     */
    'uri': string;
}

type GroupMetadataInteractionsJoinTypeEnum = 'member' | 'moderator'

