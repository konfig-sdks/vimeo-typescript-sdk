/*
Vimeo API

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

The version of the OpenAPI document: 3.4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { VideoMetadataInteractionsAlbum } from './video-metadata-interactions-album';
import { VideoMetadataInteractionsAskAi } from './video-metadata-interactions-ask-ai';
import { VideoMetadataInteractionsAskAiViewer } from './video-metadata-interactions-ask-ai-viewer';
import { VideoMetadataInteractionsBuy } from './video-metadata-interactions-buy';
import { VideoMetadataInteractionsCanRequestTeamRoleUpgrade } from './video-metadata-interactions-can-request-team-role-upgrade';
import { VideoMetadataInteractionsCanUpdatePrivacyToPublic } from './video-metadata-interactions-can-update-privacy-to-public';
import { VideoMetadataInteractionsChannel } from './video-metadata-interactions-channel';
import { VideoMetadataInteractionsCreateEditor } from './video-metadata-interactions-create-editor';
import { VideoMetadataInteractionsDelete } from './video-metadata-interactions-delete';
import { VideoMetadataInteractionsEdit } from './video-metadata-interactions-edit';
import { VideoMetadataInteractionsEditPrivacy } from './video-metadata-interactions-edit-privacy';
import { VideoMetadataInteractionsHasRestrictedPrivacyOptions } from './video-metadata-interactions-has-restricted-privacy-options';
import { VideoMetadataInteractionsHighlights } from './video-metadata-interactions-highlights';
import { VideoMetadataInteractionsInvite } from './video-metadata-interactions-invite';
import { VideoMetadataInteractionsLegalHold } from './video-metadata-interactions-legal-hold';
import { VideoMetadataInteractionsLike } from './video-metadata-interactions-like';
import { VideoMetadataInteractionsRent } from './video-metadata-interactions-rent';
import { VideoMetadataInteractionsReport } from './video-metadata-interactions-report';
import { VideoMetadataInteractionsSetContentRating } from './video-metadata-interactions-set-content-rating';
import { VideoMetadataInteractionsSubscribe } from './video-metadata-interactions-subscribe';
import { VideoMetadataInteractionsSummary } from './video-metadata-interactions-summary';
import { VideoMetadataInteractionsTeamMentions } from './video-metadata-interactions-team-mentions';
import { VideoMetadataInteractionsTranscriptVideoEditor } from './video-metadata-interactions-transcript-video-editor';
import { VideoMetadataInteractionsTrim } from './video-metadata-interactions-trim';
import { VideoMetadataInteractionsValidate } from './video-metadata-interactions-validate';
import { VideoMetadataInteractionsViewPrivacy } from './video-metadata-interactions-view-privacy';
import { VideoMetadataInteractionsViewTeamMembers } from './video-metadata-interactions-view-team-members';
import { VideoMetadataInteractionsWatched } from './video-metadata-interactions-watched';
import { VideoMetadataInteractionsWatchlater } from './video-metadata-interactions-watchlater';

/**
 * A list of resource URIs related to the video.
 * @export
 * @interface VideoMetadataInteractions
 */
export interface VideoMetadataInteractions {
    /**
     * 
     * @type {VideoMetadataInteractionsSummary}
     * @memberof VideoMetadataInteractions
     */
    'summary': VideoMetadataInteractionsSummary | null;
    /**
     * 
     * @type {VideoMetadataInteractionsAlbum}
     * @memberof VideoMetadataInteractions
     */
    'album': VideoMetadataInteractionsAlbum | null;
    /**
     * 
     * @type {VideoMetadataInteractionsAskAi}
     * @memberof VideoMetadataInteractions
     */
    'ask_ai': VideoMetadataInteractionsAskAi | null;
    /**
     * 
     * @type {VideoMetadataInteractionsAskAiViewer}
     * @memberof VideoMetadataInteractions
     */
    'ask_ai_viewer': VideoMetadataInteractionsAskAiViewer | null;
    /**
     * 
     * @type {VideoMetadataInteractionsBuy}
     * @memberof VideoMetadataInteractions
     */
    'buy': VideoMetadataInteractionsBuy | null;
    /**
     * 
     * @type {VideoMetadataInteractionsCanRequestTeamRoleUpgrade}
     * @memberof VideoMetadataInteractions
     */
    'can_request_team_role_upgrade': VideoMetadataInteractionsCanRequestTeamRoleUpgrade | null;
    /**
     * 
     * @type {VideoMetadataInteractionsCanUpdatePrivacyToPublic}
     * @memberof VideoMetadataInteractions
     */
    'can_update_privacy_to_public': VideoMetadataInteractionsCanUpdatePrivacyToPublic | null;
    /**
     * 
     * @type {VideoMetadataInteractionsChannel}
     * @memberof VideoMetadataInteractions
     */
    'channel': VideoMetadataInteractionsChannel | null;
    /**
     * 
     * @type {VideoMetadataInteractionsCreateEditor}
     * @memberof VideoMetadataInteractions
     */
    'create_editor': VideoMetadataInteractionsCreateEditor | null;
    /**
     * 
     * @type {VideoMetadataInteractionsDelete}
     * @memberof VideoMetadataInteractions
     */
    'delete': VideoMetadataInteractionsDelete | null;
    /**
     * 
     * @type {VideoMetadataInteractionsEdit}
     * @memberof VideoMetadataInteractions
     */
    'edit': VideoMetadataInteractionsEdit | null;
    /**
     * 
     * @type {VideoMetadataInteractionsEditPrivacy}
     * @memberof VideoMetadataInteractions
     */
    'edit_privacy': VideoMetadataInteractionsEditPrivacy | null;
    /**
     * 
     * @type {VideoMetadataInteractionsHasRestrictedPrivacyOptions}
     * @memberof VideoMetadataInteractions
     */
    'has_restricted_privacy_options': VideoMetadataInteractionsHasRestrictedPrivacyOptions | null;
    /**
     * 
     * @type {VideoMetadataInteractionsHighlights}
     * @memberof VideoMetadataInteractions
     */
    'highlights': VideoMetadataInteractionsHighlights | null;
    /**
     * 
     * @type {VideoMetadataInteractionsInvite}
     * @memberof VideoMetadataInteractions
     */
    'invite': VideoMetadataInteractionsInvite | null;
    /**
     * 
     * @type {VideoMetadataInteractionsLegalHold}
     * @memberof VideoMetadataInteractions
     */
    'legal_hold': VideoMetadataInteractionsLegalHold;
    /**
     * 
     * @type {VideoMetadataInteractionsLike}
     * @memberof VideoMetadataInteractions
     */
    'like': VideoMetadataInteractionsLike;
    /**
     * 
     * @type {VideoMetadataInteractionsRent}
     * @memberof VideoMetadataInteractions
     */
    'rent': VideoMetadataInteractionsRent | null;
    /**
     * 
     * @type {VideoMetadataInteractionsReport}
     * @memberof VideoMetadataInteractions
     */
    'report': VideoMetadataInteractionsReport;
    /**
     * 
     * @type {VideoMetadataInteractionsSetContentRating}
     * @memberof VideoMetadataInteractions
     */
    'set_content_rating': VideoMetadataInteractionsSetContentRating | null;
    /**
     * 
     * @type {VideoMetadataInteractionsSubscribe}
     * @memberof VideoMetadataInteractions
     */
    'subscribe'?: VideoMetadataInteractionsSubscribe | null;
    /**
     * 
     * @type {VideoMetadataInteractionsTeamMentions}
     * @memberof VideoMetadataInteractions
     */
    'team_mentions': VideoMetadataInteractionsTeamMentions | null;
    /**
     * 
     * @type {VideoMetadataInteractionsTranscriptVideoEditor}
     * @memberof VideoMetadataInteractions
     */
    'transcript_video_editor': VideoMetadataInteractionsTranscriptVideoEditor | null;
    /**
     * 
     * @type {VideoMetadataInteractionsTrim}
     * @memberof VideoMetadataInteractions
     */
    'trim': VideoMetadataInteractionsTrim | null;
    /**
     * 
     * @type {VideoMetadataInteractionsValidate}
     * @memberof VideoMetadataInteractions
     */
    'validate': VideoMetadataInteractionsValidate;
    /**
     * 
     * @type {VideoMetadataInteractionsViewPrivacy}
     * @memberof VideoMetadataInteractions
     */
    'view_privacy': VideoMetadataInteractionsViewPrivacy | null;
    /**
     * 
     * @type {VideoMetadataInteractionsViewTeamMembers}
     * @memberof VideoMetadataInteractions
     */
    'view_team_members': VideoMetadataInteractionsViewTeamMembers | null;
    /**
     * 
     * @type {VideoMetadataInteractionsWatched}
     * @memberof VideoMetadataInteractions
     */
    'watched': VideoMetadataInteractionsWatched;
    /**
     * 
     * @type {VideoMetadataInteractionsWatchlater}
     * @memberof VideoMetadataInteractions
     */
    'watchlater': VideoMetadataInteractionsWatchlater;
}

