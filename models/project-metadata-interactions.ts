/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ProjectMetadataInteractionsAddSubfolder } from './project-metadata-interactions-add-subfolder';
import { ProjectMetadataInteractionsDelete } from './project-metadata-interactions-delete';
import { ProjectMetadataInteractionsDeleteVideo } from './project-metadata-interactions-delete-video';
import { ProjectMetadataInteractionsEdit } from './project-metadata-interactions-edit';
import { ProjectMetadataInteractionsEditSettings } from './project-metadata-interactions-edit-settings';
import { ProjectMetadataInteractionsInvite } from './project-metadata-interactions-invite';
import { ProjectMetadataInteractionsMoveVideo } from './project-metadata-interactions-move-video';
import { ProjectMetadataInteractionsUploadVideo } from './project-metadata-interactions-upload-video';
import { ProjectMetadataInteractionsView } from './project-metadata-interactions-view';

/**
 * A list of permitted interactions related to the folder.
 * @export
 * @interface ProjectMetadataInteractions
 */
export interface ProjectMetadataInteractions {
    /**
     * 
     * @type {ProjectMetadataInteractionsAddSubfolder}
     * @memberof ProjectMetadataInteractions
     */
    'add_subfolder': ProjectMetadataInteractionsAddSubfolder;
    /**
     * 
     * @type {ProjectMetadataInteractionsDelete}
     * @memberof ProjectMetadataInteractions
     */
    'delete': ProjectMetadataInteractionsDelete;
    /**
     * 
     * @type {ProjectMetadataInteractionsDeleteVideo}
     * @memberof ProjectMetadataInteractions
     */
    'delete_video': ProjectMetadataInteractionsDeleteVideo;
    /**
     * 
     * @type {ProjectMetadataInteractionsEdit}
     * @memberof ProjectMetadataInteractions
     */
    'edit': ProjectMetadataInteractionsEdit;
    /**
     * 
     * @type {ProjectMetadataInteractionsEditSettings}
     * @memberof ProjectMetadataInteractions
     */
    'edit_settings': ProjectMetadataInteractionsEditSettings;
    /**
     * 
     * @type {ProjectMetadataInteractionsInvite}
     * @memberof ProjectMetadataInteractions
     */
    'invite': ProjectMetadataInteractionsInvite;
    /**
     * 
     * @type {ProjectMetadataInteractionsMoveVideo}
     * @memberof ProjectMetadataInteractions
     */
    'move_video': ProjectMetadataInteractionsMoveVideo;
    /**
     * 
     * @type {ProjectMetadataInteractionsUploadVideo}
     * @memberof ProjectMetadataInteractions
     */
    'upload_video': ProjectMetadataInteractionsUploadVideo;
    /**
     * 
     * @type {ProjectMetadataInteractionsView}
     * @memberof ProjectMetadataInteractions
     */
    'view': ProjectMetadataInteractionsView;
}

