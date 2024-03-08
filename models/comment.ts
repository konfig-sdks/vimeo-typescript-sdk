/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CommentMetadata } from './comment-metadata';
import { Reply } from './reply';
import { User } from './user';

/**
 * 
 * @export
 * @interface Comment
 */
export interface Comment {
    /**
     * The time in ISO 8601 format when the comment was posted.
     * @type {string}
     * @memberof Comment
     */
    'created_on': string;
    /**
     * The permalink to the comment.
     * @type {string}
     * @memberof Comment
     */
    'link': string;
    /**
     * 
     * @type {CommentMetadata}
     * @memberof Comment
     */
    'metadata': CommentMetadata;
    /**
     * The list of replies to the comment.
     * @type {Array<Reply>}
     * @memberof Comment
     */
    'replies': Array<Reply>;
    /**
     * The comment\'s resource key string.
     * @type {string}
     * @memberof Comment
     */
    'resource_key': string;
    /**
     * The content of the comment.
     * @type {string}
     * @memberof Comment
     */
    'text': string;
    /**
     * The Vimeo content to which the comment relates.  Option descriptions:  * `video` - The comment is about a video. 
     * @type {string}
     * @memberof Comment
     */
    'type': CommentTypeEnum;
    /**
     * The unique identifier to access the comment resource.
     * @type {string}
     * @memberof Comment
     */
    'uri': string;
    /**
     * The user who posted the comment. _This field is deprecated. Use the `metadata.connections.user` field instead._
     * @type {User}
     * @memberof Comment
     */
    'user': User;
}

type CommentTypeEnum = 'video'


