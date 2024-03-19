<div align="left">

[![Visit Vimeo](./header.png)](https://developer.vimeo.com)

# [Vimeo](https://developer.vimeo.com)<a id="vimeo"></a>

Build something great. Vimeo's API supports flexible, high-quality video integration with your custom apps.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`vimeo.apiInformationEssentials.endpoints`](#vimeoapiinformationessentialsendpoints)
  * [`vimeo.authenticationExtrasAuthenticate.auth`](#vimeoauthenticationextrasauthenticateauth)
  * [`vimeo.authenticationExtrasConvert.oAuth1ToOAuth2`](#vimeoauthenticationextrasconvertoauth1tooauth2)
  * [`vimeo.authenticationExtrasEssentials.token`](#vimeoauthenticationextrasessentialstoken)
  * [`vimeo.authenticationExtrasEssentials.token_0`](#vimeoauthenticationextrasessentialstoken_0)
  * [`vimeo.authenticationExtrasExchange.oAuthCodeExchange`](#vimeoauthenticationextrasexchangeoauthcodeexchange)
  * [`vimeo.categoriesChannels.listInCategory`](#vimeocategorieschannelslistincategory)
  * [`vimeo.categoriesEssentials.categories`](#vimeocategoriesessentialscategories)
  * [`vimeo.categoriesEssentials.category`](#vimeocategoriesessentialscategory)
  * [`vimeo.categoriesGroups.getAllGroups`](#vimeocategoriesgroupsgetallgroups)
  * [`vimeo.categoriesUsers.checkFollowedCategory`](#vimeocategoriesuserscheckfollowedcategory)
  * [`vimeo.categoriesUsers.checkFollowedCategory_0`](#vimeocategoriesuserscheckfollowedcategory_0)
  * [`vimeo.categoriesUsers.followCategory`](#vimeocategoriesusersfollowcategory)
  * [`vimeo.categoriesUsers.followSpecificCategory`](#vimeocategoriesusersfollowspecificcategory)
  * [`vimeo.categoriesUsers.listFollowedCategories`](#vimeocategoriesuserslistfollowedcategories)
  * [`vimeo.categoriesUsers.listFollowedCategories_0`](#vimeocategoriesuserslistfollowedcategories_0)
  * [`vimeo.categoriesUsers.stopFollowingCategory`](#vimeocategoriesusersstopfollowingcategory)
  * [`vimeo.categoriesUsers.stopFollowingCategory_0`](#vimeocategoriesusersstopfollowingcategory_0)
  * [`vimeo.categoriesVideos.getAllVideoCategories`](#vimeocategoriesvideosgetallvideocategories)
  * [`vimeo.categoriesVideos.getVideoInCategory`](#vimeocategoriesvideosgetvideoincategory)
  * [`vimeo.categoriesVideos.listVideosInCategory`](#vimeocategoriesvideoslistvideosincategory)
  * [`vimeo.categoriesVideos.setVideoCategories`](#vimeocategoriesvideossetvideocategories)
  * [`vimeo.channelsCategories.addChannelToMultipleCategories`](#vimeochannelscategoriesaddchanneltomultiplecategories)
  * [`vimeo.channelsCategories.channel`](#vimeochannelscategorieschannel)
  * [`vimeo.channelsCategories.getBelongingCategories`](#vimeochannelscategoriesgetbelongingcategories)
  * [`vimeo.channelsCategories.removeChannelFromCategory`](#vimeochannelscategoriesremovechannelfromcategory)
  * [`vimeo.channelsEssentials.channel`](#vimeochannelsessentialschannel)
  * [`vimeo.channelsEssentials.channel_0`](#vimeochannelsessentialschannel_0)
  * [`vimeo.channelsEssentials.channel_1`](#vimeochannelsessentialschannel_1)
  * [`vimeo.channelsEssentials.channel_2`](#vimeochannelsessentialschannel_2)
  * [`vimeo.channelsEssentials.channels`](#vimeochannelsessentialschannels)
  * [`vimeo.channelsEssentials.getUserSubscriptions`](#vimeochannelsessentialsgetusersubscriptions)
  * [`vimeo.channelsEssentials.getUserSubscriptions_0`](#vimeochannelsessentialsgetusersubscriptions_0)
  * [`vimeo.channelsModerators.addModeratorToChannel`](#vimeochannelsmoderatorsaddmoderatortochannel)
  * [`vimeo.channelsModerators.bulkAddModerators`](#vimeochannelsmoderatorsbulkaddmoderators)
  * [`vimeo.channelsModerators.getSpecificModerator`](#vimeochannelsmoderatorsgetspecificmoderator)
  * [`vimeo.channelsModerators.listByChannel`](#vimeochannelsmoderatorslistbychannel)
  * [`vimeo.channelsModerators.removeModerator`](#vimeochannelsmoderatorsremovemoderator)
  * [`vimeo.channelsModerators.removeMultipleFromChannel`](#vimeochannelsmoderatorsremovemultiplefromchannel)
  * [`vimeo.channelsModerators.replaceModerators`](#vimeochannelsmoderatorsreplacemoderators)
  * [`vimeo.channelsPrivateChannelMembers.getAccessibleUsers`](#vimeochannelsprivatechannelmembersgetaccessibleusers)
  * [`vimeo.channelsPrivateChannelMembers.permitUserAccess`](#vimeochannelsprivatechannelmemberspermituseraccess)
  * [`vimeo.channelsPrivateChannelMembers.permitUserAccess_0`](#vimeochannelsprivatechannelmemberspermituseraccess_0)
  * [`vimeo.channelsPrivateChannelMembers.restrictUserAccess`](#vimeochannelsprivatechannelmembersrestrictuseraccess)
  * [`vimeo.channelsSubscriptionsAndSubscribers.checkIfUserFollowsChannel`](#vimeochannelssubscriptionsandsubscriberscheckifuserfollowschannel)
  * [`vimeo.channelsSubscriptionsAndSubscribers.checkUserFollowsChannel`](#vimeochannelssubscriptionsandsubscriberscheckuserfollowschannel)
  * [`vimeo.channelsSubscriptionsAndSubscribers.listChannelFollowers`](#vimeochannelssubscriptionsandsubscriberslistchannelfollowers)
  * [`vimeo.channelsSubscriptionsAndSubscribers.subscribeToChannel`](#vimeochannelssubscriptionsandsubscriberssubscribetochannel)
  * [`vimeo.channelsSubscriptionsAndSubscribers.subscribeUserToChannel`](#vimeochannelssubscriptionsandsubscriberssubscribeusertochannel)
  * [`vimeo.channelsSubscriptionsAndSubscribers.unsubscribeUserFromChannel`](#vimeochannelssubscriptionsandsubscribersunsubscribeuserfromchannel)
  * [`vimeo.channelsSubscriptionsAndSubscribers.unsubscribeUserFromChannel_0`](#vimeochannelssubscriptionsandsubscribersunsubscribeuserfromchannel_0)
  * [`vimeo.channelsTags.addMultipleTagsToChannel`](#vimeochannelstagsaddmultipletagstochannel)
  * [`vimeo.channelsTags.addTagToChannel`](#vimeochannelstagsaddtagtochannel)
  * [`vimeo.channelsTags.checkIfTagAddedToChannel`](#vimeochannelstagscheckiftagaddedtochannel)
  * [`vimeo.channelsTags.getAllChannelTags`](#vimeochannelstagsgetallchanneltags)
  * [`vimeo.channelsTags.removeTagFromChannel`](#vimeochannelstagsremovetagfromchannel)
  * [`vimeo.channelsVideos.addMultipleToChannel`](#vimeochannelsvideosaddmultipletochannel)
  * [`vimeo.channelsVideos.addVideoToChannel`](#vimeochannelsvideosaddvideotochannel)
  * [`vimeo.channelsVideos.getAccessibleChannels`](#vimeochannelsvideosgetaccessiblechannels)
  * [`vimeo.channelsVideos.getSpecificVideoInChannel`](#vimeochannelsvideosgetspecificvideoinchannel)
  * [`vimeo.channelsVideos.listInChannel`](#vimeochannelsvideoslistinchannel)
  * [`vimeo.channelsVideos.removeMultipleFromChannel`](#vimeochannelsvideosremovemultiplefromchannel)
  * [`vimeo.channelsVideos.removeSpecificVideo`](#vimeochannelsvideosremovespecificvideo)
  * [`vimeo.embedPresetsCustomLogos.addUserLogo`](#vimeoembedpresetscustomlogosadduserlogo)
  * [`vimeo.embedPresetsCustomLogos.addUserLogo_0`](#vimeoembedpresetscustomlogosadduserlogo_0)
  * [`vimeo.embedPresetsCustomLogos.deleteUserLogo`](#vimeoembedpresetscustomlogosdeleteuserlogo)
  * [`vimeo.embedPresetsCustomLogos.deleteUserLogo_0`](#vimeoembedpresetscustomlogosdeleteuserlogo_0)
  * [`vimeo.embedPresetsCustomLogos.getSpecificUserLogo`](#vimeoembedpresetscustomlogosgetspecificuserlogo)
  * [`vimeo.embedPresetsCustomLogos.getSpecificUserLogo_0`](#vimeoembedpresetscustomlogosgetspecificuserlogo_0)
  * [`vimeo.embedPresetsCustomLogos.list`](#vimeoembedpresetscustomlogoslist)
  * [`vimeo.embedPresetsCustomLogos.listUserLogos`](#vimeoembedpresetscustomlogoslistuserlogos)
  * [`vimeo.embedPresetsEssentials.createEmbedPreset`](#vimeoembedpresetsessentialscreateembedpreset)
  * [`vimeo.embedPresetsEssentials.createPreset`](#vimeoembedpresetsessentialscreatepreset)
  * [`vimeo.embedPresetsEssentials.editPreset`](#vimeoembedpresetsessentialseditpreset)
  * [`vimeo.embedPresetsEssentials.editPreset_0`](#vimeoembedpresetsessentialseditpreset_0)
  * [`vimeo.embedPresetsEssentials.getAllUserCreatedEmbedPresets`](#vimeoembedpresetsessentialsgetallusercreatedembedpresets)
  * [`vimeo.embedPresetsEssentials.getSpecificEmbedPreset`](#vimeoembedpresetsessentialsgetspecificembedpreset)
  * [`vimeo.embedPresetsEssentials.getSpecificPreset`](#vimeoembedpresetsessentialsgetspecificpreset)
  * [`vimeo.embedPresetsEssentials.getUserEmbedPresets`](#vimeoembedpresetsessentialsgetuserembedpresets)
  * [`vimeo.embedPresetsTimelineEvents.addThumbnailToVideo`](#vimeoembedpresetstimelineeventsaddthumbnailtovideo)
  * [`vimeo.embedPresetsTimelineEvents.getSingleThumbnail`](#vimeoembedpresetstimelineeventsgetsinglethumbnail)
  * [`vimeo.embedPresetsVideos.addPresetToVideo`](#vimeoembedpresetsvideosaddpresettovideo)
  * [`vimeo.embedPresetsVideos.checkIfPresetAddedToVideo`](#vimeoembedpresetsvideoscheckifpresetaddedtovideo)
  * [`vimeo.embedPresetsVideos.getPresetVideos`](#vimeoembedpresetsvideosgetpresetvideos)
  * [`vimeo.embedPresetsVideos.getSpecificPresetVideos`](#vimeoembedpresetsvideosgetspecificpresetvideos)
  * [`vimeo.embedPresetsVideos.removePresetFromVideo`](#vimeoembedpresetsvideosremovepresetfromvideo)
  * [`vimeo.foldersEssentials.createFolder`](#vimeofoldersessentialscreatefolder)
  * [`vimeo.foldersEssentials.deleteFolder`](#vimeofoldersessentialsdeletefolder)
  * [`vimeo.foldersEssentials.editFolder`](#vimeofoldersessentialseditfolder)
  * [`vimeo.foldersEssentials.getAllUserFolders`](#vimeofoldersessentialsgetalluserfolders)
  * [`vimeo.foldersEssentials.getSpecificFolder`](#vimeofoldersessentialsgetspecificfolder)
  * [`vimeo.foldersEssentials.getUserPrivateToMeFolder`](#vimeofoldersessentialsgetuserprivatetomefolder)
  * [`vimeo.foldersEssentials.project`](#vimeofoldersessentialsproject)
  * [`vimeo.foldersEssentials.project_0`](#vimeofoldersessentialsproject_0)
  * [`vimeo.foldersEssentials.project_1`](#vimeofoldersessentialsproject_1)
  * [`vimeo.foldersEssentials.project_2`](#vimeofoldersessentialsproject_2)
  * [`vimeo.foldersEssentials.projects`](#vimeofoldersessentialsprojects)
  * [`vimeo.foldersItems.getFolderContents`](#vimeofoldersitemsgetfoldercontents)
  * [`vimeo.foldersItems.getFolderItems`](#vimeofoldersitemsgetfolderitems)
  * [`vimeo.foldersItems.removeFromFolder`](#vimeofoldersitemsremovefromfolder)
  * [`vimeo.foldersVideos.addMultipleToFolder`](#vimeofoldersvideosaddmultipletofolder)
  * [`vimeo.foldersVideos.addSingleFolderVideo`](#vimeofoldersvideosaddsinglefoldervideo)
  * [`vimeo.foldersVideos.addToFolder`](#vimeofoldersvideosaddtofolder)
  * [`vimeo.foldersVideos.addToFolderVideos`](#vimeofoldersvideosaddtofoldervideos)
  * [`vimeo.foldersVideos.getAllFolderVideos`](#vimeofoldersvideosgetallfoldervideos)
  * [`vimeo.foldersVideos.getVideosInFolder`](#vimeofoldersvideosgetvideosinfolder)
  * [`vimeo.foldersVideos.removeFromFolderVideo`](#vimeofoldersvideosremovefromfoldervideo)
  * [`vimeo.foldersVideos.removeMultipleFromFolder`](#vimeofoldersvideosremovemultiplefromfolder)
  * [`vimeo.foldersVideos.removeMultipleVideosFromFolder`](#vimeofoldersvideosremovemultiplevideosfromfolder)
  * [`vimeo.foldersVideos.removeSingleVideo`](#vimeofoldersvideosremovesinglevideo)
  * [`vimeo.groupsEssentials.group`](#vimeogroupsessentialsgroup)
  * [`vimeo.groupsEssentials.group_0`](#vimeogroupsessentialsgroup_0)
  * [`vimeo.groupsEssentials.group_1`](#vimeogroupsessentialsgroup_1)
  * [`vimeo.groupsEssentials.groups`](#vimeogroupsessentialsgroups)
  * [`vimeo.groupsSubscriptions.addUserToGroup`](#vimeogroupssubscriptionsaddusertogroup)
  * [`vimeo.groupsSubscriptions.group`](#vimeogroupssubscriptionsgroup)
  * [`vimeo.groupsSubscriptions.group_0`](#vimeogroupssubscriptionsgroup_0)
  * [`vimeo.groupsSubscriptions.removeUserFromGroup`](#vimeogroupssubscriptionsremoveuserfromgroup)
  * [`vimeo.groupsUsers.checkBelongGroup`](#vimeogroupsuserscheckbelonggroup)
  * [`vimeo.groupsUsers.checkUserJoinedGroup`](#vimeogroupsuserscheckuserjoinedgroup)
  * [`vimeo.groupsUsers.getGroupUsers`](#vimeogroupsusersgetgroupusers)
  * [`vimeo.groupsUsers.getUserGroups`](#vimeogroupsusersgetusergroups)
  * [`vimeo.groupsUsers.getUserGroupsList`](#vimeogroupsusersgetusergroupslist)
  * [`vimeo.groupsVideos.addToGroup`](#vimeogroupsvideosaddtogroup)
  * [`vimeo.groupsVideos.getAllGroupVideos`](#vimeogroupsvideosgetallgroupvideos)
  * [`vimeo.groupsVideos.getSingleVideo`](#vimeogroupsvideosgetsinglevideo)
  * [`vimeo.groupsVideos.removeFromGroup`](#vimeogroupsvideosremovefromgroup)
  * [`vimeo.likesEssentials.checkUserLikedVideo`](#vimeolikesessentialscheckuserlikedvideo)
  * [`vimeo.likesEssentials.checkVideoLikedByUser`](#vimeolikesessentialscheckvideolikedbyuser)
  * [`vimeo.likesEssentials.getAllUserLikes`](#vimeolikesessentialsgetalluserlikes)
  * [`vimeo.likesEssentials.getUserLikedVideos`](#vimeolikesessentialsgetuserlikedvideos)
  * [`vimeo.likesEssentials.getUserLikes`](#vimeolikesessentialsgetuserlikes)
  * [`vimeo.likesEssentials.getUsersWhoLikedVideo`](#vimeolikesessentialsgetuserswholikedvideo)
  * [`vimeo.likesEssentials.likeVideo`](#vimeolikesessentialslikevideo)
  * [`vimeo.likesEssentials.likes`](#vimeolikesessentialslikes)
  * [`vimeo.likesEssentials.unlikeVideo`](#vimeolikesessentialsunlikevideo)
  * [`vimeo.likesEssentials.video`](#vimeolikesessentialsvideo)
  * [`vimeo.likesEssentials.video_0`](#vimeolikesessentialsvideo_0)
  * [`vimeo.liveEmbedPrivacy.embedEventOnDomains`](#vimeoliveembedprivacyembedeventondomains)
  * [`vimeo.liveEmbedPrivacy.embedEventOnDomains_0`](#vimeoliveembedprivacyembedeventondomains_0)
  * [`vimeo.liveEmbedPrivacy.embedEventOnDomains_1`](#vimeoliveembedprivacyembedeventondomains_1)
  * [`vimeo.liveEmbedPrivacy.getWhitelistDomains`](#vimeoliveembedprivacygetwhitelistdomains)
  * [`vimeo.liveEmbedPrivacy.getWhitelistDomains_0`](#vimeoliveembedprivacygetwhitelistdomains_0)
  * [`vimeo.liveEmbedPrivacy.getWhitelistDomains_1`](#vimeoliveembedprivacygetwhitelistdomains_1)
  * [`vimeo.liveEssentials.createEvent`](#vimeoliveessentialscreateevent)
  * [`vimeo.liveEssentials.createEventForUser`](#vimeoliveessentialscreateeventforuser)
  * [`vimeo.liveEssentials.createLiveEvent`](#vimeoliveessentialscreateliveevent)
  * [`vimeo.liveEssentials.deleteMultipleEvents`](#vimeoliveessentialsdeletemultipleevents)
  * [`vimeo.liveEssentials.deleteMultipleEvents_0`](#vimeoliveessentialsdeletemultipleevents_0)
  * [`vimeo.liveEssentials.deleteMultipleEvents_1`](#vimeoliveessentialsdeletemultipleevents_1)
  * [`vimeo.liveEssentials.deleteSingleEvent`](#vimeoliveessentialsdeletesingleevent)
  * [`vimeo.liveEssentials.deleteSpecificEvent`](#vimeoliveessentialsdeletespecificevent)
  * [`vimeo.liveEssentials.deleteSpecificLiveEvent`](#vimeoliveessentialsdeletespecificliveevent)
  * [`vimeo.liveEssentials.getAllUserLiveEvents`](#vimeoliveessentialsgetalluserliveevents)
  * [`vimeo.liveEssentials.getEventById`](#vimeoliveessentialsgeteventbyid)
  * [`vimeo.liveEssentials.getEventById_0`](#vimeoliveessentialsgeteventbyid_0)
  * [`vimeo.liveEssentials.getSpecificLiveEvent`](#vimeoliveessentialsgetspecificliveevent)
  * [`vimeo.liveEssentials.getUserLiveEvents`](#vimeoliveessentialsgetuserliveevents)
  * [`vimeo.liveEssentials.getUserLiveEvents_0`](#vimeoliveessentialsgetuserliveevents_0)
  * [`vimeo.liveEssentials.updateEventBelongingToAuthenticatedUser`](#vimeoliveessentialsupdateeventbelongingtoauthenticateduser)
  * [`vimeo.liveEssentials.updateEventBelongingToAuthenticatedUser_0`](#vimeoliveessentialsupdateeventbelongingtoauthenticateduser_0)
  * [`vimeo.liveEssentials.updateEventBelongingToAuthenticatedUser_1`](#vimeoliveessentialsupdateeventbelongingtoauthenticateduser_1)
  * [`vimeo.liveEventM3u8Playback.getUrl`](#vimeoliveeventm3u8playbackgeturl)
  * [`vimeo.liveEventM3u8Playback.getUrlForEventStream`](#vimeoliveeventm3u8playbackgeturlforeventstream)
  * [`vimeo.liveEventActivation.createRtmpLinks`](#vimeoliveeventactivationcreatertmplinks)
  * [`vimeo.liveEventActivation.createRtmpLinks_0`](#vimeoliveeventactivationcreatertmplinks_0)
  * [`vimeo.liveEventActivation.createRtmpLinks_1`](#vimeoliveeventactivationcreatertmplinks_1)
  * [`vimeo.liveEventAutomatedClosedCaptions.editPreference`](#vimeoliveeventautomatedclosedcaptionseditpreference)
  * [`vimeo.liveEventAutomatedClosedCaptions.editPreferenceForEvent`](#vimeoliveeventautomatedclosedcaptionseditpreferenceforevent)
  * [`vimeo.liveEventAutomatedClosedCaptions.editPreferenceForEvent_0`](#vimeoliveeventautomatedclosedcaptionseditpreferenceforevent_0)
  * [`vimeo.liveEventDestinations.createDestination`](#vimeoliveeventdestinationscreatedestination)
  * [`vimeo.liveEventDestinations.createEventDestination`](#vimeoliveeventdestinationscreateeventdestination)
  * [`vimeo.liveEventDestinations.createOneTimeLiveEventDestination`](#vimeoliveeventdestinationscreateonetimeliveeventdestination)
  * [`vimeo.liveEventDestinations.createOneTimeLiveEventDestination_0`](#vimeoliveeventdestinationscreateonetimeliveeventdestination_0)
  * [`vimeo.liveEventDestinations.createOttDestination`](#vimeoliveeventdestinationscreateottdestination)
  * [`vimeo.liveEventDestinations.deleteDestination`](#vimeoliveeventdestinationsdeletedestination)
  * [`vimeo.liveEventDestinations.deleteOttDestination`](#vimeoliveeventdestinationsdeleteottdestination)
  * [`vimeo.liveEventDestinations.getAllAvailableDestinations`](#vimeoliveeventdestinationsgetallavailabledestinations)
  * [`vimeo.liveEventDestinations.getAllAvailableDestinations_0`](#vimeoliveeventdestinationsgetallavailabledestinations_0)
  * [`vimeo.liveEventDestinations.getAllAvailableDestinations_1`](#vimeoliveeventdestinationsgetallavailabledestinations_1)
  * [`vimeo.liveEventDestinations.getAllDestinations`](#vimeoliveeventdestinationsgetalldestinations)
  * [`vimeo.liveEventDestinations.getAllOttDestinations`](#vimeoliveeventdestinationsgetallottdestinations)
  * [`vimeo.liveEventDestinations.getDestination`](#vimeoliveeventdestinationsgetdestination)
  * [`vimeo.liveEventDestinations.listAllAvailableDestinations`](#vimeoliveeventdestinationslistallavailabledestinations)
  * [`vimeo.liveEventDestinations.listAvailableDestinations`](#vimeoliveeventdestinationslistavailabledestinations)
  * [`vimeo.liveEventDestinations.updateDestination`](#vimeoliveeventdestinationsupdatedestination)
  * [`vimeo.liveEventEnd.eventTermination`](#vimeoliveeventendeventtermination)
  * [`vimeo.liveEventEnd.eventTerminationAlt1`](#vimeoliveeventendeventterminationalt1)
  * [`vimeo.liveEventEnd.eventTerminationAlt2`](#vimeoliveeventendeventterminationalt2)
  * [`vimeo.liveEventLowLatency.toggleOption`](#vimeoliveeventlowlatencytoggleoption)
  * [`vimeo.liveEventLowLatency.toggleOption_0`](#vimeoliveeventlowlatencytoggleoption_0)
  * [`vimeo.liveEventLowLatency.toggleOption_1`](#vimeoliveeventlowlatencytoggleoption_1)
  * [`vimeo.liveEventSessions.getIngestStatus`](#vimeoliveeventsessionsgetingeststatus)
  * [`vimeo.liveEventThumbnails.addThumbnail`](#vimeoliveeventthumbnailsaddthumbnail)
  * [`vimeo.liveEventThumbnails.createThumbnailForEvent`](#vimeoliveeventthumbnailscreatethumbnailforevent)
  * [`vimeo.liveEventThumbnails.createThumbnailForEvent_0`](#vimeoliveeventthumbnailscreatethumbnailforevent_0)
  * [`vimeo.liveEventThumbnails.deleteForEvent`](#vimeoliveeventthumbnailsdeleteforevent)
  * [`vimeo.liveEventThumbnails.deleteThumbnailForEvent`](#vimeoliveeventthumbnailsdeletethumbnailforevent)
  * [`vimeo.liveEventThumbnails.deleteThumbnailForEvent_0`](#vimeoliveeventthumbnailsdeletethumbnailforevent_0)
  * [`vimeo.liveEventThumbnails.editEventThumbnail`](#vimeoliveeventthumbnailsediteventthumbnail)
  * [`vimeo.liveEventThumbnails.editLiveEventThumbnail`](#vimeoliveeventthumbnailseditliveeventthumbnail)
  * [`vimeo.liveEventThumbnails.getAll`](#vimeoliveeventthumbnailsgetall)
  * [`vimeo.liveEventThumbnails.getAllThumbnails`](#vimeoliveeventthumbnailsgetallthumbnails)
  * [`vimeo.liveEventThumbnails.getAllThumbs`](#vimeoliveeventthumbnailsgetallthumbs)
  * [`vimeo.liveEventThumbnails.getSpecificThumbnail`](#vimeoliveeventthumbnailsgetspecificthumbnail)
  * [`vimeo.liveEventThumbnails.getSpecificThumbnail_0`](#vimeoliveeventthumbnailsgetspecificthumbnail_0)
  * [`vimeo.liveEventThumbnails.getSpecificThumbnail_1`](#vimeoliveeventthumbnailsgetspecificthumbnail_1)
  * [`vimeo.liveEventThumbnails.updateEventThumbnail`](#vimeoliveeventthumbnailsupdateeventthumbnail)
  * [`vimeo.liveEventVideos.addMultiple`](#vimeoliveeventvideosaddmultiple)
  * [`vimeo.liveEventVideos.addMultipleVideos`](#vimeoliveeventvideosaddmultiplevideos)
  * [`vimeo.liveEventVideos.getAll`](#vimeoliveeventvideosgetall)
  * [`vimeo.liveEventVideos.getSpecificVideo`](#vimeoliveeventvideosgetspecificvideo)
  * [`vimeo.liveEventVideos.listAllVideosInEvent`](#vimeoliveeventvideoslistallvideosinevent)
  * [`vimeo.liveEventVideos.listLiveEventVideos`](#vimeoliveeventvideoslistliveeventvideos)
  * [`vimeo.liveEventVideos.removeMultiple`](#vimeoliveeventvideosremovemultiple)
  * [`vimeo.liveEventVideos.removeMultipleVideos`](#vimeoliveeventvideosremovemultiplevideos)
  * [`vimeo.liveEventVideos.removeMultiple_0`](#vimeoliveeventvideosremovemultiple_0)
  * [`vimeo.liveEventVideos.specificEventVideo`](#vimeoliveeventvideosspecificeventvideo)
  * [`vimeo.liveEventVideos.specificVideo`](#vimeoliveeventvideosspecificvideo)
  * [`vimeo.liveEventVideos.uploadMultiple`](#vimeoliveeventvideosuploadmultiple)
  * [`vimeo.onDemandBackgrounds.addBackgroundToPage`](#vimeoondemandbackgroundsaddbackgroundtopage)
  * [`vimeo.onDemandBackgrounds.deleteBackgroundFromPage`](#vimeoondemandbackgroundsdeletebackgroundfrompage)
  * [`vimeo.onDemandBackgrounds.editBackgroundOnPage`](#vimeoondemandbackgroundseditbackgroundonpage)
  * [`vimeo.onDemandBackgrounds.getAllBackgroundsOnPage`](#vimeoondemandbackgroundsgetallbackgroundsonpage)
  * [`vimeo.onDemandBackgrounds.getSpecificBackground`](#vimeoondemandbackgroundsgetspecificbackground)
  * [`vimeo.onDemandEssentials.createPage`](#vimeoondemandessentialscreatepage)
  * [`vimeo.onDemandEssentials.deleteOnDemandPage`](#vimeoondemandessentialsdeleteondemandpage)
  * [`vimeo.onDemandEssentials.getAllUserPages`](#vimeoondemandessentialsgetalluserpages)
  * [`vimeo.onDemandEssentials.getAllUserPages_0`](#vimeoondemandessentialsgetalluserpages_0)
  * [`vimeo.onDemandEssentials.vod`](#vimeoondemandessentialsvod)
  * [`vimeo.onDemandEssentials.vod_0`](#vimeoondemandessentialsvod_0)
  * [`vimeo.onDemandEssentials.vod_1`](#vimeoondemandessentialsvod_1)
  * [`vimeo.onDemandGenres.addGenreToPage`](#vimeoondemandgenresaddgenretopage)
  * [`vimeo.onDemandGenres.checkGenreAssociation`](#vimeoondemandgenrescheckgenreassociation)
  * [`vimeo.onDemandGenres.getAllGenres`](#vimeoondemandgenresgetallgenres)
  * [`vimeo.onDemandGenres.getAllPagesInGenre`](#vimeoondemandgenresgetallpagesingenre)
  * [`vimeo.onDemandGenres.getGenres`](#vimeoondemandgenresgetgenres)
  * [`vimeo.onDemandGenres.getSpecificPageInGenre`](#vimeoondemandgenresgetspecificpageingenre)
  * [`vimeo.onDemandGenres.removeGenreFromPage`](#vimeoondemandgenresremovegenrefrompage)
  * [`vimeo.onDemandGenres.specificGenreGet`](#vimeoondemandgenresspecificgenreget)
  * [`vimeo.onDemandPosters.addPosterToPage`](#vimeoondemandpostersaddpostertopage)
  * [`vimeo.onDemandPosters.getOnDemandPagePosters`](#vimeoondemandpostersgetondemandpageposters)
  * [`vimeo.onDemandPosters.getSpecificPoster`](#vimeoondemandpostersgetspecificposter)
  * [`vimeo.onDemandPosters.updatePoster`](#vimeoondemandpostersupdateposter)
  * [`vimeo.onDemandPromotions.addPromotionToPage`](#vimeoondemandpromotionsaddpromotiontopage)
  * [`vimeo.onDemandPromotions.deletePromotionOnPage`](#vimeoondemandpromotionsdeletepromotiononpage)
  * [`vimeo.onDemandPromotions.getAllPagePromotions`](#vimeoondemandpromotionsgetallpagepromotions)
  * [`vimeo.onDemandPromotions.getAllPromotionCodes`](#vimeoondemandpromotionsgetallpromotioncodes)
  * [`vimeo.onDemandPromotions.specificPromotionGet`](#vimeoondemandpromotionsspecificpromotionget)
  * [`vimeo.onDemandPurchasesAndRentals.checkUserPurchasesAndRentals`](#vimeoondemandpurchasesandrentalscheckuserpurchasesandrentals)
  * [`vimeo.onDemandPurchasesAndRentals.getAllUserPurchasesAndRentals`](#vimeoondemandpurchasesandrentalsgetalluserpurchasesandrentals)
  * [`vimeo.onDemandPurchasesAndRentals.listUserPurchasesAndRentals`](#vimeoondemandpurchasesandrentalslistuserpurchasesandrentals)
  * [`vimeo.onDemandRegions.addMultiple`](#vimeoondemandregionsaddmultiple)
  * [`vimeo.onDemandRegions.addRegionToPage`](#vimeoondemandregionsaddregiontopage)
  * [`vimeo.onDemandRegions.getAll`](#vimeoondemandregionsgetall)
  * [`vimeo.onDemandRegions.getSpecificRegion`](#vimeoondemandregionsgetspecificregion)
  * [`vimeo.onDemandRegions.region`](#vimeoondemandregionsregion)
  * [`vimeo.onDemandRegions.regions`](#vimeoondemandregionsregions)
  * [`vimeo.onDemandRegions.removeMultiple`](#vimeoondemandregionsremovemultiple)
  * [`vimeo.onDemandRegions.removeSpecificRegion`](#vimeoondemandregionsremovespecificregion)
  * [`vimeo.onDemandSeasons.getAllVideosInSeason`](#vimeoondemandseasonsgetallvideosinseason)
  * [`vimeo.onDemandSeasons.listAll`](#vimeoondemandseasonslistall)
  * [`vimeo.onDemandSeasons.specificGet`](#vimeoondemandseasonsspecificget)
  * [`vimeo.onDemandVideos.addVideoToPage`](#vimeoondemandvideosaddvideotopage)
  * [`vimeo.onDemandVideos.getAllVideos`](#vimeoondemandvideosgetallvideos)
  * [`vimeo.onDemandVideos.removeFromPage`](#vimeoondemandvideosremovefrompage)
  * [`vimeo.onDemandVideos.specificVideoGet`](#vimeoondemandvideosspecificvideoget)
  * [`vimeo.paymentsEssentials.getPaymentMethodInfo`](#vimeopaymentsessentialsgetpaymentmethodinfo)
  * [`vimeo.paymentsEssentials.getSubscriptionInfo`](#vimeopaymentsessentialsgetsubscriptioninfo)
  * [`vimeo.paymentsEssentials.listPaymentMethods`](#vimeopaymentsessentialslistpaymentmethods)
  * [`vimeo.portfoliosEssentials.getAllUserPortfolios`](#vimeoportfoliosessentialsgetalluserportfolios)
  * [`vimeo.portfoliosEssentials.getUserPortfolio`](#vimeoportfoliosessentialsgetuserportfolio)
  * [`vimeo.portfoliosEssentials.portfolio`](#vimeoportfoliosessentialsportfolio)
  * [`vimeo.portfoliosEssentials.portfolios`](#vimeoportfoliosessentialsportfolios)
  * [`vimeo.portfoliosVideos.addVideoToPortfolio`](#vimeoportfoliosvideosaddvideotoportfolio)
  * [`vimeo.portfoliosVideos.getAllPortfolioVideos`](#vimeoportfoliosvideosgetallportfoliovideos)
  * [`vimeo.portfoliosVideos.getAllPortfolioVideos_0`](#vimeoportfoliosvideosgetallportfoliovideos_0)
  * [`vimeo.portfoliosVideos.getSpecificVideo`](#vimeoportfoliosvideosgetspecificvideo)
  * [`vimeo.portfoliosVideos.getSpecificVideo_0`](#vimeoportfoliosvideosgetspecificvideo_0)
  * [`vimeo.portfoliosVideos.putVideoToPortfolio`](#vimeoportfoliosvideosputvideotoportfolio)
  * [`vimeo.portfoliosVideos.removeFromPortfolio`](#vimeoportfoliosvideosremovefromportfolio)
  * [`vimeo.portfoliosVideos.removeFromPortfolioVideo`](#vimeoportfoliosvideosremovefromportfoliovideo)
  * [`vimeo.showcasesCustomShowcaseLogos.addCustomLogo`](#vimeoshowcasescustomshowcaselogosaddcustomlogo)
  * [`vimeo.showcasesCustomShowcaseLogos.deleteCustomLogo`](#vimeoshowcasescustomshowcaselogosdeletecustomlogo)
  * [`vimeo.showcasesCustomShowcaseLogos.getSpecificLogo`](#vimeoshowcasescustomshowcaselogosgetspecificlogo)
  * [`vimeo.showcasesCustomShowcaseLogos.listAllCustomLogos`](#vimeoshowcasescustomshowcaselogoslistallcustomlogos)
  * [`vimeo.showcasesCustomShowcaseLogos.replaceLogo`](#vimeoshowcasescustomshowcaselogosreplacelogo)
  * [`vimeo.showcasesCustomShowcaseThumbnails.addCustomThumbnail`](#vimeoshowcasescustomshowcasethumbnailsaddcustomthumbnail)
  * [`vimeo.showcasesCustomShowcaseThumbnails.deleteCustomThumbnail`](#vimeoshowcasescustomshowcasethumbnailsdeletecustomthumbnail)
  * [`vimeo.showcasesCustomShowcaseThumbnails.getSpecificThumbnail`](#vimeoshowcasescustomshowcasethumbnailsgetspecificthumbnail)
  * [`vimeo.showcasesCustomShowcaseThumbnails.list`](#vimeoshowcasescustomshowcasethumbnailslist)
  * [`vimeo.showcasesCustomShowcaseThumbnails.replaceCustomThumbnail`](#vimeoshowcasescustomshowcasethumbnailsreplacecustomthumbnail)
  * [`vimeo.showcasesEssentials.createUserShowcase`](#vimeoshowcasesessentialscreateusershowcase)
  * [`vimeo.showcasesEssentials.deleteShowcase`](#vimeoshowcasesessentialsdeleteshowcase)
  * [`vimeo.showcasesEssentials.editShowcase`](#vimeoshowcasesessentialseditshowcase)
  * [`vimeo.showcasesEssentials.getAllUserShowcases`](#vimeoshowcasesessentialsgetallusershowcases)
  * [`vimeo.showcasesEssentials.getSpecificShowcase`](#vimeoshowcasesessentialsgetspecificshowcase)
  * [`vimeo.showcasesEssentials.showcase`](#vimeoshowcasesessentialsshowcase)
  * [`vimeo.showcasesEssentials.showcase_0`](#vimeoshowcasesessentialsshowcase_0)
  * [`vimeo.showcasesEssentials.showcase_1`](#vimeoshowcasesessentialsshowcase_1)
  * [`vimeo.showcasesEssentials.showcase_2`](#vimeoshowcasesessentialsshowcase_2)
  * [`vimeo.showcasesEssentials.showcases`](#vimeoshowcasesessentialsshowcases)
  * [`vimeo.showcasesEssentials.showcases_0`](#vimeoshowcasesessentialsshowcases_0)
  * [`vimeo.showcasesShowcaseVideos.addToShowcase`](#vimeoshowcasesshowcasevideosaddtoshowcase)
  * [`vimeo.showcasesShowcaseVideos.addToShowcase_0`](#vimeoshowcasesshowcasevideosaddtoshowcase_0)
  * [`vimeo.showcasesShowcaseVideos.createShowcaseThumbnail`](#vimeoshowcasesshowcasevideoscreateshowcasethumbnail)
  * [`vimeo.showcasesShowcaseVideos.createShowcaseThumbnail_0`](#vimeoshowcasesshowcasevideoscreateshowcasethumbnail_0)
  * [`vimeo.showcasesShowcaseVideos.getShowcaseVideos`](#vimeoshowcasesshowcasevideosgetshowcasevideos)
  * [`vimeo.showcasesShowcaseVideos.getSpecificVideoInShowcase`](#vimeoshowcasesshowcasevideosgetspecificvideoinshowcase)
  * [`vimeo.showcasesShowcaseVideos.getSpecificVideoInShowcase_0`](#vimeoshowcasesshowcasevideosgetspecificvideoinshowcase_0)
  * [`vimeo.showcasesShowcaseVideos.listAvailableShowcases`](#vimeoshowcasesshowcasevideoslistavailableshowcases)
  * [`vimeo.showcasesShowcaseVideos.listInShowcase`](#vimeoshowcasesshowcasevideoslistinshowcase)
  * [`vimeo.showcasesShowcaseVideos.listInShowcase_0`](#vimeoshowcasesshowcasevideoslistinshowcase_0)
  * [`vimeo.showcasesShowcaseVideos.removeFromShowcase`](#vimeoshowcasesshowcasevideosremovefromshowcase)
  * [`vimeo.showcasesShowcaseVideos.removeVideoFromShowcase`](#vimeoshowcasesshowcasevideosremovevideofromshowcase)
  * [`vimeo.showcasesShowcaseVideos.replaceShowcaseVideos`](#vimeoshowcasesshowcasevideosreplaceshowcasevideos)
  * [`vimeo.showcasesShowcaseVideos.replaceVideos`](#vimeoshowcasesshowcasevideosreplacevideos)
  * [`vimeo.showcasesShowcaseVideos.setFeaturedVideo`](#vimeoshowcasesshowcasevideossetfeaturedvideo)
  * [`vimeo.showcasesShowcaseVideos.setFeaturedVideo_0`](#vimeoshowcasesshowcasevideossetfeaturedvideo_0)
  * [`vimeo.subscriptionPlansEssentials.plan`](#vimeosubscriptionplansessentialsplan)
  * [`vimeo.tagsEssentials.tag`](#vimeotagsessentialstag)
  * [`vimeo.teamsMembers.getMembershipInformation`](#vimeoteamsmembersgetmembershipinformation)
  * [`vimeo.teamsMembers.getTeamMembershipInformation`](#vimeoteamsmembersgetteammembershipinformation)
  * [`vimeo.teamsMembers.getUserTeamRole`](#vimeoteamsmembersgetuserteamrole)
  * [`vimeo.tutorialEssentials.tutorial`](#vimeotutorialessentialstutorial)
  * [`vimeo.usersAnalytics.getMetrics`](#vimeousersanalyticsgetmetrics)
  * [`vimeo.usersAnalytics.getUserMetrics`](#vimeousersanalyticsgetusermetrics)
  * [`vimeo.usersEssentials.editVimeoAccount`](#vimeousersessentialseditvimeoaccount)
  * [`vimeo.usersEssentials.getUser`](#vimeousersessentialsgetuser)
  * [`vimeo.usersEssentials.user`](#vimeousersessentialsuser)
  * [`vimeo.usersEssentials.user_0`](#vimeousersessentialsuser_0)
  * [`vimeo.usersFeeds.feed`](#vimeousersfeedsfeed)
  * [`vimeo.usersFeeds.getUserFeedVideos`](#vimeousersfeedsgetuserfeedvideos)
  * [`vimeo.usersFollowers.checkFollowingStatus`](#vimeousersfollowerscheckfollowingstatus)
  * [`vimeo.usersFollowers.checkFollowingUser`](#vimeousersfollowerscheckfollowinguser)
  * [`vimeo.usersFollowers.followMultipleUsers`](#vimeousersfollowersfollowmultipleusers)
  * [`vimeo.usersFollowers.followSpecificUser`](#vimeousersfollowersfollowspecificuser)
  * [`vimeo.usersFollowers.followers`](#vimeousersfollowersfollowers)
  * [`vimeo.usersFollowers.listAll`](#vimeousersfollowerslistall)
  * [`vimeo.usersFollowers.listOfFollowedUsers`](#vimeousersfollowerslistoffollowedusers)
  * [`vimeo.usersFollowers.listOfFollowingUsers`](#vimeousersfollowerslistoffollowingusers)
  * [`vimeo.usersFollowers.stopFollowingUser`](#vimeousersfollowersstopfollowinguser)
  * [`vimeo.usersFollowers.user`](#vimeousersfollowersuser)
  * [`vimeo.usersFollowers.user_0`](#vimeousersfollowersuser_0)
  * [`vimeo.usersFollowers.users`](#vimeousersfollowersusers)
  * [`vimeo.usersPictures.addPortraitImage`](#vimeouserspicturesaddportraitimage)
  * [`vimeo.usersPictures.editPortraitImage`](#vimeouserspictureseditportraitimage)
  * [`vimeo.usersPictures.getSpecificPictureBelongingToUser`](#vimeouserspicturesgetspecificpicturebelongingtouser)
  * [`vimeo.usersPictures.list`](#vimeouserspictureslist)
  * [`vimeo.usersPictures.picture`](#vimeouserspicturespicture)
  * [`vimeo.usersPictures.picture_0`](#vimeouserspicturespicture_0)
  * [`vimeo.usersPictures.picture_1`](#vimeouserspicturespicture_1)
  * [`vimeo.usersPictures.picture_2`](#vimeouserspicturespicture_2)
  * [`vimeo.usersPictures.pictures`](#vimeouserspicturespictures)
  * [`vimeo.usersPictures.removePortraitImage`](#vimeouserspicturesremoveportraitimage)
  * [`vimeo.usersSearch.users`](#vimeouserssearchusers)
  * [`vimeo.usersWatchHistory.deleteEntireWatchHistory`](#vimeouserswatchhistorydeleteentirewatchhistory)
  * [`vimeo.usersWatchHistory.deleteSpecificVideo`](#vimeouserswatchhistorydeletespecificvideo)
  * [`vimeo.usersWatchHistory.getWatchedVideos`](#vimeouserswatchhistorygetwatchedvideos)
  * [`vimeo.videosAnimatedThumbnails.createSet`](#vimeovideosanimatedthumbnailscreateset)
  * [`vimeo.videosAnimatedThumbnails.deleteSet`](#vimeovideosanimatedthumbnailsdeleteset)
  * [`vimeo.videosAnimatedThumbnails.getAllSets`](#vimeovideosanimatedthumbnailsgetallsets)
  * [`vimeo.videosAnimatedThumbnails.getStatusOfSet`](#vimeovideosanimatedthumbnailsgetstatusofset)
  * [`vimeo.videosAnimatedThumbnails.specificSetGet`](#vimeovideosanimatedthumbnailsspecificsetget)
  * [`vimeo.videosChapters.chapter`](#vimeovideoschapterschapter)
  * [`vimeo.videosChapters.chapter_0`](#vimeovideoschapterschapter_0)
  * [`vimeo.videosChapters.chapter_1`](#vimeovideoschapterschapter_1)
  * [`vimeo.videosChapters.chapter_2`](#vimeovideoschapterschapter_2)
  * [`vimeo.videosChapters.chapters`](#vimeovideoschapterschapters)
  * [`vimeo.videosChapters.deleteChapterThumbnail`](#vimeovideoschaptersdeletechapterthumbnail)
  * [`vimeo.videosChapters.generateChapterThumbnail`](#vimeovideoschaptersgeneratechapterthumbnail)
  * [`vimeo.videosChapters.generateChapterThumbnailOrUploadLink`](#vimeovideoschaptersgeneratechapterthumbnailoruploadlink)
  * [`vimeo.videosChapters.getChapterThumbnails`](#vimeovideoschaptersgetchapterthumbnails)
  * [`vimeo.videosChapters.getSingleChapterThumbnail`](#vimeovideoschaptersgetsinglechapterthumbnail)
  * [`vimeo.videosChapters.getSingleChapterThumbnail_0`](#vimeovideoschaptersgetsinglechapterthumbnail_0)
  * [`vimeo.videosChapters.setChapterThumbnailActive`](#vimeovideoschapterssetchapterthumbnailactive)
  * [`vimeo.videosContentRatings.getAllContentRatings`](#vimeovideoscontentratingsgetallcontentratings)
  * [`vimeo.videosCreativeCommons.getAllCCLicenses`](#vimeovideoscreativecommonsgetallcclicenses)
  * [`vimeo.videosCredits.addUserCredit`](#vimeovideoscreditsaddusercredit)
  * [`vimeo.videosCredits.addUserCreditInVideo`](#vimeovideoscreditsaddusercreditinvideo)
  * [`vimeo.videosCredits.deleteUserCredit`](#vimeovideoscreditsdeleteusercredit)
  * [`vimeo.videosCredits.editUserCreditInVideo`](#vimeovideoscreditseditusercreditinvideo)
  * [`vimeo.videosCredits.getAllCreditedUsersInVideo`](#vimeovideoscreditsgetallcreditedusersinvideo)
  * [`vimeo.videosCredits.getAllCreditedUsersInVideo_0`](#vimeovideoscreditsgetallcreditedusersinvideo_0)
  * [`vimeo.videosCredits.getSpecificCreditedUser`](#vimeovideoscreditsgetspecificcrediteduser)
  * [`vimeo.videosCredits.users`](#vimeovideoscreditsusers)
  * [`vimeo.videosEmbedPrivacy.addDomainToWhitelist`](#vimeovideosembedprivacyadddomaintowhitelist)
  * [`vimeo.videosEmbedPrivacy.listWhitelistDomains`](#vimeovideosembedprivacylistwhitelistdomains)
  * [`vimeo.videosEmbedPrivacy.removeDomainFromWhitelist`](#vimeovideosembedprivacyremovedomainfromwhitelist)
  * [`vimeo.videosEssentials.appearances`](#vimeovideosessentialsappearances)
  * [`vimeo.videosEssentials.checkUserOwnership`](#vimeovideosessentialscheckuserownership)
  * [`vimeo.videosEssentials.checkUserOwnsVideo`](#vimeovideosessentialscheckuserownsvideo)
  * [`vimeo.videosEssentials.deleteUserVideos`](#vimeovideosessentialsdeleteuservideos)
  * [`vimeo.videosEssentials.getAllUserVideos`](#vimeovideosessentialsgetalluservideos)
  * [`vimeo.videosEssentials.getUserAppearances`](#vimeovideosessentialsgetuserappearances)
  * [`vimeo.videosEssentials.video`](#vimeovideosessentialsvideo)
  * [`vimeo.videosEssentials.video_0`](#vimeovideosessentialsvideo_0)
  * [`vimeo.videosEssentials.video_1`](#vimeovideosessentialsvideo_1)
  * [`vimeo.videosEssentials.videos`](#vimeovideosessentialsvideos)
  * [`vimeo.videosEssentials.videos_0`](#vimeovideosessentialsvideos_0)
  * [`vimeo.videosEssentials.videos_1`](#vimeovideosessentialsvideos_1)
  * [`vimeo.videosFragments.fragments`](#vimeovideosfragmentsfragments)
  * [`vimeo.videosFragments.fragments_0`](#vimeovideosfragmentsfragments_0)
  * [`vimeo.videosFragments.fragments_1`](#vimeovideosfragmentsfragments_1)
  * [`vimeo.videosLanguages.languages`](#vimeovideoslanguageslanguages)
  * [`vimeo.videosLiveM3u8Playback.getPlaybackUrl`](#vimeovideoslivem3u8playbackgetplaybackurl)
  * [`vimeo.videosLiveM3u8Playback.getPlaybackUrlForEventStream`](#vimeovideoslivem3u8playbackgetplaybackurlforeventstream)
  * [`vimeo.videosNondestructiveTrimming.trim`](#vimeovideosnondestructivetrimmingtrim)
  * [`vimeo.videosNondestructiveTrimming.trim_0`](#vimeovideosnondestructivetrimmingtrim_0)
  * [`vimeo.videosRecommendations.getRelatedVideos`](#vimeovideosrecommendationsgetrelatedvideos)
  * [`vimeo.videosShowcases.addToMultipleShowcases`](#vimeovideosshowcasesaddtomultipleshowcases)
  * [`vimeo.videosShowcases.getAllContShowcases`](#vimeovideosshowcasesgetallcontshowcases)
  * [`vimeo.videosTags.addMultiple`](#vimeovideostagsaddmultiple)
  * [`vimeo.videosTags.addTagToVideo`](#vimeovideostagsaddtagtovideo)
  * [`vimeo.videosTags.checkTagVideo`](#vimeovideostagschecktagvideo)
  * [`vimeo.videosTags.getAllByTag`](#vimeovideostagsgetallbytag)
  * [`vimeo.videosTags.getVideoTags`](#vimeovideostagsgetvideotags)
  * [`vimeo.videosTags.removeTag`](#vimeovideostagsremovetag)
  * [`vimeo.videosTextTracks.addTextTrack`](#vimeovideostexttracksaddtexttrack)
  * [`vimeo.videosTextTracks.addTextTrackToVideo`](#vimeovideostexttracksaddtexttracktovideo)
  * [`vimeo.videosTextTracks.deleteTextTrack`](#vimeovideostexttracksdeletetexttrack)
  * [`vimeo.videosTextTracks.editTextTrack`](#vimeovideostexttracksedittexttrack)
  * [`vimeo.videosTextTracks.getAllTracks`](#vimeovideostexttracksgetalltracks)
  * [`vimeo.videosTextTracks.getAllVideoTracks`](#vimeovideostexttracksgetallvideotracks)
  * [`vimeo.videosTextTracks.getSpecificTextTrack`](#vimeovideostexttracksgetspecifictexttrack)
  * [`vimeo.videosThumbnails.addThumbnailToVideo`](#vimeovideosthumbnailsaddthumbnailtovideo)
  * [`vimeo.videosThumbnails.addThumbnailToVideo_0`](#vimeovideosthumbnailsaddthumbnailtovideo_0)
  * [`vimeo.videosThumbnails.deleteThumbnailFromVideo`](#vimeovideosthumbnailsdeletethumbnailfromvideo)
  * [`vimeo.videosThumbnails.editThumbnailImage`](#vimeovideosthumbnailseditthumbnailimage)
  * [`vimeo.videosThumbnails.getAllByVideoId`](#vimeovideosthumbnailsgetallbyvideoid)
  * [`vimeo.videosThumbnails.getAllByVideoId_0`](#vimeovideosthumbnailsgetallbyvideoid_0)
  * [`vimeo.videosThumbnails.getThumbnailFromVideo`](#vimeovideosthumbnailsgetthumbnailfromvideo)
  * [`vimeo.videosTranscripts.transcript`](#vimeovideostranscriptstranscript)
  * [`vimeo.videosUnlistedVideos.grantAccessToUsers`](#vimeovideosunlistedvideosgrantaccesstousers)
  * [`vimeo.videosUnlistedVideos.grantAccessToUsers_0`](#vimeovideosunlistedvideosgrantaccesstousers_0)
  * [`vimeo.videosUnlistedVideos.grantUserAccess`](#vimeovideosunlistedvideosgrantuseraccess)
  * [`vimeo.videosUnlistedVideos.listAccessibleUsers`](#vimeovideosunlistedvideoslistaccessibleusers)
  * [`vimeo.videosUnlistedVideos.listAccessibleUsers_0`](#vimeovideosunlistedvideoslistaccessibleusers_0)
  * [`vimeo.videosUnlistedVideos.restrictUserAccess`](#vimeovideosunlistedvideosrestrictuseraccess)
  * [`vimeo.videosUploads.beginVideoUploadProcess`](#vimeovideosuploadsbeginvideouploadprocess)
  * [`vimeo.videosUploads.completeStreamingUpload`](#vimeovideosuploadscompletestreamingupload)
  * [`vimeo.videosUploads.getUploadAttempt`](#vimeovideosuploadsgetuploadattempt)
  * [`vimeo.videosUploads.video`](#vimeovideosuploadsvideo)
  * [`vimeo.videosVersions.addVideoVersion`](#vimeovideosversionsaddvideoversion)
  * [`vimeo.videosVersions.deleteVideoVersion`](#vimeovideosversionsdeletevideoversion)
  * [`vimeo.videosVersions.editVideoVersion`](#vimeovideosversionseditvideoversion)
  * [`vimeo.videosVersions.getAllVideoVersions`](#vimeovideosversionsgetallvideoversions)
  * [`vimeo.videosVersions.getAllVideoVersions_0`](#vimeovideosversionsgetallvideoversions_0)
  * [`vimeo.videosVersions.getSpecificVersion`](#vimeovideosversionsgetspecificversion)
  * [`vimeo.videosVideoComments.addNewComment`](#vimeovideosvideocommentsaddnewcomment)
  * [`vimeo.videosVideoComments.comment`](#vimeovideosvideocommentscomment)
  * [`vimeo.videosVideoComments.comment_0`](#vimeovideosvideocommentscomment_0)
  * [`vimeo.videosVideoComments.comment_1`](#vimeovideosvideocommentscomment_1)
  * [`vimeo.videosVideoComments.comment_2`](#vimeovideosvideocommentscomment_2)
  * [`vimeo.videosVideoComments.comments`](#vimeovideosvideocommentscomments)
  * [`vimeo.videosVideoComments.createReply`](#vimeovideosvideocommentscreatereply)
  * [`vimeo.videosVideoComments.getAllReplies`](#vimeovideosvideocommentsgetallreplies)
  * [`vimeo.videosVideoComments.getAllReplies_0`](#vimeovideosvideocommentsgetallreplies_0)
  * [`vimeo.watchLaterQueueEssentials.addVideoToQueue`](#vimeowatchlaterqueueessentialsaddvideotoqueue)
  * [`vimeo.watchLaterQueueEssentials.addVideoToQueue_0`](#vimeowatchlaterqueueessentialsaddvideotoqueue_0)
  * [`vimeo.watchLaterQueueEssentials.checkVideoInQueue`](#vimeowatchlaterqueueessentialscheckvideoinqueue)
  * [`vimeo.watchLaterQueueEssentials.checkVideoInQueue_0`](#vimeowatchlaterqueueessentialscheckvideoinqueue_0)
  * [`vimeo.watchLaterQueueEssentials.getVideosInQueue`](#vimeowatchlaterqueueessentialsgetvideosinqueue)
  * [`vimeo.watchLaterQueueEssentials.listUserQueueVideos`](#vimeowatchlaterqueueessentialslistuserqueuevideos)
  * [`vimeo.watchLaterQueueEssentials.removeVideoFromQueue`](#vimeowatchlaterqueueessentialsremovevideofromqueue)
  * [`vimeo.watchLaterQueueEssentials.removeVideoFromQueue_0`](#vimeowatchlaterqueueessentialsremovevideofromqueue_0)
  * [`vimeo.webinarEmails.customizePreferences`](#vimeowebinaremailscustomizepreferences)
  * [`vimeo.webinarEmails.customizePreferences_0`](#vimeowebinaremailscustomizepreferences_0)
  * [`vimeo.webinarEmails.getCustomizationData`](#vimeowebinaremailsgetcustomizationdata)
  * [`vimeo.webinarEmails.getCustomizationData_0`](#vimeowebinaremailsgetcustomizationdata_0)
  * [`vimeo.webinarEssentials.createWebinar`](#vimeowebinaressentialscreatewebinar)
  * [`vimeo.webinarEssentials.getSpecificWebinar`](#vimeowebinaressentialsgetspecificwebinar)
  * [`vimeo.webinarEssentials.getSpecificWebinar_0`](#vimeowebinaressentialsgetspecificwebinar_0)
  * [`vimeo.webinarEssentials.updateWebinarBelongingToAuthenticatedUser`](#vimeowebinaressentialsupdatewebinarbelongingtoauthenticateduser)
  * [`vimeo.webinarEssentials.webinar`](#vimeowebinaressentialswebinar)
  * [`vimeo.webinarEssentials.webinar_0`](#vimeowebinaressentialswebinar_0)
  * [`vimeo.webinarEssentials.webinar_1`](#vimeowebinaressentialswebinar_1)
  * [`vimeo.webinarRegistrations.captureUserRegistrationList`](#vimeowebinarregistrationscaptureuserregistrationlist)
  * [`vimeo.webinarRegistrations.captureUserRegistrationList_0`](#vimeowebinarregistrationscaptureuserregistrationlist_0)
  * [`vimeo.webinarRegistrations.deleteRegistrantRecord`](#vimeowebinarregistrationsdeleteregistrantrecord)
  * [`vimeo.webinarRegistrations.deleteRegistrantRecord_0`](#vimeowebinarregistrationsdeleteregistrantrecord_0)
  * [`vimeo.webinarRegistrations.getUserRegistrationsByWebinarId`](#vimeowebinarregistrationsgetuserregistrationsbywebinarid)
  * [`vimeo.webinarRegistrations.getUserRegistrationsByWebinarId_0`](#vimeowebinarregistrationsgetuserregistrationsbywebinarid_0)
  * [`vimeo.webinarRegistrations.updateUserRegistrationData`](#vimeowebinarregistrationsupdateuserregistrationdata)
  * [`vimeo.webinarRegistrations.updateUserRegistrationData_0`](#vimeowebinarregistrationsupdateuserregistrationdata_0)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Vimeo&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Vimeo } from "vimeo-typescript-sdk";

const vimeo = new Vimeo({
  // Defining the base path is optional and defaults to https://api.vimeo.com
  // basePath: "https://api.vimeo.com",
  accessToken: "ACCESS_TOKEN",
  oauthClientId: "CLIENT_ID",
  oauthClientSecret: "CLIENT_SECRET",
});

const endpointsResponse = await vimeo.apiInformationEssentials.endpoints({
  openapi: true,
  version: "3.4",
});

console.log(endpointsResponse);
```

## Reference<a id="reference"></a>


### `vimeo.apiInformationEssentials.endpoints`<a id="vimeoapiinformationessentialsendpoints"></a>

This method returns the full OpenAPI specification for the Vimeo API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const endpointsResponse = await vimeo.apiInformationEssentials.endpoints({
  openapi: true,
  version: "3.4",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### openapi: `boolean`<a id="openapi-boolean"></a>

Return an OpenAPI specification.

##### version: `string`<a id="version-string"></a>

Return an OpenAPI specification for the specified API version. This overwrites the **version** field provided in the **Accept** header.

#### 🔄 Return<a id="🔄-return"></a>

[Endpoint](./models/endpoint.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.authenticationExtrasAuthenticate.auth`<a id="vimeoauthenticationextrasauthenticateauth"></a>

This method uses the OAuth protocol to authorize a client. For details on OAuth client authorization, see our [Working with Authentication](/api/authentication) guide or the [OAuth spec](https://tools.ietf.org/html/draft-ietf-oauth-v2-31#section-4.4).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const authResponse = await vimeo.authenticationExtrasAuthenticate.auth({
  grant_type: "client_credentials",
  scope: "public",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### grant_type: `string`<a id="grant_type-string"></a>

The grant type. The value of this field must be `client_credentials`.

##### scope: `string`<a id="scope-string"></a>

A space-separated list of the authentication scopes to access. The default is `public`.

#### 🔄 Return<a id="🔄-return"></a>

[Auth](./models/auth.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/oauth/authorize/client` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.authenticationExtrasConvert.oAuth1ToOAuth2`<a id="vimeoauthenticationextrasconvertoauth1tooauth2"></a>

This method exchanges a legacy Advanced API OAuth 1 token for an API v3 OAuth 2 token.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const oAuth1ToOAuth2Response =
  await vimeo.authenticationExtrasConvert.oAuth1ToOAuth2({
    grant_type: "vimeo_oauth1",
    token: "58037c0078d5f54e15e638cc0dd882a570b13c50",
    token_secret: "NTgwMzdjMDA3OGQ1ZjU0ZTE1ZTYzOGNjMGRkODgyYTU3MGIxM2M1MA==",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### grant_type: `string`<a id="grant_type-string"></a>

The grant type. The value of this field must be `vimeo_oauth1`.

##### token: `string`<a id="token-string"></a>

The OAuth 1 token.

##### token_secret: `string`<a id="token_secret-string"></a>

The OAuth 1 token secret.

#### 🔄 Return<a id="🔄-return"></a>

[Auth](./models/auth.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/oauth/authorize/vimeo_oauth1` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.authenticationExtrasEssentials.token`<a id="vimeoauthenticationextrasessentialstoken"></a>

This method verifies that an OAuth 2 access token exists.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const tokenResponse = await vimeo.authenticationExtrasEssentials.token();
```

#### 🔄 Return<a id="🔄-return"></a>

[Auth](./models/auth.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/oauth/verify` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.authenticationExtrasEssentials.token_0`<a id="vimeoauthenticationextrasessentialstoken_0"></a>

This method revokes the access token that the requesting app is currently using. The token must be of the OAuth 2 type.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const token_0Response = await vimeo.authenticationExtrasEssentials.token_0();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tokens` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.authenticationExtrasExchange.oAuthCodeExchange`<a id="vimeoauthenticationextrasexchangeoauthcodeexchange"></a>

This method exchanges an OAuth authorization code for an OAuth access token.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const oAuthCodeExchangeResponse =
  await vimeo.authenticationExtrasExchange.oAuthCodeExchange({
    code: "1234abcd",
    grant_type: "authorization_code",
    redirect_uri: "https://example.com",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### code: `string`<a id="code-string"></a>

The authorization code received from the authorization server.

##### grant_type: `string`<a id="grant_type-string"></a>

The grant type. The value of this field must be `authorization_code`.

##### redirect_uri: `string`<a id="redirect_uri-string"></a>

The redirect URI. The value of this field must match the URI from `/oauth/authorize`.

#### 🔄 Return<a id="🔄-return"></a>

[Auth](./models/auth.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/oauth/access_token` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.categoriesChannels.listInCategory`<a id="vimeocategorieschannelslistincategory"></a>

This method returns every channel that belongs to the specified category.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listInCategoryResponse = await vimeo.categoriesChannels.listInCategory({
  category: "animation",
  direction: "asc",
  page: 1,
  perPage: 10,
  query: "Stop motion",
  sort: "alphabetical",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### category: `string`<a id="category-string"></a>

The name of the category.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date' | 'followers' | 'videos'`<a id="sort-alphabetical--date--followers--videos"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by date.  * `followers` - Sort the results by number of followers.  * `videos` - Sort the results by number of videos. 

#### 🔄 Return<a id="🔄-return"></a>

[Channel](./models/channel.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/categories/{category}/channels` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.categoriesEssentials.categories`<a id="vimeocategoriesessentialscategories"></a>

This method returns every available category.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const categoriesResponse = await vimeo.categoriesEssentials.categories({
  direction: "asc",
  page: 1,
  perPage: 10,
  sort: "last_video_featured_time",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### sort: `'last_video_featured_time' | 'name'`<a id="sort-last_video_featured_time--name"></a>

The way to sort the results.

#### 🔄 Return<a id="🔄-return"></a>

[Category](./models/category.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/categories` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.categoriesEssentials.category`<a id="vimeocategoriesessentialscategory"></a>

This method returns the specified category.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const categoryResponse = await vimeo.categoriesEssentials.category({
  category: "animation",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### category: `string`<a id="category-string"></a>

The name of the category.

#### 🔄 Return<a id="🔄-return"></a>

[Category](./models/category.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/categories/{category}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.categoriesGroups.getAllGroups`<a id="vimeocategoriesgroupsgetallgroups"></a>

This method returns every group that belongs to the specified category.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllGroupsResponse = await vimeo.categoriesGroups.getAllGroups({
  category: "animation",
  direction: "asc",
  page: 1,
  perPage: 10,
  query: "Stop motion",
  sort: "alphabetical",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### category: `string`<a id="category-string"></a>

The name of the category.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date' | 'members' | 'videos'`<a id="sort-alphabetical--date--members--videos"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by date.  * `members` - Sort the results by number of members.  * `videos` - Sort the results by number of videos. 

#### 🔄 Return<a id="🔄-return"></a>

[Group](./models/group.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/categories/{category}/groups` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.categoriesUsers.checkFollowedCategory`<a id="vimeocategoriesuserscheckfollowedcategory"></a>

This method determines whether the authenticated user follows the specified category.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkFollowedCategoryResponse =
  await vimeo.categoriesUsers.checkFollowedCategory({
    category: "animation",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### category: `string`<a id="category-string"></a>

The name of the category.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/categories/{category}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.categoriesUsers.checkFollowedCategory_0`<a id="vimeocategoriesuserscheckfollowedcategory_0"></a>

This method determines whether the authenticated user follows the specified category.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkFollowedCategory_0Response =
  await vimeo.categoriesUsers.checkFollowedCategory_0({
    category: "animation",
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### category: `string`<a id="category-string"></a>

The name of the category.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/categories/{category}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.categoriesUsers.followCategory`<a id="vimeocategoriesusersfollowcategory"></a>

This method causes the authenticated user to follow the specified category.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const followCategoryResponse = await vimeo.categoriesUsers.followCategory({
  category: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### category: `number`<a id="category-number"></a>

The name of the category.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/categories/{category}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.categoriesUsers.followSpecificCategory`<a id="vimeocategoriesusersfollowspecificcategory"></a>

This method causes the authenticated user to follow the specified category.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const followSpecificCategoryResponse =
  await vimeo.categoriesUsers.followSpecificCategory({
    category: 0,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### category: `number`<a id="category-number"></a>

The name of the category.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/categories/{category}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.categoriesUsers.listFollowedCategories`<a id="vimeocategoriesuserslistfollowedcategories"></a>

This method returns every category that the authenticated user follows.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFollowedCategoriesResponse =
  await vimeo.categoriesUsers.listFollowedCategories({
    direction: "asc",
    page: 1,
    perPage: 10,
    sort: "alphabetical",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### sort: `'alphabetical' | 'date' | 'name'`<a id="sort-alphabetical--date--name"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by date.  * `name` - Sort the results by name. 

#### 🔄 Return<a id="🔄-return"></a>

[Category](./models/category.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/categories` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.categoriesUsers.listFollowedCategories_0`<a id="vimeocategoriesuserslistfollowedcategories_0"></a>

This method returns every category that the authenticated user follows.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFollowedCategories_0Response =
  await vimeo.categoriesUsers.listFollowedCategories_0({
    userId: 152184,
    direction: "asc",
    page: 1,
    perPage: 10,
    sort: "alphabetical",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### sort: `'alphabetical' | 'date' | 'name'`<a id="sort-alphabetical--date--name"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by date.  * `name` - Sort the results by name. 

#### 🔄 Return<a id="🔄-return"></a>

[Category](./models/category.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/categories` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.categoriesUsers.stopFollowingCategory`<a id="vimeocategoriesusersstopfollowingcategory"></a>

This method causes the authenticated user to stop following the specified category.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const stopFollowingCategoryResponse =
  await vimeo.categoriesUsers.stopFollowingCategory({
    category: "animation",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### category: `string`<a id="category-string"></a>

The name of the category.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/categories/{category}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.categoriesUsers.stopFollowingCategory_0`<a id="vimeocategoriesusersstopfollowingcategory_0"></a>

This method causes the authenticated user to stop following the specified category.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const stopFollowingCategory_0Response =
  await vimeo.categoriesUsers.stopFollowingCategory_0({
    category: "animation",
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### category: `string`<a id="category-string"></a>

The name of the category.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/categories/{category}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.categoriesVideos.getAllVideoCategories`<a id="vimeocategoriesvideosgetallvideocategories"></a>

This method returns every category that contains the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllVideoCategoriesResponse =
  await vimeo.categoriesVideos.getAllVideoCategories({
    videoId: 258684937,
    page: 1,
    perPage: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Category](./models/category.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/categories` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.categoriesVideos.getVideoInCategory`<a id="vimeocategoriesvideosgetvideoincategory"></a>

This method returns a single video in the specified category. You can use this method to determine whether the video belongs to the category.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getVideoInCategoryResponse =
  await vimeo.categoriesVideos.getVideoInCategory({
    category: "animation",
    videoId: 273576296,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### category: `string`<a id="category-string"></a>

The name of the category.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/categories/{category}/videos/{video_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.categoriesVideos.listVideosInCategory`<a id="vimeocategoriesvideoslistvideosincategory"></a>

This method returns every video that belongs to the specified category.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listVideosInCategoryResponse =
  await vimeo.categoriesVideos.listVideosInCategory({
    category: "animation",
    direction: "asc",
    filter: "conditional_featured",
    filterEmbeddable: true,
    page: 1,
    perPage: 10,
    query: "Stop motion",
    sort: "alphabetical",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### category: `string`<a id="category-string"></a>

The name of the category.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'conditional_featured' | 'embeddable'`<a id="filter-conditional_featured--embeddable"></a>

The attribute by which to filter the results.  Option descriptions:  * `conditional_featured` - Return featured videos.  * `embeddable` - Return embeddable videos. 

##### filterEmbeddable: `boolean`<a id="filterembeddable-boolean"></a>

Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'comments' | 'date' | 'duration' | 'featured' | 'likes' | 'plays' | 'relevant'`<a id="sort-alphabetical--comments--date--duration--featured--likes--plays--relevant"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `comments` - Sort the results by number of comments.  * `date` - Sort the results by date.  * `duration` - Sort the results by duration.  * `featured` - Sort the results by featured status.  * `likes` - Sort the results by number of likes.  * `plays` - Sort the results by number of plays.  * `relevant` - Sort the results by relevance. 

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/categories/{category}/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.categoriesVideos.setVideoCategories`<a id="vimeocategoriesvideossetvideocategories"></a>

This method sets multiple categories and subcategories for the specified video. Include the categories as a JSON block in the body of the request using the **category** field, like this: `[{ "category": "Tech" }, { "category": "Music" }]`. The authenticated user must have edit access to the video. For more information on batch requests like this one, see [Using Common Formats and Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setVideoCategoriesResponse =
  await vimeo.categoriesVideos.setVideoCategories({
    videoId: 258684937,
    category: ["category_example"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### category: `string`[]<a id="category-string"></a>

An array of the names of the desired categories.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Category](./models/category.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/categories` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsCategories.addChannelToMultipleCategories`<a id="vimeochannelscategoriesaddchanneltomultiplecategories"></a>

This method adds the specified channel to multiple categories.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addChannelToMultipleCategoriesResponse =
  await vimeo.channelsCategories.addChannelToMultipleCategories({
    channelId: 927,
    channels: ["channels_example"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channels: `string`[]<a id="channels-string"></a>

The array of category URIs to add.

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/categories` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsCategories.channel`<a id="vimeochannelscategorieschannel"></a>

This method adds the specified channel to a single category. The authenticated user must be the owner of the channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const channelResponse = await vimeo.channelsCategories.channel({
  category: "animation",
  channelId: 927,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### category: `string`<a id="category-string"></a>

The name of the category.

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/categories/{category}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsCategories.getBelongingCategories`<a id="vimeochannelscategoriesgetbelongingcategories"></a>

This method returns every category to which the specified channel belongs.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBelongingCategoriesResponse =
  await vimeo.channelsCategories.getBelongingCategories({
    channelId: 927,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

#### 🔄 Return<a id="🔄-return"></a>

[Category](./models/category.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/categories` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsCategories.removeChannelFromCategory`<a id="vimeochannelscategoriesremovechannelfromcategory"></a>

This method removes a channel from the specified category. The authenticated user must be the owner of the channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeChannelFromCategoryResponse =
  await vimeo.channelsCategories.removeChannelFromCategory({
    category: "animation",
    channelId: 927,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### category: `string`<a id="category-string"></a>

The name of the category.

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/categories/{category}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsEssentials.channel`<a id="vimeochannelsessentialschannel"></a>

This method creates a new channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const channelResponse = await vimeo.channelsEssentials.channel({
  description:
    "We really love videos, and these are the videos we really, really love.",
  link: "staffpicks",
  name: "Vimeo Staff Picks",
  privacy: "anybody",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the channel.

##### privacy: `string`<a id="privacy-string"></a>

The privacy level of the channel.  Option descriptions:  * `anybody` - Anyone can access the channel.  * `moderators` - Only moderators can access the channel.  * `user` - Only moderators and designated users can access the channel. 

##### description: `string`<a id="description-string"></a>

The description of the channel.

##### link: `string`<a id="link-string"></a>

The link to access the channel. You can use a custom name in the URL in place of a numeric channel ID, as in `/channels/{url_custom}`.

#### 🔄 Return<a id="🔄-return"></a>

[Channel](./models/channel.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsEssentials.channel_0`<a id="vimeochannelsessentialschannel_0"></a>

This method returns a single channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const channel_0Response = await vimeo.channelsEssentials.channel_0({
  channelId: 927,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

#### 🔄 Return<a id="🔄-return"></a>

[Channel](./models/channel.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsEssentials.channel_1`<a id="vimeochannelsessentialschannel_1"></a>

This method deletes the specified channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const channel_1Response = await vimeo.channelsEssentials.channel_1({
  channelId: 927,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsEssentials.channel_2`<a id="vimeochannelsessentialschannel_2"></a>

This method edits the specified channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const channel_2Response = await vimeo.channelsEssentials.channel_2({
  channelId: 927,
  description:
    "We really love videos, and these are the videos we really, really love.",
  link: "staffpicks",
  name: "Vimeo Staff Picks",
  privacy: "anybody",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### description: `string`<a id="description-string"></a>

The description of the channel.

##### link: `string`<a id="link-string"></a>

The link to access the channel. You can use a custom name in the URL in place of a numeric channel ID, as in `/channels/{url_custom}`. Submitting `\\\"\\\"` for this field removes the link alias.

##### name: `string`<a id="name-string"></a>

The name of the channel.

##### privacy: `string`<a id="privacy-string"></a>

The privacy level of the channel.  Option descriptions:  * `anybody` - Anyone can access the channel.  * `moderators` - Only moderators can access the channel.  * `users` - Only moderators and designated users can access the channel. 

#### 🔄 Return<a id="🔄-return"></a>

[Channel](./models/channel.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsEssentials.channels`<a id="vimeochannelsessentialschannels"></a>

This method returns all available channels.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const channelsResponse = await vimeo.channelsEssentials.channels({
  direction: "asc",
  filter: "featured",
  page: 1,
  perPage: 10,
  query: "Stop motion",
  sort: "alphabetical",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'featured'`<a id="filter-featured"></a>

The attribute by which to filter the results.  Option descriptions:  * `featured` - Return featured channels. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date' | 'default' | 'followers' | 'relevant' | 'videos'`<a id="sort-alphabetical--date--default--followers--relevant--videos"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by creation date.  * `default` - Sort the results by creation date.  * `followers` - Sort the results by number of followers.  * `relevant` - Sort the results by relevance. This option is available for search queries only.  * `videos` - Sort the results by number of videos. 

#### 🔄 Return<a id="🔄-return"></a>

[Channel](./models/channel.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsEssentials.getUserSubscriptions`<a id="vimeochannelsessentialsgetusersubscriptions"></a>

This method returns all the channels to which the specified user subscribes.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserSubscriptionsResponse =
  await vimeo.channelsEssentials.getUserSubscriptions({
    direction: "asc",
    filter: "moderated",
    page: 1,
    perPage: 10,
    query: "Stop motion",
    sort: "alphabetical",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'moderated'`<a id="filter-moderated"></a>

The attribute by which to filter the results.  Option descriptions:  * `moderated` - Return moderated channels. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date' | 'followers' | 'videos'`<a id="sort-alphabetical--date--followers--videos"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by creation date.  * `followers` - Sort the results by number of followers.  * `videos` - Sort the results by number of videos. 

#### 🔄 Return<a id="🔄-return"></a>

[Channel](./models/channel.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/channels` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsEssentials.getUserSubscriptions_0`<a id="vimeochannelsessentialsgetusersubscriptions_0"></a>

This method returns all the channels to which the specified user subscribes.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserSubscriptions_0Response =
  await vimeo.channelsEssentials.getUserSubscriptions_0({
    userId: 152184,
    direction: "asc",
    filter: "moderated",
    page: 1,
    perPage: 10,
    query: "Stop motion",
    sort: "alphabetical",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'moderated'`<a id="filter-moderated"></a>

The attribute by which to filter the results.  Option descriptions:  * `moderated` - Return moderated channels. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date' | 'followers' | 'videos'`<a id="sort-alphabetical--date--followers--videos"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by creation date.  * `followers` - Sort the results by number of followers.  * `videos` - Sort the results by number of videos. 

#### 🔄 Return<a id="🔄-return"></a>

[Channel](./models/channel.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/channels` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsModerators.addModeratorToChannel`<a id="vimeochannelsmoderatorsaddmoderatortochannel"></a>

This method adds a single user as a moderator to the specified channel. The authenticated user must be a follower of the requested user to add them as a channel moderator.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addModeratorToChannelResponse =
  await vimeo.channelsModerators.addModeratorToChannel({
    channelId: 927,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/moderators/{user_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsModerators.bulkAddModerators`<a id="vimeochannelsmoderatorsbulkaddmoderators"></a>

This method adds multiple users as moderators to the specified channel. Include the users by their URI as a JSON array in the body of the request using the **user_uri** field, like this: `[{ "user_uri": "/users/1234" }, { "user_uri": "/users/1235" }]`. The authenticated user must be a follower of a requested user to add this person as a moderator. For more information on batch requests like this one, see [Using Common Formats and Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const bulkAddModeratorsResponse =
  await vimeo.channelsModerators.bulkAddModerators({
    channelId: 927,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/moderators` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsModerators.getSpecificModerator`<a id="vimeochannelsmoderatorsgetspecificmoderator"></a>

This method returns a single moderator of the specified channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificModeratorResponse =
  await vimeo.channelsModerators.getSpecificModerator({
    channelId: 927,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/moderators/{user_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsModerators.listByChannel`<a id="vimeochannelsmoderatorslistbychannel"></a>

This method returns every moderator of the specified channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByChannelResponse = await vimeo.channelsModerators.listByChannel({
  channelId: 927,
  direction: "asc",
  page: 1,
  perPage: 10,
  query: "Stop motion",
  sort: "alphabetical",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date'`<a id="sort-alphabetical--date"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by date added. 

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/moderators` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsModerators.removeModerator`<a id="vimeochannelsmoderatorsremovemoderator"></a>

This method removes a single moderator from the specified channel. The authenticated user must be the owner of the channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeModeratorResponse = await vimeo.channelsModerators.removeModerator({
  channelId: 927,
  userId: 152184,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/moderators/{user_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsModerators.removeMultipleFromChannel`<a id="vimeochannelsmoderatorsremovemultiplefromchannel"></a>

This method removes multiple moderators from the specified channel. The authenticated user must be the owner of the channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeMultipleFromChannelResponse =
  await vimeo.channelsModerators.removeMultipleFromChannel({
    channelId: 927,
    user_uri: "/users/152184",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_uri: `string`<a id="user_uri-string"></a>

The URI of a user to remove as a moderator.

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/moderators` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsModerators.replaceModerators`<a id="vimeochannelsmoderatorsreplacemoderators"></a>

This method replaces the current list of channel moderators with a new list. The authenticated user must be the owner of the channel and a follower of each requested user to add them as a channel moderator.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const replaceModeratorsResponse =
  await vimeo.channelsModerators.replaceModerators({
    channelId: 927,
    user_uri: "/users/152184",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_uri: `string`<a id="user_uri-string"></a>

The URI of the user to add as a moderator.

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/moderators` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsPrivateChannelMembers.getAccessibleUsers`<a id="vimeochannelsprivatechannelmembersgetaccessibleusers"></a>

This method returns all the users who have access to the specified private channel. The authenticated user must be the owner of the channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAccessibleUsersResponse =
  await vimeo.channelsPrivateChannelMembers.getAccessibleUsers({
    channelId: 927,
    direction: "asc",
    page: 1,
    perPage: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/privacy/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsPrivateChannelMembers.permitUserAccess`<a id="vimeochannelsprivatechannelmemberspermituseraccess"></a>

This method gives multiple users access to the specified private channel. The authenticated user must be the owner of the channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const permitUserAccessResponse =
  await vimeo.channelsPrivateChannelMembers.permitUserAccess({
    channelId: 927,
    users: ["users_example"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### users: `string`[]<a id="users-string"></a>

The array of either the user URIs or the user IDs to permit to access the private channel.

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/privacy/users` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsPrivateChannelMembers.permitUserAccess_0`<a id="vimeochannelsprivatechannelmemberspermituseraccess_0"></a>

This method gives a single user access to the specified private channel. The authenticated user must be the owner of the channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const permitUserAccess_0Response =
  await vimeo.channelsPrivateChannelMembers.permitUserAccess_0({
    channelId: 927,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/privacy/users/{user_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsPrivateChannelMembers.restrictUserAccess`<a id="vimeochannelsprivatechannelmembersrestrictuseraccess"></a>

This method prevents a single user from being able to access the specified private channel. The authenticated user must be the owner of the channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const restrictUserAccessResponse =
  await vimeo.channelsPrivateChannelMembers.restrictUserAccess({
    channelId: 927,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/privacy/users/{user_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsSubscriptionsAndSubscribers.checkIfUserFollowsChannel`<a id="vimeochannelssubscriptionsandsubscriberscheckifuserfollowschannel"></a>

This method determines whether the specified user is a follower of a particular channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkIfUserFollowsChannelResponse =
  await vimeo.channelsSubscriptionsAndSubscribers.checkIfUserFollowsChannel({
    channelId: 927,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/channels/{channel_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsSubscriptionsAndSubscribers.checkUserFollowsChannel`<a id="vimeochannelssubscriptionsandsubscriberscheckuserfollowschannel"></a>

This method determines whether the specified user is a follower of a particular channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkUserFollowsChannelResponse =
  await vimeo.channelsSubscriptionsAndSubscribers.checkUserFollowsChannel({
    channelId: 927,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/channels/{channel_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsSubscriptionsAndSubscribers.listChannelFollowers`<a id="vimeochannelssubscriptionsandsubscriberslistchannelfollowers"></a>

This method returns every follower of the specified channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listChannelFollowersResponse =
  await vimeo.channelsSubscriptionsAndSubscribers.listChannelFollowers({
    channelId: 927,
    direction: "asc",
    filter: "moderators",
    page: 1,
    perPage: 10,
    query: "Stop motion",
    sort: "alphabetical",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### filter: `'moderators'`<a id="filter-moderators"></a>

The attribute by which to filter the results.  Option descriptions:  * `moderators` - Return moderators. 

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date'`<a id="sort-alphabetical--date"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by follow date. 

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsSubscriptionsAndSubscribers.subscribeToChannel`<a id="vimeochannelssubscriptionsandsubscriberssubscribetochannel"></a>

This method subscribes the authenticated user to the specified channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const subscribeToChannelResponse =
  await vimeo.channelsSubscriptionsAndSubscribers.subscribeToChannel({
    channelId: 927,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/channels/{channel_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsSubscriptionsAndSubscribers.subscribeUserToChannel`<a id="vimeochannelssubscriptionsandsubscriberssubscribeusertochannel"></a>

This method subscribes the authenticated user to the specified channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const subscribeUserToChannelResponse =
  await vimeo.channelsSubscriptionsAndSubscribers.subscribeUserToChannel({
    channelId: 927,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/channels/{channel_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsSubscriptionsAndSubscribers.unsubscribeUserFromChannel`<a id="vimeochannelssubscriptionsandsubscribersunsubscribeuserfromchannel"></a>

This method unsubscribes the authenticated user from the specified channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unsubscribeUserFromChannelResponse =
  await vimeo.channelsSubscriptionsAndSubscribers.unsubscribeUserFromChannel({
    channelId: 927,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/channels/{channel_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsSubscriptionsAndSubscribers.unsubscribeUserFromChannel_0`<a id="vimeochannelssubscriptionsandsubscribersunsubscribeuserfromchannel_0"></a>

This method unsubscribes the authenticated user from the specified channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unsubscribeUserFromChannel_0Response =
  await vimeo.channelsSubscriptionsAndSubscribers.unsubscribeUserFromChannel_0({
    channelId: 927,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/channels/{channel_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsTags.addMultipleTagsToChannel`<a id="vimeochannelstagsaddmultipletagstochannel"></a>

This method adds multiple tags to the specified channel. Include the tags as a JSON array in the body of the request using the **tag** field, like this: `[{ "tag": "funny" }, { "tag": "concert" }]`. The authenticated user must be the owner of the channel. For more information on batch requests like this one, see [Using Common Formats and Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addMultipleTagsToChannelResponse =
  await vimeo.channelsTags.addMultipleTagsToChannel({
    channelId: 927,
    tag: ["tag_example"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tag: `string`[]<a id="tag-string"></a>

An array of tags to assign.

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

#### 🔄 Return<a id="🔄-return"></a>

[Tag](./models/tag.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/tags` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsTags.addTagToChannel`<a id="vimeochannelstagsaddtagtochannel"></a>

This method adds a single tag to the specified channel. The authenticated user must be the owner of the channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addTagToChannelResponse = await vimeo.channelsTags.addTagToChannel({
  channelId: 927,
  word: "awesome",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### word: `string`<a id="word-string"></a>

The word to use as the tag.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/tags/{word}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsTags.checkIfTagAddedToChannel`<a id="vimeochannelstagscheckiftagaddedtochannel"></a>

This method determines whether a tag has been added to the specified channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkIfTagAddedToChannelResponse =
  await vimeo.channelsTags.checkIfTagAddedToChannel({
    channelId: 927,
    word: "awesome",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### word: `string`<a id="word-string"></a>

The word to use as the tag.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/tags/{word}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsTags.getAllChannelTags`<a id="vimeochannelstagsgetallchanneltags"></a>

This method returns every tag that has been added to the specified channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllChannelTagsResponse = await vimeo.channelsTags.getAllChannelTags({
  channelId: 927,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

#### 🔄 Return<a id="🔄-return"></a>

[Tag](./models/tag.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/tags` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsTags.removeTagFromChannel`<a id="vimeochannelstagsremovetagfromchannel"></a>

This method removes a single tag from the specified channel. The authenticated user must be the owner of the channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeTagFromChannelResponse =
  await vimeo.channelsTags.removeTagFromChannel({
    channelId: 927,
    word: "awesome",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### word: `string`<a id="word-string"></a>

The word to use as the tag.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/tags/{word}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsVideos.addMultipleToChannel`<a id="vimeochannelsvideosaddmultipletochannel"></a>

This method adds multiple videos to the specified channel. The authenticated user must be a moderator of the channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addMultipleToChannelResponse =
  await vimeo.channelsVideos.addMultipleToChannel({
    channelId: 927,
    video_uri: "/videos/258684937",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### video_uri: `string`<a id="video_uri-string"></a>

A member of an array representing the URIs of the videos to add. For each member in the array, use the format `{\\\"video_uri\\\":\\\"x\\\"}` where **x** is a video URI. For more information on batch requests like this, see [Using Common Formats and Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests).

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/videos` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsVideos.addVideoToChannel`<a id="vimeochannelsvideosaddvideotochannel"></a>

This method adds a single video to the specified channel. The authenticated user must be a moderator of the channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addVideoToChannelResponse = await vimeo.channelsVideos.addVideoToChannel({
  channelId: 927,
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/videos/{video_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsVideos.getAccessibleChannels`<a id="vimeochannelsvideosgetaccessiblechannels"></a>

This method returns every channel to which the authenticated user can add or remove the specified video. The authenticated user must be a moderator of the channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAccessibleChannelsResponse =
  await vimeo.channelsVideos.getAccessibleChannels({
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Channel](./models/channel.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/available_channels` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsVideos.getSpecificVideoInChannel`<a id="vimeochannelsvideosgetspecificvideoinchannel"></a>

This method returns a single video in the specified channel. You can use it to determine whether the video is in the channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificVideoInChannelResponse =
  await vimeo.channelsVideos.getSpecificVideoInChannel({
    channelId: 927,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/videos/{video_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsVideos.listInChannel`<a id="vimeochannelsvideoslistinchannel"></a>

This method returns every video in the specified channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listInChannelResponse = await vimeo.channelsVideos.listInChannel({
  channelId: 927,
  containingUri: "/videos/258684937",
  direction: "asc",
  filter: "embeddable",
  filterEmbeddable: true,
  page: 1,
  perPage: 10,
  query: "Stop motion",
  sort: "added",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### containingUri: `string`<a id="containinguri-string"></a>

The page that contains the video URI.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'embeddable'`<a id="filter-embeddable"></a>

The attribute by which to filter the results.  Option descriptions:  * `embeddable` - Return embeddable videos. 

##### filterEmbeddable: `boolean`<a id="filterembeddable-boolean"></a>

Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'added' | 'alphabetical' | 'comments' | 'date' | 'default' | 'duration' | 'likes' | 'manual' | 'modified_time' | 'plays'`<a id="sort-added--alphabetical--comments--date--default--duration--likes--manual--modified_time--plays"></a>

The way to sort the results.  Option descriptions:  * `added` - Sort the results by date added.  * `alphabetical` - Sort the results alphabetically.  * `comments` - Sort the results by number of comments.  * `date` - Sort the results by creation date.  * `default` - Use the default sorting method.  * `duration` - Sort the results by duration.  * `likes` - Sort the results by number of likes.  * `manual` - Sort the results as the user has arranged them.  * `modified_time` - Sort the results by last modification.  * `plays` - Sort the results by number of plays. 

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsVideos.removeMultipleFromChannel`<a id="vimeochannelsvideosremovemultiplefromchannel"></a>

This method removes multiple videos from the specified channel. Include the videos by their URI as a JSON block in the body of the request using the **video_uri** field, like this: `[{ "video_uri": "/videos/1234" }, { "video_uri": "/videos/1235" }]`. The authenticated user must be a moderator of the channel. For more information on batch requests like this one, see [Using Common Formats and Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeMultipleFromChannelResponse =
  await vimeo.channelsVideos.removeMultipleFromChannel({
    channelId: 927,
    video_uri: "/videos/258684937",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### video_uri: `string`<a id="video_uri-string"></a>

The URI of a video to remove.

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/videos` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.channelsVideos.removeSpecificVideo`<a id="vimeochannelsvideosremovespecificvideo"></a>

This method removes a single video from the specified channel. The authenticated user must be a moderator of the channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeSpecificVideoResponse =
  await vimeo.channelsVideos.removeSpecificVideo({
    channelId: 927,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/videos/{video_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.embedPresetsCustomLogos.addUserLogo`<a id="vimeoembedpresetscustomlogosadduserlogo"></a>

This method adds a custom logo representing the authenticated user for display in the embedded player. Be sure to use this method in the context of the multi-step upload procedure described in our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails#uploading-a-thumbnail) guide. This method represents Step 2 of the procedure.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addUserLogoResponse = await vimeo.embedPresetsCustomLogos.addUserLogo();
```

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/customlogos` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.embedPresetsCustomLogos.addUserLogo_0`<a id="vimeoembedpresetscustomlogosadduserlogo_0"></a>

This method adds a custom logo representing the authenticated user for display in the embedded player. Be sure to use this method in the context of the multi-step upload procedure described in our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails#uploading-a-thumbnail) guide. This method represents Step 2 of the procedure.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addUserLogo_0Response = await vimeo.embedPresetsCustomLogos.addUserLogo_0(
  {
    userId: 152184,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/customlogos` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.embedPresetsCustomLogos.deleteUserLogo`<a id="vimeoembedpresetscustomlogosdeleteuserlogo"></a>

This method deletes the specified custom logo belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteUserLogoResponse =
  await vimeo.embedPresetsCustomLogos.deleteUserLogo({
    logoId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### logoId: `number`<a id="logoid-number"></a>

The ID of the custom logo.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/customlogos/{logo_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.embedPresetsCustomLogos.deleteUserLogo_0`<a id="vimeoembedpresetscustomlogosdeleteuserlogo_0"></a>

This method deletes the specified custom logo belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteUserLogo_0Response =
  await vimeo.embedPresetsCustomLogos.deleteUserLogo_0({
    logoId: 12345,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### logoId: `number`<a id="logoid-number"></a>

The ID of the custom logo.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/customlogos/{logo_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.embedPresetsCustomLogos.getSpecificUserLogo`<a id="vimeoembedpresetscustomlogosgetspecificuserlogo"></a>

This method returns a single custom logo belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificUserLogoResponse =
  await vimeo.embedPresetsCustomLogos.getSpecificUserLogo({
    logoId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### logoId: `number`<a id="logoid-number"></a>

The ID of the custom logo.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/customlogos/{logo_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.embedPresetsCustomLogos.getSpecificUserLogo_0`<a id="vimeoembedpresetscustomlogosgetspecificuserlogo_0"></a>

This method returns a single custom logo belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificUserLogo_0Response =
  await vimeo.embedPresetsCustomLogos.getSpecificUserLogo_0({
    logoId: 12345,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### logoId: `number`<a id="logoid-number"></a>

The ID of the custom logo.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/customlogos/{logo_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.embedPresetsCustomLogos.list`<a id="vimeoembedpresetscustomlogoslist"></a>

This method returns every custom logo that belongs to the authenticated user or team owner.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await vimeo.embedPresetsCustomLogos.list();
```

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/customlogos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.embedPresetsCustomLogos.listUserLogos`<a id="vimeoembedpresetscustomlogoslistuserlogos"></a>

This method returns every custom logo that belongs to the authenticated user or team owner.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUserLogosResponse = await vimeo.embedPresetsCustomLogos.listUserLogos(
  {
    userId: 152184,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/customlogos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.embedPresetsEssentials.createEmbedPreset`<a id="vimeoembedpresetsessentialscreateembedpreset"></a>

This method creates an embed preset.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmbedPresetResponse =
  await vimeo.embedPresetsEssentials.createEmbedPreset({
    userId: 152184,
    name: "New preset",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### embed: [`EmbedPresetsEssentialsCreateEmbedPresetRequestEmbed`](./models/embed-presets-essentials-create-embed-preset-request-embed.ts)<a id="embed-embedpresetsessentialscreateembedpresetrequestembedmodelsembed-presets-essentials-create-embed-preset-request-embedts"></a>

##### name: `string`<a id="name-string"></a>

The name of the embed preset.

#### 🔄 Return<a id="🔄-return"></a>

[Preset](./models/preset.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/presets` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.embedPresetsEssentials.createPreset`<a id="vimeoembedpresetsessentialscreatepreset"></a>

This method creates an embed preset.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPresetResponse = await vimeo.embedPresetsEssentials.createPreset({
  name: "New preset",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### embed: [`EmbedPresetsEssentialsCreatePresetRequestEmbed`](./models/embed-presets-essentials-create-preset-request-embed.ts)<a id="embed-embedpresetsessentialscreatepresetrequestembedmodelsembed-presets-essentials-create-preset-request-embedts"></a>

##### name: `string`<a id="name-string"></a>

The name of the embed preset.

#### 🔄 Return<a id="🔄-return"></a>

[Preset](./models/preset.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/presets` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.embedPresetsEssentials.editPreset`<a id="vimeoembedpresetsessentialseditpreset"></a>

This method edits the specified embed preset. The authenticated user must be the owner of the preset.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editPresetResponse = await vimeo.embedPresetsEssentials.editPreset({
  presetId: 12345,
  outro: "nothing",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### presetId: `number`<a id="presetid-number"></a>

The ID of the preset.

##### outro: `string`<a id="outro-string"></a>

What to do with the outro.  Option descriptions:  * `nothing` - Disable the outro. 

#### 🔄 Return<a id="🔄-return"></a>

[Preset](./models/preset.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/presets/{preset_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.embedPresetsEssentials.editPreset_0`<a id="vimeoembedpresetsessentialseditpreset_0"></a>

This method edits the specified embed preset. The authenticated user must be the owner of the preset.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editPreset_0Response = await vimeo.embedPresetsEssentials.editPreset_0({
  presetId: 12345,
  userId: 152184,
  outro: "nothing",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### presetId: `number`<a id="presetid-number"></a>

The ID of the preset.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### outro: `string`<a id="outro-string"></a>

What to do with the outro.  Option descriptions:  * `nothing` - Disable the outro. 

#### 🔄 Return<a id="🔄-return"></a>

[Preset](./models/preset.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/presets/{preset_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.embedPresetsEssentials.getAllUserCreatedEmbedPresets`<a id="vimeoembedpresetsessentialsgetallusercreatedembedpresets"></a>

This method returns every embed preset that belongs to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllUserCreatedEmbedPresetsResponse =
  await vimeo.embedPresetsEssentials.getAllUserCreatedEmbedPresets({
    page: 1,
    perPage: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Preset](./models/preset.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/presets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.embedPresetsEssentials.getSpecificEmbedPreset`<a id="vimeoembedpresetsessentialsgetspecificembedpreset"></a>

This method returns a single embed preset. The authenticated user must be the owner of the preset.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificEmbedPresetResponse =
  await vimeo.embedPresetsEssentials.getSpecificEmbedPreset({
    presetId: 12345,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### presetId: `number`<a id="presetid-number"></a>

The ID of the preset.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[Preset](./models/preset.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/presets/{preset_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.embedPresetsEssentials.getSpecificPreset`<a id="vimeoembedpresetsessentialsgetspecificpreset"></a>

This method returns a single embed preset. The authenticated user must be the owner of the preset.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificPresetResponse =
  await vimeo.embedPresetsEssentials.getSpecificPreset({
    presetId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### presetId: `number`<a id="presetid-number"></a>

The ID of the preset.

#### 🔄 Return<a id="🔄-return"></a>

[Preset](./models/preset.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/presets/{preset_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.embedPresetsEssentials.getUserEmbedPresets`<a id="vimeoembedpresetsessentialsgetuserembedpresets"></a>

This method returns every embed preset that belongs to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserEmbedPresetsResponse =
  await vimeo.embedPresetsEssentials.getUserEmbedPresets({
    userId: 152184,
    page: 1,
    perPage: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Preset](./models/preset.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/presets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.embedPresetsTimelineEvents.addThumbnailToVideo`<a id="vimeoembedpresetstimelineeventsaddthumbnailtovideo"></a>

This method adds a timeline event thumbnail to the specified video. The authenticated user must be the owner of the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addThumbnailToVideoResponse =
  await vimeo.embedPresetsTimelineEvents.addThumbnailToVideo({
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/timelinethumbnails` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.embedPresetsTimelineEvents.getSingleThumbnail`<a id="vimeoembedpresetstimelineeventsgetsinglethumbnail"></a>

This method returns a single timeline event thumbnail that belongs to the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSingleThumbnailResponse =
  await vimeo.embedPresetsTimelineEvents.getSingleThumbnail({
    thumbnailId: 12345,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### thumbnailId: `number`<a id="thumbnailid-number"></a>

The ID of the timeline event thumbnail.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/timelinethumbnails/{thumbnail_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.embedPresetsVideos.addPresetToVideo`<a id="vimeoembedpresetsvideosaddpresettovideo"></a>

This method adds an embed preset to the specified video. The authenticated user must either be the owner of the video or a team user with the contributor or admin role.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addPresetToVideoResponse =
  await vimeo.embedPresetsVideos.addPresetToVideo({
    presetId: 12345,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### presetId: `number`<a id="presetid-number"></a>

The ID of the embed preset.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/presets/{preset_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.embedPresetsVideos.checkIfPresetAddedToVideo`<a id="vimeoembedpresetsvideoscheckifpresetaddedtovideo"></a>

This method determines whether a video has the specified embed preset.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkIfPresetAddedToVideoResponse =
  await vimeo.embedPresetsVideos.checkIfPresetAddedToVideo({
    presetId: 12345,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### presetId: `number`<a id="presetid-number"></a>

The ID of the embed preset.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/presets/{preset_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.embedPresetsVideos.getPresetVideos`<a id="vimeoembedpresetsvideosgetpresetvideos"></a>

This method returns every video to which the specified embed preset has been added. The authenticated user must be the owner of videos.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPresetVideosResponse = await vimeo.embedPresetsVideos.getPresetVideos({
  presetId: 12345,
  userId: 152184,
  page: 1,
  perPage: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### presetId: `number`<a id="presetid-number"></a>

The ID of the embed preset.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/presets/{preset_id}/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.embedPresetsVideos.getSpecificPresetVideos`<a id="vimeoembedpresetsvideosgetspecificpresetvideos"></a>

This method returns every video to which the specified embed preset has been added. The authenticated user must be the owner of videos.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificPresetVideosResponse =
  await vimeo.embedPresetsVideos.getSpecificPresetVideos({
    presetId: 12345,
    page: 1,
    perPage: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### presetId: `number`<a id="presetid-number"></a>

The ID of the embed preset.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/presets/{preset_id}/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.embedPresetsVideos.removePresetFromVideo`<a id="vimeoembedpresetsvideosremovepresetfromvideo"></a>

This method removes the specified embed preset from a video. The authenticated user must either be the owner of the video or a team user with the contributor or admin role.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removePresetFromVideoResponse =
  await vimeo.embedPresetsVideos.removePresetFromVideo({
    presetId: 12345,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### presetId: `number`<a id="presetid-number"></a>

The ID of the embed preset.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/presets/{preset_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.foldersEssentials.createFolder`<a id="vimeofoldersessentialscreatefolder"></a>

This method creates a new folder for the authenticated user. By default, this method creates a top-level folder. To create a subfolder — that is, to place the new folder inside an existing folder — specify the parent folder by URI with the **parent_folder_uri** parameter in the body of the request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createFolderResponse = await vimeo.foldersEssentials.createFolder({
  name: "Rough cuts",
  parent_folder_uri: "/users/12345/projects/6789",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the folder.

##### parent_folder_uri: `string`<a id="parent_folder_uri-string"></a>

The URI of the parent folder.

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/projects` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.foldersEssentials.deleteFolder`<a id="vimeofoldersessentialsdeletefolder"></a>

This method deletes the specified folder and optionally also the videos that it contains. The authenticated user must be the owner of the folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteFolderResponse = await vimeo.foldersEssentials.deleteFolder({
  projectId: 12345,
  shouldDeleteClips: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `number`<a id="projectid-number"></a>

The ID of the folder.

##### shouldDeleteClips: `boolean`<a id="shoulddeleteclips-boolean"></a>

Whether to delete all the videos in the folder along with the folder itself.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/projects/{project_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.foldersEssentials.editFolder`<a id="vimeofoldersessentialseditfolder"></a>

This method edits the specified folder. The authenticated user must be the owner of the folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editFolderResponse = await vimeo.foldersEssentials.editFolder({
  projectId: 12345,
  name: "Rough cuts",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the folder.

##### projectId: `number`<a id="projectid-number"></a>

The ID of the folder.

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/projects/{project_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.foldersEssentials.getAllUserFolders`<a id="vimeofoldersessentialsgetalluserfolders"></a>

This method returns all the folders belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllUserFoldersResponse =
  await vimeo.foldersEssentials.getAllUserFolders({
    direction: "asc",
    page: 1,
    perPage: 10,
    query: "Stop motion",
    sort: "date",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'date' | 'default' | 'modified_time' | 'name' | 'pinned_on'`<a id="sort-date--default--modified_time--name--pinned_on"></a>

The way to sort the results.  Option descriptions:  * `date` - Sort the results by date.  * `default` - Use the default sort order.  * `modified_time` - Sort the results by last modification.  * `name` - Sort the results by name.  * `pinned_on` - Sort the results by pinned timestamp. 

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/projects` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.foldersEssentials.getSpecificFolder`<a id="vimeofoldersessentialsgetspecificfolder"></a>

This method returns a single folder belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificFolderResponse =
  await vimeo.foldersEssentials.getSpecificFolder({
    projectId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `number`<a id="projectid-number"></a>

The ID of the folder.

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/projects/{project_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.foldersEssentials.getUserPrivateToMeFolder`<a id="vimeofoldersessentialsgetuserprivatetomefolder"></a>

This method returns the specified private-to-me folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserPrivateToMeFolderResponse =
  await vimeo.foldersEssentials.getUserPrivateToMeFolder({
    ownerId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ownerId: `number`<a id="ownerid-number"></a>

The ID of the owner.

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{owner_id}/folders/private_to_me` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.foldersEssentials.project`<a id="vimeofoldersessentialsproject"></a>

This method creates a new folder for the authenticated user. By default, this method creates a top-level folder. To create a subfolder — that is, to place the new folder inside an existing folder — specify the parent folder by URI with the **parent_folder_uri** parameter in the body of the request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const projectResponse = await vimeo.foldersEssentials.project({
  userId: 152184,
  name: "Rough cuts",
  parent_folder_uri: "/users/12345/projects/6789",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the folder.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### parent_folder_uri: `string`<a id="parent_folder_uri-string"></a>

The URI of the parent folder.

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/projects` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.foldersEssentials.project_0`<a id="vimeofoldersessentialsproject_0"></a>

This method returns a single folder belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const project_0Response = await vimeo.foldersEssentials.project_0({
  projectId: 12345,
  userId: 152184,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `number`<a id="projectid-number"></a>

The ID of the folder.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/projects/{project_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.foldersEssentials.project_1`<a id="vimeofoldersessentialsproject_1"></a>

This method deletes the specified folder and optionally also the videos that it contains. The authenticated user must be the owner of the folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const project_1Response = await vimeo.foldersEssentials.project_1({
  projectId: 12345,
  userId: 152184,
  shouldDeleteClips: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `number`<a id="projectid-number"></a>

The ID of the folder.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### shouldDeleteClips: `boolean`<a id="shoulddeleteclips-boolean"></a>

Whether to delete all the videos in the folder along with the folder itself.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/projects/{project_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.foldersEssentials.project_2`<a id="vimeofoldersessentialsproject_2"></a>

This method edits the specified folder. The authenticated user must be the owner of the folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const project_2Response = await vimeo.foldersEssentials.project_2({
  projectId: 12345,
  userId: 152184,
  name: "Rough cuts",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the folder.

##### projectId: `number`<a id="projectid-number"></a>

The ID of the folder.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/projects/{project_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.foldersEssentials.projects`<a id="vimeofoldersessentialsprojects"></a>

This method returns all the folders belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const projectsResponse = await vimeo.foldersEssentials.projects({
  userId: 152184,
  direction: "asc",
  page: 1,
  perPage: 10,
  query: "Stop motion",
  sort: "date",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'date' | 'default' | 'modified_time' | 'name' | 'pinned_on'`<a id="sort-date--default--modified_time--name--pinned_on"></a>

The way to sort the results.  Option descriptions:  * `date` - Sort the results by date.  * `default` - Use the default sort order.  * `modified_time` - Sort the results by last modification.  * `name` - Sort the results by name.  * `pinned_on` - Sort the results by pinned timestamp. 

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/projects` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.foldersItems.getFolderContents`<a id="vimeofoldersitemsgetfoldercontents"></a>

This method returns every item that belongs to the specified folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFolderContentsResponse = await vimeo.foldersItems.getFolderContents({
  projectId: 12345,
  userId: 152184,
  direction: "asc",
  filter: "folder",
  page: 1,
  perPage: 10,
  sort: "alphabetical",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `number`<a id="projectid-number"></a>

The ID of the folder.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'folder' | 'live_event' | 'video'`<a id="filter-folder--live_event--video"></a>

The attribute by which to filter the results.  Option descriptions:  * `folder` - Filter the results by folder.  * `live_event` - Filter the results by event.  * `video` - Filter the results by video. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### sort: `'alphabetical' | 'date' | 'default' | 'duration' | 'last_user_action_event_date'`<a id="sort-alphabetical--date--default--duration--last_user_action_event_date"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by date.  * `default` - Use the default sort order.  * `duration` - Sort the results by duration. Items without a duration, namely events and folders, are grouped by type in ascending alphabetical order, with events first.  * `last_user_action_event_date` - Sort the results by the date of the last user action. 

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/projects/{project_id}/items` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.foldersItems.getFolderItems`<a id="vimeofoldersitemsgetfolderitems"></a>

This method returns every item that belongs to the specified folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFolderItemsResponse = await vimeo.foldersItems.getFolderItems({
  projectId: 12345,
  direction: "asc",
  filter: "folder",
  page: 1,
  perPage: 10,
  sort: "alphabetical",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `number`<a id="projectid-number"></a>

The ID of the folder.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'folder' | 'live_event' | 'video'`<a id="filter-folder--live_event--video"></a>

The attribute by which to filter the results.  Option descriptions:  * `folder` - Filter the results by folder.  * `live_event` - Filter the results by event.  * `video` - Filter the results by video. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### sort: `'alphabetical' | 'date' | 'default' | 'duration' | 'last_user_action_event_date'`<a id="sort-alphabetical--date--default--duration--last_user_action_event_date"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by date.  * `default` - Use the default sort order.  * `duration` - Sort the results by duration. Items without a duration, namely events and folders, are grouped by type in ascending alphabetical order, with events first.  * `last_user_action_event_date` - Sort the results by the date of the last user action. 

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/projects/{project_id}/items` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.foldersItems.removeFromFolder`<a id="vimeofoldersitemsremovefromfolder"></a>

This method removes all items from the specified folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFromFolderResponse = await vimeo.foldersItems.removeFromFolder({
  projectId: 12345,
  shouldDeleteItems: false,
  uris: "/videos/258684937,/live_events/273576296",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `number`<a id="projectid-number"></a>

The ID of the folder.

##### uris: `string`<a id="uris-string"></a>

A comma-separated list of video or event URIs to remove.

##### shouldDeleteItems: `boolean`<a id="shoulddeleteitems-boolean"></a>

Whether to delete the items when removing them from the folder.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/projects/{project_id}/items` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.foldersVideos.addMultipleToFolder`<a id="vimeofoldersvideosaddmultipletofolder"></a>

This method adds multiple videos to the specified folder. The authenticated user must be the owner of the folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addMultipleToFolderResponse =
  await vimeo.foldersVideos.addMultipleToFolder({
    projectId: 12345,
    uris: "/videos/258684937,/videos/273576296",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `number`<a id="projectid-number"></a>

The ID of the folder.

##### uris: `string`<a id="uris-string"></a>

A comma-separated list of video URIs to add.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/projects/{project_id}/videos` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.foldersVideos.addSingleFolderVideo`<a id="vimeofoldersvideosaddsinglefoldervideo"></a>

This method adds a single video to the specified folder. The authenticated user must be the owner of the folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addSingleFolderVideoResponse =
  await vimeo.foldersVideos.addSingleFolderVideo({
    projectId: 12345,
    userId: 152184,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `number`<a id="projectid-number"></a>

The ID of the folder.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/projects/{project_id}/videos/{video_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.foldersVideos.addToFolder`<a id="vimeofoldersvideosaddtofolder"></a>

This method adds a single video to the specified folder. The authenticated user must be the owner of the folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addToFolderResponse = await vimeo.foldersVideos.addToFolder({
  projectId: 12345,
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `number`<a id="projectid-number"></a>

The ID of the folder.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/projects/{project_id}/videos/{video_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.foldersVideos.addToFolderVideos`<a id="vimeofoldersvideosaddtofoldervideos"></a>

This method adds multiple videos to the specified folder. The authenticated user must be the owner of the folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addToFolderVideosResponse = await vimeo.foldersVideos.addToFolderVideos({
  projectId: 12345,
  userId: 152184,
  uris: "/videos/258684937,/videos/273576296",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `number`<a id="projectid-number"></a>

The ID of the folder.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### uris: `string`<a id="uris-string"></a>

A comma-separated list of video URIs to add.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/projects/{project_id}/videos` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.foldersVideos.getAllFolderVideos`<a id="vimeofoldersvideosgetallfoldervideos"></a>

This method returns all the videos that belong to the specified folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllFolderVideosResponse = await vimeo.foldersVideos.getAllFolderVideos(
  {
    projectId: 12345,
    userId: 152184,
    direction: "asc",
    filterTag: "abc,xyz",
    filterTagAllOf: "abc,xyz",
    filterTagExclude: "abc,xyz",
    includeSubfolders: false,
    page: 1,
    perPage: 10,
    query: "Stop motion",
    queryFields: "title,description",
    sort: "alphabetical",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `number`<a id="projectid-number"></a>

The ID of the folder.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filterTag: `string`<a id="filtertag-string"></a>

A comma-separated list of tags to filter on. All results must include at least one of these tags. The use of this parameter triggers a search.

##### filterTagAllOf: `string`<a id="filtertagallof-string"></a>

A comma-separated list of tags to filter on. All results must include all of these tags. The use of this parameter triggers a search.

##### filterTagExclude: `string`<a id="filtertagexclude-string"></a>

A comma-separated list of tags to exclude. The use of this parameter triggers a search.

##### includeSubfolders: `boolean`<a id="includesubfolders-boolean"></a>

Whether to include subfolders.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### queryFields: `string`<a id="queryfields-string"></a>

A comma-separated list of fields to query over. The default value is `title,description,chapters,tags`.

##### sort: `'alphabetical' | 'date' | 'default' | 'duration' | 'last_user_action_event_date'`<a id="sort-alphabetical--date--default--duration--last_user_action_event_date"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by date.  * `default` - Use the default sort order.  * `duration` - Sort the results by duration.  * `last_user_action_event_date` - Sort the results by the date of the last user action. 

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/projects/{project_id}/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.foldersVideos.getVideosInFolder`<a id="vimeofoldersvideosgetvideosinfolder"></a>

This method returns all the videos that belong to the specified folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getVideosInFolderResponse = await vimeo.foldersVideos.getVideosInFolder({
  projectId: 12345,
  direction: "asc",
  filterTag: "abc,xyz",
  filterTagAllOf: "abc,xyz",
  filterTagExclude: "abc,xyz",
  includeSubfolders: false,
  page: 1,
  perPage: 10,
  query: "Stop motion",
  queryFields: "title,description",
  sort: "alphabetical",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `number`<a id="projectid-number"></a>

The ID of the folder.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filterTag: `string`<a id="filtertag-string"></a>

A comma-separated list of tags to filter on. All results must include at least one of these tags. The use of this parameter triggers a search.

##### filterTagAllOf: `string`<a id="filtertagallof-string"></a>

A comma-separated list of tags to filter on. All results must include all of these tags. The use of this parameter triggers a search.

##### filterTagExclude: `string`<a id="filtertagexclude-string"></a>

A comma-separated list of tags to exclude. The use of this parameter triggers a search.

##### includeSubfolders: `boolean`<a id="includesubfolders-boolean"></a>

Whether to include subfolders.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### queryFields: `string`<a id="queryfields-string"></a>

A comma-separated list of fields to query over. The default value is `title,description,chapters,tags`.

##### sort: `'alphabetical' | 'date' | 'default' | 'duration' | 'last_user_action_event_date'`<a id="sort-alphabetical--date--default--duration--last_user_action_event_date"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by date.  * `default` - Use the default sort order.  * `duration` - Sort the results by duration.  * `last_user_action_event_date` - Sort the results by the date of the last user action. 

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/projects/{project_id}/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.foldersVideos.removeFromFolderVideo`<a id="vimeofoldersvideosremovefromfoldervideo"></a>

This method removes a single video from the specified folder. Please note that this doesn't delete the video itself.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFromFolderVideoResponse =
  await vimeo.foldersVideos.removeFromFolderVideo({
    projectId: 12345,
    userId: 152184,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `number`<a id="projectid-number"></a>

The ID of the folder.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/projects/{project_id}/videos/{video_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.foldersVideos.removeMultipleFromFolder`<a id="vimeofoldersvideosremovemultiplefromfolder"></a>

This method removes multiple videos from the specified folder. The authenticated user must be the owner of the folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeMultipleFromFolderResponse =
  await vimeo.foldersVideos.removeMultipleFromFolder({
    projectId: 12345,
    shouldDeleteClips: false,
    uris: "/videos/258684937,/videos/273576296",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `number`<a id="projectid-number"></a>

The ID of the folder.

##### uris: `string`<a id="uris-string"></a>

A comma-separated list of the video URIs to remove.

##### shouldDeleteClips: `boolean`<a id="shoulddeleteclips-boolean"></a>

Whether to delete the videos when removing them from the folder.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/projects/{project_id}/videos` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.foldersVideos.removeMultipleVideosFromFolder`<a id="vimeofoldersvideosremovemultiplevideosfromfolder"></a>

This method removes multiple videos from the specified folder. The authenticated user must be the owner of the folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeMultipleVideosFromFolderResponse =
  await vimeo.foldersVideos.removeMultipleVideosFromFolder({
    projectId: 12345,
    userId: 152184,
    shouldDeleteClips: false,
    uris: "/videos/258684937,/videos/273576296",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `number`<a id="projectid-number"></a>

The ID of the folder.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### uris: `string`<a id="uris-string"></a>

A comma-separated list of the video URIs to remove.

##### shouldDeleteClips: `boolean`<a id="shoulddeleteclips-boolean"></a>

Whether to delete the videos when removing them from the folder.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/projects/{project_id}/videos` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.foldersVideos.removeSingleVideo`<a id="vimeofoldersvideosremovesinglevideo"></a>

This method removes a single video from the specified folder. Please note that this doesn't delete the video itself.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeSingleVideoResponse = await vimeo.foldersVideos.removeSingleVideo({
  projectId: 12345,
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `number`<a id="projectid-number"></a>

The ID of the folder.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/projects/{project_id}/videos/{video_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.groupsEssentials.group`<a id="vimeogroupsessentialsgroup"></a>

This method creates a new group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const groupResponse = await vimeo.groupsEssentials.group({
  description:
    "Want to participate in our weekly challenges? Join the group to receive messages and new challenges!",
  name: "Vimeo Weekend Challenge",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the group.

##### description: `string`<a id="description-string"></a>

The description of the group.

#### 🔄 Return<a id="🔄-return"></a>

[Group](./models/group.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.groupsEssentials.group_0`<a id="vimeogroupsessentialsgroup_0"></a>

This method returns the specified group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const group_0Response = await vimeo.groupsEssentials.group_0({
  groupId: 1108,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `number`<a id="groupid-number"></a>

The ID of the group.

#### 🔄 Return<a id="🔄-return"></a>

[Group](./models/group.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.groupsEssentials.group_1`<a id="vimeogroupsessentialsgroup_1"></a>

This method deletes the specified group. The authenticated user must be the owner of the group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const group_1Response = await vimeo.groupsEssentials.group_1({
  groupId: 1108,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `number`<a id="groupid-number"></a>

The ID of the group.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.groupsEssentials.groups`<a id="vimeogroupsessentialsgroups"></a>

This method returns every available group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const groupsResponse = await vimeo.groupsEssentials.groups({
  direction: "asc",
  filter: "featured",
  page: 1,
  perPage: 10,
  query: "Stop motion",
  sort: "alphabetical",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'featured'`<a id="filter-featured"></a>

The attribute by which to filter the results.  Option descriptions:  * `featured` - Return featured groups. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date' | 'followers' | 'relevant' | 'videos'`<a id="sort-alphabetical--date--followers--relevant--videos"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by creation date.  * `followers` - Sort the results by number of followers.  * `relevant` - Sort the results by relevance. This option is available for search queries only.  * `videos` - Sort the results by number of videos. 

#### 🔄 Return<a id="🔄-return"></a>

[Group](./models/group.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.groupsSubscriptions.addUserToGroup`<a id="vimeogroupssubscriptionsaddusertogroup"></a>

This method adds the authenticated user to the specified group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addUserToGroupResponse = await vimeo.groupsSubscriptions.addUserToGroup({
  groupId: 1108,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `number`<a id="groupid-number"></a>

The ID of the group.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/groups/{group_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.groupsSubscriptions.group`<a id="vimeogroupssubscriptionsgroup"></a>

This method adds the authenticated user to the specified group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const groupResponse = await vimeo.groupsSubscriptions.group({
  groupId: 1108,
  userId: 152184,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `number`<a id="groupid-number"></a>

The ID of the group.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/groups/{group_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.groupsSubscriptions.group_0`<a id="vimeogroupssubscriptionsgroup_0"></a>

This method removes the authenticated user from the specified group. The authenticated user can't be the owner of the group; assign a new owner through a PATCH request first.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const group_0Response = await vimeo.groupsSubscriptions.group_0({
  groupId: 1108,
  userId: 152184,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `number`<a id="groupid-number"></a>

The ID of the group.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/groups/{group_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.groupsSubscriptions.removeUserFromGroup`<a id="vimeogroupssubscriptionsremoveuserfromgroup"></a>

This method removes the authenticated user from the specified group. The authenticated user can't be the owner of the group; assign a new owner through a PATCH request first.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeUserFromGroupResponse =
  await vimeo.groupsSubscriptions.removeUserFromGroup({
    groupId: 1108,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `number`<a id="groupid-number"></a>

The ID of the group.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/groups/{group_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.groupsUsers.checkBelongGroup`<a id="vimeogroupsuserscheckbelonggroup"></a>

This method determines whether the authenticated user belongs to the specified group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkBelongGroupResponse = await vimeo.groupsUsers.checkBelongGroup({
  groupId: 1108,
  userId: 152184,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `number`<a id="groupid-number"></a>

The ID of the group.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/groups/{group_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.groupsUsers.checkUserJoinedGroup`<a id="vimeogroupsuserscheckuserjoinedgroup"></a>

This method determines whether the authenticated user belongs to the specified group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkUserJoinedGroupResponse =
  await vimeo.groupsUsers.checkUserJoinedGroup({
    groupId: 1108,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `number`<a id="groupid-number"></a>

The ID of the group.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/groups/{group_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.groupsUsers.getGroupUsers`<a id="vimeogroupsusersgetgroupusers"></a>

This method returns every user who belongs to the specified group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getGroupUsersResponse = await vimeo.groupsUsers.getGroupUsers({
  groupId: 1108,
  direction: "asc",
  filter: "moderators",
  page: 1,
  perPage: 10,
  query: "Stop motion",
  sort: "alphabetical",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `number`<a id="groupid-number"></a>

The ID of the group.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'moderators'`<a id="filter-moderators"></a>

The attribute by which to filter the results.  Option descriptions:  * `moderators` - Return group moderators. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date'`<a id="sort-alphabetical--date"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by creation date. 

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.groupsUsers.getUserGroups`<a id="vimeogroupsusersgetusergroups"></a>

This method returns every group to which the authenticated user belongs.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserGroupsResponse = await vimeo.groupsUsers.getUserGroups({
  direction: "asc",
  filter: "moderated",
  page: 1,
  perPage: 10,
  query: "Stop motion",
  sort: "alphabetical",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'moderated'`<a id="filter-moderated"></a>

The attribute by which to filter the results.  Option descriptions:  * `moderated` - Return moderated groups. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date' | 'members' | 'videos'`<a id="sort-alphabetical--date--members--videos"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by creation date.  * `members` - Sort the results by number of members.  * `videos` - Sort the results by number of videos. 

#### 🔄 Return<a id="🔄-return"></a>

[Group](./models/group.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/groups` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.groupsUsers.getUserGroupsList`<a id="vimeogroupsusersgetusergroupslist"></a>

This method returns every group to which the authenticated user belongs.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserGroupsListResponse = await vimeo.groupsUsers.getUserGroupsList({
  userId: 152184,
  direction: "asc",
  filter: "moderated",
  page: 1,
  perPage: 10,
  query: "Stop motion",
  sort: "alphabetical",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'moderated'`<a id="filter-moderated"></a>

The attribute by which to filter the results.  Option descriptions:  * `moderated` - Return moderated groups. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date' | 'members' | 'videos'`<a id="sort-alphabetical--date--members--videos"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by creation date.  * `members` - Sort the results by number of members.  * `videos` - Sort the results by number of videos. 

#### 🔄 Return<a id="🔄-return"></a>

[Group](./models/group.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/groups` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.groupsVideos.addToGroup`<a id="vimeogroupsvideosaddtogroup"></a>

This method adds a video to the specified group. The authenticated user must be the owner of the group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addToGroupResponse = await vimeo.groupsVideos.addToGroup({
  groupId: 1108,
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `number`<a id="groupid-number"></a>

The ID of the group.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}/videos/{video_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.groupsVideos.getAllGroupVideos`<a id="vimeogroupsvideosgetallgroupvideos"></a>

This method returns every video from the specified group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllGroupVideosResponse = await vimeo.groupsVideos.getAllGroupVideos({
  groupId: 1108,
  direction: "asc",
  filter: "embeddable",
  filterEmbeddable: true,
  page: 1,
  perPage: 10,
  query: "Stop motion",
  sort: "alphabetical",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `number`<a id="groupid-number"></a>

The ID of the group.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'embeddable'`<a id="filter-embeddable"></a>

The attribute by which to filter the results.  Option descriptions:  * `embeddable` - Return embeddable videos. 

##### filterEmbeddable: `boolean`<a id="filterembeddable-boolean"></a>

Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'comments' | 'date' | 'duration' | 'likes' | 'plays'`<a id="sort-alphabetical--comments--date--duration--likes--plays"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `comments` - Sort the results by number of comments.  * `date` - Sort the results by creation date.  * `duration` - Sort the results by duration.  * `likes` - Sort the results by number of likes.  * `plays` - Sort the results by number of plays. 

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.groupsVideos.getSingleVideo`<a id="vimeogroupsvideosgetsinglevideo"></a>

This method returns a single video from the specified group. You can use this method to determine whether the video belongs to the group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSingleVideoResponse = await vimeo.groupsVideos.getSingleVideo({
  groupId: 1108,
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `number`<a id="groupid-number"></a>

The ID of the group.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}/videos/{video_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.groupsVideos.removeFromGroup`<a id="vimeogroupsvideosremovefromgroup"></a>

This method removes a video from the specified group. The authenticated user must be the owner of the group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFromGroupResponse = await vimeo.groupsVideos.removeFromGroup({
  groupId: 1108,
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `number`<a id="groupid-number"></a>

The ID of the group.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}/videos/{video_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.likesEssentials.checkUserLikedVideo`<a id="vimeolikesessentialscheckuserlikedvideo"></a>

This method checks if the authenticated user has liked the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkUserLikedVideoResponse =
  await vimeo.likesEssentials.checkUserLikedVideo({
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/likes/{video_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.likesEssentials.checkVideoLikedByUser`<a id="vimeolikesessentialscheckvideolikedbyuser"></a>

This method checks if the authenticated user has liked the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkVideoLikedByUserResponse =
  await vimeo.likesEssentials.checkVideoLikedByUser({
    userId: 152184,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/likes/{video_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.likesEssentials.getAllUserLikes`<a id="vimeolikesessentialsgetalluserlikes"></a>

This method returns every user who has liked the specified video on an On Demand page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllUserLikesResponse = await vimeo.likesEssentials.getAllUserLikes({
  ondemandId: 61326,
  direction: "asc",
  filter: "extra",
  page: 1,
  perPage: 10,
  sort: "alphabetical",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'extra' | 'main' | 'trailer'`<a id="filter-extra--main--trailer"></a>

The attribute by which to filter the results.  Option descriptions:  * `extra` - Consider extra content only.  * `main` - Consider main content only.  * `trailer` - Consider trailer content only. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### sort: `'alphabetical' | 'date'`<a id="sort-alphabetical--date"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by join date. 

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/likes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.likesEssentials.getUserLikedVideos`<a id="vimeolikesessentialsgetuserlikedvideos"></a>

This method returns every video that the authenticated user has liked.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserLikedVideosResponse =
  await vimeo.likesEssentials.getUserLikedVideos({
    filter: "embeddable",
    filterEmbeddable: true,
    page: 1,
    perPage: 10,
    query: "Stop motion",
    sort: "alphabetical",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filter: `'embeddable'`<a id="filter-embeddable"></a>

The attribute by which to filter the results.  Option descriptions:  * `embeddable` - Return embeddable videos. 

##### filterEmbeddable: `boolean`<a id="filterembeddable-boolean"></a>

Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'comments' | 'date' | 'duration' | 'likes' | 'plays'`<a id="sort-alphabetical--comments--date--duration--likes--plays"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `comments` - Sort the results by number of comments.  * `date` - Sort the results by creation date.  * `duration` - Sort the results by duration.  * `likes` - Sort the results by number of likes.  * `plays` - Sort the results by number of plays. 

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/likes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.likesEssentials.getUserLikes`<a id="vimeolikesessentialsgetuserlikes"></a>

This method returns every user who has liked the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserLikesResponse = await vimeo.likesEssentials.getUserLikes({
  videoId: 258684937,
  direction: "asc",
  page: 1,
  perPage: 10,
  sort: "alphabetical",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### sort: `'alphabetical' | 'date'`<a id="sort-alphabetical--date"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by join date. 

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/likes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.likesEssentials.getUsersWhoLikedVideo`<a id="vimeolikesessentialsgetuserswholikedvideo"></a>

This method returns every user who has liked the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUsersWhoLikedVideoResponse =
  await vimeo.likesEssentials.getUsersWhoLikedVideo({
    channelId: 927,
    videoId: 258684937,
    direction: "asc",
    page: 1,
    perPage: 10,
    sort: "alphabetical",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### sort: `'alphabetical' | 'date'`<a id="sort-alphabetical--date"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by join date. 

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/videos/{video_id}/likes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.likesEssentials.likeVideo`<a id="vimeolikesessentialslikevideo"></a>

This method causes the authenticated user to like the specified video. The user can't like their own video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const likeVideoResponse = await vimeo.likesEssentials.likeVideo({
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/likes/{video_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.likesEssentials.likes`<a id="vimeolikesessentialslikes"></a>

This method returns every video that the authenticated user has liked.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const likesResponse = await vimeo.likesEssentials.likes({
  userId: 152184,
  filter: "embeddable",
  filterEmbeddable: true,
  page: 1,
  perPage: 10,
  query: "Stop motion",
  sort: "alphabetical",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### filter: `'embeddable'`<a id="filter-embeddable"></a>

The attribute by which to filter the results.  Option descriptions:  * `embeddable` - Return embeddable videos. 

##### filterEmbeddable: `boolean`<a id="filterembeddable-boolean"></a>

Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'comments' | 'date' | 'duration' | 'likes' | 'plays'`<a id="sort-alphabetical--comments--date--duration--likes--plays"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `comments` - Sort the results by number of comments.  * `date` - Sort the results by creation date.  * `duration` - Sort the results by duration.  * `likes` - Sort the results by number of likes.  * `plays` - Sort the results by number of plays. 

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/likes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.likesEssentials.unlikeVideo`<a id="vimeolikesessentialsunlikevideo"></a>

This method causes the authenticated user to unlike the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unlikeVideoResponse = await vimeo.likesEssentials.unlikeVideo({
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/likes/{video_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.likesEssentials.video`<a id="vimeolikesessentialsvideo"></a>

This method causes the authenticated user to like the specified video. The user can't like their own video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const videoResponse = await vimeo.likesEssentials.video({
  userId: 152184,
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/likes/{video_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.likesEssentials.video_0`<a id="vimeolikesessentialsvideo_0"></a>

This method causes the authenticated user to unlike the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const video_0Response = await vimeo.likesEssentials.video_0({
  userId: 152184,
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/likes/{video_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEmbedPrivacy.embedEventOnDomains`<a id="vimeoliveembedprivacyembedeventondomains"></a>

This method embeds an event on the specified domains. The embed privacy setting must be `whitelist`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const embedEventOnDomainsResponse =
  await vimeo.liveEmbedPrivacy.embedEventOnDomains({
    liveEventId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### allowed_domains: `string`[]<a id="allowed_domains-string"></a>

An array of the domains on which the embedded event can appear.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live_events/{live_event_id}/privacy/domains` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEmbedPrivacy.embedEventOnDomains_0`<a id="vimeoliveembedprivacyembedeventondomains_0"></a>

This method embeds an event on the specified domains. The embed privacy setting must be `whitelist`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const embedEventOnDomains_0Response =
  await vimeo.liveEmbedPrivacy.embedEventOnDomains_0({
    liveEventId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### allowed_domains: `string`[]<a id="allowed_domains-string"></a>

An array of the domains on which the embedded event can appear.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/live_events/{live_event_id}/privacy/domains` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEmbedPrivacy.embedEventOnDomains_1`<a id="vimeoliveembedprivacyembedeventondomains_1"></a>

This method embeds an event on the specified domains. The embed privacy setting must be `whitelist`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const embedEventOnDomains_1Response =
  await vimeo.liveEmbedPrivacy.embedEventOnDomains_1({
    liveEventId: 12345,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### allowed_domains: `string`[]<a id="allowed_domains-string"></a>

An array of the domains on which the embedded event can appear.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events/{live_event_id}/privacy/domains` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEmbedPrivacy.getWhitelistDomains`<a id="vimeoliveembedprivacygetwhitelistdomains"></a>

This method returns every whitelisted domain for an event. The embed privacy setting must be `whitelist`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWhitelistDomainsResponse =
  await vimeo.liveEmbedPrivacy.getWhitelistDomains({
    liveEventId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

#### 🔄 Return<a id="🔄-return"></a>

[Domain](./models/domain.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live_events/{live_event_id}/privacy/domains` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEmbedPrivacy.getWhitelistDomains_0`<a id="vimeoliveembedprivacygetwhitelistdomains_0"></a>

This method returns every whitelisted domain for an event. The embed privacy setting must be `whitelist`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWhitelistDomains_0Response =
  await vimeo.liveEmbedPrivacy.getWhitelistDomains_0({
    liveEventId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

#### 🔄 Return<a id="🔄-return"></a>

[Domain](./models/domain.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/live_events/{live_event_id}/privacy/domains` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEmbedPrivacy.getWhitelistDomains_1`<a id="vimeoliveembedprivacygetwhitelistdomains_1"></a>

This method returns every whitelisted domain for an event. The embed privacy setting must be `whitelist`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWhitelistDomains_1Response =
  await vimeo.liveEmbedPrivacy.getWhitelistDomains_1({
    liveEventId: 12345,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[Domain](./models/domain.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events/{live_event_id}/privacy/domains` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEssentials.createEvent`<a id="vimeoliveessentialscreateevent"></a>

This method creates a new event for the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEventResponse = await vimeo.liveEssentials.createEvent({
  title: "Live Content",
  auto_cc_enabled: true,
  auto_cc_keywords: "commonly-used words,phrases,technical terms",
  auto_cc_lang: "en-US",
  automatically_title_stream: true,
  chat_enabled: true,
  dvr: true,
  folder_uri: "/users/67890/folder/12345",
  playlist_sort: "added_first",
  scheduled_playback: false,
  stream_description: "In this episode, we interview a surprise guest",
  stream_password: "hunter1",
  stream_title: "Special Feature",
  time_zone: "America/New_York",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

The title of the event. If **automatically_title_stream** is `true`, this value is the base title for videos created by streaming to this event.

##### allow_share_link: `boolean`<a id="allow_share_link-boolean"></a>

Whether the share link is usable.

##### auto_cc_enabled: `boolean`<a id="auto_cc_enabled-boolean"></a>

Whether automated closed captions are enabled for the event.

##### auto_cc_keywords: `string`<a id="auto_cc_keywords-string"></a>

A comma-separated list of keywords that improve the quality of the automated closed captions.

##### auto_cc_lang: `string`<a id="auto_cc_lang-string"></a>

The language in which the automated closed captions appear.  Option descriptions:  * `de-DE` - The language is German.  * `en-US` - The language is English.  * `es-ES` - The language is Spanish.  * `fr-FR` - The language is French.  * `pt-BR` - The language is Portuguese. 

##### automatically_title_stream: `boolean`<a id="automatically_title_stream-boolean"></a>

Whether the title for the next video in the event is generated based on the time of the stream and the **title** field of the event.

##### chat_enabled: `boolean`<a id="chat_enabled-boolean"></a>

Whether to display the live chat client on the Vimeo event page.

##### content_rating: `string`[]<a id="content_rating-string"></a>

A list of values describing the content in this event. To return the list of all possible content rating values, use the [`/contentratings`](https://developer.vimeo.com/api/reference/videos#get_content_ratings) endpoint.

##### dvr: `boolean`<a id="dvr-boolean"></a>

Whether the DVR feature is enabled.

##### embed: [`LiveEssentialsCreateEventRequestEmbed`](./models/live-essentials-create-event-request-embed.ts)<a id="embed-liveessentialscreateeventrequestembedmodelslive-essentials-create-event-request-embedts"></a>

##### folder_uri: `string`<a id="folder_uri-string"></a>

The URI of the event\\\'s folder.

##### interaction_tools_settings: [`LiveEssentialsCreateEventRequestInteractionToolsSettings`](./models/live-essentials-create-event-request-interaction-tools-settings.ts)<a id="interaction_tools_settings-liveessentialscreateeventrequestinteractiontoolssettingsmodelslive-essentials-create-event-request-interaction-tools-settingsts"></a>

##### low_latency: `boolean`<a id="low_latency-boolean"></a>

Whether the event has low-latency streaming enabled.

##### playlist_sort: `string`<a id="playlist_sort-string"></a>

The order in which the videos of the event appear within the event\\\'s playlist.  Option descriptions:  * `added_first` - The most recently added videos appear first.  * `added_last` - The most recently added videos appear last.  * `alphabetical` - The videos appear in alphabetical order.  * `arranged` - The videos appear in the order in which the user has arranged them.  * `comments` - The videos appear in order of number of comments.  * `duration` - The videos appear in order of duration.  * `likes` - The videos appear in order of number of likes.  * `newest` - The newest videos appear first.  * `oldest` - The oldest videos appear first.  * `plays` - The videos appear in order of number of plays. 

##### rtmp_preview: `boolean`<a id="rtmp_preview-boolean"></a>

Whether the event has RTMP preview enabled.

##### schedule: [`LiveEssentialsCreateEventRequestSchedule`](./models/live-essentials-create-event-request-schedule.ts)<a id="schedule-liveessentialscreateeventrequestschedulemodelslive-essentials-create-event-request-schedulets"></a>

##### scheduled_playback: `boolean`<a id="scheduled_playback-boolean"></a>

Whether the scheduled playback feature is enabled.

##### stream_description: `string`<a id="stream_description-string"></a>

The description of the next video to be streamed to the event.

##### stream_embed: [`LiveEssentialsCreateEventRequestStreamEmbed`](./models/live-essentials-create-event-request-stream-embed.ts)<a id="stream_embed-liveessentialscreateeventrequeststreamembedmodelslive-essentials-create-event-request-stream-embedts"></a>

##### stream_password: `string`<a id="stream_password-string"></a>

The password when **stream_privacy.view** is `password`. Anyone with the password can view the videos generated by streaming to the event.

##### stream_privacy: [`LiveEssentialsCreateEventRequestStreamPrivacy`](./models/live-essentials-create-event-request-stream-privacy.ts)<a id="stream_privacy-liveessentialscreateeventrequeststreamprivacymodelslive-essentials-create-event-request-stream-privacyts"></a>

##### stream_title: `string`<a id="stream_title-string"></a>

The title of the next video to be streamed to the event. This parameter is required when **automatically_title_stream** is `false`.

##### time_zone: `string`<a id="time_zone-string"></a>

The time zone used in resolving the timestamps that are included in automatically generated video titles.

#### 🔄 Return<a id="🔄-return"></a>

[LiveEventRecurring](./models/live-event-recurring.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live_events` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEssentials.createEventForUser`<a id="vimeoliveessentialscreateeventforuser"></a>

This method creates a new event for the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEventForUserResponse =
  await vimeo.liveEssentials.createEventForUser({
    userId: 152184,
    title: "Live Content",
    auto_cc_enabled: true,
    auto_cc_keywords: "commonly-used words,phrases,technical terms",
    auto_cc_lang: "en-US",
    automatically_title_stream: true,
    chat_enabled: true,
    dvr: true,
    folder_uri: "/users/67890/folder/12345",
    playlist_sort: "added_first",
    scheduled_playback: false,
    stream_description: "In this episode, we interview a surprise guest",
    stream_password: "hunter1",
    stream_title: "Special Feature",
    time_zone: "America/New_York",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

The title of the event. If **automatically_title_stream** is `true`, this value is the base title for videos created by streaming to this event.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### allow_share_link: `boolean`<a id="allow_share_link-boolean"></a>

Whether the share link is usable.

##### auto_cc_enabled: `boolean`<a id="auto_cc_enabled-boolean"></a>

Whether automated closed captions are enabled for the event.

##### auto_cc_keywords: `string`<a id="auto_cc_keywords-string"></a>

A comma-separated list of keywords that improve the quality of the automated closed captions.

##### auto_cc_lang: `string`<a id="auto_cc_lang-string"></a>

The language in which the automated closed captions appear.  Option descriptions:  * `de-DE` - The language is German.  * `en-US` - The language is English.  * `es-ES` - The language is Spanish.  * `fr-FR` - The language is French.  * `pt-BR` - The language is Portuguese. 

##### automatically_title_stream: `boolean`<a id="automatically_title_stream-boolean"></a>

Whether the title for the next video in the event is generated based on the time of the stream and the **title** field of the event.

##### chat_enabled: `boolean`<a id="chat_enabled-boolean"></a>

Whether to display the live chat client on the Vimeo event page.

##### content_rating: `string`[]<a id="content_rating-string"></a>

A list of values describing the content in this event. To return the list of all possible content rating values, use the [`/contentratings`](https://developer.vimeo.com/api/reference/videos#get_content_ratings) endpoint.

##### dvr: `boolean`<a id="dvr-boolean"></a>

Whether the DVR feature is enabled.

##### embed: [`LiveEssentialsCreateEventForUserRequestEmbed`](./models/live-essentials-create-event-for-user-request-embed.ts)<a id="embed-liveessentialscreateeventforuserrequestembedmodelslive-essentials-create-event-for-user-request-embedts"></a>

##### folder_uri: `string`<a id="folder_uri-string"></a>

The URI of the event\\\'s folder.

##### interaction_tools_settings: [`LiveEssentialsCreateEventForUserRequestInteractionToolsSettings`](./models/live-essentials-create-event-for-user-request-interaction-tools-settings.ts)<a id="interaction_tools_settings-liveessentialscreateeventforuserrequestinteractiontoolssettingsmodelslive-essentials-create-event-for-user-request-interaction-tools-settingsts"></a>

##### low_latency: `boolean`<a id="low_latency-boolean"></a>

Whether the event has low-latency streaming enabled.

##### playlist_sort: `string`<a id="playlist_sort-string"></a>

The order in which the videos of the event appear within the event\\\'s playlist.  Option descriptions:  * `added_first` - The most recently added videos appear first.  * `added_last` - The most recently added videos appear last.  * `alphabetical` - The videos appear in alphabetical order.  * `arranged` - The videos appear in the order in which the user has arranged them.  * `comments` - The videos appear in order of number of comments.  * `duration` - The videos appear in order of duration.  * `likes` - The videos appear in order of number of likes.  * `newest` - The newest videos appear first.  * `oldest` - The oldest videos appear first.  * `plays` - The videos appear in order of number of plays. 

##### rtmp_preview: `boolean`<a id="rtmp_preview-boolean"></a>

Whether the event has RTMP preview enabled.

##### schedule: [`LiveEssentialsCreateEventForUserRequestSchedule`](./models/live-essentials-create-event-for-user-request-schedule.ts)<a id="schedule-liveessentialscreateeventforuserrequestschedulemodelslive-essentials-create-event-for-user-request-schedulets"></a>

##### scheduled_playback: `boolean`<a id="scheduled_playback-boolean"></a>

Whether the scheduled playback feature is enabled.

##### stream_description: `string`<a id="stream_description-string"></a>

The description of the next video to be streamed to the event.

##### stream_embed: [`LiveEssentialsCreateEventForUserRequestStreamEmbed`](./models/live-essentials-create-event-for-user-request-stream-embed.ts)<a id="stream_embed-liveessentialscreateeventforuserrequeststreamembedmodelslive-essentials-create-event-for-user-request-stream-embedts"></a>

##### stream_password: `string`<a id="stream_password-string"></a>

The password when **stream_privacy.view** is `password`. Anyone with the password can view the videos generated by streaming to the event.

##### stream_privacy: [`LiveEssentialsCreateEventForUserRequestStreamPrivacy`](./models/live-essentials-create-event-for-user-request-stream-privacy.ts)<a id="stream_privacy-liveessentialscreateeventforuserrequeststreamprivacymodelslive-essentials-create-event-for-user-request-stream-privacyts"></a>

##### stream_title: `string`<a id="stream_title-string"></a>

The title of the next video to be streamed to the event. This parameter is required when **automatically_title_stream** is `false`.

##### time_zone: `string`<a id="time_zone-string"></a>

The time zone used in resolving the timestamps that are included in automatically generated video titles.

#### 🔄 Return<a id="🔄-return"></a>

[LiveEventRecurring](./models/live-event-recurring.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEssentials.createLiveEvent`<a id="vimeoliveessentialscreateliveevent"></a>

This method creates a new event for the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createLiveEventResponse = await vimeo.liveEssentials.createLiveEvent({
  title: "Live Content",
  auto_cc_enabled: true,
  auto_cc_keywords: "commonly-used words,phrases,technical terms",
  auto_cc_lang: "en-US",
  automatically_title_stream: true,
  chat_enabled: true,
  dvr: true,
  folder_uri: "/users/67890/folder/12345",
  playlist_sort: "added_first",
  scheduled_playback: false,
  stream_description: "In this episode, we interview a surprise guest",
  stream_password: "hunter1",
  stream_title: "Special Feature",
  time_zone: "America/New_York",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

The title of the event. If **automatically_title_stream** is `true`, this value is the base title for videos created by streaming to this event.

##### allow_share_link: `boolean`<a id="allow_share_link-boolean"></a>

Whether the share link is usable.

##### auto_cc_enabled: `boolean`<a id="auto_cc_enabled-boolean"></a>

Whether automated closed captions are enabled for the event.

##### auto_cc_keywords: `string`<a id="auto_cc_keywords-string"></a>

A comma-separated list of keywords that improve the quality of the automated closed captions.

##### auto_cc_lang: `string`<a id="auto_cc_lang-string"></a>

The language in which the automated closed captions appear.  Option descriptions:  * `de-DE` - The language is German.  * `en-US` - The language is English.  * `es-ES` - The language is Spanish.  * `fr-FR` - The language is French.  * `pt-BR` - The language is Portuguese. 

##### automatically_title_stream: `boolean`<a id="automatically_title_stream-boolean"></a>

Whether the title for the next video in the event is generated based on the time of the stream and the **title** field of the event.

##### chat_enabled: `boolean`<a id="chat_enabled-boolean"></a>

Whether to display the live chat client on the Vimeo event page.

##### content_rating: `string`[]<a id="content_rating-string"></a>

A list of values describing the content in this event. To return the list of all possible content rating values, use the [`/contentratings`](https://developer.vimeo.com/api/reference/videos#get_content_ratings) endpoint.

##### dvr: `boolean`<a id="dvr-boolean"></a>

Whether the DVR feature is enabled.

##### embed: [`LiveEssentialsCreateLiveEventRequestEmbed`](./models/live-essentials-create-live-event-request-embed.ts)<a id="embed-liveessentialscreateliveeventrequestembedmodelslive-essentials-create-live-event-request-embedts"></a>

##### folder_uri: `string`<a id="folder_uri-string"></a>

The URI of the event\\\'s folder.

##### interaction_tools_settings: [`LiveEssentialsCreateLiveEventRequestInteractionToolsSettings`](./models/live-essentials-create-live-event-request-interaction-tools-settings.ts)<a id="interaction_tools_settings-liveessentialscreateliveeventrequestinteractiontoolssettingsmodelslive-essentials-create-live-event-request-interaction-tools-settingsts"></a>

##### low_latency: `boolean`<a id="low_latency-boolean"></a>

Whether the event has low-latency streaming enabled.

##### playlist_sort: `string`<a id="playlist_sort-string"></a>

The order in which the videos of the event appear within the event\\\'s playlist.  Option descriptions:  * `added_first` - The most recently added videos appear first.  * `added_last` - The most recently added videos appear last.  * `alphabetical` - The videos appear in alphabetical order.  * `arranged` - The videos appear in the order in which the user has arranged them.  * `comments` - The videos appear in order of number of comments.  * `duration` - The videos appear in order of duration.  * `likes` - The videos appear in order of number of likes.  * `newest` - The newest videos appear first.  * `oldest` - The oldest videos appear first.  * `plays` - The videos appear in order of number of plays. 

##### rtmp_preview: `boolean`<a id="rtmp_preview-boolean"></a>

Whether the event has RTMP preview enabled.

##### schedule: [`LiveEssentialsCreateLiveEventRequestSchedule`](./models/live-essentials-create-live-event-request-schedule.ts)<a id="schedule-liveessentialscreateliveeventrequestschedulemodelslive-essentials-create-live-event-request-schedulets"></a>

##### scheduled_playback: `boolean`<a id="scheduled_playback-boolean"></a>

Whether the scheduled playback feature is enabled.

##### stream_description: `string`<a id="stream_description-string"></a>

The description of the next video to be streamed to the event.

##### stream_embed: [`LiveEssentialsCreateLiveEventRequestStreamEmbed`](./models/live-essentials-create-live-event-request-stream-embed.ts)<a id="stream_embed-liveessentialscreateliveeventrequeststreamembedmodelslive-essentials-create-live-event-request-stream-embedts"></a>

##### stream_password: `string`<a id="stream_password-string"></a>

The password when **stream_privacy.view** is `password`. Anyone with the password can view the videos generated by streaming to the event.

##### stream_privacy: [`LiveEssentialsCreateLiveEventRequestStreamPrivacy`](./models/live-essentials-create-live-event-request-stream-privacy.ts)<a id="stream_privacy-liveessentialscreateliveeventrequeststreamprivacymodelslive-essentials-create-live-event-request-stream-privacyts"></a>

##### stream_title: `string`<a id="stream_title-string"></a>

The title of the next video to be streamed to the event. This parameter is required when **automatically_title_stream** is `false`.

##### time_zone: `string`<a id="time_zone-string"></a>

The time zone used in resolving the timestamps that are included in automatically generated video titles.

#### 🔄 Return<a id="🔄-return"></a>

[LiveEventRecurring](./models/live-event-recurring.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/live_events` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEssentials.deleteMultipleEvents`<a id="vimeoliveessentialsdeletemultipleevents"></a>

This method deletes multiple events belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteMultipleEventsResponse =
  await vimeo.liveEssentials.deleteMultipleEvents({
    password: "hunter1",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### password: `string`<a id="password-string"></a>

The user’s password.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live_events` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEssentials.deleteMultipleEvents_0`<a id="vimeoliveessentialsdeletemultipleevents_0"></a>

This method deletes multiple events belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteMultipleEvents_0Response =
  await vimeo.liveEssentials.deleteMultipleEvents_0({
    password: "hunter1",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### password: `string`<a id="password-string"></a>

The user’s password.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/live_events` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEssentials.deleteMultipleEvents_1`<a id="vimeoliveessentialsdeletemultipleevents_1"></a>

This method deletes multiple events belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteMultipleEvents_1Response =
  await vimeo.liveEssentials.deleteMultipleEvents_1({
    userId: 152184,
    password: "hunter1",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### password: `string`<a id="password-string"></a>

The user’s password.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEssentials.deleteSingleEvent`<a id="vimeoliveessentialsdeletesingleevent"></a>

This method deletes a single event belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSingleEventResponse = await vimeo.liveEssentials.deleteSingleEvent({
  liveEventId: 3.14,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/live_events/{live_event_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEssentials.deleteSpecificEvent`<a id="vimeoliveessentialsdeletespecificevent"></a>

This method deletes a single event belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSpecificEventResponse =
  await vimeo.liveEssentials.deleteSpecificEvent({
    liveEventId: 3.14,
    userId: 3.14,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events/{live_event_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEssentials.deleteSpecificLiveEvent`<a id="vimeoliveessentialsdeletespecificliveevent"></a>

This method deletes a single event belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSpecificLiveEventResponse =
  await vimeo.liveEssentials.deleteSpecificLiveEvent({
    liveEventId: 3.14,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live_events/{live_event_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEssentials.getAllUserLiveEvents`<a id="vimeoliveessentialsgetalluserliveevents"></a>

The method returns every event belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllUserLiveEventsResponse =
  await vimeo.liveEssentials.getAllUserLiveEvents({
    direction: "asc",
    filter: "not_in_folder",
    page: 1,
    perPage: 10,
    query: "Stop motion",
    sort: "alphabetical",
    type: "recurring",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'not_in_folder' | 'not_in_showcase' | 'not_in_webinar'`<a id="filter-not_in_folder--not_in_showcase--not_in_webinar"></a>

The attribute by which to filter the results.  Option descriptions:  * `not_in_folder` - Show only events that aren\'t in a folder.  * `not_in_showcase` - Show only events that aren\'t in a showcase.  * `not_in_webinar` - Show only events that aren\'t in a webinar. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date'`<a id="sort-alphabetical--date"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by creation date. 

##### type: `'all' | 'one_time' | 'recurring'`<a id="type-all--one_time--recurring"></a>

The type of event to return.  Option descriptions:  * `all` - Return all events.  * `one_time` - Return one-time events only.  * `recurring` - Return recurring events only. 

#### 🔄 Return<a id="🔄-return"></a>

[LiveEvent](./models/live-event.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/live_events` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEssentials.getEventById`<a id="vimeoliveessentialsgeteventbyid"></a>

This method returns a single event belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEventByIdResponse = await vimeo.liveEssentials.getEventById({
  liveEventId: 12345,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### password: `string`<a id="password-string"></a>

The password of the event when the privacy is set to `password`.

#### 🔄 Return<a id="🔄-return"></a>

[LiveEventRecurring](./models/live-event-recurring.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live_events/{live_event_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEssentials.getEventById_0`<a id="vimeoliveessentialsgeteventbyid_0"></a>

This method returns a single event belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEventById_0Response = await vimeo.liveEssentials.getEventById_0({
  liveEventId: 12345,
  userId: 152184,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### password: `string`<a id="password-string"></a>

The password of the event when the privacy is set to `password`.

#### 🔄 Return<a id="🔄-return"></a>

[LiveEventRecurring](./models/live-event-recurring.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events/{live_event_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEssentials.getSpecificLiveEvent`<a id="vimeoliveessentialsgetspecificliveevent"></a>

This method returns a single event belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificLiveEventResponse =
  await vimeo.liveEssentials.getSpecificLiveEvent({
    liveEventId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### password: `string`<a id="password-string"></a>

The password of the event when the privacy is set to `password`.

#### 🔄 Return<a id="🔄-return"></a>

[LiveEventRecurring](./models/live-event-recurring.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/live_events/{live_event_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEssentials.getUserLiveEvents`<a id="vimeoliveessentialsgetuserliveevents"></a>

The method returns every event belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserLiveEventsResponse = await vimeo.liveEssentials.getUserLiveEvents({
  direction: "asc",
  filter: "not_in_folder",
  page: 1,
  perPage: 10,
  query: "Stop motion",
  sort: "alphabetical",
  type: "recurring",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'not_in_folder' | 'not_in_showcase' | 'not_in_webinar'`<a id="filter-not_in_folder--not_in_showcase--not_in_webinar"></a>

The attribute by which to filter the results.  Option descriptions:  * `not_in_folder` - Show only events that aren\'t in a folder.  * `not_in_showcase` - Show only events that aren\'t in a showcase.  * `not_in_webinar` - Show only events that aren\'t in a webinar. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date'`<a id="sort-alphabetical--date"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by creation date. 

##### type: `'all' | 'one_time' | 'recurring'`<a id="type-all--one_time--recurring"></a>

The type of event to return.  Option descriptions:  * `all` - Return all events.  * `one_time` - Return one-time events only.  * `recurring` - Return recurring events only. 

#### 🔄 Return<a id="🔄-return"></a>

[LiveEvent](./models/live-event.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live_events` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEssentials.getUserLiveEvents_0`<a id="vimeoliveessentialsgetuserliveevents_0"></a>

The method returns every event belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserLiveEvents_0Response =
  await vimeo.liveEssentials.getUserLiveEvents_0({
    userId: 152184,
    direction: "asc",
    filter: "not_in_folder",
    page: 1,
    perPage: 10,
    query: "Stop motion",
    sort: "alphabetical",
    type: "recurring",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'not_in_folder' | 'not_in_showcase' | 'not_in_webinar'`<a id="filter-not_in_folder--not_in_showcase--not_in_webinar"></a>

The attribute by which to filter the results.  Option descriptions:  * `not_in_folder` - Show only events that aren\'t in a folder.  * `not_in_showcase` - Show only events that aren\'t in a showcase.  * `not_in_webinar` - Show only events that aren\'t in a webinar. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date'`<a id="sort-alphabetical--date"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by creation date. 

##### type: `'all' | 'one_time' | 'recurring'`<a id="type-all--one_time--recurring"></a>

The type of event to return.  Option descriptions:  * `all` - Return all events.  * `one_time` - Return one-time events only.  * `recurring` - Return recurring events only. 

#### 🔄 Return<a id="🔄-return"></a>

[LiveEvent](./models/live-event.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEssentials.updateEventBelongingToAuthenticatedUser`<a id="vimeoliveessentialsupdateeventbelongingtoauthenticateduser"></a>

This method updates an event belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEventBelongingToAuthenticatedUserResponse =
  await vimeo.liveEssentials.updateEventBelongingToAuthenticatedUser({
    liveEventId: 12345,
    title: "Live Content",
    auto_cc_enabled: false,
    auto_cc_language: "en-US",
    automatically_title_stream: true,
    chat_enabled: true,
    dvr: true,
    playlist_sort: "added_first",
    scheduled_playback: false,
    stream_description: "In this episode, we interview a surprise guest",
    stream_mode: "live",
    stream_password: "hunter1",
    stream_title: "Special Feature",
    time_zone: "America/New_York",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### title: `string`<a id="title-string"></a>

The title of the event. If **automatically_title_stream** is `true`, this value is the base title for videos created by streaming to this event.

##### auto_cc_enabled: `boolean`<a id="auto_cc_enabled-boolean"></a>

Whether automated closed captions are enabled for the event.

##### auto_cc_keywords: `string`<a id="auto_cc_keywords-string"></a>

A comma-separated list of keywords for enhancing the speech detection of automated closed captions.

##### auto_cc_language: `string`<a id="auto_cc_language-string"></a>

The language of the automated closed captions.  Option descriptions:  * `de-DE` - The language is German.  * `en-US` - The language is English.  * `es-ES` - The language is Spanish.  * `fr-FR` - The language is French.  * `pt-BR` - The language is Portuguese. 

##### automatically_title_stream: `boolean`<a id="automatically_title_stream-boolean"></a>

Whether the title for the next video in the event is generated based on the time of the stream and the **title** field of the event.

##### chat_enabled: `boolean`<a id="chat_enabled-boolean"></a>

Whether to display the live chat client on the Vimeo event page.

##### content_rating: `string`[]<a id="content_rating-string"></a>

A list of values describing the content in this event. To return the list of all possible content rating values, use the [`/contentratings`](https://developer.vimeo.com/api/reference/videos#get_content_ratings) endpoint.

##### dvr: `boolean`<a id="dvr-boolean"></a>

Whether the DVR feature is enabled.

##### embed: [`LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequestEmbed`](./models/live-essentials-update-event-belonging-to-authenticated-user-request-embed.ts)<a id="embed-liveessentialsupdateeventbelongingtoauthenticateduserrequestembedmodelslive-essentials-update-event-belonging-to-authenticated-user-request-embedts"></a>

##### interaction_tools_settings: [`LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequestInteractionToolsSettings`](./models/live-essentials-update-event-belonging-to-authenticated-user-request-interaction-tools-settings.ts)<a id="interaction_tools_settings-liveessentialsupdateeventbelongingtoauthenticateduserrequestinteractiontoolssettingsmodelslive-essentials-update-event-belonging-to-authenticated-user-request-interaction-tools-settingsts"></a>

##### playlist_sort: `string`<a id="playlist_sort-string"></a>

The order in which the videos of the event appear within the event\\\'s playlist.  Option descriptions:  * `added_first` - The most recently added videos appear first.  * `added_last` - The most recently added videos appear last.  * `alphabetical` - The videos appear in alphabetical order.  * `arranged` - The videos appear in the order in which the user has arranged them.  * `comments` - The videos appear in order of number of comments.  * `duration` - The videos appear in order of duration.  * `likes` - The videos appear in order of number of likes.  * `newest` - The newest videos appear first.  * `oldest` - The oldest videos appear first.  * `plays` - The videos appear in order of number of plays. 

##### schedule: [`LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequestSchedule`](./models/live-essentials-update-event-belonging-to-authenticated-user-request-schedule.ts)<a id="schedule-liveessentialsupdateeventbelongingtoauthenticateduserrequestschedulemodelslive-essentials-update-event-belonging-to-authenticated-user-request-schedulets"></a>

##### scheduled_playback: `boolean`<a id="scheduled_playback-boolean"></a>

Whether the scheduled playback feature is enabled.

##### stream_description: `string`<a id="stream_description-string"></a>

The description of the next video to be streamed to the event.

##### stream_embed: [`LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequestStreamEmbed`](./models/live-essentials-update-event-belonging-to-authenticated-user-request-stream-embed.ts)<a id="stream_embed-liveessentialsupdateeventbelongingtoauthenticateduserrequeststreamembedmodelslive-essentials-update-event-belonging-to-authenticated-user-request-stream-embedts"></a>

##### stream_mode: `string`<a id="stream_mode-string"></a>

The stream mode of the event.  Option descriptions:  * `live` - The stream is live playback.  * `record` - The stream is in record mode.  * `simulive` - The stream is scheduled media playback. 

##### stream_password: `string`<a id="stream_password-string"></a>

The password when **stream_privacy.view** is `password`. Anyone with the password can view the videos generated by streaming to the event.

##### stream_privacy: [`LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequestStreamPrivacy`](./models/live-essentials-update-event-belonging-to-authenticated-user-request-stream-privacy.ts)<a id="stream_privacy-liveessentialsupdateeventbelongingtoauthenticateduserrequeststreamprivacymodelslive-essentials-update-event-belonging-to-authenticated-user-request-stream-privacyts"></a>

##### stream_title: `string`<a id="stream_title-string"></a>

The title of the next video to be streamed to the event. This parameter is required when **automatically_title_stream** is `false`.

##### time_zone: `string`<a id="time_zone-string"></a>

The time zone used in resolving the timestamps that are included in automatically generated video titles.

#### 🔄 Return<a id="🔄-return"></a>

[LiveEventRecurring](./models/live-event-recurring.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live_events/{live_event_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEssentials.updateEventBelongingToAuthenticatedUser_0`<a id="vimeoliveessentialsupdateeventbelongingtoauthenticateduser_0"></a>

This method updates an event belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEventBelongingToAuthenticatedUser_0Response =
  await vimeo.liveEssentials.updateEventBelongingToAuthenticatedUser_0({
    liveEventId: 12345,
    title: "Live Content",
    auto_cc_enabled: false,
    auto_cc_language: "en-US",
    automatically_title_stream: true,
    chat_enabled: true,
    dvr: true,
    playlist_sort: "added_first",
    scheduled_playback: false,
    stream_description: "In this episode, we interview a surprise guest",
    stream_mode: "live",
    stream_password: "hunter1",
    stream_title: "Special Feature",
    time_zone: "America/New_York",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### title: `string`<a id="title-string"></a>

The title of the event. If **automatically_title_stream** is `true`, this value is the base title for videos created by streaming to this event.

##### auto_cc_enabled: `boolean`<a id="auto_cc_enabled-boolean"></a>

Whether automated closed captions are enabled for the event.

##### auto_cc_keywords: `string`<a id="auto_cc_keywords-string"></a>

A comma-separated list of keywords for enhancing the speech detection of automated closed captions.

##### auto_cc_language: `string`<a id="auto_cc_language-string"></a>

The language of the automated closed captions.  Option descriptions:  * `de-DE` - The language is German.  * `en-US` - The language is English.  * `es-ES` - The language is Spanish.  * `fr-FR` - The language is French.  * `pt-BR` - The language is Portuguese. 

##### automatically_title_stream: `boolean`<a id="automatically_title_stream-boolean"></a>

Whether the title for the next video in the event is generated based on the time of the stream and the **title** field of the event.

##### chat_enabled: `boolean`<a id="chat_enabled-boolean"></a>

Whether to display the live chat client on the Vimeo event page.

##### content_rating: `string`[]<a id="content_rating-string"></a>

A list of values describing the content in this event. To return the list of all possible content rating values, use the [`/contentratings`](https://developer.vimeo.com/api/reference/videos#get_content_ratings) endpoint.

##### dvr: `boolean`<a id="dvr-boolean"></a>

Whether the DVR feature is enabled.

##### embed: [`LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest1Embed`](./models/live-essentials-update-event-belonging-to-authenticated-user-request1-embed.ts)<a id="embed-liveessentialsupdateeventbelongingtoauthenticateduserrequest1embedmodelslive-essentials-update-event-belonging-to-authenticated-user-request1-embedts"></a>

##### interaction_tools_settings: [`LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest1InteractionToolsSettings`](./models/live-essentials-update-event-belonging-to-authenticated-user-request1-interaction-tools-settings.ts)<a id="interaction_tools_settings-liveessentialsupdateeventbelongingtoauthenticateduserrequest1interactiontoolssettingsmodelslive-essentials-update-event-belonging-to-authenticated-user-request1-interaction-tools-settingsts"></a>

##### playlist_sort: `string`<a id="playlist_sort-string"></a>

The order in which the videos of the event appear within the event\\\'s playlist.  Option descriptions:  * `added_first` - The most recently added videos appear first.  * `added_last` - The most recently added videos appear last.  * `alphabetical` - The videos appear in alphabetical order.  * `arranged` - The videos appear in the order in which the user has arranged them.  * `comments` - The videos appear in order of number of comments.  * `duration` - The videos appear in order of duration.  * `likes` - The videos appear in order of number of likes.  * `newest` - The newest videos appear first.  * `oldest` - The oldest videos appear first.  * `plays` - The videos appear in order of number of plays. 

##### schedule: [`LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest1Schedule`](./models/live-essentials-update-event-belonging-to-authenticated-user-request1-schedule.ts)<a id="schedule-liveessentialsupdateeventbelongingtoauthenticateduserrequest1schedulemodelslive-essentials-update-event-belonging-to-authenticated-user-request1-schedulets"></a>

##### scheduled_playback: `boolean`<a id="scheduled_playback-boolean"></a>

Whether the scheduled playback feature is enabled.

##### stream_description: `string`<a id="stream_description-string"></a>

The description of the next video to be streamed to the event.

##### stream_embed: [`LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest1StreamEmbed`](./models/live-essentials-update-event-belonging-to-authenticated-user-request1-stream-embed.ts)<a id="stream_embed-liveessentialsupdateeventbelongingtoauthenticateduserrequest1streamembedmodelslive-essentials-update-event-belonging-to-authenticated-user-request1-stream-embedts"></a>

##### stream_mode: `string`<a id="stream_mode-string"></a>

The stream mode of the event.  Option descriptions:  * `live` - The stream is live playback.  * `record` - The stream is in record mode.  * `simulive` - The stream is scheduled media playback. 

##### stream_password: `string`<a id="stream_password-string"></a>

The password when **stream_privacy.view** is `password`. Anyone with the password can view the videos generated by streaming to the event.

##### stream_privacy: [`LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest1StreamPrivacy`](./models/live-essentials-update-event-belonging-to-authenticated-user-request1-stream-privacy.ts)<a id="stream_privacy-liveessentialsupdateeventbelongingtoauthenticateduserrequest1streamprivacymodelslive-essentials-update-event-belonging-to-authenticated-user-request1-stream-privacyts"></a>

##### stream_title: `string`<a id="stream_title-string"></a>

The title of the next video to be streamed to the event. This parameter is required when **automatically_title_stream** is `false`.

##### time_zone: `string`<a id="time_zone-string"></a>

The time zone used in resolving the timestamps that are included in automatically generated video titles.

#### 🔄 Return<a id="🔄-return"></a>

[LiveEventRecurring](./models/live-event-recurring.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/live_events/{live_event_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEssentials.updateEventBelongingToAuthenticatedUser_1`<a id="vimeoliveessentialsupdateeventbelongingtoauthenticateduser_1"></a>

This method updates an event belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEventBelongingToAuthenticatedUser_1Response =
  await vimeo.liveEssentials.updateEventBelongingToAuthenticatedUser_1({
    liveEventId: 12345,
    userId: 152184,
    title: "Live Content",
    auto_cc_enabled: false,
    auto_cc_language: "en-US",
    automatically_title_stream: true,
    chat_enabled: true,
    dvr: true,
    playlist_sort: "added_first",
    scheduled_playback: false,
    stream_description: "In this episode, we interview a surprise guest",
    stream_mode: "live",
    stream_password: "hunter1",
    stream_title: "Special Feature",
    time_zone: "America/New_York",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### title: `string`<a id="title-string"></a>

The title of the event. If **automatically_title_stream** is `true`, this value is the base title for videos created by streaming to this event.

##### auto_cc_enabled: `boolean`<a id="auto_cc_enabled-boolean"></a>

Whether automated closed captions are enabled for the event.

##### auto_cc_keywords: `string`<a id="auto_cc_keywords-string"></a>

A comma-separated list of keywords for enhancing the speech detection of automated closed captions.

##### auto_cc_language: `string`<a id="auto_cc_language-string"></a>

The language of the automated closed captions.  Option descriptions:  * `de-DE` - The language is German.  * `en-US` - The language is English.  * `es-ES` - The language is Spanish.  * `fr-FR` - The language is French.  * `pt-BR` - The language is Portuguese. 

##### automatically_title_stream: `boolean`<a id="automatically_title_stream-boolean"></a>

Whether the title for the next video in the event is generated based on the time of the stream and the **title** field of the event.

##### chat_enabled: `boolean`<a id="chat_enabled-boolean"></a>

Whether to display the live chat client on the Vimeo event page.

##### content_rating: `string`[]<a id="content_rating-string"></a>

A list of values describing the content in this event. To return the list of all possible content rating values, use the [`/contentratings`](https://developer.vimeo.com/api/reference/videos#get_content_ratings) endpoint.

##### dvr: `boolean`<a id="dvr-boolean"></a>

Whether the DVR feature is enabled.

##### embed: [`LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest2Embed`](./models/live-essentials-update-event-belonging-to-authenticated-user-request2-embed.ts)<a id="embed-liveessentialsupdateeventbelongingtoauthenticateduserrequest2embedmodelslive-essentials-update-event-belonging-to-authenticated-user-request2-embedts"></a>

##### interaction_tools_settings: [`LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest2InteractionToolsSettings`](./models/live-essentials-update-event-belonging-to-authenticated-user-request2-interaction-tools-settings.ts)<a id="interaction_tools_settings-liveessentialsupdateeventbelongingtoauthenticateduserrequest2interactiontoolssettingsmodelslive-essentials-update-event-belonging-to-authenticated-user-request2-interaction-tools-settingsts"></a>

##### playlist_sort: `string`<a id="playlist_sort-string"></a>

The order in which the videos of the event appear within the event\\\'s playlist.  Option descriptions:  * `added_first` - The most recently added videos appear first.  * `added_last` - The most recently added videos appear last.  * `alphabetical` - The videos appear in alphabetical order.  * `arranged` - The videos appear in the order in which the user has arranged them.  * `comments` - The videos appear in order of number of comments.  * `duration` - The videos appear in order of duration.  * `likes` - The videos appear in order of number of likes.  * `newest` - The newest videos appear first.  * `oldest` - The oldest videos appear first.  * `plays` - The videos appear in order of number of plays. 

##### schedule: [`LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest2Schedule`](./models/live-essentials-update-event-belonging-to-authenticated-user-request2-schedule.ts)<a id="schedule-liveessentialsupdateeventbelongingtoauthenticateduserrequest2schedulemodelslive-essentials-update-event-belonging-to-authenticated-user-request2-schedulets"></a>

##### scheduled_playback: `boolean`<a id="scheduled_playback-boolean"></a>

Whether the scheduled playback feature is enabled.

##### stream_description: `string`<a id="stream_description-string"></a>

The description of the next video to be streamed to the event.

##### stream_embed: [`LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest2StreamEmbed`](./models/live-essentials-update-event-belonging-to-authenticated-user-request2-stream-embed.ts)<a id="stream_embed-liveessentialsupdateeventbelongingtoauthenticateduserrequest2streamembedmodelslive-essentials-update-event-belonging-to-authenticated-user-request2-stream-embedts"></a>

##### stream_mode: `string`<a id="stream_mode-string"></a>

The stream mode of the event.  Option descriptions:  * `live` - The stream is live playback.  * `record` - The stream is in record mode.  * `simulive` - The stream is scheduled media playback. 

##### stream_password: `string`<a id="stream_password-string"></a>

The password when **stream_privacy.view** is `password`. Anyone with the password can view the videos generated by streaming to the event.

##### stream_privacy: [`LiveEssentialsUpdateEventBelongingToAuthenticatedUserRequest2StreamPrivacy`](./models/live-essentials-update-event-belonging-to-authenticated-user-request2-stream-privacy.ts)<a id="stream_privacy-liveessentialsupdateeventbelongingtoauthenticateduserrequest2streamprivacymodelslive-essentials-update-event-belonging-to-authenticated-user-request2-stream-privacyts"></a>

##### stream_title: `string`<a id="stream_title-string"></a>

The title of the next video to be streamed to the event. This parameter is required when **automatically_title_stream** is `false`.

##### time_zone: `string`<a id="time_zone-string"></a>

The time zone used in resolving the timestamps that are included in automatically generated video titles.

#### 🔄 Return<a id="🔄-return"></a>

[LiveEventRecurring](./models/live-event-recurring.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events/{live_event_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventM3u8Playback.getUrl`<a id="vimeoliveeventm3u8playbackgeturl"></a>

This method returns an M3U8 playback URL for the specified event stream. You should use this endpoint only in conjunction with our recommended procedure for playing events via HLS. For more information, see our [HLS guide](https://developer.vimeo.com/api/live/playback).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUrlResponse = await vimeo.liveEventM3u8Playback.getUrl({
  liveEventId: 12345,
  maxFpsFhd: 30,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### maxFpsFhd: `number`<a id="maxfpsfhd-number"></a>

The requested maximum frames per second.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/live_events/{live_event_id}/m3u8_playback` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventM3u8Playback.getUrlForEventStream`<a id="vimeoliveeventm3u8playbackgeturlforeventstream"></a>

This method returns an M3U8 playback URL for the specified event stream. You should use this endpoint only in conjunction with our recommended procedure for playing events via HLS. For more information, see our [HLS guide](https://developer.vimeo.com/api/live/playback).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUrlForEventStreamResponse =
  await vimeo.liveEventM3u8Playback.getUrlForEventStream({
    liveEventId: 12345,
    userId: 152184,
    maxFpsFhd: 30,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### maxFpsFhd: `number`<a id="maxfpsfhd-number"></a>

The requested maximum frames per second.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events/{live_event_id}/m3u8_playback` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventActivation.createRtmpLinks`<a id="vimeoliveeventactivationcreatertmplinks"></a>

This method creates the necessary RTMP links for the specified event. Begin streaming to these links to trigger the event on Vimeo. The authenticated user must be the owner of the event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createRtmpLinksResponse = await vimeo.liveEventActivation.createRtmpLinks(
  {
    liveEventId: 12345,
    cloud_composing_streaming: true,
    streaming_start_requested: true,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### cloud_composing_streaming: `boolean`<a id="cloud_composing_streaming-boolean"></a>

Whether the stream activates from the cloud composer. _This field is deprecated._

##### streaming_start_requested: `boolean`<a id="streaming_start_requested-boolean"></a>

Whether the stream activates from the cloud composer.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live_events/{live_event_id}/activate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventActivation.createRtmpLinks_0`<a id="vimeoliveeventactivationcreatertmplinks_0"></a>

This method creates the necessary RTMP links for the specified event. Begin streaming to these links to trigger the event on Vimeo. The authenticated user must be the owner of the event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createRtmpLinks_0Response =
  await vimeo.liveEventActivation.createRtmpLinks_0({
    liveEventId: 12345,
    cloud_composing_streaming: true,
    streaming_start_requested: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### cloud_composing_streaming: `boolean`<a id="cloud_composing_streaming-boolean"></a>

Whether the stream activates from the cloud composer. _This field is deprecated._

##### streaming_start_requested: `boolean`<a id="streaming_start_requested-boolean"></a>

Whether the stream activates from the cloud composer.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/live_events/{live_event_id}/activate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventActivation.createRtmpLinks_1`<a id="vimeoliveeventactivationcreatertmplinks_1"></a>

This method creates the necessary RTMP links for the specified event. Begin streaming to these links to trigger the event on Vimeo. The authenticated user must be the owner of the event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createRtmpLinks_1Response =
  await vimeo.liveEventActivation.createRtmpLinks_1({
    liveEventId: 12345,
    userId: 152184,
    cloud_composing_streaming: true,
    streaming_start_requested: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### cloud_composing_streaming: `boolean`<a id="cloud_composing_streaming-boolean"></a>

Whether the stream activates from the cloud composer. _This field is deprecated._

##### streaming_start_requested: `boolean`<a id="streaming_start_requested-boolean"></a>

Whether the stream activates from the cloud composer.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events/{live_event_id}/activate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventAutomatedClosedCaptions.editPreference`<a id="vimeoliveeventautomatedclosedcaptionseditpreference"></a>

This method edits the automated closed captions preference for the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editPreferenceResponse =
  await vimeo.liveEventAutomatedClosedCaptions.editPreference({
    liveEventId: 12345,
    auto_cc_enabled: true,
    auto_cc_keywords: "commonly-used words,phrases,technical terms",
    auto_cc_lang: "en-US",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### auto_cc_enabled: `boolean`<a id="auto_cc_enabled-boolean"></a>

Whether automated closed captions are enabled for the event.

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### auto_cc_keywords: `string`<a id="auto_cc_keywords-string"></a>

A comma-separated list of keywords that improve the quality of the automated closed captions.

##### auto_cc_lang: `string`<a id="auto_cc_lang-string"></a>

The language in which the automated closed captions appear.  Option descriptions:  * `de-DE` - The language is German.  * `en-US` - The language is English.  * `es-ES` - The language is Spanish.  * `fr-FR` - The language is French.  * `pt-BR` - The language is Portuguese. 

#### 🔄 Return<a id="🔄-return"></a>

[LiveEventAutomatedClosedCaptions](./models/live-event-automated-closed-captions.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live_events/{live_event_id}/auto_cc` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventAutomatedClosedCaptions.editPreferenceForEvent`<a id="vimeoliveeventautomatedclosedcaptionseditpreferenceforevent"></a>

This method edits the automated closed captions preference for the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editPreferenceForEventResponse =
  await vimeo.liveEventAutomatedClosedCaptions.editPreferenceForEvent({
    liveEventId: 12345,
    auto_cc_enabled: true,
    auto_cc_keywords: "commonly-used words,phrases,technical terms",
    auto_cc_lang: "en-US",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### auto_cc_enabled: `boolean`<a id="auto_cc_enabled-boolean"></a>

Whether automated closed captions are enabled for the event.

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### auto_cc_keywords: `string`<a id="auto_cc_keywords-string"></a>

A comma-separated list of keywords that improve the quality of the automated closed captions.

##### auto_cc_lang: `string`<a id="auto_cc_lang-string"></a>

The language in which the automated closed captions appear.  Option descriptions:  * `de-DE` - The language is German.  * `en-US` - The language is English.  * `es-ES` - The language is Spanish.  * `fr-FR` - The language is French.  * `pt-BR` - The language is Portuguese. 

#### 🔄 Return<a id="🔄-return"></a>

[LiveEventAutomatedClosedCaptions](./models/live-event-automated-closed-captions.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/live_events/{live_event_id}/auto_cc` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventAutomatedClosedCaptions.editPreferenceForEvent_0`<a id="vimeoliveeventautomatedclosedcaptionseditpreferenceforevent_0"></a>

This method edits the automated closed captions preference for the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editPreferenceForEvent_0Response =
  await vimeo.liveEventAutomatedClosedCaptions.editPreferenceForEvent_0({
    liveEventId: 12345,
    userId: 152184,
    auto_cc_enabled: true,
    auto_cc_keywords: "commonly-used words,phrases,technical terms",
    auto_cc_lang: "en-US",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### auto_cc_enabled: `boolean`<a id="auto_cc_enabled-boolean"></a>

Whether automated closed captions are enabled for the event.

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### auto_cc_keywords: `string`<a id="auto_cc_keywords-string"></a>

A comma-separated list of keywords that improve the quality of the automated closed captions.

##### auto_cc_lang: `string`<a id="auto_cc_lang-string"></a>

The language in which the automated closed captions appear.  Option descriptions:  * `de-DE` - The language is German.  * `en-US` - The language is English.  * `es-ES` - The language is Spanish.  * `fr-FR` - The language is French.  * `pt-BR` - The language is Portuguese. 

#### 🔄 Return<a id="🔄-return"></a>

[LiveEventAutomatedClosedCaptions](./models/live-event-automated-closed-captions.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events/{live_event_id}/auto_cc` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventDestinations.createDestination`<a id="vimeoliveeventdestinationscreatedestination"></a>

This method creates a destination for the specified event. The authenticated user must be the owner of the event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createDestinationResponse =
  await vimeo.liveEventDestinations.createDestination({
    liveEventId: 12345,
    display_name: "My channel",
    is_enabled: true,
    privacy: "public",
    provider_destination_id: "bda55c6b3ba4",
    provider_video_id: "6817807391346708000",
    scheduled_at: 1625754461,
    service_name: "youtube",
    stream_key: "da056692-ba63-4749-a6eb-a476a22b3acd",
    stream_url: "rtmp://mycooldomain.com/live",
    type: "channel",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### display_name: `string`<a id="display_name-string"></a>

The title to display for the simulcast.

##### service_name: `string`<a id="service_name-string"></a>

The service to simulcast to.  Option descriptions:  * `custom_rtmp` - Simulcast to a custom service.  * `facebook` - Simulcast to Facebook Live.  * `linkedin` - Simulcast to LinkedIn Live.  * `youtube` - Simulcast to YouTube Live. 

##### type: `string`<a id="type-string"></a>

The type of the simulcast destination.  Option descriptions:  * `channel` - The destination is a YouTube channel.  * `custom` - The destination is custom.  * `organization` - The destination is a LinkedIn organization.  * `page` - The destination is a Facebook page.  * `profile` - The destination is a Facebook or LinkedIn profile. 

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### is_enabled: `boolean`<a id="is_enabled-boolean"></a>

Whether the destination is enabled for simulcasting.

##### privacy: `string`<a id="privacy-string"></a>

The privacy setting of the destination. Be sure to choose a value that corresponds to your service.  Option descriptions:  * `CONNECTIONS` - The privacy setting is `CONNECTIONS` for LinkedIn.  * `PUBLIC` - The privacy setting is `PUBLIC` for LinkedIn.  * `all_friends` - The privacy setting is `all_friends` for Facebook.  * `everyone` - The privacy setting is `everyone` for Facebook.  * `private` - The privacy setting is `private` for YouTube.  * `public` - The privacy setting is `public` for YouTube.  * `self` - The privacy setting is `self` for Facebook.  * `unlisted` - The privacy setting is `unlisted` for YouTube. 

##### provider_destination_id: `string`<a id="provider_destination_id-string"></a>

The ID of the destination on the specified service, such as the YouTube channel ID or the Facebook page ID.

##### provider_video_id: `string`<a id="provider_video_id-string"></a>

The ID of the scheduled video.

##### scheduled_at: `number`<a id="scheduled_at-number"></a>

The time in Unix timestamp format when live streaming is scheduled to start.

##### stream_key: `string`<a id="stream_key-string"></a>

The RTMP stream key.

##### stream_url: `string`<a id="stream_url-string"></a>

The RTMP URL for receiving the video stream.

#### 🔄 Return<a id="🔄-return"></a>

[LiveEventDestination](./models/live-event-destination.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/live_events/{live_event_id}/destinations` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventDestinations.createEventDestination`<a id="vimeoliveeventdestinationscreateeventdestination"></a>

This method creates a destination for the specified event. The authenticated user must be the owner of the event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEventDestinationResponse =
  await vimeo.liveEventDestinations.createEventDestination({
    liveEventId: 12345,
    userId: 152184,
    display_name: "My channel",
    is_enabled: true,
    privacy: "public",
    provider_destination_id: "bda55c6b3ba4",
    provider_video_id: "6817807391346708000",
    scheduled_at: 1625754461,
    service_name: "youtube",
    stream_key: "da056692-ba63-4749-a6eb-a476a22b3acd",
    stream_url: "rtmp://mycooldomain.com/live",
    type: "channel",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### display_name: `string`<a id="display_name-string"></a>

The title to display for the simulcast.

##### service_name: `string`<a id="service_name-string"></a>

The service to simulcast to.  Option descriptions:  * `custom_rtmp` - Simulcast to a custom service.  * `facebook` - Simulcast to Facebook Live.  * `linkedin` - Simulcast to LinkedIn Live.  * `youtube` - Simulcast to YouTube Live. 

##### type: `string`<a id="type-string"></a>

The type of the simulcast destination.  Option descriptions:  * `channel` - The destination is a YouTube channel.  * `custom` - The destination is custom.  * `organization` - The destination is a LinkedIn organization.  * `page` - The destination is a Facebook page.  * `profile` - The destination is a Facebook or LinkedIn profile. 

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### is_enabled: `boolean`<a id="is_enabled-boolean"></a>

Whether the destination is enabled for simulcasting.

##### privacy: `string`<a id="privacy-string"></a>

The privacy setting of the destination. Be sure to choose a value that corresponds to your service.  Option descriptions:  * `CONNECTIONS` - The privacy setting is `CONNECTIONS` for LinkedIn.  * `PUBLIC` - The privacy setting is `PUBLIC` for LinkedIn.  * `all_friends` - The privacy setting is `all_friends` for Facebook.  * `everyone` - The privacy setting is `everyone` for Facebook.  * `private` - The privacy setting is `private` for YouTube.  * `public` - The privacy setting is `public` for YouTube.  * `self` - The privacy setting is `self` for Facebook.  * `unlisted` - The privacy setting is `unlisted` for YouTube. 

##### provider_destination_id: `string`<a id="provider_destination_id-string"></a>

The ID of the destination on the specified service, such as the YouTube channel ID or the Facebook page ID.

##### provider_video_id: `string`<a id="provider_video_id-string"></a>

The ID of the scheduled video.

##### scheduled_at: `number`<a id="scheduled_at-number"></a>

The time in Unix timestamp format when live streaming is scheduled to start.

##### stream_key: `string`<a id="stream_key-string"></a>

The RTMP stream key.

##### stream_url: `string`<a id="stream_url-string"></a>

The RTMP URL for receiving the video stream.

#### 🔄 Return<a id="🔄-return"></a>

[LiveEventDestination](./models/live-event-destination.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events/{live_event_id}/destinations` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventDestinations.createOneTimeLiveEventDestination`<a id="vimeoliveeventdestinationscreateonetimeliveeventdestination"></a>

This method creates a destination for the specified event. The authenticated user must be the owner of the event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOneTimeLiveEventDestinationResponse =
  await vimeo.liveEventDestinations.createOneTimeLiveEventDestination({
    videoId: 12345,
    display_name: "My channel",
    is_enabled: true,
    privacy: "public",
    provider_destination_id: "bda55c6b3ba4",
    provider_video_id: "6817807391346708000",
    scheduled_at: 1625754461,
    service_name: "youtube",
    stream_key: "da056692-ba63-4749-a6eb-a476a22b3acd",
    stream_url: "rtmp://mycooldomain.com/live",
    type: "channel",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### display_name: `string`<a id="display_name-string"></a>

The title to display for the simulcast.

##### service_name: `string`<a id="service_name-string"></a>

The service to simulcast to.  Option descriptions:  * `custom_rtmp` - Simulcast to a custom service.  * `facebook` - Simulcast to Facebook Live.  * `linkedin` - Simulcast to LinkedIn Live.  * `youtube` - Simulcast to YouTube Live. 

##### type: `string`<a id="type-string"></a>

The type of the simulcast destination.  Option descriptions:  * `channel` - The destination is a YouTube channel.  * `custom` - The destination is custom.  * `organization` - The destination is a LinkedIn organization.  * `page` - The destination is a Facebook page.  * `profile` - The destination is a Facebook or LinkedIn profile. 

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### is_enabled: `boolean`<a id="is_enabled-boolean"></a>

Whether the destination is enabled for simulcasting.

##### privacy: `string`<a id="privacy-string"></a>

The privacy setting of the destination. Be sure to choose a value that corresponds to your service.  Option descriptions:  * `CONNECTIONS` - The privacy setting is `CONNECTIONS` for LinkedIn.  * `PUBLIC` - The privacy setting is `PUBLIC` for LinkedIn.  * `all_friends` - The privacy setting is `all_friends` for Facebook.  * `everyone` - The privacy setting is `everyone` for Facebook.  * `private` - The privacy setting is `private` for YouTube.  * `public` - The privacy setting is `public` for YouTube.  * `self` - The privacy setting is `self` for Facebook.  * `unlisted` - The privacy setting is `unlisted` for YouTube. 

##### provider_destination_id: `string`<a id="provider_destination_id-string"></a>

The ID of the destination on the specified service, such as the YouTube channel ID or the Facebook page ID.

##### provider_video_id: `string`<a id="provider_video_id-string"></a>

The ID of the scheduled video.

##### scheduled_at: `number`<a id="scheduled_at-number"></a>

The time in Unix timestamp format when live streaming is scheduled to start.

##### stream_key: `string`<a id="stream_key-string"></a>

The RTMP stream key.

##### stream_url: `string`<a id="stream_url-string"></a>

The RTMP URL for receiving the video stream.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/videos/{video_id}/destinations` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventDestinations.createOneTimeLiveEventDestination_0`<a id="vimeoliveeventdestinationscreateonetimeliveeventdestination_0"></a>

This method creates a destination for the specified event. The authenticated user must be the owner of the event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOneTimeLiveEventDestination_0Response =
  await vimeo.liveEventDestinations.createOneTimeLiveEventDestination_0({
    userId: 152184,
    videoId: 12345,
    display_name: "My channel",
    is_enabled: true,
    privacy: "public",
    provider_destination_id: "bda55c6b3ba4",
    provider_video_id: "6817807391346708000",
    scheduled_at: 1625754461,
    service_name: "youtube",
    stream_key: "da056692-ba63-4749-a6eb-a476a22b3acd",
    stream_url: "rtmp://mycooldomain.com/live",
    type: "channel",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### display_name: `string`<a id="display_name-string"></a>

The title to display for the simulcast.

##### service_name: `string`<a id="service_name-string"></a>

The service to simulcast to.  Option descriptions:  * `custom_rtmp` - Simulcast to a custom service.  * `facebook` - Simulcast to Facebook Live.  * `linkedin` - Simulcast to LinkedIn Live.  * `youtube` - Simulcast to YouTube Live. 

##### type: `string`<a id="type-string"></a>

The type of the simulcast destination.  Option descriptions:  * `channel` - The destination is a YouTube channel.  * `custom` - The destination is custom.  * `organization` - The destination is a LinkedIn organization.  * `page` - The destination is a Facebook page.  * `profile` - The destination is a Facebook or LinkedIn profile. 

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### is_enabled: `boolean`<a id="is_enabled-boolean"></a>

Whether the destination is enabled for simulcasting.

##### privacy: `string`<a id="privacy-string"></a>

The privacy setting of the destination. Be sure to choose a value that corresponds to your service.  Option descriptions:  * `CONNECTIONS` - The privacy setting is `CONNECTIONS` for LinkedIn.  * `PUBLIC` - The privacy setting is `PUBLIC` for LinkedIn.  * `all_friends` - The privacy setting is `all_friends` for Facebook.  * `everyone` - The privacy setting is `everyone` for Facebook.  * `private` - The privacy setting is `private` for YouTube.  * `public` - The privacy setting is `public` for YouTube.  * `self` - The privacy setting is `self` for Facebook.  * `unlisted` - The privacy setting is `unlisted` for YouTube. 

##### provider_destination_id: `string`<a id="provider_destination_id-string"></a>

The ID of the destination on the specified service, such as the YouTube channel ID or the Facebook page ID.

##### provider_video_id: `string`<a id="provider_video_id-string"></a>

The ID of the scheduled video.

##### scheduled_at: `number`<a id="scheduled_at-number"></a>

The time in Unix timestamp format when live streaming is scheduled to start.

##### stream_key: `string`<a id="stream_key-string"></a>

The RTMP stream key.

##### stream_url: `string`<a id="stream_url-string"></a>

The RTMP URL for receiving the video stream.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/videos/{video_id}/destinations` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventDestinations.createOttDestination`<a id="vimeoliveeventdestinationscreateottdestination"></a>

This method creates an OTT channel as the destination of the specified event. The authenticated user must be the owner of the event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOttDestinationResponse =
  await vimeo.liveEventDestinations.createOttDestination({
    liveEventId: 12345,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[OttDestination](./models/ott-destination.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events/{live_event_id}/ott_destinations` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventDestinations.deleteDestination`<a id="vimeoliveeventdestinationsdeletedestination"></a>

This method deletes the specified event destination belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteDestinationResponse =
  await vimeo.liveEventDestinations.deleteDestination({
    destinationId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### destinationId: `number`<a id="destinationid-number"></a>

The ID of the event destination.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/destination/{destination_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventDestinations.deleteOttDestination`<a id="vimeoliveeventdestinationsdeleteottdestination"></a>

This method deletes an OTT channel as the destination of the specified event. The authenticated user must be the owner of the event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteOttDestinationResponse =
  await vimeo.liveEventDestinations.deleteOttDestination({
    liveEventId: 12345,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events/{live_event_id}/ott_destination/{destination_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventDestinations.getAllAvailableDestinations`<a id="vimeoliveeventdestinationsgetallavailabledestinations"></a>

This method returns every available event destination for the authenticated user to stream to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllAvailableDestinationsResponse =
  await vimeo.liveEventDestinations.getAllAvailableDestinations();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/destinations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventDestinations.getAllAvailableDestinations_0`<a id="vimeoliveeventdestinationsgetallavailabledestinations_0"></a>

This method returns every destination of the specified event. The authenticated user must be the owner of the event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllAvailableDestinations_0Response =
  await vimeo.liveEventDestinations.getAllAvailableDestinations_0({
    liveEventId: 12345,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[LiveEventDestination](./models/live-event-destination.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events/{live_event_id}/destinations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventDestinations.getAllAvailableDestinations_1`<a id="vimeoliveeventdestinationsgetallavailabledestinations_1"></a>

This method returns every destination of the specified event. The authenticated user must be the owner of the event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllAvailableDestinations_1Response =
  await vimeo.liveEventDestinations.getAllAvailableDestinations_1({
    userId: 152184,
    videoId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[LiveEventDestination](./models/live-event-destination.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/videos/{video_id}/destinations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventDestinations.getAllDestinations`<a id="vimeoliveeventdestinationsgetalldestinations"></a>

This method returns every destination of the specified event. The authenticated user must be the owner of the event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllDestinationsResponse =
  await vimeo.liveEventDestinations.getAllDestinations({
    videoId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[LiveEventDestination](./models/live-event-destination.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/videos/{video_id}/destinations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventDestinations.getAllOttDestinations`<a id="vimeoliveeventdestinationsgetallottdestinations"></a>

This method returns every OTT destination of the specified event. The authenticated user must be the owner of the event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllOttDestinationsResponse =
  await vimeo.liveEventDestinations.getAllOttDestinations({
    liveEventId: 12345,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[OttDestination](./models/ott-destination.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events/{live_event_id}/ott_destinations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventDestinations.getDestination`<a id="vimeoliveeventdestinationsgetdestination"></a>

This method returns the specified event destination belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDestinationResponse = await vimeo.liveEventDestinations.getDestination(
  {
    destinationId: 152184,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### destinationId: `number`<a id="destinationid-number"></a>

The ID of the event destination.

#### 🔄 Return<a id="🔄-return"></a>

[LiveEventDestination](./models/live-event-destination.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/destination/{destination_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventDestinations.listAllAvailableDestinations`<a id="vimeoliveeventdestinationslistallavailabledestinations"></a>

This method returns every destination of the specified event. The authenticated user must be the owner of the event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllAvailableDestinationsResponse =
  await vimeo.liveEventDestinations.listAllAvailableDestinations({
    liveEventId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

#### 🔄 Return<a id="🔄-return"></a>

[LiveEventDestination](./models/live-event-destination.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/live_events/{live_event_id}/destinations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventDestinations.listAvailableDestinations`<a id="vimeoliveeventdestinationslistavailabledestinations"></a>

This method returns every available event destination for the authenticated user to stream to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAvailableDestinationsResponse =
  await vimeo.liveEventDestinations.listAvailableDestinations({
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/destinations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventDestinations.updateDestination`<a id="vimeoliveeventdestinationsupdatedestination"></a>

This method updates the specified event destination belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDestinationResponse =
  await vimeo.liveEventDestinations.updateDestination({
    destinationId: 152184,
    display_name: "My channel",
    is_enabled: true,
    privacy: "public",
    provider_destination_id: "bda55c6b3ba4",
    service_name: "youtube",
    stream_key: "da056692-ba63-4749-a6eb-a476a22b3acd",
    stream_url: "rtmp://mycooldomain.com/live",
    type: "channel",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### destinationId: `number`<a id="destinationid-number"></a>

The ID of the event destination.

##### display_name: `string`<a id="display_name-string"></a>

The title to display for the simulcast.

##### is_enabled: `boolean`<a id="is_enabled-boolean"></a>

Whether the destination is enabled for simulcasting.

##### privacy: `string`<a id="privacy-string"></a>

The privacy setting of the destination. Be sure to choose a value that corresponds to your service.  Option descriptions:  * `CONNECTIONS` - The privacy setting is `CONNECTIONS` for LinkedIn.  * `PUBLIC` - The privacy setting is `PUBLIC` for LinkedIn.  * `all_friends` - The privacy setting is `all_friends` for Facebook.  * `everyone` - The privacy setting is `everyone` for Facebook.  * `private` - The privacy setting is `private` for YouTube.  * `public` - The privacy setting is `public` for YouTube.  * `self` - The privacy setting is `self` for Facebook.  * `unlisted` - The privacy setting is `unlisted` for YouTube. 

##### provider_destination_id: `string`<a id="provider_destination_id-string"></a>

The ID of the destination on the specified service, such as the YouTube channel ID or the Facebook page ID.

##### service_name: `string`<a id="service_name-string"></a>

The service to simulcast to.  Option descriptions:  * `custom_rtmp` - Simulcast to a custom service.  * `facebook` - Simulcast to Facebook Live.  * `linkedin` - Simulcast to LinkedIn Live.  * `youtube` - Simulcast to YouTube Live. 

##### stream_key: `string`<a id="stream_key-string"></a>

The RTMP stream key.

##### stream_url: `string`<a id="stream_url-string"></a>

The RTMP URL for receiving the video stream.

##### type: `string`<a id="type-string"></a>

The type of the simulcast destination.  Option descriptions:  * `channel` - The destination is a YouTube channel.  * `custom` - The destination is custom.  * `organization` - The destination is a LinkedIn organization.  * `page` - The destination is a Facebook page.  * `profile` - The destination is a Facebook or LinkedIn profile. 

#### 🔄 Return<a id="🔄-return"></a>

[LiveEventDestination](./models/live-event-destination.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/destination/{destination_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventEnd.eventTermination`<a id="vimeoliveeventendeventtermination"></a>

This method ends the specified event. The authenticated user must be the owner of the event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const eventTerminationResponse = await vimeo.liveEventEnd.eventTermination({
  liveEventId: 12345,
  clipId: 12345,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### clipId: `number`<a id="clipid-number"></a>

The ID of the streamable video.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live_events/{live_event_id}/end` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventEnd.eventTerminationAlt1`<a id="vimeoliveeventendeventterminationalt1"></a>

This method ends the specified event. The authenticated user must be the owner of the event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const eventTerminationAlt1Response =
  await vimeo.liveEventEnd.eventTerminationAlt1({
    liveEventId: 12345,
    clipId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### clipId: `number`<a id="clipid-number"></a>

The ID of the streamable video.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/live_events/{live_event_id}/end` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventEnd.eventTerminationAlt2`<a id="vimeoliveeventendeventterminationalt2"></a>

This method ends the specified event. The authenticated user must be the owner of the event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const eventTerminationAlt2Response =
  await vimeo.liveEventEnd.eventTerminationAlt2({
    liveEventId: 12345,
    clipId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### clipId: `number`<a id="clipid-number"></a>

The ID of the streamable video.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events/{live_event_id}/end` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventLowLatency.toggleOption`<a id="vimeoliveeventlowlatencytoggleoption"></a>

This method toggles the low-latency option of the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const toggleOptionResponse = await vimeo.liveEventLowLatency.toggleOption({
  liveEventId: 12345,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### low_latency: `boolean`<a id="low_latency-boolean"></a>

Whether the event is low latency.

#### 🔄 Return<a id="🔄-return"></a>

[RecurringLiveEventLowLatency](./models/recurring-live-event-low-latency.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live_events/{live_event_id}/low_latency` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventLowLatency.toggleOption_0`<a id="vimeoliveeventlowlatencytoggleoption_0"></a>

This method toggles the low-latency option of the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const toggleOption_0Response = await vimeo.liveEventLowLatency.toggleOption_0({
  liveEventId: 12345,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### low_latency: `boolean`<a id="low_latency-boolean"></a>

Whether the event is low latency.

#### 🔄 Return<a id="🔄-return"></a>

[RecurringLiveEventLowLatency](./models/recurring-live-event-low-latency.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/live_events/{live_event_id}/low_latency` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventLowLatency.toggleOption_1`<a id="vimeoliveeventlowlatencytoggleoption_1"></a>

This method toggles the low-latency option of the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const toggleOption_1Response = await vimeo.liveEventLowLatency.toggleOption_1({
  liveEventId: 12345,
  userId: 152184,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### low_latency: `boolean`<a id="low_latency-boolean"></a>

Whether the event is low latency.

#### 🔄 Return<a id="🔄-return"></a>

[RecurringLiveEventLowLatency](./models/recurring-live-event-low-latency.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events/{live_event_id}/low_latency` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventSessions.getIngestStatus`<a id="vimeoliveeventsessionsgetingeststatus"></a>

This method returns the ingest status of the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getIngestStatusResponse = await vimeo.liveEventSessions.getIngestStatus({
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the event.

#### 🔄 Return<a id="🔄-return"></a>

[LiveEventSessionStatus](./models/live-event-session-status.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/sessions/status` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventThumbnails.addThumbnail`<a id="vimeoliveeventthumbnailsaddthumbnail"></a>

This method creates a thumbnail image for the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addThumbnailResponse = await vimeo.liveEventThumbnails.addThumbnail({
  liveEventId: 12345,
  active: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### active: `boolean`<a id="active-boolean"></a>

Whether the thumbnail is the event\\\'s active thumbnail.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/live_events/{live_event_id}/pictures` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventThumbnails.createThumbnailForEvent`<a id="vimeoliveeventthumbnailscreatethumbnailforevent"></a>

This method creates a thumbnail image for the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createThumbnailForEventResponse =
  await vimeo.liveEventThumbnails.createThumbnailForEvent({
    liveEventId: 12345,
    active: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### active: `boolean`<a id="active-boolean"></a>

Whether the thumbnail is the event\\\'s active thumbnail.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live_events/{live_event_id}/pictures` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventThumbnails.createThumbnailForEvent_0`<a id="vimeoliveeventthumbnailscreatethumbnailforevent_0"></a>

This method creates a thumbnail image for the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createThumbnailForEvent_0Response =
  await vimeo.liveEventThumbnails.createThumbnailForEvent_0({
    liveEventId: 12345,
    userId: 152184,
    active: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### active: `boolean`<a id="active-boolean"></a>

Whether the thumbnail is the event\\\'s active thumbnail.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events/{live_event_id}/pictures` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventThumbnails.deleteForEvent`<a id="vimeoliveeventthumbnailsdeleteforevent"></a>

This method deletes a thumbnail image for the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteForEventResponse = await vimeo.liveEventThumbnails.deleteForEvent({
  liveEventId: 12345,
  thumbnailId: 12345,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### thumbnailId: `number`<a id="thumbnailid-number"></a>

The ID of the thumbnail.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/live_events/{live_event_id}/pictures/{thumbnail_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventThumbnails.deleteThumbnailForEvent`<a id="vimeoliveeventthumbnailsdeletethumbnailforevent"></a>

This method deletes a thumbnail image for the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteThumbnailForEventResponse =
  await vimeo.liveEventThumbnails.deleteThumbnailForEvent({
    liveEventId: 12345,
    thumbnailId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### thumbnailId: `number`<a id="thumbnailid-number"></a>

The ID of the thumbnail.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live_events/{live_event_id}/pictures/{thumbnail_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventThumbnails.deleteThumbnailForEvent_0`<a id="vimeoliveeventthumbnailsdeletethumbnailforevent_0"></a>

This method deletes a thumbnail image for the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteThumbnailForEvent_0Response =
  await vimeo.liveEventThumbnails.deleteThumbnailForEvent_0({
    liveEventId: 12345,
    thumbnailId: 12345,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### thumbnailId: `number`<a id="thumbnailid-number"></a>

The ID of the thumbnail.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events/{live_event_id}/pictures/{thumbnail_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventThumbnails.editEventThumbnail`<a id="vimeoliveeventthumbnailsediteventthumbnail"></a>

This method edits a thumbnail image for the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editEventThumbnailResponse =
  await vimeo.liveEventThumbnails.editEventThumbnail({
    liveEventId: 12345,
    thumbnailId: 12345,
    userId: 152184,
    active: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### thumbnailId: `number`<a id="thumbnailid-number"></a>

The ID of the thumbnail.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### active: `boolean`<a id="active-boolean"></a>

Whether the thumbnail is the event\\\'s active thumbnail.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events/{live_event_id}/pictures/{thumbnail_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventThumbnails.editLiveEventThumbnail`<a id="vimeoliveeventthumbnailseditliveeventthumbnail"></a>

This method edits a thumbnail image for the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editLiveEventThumbnailResponse =
  await vimeo.liveEventThumbnails.editLiveEventThumbnail({
    liveEventId: 12345,
    thumbnailId: 12345,
    active: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### thumbnailId: `number`<a id="thumbnailid-number"></a>

The ID of the thumbnail.

##### active: `boolean`<a id="active-boolean"></a>

Whether the thumbnail is the event\\\'s active thumbnail.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live_events/{live_event_id}/pictures/{thumbnail_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventThumbnails.getAll`<a id="vimeoliveeventthumbnailsgetall"></a>

This method returns every thumbnail image of the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await vimeo.liveEventThumbnails.getAll({
  liveEventId: 12345,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/live_events/{live_event_id}/pictures` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventThumbnails.getAllThumbnails`<a id="vimeoliveeventthumbnailsgetallthumbnails"></a>

This method returns every thumbnail image of the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllThumbnailsResponse =
  await vimeo.liveEventThumbnails.getAllThumbnails({
    liveEventId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live_events/{live_event_id}/pictures` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventThumbnails.getAllThumbs`<a id="vimeoliveeventthumbnailsgetallthumbs"></a>

This method returns every thumbnail image of the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllThumbsResponse = await vimeo.liveEventThumbnails.getAllThumbs({
  liveEventId: 12345,
  userId: 152184,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events/{live_event_id}/pictures` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventThumbnails.getSpecificThumbnail`<a id="vimeoliveeventthumbnailsgetspecificthumbnail"></a>

This method returns a single thumbnail image of the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificThumbnailResponse =
  await vimeo.liveEventThumbnails.getSpecificThumbnail({
    liveEventId: 12345,
    thumbnailId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### thumbnailId: `number`<a id="thumbnailid-number"></a>

The ID of the thumbnail.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live_events/{live_event_id}/pictures/{thumbnail_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventThumbnails.getSpecificThumbnail_0`<a id="vimeoliveeventthumbnailsgetspecificthumbnail_0"></a>

This method returns a single thumbnail image of the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificThumbnail_0Response =
  await vimeo.liveEventThumbnails.getSpecificThumbnail_0({
    liveEventId: 12345,
    thumbnailId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### thumbnailId: `number`<a id="thumbnailid-number"></a>

The ID of the thumbnail.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/live_events/{live_event_id}/pictures/{thumbnail_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventThumbnails.getSpecificThumbnail_1`<a id="vimeoliveeventthumbnailsgetspecificthumbnail_1"></a>

This method returns a single thumbnail image of the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificThumbnail_1Response =
  await vimeo.liveEventThumbnails.getSpecificThumbnail_1({
    liveEventId: 12345,
    thumbnailId: 12345,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### thumbnailId: `number`<a id="thumbnailid-number"></a>

The ID of the thumbnail.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events/{live_event_id}/pictures/{thumbnail_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventThumbnails.updateEventThumbnail`<a id="vimeoliveeventthumbnailsupdateeventthumbnail"></a>

This method edits a thumbnail image for the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEventThumbnailResponse =
  await vimeo.liveEventThumbnails.updateEventThumbnail({
    liveEventId: 12345,
    thumbnailId: 12345,
    active: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### thumbnailId: `number`<a id="thumbnailid-number"></a>

The ID of the thumbnail.

##### active: `boolean`<a id="active-boolean"></a>

Whether the thumbnail is the event\\\'s active thumbnail.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/live_events/{live_event_id}/pictures/{thumbnail_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventVideos.addMultiple`<a id="vimeoliveeventvideosaddmultiple"></a>

This method adds multiple videos to the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addMultipleResponse = await vimeo.liveEventVideos.addMultiple({
  liveEventId: 12345,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### videos: [`LiveEventVideosAddMultipleRequestVideosInner`](./models/live-event-videos-add-multiple-request-videos-inner.ts)[]<a id="videos-liveeventvideosaddmultiplerequestvideosinnermodelslive-event-videos-add-multiple-request-videos-innerts"></a>

An array of video objects.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live_events/{live_event_id}/videos` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventVideos.addMultipleVideos`<a id="vimeoliveeventvideosaddmultiplevideos"></a>

This method adds multiple videos to the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addMultipleVideosResponse = await vimeo.liveEventVideos.addMultipleVideos(
  {
    liveEventId: 12345,
    userId: 152184,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videos: [`LiveEventVideosAddMultipleVideosRequestVideosInner`](./models/live-event-videos-add-multiple-videos-request-videos-inner.ts)[]<a id="videos-liveeventvideosaddmultiplevideosrequestvideosinnermodelslive-event-videos-add-multiple-videos-request-videos-innerts"></a>

An array of video objects.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events/{live_event_id}/videos` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventVideos.getAll`<a id="vimeoliveeventvideosgetall"></a>

This method returns every video in the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await vimeo.liveEventVideos.getAll({
  liveEventId: 12345,
  containingUri: "/videos/258684937",
  direction: "asc",
  filter: "embeddable",
  filterEmbeddable: true,
  page: 1,
  perPage: 10,
  query: "Stop motion",
  sort: "added",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### containingUri: `string`<a id="containinguri-string"></a>

The page that contains the video URI.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'embeddable'`<a id="filter-embeddable"></a>

The attribute by which to filter the results.  Option descriptions:  * `embeddable` - Return embeddable events. 

##### filterEmbeddable: `boolean`<a id="filterembeddable-boolean"></a>

Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'added' | 'alphabetical' | 'arranged' | 'comments' | 'date' | 'duration' | 'likes' | 'plays'`<a id="sort-added--alphabetical--arranged--comments--date--duration--likes--plays"></a>

The way to sort the results.  Option descriptions:  * `added` - Sort the results by most recently added videos.  * `alphabetical` - Sort the results alphabetically.  * `arranged` - Sort the results in the order that the user has arranged the videos.  * `comments` - Sort the results by number of comments.  * `date` - Sort the results by creation date.  * `duration` - Sort the results by duration.  * `likes` - Sort the results by number of likes.  * `plays` - Sort the results by number of plays. 

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/live_events/{live_event_id}/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventVideos.getSpecificVideo`<a id="vimeoliveeventvideosgetspecificvideo"></a>

This method returns a single video in the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificVideoResponse = await vimeo.liveEventVideos.getSpecificVideo({
  liveEventId: 12345,
  userId: 152184,
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events/{live_event_id}/videos/{video_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventVideos.listAllVideosInEvent`<a id="vimeoliveeventvideoslistallvideosinevent"></a>

This method returns every video in the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllVideosInEventResponse =
  await vimeo.liveEventVideos.listAllVideosInEvent({
    liveEventId: 12345,
    userId: 152184,
    containingUri: "/videos/258684937",
    direction: "asc",
    filter: "embeddable",
    filterEmbeddable: true,
    page: 1,
    perPage: 10,
    query: "Stop motion",
    sort: "added",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### containingUri: `string`<a id="containinguri-string"></a>

The page that contains the video URI.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'embeddable'`<a id="filter-embeddable"></a>

The attribute by which to filter the results.  Option descriptions:  * `embeddable` - Return embeddable events. 

##### filterEmbeddable: `boolean`<a id="filterembeddable-boolean"></a>

Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'added' | 'alphabetical' | 'arranged' | 'comments' | 'date' | 'duration' | 'likes' | 'plays'`<a id="sort-added--alphabetical--arranged--comments--date--duration--likes--plays"></a>

The way to sort the results.  Option descriptions:  * `added` - Sort the results by most recently added videos.  * `alphabetical` - Sort the results alphabetically.  * `arranged` - Sort the results in the order that the user has arranged the videos.  * `comments` - Sort the results by number of comments.  * `date` - Sort the results by creation date.  * `duration` - Sort the results by duration.  * `likes` - Sort the results by number of likes.  * `plays` - Sort the results by number of plays. 

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events/{live_event_id}/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventVideos.listLiveEventVideos`<a id="vimeoliveeventvideoslistliveeventvideos"></a>

This method returns every video in the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLiveEventVideosResponse =
  await vimeo.liveEventVideos.listLiveEventVideos({
    liveEventId: 12345,
    containingUri: "/videos/258684937",
    direction: "asc",
    filter: "embeddable",
    filterEmbeddable: true,
    page: 1,
    perPage: 10,
    query: "Stop motion",
    sort: "added",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### containingUri: `string`<a id="containinguri-string"></a>

The page that contains the video URI.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'embeddable'`<a id="filter-embeddable"></a>

The attribute by which to filter the results.  Option descriptions:  * `embeddable` - Return embeddable events. 

##### filterEmbeddable: `boolean`<a id="filterembeddable-boolean"></a>

Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'added' | 'alphabetical' | 'arranged' | 'comments' | 'date' | 'duration' | 'likes' | 'plays'`<a id="sort-added--alphabetical--arranged--comments--date--duration--likes--plays"></a>

The way to sort the results.  Option descriptions:  * `added` - Sort the results by most recently added videos.  * `alphabetical` - Sort the results alphabetically.  * `arranged` - Sort the results in the order that the user has arranged the videos.  * `comments` - Sort the results by number of comments.  * `date` - Sort the results by creation date.  * `duration` - Sort the results by duration.  * `likes` - Sort the results by number of likes.  * `plays` - Sort the results by number of plays. 

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live_events/{live_event_id}/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventVideos.removeMultiple`<a id="vimeoliveeventvideosremovemultiple"></a>

This method removes multiple videos from the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeMultipleResponse = await vimeo.liveEventVideos.removeMultiple({
  liveEventId: 12345,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### videos: [`LiveEventVideosRemoveMultipleRequestVideosInner`](./models/live-event-videos-remove-multiple-request-videos-inner.ts)[]<a id="videos-liveeventvideosremovemultiplerequestvideosinnermodelslive-event-videos-remove-multiple-request-videos-innerts"></a>

An array of video objects.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/live_events/{live_event_id}/videos` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventVideos.removeMultipleVideos`<a id="vimeoliveeventvideosremovemultiplevideos"></a>

This method removes multiple videos from the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeMultipleVideosResponse =
  await vimeo.liveEventVideos.removeMultipleVideos({
    liveEventId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### videos: [`LiveEventVideosRemoveMultipleVideosRequestVideosInner`](./models/live-event-videos-remove-multiple-videos-request-videos-inner.ts)[]<a id="videos-liveeventvideosremovemultiplevideosrequestvideosinnermodelslive-event-videos-remove-multiple-videos-request-videos-innerts"></a>

An array of video objects.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live_events/{live_event_id}/videos` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventVideos.removeMultiple_0`<a id="vimeoliveeventvideosremovemultiple_0"></a>

This method removes multiple videos from the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeMultiple_0Response = await vimeo.liveEventVideos.removeMultiple_0({
  liveEventId: 12345,
  userId: 152184,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videos: [`LiveEventVideosRemoveMultipleRequest1VideosInner`](./models/live-event-videos-remove-multiple-request1-videos-inner.ts)[]<a id="videos-liveeventvideosremovemultiplerequest1videosinnermodelslive-event-videos-remove-multiple-request1-videos-innerts"></a>

An array of video objects.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/live_events/{live_event_id}/videos` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventVideos.specificEventVideo`<a id="vimeoliveeventvideosspecificeventvideo"></a>

This method returns a single video in the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const specificEventVideoResponse =
  await vimeo.liveEventVideos.specificEventVideo({
    liveEventId: 12345,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/live_events/{live_event_id}/videos/{video_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventVideos.specificVideo`<a id="vimeoliveeventvideosspecificvideo"></a>

This method returns a single video in the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const specificVideoResponse = await vimeo.liveEventVideos.specificVideo({
  liveEventId: 12345,
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/live_events/{live_event_id}/videos/{video_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.liveEventVideos.uploadMultiple`<a id="vimeoliveeventvideosuploadmultiple"></a>

This method adds multiple videos to the specified event.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadMultipleResponse = await vimeo.liveEventVideos.uploadMultiple({
  liveEventId: 12345,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### liveEventId: `number`<a id="liveeventid-number"></a>

The ID of the event.

##### videos: [`LiveEventVideosUploadMultipleRequestVideosInner`](./models/live-event-videos-upload-multiple-request-videos-inner.ts)[]<a id="videos-liveeventvideosuploadmultiplerequestvideosinnermodelslive-event-videos-upload-multiple-request-videos-innerts"></a>

An array of video objects.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/live_events/{live_event_id}/videos` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandBackgrounds.addBackgroundToPage`<a id="vimeoondemandbackgroundsaddbackgroundtopage"></a>

This method adds a background image to the specified On Demand page. The authenticated user must be the owner of the page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addBackgroundToPageResponse =
  await vimeo.onDemandBackgrounds.addBackgroundToPage({
    ondemandId: 61326,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/backgrounds` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandBackgrounds.deleteBackgroundFromPage`<a id="vimeoondemandbackgroundsdeletebackgroundfrompage"></a>

This method deletes the specified background image on an On Demand page. The authenticated user must be the owner of the page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteBackgroundFromPageResponse =
  await vimeo.onDemandBackgrounds.deleteBackgroundFromPage({
    backgroundId: 12345,
    ondemandId: 61326,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### backgroundId: `number`<a id="backgroundid-number"></a>

The ID of the background image.

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/backgrounds/{background_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandBackgrounds.editBackgroundOnPage`<a id="vimeoondemandbackgroundseditbackgroundonpage"></a>

This method edits the specified background image on an On Demand page. The authenticated user must be the owner of the page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editBackgroundOnPageResponse =
  await vimeo.onDemandBackgrounds.editBackgroundOnPage({
    backgroundId: 12345,
    ondemandId: 61326,
    active: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### backgroundId: `number`<a id="backgroundid-number"></a>

The ID of the background image.

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

##### active: `boolean`<a id="active-boolean"></a>

Whether this background image is the one that appears on the On Demand page.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/backgrounds/{background_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandBackgrounds.getAllBackgroundsOnPage`<a id="vimeoondemandbackgroundsgetallbackgroundsonpage"></a>

This method returns every background image on the specified On Demand page. The authenticated user must be the owner of the page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllBackgroundsOnPageResponse =
  await vimeo.onDemandBackgrounds.getAllBackgroundsOnPage({
    ondemandId: 61326,
    page: 1,
    perPage: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/backgrounds` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandBackgrounds.getSpecificBackground`<a id="vimeoondemandbackgroundsgetspecificbackground"></a>

This method returns a single background image on the specified On Demand page. The authenticated user must be the owner of the page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificBackgroundResponse =
  await vimeo.onDemandBackgrounds.getSpecificBackground({
    backgroundId: 12345,
    ondemandId: 61326,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### backgroundId: `number`<a id="backgroundid-number"></a>

The ID of the background image.

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/backgrounds/{background_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandEssentials.createPage`<a id="vimeoondemandessentialscreatepage"></a>

This method creates a new On Demand page for the specified user. To publish the page, use the [edit](https://developer.vimeo.com/api/reference/on-demand#edit_vod) method.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPageResponse = await vimeo.onDemandEssentials.createPage({
  description:
    'DARBY FOREVER follows the fantasies of Darby, a shopgirl at "Bobbins & Notions".',
  accepted_currencies: "AUD",
  content_rating: "drugs",
  domain_link: "https://example.com",
  link: "darbyforever",
  name: "Darby Forever",
  type: "film",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### description: `string`<a id="description-string"></a>

The description of the On Demand page.

##### content_rating: `string`<a id="content_rating-string"></a>

The content rating of the video, given either as a comma-separated list or as a JSON array, depending on the request format.  Option descriptions:  * `drugs` - The video contains drug or alcohol use.  * `language` - The video contains profanity or sexually suggestive content.  * `nudity` - The video contains nudity.  * `safe` - The video is suitable for all audiences.  * `unrated` - The video hasn\\\'t been rated.  * `violence` - The video contains violent or graphic content. 

##### name: `string`<a id="name-string"></a>

The name of the On Demand page.

##### type: `string`<a id="type-string"></a>

The type of the On Demand page.  Option descriptions:  * `film` - The On Demand page is a film.  * `series` - The On Demand page is a series. 

##### accepted_currencies: `string`<a id="accepted_currencies-string"></a>

An array of accepted currencies.  Option descriptions:  * `AUD` - The currency is in Australian dollars.  * `CAD` - The currency is in Canadian dollars.  * `CHF` - The currency is in Swiss francs.  * `DKK` - The currency is in Danish krone.  * `EUR` - The currency is in euros.  * `GBP` - The currency is in British pounds.  * `JPY` - The currency is in Japanese yen.  * `KRW` - The currency is in South Korean won.  * `NOK` - The currency is in Norwegian krone.  * `PLN` - The currency is in Polish zloty.  * `SEK` - The currency is in Swedish krona.  * `USD` - The currency is in United States dollars. 

##### buy: [`OnDemandEssentialsCreatePageRequestBuy`](./models/on-demand-essentials-create-page-request-buy.ts)<a id="buy-ondemandessentialscreatepagerequestbuymodelson-demand-essentials-create-page-request-buyts"></a>

##### domain_link: `string`<a id="domain_link-string"></a>

The custom domain of the On Demand page.

##### episodes: [`OnDemandEssentialsCreatePageRequestEpisodes`](./models/on-demand-essentials-create-page-request-episodes.ts)<a id="episodes-ondemandessentialscreatepagerequestepisodesmodelson-demand-essentials-create-page-request-episodests"></a>

##### link: `string`<a id="link-string"></a>

The custom string to use in the Vimeo URL of the On Demand page.

##### rent: [`OnDemandEssentialsCreatePageRequestRent`](./models/on-demand-essentials-create-page-request-rent.ts)<a id="rent-ondemandessentialscreatepagerequestrentmodelson-demand-essentials-create-page-request-rentts"></a>

##### subscription: [`OnDemandEssentialsCreatePageRequestSubscription`](./models/on-demand-essentials-create-page-request-subscription.ts)<a id="subscription-ondemandessentialscreatepagerequestsubscriptionmodelson-demand-essentials-create-page-request-subscriptionts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandPage](./models/on-demand-page.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/ondemand/pages` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandEssentials.deleteOnDemandPage`<a id="vimeoondemandessentialsdeleteondemandpage"></a>

This method deletes the specified On Demand page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteOnDemandPageResponse =
  await vimeo.onDemandEssentials.deleteOnDemandPage({
    ondemandId: 61326,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandEssentials.getAllUserPages`<a id="vimeoondemandessentialsgetalluserpages"></a>

This method returns every On Demand page belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllUserPagesResponse = await vimeo.onDemandEssentials.getAllUserPages({
  direction: "asc",
  filter: "film",
  page: 1,
  perPage: 10,
  sort: "added",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'film' | 'series'`<a id="filter-film--series"></a>

The type of the page to return.  Option descriptions:  * `film` - The page type is a film.  * `series` - The page type is a series. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### sort: `'added' | 'alphabetical' | 'date' | 'modified_time' | 'name' | 'publish.time' | 'rating'`<a id="sort-added--alphabetical--date--modified_time--name--publishtime--rating"></a>

The way to sort the results.  Option descriptions:  * `added` - Sort the results by most recently added page.  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by date.  * `modified_time` - Sort the results by time of page modification.  * `name` - Sort the results by page name.  * `publish.time` - Sort the results by time of page publishing.  * `rating` - Sort the results by content rating. 

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandPage](./models/on-demand-page.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/ondemand/pages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandEssentials.getAllUserPages_0`<a id="vimeoondemandessentialsgetalluserpages_0"></a>

This method returns every On Demand page belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllUserPages_0Response =
  await vimeo.onDemandEssentials.getAllUserPages_0({
    userId: 152184,
    direction: "asc",
    filter: "film",
    page: 1,
    perPage: 10,
    sort: "added",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'film' | 'series'`<a id="filter-film--series"></a>

The type of the page to return.  Option descriptions:  * `film` - The page type is a film.  * `series` - The page type is a series. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### sort: `'added' | 'alphabetical' | 'date' | 'modified_time' | 'name' | 'publish.time' | 'rating'`<a id="sort-added--alphabetical--date--modified_time--name--publishtime--rating"></a>

The way to sort the results.  Option descriptions:  * `added` - Sort the results by most recently added page.  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by date.  * `modified_time` - Sort the results by time of page modification.  * `name` - Sort the results by page name.  * `publish.time` - Sort the results by time of page publishing.  * `rating` - Sort the results by content rating. 

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandPage](./models/on-demand-page.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/ondemand/pages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandEssentials.vod`<a id="vimeoondemandessentialsvod"></a>

This method returns the specified On Demand page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const vodResponse = await vimeo.onDemandEssentials.vod({
  ondemandId: 61326,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandPage](./models/on-demand-page.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandEssentials.vod_0`<a id="vimeoondemandessentialsvod_0"></a>

This method edits the specified On Demand page. Use this method to enable preorders on the page or to publish the page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const vod_0Response = await vimeo.onDemandEssentials.vod_0({
  ondemandId: 61326,
  link: "darbyforever",
  publish_when_ready: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

##### link: `string`<a id="link-string"></a>

The custom string to use in the Vimeo URL of the On Demand page.

##### preorder: [`EditVodRequestPreorder`](./models/edit-vod-request-preorder.ts)<a id="preorder-editvodrequestpreordermodelsedit-vod-request-preorderts"></a>

##### publish: [`EditVodRequestPublish`](./models/edit-vod-request-publish.ts)<a id="publish-editvodrequestpublishmodelsedit-vod-request-publishts"></a>

##### publish_when_ready: `boolean`<a id="publish_when_ready-boolean"></a>

Whether to publish the On Demand page automatically after all videos have finished transcoding.

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandPage](./models/on-demand-page.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandEssentials.vod_1`<a id="vimeoondemandessentialsvod_1"></a>

This method creates a new On Demand page for the specified user. To publish the page, use the [edit](https://developer.vimeo.com/api/reference/on-demand#edit_vod) method.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const vod_1Response = await vimeo.onDemandEssentials.vod_1({
  userId: 152184,
  description:
    'DARBY FOREVER follows the fantasies of Darby, a shopgirl at "Bobbins & Notions".',
  accepted_currencies: "AUD",
  content_rating: "drugs",
  domain_link: "https://example.com",
  link: "darbyforever",
  name: "Darby Forever",
  type: "film",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### description: `string`<a id="description-string"></a>

The description of the On Demand page.

##### content_rating: `string`<a id="content_rating-string"></a>

The content rating of the video, given either as a comma-separated list or as a JSON array, depending on the request format.  Option descriptions:  * `drugs` - The video contains drug or alcohol use.  * `language` - The video contains profanity or sexually suggestive content.  * `nudity` - The video contains nudity.  * `safe` - The video is suitable for all audiences.  * `unrated` - The video hasn\\\'t been rated.  * `violence` - The video contains violent or graphic content. 

##### name: `string`<a id="name-string"></a>

The name of the On Demand page.

##### type: `string`<a id="type-string"></a>

The type of the On Demand page.  Option descriptions:  * `film` - The On Demand page is a film.  * `series` - The On Demand page is a series. 

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### accepted_currencies: `string`<a id="accepted_currencies-string"></a>

An array of accepted currencies.  Option descriptions:  * `AUD` - The currency is in Australian dollars.  * `CAD` - The currency is in Canadian dollars.  * `CHF` - The currency is in Swiss francs.  * `DKK` - The currency is in Danish krone.  * `EUR` - The currency is in euros.  * `GBP` - The currency is in British pounds.  * `JPY` - The currency is in Japanese yen.  * `KRW` - The currency is in South Korean won.  * `NOK` - The currency is in Norwegian krone.  * `PLN` - The currency is in Polish zloty.  * `SEK` - The currency is in Swedish krona.  * `USD` - The currency is in United States dollars. 

##### buy: [`CreateVodRequestBuy`](./models/create-vod-request-buy.ts)<a id="buy-createvodrequestbuymodelscreate-vod-request-buyts"></a>

##### domain_link: `string`<a id="domain_link-string"></a>

The custom domain of the On Demand page.

##### episodes: [`CreateVodRequestEpisodes`](./models/create-vod-request-episodes.ts)<a id="episodes-createvodrequestepisodesmodelscreate-vod-request-episodests"></a>

##### link: `string`<a id="link-string"></a>

The custom string to use in the Vimeo URL of the On Demand page.

##### rent: [`CreateVodRequestRent`](./models/create-vod-request-rent.ts)<a id="rent-createvodrequestrentmodelscreate-vod-request-rentts"></a>

##### subscription: [`CreateVodRequestSubscription`](./models/create-vod-request-subscription.ts)<a id="subscription-createvodrequestsubscriptionmodelscreate-vod-request-subscriptionts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandPage](./models/on-demand-page.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/ondemand/pages` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandGenres.addGenreToPage`<a id="vimeoondemandgenresaddgenretopage"></a>

This method adds the specified genre designation to an On Demand page. A page can be associated with a maximum of two genres. The authenticated user must be the owner of the page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addGenreToPageResponse = await vimeo.onDemandGenres.addGenreToPage({
  genreId: "animation",
  ondemandId: 61326,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### genreId: `string`<a id="genreid-string"></a>

The ID of the genre.

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandGenre](./models/on-demand-genre.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/genres/{genre_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandGenres.checkGenreAssociation`<a id="vimeoondemandgenrescheckgenreassociation"></a>

This method determines whether an On Demand page is associated with the specified genre.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkGenreAssociationResponse =
  await vimeo.onDemandGenres.checkGenreAssociation({
    genreId: "animation",
    ondemandId: 61326,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### genreId: `string`<a id="genreid-string"></a>

The ID of the genre.

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandGenre](./models/on-demand-genre.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/genres/{genre_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandGenres.getAllGenres`<a id="vimeoondemandgenresgetallgenres"></a>

This method returns every existing On Demand genre.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllGenresResponse = await vimeo.onDemandGenres.getAllGenres();
```

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandGenre](./models/on-demand-genre.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/genres` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandGenres.getAllPagesInGenre`<a id="vimeoondemandgenresgetallpagesingenre"></a>

This method returns every On Demand page that belongs to the specified genre.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllPagesInGenreResponse =
  await vimeo.onDemandGenres.getAllPagesInGenre({
    genreId: "animation",
    direction: "asc",
    filter: "country",
    page: 1,
    perPage: 10,
    query: "Stop motion",
    sort: "alphabetical",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### genreId: `string`<a id="genreid-string"></a>

The ID of the genre.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'country' | 'my_region'`<a id="filter-country--my_region"></a>

The attribute by which to filter the results.  Option descriptions:  * `country` - Sort the results by country.  * `my_region` - Sort the results by user\'s region. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date' | 'name' | 'publish.time' | 'videos'`<a id="sort-alphabetical--date--name--publishtime--videos"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by date.  * `name` - Sort the results by name.  * `publish.time` - Sort the results by time of publishing.  * `videos` - Sort the results by video. 

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandPage](./models/on-demand-page.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/genres/{genre_id}/pages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandGenres.getGenres`<a id="vimeoondemandgenresgetgenres"></a>

This method returns every genre associated with the specified On Demand page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getGenresResponse = await vimeo.onDemandGenres.getGenres({
  ondemandId: 61326,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandGenre](./models/on-demand-genre.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/genres` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandGenres.getSpecificPageInGenre`<a id="vimeoondemandgenresgetspecificpageingenre"></a>

This method returns a single On Demand page that belongs to the specified genre.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificPageInGenreResponse =
  await vimeo.onDemandGenres.getSpecificPageInGenre({
    genreId: "animation",
    ondemandId: 61326,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### genreId: `string`<a id="genreid-string"></a>

The ID of the genre.

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandPage](./models/on-demand-page.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/genres/{genre_id}/pages/{ondemand_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandGenres.removeGenreFromPage`<a id="vimeoondemandgenresremovegenrefrompage"></a>

This method removes a genre association from the specified On Demand page. The authenticated user must be the owner of the page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeGenreFromPageResponse =
  await vimeo.onDemandGenres.removeGenreFromPage({
    genreId: "animation",
    ondemandId: 61326,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### genreId: `string`<a id="genreid-string"></a>

The ID of the genre.

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/genres/{genre_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandGenres.specificGenreGet`<a id="vimeoondemandgenresspecificgenreget"></a>

This method returns a single On Demand genre.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const specificGenreGetResponse = await vimeo.onDemandGenres.specificGenreGet({
  genreId: "animation",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### genreId: `string`<a id="genreid-string"></a>

The ID of the genre.

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandGenre](./models/on-demand-genre.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/genres/{genre_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandPosters.addPosterToPage`<a id="vimeoondemandpostersaddpostertopage"></a>

This method adds a poster image to the specified On Demand page. The authenticated user must be the owner of the page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addPosterToPageResponse = await vimeo.onDemandPosters.addPosterToPage({
  ondemandId: 61326,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/pictures` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandPosters.getOnDemandPagePosters`<a id="vimeoondemandpostersgetondemandpageposters"></a>

This method returns every poster on the specified On Demand page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOnDemandPagePostersResponse =
  await vimeo.onDemandPosters.getOnDemandPagePosters({
    ondemandId: 61326,
    page: 1,
    perPage: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/pictures` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandPosters.getSpecificPoster`<a id="vimeoondemandpostersgetspecificposter"></a>

This method returns a single poster on the specified On Demand page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificPosterResponse = await vimeo.onDemandPosters.getSpecificPoster(
  {
    ondemandId: 61326,
    posterId: 12345,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

##### posterId: `number`<a id="posterid-number"></a>

The ID of the poster.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/pictures/{poster_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandPosters.updatePoster`<a id="vimeoondemandpostersupdateposter"></a>

This method edits a poster image on the specified On Demand page. The authenticated user must be the owner of the page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePosterResponse = await vimeo.onDemandPosters.updatePoster({
  ondemandId: 61326,
  posterId: 12345,
  active: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

##### posterId: `number`<a id="posterid-number"></a>

The ID of the poster.

##### active: `boolean`<a id="active-boolean"></a>

Whether this poster is the one that appears on the On Demand page.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/pictures/{poster_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandPromotions.addPromotionToPage`<a id="vimeoondemandpromotionsaddpromotiontopage"></a>

This method adds a promotion to the specified On Demand page. The authenticated user must be the owner of the page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addPromotionToPageResponse =
  await vimeo.onDemandPromotions.addPromotionToPage({
    ondemandId: 61326,
    access_type: "default",
    code: "sxsw2018",
    discount_type: "free",
    download: true,
    end_time: "1526089920",
    label: "sxsw",
    percent_off: 50,
    product_type: "any",
    start_time: "1526089920",
    stream_period: "1_week",
    total: 9,
    type: "batch",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### download: `boolean`<a id="download-boolean"></a>

Whether the promotion grants download access to On Demand content. This field is required only when the download access hasn\\\'t been defined in the On Demand container, or when **access_type** is `vip` or **product_type** is `buy`.

##### stream_period: `string`<a id="stream_period-string"></a>

The amount of time for which the user can access On Demand content upon redeeming a promotion code. This parameter is required only when the streaming period isn\\\'t defined in the On Demand container, or when creating promotions where **access_type** is `vip` or **product_type** is `rent`.  Option descriptions:  * `1_week` - The user can access On Demand content for a maximum of 1 week after redeeming a promotion code.  * `1_year` - The user can access On Demand content for a maximum of 1 year after redeeming a promotion code.  * `24_hour` - The user can access On Demand content for a maximum of 24 hours after redeeming a promotion code.  * `30_day` - The user can access On Demand content for a maximum of 30 days after redeeming a promotion code.  * `3_month` - The user can access On Demand content for a maximum of 3 months after redeeming a promotion code.  * `48_hour` - The user can access On Demand content for a maximum of 48 hours after redeeming a promotion code.  * `6_month` - The user can access On Demand content for a maximum of 6 months after redeeming a promotion code.  * `72_hour` - The user can access On Demand content for a maximum of 72 hours after redeeming a promotion code. 

##### total: `number`<a id="total-number"></a>

When **type** is `batch`, the total number of promotions to generate. When **type** is `single`, the total number of uses of the promotion.

##### type: `string`<a id="type-string"></a>

The type of the promotion. When **access_type** is `vip`, the value for this parameter must be `batch`.  Option descriptions:  * `batch` - The promotion type that generates many random codes to use one time each.  * `single` - The promotion type that generates one code to use many times. 

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

##### access_type: `string`<a id="access_type-string"></a>

The promotion access type, which is a purchase option that isn\\\'t available in the On Demand container. Use the **download** and **stream_period** parameters to define additional characteristics for the `vip` type.  Option descriptions:  * `default` - The promotion grants a discount on the existing purchase options for an On Demand container.  * `vip` - The promotion grants free access to On Demand content before it\\\'s released. 

##### code: `string`<a id="code-string"></a>

The promotion code. This parameter is ignored when the promotion type is `batch`.

##### discount_type: `string`<a id="discount_type-string"></a>

The type of discount offered by the promotion code. When **access_type** is `vip`, the value of this parameter must be `free`.  Option descriptions:  * `free` - The discount reduces the price to zero.  * `percent` - The discount reduces the price by the percentage defined in the **percent_off** parameter. 

##### end_time: `string`<a id="end_time-string"></a>

The time at which the promotion period ends. If this parameter has no value, the promotion never expires.

##### label: `string`<a id="label-string"></a>

The description of the promotion when the promotion type is `batch`. This parameter is ignored when the promotion type is `single`.

##### percent_off: `number`<a id="percent_off-number"></a>

The percentage of the discount. This parameter is applicable only when **discount_type** is `percent`.

##### product_type: `string`<a id="product_type-string"></a>

The type of transaction to which the promotion applies. When **access_type** is `default`, the default value is `any`. When **access_type** is `vip`, the default value is `rent` and the only valid product types are `buy` and `rent`.  Option descriptions:  * `any` - The promotion applies to any transaction.  * `buy` - The promotion applies only to purchased products.  * `buy_episode` - The promotion applies only to purchased episodes.  * `rent` - The promotion applies only to rented products.  * `rent_episode` - The promotion applies only to rented episodes.  * `subscribe` - The promotion applies only to subscriptions. 

##### start_time: `string`<a id="start_time-string"></a>

The time at which the promotion period starts. If this parameter has no value, the start time defaults to the time at which the promotion was created.

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandPromotion](./models/on-demand-promotion.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/promotions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandPromotions.deletePromotionOnPage`<a id="vimeoondemandpromotionsdeletepromotiononpage"></a>

This method deletes a promotion on the specified On Demand page. The authenticated user must be the owner of the page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deletePromotionOnPageResponse =
  await vimeo.onDemandPromotions.deletePromotionOnPage({
    ondemandId: 61326,
    promotionId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

##### promotionId: `number`<a id="promotionid-number"></a>

The ID of the promotion.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/promotions/{promotion_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandPromotions.getAllPagePromotions`<a id="vimeoondemandpromotionsgetallpagepromotions"></a>

This method returns every promotion on the specified On Demand page. The authenticated user must be the owner of the page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllPagePromotionsResponse =
  await vimeo.onDemandPromotions.getAllPagePromotions({
    ondemandId: 61326,
    filter: "batch",
    page: 1,
    perPage: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

##### filter: `'batch' | 'default' | 'single' | 'vip'`<a id="filter-batch--default--single--vip"></a>

The type of filter to apply to the results.  Option descriptions:  * `batch` - Filter the results by the `batch` promotion.  * `default` - Filter the results by the default promotion.  * `single` - Filter the results by the `single` promotion.  * `vip` - Filter the results by the `vip` promotion. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandPromotion](./models/on-demand-promotion.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/promotions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandPromotions.getAllPromotionCodes`<a id="vimeoondemandpromotionsgetallpromotioncodes"></a>

This method returns every code of the specified promotion on an On Demand page. The authenticated user must be the owner of the page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllPromotionCodesResponse =
  await vimeo.onDemandPromotions.getAllPromotionCodes({
    ondemandId: 61326,
    promotionId: 12345,
    page: 1,
    perPage: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

##### promotionId: `number`<a id="promotionid-number"></a>

The ID of the promotion.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandPromotionCode](./models/on-demand-promotion-code.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/promotions/{promotion_id}/codes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandPromotions.specificPromotionGet`<a id="vimeoondemandpromotionsspecificpromotionget"></a>

This method returns a single promotion on the specified On Demand page. The authenticated user must be the owner of the page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const specificPromotionGetResponse =
  await vimeo.onDemandPromotions.specificPromotionGet({
    ondemandId: 61326,
    promotionId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

##### promotionId: `number`<a id="promotionid-number"></a>

The ID of the promotion.

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandPromotion](./models/on-demand-promotion.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/promotions/{promotion_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandPurchasesAndRentals.checkUserPurchasesAndRentals`<a id="vimeoondemandpurchasesandrentalscheckuserpurchasesandrentals"></a>

This method determines whether the authenticated user has made a purchase or rental from the specified On Demand page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkUserPurchasesAndRentalsResponse =
  await vimeo.onDemandPurchasesAndRentals.checkUserPurchasesAndRentals({
    ondemandId: 61326,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandPage](./models/on-demand-page.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/ondemand/purchases/{ondemand_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandPurchasesAndRentals.getAllUserPurchasesAndRentals`<a id="vimeoondemandpurchasesandrentalsgetalluserpurchasesandrentals"></a>

This method returns every purchase and rental that the authenticated user has made across all On Demand pages.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllUserPurchasesAndRentalsResponse =
  await vimeo.onDemandPurchasesAndRentals.getAllUserPurchasesAndRentals({
    direction: "asc",
    filter: "all",
    page: 1,
    perPage: 10,
    sort: "added",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'all' | 'expiring_soon' | 'film' | 'important' | 'purchased' | 'rented' | 'series' | 'subscription' | 'unwatched' | 'watched'`<a id="filter-all--expiring_soon--film--important--purchased--rented--series--subscription--unwatched--watched"></a>

The type of the On Demand video to filter on.  Option descriptions:  * `all` - Filter by all video types.  * `expiring_soon` - Filter by videos that expire soon.  * `film` - Filter by film.  * `important` - Filter by pages that are about to expire.  * `purchased` - Filter by purchased videos.  * `rented` - Filter by rented videos.  * `series` - Filter by series.  * `subscription` - Filter by video subscription.  * `unwatched` - Filter by unwatched videos.  * `watched` - Filter by watched videos. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### sort: `'added' | 'alphabetical' | 'date' | 'name' | 'purchase_time' | 'rating' | 'release_date'`<a id="sort-added--alphabetical--date--name--purchase_time--rating--release_date"></a>

The way to sort the results.  Option descriptions:  * `added` - Sort the results by most recently added video.  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by date.  * `name` - Sort the results by video name.  * `purchase_time` - Sort the results by time of video purchase.  * `rating` - Sort the results by content rating.  * `release_date` - Sort the results by video release date. 

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandPage](./models/on-demand-page.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/ondemand/purchases` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandPurchasesAndRentals.listUserPurchasesAndRentals`<a id="vimeoondemandpurchasesandrentalslistuserpurchasesandrentals"></a>

This method returns every purchase and rental that the authenticated user has made across all On Demand pages.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUserPurchasesAndRentalsResponse =
  await vimeo.onDemandPurchasesAndRentals.listUserPurchasesAndRentals({
    userId: 152184,
    direction: "asc",
    filter: "all",
    page: 1,
    perPage: 10,
    sort: "added",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'all' | 'expiring_soon' | 'film' | 'important' | 'purchased' | 'rented' | 'series' | 'subscription' | 'unwatched' | 'watched'`<a id="filter-all--expiring_soon--film--important--purchased--rented--series--subscription--unwatched--watched"></a>

The type of the On Demand video to filter on.  Option descriptions:  * `all` - Filter by all video types.  * `expiring_soon` - Filter by videos that expire soon.  * `film` - Filter by film.  * `important` - Filter by pages that are about to expire.  * `purchased` - Filter by purchased videos.  * `rented` - Filter by rented videos.  * `series` - Filter by series.  * `subscription` - Filter by video subscription.  * `unwatched` - Filter by unwatched videos.  * `watched` - Filter by watched videos. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### sort: `'added' | 'alphabetical' | 'date' | 'name' | 'purchase_time' | 'rating' | 'release_date'`<a id="sort-added--alphabetical--date--name--purchase_time--rating--release_date"></a>

The way to sort the results.  Option descriptions:  * `added` - Sort the results by most recently added video.  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by date.  * `name` - Sort the results by video name.  * `purchase_time` - Sort the results by time of video purchase.  * `rating` - Sort the results by content rating.  * `release_date` - Sort the results by video release date. 

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandPage](./models/on-demand-page.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/ondemand/purchases` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandRegions.addMultiple`<a id="vimeoondemandregionsaddmultiple"></a>

This method adds multiple regions to the specified On Demand page. The authenticated user must be the owner of the page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addMultipleResponse = await vimeo.onDemandRegions.addMultiple({
  ondemandId: 61326,
  countries: ["countries_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### countries: `string`[]<a id="countries-string"></a>

An array of country codes for the regions to add.

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandRegion](./models/on-demand-region.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/regions` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandRegions.addRegionToPage`<a id="vimeoondemandregionsaddregiontopage"></a>

This method adds a single region to the specified On Demand page. The authenticated user must be the owner of the page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addRegionToPageResponse = await vimeo.onDemandRegions.addRegionToPage({
  country: "US",
  ondemandId: 61326,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: `string`<a id="country-string"></a>

The country code of the region to add.

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandRegion](./models/on-demand-region.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/regions/{country}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandRegions.getAll`<a id="vimeoondemandregionsgetall"></a>

This method returns every region on the specified On Demand page. The authenticated user must be the owner of the page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await vimeo.onDemandRegions.getAll({
  ondemandId: 61326,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandRegion](./models/on-demand-region.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/regions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandRegions.getSpecificRegion`<a id="vimeoondemandregionsgetspecificregion"></a>

This method returns a single region on the specified On Demand page. The authenticated user must be the owner of the page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificRegionResponse = await vimeo.onDemandRegions.getSpecificRegion(
  {
    country: "US",
    ondemandId: 61326,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: `string`<a id="country-string"></a>

The country code of the region to return.

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandRegion](./models/on-demand-region.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/regions/{country}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandRegions.region`<a id="vimeoondemandregionsregion"></a>

This method returns a single On Demand region.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const regionResponse = await vimeo.onDemandRegions.region({
  country: "US",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: `string`<a id="country-string"></a>

The country code of the region to return.

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandRegion](./models/on-demand-region.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/regions/{country}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandRegions.regions`<a id="vimeoondemandregionsregions"></a>

This method returns every existing On Demand region.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const regionsResponse = await vimeo.onDemandRegions.regions();
```

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandRegion](./models/on-demand-region.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/regions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandRegions.removeMultiple`<a id="vimeoondemandregionsremovemultiple"></a>

This method removes multiple regions from the specified On Demand page. The authenticated user must be the owner of the page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeMultipleResponse = await vimeo.onDemandRegions.removeMultiple({
  ondemandId: 61326,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

##### countries: `string`[]<a id="countries-string"></a>

An array of country codes for the regions to remove.

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandRegion](./models/on-demand-region.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/regions` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandRegions.removeSpecificRegion`<a id="vimeoondemandregionsremovespecificregion"></a>

This method removes a single region from the specified On Demand page. The authenticated user must be the owner of the page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeSpecificRegionResponse =
  await vimeo.onDemandRegions.removeSpecificRegion({
    country: "US",
    ondemandId: 61326,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: `string`<a id="country-string"></a>

The country code of the region to remove.

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/regions/{country}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandSeasons.getAllVideosInSeason`<a id="vimeoondemandseasonsgetallvideosinseason"></a>

This method returns every video in the specified season on an On Demand page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllVideosInSeasonResponse =
  await vimeo.onDemandSeasons.getAllVideosInSeason({
    ondemandId: 61326,
    seasonId: 12345,
    filter: "viewable",
    page: 1,
    perPage: 10,
    sort: "date",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

##### seasonId: `number`<a id="seasonid-number"></a>

The ID of the season.

##### filter: `'viewable'`<a id="filter-viewable"></a>

The attribute by which to filter the results.  Option descriptions:  * `viewable` - Filter by viewable videos. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### sort: `'date' | 'default' | 'manual' | 'name' | 'purchase_time' | 'release_date'`<a id="sort-date--default--manual--name--purchase_time--release_date"></a>

The way to sort the results.  Option descriptions:  * `date` - Sort the results by date.  * `default` - Use the default sorting method.  * `manual` - Sort the results manually.  * `name` - Sort the results by name.  * `purchase_time` - Sort the results by time of purchase.  * `release_date` - Sort the results by release date. 

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/seasons/{season_id}/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandSeasons.listAll`<a id="vimeoondemandseasonslistall"></a>

This method returns every season on the specified On Demand page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await vimeo.onDemandSeasons.listAll({
  ondemandId: 61326,
  direction: "asc",
  filter: "viewable",
  page: 1,
  perPage: 10,
  sort: "date",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'viewable'`<a id="filter-viewable"></a>

The attribute by which to filter the results.  Option descriptions:  * `viewable` - Filter by viewable seasons. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### sort: `'date' | 'manual'`<a id="sort-date--manual"></a>

The way to sort the results.  Option descriptions:  * `date` - Sort the results by date.  * `manual` - Sort the results manually. 

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandSeason](./models/on-demand-season.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/seasons` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandSeasons.specificGet`<a id="vimeoondemandseasonsspecificget"></a>

This method returns a single season on the specified On Demand page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const specificGetResponse = await vimeo.onDemandSeasons.specificGet({
  ondemandId: 61326,
  seasonId: 12345,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

##### seasonId: `number`<a id="seasonid-number"></a>

The ID of the season.

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandSeason](./models/on-demand-season.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/seasons/{season_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandVideos.addVideoToPage`<a id="vimeoondemandvideosaddvideotopage"></a>

This method adds a video to the specified On Demand page. The authenticated user must be the owner of the page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addVideoToPageResponse = await vimeo.onDemandVideos.addVideoToPage({
  ondemandId: 61326,
  videoId: 12345,
  position: 10,
  release_year: 2018,
  type: "extra",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: `string`<a id="type-string"></a>

The type of the video.  Option descriptions:  * `extra` - The video type is extra footage.  * `main` - The video type is the main video.  * `trailer` - The video type is a trailer. 

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### buy: [`OnDemandVideosAddVideoToPageRequestBuy`](./models/on-demand-videos-add-video-to-page-request-buy.ts)<a id="buy-ondemandvideosaddvideotopagerequestbuymodelson-demand-videos-add-video-to-page-request-buyts"></a>

##### position: `number`<a id="position-number"></a>

The position of the video in the On Demand collection.

##### release_year: `number`<a id="release_year-number"></a>

The release year of the video.

##### rent: [`OnDemandVideosAddVideoToPageRequestRent`](./models/on-demand-videos-add-video-to-page-request-rent.ts)<a id="rent-ondemandvideosaddvideotopagerequestrentmodelson-demand-videos-add-video-to-page-request-rentts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandVideo](./models/on-demand-video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/videos/{video_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandVideos.getAllVideos`<a id="vimeoondemandvideosgetallvideos"></a>

This method returns every video on the specified On Demand page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllVideosResponse = await vimeo.onDemandVideos.getAllVideos({
  ondemandId: 61326,
  direction: "asc",
  filter: "all",
  page: 1,
  perPage: 10,
  sort: "date",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'all' | 'buy' | 'expiring_soon' | 'extra' | 'main' | 'main.viewable' | 'rent' | 'trailer' | 'unwatched' | 'viewable' | 'watched'`<a id="filter-all--buy--expiring_soon--extra--main--mainviewable--rent--trailer--unwatched--viewable--watched"></a>

The attribute by which to filter the results.  Option descriptions:  * `all` - Filter for all videos.  * `buy` - Filter for purchased videos.  * `expiring_soon` - Filter for videos that expire soon.  * `extra` - Filter for extra footage videos.  * `main` - Filter for main videos.  * `main.viewable` - Filter for videos that are both the main video and are viewable.  * `rent` - Filter for rented videos.  * `trailer` - Filter for trailer videos.  * `unwatched` - Filter for unwatched videos.  * `viewable` - Filter for videos that are viewable.  * `watched` - Filter for watched videos. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### sort: `'date' | 'default' | 'episode' | 'manual' | 'name' | 'purchase_time' | 'release_date'`<a id="sort-date--default--episode--manual--name--purchase_time--release_date"></a>

The way to sort the results.  Option descriptions:  * `date` - Sort the results by date.  * `default` - Use the default sorting method.  * `episode` - Sort the results by episode.  * `manual` - Sort the results manually.  * `name` - Sort the results by name.  * `purchase_time` - Sort the results by time of purchase.  * `release_date` - Sort the results by release date. 

#### 🔄 Return<a id="🔄-return"></a>

[OnDemandVideo](./models/on-demand-video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandVideos.removeFromPage`<a id="vimeoondemandvideosremovefrompage"></a>

This method removes a video from the specified On Demand page. The authenticated user must be the owner of the page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFromPageResponse = await vimeo.onDemandVideos.removeFromPage({
  ondemandId: 61326,
  videoId: 12345,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/videos/{video_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.onDemandVideos.specificVideoGet`<a id="vimeoondemandvideosspecificvideoget"></a>

This method returns a single video on the specified On Demand page. Use this method to determine whether the video is on the page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const specificVideoGetResponse = await vimeo.onDemandVideos.specificVideoGet({
  ondemandId: 61326,
  videoId: 12345,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ondemandId: `number`<a id="ondemandid-number"></a>

The ID of the On Demand page.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ondemand/pages/{ondemand_id}/videos/{video_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.paymentsEssentials.getPaymentMethodInfo`<a id="vimeopaymentsessentialsgetpaymentmethodinfo"></a>

This method returns information about the specified Vimeo payments service payment method.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPaymentMethodInfoResponse =
  await vimeo.paymentsEssentials.getPaymentMethodInfo({
    paymentMethodId: "abc12345",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paymentMethodId: `string`<a id="paymentmethodid-string"></a>

The ID of the payment method.

#### 🔄 Return<a id="🔄-return"></a>

[PaymentMethod](./models/payment-method.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/payment_methods/{payment_method_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.paymentsEssentials.getSubscriptionInfo`<a id="vimeopaymentsessentialsgetsubscriptioninfo"></a>

This method returns information about the specified Vimeo payments service subscription.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSubscriptionInfoResponse =
  await vimeo.paymentsEssentials.getSubscriptionInfo({
    subscriptionId: "abc12345",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### subscriptionId: `string`<a id="subscriptionid-string"></a>

The ID of the subscription.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/{subscription_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.paymentsEssentials.listPaymentMethods`<a id="vimeopaymentsessentialslistpaymentmethods"></a>

This method returns a list of all Vimeo payments service payment methods that are available to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPaymentMethodsResponse =
  await vimeo.paymentsEssentials.listPaymentMethods({
    cardmemberName: "John Doe",
    page: 1,
    perPage: 10,
    showDisabled: false,
    userId: 12345,
    type: "applepay",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### type: `string`<a id="type-string"></a>

The type of payment method.  Option descriptions:  * `applepay` - The payment method is Apple Pay.  * `bank_account` - The payment method is a bank account.  * `card` - The payment method is a credit or debit card.  * `googlepay` - The payment method is Google Pay.  * `paypal` - The payment method is a PayPal account. 

##### cardmemberName: `string`<a id="cardmembername-string"></a>

The name of the card member.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### showDisabled: `boolean`<a id="showdisabled-boolean"></a>

Whether to return disabled payment methods.

#### 🔄 Return<a id="🔄-return"></a>

[PaymentMethod](./models/payment-method.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/payment_methods` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.portfoliosEssentials.getAllUserPortfolios`<a id="vimeoportfoliosessentialsgetalluserportfolios"></a>

This method returns every portfolio belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllUserPortfoliosResponse =
  await vimeo.portfoliosEssentials.getAllUserPortfolios({
    direction: "asc",
    page: 1,
    perPage: 10,
    query: "Stop motion",
    sort: "alphabetical",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date'`<a id="sort-alphabetical--date"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by creation date. 

#### 🔄 Return<a id="🔄-return"></a>

[Portfolio](./models/portfolio.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/portfolios` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.portfoliosEssentials.getUserPortfolio`<a id="vimeoportfoliosessentialsgetuserportfolio"></a>

This method returns a single portfolio belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserPortfolioResponse =
  await vimeo.portfoliosEssentials.getUserPortfolio({
    portfolioId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portfolioId: `number`<a id="portfolioid-number"></a>

The ID of the portfolio.

#### 🔄 Return<a id="🔄-return"></a>

[Portfolio](./models/portfolio.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/portfolios/{portfolio_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.portfoliosEssentials.portfolio`<a id="vimeoportfoliosessentialsportfolio"></a>

This method returns a single portfolio belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const portfolioResponse = await vimeo.portfoliosEssentials.portfolio({
  portfolioId: 12345,
  userId: 152184,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portfolioId: `number`<a id="portfolioid-number"></a>

The ID of the portfolio.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[Portfolio](./models/portfolio.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/portfolios/{portfolio_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.portfoliosEssentials.portfolios`<a id="vimeoportfoliosessentialsportfolios"></a>

This method returns every portfolio belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const portfoliosResponse = await vimeo.portfoliosEssentials.portfolios({
  userId: 152184,
  direction: "asc",
  page: 1,
  perPage: 10,
  query: "Stop motion",
  sort: "alphabetical",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date'`<a id="sort-alphabetical--date"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by creation date. 

#### 🔄 Return<a id="🔄-return"></a>

[Portfolio](./models/portfolio.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/portfolios` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.portfoliosVideos.addVideoToPortfolio`<a id="vimeoportfoliosvideosaddvideotoportfolio"></a>

This method adds a video to the specified portfolio belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addVideoToPortfolioResponse =
  await vimeo.portfoliosVideos.addVideoToPortfolio({
    portfolioId: 12345,
    userId: 152184,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portfolioId: `number`<a id="portfolioid-number"></a>

The ID of the portfolio.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.portfoliosVideos.getAllPortfolioVideos`<a id="vimeoportfoliosvideosgetallportfoliovideos"></a>

This method returns every video from the specified portfolio belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllPortfolioVideosResponse =
  await vimeo.portfoliosVideos.getAllPortfolioVideos({
    portfolioId: 12345,
    containingUri: "/videos/258684937",
    filter: "embeddable",
    filterEmbeddable: true,
    page: 1,
    perPage: 10,
    sort: "alphabetical",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portfolioId: `number`<a id="portfolioid-number"></a>

The ID of the portfolio.

##### containingUri: `string`<a id="containinguri-string"></a>

The page that contains the video URI.

##### filter: `'embeddable'`<a id="filter-embeddable"></a>

The attribute by which to filter the results.  Option descriptions:  * `embeddable` - Return embeddable videos. 

##### filterEmbeddable: `boolean`<a id="filterembeddable-boolean"></a>

Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### sort: `'alphabetical' | 'comments' | 'date' | 'default' | 'likes' | 'manual' | 'plays'`<a id="sort-alphabetical--comments--date--default--likes--manual--plays"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `comments` - Sort the results by number of comments.  * `date` - Sort the results by creation date.  * `default` - Use the default sorting method.  * `likes` - Sort the results by number of likes.  * `manual` - Sort the results by their user-specified order.  * `plays` - Sort the results by number of plays. 

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/portfolios/{portfolio_id}/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.portfoliosVideos.getAllPortfolioVideos_0`<a id="vimeoportfoliosvideosgetallportfoliovideos_0"></a>

This method returns every video from the specified portfolio belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllPortfolioVideos_0Response =
  await vimeo.portfoliosVideos.getAllPortfolioVideos_0({
    portfolioId: 12345,
    userId: 152184,
    containingUri: "/videos/258684937",
    filter: "embeddable",
    filterEmbeddable: true,
    page: 1,
    perPage: 10,
    sort: "alphabetical",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portfolioId: `number`<a id="portfolioid-number"></a>

The ID of the portfolio.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### containingUri: `string`<a id="containinguri-string"></a>

The page that contains the video URI.

##### filter: `'embeddable'`<a id="filter-embeddable"></a>

The attribute by which to filter the results.  Option descriptions:  * `embeddable` - Return embeddable videos. 

##### filterEmbeddable: `boolean`<a id="filterembeddable-boolean"></a>

Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### sort: `'alphabetical' | 'comments' | 'date' | 'default' | 'likes' | 'manual' | 'plays'`<a id="sort-alphabetical--comments--date--default--likes--manual--plays"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `comments` - Sort the results by number of comments.  * `date` - Sort the results by creation date.  * `default` - Use the default sorting method.  * `likes` - Sort the results by number of likes.  * `manual` - Sort the results by their user-specified order.  * `plays` - Sort the results by number of plays. 

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/portfolios/{portfolio_id}/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.portfoliosVideos.getSpecificVideo`<a id="vimeoportfoliosvideosgetspecificvideo"></a>

This method returns a single video from the specified portfolio belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificVideoResponse = await vimeo.portfoliosVideos.getSpecificVideo({
  portfolioId: 12345,
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portfolioId: `number`<a id="portfolioid-number"></a>

The ID of the portfolio.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/portfolios/{portfolio_id}/videos/{video_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.portfoliosVideos.getSpecificVideo_0`<a id="vimeoportfoliosvideosgetspecificvideo_0"></a>

This method returns a single video from the specified portfolio belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificVideo_0Response =
  await vimeo.portfoliosVideos.getSpecificVideo_0({
    portfolioId: 12345,
    userId: 152184,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portfolioId: `number`<a id="portfolioid-number"></a>

The ID of the portfolio.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.portfoliosVideos.putVideoToPortfolio`<a id="vimeoportfoliosvideosputvideotoportfolio"></a>

This method adds a video to the specified portfolio belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const putVideoToPortfolioResponse =
  await vimeo.portfoliosVideos.putVideoToPortfolio({
    portfolioId: 12345,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portfolioId: `number`<a id="portfolioid-number"></a>

The ID of the portfolio.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/portfolios/{portfolio_id}/videos/{video_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.portfoliosVideos.removeFromPortfolio`<a id="vimeoportfoliosvideosremovefromportfolio"></a>

This method removes a video from the specified portfolio belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFromPortfolioResponse =
  await vimeo.portfoliosVideos.removeFromPortfolio({
    portfolioId: 12345,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portfolioId: `number`<a id="portfolioid-number"></a>

The ID of the portfolio.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/portfolios/{portfolio_id}/videos/{video_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.portfoliosVideos.removeFromPortfolioVideo`<a id="vimeoportfoliosvideosremovefromportfoliovideo"></a>

This method removes a video from the specified portfolio belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFromPortfolioVideoResponse =
  await vimeo.portfoliosVideos.removeFromPortfolioVideo({
    portfolioId: 12345,
    userId: 152184,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portfolioId: `number`<a id="portfolioid-number"></a>

The ID of the portfolio.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesCustomShowcaseLogos.addCustomLogo`<a id="vimeoshowcasescustomshowcaselogosaddcustomlogo"></a>

This method adds an image file as a custom logo to the specified showcase. The authenticated user must be the owner of the showcase.

For information on how to upload the logo, see our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addCustomLogoResponse =
  await vimeo.showcasesCustomShowcaseLogos.addCustomLogo({
    albumId: 3706071,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/albums/{album_id}/logos` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesCustomShowcaseLogos.deleteCustomLogo`<a id="vimeoshowcasescustomshowcaselogosdeletecustomlogo"></a>

This method deletes the specified custom logo from its showcase. The authenticated user must be the owner of the showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCustomLogoResponse =
  await vimeo.showcasesCustomShowcaseLogos.deleteCustomLogo({
    albumId: 3706071,
    logoId: 12345,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### logoId: `number`<a id="logoid-number"></a>

The ID of the custom logo.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/albums/{album_id}/logos/{logo_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesCustomShowcaseLogos.getSpecificLogo`<a id="vimeoshowcasescustomshowcaselogosgetspecificlogo"></a>

This method returns a single custom logo of the specified showcase. The authenticated user must be the owner of the showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificLogoResponse =
  await vimeo.showcasesCustomShowcaseLogos.getSpecificLogo({
    albumId: 3706071,
    logoId: 12345,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### logoId: `number`<a id="logoid-number"></a>

The ID of the custom logo.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/albums/{album_id}/logos/{logo_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesCustomShowcaseLogos.listAllCustomLogos`<a id="vimeoshowcasescustomshowcaselogoslistallcustomlogos"></a>

This method returns every custom logo of the specified showcase. The authenticated user must be the owner of the showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllCustomLogosResponse =
  await vimeo.showcasesCustomShowcaseLogos.listAllCustomLogos({
    albumId: 3706071,
    userId: 152184,
    page: 1,
    perPage: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/albums/{album_id}/logos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesCustomShowcaseLogos.replaceLogo`<a id="vimeoshowcasescustomshowcaselogosreplacelogo"></a>

This method replaces the specified custom showcase logo with a new image file. The authenticated user must be the owner of the showcase.

For information on how to upload the logo, see our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const replaceLogoResponse =
  await vimeo.showcasesCustomShowcaseLogos.replaceLogo({
    albumId: 3706071,
    logoId: 12345,
    userId: 152184,
    active: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### logoId: `number`<a id="logoid-number"></a>

The ID of the custom logo.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### active: `boolean`<a id="active-boolean"></a>

Whether to make this image the active showcase logo.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/albums/{album_id}/logos/{logo_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesCustomShowcaseThumbnails.addCustomThumbnail`<a id="vimeoshowcasescustomshowcasethumbnailsaddcustomthumbnail"></a>

This method adds an uploaded image file as a custom thumbnail for the specified showcase. The image doesn't need to be a still from a showcase video, unlike with the [standard thumbnail method](https://developer.vimeo.com/api/reference/albums#set_video_as_album_thumbnail). The authenticated user must be the owner of the showcase.

For information on how to upload the thumbnail, see our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide, and follow the same steps.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addCustomThumbnailResponse =
  await vimeo.showcasesCustomShowcaseThumbnails.addCustomThumbnail({
    albumId: 3706071,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/albums/{album_id}/custom_thumbnails` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesCustomShowcaseThumbnails.deleteCustomThumbnail`<a id="vimeoshowcasescustomshowcasethumbnailsdeletecustomthumbnail"></a>

This method deletes the specified custom thumbnail from its showcase. The authenticated user must be the owner of the showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCustomThumbnailResponse =
  await vimeo.showcasesCustomShowcaseThumbnails.deleteCustomThumbnail({
    albumId: 3706071,
    thumbnailId: 12345,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### thumbnailId: `number`<a id="thumbnailid-number"></a>

The ID of the custom thumbnail.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesCustomShowcaseThumbnails.getSpecificThumbnail`<a id="vimeoshowcasescustomshowcasethumbnailsgetspecificthumbnail"></a>

This method returns a single custom thumbnail of the specified showcase. The authenticated user must be the owner of the showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificThumbnailResponse =
  await vimeo.showcasesCustomShowcaseThumbnails.getSpecificThumbnail({
    albumId: 3706071,
    thumbnailId: 12345,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### thumbnailId: `number`<a id="thumbnailid-number"></a>

The ID of the custom thumbnail.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesCustomShowcaseThumbnails.list`<a id="vimeoshowcasescustomshowcasethumbnailslist"></a>

This method returns every custom thumbnail of the specified showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await vimeo.showcasesCustomShowcaseThumbnails.list({
  albumId: 3706071,
  userId: 152184,
  page: 1,
  perPage: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/albums/{album_id}/custom_thumbnails` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesCustomShowcaseThumbnails.replaceCustomThumbnail`<a id="vimeoshowcasescustomshowcasethumbnailsreplacecustomthumbnail"></a>

This method replaces the specified custom showcase thumbnail with a new image file. The authenticated user must be the owner of the showcase.

For information on how to upload the thumbnail, see our [Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails) guide.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const replaceCustomThumbnailResponse =
  await vimeo.showcasesCustomShowcaseThumbnails.replaceCustomThumbnail({
    albumId: 3706071,
    thumbnailId: 12345,
    userId: 152184,
    active: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### thumbnailId: `number`<a id="thumbnailid-number"></a>

The ID of the custom thumbnail.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### active: `boolean`<a id="active-boolean"></a>

Whether to make this image the active custom showcase thumbnail.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesEssentials.createUserShowcase`<a id="vimeoshowcasesessentialscreateusershowcase"></a>

This method creates a new showcase for the specified user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createUserShowcaseResponse =
  await vimeo.showcasesEssentials.createUserShowcase({
    description: "Vimeo holiday videos!",
    brand_color: "ff66ee",
    hide_from_vimeo: false,
    hide_nav: true,
    hide_upcoming: false,
    layout: "grid",
    name: "Vimeo Holiday Videos!",
    password: "hunter1",
    privacy: "anybody",
    review_mode: true,
    sort: "added_first",
    theme: "dark",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the showcase.

##### description: `string`<a id="description-string"></a>

The description of the showcase.

##### brand_color: `string`<a id="brand_color-string"></a>

The hexadecimal code for the color of the player buttons and showcase controls.

##### hide_from_vimeo: `boolean`<a id="hide_from_vimeo-boolean"></a>

Whether the showcase should be hidden from Vimeo when unlisted.

##### hide_nav: `boolean`<a id="hide_nav-boolean"></a>

Whether to hide Vimeo navigation when displaying the showcase.

##### hide_upcoming: `boolean`<a id="hide_upcoming-boolean"></a>

Whether to include the upcoming event in the showcase.

##### layout: `string`<a id="layout-string"></a>

The type of layout for presenting the showcase.  Option descriptions:  * `grid` - The videos appear in a grid.  * `player` - The videos appear in the player. 

##### password: `string`<a id="password-string"></a>

The showcase\\\'s password. This field is required only when **privacy** is `password`.

##### privacy: `string`<a id="privacy-string"></a>

The privacy level of the showcase.  Option descriptions:  * `anybody` - Anyone can access the showcase, either on Vimeo or through an embed.  * `embed_only` - The showcase doesn\\\'t appear on Vimeo, but it can be embedded on other sites.  * `nobody` - No one can access the showcase, including the authenticated user.  * `password` - Only those with the password can access the showcase.  * `team` - Only members of the authenticated user\\\'s team can access the showcase.  * `unlisted` - The showcase can\\\'t be accessed if the URL omits its unlisted hash. 

##### review_mode: `boolean`<a id="review_mode-boolean"></a>

Whether showcase videos use the review mode URL.

##### sort: `string`<a id="sort-string"></a>

The default sort order of the videos as they appear in the showcase.  Option descriptions:  * `added_first` - The videos appear according to when they were added to the showcase, with the most recently added first.  * `added_last` - The videos appear according to when they were added to the showcase, with the most recently added last.  * `alphabetical` - The videos appear alphabetically by their title.  * `arranged` - The videos appear as arranged by the owner of the showcase.  * `comments` - The videos appear according to their number of comments.  * `likes` - The videos appear according to their number of likes.  * `newest` - The videos appear in chronological order with the newest first.  * `oldest` - The videos appear in chronological order with the oldest first.  * `plays` - The videos appear according to their number of plays. 

##### theme: `string`<a id="theme-string"></a>

The color theme of the showcase.  Option descriptions:  * `dark` - The showcase uses the dark theme.  * `standard` - The showcase uses the standard theme. 

#### 🔄 Return<a id="🔄-return"></a>

[Album](./models/album.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/albums` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesEssentials.deleteShowcase`<a id="vimeoshowcasesessentialsdeleteshowcase"></a>

This method deletes the specified showcase. The authenticated user must be the owner of the showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteShowcaseResponse = await vimeo.showcasesEssentials.deleteShowcase({
  albumId: 3706071,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/albums/{album_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesEssentials.editShowcase`<a id="vimeoshowcasesessentialseditshowcase"></a>

This method edits the specified showcase. The authenticated user must be the owner of the showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editShowcaseResponse = await vimeo.showcasesEssentials.editShowcase({
  albumId: 3706071,
  description: "Vimeo holiday videos!",
  brand_color: "ff66ee",
  domain: "mycustomdomain.com",
  hide_nav: true,
  hide_upcoming: false,
  layout: "grid",
  name: "Vimeo Holiday Videos!",
  password: "hunter1",
  privacy: "anybody",
  review_mode: true,
  sort: "added_first",
  theme: "dark",
  url: "my-custom-url",
  use_custom_domain: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### description: `string`<a id="description-string"></a>

The description of the showcase.

##### brand_color: `string`<a id="brand_color-string"></a>

The hexadecimal code for the color of the player buttons and showcase controls.

##### domain: `string`<a id="domain-string"></a>

The custom domain of the showcase.

##### hide_nav: `boolean`<a id="hide_nav-boolean"></a>

Whether to hide Vimeo navigation when displaying the showcase.

##### hide_upcoming: `boolean`<a id="hide_upcoming-boolean"></a>

Whether to include the upcoming event in the showcase.

##### layout: `string`<a id="layout-string"></a>

The type of layout for presenting the showcase.  Option descriptions:  * `grid` - The videos appear in a grid.  * `player` - The videos appear in the player. 

##### name: `string`<a id="name-string"></a>

The name of the showcase.

##### password: `string`<a id="password-string"></a>

The showcase\\\'s password. This field is required only when **privacy** is `password`.

##### privacy: `string`<a id="privacy-string"></a>

The privacy level of the showcase.  Option descriptions:  * `anybody` - Anyone can access the showcase, either on Vimeo or through an embed.  * `embed_only` - The showcase doesn\\\'t appear on Vimeo, but it can be embedded on other sites.  * `nobody` - No one can access the showcase, including the authenticated user.  * `password` - Only people with the password can access the showcase.  * `team` - Only members of the authenticated user\\\'s team can access the showcase.  * `unlisted` - The showcase can\\\'t be accessed if the URL omits its unlisted hash. 

##### review_mode: `boolean`<a id="review_mode-boolean"></a>

Whether showcase videos use the review mode URL.

##### sort: `string`<a id="sort-string"></a>

The default sort order of the videos as they appear in the showcase.  Option descriptions:  * `added_first` - The videos appear according to when they were added to the showcase, with the most recently added first.  * `added_last` - The videos appear according to when they were added to the showcase, with the most recently added last.  * `alphabetical` - The videos appear alphabetically by their title.  * `arranged` - The videos appear as arranged by the owner of the showcase.  * `comments` - The videos appear according to their number of comments.  * `likes` - The videos appear according to their number of likes.  * `newest` - The videos appear in chronological order with the newest first.  * `oldest` - The videos appear in chronological order with the oldest first.  * `plays` - The videos appear according to their number of plays. 

##### theme: `string`<a id="theme-string"></a>

The color theme of the showcase.  Option descriptions:  * `dark` - The showcase uses the dark theme.  * `standard` - The showcase uses the standard theme. 

##### url: `string`<a id="url-string"></a>

The custom Vimeo URL of the showcase.

##### use_custom_domain: `boolean`<a id="use_custom_domain-boolean"></a>

Whether the user has opted for a custom domain for their showcase.

#### 🔄 Return<a id="🔄-return"></a>

[Album](./models/album.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/albums/{album_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesEssentials.getAllUserShowcases`<a id="vimeoshowcasesessentialsgetallusershowcases"></a>

This method returns every showcase belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllUserShowcasesResponse =
  await vimeo.showcasesEssentials.getAllUserShowcases({
    direction: "asc",
    page: 1,
    perPage: 10,
    query: "Stop motion",
    sort: "alphabetical",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date' | 'duration' | 'videos'`<a id="sort-alphabetical--date--duration--videos"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by date of creation.  * `duration` - Sort the results by duration.  * `videos` - Sort the results by the number of videos. 

#### 🔄 Return<a id="🔄-return"></a>

[Album](./models/album.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/albums` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesEssentials.getSpecificShowcase`<a id="vimeoshowcasesessentialsgetspecificshowcase"></a>

This method returns the specified showcase. The authenticated user must be the owner of the showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificShowcaseResponse =
  await vimeo.showcasesEssentials.getSpecificShowcase({
    albumId: 3706071,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

#### 🔄 Return<a id="🔄-return"></a>

[Album](./models/album.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/albums/{album_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesEssentials.showcase`<a id="vimeoshowcasesessentialsshowcase"></a>

This method creates a new showcase for the specified user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showcaseResponse = await vimeo.showcasesEssentials.showcase({
  userId: 152184,
  description: "Vimeo holiday videos!",
  brand_color: "ff66ee",
  hide_from_vimeo: false,
  hide_nav: true,
  hide_upcoming: false,
  layout: "grid",
  name: "Vimeo Holiday Videos!",
  password: "hunter1",
  privacy: "anybody",
  review_mode: true,
  sort: "added_first",
  theme: "dark",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the showcase.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### description: `string`<a id="description-string"></a>

The description of the showcase.

##### brand_color: `string`<a id="brand_color-string"></a>

The hexadecimal code for the color of the player buttons and showcase controls.

##### hide_from_vimeo: `boolean`<a id="hide_from_vimeo-boolean"></a>

Whether the showcase should be hidden from Vimeo when unlisted.

##### hide_nav: `boolean`<a id="hide_nav-boolean"></a>

Whether to hide Vimeo navigation when displaying the showcase.

##### hide_upcoming: `boolean`<a id="hide_upcoming-boolean"></a>

Whether to include the upcoming event in the showcase.

##### layout: `string`<a id="layout-string"></a>

The type of layout for presenting the showcase.  Option descriptions:  * `grid` - The videos appear in a grid.  * `player` - The videos appear in the player. 

##### password: `string`<a id="password-string"></a>

The showcase\\\'s password. This field is required only when **privacy** is `password`.

##### privacy: `string`<a id="privacy-string"></a>

The privacy level of the showcase.  Option descriptions:  * `anybody` - Anyone can access the showcase, either on Vimeo or through an embed.  * `embed_only` - The showcase doesn\\\'t appear on Vimeo, but it can be embedded on other sites.  * `nobody` - No one can access the showcase, including the authenticated user.  * `password` - Only those with the password can access the showcase.  * `team` - Only members of the authenticated user\\\'s team can access the showcase.  * `unlisted` - The showcase can\\\'t be accessed if the URL omits its unlisted hash. 

##### review_mode: `boolean`<a id="review_mode-boolean"></a>

Whether showcase videos use the review mode URL.

##### sort: `string`<a id="sort-string"></a>

The default sort order of the videos as they appear in the showcase.  Option descriptions:  * `added_first` - The videos appear according to when they were added to the showcase, with the most recently added first.  * `added_last` - The videos appear according to when they were added to the showcase, with the most recently added last.  * `alphabetical` - The videos appear alphabetically by their title.  * `arranged` - The videos appear as arranged by the owner of the showcase.  * `comments` - The videos appear according to their number of comments.  * `likes` - The videos appear according to their number of likes.  * `newest` - The videos appear in chronological order with the newest first.  * `oldest` - The videos appear in chronological order with the oldest first.  * `plays` - The videos appear according to their number of plays. 

##### theme: `string`<a id="theme-string"></a>

The color theme of the showcase.  Option descriptions:  * `dark` - The showcase uses the dark theme.  * `standard` - The showcase uses the standard theme. 

#### 🔄 Return<a id="🔄-return"></a>

[Album](./models/album.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/albums` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesEssentials.showcase_0`<a id="vimeoshowcasesessentialsshowcase_0"></a>

This method returns the specified showcase. The authenticated user must be the owner of the showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showcase_0Response = await vimeo.showcasesEssentials.showcase_0({
  albumId: 3706071,
  userId: 152184,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[Album](./models/album.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/albums/{album_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesEssentials.showcase_1`<a id="vimeoshowcasesessentialsshowcase_1"></a>

This method deletes the specified showcase. The authenticated user must be the owner of the showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showcase_1Response = await vimeo.showcasesEssentials.showcase_1({
  albumId: 3706071,
  userId: 152184,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/albums/{album_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesEssentials.showcase_2`<a id="vimeoshowcasesessentialsshowcase_2"></a>

This method edits the specified showcase. The authenticated user must be the owner of the showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showcase_2Response = await vimeo.showcasesEssentials.showcase_2({
  albumId: 3706071,
  userId: 152184,
  description: "Vimeo holiday videos!",
  brand_color: "ff66ee",
  domain: "mycustomdomain.com",
  hide_nav: true,
  hide_upcoming: false,
  layout: "grid",
  name: "Vimeo Holiday Videos!",
  password: "hunter1",
  privacy: "anybody",
  review_mode: true,
  sort: "added_first",
  theme: "dark",
  url: "my-custom-url",
  use_custom_domain: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### description: `string`<a id="description-string"></a>

The description of the showcase.

##### brand_color: `string`<a id="brand_color-string"></a>

The hexadecimal code for the color of the player buttons and showcase controls.

##### domain: `string`<a id="domain-string"></a>

The custom domain of the showcase.

##### hide_nav: `boolean`<a id="hide_nav-boolean"></a>

Whether to hide Vimeo navigation when displaying the showcase.

##### hide_upcoming: `boolean`<a id="hide_upcoming-boolean"></a>

Whether to include the upcoming event in the showcase.

##### layout: `string`<a id="layout-string"></a>

The type of layout for presenting the showcase.  Option descriptions:  * `grid` - The videos appear in a grid.  * `player` - The videos appear in the player. 

##### name: `string`<a id="name-string"></a>

The name of the showcase.

##### password: `string`<a id="password-string"></a>

The showcase\\\'s password. This field is required only when **privacy** is `password`.

##### privacy: `string`<a id="privacy-string"></a>

The privacy level of the showcase.  Option descriptions:  * `anybody` - Anyone can access the showcase, either on Vimeo or through an embed.  * `embed_only` - The showcase doesn\\\'t appear on Vimeo, but it can be embedded on other sites.  * `nobody` - No one can access the showcase, including the authenticated user.  * `password` - Only people with the password can access the showcase.  * `team` - Only members of the authenticated user\\\'s team can access the showcase.  * `unlisted` - The showcase can\\\'t be accessed if the URL omits its unlisted hash. 

##### review_mode: `boolean`<a id="review_mode-boolean"></a>

Whether showcase videos use the review mode URL.

##### sort: `string`<a id="sort-string"></a>

The default sort order of the videos as they appear in the showcase.  Option descriptions:  * `added_first` - The videos appear according to when they were added to the showcase, with the most recently added first.  * `added_last` - The videos appear according to when they were added to the showcase, with the most recently added last.  * `alphabetical` - The videos appear alphabetically by their title.  * `arranged` - The videos appear as arranged by the owner of the showcase.  * `comments` - The videos appear according to their number of comments.  * `likes` - The videos appear according to their number of likes.  * `newest` - The videos appear in chronological order with the newest first.  * `oldest` - The videos appear in chronological order with the oldest first.  * `plays` - The videos appear according to their number of plays. 

##### theme: `string`<a id="theme-string"></a>

The color theme of the showcase.  Option descriptions:  * `dark` - The showcase uses the dark theme.  * `standard` - The showcase uses the standard theme. 

##### url: `string`<a id="url-string"></a>

The custom Vimeo URL of the showcase.

##### use_custom_domain: `boolean`<a id="use_custom_domain-boolean"></a>

Whether the user has opted for a custom domain for their showcase.

#### 🔄 Return<a id="🔄-return"></a>

[Album](./models/album.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/albums/{album_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesEssentials.showcases`<a id="vimeoshowcasesessentialsshowcases"></a>

This method returns every showcase belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showcasesResponse = await vimeo.showcasesEssentials.showcases({
  userId: 152184,
  direction: "asc",
  page: 1,
  perPage: 10,
  query: "Stop motion",
  sort: "alphabetical",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date' | 'duration' | 'videos'`<a id="sort-alphabetical--date--duration--videos"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by date of creation.  * `duration` - Sort the results by duration.  * `videos` - Sort the results by the number of videos. 

#### 🔄 Return<a id="🔄-return"></a>

[Album](./models/album.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/albums` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesEssentials.showcases_0`<a id="vimeoshowcasesessentialsshowcases_0"></a>

This method adds videos and events to the specified showcases. The authenticated user must either be the owner of the showcase or have team permissions.

The present setup permits only one event per showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showcases_0Response = await vimeo.showcasesEssentials.showcases_0({
  userId: 152184,
  albumItemUris: "/videos/258684937,/live_events/273576296",
  albumUris: "/showcases/258684873, /showcases/356684937",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### albumItemUris: `string`<a id="albumitemuris-string"></a>

A comma-separated list of video or event URIs.

##### albumUris: `string`<a id="albumuris-string"></a>

A comma-separated list of showcase URIs.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/albums` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesShowcaseVideos.addToShowcase`<a id="vimeoshowcasesshowcasevideosaddtoshowcase"></a>

This method adds a single video to the specified showcase. The authenticated user must be the owner of the showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addToShowcaseResponse = await vimeo.showcasesShowcaseVideos.addToShowcase(
  {
    albumId: 12345,
    videoId: 196367152,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/albums/{album_id}/videos/{video_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesShowcaseVideos.addToShowcase_0`<a id="vimeoshowcasesshowcasevideosaddtoshowcase_0"></a>

This method adds a single video to the specified showcase. The authenticated user must be the owner of the showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addToShowcase_0Response =
  await vimeo.showcasesShowcaseVideos.addToShowcase_0({
    albumId: 12345,
    userId: 152184,
    videoId: 196367152,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/albums/{album_id}/videos/{video_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesShowcaseVideos.createShowcaseThumbnail`<a id="vimeoshowcasesshowcasevideoscreateshowcasethumbnail"></a>

This method creates a thumbnail image for a showcase from the specified frame of a showcase video. The authenticated user must be the owner of the showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createShowcaseThumbnailResponse =
  await vimeo.showcasesShowcaseVideos.createShowcaseThumbnail({
    albumId: 12345,
    videoId: 196367152,
    time_code: 300,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### time_code: `number`<a id="time_code-number"></a>

The time in seconds of the video frame to use as the thumbnail image.

#### 🔄 Return<a id="🔄-return"></a>

[Album](./models/album.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/albums/{album_id}/videos/{video_id}/set_album_thumbnail` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesShowcaseVideos.createShowcaseThumbnail_0`<a id="vimeoshowcasesshowcasevideoscreateshowcasethumbnail_0"></a>

This method creates a thumbnail image for a showcase from the specified frame of a showcase video. The authenticated user must be the owner of the showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createShowcaseThumbnail_0Response =
  await vimeo.showcasesShowcaseVideos.createShowcaseThumbnail_0({
    albumId: 12345,
    userId: 152184,
    videoId: 196367152,
    time_code: 300,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### time_code: `number`<a id="time_code-number"></a>

The time in seconds of the video frame to use as the thumbnail image.

#### 🔄 Return<a id="🔄-return"></a>

[Album](./models/album.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/albums/{album_id}/videos/{video_id}/set_album_thumbnail` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesShowcaseVideos.getShowcaseVideos`<a id="vimeoshowcasesshowcasevideosgetshowcasevideos"></a>

This method returns every video in the specified showcase. The authenticated user must be the owner of the showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getShowcaseVideosResponse =
  await vimeo.showcasesShowcaseVideos.getShowcaseVideos({
    albumId: 3706071,
    userId: 152184,
    containingUri: "/videos/258684937",
    direction: "asc",
    filter: "embeddable",
    filterEmbeddable: true,
    page: 1,
    password: "hunter1",
    perPage: 10,
    query: "Stop motion",
    sort: "alphabetical",
    weakSearch: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### containingUri: `string`<a id="containinguri-string"></a>

The page containing the video URI.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'embeddable'`<a id="filter-embeddable"></a>

The attribute by which to filter the results.  Option descriptions:  * `embeddable` - Filter the results by the **embeddable** attribute. 

##### filterEmbeddable: `boolean`<a id="filterembeddable-boolean"></a>

Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### password: `string`<a id="password-string"></a>

The password of the showcase.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'comments' | 'date' | 'default' | 'duration' | 'likes' | 'manual' | 'modified_time' | 'plays'`<a id="sort-alphabetical--comments--date--default--duration--likes--manual--modified_time--plays"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `comments` - Sort the results by number of comments.  * `date` - Sort the results by date.  * `default` - Sort the results by the default method.  * `duration` - Sort the results by duration.  * `likes` - Sort the results by number of likes.  * `manual` - Sort the results by their manual order.  * `modified_time` - Sort the results by last modification.  * `plays` - Sort the results by number of plays. 

##### weakSearch: `boolean`<a id="weaksearch-boolean"></a>

Whether to include private videos in the search. Please note that a separate search service provides this functionality. The service performs a partial text search on the video\'s name.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/albums/{album_id}/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesShowcaseVideos.getSpecificVideoInShowcase`<a id="vimeoshowcasesshowcasevideosgetspecificvideoinshowcase"></a>

This method returns a single video belonging to the specified showcase. The authenticated user must be the owner of the showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificVideoInShowcaseResponse =
  await vimeo.showcasesShowcaseVideos.getSpecificVideoInShowcase({
    albumId: 3706071,
    videoId: 196367152,
    password: "hunter1",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### password: `string`<a id="password-string"></a>

The password of the showcase.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/albums/{album_id}/videos/{video_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesShowcaseVideos.getSpecificVideoInShowcase_0`<a id="vimeoshowcasesshowcasevideosgetspecificvideoinshowcase_0"></a>

This method returns a single video belonging to the specified showcase. The authenticated user must be the owner of the showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificVideoInShowcase_0Response =
  await vimeo.showcasesShowcaseVideos.getSpecificVideoInShowcase_0({
    albumId: 3706071,
    userId: 152184,
    videoId: 196367152,
    password: "hunter1",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### password: `string`<a id="password-string"></a>

The password of the showcase.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/albums/{album_id}/videos/{video_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesShowcaseVideos.listAvailableShowcases`<a id="vimeoshowcasesshowcasevideoslistavailableshowcases"></a>

This endpoint returns every showcase to which the authenticated user can add or remove the specified video. The user must be the owner of the showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAvailableShowcasesResponse =
  await vimeo.showcasesShowcaseVideos.listAvailableShowcases({
    videoId: 258684937,
    page: 1,
    perPage: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Album](./models/album.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/available_albums` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesShowcaseVideos.listInShowcase`<a id="vimeoshowcasesshowcasevideoslistinshowcase"></a>

This method returns every video belonging to the authenticated user that can be added to or removed from the specified showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listInShowcaseResponse =
  await vimeo.showcasesShowcaseVideos.listInShowcase({
    albumId: 3706071,
    direction: "asc",
    page: 1,
    perPage: 10,
    sort: "alphabetical",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### sort: `'alphabetical' | 'comments' | 'date' | 'default' | 'duration' | 'last_user_action_event_date' | 'likes' | 'modified_time' | 'plays'`<a id="sort-alphabetical--comments--date--default--duration--last_user_action_event_date--likes--modified_time--plays"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `comments` - Sort the results by number of comments.  * `date` - Sort the results by date.  * `default` - Sort the results by the default method.  * `duration` - Sort the results by duration.  * `last_user_action_event_date` - Sort the results by most recent user interaction.  * `likes` - Sort the results by number of likes.  * `modified_time` - Sort the results by last modification.  * `plays` - Sort the results by number of plays. 

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/albums/{album_id}/available_videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesShowcaseVideos.listInShowcase_0`<a id="vimeoshowcasesshowcasevideoslistinshowcase_0"></a>

This method returns every video in the specified showcase. The authenticated user must be the owner of the showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listInShowcase_0Response =
  await vimeo.showcasesShowcaseVideos.listInShowcase_0({
    albumId: 3706071,
    containingUri: "/videos/258684937",
    direction: "asc",
    filter: "embeddable",
    filterEmbeddable: true,
    page: 1,
    password: "hunter1",
    perPage: 10,
    query: "Stop motion",
    sort: "alphabetical",
    weakSearch: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### containingUri: `string`<a id="containinguri-string"></a>

The page containing the video URI.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'embeddable'`<a id="filter-embeddable"></a>

The attribute by which to filter the results.  Option descriptions:  * `embeddable` - Filter the results by the **embeddable** attribute. 

##### filterEmbeddable: `boolean`<a id="filterembeddable-boolean"></a>

Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### password: `string`<a id="password-string"></a>

The password of the showcase.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'comments' | 'date' | 'default' | 'duration' | 'likes' | 'manual' | 'modified_time' | 'plays'`<a id="sort-alphabetical--comments--date--default--duration--likes--manual--modified_time--plays"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `comments` - Sort the results by number of comments.  * `date` - Sort the results by date.  * `default` - Sort the results by the default method.  * `duration` - Sort the results by duration.  * `likes` - Sort the results by number of likes.  * `manual` - Sort the results by their manual order.  * `modified_time` - Sort the results by last modification.  * `plays` - Sort the results by number of plays. 

##### weakSearch: `boolean`<a id="weaksearch-boolean"></a>

Whether to include private videos in the search. Please note that a separate search service provides this functionality. The service performs a partial text search on the video\'s name.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/albums/{album_id}/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesShowcaseVideos.removeFromShowcase`<a id="vimeoshowcasesshowcasevideosremovefromshowcase"></a>

This method removes the specified video from its showcase. The authenticated user must be the owner of the showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFromShowcaseResponse =
  await vimeo.showcasesShowcaseVideos.removeFromShowcase({
    albumId: 12345,
    videoId: 196367152,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/albums/{album_id}/videos/{video_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesShowcaseVideos.removeVideoFromShowcase`<a id="vimeoshowcasesshowcasevideosremovevideofromshowcase"></a>

This method removes the specified video from its showcase. The authenticated user must be the owner of the showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeVideoFromShowcaseResponse =
  await vimeo.showcasesShowcaseVideos.removeVideoFromShowcase({
    albumId: 12345,
    userId: 152184,
    videoId: 196367152,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/albums/{album_id}/videos/{video_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesShowcaseVideos.replaceShowcaseVideos`<a id="vimeoshowcasesshowcasevideosreplaceshowcasevideos"></a>

This method replaces all the videos in the specified showcase with a new set of one or more videos. The authenticated user must be the owner of the showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const replaceShowcaseVideosResponse =
  await vimeo.showcasesShowcaseVideos.replaceShowcaseVideos({
    albumId: 3706071,
    userId: 152184,
    videos: "/videos/258684937,/videos/273576296",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videos: `string`<a id="videos-string"></a>

A comma-separated list of video URIs corresponding to the videos to add.

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/albums/{album_id}/videos` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesShowcaseVideos.replaceVideos`<a id="vimeoshowcasesshowcasevideosreplacevideos"></a>

This method replaces all the videos in the specified showcase with a new set of one or more videos. The authenticated user must be the owner of the showcase.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const replaceVideosResponse = await vimeo.showcasesShowcaseVideos.replaceVideos(
  {
    albumId: 3706071,
    videos: "/videos/258684937,/videos/273576296",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videos: `string`<a id="videos-string"></a>

A comma-separated list of video URIs corresponding to the videos to add.

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/albums/{album_id}/videos` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesShowcaseVideos.setFeaturedVideo`<a id="vimeoshowcasesshowcasevideossetfeaturedvideo"></a>

This method sets the featured video of the specified showcase. The authenticated user must be the owner of the showcase, and the featured video must belong to it.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setFeaturedVideoResponse =
  await vimeo.showcasesShowcaseVideos.setFeaturedVideo({
    albumId: 12345,
    videoId: 196367152,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Album](./models/album.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/albums/{album_id}/videos/{video_id}/set_featured_video` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.showcasesShowcaseVideos.setFeaturedVideo_0`<a id="vimeoshowcasesshowcasevideossetfeaturedvideo_0"></a>

This method sets the featured video of the specified showcase. The authenticated user must be the owner of the showcase, and the featured video must belong to it.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setFeaturedVideo_0Response =
  await vimeo.showcasesShowcaseVideos.setFeaturedVideo_0({
    albumId: 12345,
    userId: 152184,
    videoId: 196367152,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### albumId: `number`<a id="albumid-number"></a>

The ID of the showcase.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Album](./models/album.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/albums/{album_id}/videos/{video_id}/set_featured_video` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.subscriptionPlansEssentials.plan`<a id="vimeosubscriptionplansessentialsplan"></a>

This method returns the specified subscription plan.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const planResponse = await vimeo.subscriptionPlansEssentials.plan({
  tier: "pro",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tier: `'advanced' | 'business' | 'free' | 'live_premium' | 'plus' | 'pro' | 'pro_unlimited' | 'standard' | 'starter'`<a id="tier-advanced--business--free--live_premium--plus--pro--pro_unlimited--standard--starter"></a>

The type of subscription plan.  Option descriptions:  * `advanced` - The plan type is Vimeo Advanced.  * `business` - The plan type is Vimeo Business.  * `free` - The plan type is Vimeo Free.  * `live_premium` - The plan type is Vimeo Premium.  * `plus` - The plan type is Vimeo Plus.  * `pro` - The plan type is Vimeo Pro.  * `pro_unlimited` - The plan type is Vimeo Pro Unlimited.  * `standard` - The plan type is Vimeo Standard.  * `starter` - The plan type is Vimeo Starter. 

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/subscription_plans/{tier}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.tagsEssentials.tag`<a id="vimeotagsessentialstag"></a>

This method returns the specified tag.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const tagResponse = await vimeo.tagsEssentials.tag({
  word: "awesome",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### word: `string`<a id="word-string"></a>

The tag to return.

#### 🔄 Return<a id="🔄-return"></a>

[Tag](./models/tag.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags/{word}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.teamsMembers.getMembershipInformation`<a id="vimeoteamsmembersgetmembershipinformation"></a>

This method returns information about the membership of the specified team. Usage is currently limited to the team join forms.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMembershipInformationResponse =
  await vimeo.teamsMembers.getMembershipInformation({
    code: "q3u4mrqoc3u4hcnqo34",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### code: `string`<a id="code-string"></a>

The code corresponding to the desired team. This value appears under `TeamUser` > `code`.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teammembers/{code}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.teamsMembers.getTeamMembershipInformation`<a id="vimeoteamsmembersgetteammembershipinformation"></a>

This method returns information about the membership of the specified team. Usage is currently limited to the team join forms.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTeamMembershipInformationResponse =
  await vimeo.teamsMembers.getTeamMembershipInformation({
    teamUserId: 3.14,
    userId: 3.14,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamUserId: `number`<a id="teamuserid-number"></a>

The ID of the team user.

##### userId: `number`<a id="userid-number"></a>

The ID of the team owner.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/team_users/{team_user_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.teamsMembers.getUserTeamRole`<a id="vimeoteamsmembersgetuserteamrole"></a>

This method returns information about the authenticated user's role on the specified team owner's team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserTeamRoleResponse = await vimeo.teamsMembers.getUserTeamRole({
  userId: 152184,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the team owner.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/team/role` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.tutorialEssentials.tutorial`<a id="vimeotutorialessentialstutorial"></a>

This method tests whether users who are working through the [Getting Started](https://developer.vimeo.com/api/guides/start) guides have set up their configurations correctly.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const tutorialResponse = await vimeo.tutorialEssentials.tutorial();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tutorial` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersAnalytics.getMetrics`<a id="vimeousersanalyticsgetmetrics"></a>

This method returns analytic metrics for the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMetricsResponse = await vimeo.usersAnalytics.getMetrics({
  userId: 123456,
  dimension: "country",
  direction: "asc",
  filterContent: "/folder/1233456,/video/7890123,/folder/123",
  filterCountries: ["UK,US,IN"],
  filterDeviceTypes: ["android,ios"],
  filterEmbedDomains: ["abc.com,xyz.com"],
  filterStreamingTypes: ["live,video"],
  from: "2021-05-30T00:00:00+00:00",
  page: 1,
  perPage: 50,
  sort: "average_percent_watched",
  timeInterval: "day",
  to: "2021-06-30T23:59:59+00:00",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### dimension: `'country' | 'device_type' | 'embed_domain' | 'total' | 'video'`<a id="dimension-country--device_type--embed_domain--total--video"></a>

The data dimension by which to group the results.  Option descriptions:  * `country` - Group the results by country.  * `device_type` - Group the results by device type.  * `embed_domain` - Group the results by embed domain.  * `total` - Group the results by the time range provided.  * `video` - Group the results by video. 

##### from: `string`<a id="from-string"></a>

The start date of the range of results in ISO 8601 format.

##### to: `string`<a id="to-string"></a>

The end date of the range of results in ISO 8601 format.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filterContent: `string`<a id="filtercontent-string"></a>

A comma-separated list of video, folder, or event URIs to filter.

##### filterCountries: `string`[]<a id="filtercountries-string"></a>

A comma-separated list of country codes in ISO-3166 format to filter on.

##### filterDeviceTypes: `string`[]<a id="filterdevicetypes-string"></a>

A comma-separated list of device types to filter on.

##### filterEmbedDomains: `string`[]<a id="filterembeddomains-string"></a>

A comma-separated list of domain names to filter on.

##### filterStreamingTypes: `string`[]<a id="filterstreamingtypes-string"></a>

A comma-separated list of streaming types to filter on.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The maximum number of items returned from the request, up to a limit of 1000 items. The default value is `50`.

##### sort: `'average_percent_watched' | 'average_time_watched' | 'comments' | 'country' | 'default' | 'device_type' | 'downloads' | 'embed_domain' | 'finishes' | 'impressions' | 'like' | 'time' | 'total_time_watched' | 'unique_impressions' | 'unique_viewers' | 'video' | 'views'`<a id="sort-average_percent_watched--average_time_watched--comments--country--default--device_type--downloads--embed_domain--finishes--impressions--like--time--total_time_watched--unique_impressions--unique_viewers--video--views"></a>

The way to sort the results.  Option descriptions:  * `average_percent_watched` - Sort the results by mean seconds played.  * `average_time_watched` - Sort the results by mean percentage played.  * `comments` - Sort the results by the number of comments.  * `country` - Sort the results by country.  * `default` - Sort the results by the values of both the **dimension** and **time_interval** fields.  * `device_type` - Sort the results by device type.  * `downloads` - Sort the results by the number of downloads.  * `embed_domain` - Sort the results by embed domain.  * `finishes` - Sort the results by the number of complete plays.  * `impressions` - Sort the results by the number of impressions.  * `like` - Sort the results by the number of likes.  * `time` - Sort the results by the value of the **start_date** field. This option is available only when the value of **time_interval** isn\'t `none`.  * `total_time_watched` - Sort the results by total seconds played.  * `unique_impressions` - Sort the results by unique impressions.  * `unique_viewers` - Sort the results by unique viewers.  * `video` - Sort the results by video ID.  * `views` - Sort the results by the number of views. 

##### timeInterval: `'day' | 'month' | 'none' | 'week' | 'year'`<a id="timeinterval-day--month--none--week--year"></a>

The interval by which to aggregate the data according to the specified data dimension. The default value is `none`.  Option descriptions:  * `day` - Aggregate the results by day according to the specified data dimension.  * `month` - Aggregate the results by month according to the specified data dimension.  * `none` - The results are not aggregated by time interval.  * `week` - Aggregate the results by week according to the specified data dimension.  * `year` - Aggregate the results by year according to the specified data dimension. 

#### 🔄 Return<a id="🔄-return"></a>

[Analytics](./models/analytics.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/analytics` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersAnalytics.getUserMetrics`<a id="vimeousersanalyticsgetusermetrics"></a>

This method returns analytic metrics for the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserMetricsResponse = await vimeo.usersAnalytics.getUserMetrics({
  dimension: "country",
  direction: "asc",
  filterContent: "/folder/1233456,/video/7890123,/folder/123",
  filterCountries: ["UK,US,IN"],
  filterDeviceTypes: ["android,ios"],
  filterEmbedDomains: ["abc.com,xyz.com"],
  filterStreamingTypes: ["live,video"],
  from: "2021-05-30T00:00:00+00:00",
  page: 1,
  perPage: 50,
  sort: "average_percent_watched",
  timeInterval: "day",
  to: "2021-06-30T23:59:59+00:00",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dimension: `'country' | 'device_type' | 'embed_domain' | 'total' | 'video'`<a id="dimension-country--device_type--embed_domain--total--video"></a>

The data dimension by which to group the results.  Option descriptions:  * `country` - Group the results by country.  * `device_type` - Group the results by device type.  * `embed_domain` - Group the results by embed domain.  * `total` - Group the results by the time range provided.  * `video` - Group the results by video. 

##### from: `string`<a id="from-string"></a>

The start date of the range of results in ISO 8601 format.

##### to: `string`<a id="to-string"></a>

The end date of the range of results in ISO 8601 format.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filterContent: `string`<a id="filtercontent-string"></a>

A comma-separated list of video, folder, or event URIs to filter.

##### filterCountries: `string`[]<a id="filtercountries-string"></a>

A comma-separated list of country codes in ISO-3166 format to filter on.

##### filterDeviceTypes: `string`[]<a id="filterdevicetypes-string"></a>

A comma-separated list of device types to filter on.

##### filterEmbedDomains: `string`[]<a id="filterembeddomains-string"></a>

A comma-separated list of domain names to filter on.

##### filterStreamingTypes: `string`[]<a id="filterstreamingtypes-string"></a>

A comma-separated list of streaming types to filter on.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The maximum number of items returned from the request, up to a limit of 1000 items. The default value is `50`.

##### sort: `'average_percent_watched' | 'average_time_watched' | 'comments' | 'country' | 'default' | 'device_type' | 'downloads' | 'embed_domain' | 'finishes' | 'impressions' | 'like' | 'time' | 'total_time_watched' | 'unique_impressions' | 'unique_viewers' | 'video' | 'views'`<a id="sort-average_percent_watched--average_time_watched--comments--country--default--device_type--downloads--embed_domain--finishes--impressions--like--time--total_time_watched--unique_impressions--unique_viewers--video--views"></a>

The way to sort the results.  Option descriptions:  * `average_percent_watched` - Sort the results by mean seconds played.  * `average_time_watched` - Sort the results by mean percentage played.  * `comments` - Sort the results by the number of comments.  * `country` - Sort the results by country.  * `default` - Sort the results by the values of both the **dimension** and **time_interval** fields.  * `device_type` - Sort the results by device type.  * `downloads` - Sort the results by the number of downloads.  * `embed_domain` - Sort the results by embed domain.  * `finishes` - Sort the results by the number of complete plays.  * `impressions` - Sort the results by the number of impressions.  * `like` - Sort the results by the number of likes.  * `time` - Sort the results by the value of the **start_date** field. This option is available only when the value of **time_interval** isn\'t `none`.  * `total_time_watched` - Sort the results by total seconds played.  * `unique_impressions` - Sort the results by unique impressions.  * `unique_viewers` - Sort the results by unique viewers.  * `video` - Sort the results by video ID.  * `views` - Sort the results by the number of views. 

##### timeInterval: `'day' | 'month' | 'none' | 'week' | 'year'`<a id="timeinterval-day--month--none--week--year"></a>

The interval by which to aggregate the data according to the specified data dimension. The default value is `none`.  Option descriptions:  * `day` - Aggregate the results by day according to the specified data dimension.  * `month` - Aggregate the results by month according to the specified data dimension.  * `none` - The results are not aggregated by time interval.  * `week` - Aggregate the results by week according to the specified data dimension.  * `year` - Aggregate the results by year according to the specified data dimension. 

#### 🔄 Return<a id="🔄-return"></a>

[Analytics](./models/analytics.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/analytics` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersEssentials.editVimeoAccount`<a id="vimeousersessentialseditvimeoaccount"></a>

This method edits the Vimeo account of the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editVimeoAccountResponse = await vimeo.usersEssentials.editVimeoAccount({
  bio: "This is where you will find videos and news updates from the staff",
  gender: "f",
  link: "staff",
  location: "New York City",
  name: "Vimeo Staff",
  password: "hunter1",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bio: `string`<a id="bio-string"></a>

The user\\\'s bio.

##### content_filter: `string`[]<a id="content_filter-string"></a>

A list of values describing the content in the user\\\'s videos. Find the full list in the [/contentratings](https://developer.vimeo.com/api/reference/videos#get_content_ratings) endpoint. You must provide a comma-separated list if you\\\'re using a query string or an array if you\\\'re using JSON.

##### gender: `string`<a id="gender-string"></a>

The authenticated user\\\'s gender.  Option descriptions:  * `f` - The user\\\'s preferred pronouns are she and her.  * `m` - The user\\\'s preferred pronouns are he and him.  * `n` - The user would rather not give preferred pronouns.  * `o` - The user\\\'s preferred pronouns are they and them. 

##### link: `string`<a id="link-string"></a>

The user\\\'s custom Vimeo URL.

##### location: `string`<a id="location-string"></a>

The user\\\'s location.

##### name: `string`<a id="name-string"></a>

The user\\\'s display name.

##### password: `string`<a id="password-string"></a>

The default password for all future videos that this user uploads. To use this field, the **videos.privacy.view** field must be `password`.

##### videos: [`UsersEssentialsEditVimeoAccountRequestVideos`](./models/users-essentials-edit-vimeo-account-request-videos.ts)<a id="videos-usersessentialseditvimeoaccountrequestvideosmodelsusers-essentials-edit-vimeo-account-request-videosts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersEssentials.getUser`<a id="vimeousersessentialsgetuser"></a>

This method returns the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserResponse = await vimeo.usersEssentials.getUser();
```

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersEssentials.user`<a id="vimeousersessentialsuser"></a>

This method returns the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const userResponse = await vimeo.usersEssentials.user({
  userId: 152184,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersEssentials.user_0`<a id="vimeousersessentialsuser_0"></a>

This method edits the Vimeo account of the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const user_0Response = await vimeo.usersEssentials.user_0({
  userId: 152184,
  bio: "This is where you will find videos and news updates from the staff",
  gender: "f",
  link: "staff",
  location: "New York City",
  name: "Vimeo Staff",
  password: "hunter1",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### bio: `string`<a id="bio-string"></a>

The user\\\'s bio.

##### content_filter: `string`[]<a id="content_filter-string"></a>

A list of values describing the content in the user\\\'s videos. Find the full list in the [/contentratings](https://developer.vimeo.com/api/reference/videos#get_content_ratings) endpoint. You must provide a comma-separated list if you\\\'re using a query string or an array if you\\\'re using JSON.

##### gender: `string`<a id="gender-string"></a>

The authenticated user\\\'s gender.  Option descriptions:  * `f` - The user\\\'s preferred pronouns are she and her.  * `m` - The user\\\'s preferred pronouns are he and him.  * `n` - The user would rather not give preferred pronouns.  * `o` - The user\\\'s preferred pronouns are they and them. 

##### link: `string`<a id="link-string"></a>

The user\\\'s custom Vimeo URL.

##### location: `string`<a id="location-string"></a>

The user\\\'s location.

##### name: `string`<a id="name-string"></a>

The user\\\'s display name.

##### password: `string`<a id="password-string"></a>

The default password for all future videos that this user uploads. To use this field, the **videos.privacy.view** field must be `password`.

##### videos: [`EditUserRequestVideos`](./models/edit-user-request-videos.ts)<a id="videos-edituserrequestvideosmodelsedit-user-request-videosts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersFeeds.feed`<a id="vimeousersfeedsfeed"></a>

This method returns every video in the authenticated user's feed.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const feedResponse = await vimeo.usersFeeds.feed({
  userId: 152184,
  offset: "280",
  page: 1,
  perPage: 10,
  type: "appears",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### offset: `string`<a id="offset-string"></a>

The pagination offset. We recommend that you use the pagination links in the feed response instead of working with this value directly. For more details, see our [pagination documentation](https://developer.vimeo.com/api/common-formats#using-the-pagination-parameter).

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### type: `'appears' | 'category_featured' | 'channel' | 'facebook_feed' | 'following' | 'group' | 'likes' | 'ondemand_publish' | 'share' | 'tagged_with' | 'twitter_timeline' | 'uploads'`<a id="type-appears--category_featured--channel--facebook_feed--following--group--likes--ondemand_publish--share--tagged_with--twitter_timeline--uploads"></a>

The feed type.  Option descriptions:  * `appears` - Videos in which the user appears.  * `category_featured` - Featured videos.  * `channel` - Channel videos.  * `facebook_feed` - Videos from the user\'s Facebook feed.  * `following` - Videos from accounts that the user follows.  * `group` - Group videos.  * `likes` - Liked videos.  * `ondemand_publish` - On Demand videos.  * `share` - Shared videos.  * `tagged_with` - Tagged videos.  * `twitter_timeline` - Videos from the user\'s Twitter timeline.  * `uploads` - Uploaded videos. 

#### 🔄 Return<a id="🔄-return"></a>

[Activity31](./models/activity31.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/feed` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersFeeds.getUserFeedVideos`<a id="vimeousersfeedsgetuserfeedvideos"></a>

This method returns every video in the authenticated user's feed.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserFeedVideosResponse = await vimeo.usersFeeds.getUserFeedVideos({
  offset: "280",
  page: 1,
  perPage: 10,
  type: "appears",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### offset: `string`<a id="offset-string"></a>

The pagination offset. We recommend that you use the pagination links in the feed response instead of working with this value directly. For more details, see our [pagination documentation](https://developer.vimeo.com/api/common-formats#using-the-pagination-parameter).

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### type: `'appears' | 'category_featured' | 'channel' | 'facebook_feed' | 'following' | 'group' | 'likes' | 'ondemand_publish' | 'share' | 'tagged_with' | 'twitter_timeline' | 'uploads'`<a id="type-appears--category_featured--channel--facebook_feed--following--group--likes--ondemand_publish--share--tagged_with--twitter_timeline--uploads"></a>

The feed type.  Option descriptions:  * `appears` - Videos in which the user appears.  * `category_featured` - Featured videos.  * `channel` - Channel videos.  * `facebook_feed` - Videos from the user\'s Facebook feed.  * `following` - Videos from accounts that the user follows.  * `group` - Group videos.  * `likes` - Liked videos.  * `ondemand_publish` - On Demand videos.  * `share` - Shared videos.  * `tagged_with` - Tagged videos.  * `twitter_timeline` - Videos from the user\'s Twitter timeline.  * `uploads` - Uploaded videos. 

#### 🔄 Return<a id="🔄-return"></a>

[Activity31](./models/activity31.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/feed` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersFollowers.checkFollowingStatus`<a id="vimeousersfollowerscheckfollowingstatus"></a>

This method determines whether the authenticated user is a follower of the specified user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkFollowingStatusResponse =
  await vimeo.usersFollowers.checkFollowingStatus({
    followUserId: 3766357,
    userId: 152184,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### followUserId: `number`<a id="followuserid-number"></a>

The ID of the user to follow.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/following/{follow_user_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersFollowers.checkFollowingUser`<a id="vimeousersfollowerscheckfollowinguser"></a>

This method determines whether the authenticated user is a follower of the specified user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkFollowingUserResponse =
  await vimeo.usersFollowers.checkFollowingUser({
    followUserId: 3766357,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### followUserId: `number`<a id="followuserid-number"></a>

The ID of the user to follow.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/following/{follow_user_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersFollowers.followMultipleUsers`<a id="vimeousersfollowersfollowmultipleusers"></a>

This method causes the authenticated user to become a follower of multiple users. In the body of the request, specify the list of users to follow as
an array of URIs, where `user01_id`, `user02_id`, `user03_id`, and so on, are the user IDs of the users in question:

```
{
 [
     {"uri" : "/users/{user01_id}"},
     {"uri" : "/users/{user02_id}"},
     {"uri" : "/users/{user03_id}"}
 ]
}
```

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const followMultipleUsersResponse =
  await vimeo.usersFollowers.followMultipleUsers({
    users: ["users_example"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### users: `string`[]<a id="users-string"></a>

An array of user IDs for the authenticated user to follow.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/following` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersFollowers.followSpecificUser`<a id="vimeousersfollowersfollowspecificuser"></a>

This method causes the authenticated user to become the follower of the specified user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const followSpecificUserResponse =
  await vimeo.usersFollowers.followSpecificUser({
    followUserId: 3766357,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### followUserId: `number`<a id="followuserid-number"></a>

The ID of the user to follow.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/following/{follow_user_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersFollowers.followers`<a id="vimeousersfollowersfollowers"></a>

This method returns every follower of the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const followersResponse = await vimeo.usersFollowers.followers({
  userId: 152184,
  direction: "asc",
  page: 1,
  perPage: 10,
  query: "Stop motion",
  sort: "alphabetical",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date'`<a id="sort-alphabetical--date"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by date followed. 

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/followers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersFollowers.listAll`<a id="vimeousersfollowerslistall"></a>

This method returns every follower of the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await vimeo.usersFollowers.listAll({
  direction: "asc",
  page: 1,
  perPage: 10,
  query: "Stop motion",
  sort: "alphabetical",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date'`<a id="sort-alphabetical--date"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by date followed. 

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/followers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersFollowers.listOfFollowedUsers`<a id="vimeousersfollowerslistoffollowedusers"></a>

This method returns every user that the authenticated user is following.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listOfFollowedUsersResponse =
  await vimeo.usersFollowers.listOfFollowedUsers({
    userId: 152184,
    direction: "asc",
    filter: "online",
    page: 1,
    perPage: 10,
    query: "Stop motion",
    sort: "alphabetical",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'online'`<a id="filter-online"></a>

The attribute by which to filter the results.  Option descriptions:  * `online` - Return users who are currently online. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date'`<a id="sort-alphabetical--date"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by date followed. 

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/following` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersFollowers.listOfFollowingUsers`<a id="vimeousersfollowerslistoffollowingusers"></a>

This method returns every user that the authenticated user is following.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listOfFollowingUsersResponse =
  await vimeo.usersFollowers.listOfFollowingUsers({
    direction: "asc",
    filter: "online",
    page: 1,
    perPage: 10,
    query: "Stop motion",
    sort: "alphabetical",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'online'`<a id="filter-online"></a>

The attribute by which to filter the results.  Option descriptions:  * `online` - Return users who are currently online. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date'`<a id="sort-alphabetical--date"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by date followed. 

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/following` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersFollowers.stopFollowingUser`<a id="vimeousersfollowersstopfollowinguser"></a>

This method causes the authenticated user to stop following another user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const stopFollowingUserResponse = await vimeo.usersFollowers.stopFollowingUser({
  followUserId: 3766357,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### followUserId: `number`<a id="followuserid-number"></a>

The ID of the user to unfollow.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/following/{follow_user_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersFollowers.user`<a id="vimeousersfollowersuser"></a>

This method causes the authenticated user to become the follower of the specified user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const userResponse = await vimeo.usersFollowers.user({
  followUserId: 3766357,
  userId: 152184,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### followUserId: `number`<a id="followuserid-number"></a>

The ID of the user to follow.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/following/{follow_user_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersFollowers.user_0`<a id="vimeousersfollowersuser_0"></a>

This method causes the authenticated user to stop following another user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const user_0Response = await vimeo.usersFollowers.user_0({
  followUserId: 3766357,
  userId: 152184,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### followUserId: `number`<a id="followuserid-number"></a>

The ID of the user to unfollow.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/following/{follow_user_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersFollowers.users`<a id="vimeousersfollowersusers"></a>

This method causes the authenticated user to become a follower of multiple users. In the body of the request, specify the list of users to follow as
an array of URIs, where `user01_id`, `user02_id`, `user03_id`, and so on, are the user IDs of the users in question:

```
{
 [
     {"uri" : "/users/{user01_id}"},
     {"uri" : "/users/{user02_id}"},
     {"uri" : "/users/{user03_id}"}
 ]
}
```

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const usersResponse = await vimeo.usersFollowers.users({
  userId: 152184,
  users: ["users_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### users: `string`[]<a id="users-string"></a>

An array of user IDs for the authenticated user to follow.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/following` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersPictures.addPortraitImage`<a id="vimeouserspicturesaddportraitimage"></a>

This method adds a portrait image to the authenticated user's Vimeo account. Send the binary data of the image file to the location that you receive
from the **link** field in the response. For step-by-step instructions, see
[Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails#uploading-a-thumbnail-step-3).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addPortraitImageResponse = await vimeo.usersPictures.addPortraitImage();
```

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/pictures` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersPictures.editPortraitImage`<a id="vimeouserspictureseditportraitimage"></a>

This method edits the specified portrait image belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editPortraitImageResponse = await vimeo.usersPictures.editPortraitImage({
  portraitsetId: 12345,
  active: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portraitsetId: `number`<a id="portraitsetid-number"></a>

The ID of the picture.

##### active: `boolean`<a id="active-boolean"></a>

Whether the picture is the authenticated user\\\'s active portrait.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/pictures/{portraitset_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersPictures.getSpecificPictureBelongingToUser`<a id="vimeouserspicturesgetspecificpicturebelongingtouser"></a>

This method returns a single portrait image belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificPictureBelongingToUserResponse =
  await vimeo.usersPictures.getSpecificPictureBelongingToUser({
    portraitsetId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portraitsetId: `number`<a id="portraitsetid-number"></a>

The ID of the picture.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/pictures/{portraitset_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersPictures.list`<a id="vimeouserspictureslist"></a>

This method returns every portrait image belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await vimeo.usersPictures.list({
  page: 1,
  perPage: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/pictures` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersPictures.picture`<a id="vimeouserspicturespicture"></a>

This method adds a portrait image to the authenticated user's Vimeo account. Send the binary data of the image file to the location that you receive
from the **link** field in the response. For step-by-step instructions, see
[Working with Thumbnail Uploads](https://developer.vimeo.com/api/upload/thumbnails#uploading-a-thumbnail-step-3).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const pictureResponse = await vimeo.usersPictures.picture({
  userId: 152184,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/pictures` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersPictures.picture_0`<a id="vimeouserspicturespicture_0"></a>

This method returns a single portrait image belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const picture_0Response = await vimeo.usersPictures.picture_0({
  portraitsetId: 12345,
  userId: 152184,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portraitsetId: `number`<a id="portraitsetid-number"></a>

The ID of the picture.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/pictures/{portraitset_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersPictures.picture_1`<a id="vimeouserspicturespicture_1"></a>

This method removes the specified portrait image from the authenticated user's Vimeo account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const picture_1Response = await vimeo.usersPictures.picture_1({
  portraitsetId: 12345,
  userId: 152184,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portraitsetId: `number`<a id="portraitsetid-number"></a>

The ID of the picture.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/pictures/{portraitset_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersPictures.picture_2`<a id="vimeouserspicturespicture_2"></a>

This method edits the specified portrait image belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const picture_2Response = await vimeo.usersPictures.picture_2({
  portraitsetId: 12345,
  userId: 152184,
  active: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portraitsetId: `number`<a id="portraitsetid-number"></a>

The ID of the picture.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### active: `boolean`<a id="active-boolean"></a>

Whether the picture is the authenticated user\\\'s active portrait.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/pictures/{portraitset_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersPictures.pictures`<a id="vimeouserspicturespictures"></a>

This method returns every portrait image belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const picturesResponse = await vimeo.usersPictures.pictures({
  userId: 152184,
  page: 1,
  perPage: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/pictures` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersPictures.removePortraitImage`<a id="vimeouserspicturesremoveportraitimage"></a>

This method removes the specified portrait image from the authenticated user's Vimeo account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removePortraitImageResponse =
  await vimeo.usersPictures.removePortraitImage({
    portraitsetId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### portraitsetId: `number`<a id="portraitsetid-number"></a>

The ID of the picture.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/pictures/{portraitset_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersSearch.users`<a id="vimeouserssearchusers"></a>

This method returns user search results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const usersResponse = await vimeo.usersSearch.users({
  direction: "asc",
  page: 1,
  perPage: 10,
  query: "Stop motion",
  sort: "alphabetical",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date' | 'followers' | 'relevant' | 'videos'`<a id="sort-alphabetical--date--followers--relevant--videos"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by creation date.  * `followers` - Sort the results by number of followers.  * `relevant` - Sort the results by relevance.  * `videos` - Sort the results by number of videos. 

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersWatchHistory.deleteEntireWatchHistory`<a id="vimeouserswatchhistorydeleteentirewatchhistory"></a>

This method deletes the entire watch history of the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteEntireWatchHistoryResponse =
  await vimeo.usersWatchHistory.deleteEntireWatchHistory();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/watched/videos` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersWatchHistory.deleteSpecificVideo`<a id="vimeouserswatchhistorydeletespecificvideo"></a>

This method deletes the specified video from the authenticated user's watch history.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSpecificVideoResponse =
  await vimeo.usersWatchHistory.deleteSpecificVideo({
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/watched/videos/{video_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.usersWatchHistory.getWatchedVideos`<a id="vimeouserswatchhistorygetwatchedvideos"></a>

This method returns every video on the authenticated user's watch history. _This endpoint is deprecated. Any request to it returns empty data with HTTP status code 200._

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWatchedVideosResponse = await vimeo.usersWatchHistory.getWatchedVideos(
  {
    page: 1,
    perPage: 10,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/watched/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosAnimatedThumbnails.createSet`<a id="vimeovideosanimatedthumbnailscreateset"></a>

This method creates a set of animated thumbnails for the specified video. Please note that you can't create more than four sets of animated thumbnails for the same video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSetResponse = await vimeo.videosAnimatedThumbnails.createSet({
  videoId: 258684937,
  duration: 5,
  start_time: 2,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### duration: `number`<a id="duration-number"></a>

The duration of the animation in seconds. The maximum value is 6.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### start_time: `number`<a id="start_time-number"></a>

The time in seconds corresponding to the start of the animation in the video. The default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[AnimatedThumbset](./models/animated-thumbset.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/animated_thumbsets` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosAnimatedThumbnails.deleteSet`<a id="vimeovideosanimatedthumbnailsdeleteset"></a>

This method deletes a set of animated thumbnails for the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSetResponse = await vimeo.videosAnimatedThumbnails.deleteSet({
  pictureId: "23f34-b34h4-34hb3",
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pictureId: `string`<a id="pictureid-string"></a>

The UUID of the set of animated thumbnails.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/animated_thumbsets/{picture_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosAnimatedThumbnails.getAllSets`<a id="vimeovideosanimatedthumbnailsgetallsets"></a>

This method returns all the sets of animated thumbnails associated with the specified video. The authenticated user must be the owner of the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllSetsResponse = await vimeo.videosAnimatedThumbnails.getAllSets({
  videoId: 258684937,
  page: 1,
  perPage: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[AnimatedThumbset](./models/animated-thumbset.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/animated_thumbsets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosAnimatedThumbnails.getStatusOfSet`<a id="vimeovideosanimatedthumbnailsgetstatusofset"></a>

This method returns the status of a particular set of animated thumbnails associated with the specified video. The status indicates whether the thumbnails are ready to use. The authenticated user must be the owner of the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStatusOfSetResponse =
  await vimeo.videosAnimatedThumbnails.getStatusOfSet({
    pictureId: "23few-h4hw4t-45j5",
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pictureId: `string`<a id="pictureid-string"></a>

The UUID of the set of animated thumbnails.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[AnimatedThumbset](./models/animated-thumbset.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/animated_thumbsets/{picture_id}/status` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosAnimatedThumbnails.specificSetGet`<a id="vimeovideosanimatedthumbnailsspecificsetget"></a>

This method returns a particular set of animated thumbnails associated with the specified video. The authenticated user must be the owner of the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const specificSetGetResponse =
  await vimeo.videosAnimatedThumbnails.specificSetGet({
    pictureId: "23few-h4hw4t-45j5",
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pictureId: `string`<a id="pictureid-string"></a>

The UUID of the set of animated thumbnails.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[AnimatedThumbset](./models/animated-thumbset.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/animated_thumbsets/{picture_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosChapters.chapter`<a id="vimeovideoschapterschapter"></a>

This method adds a chapter to the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const chapterResponse = await vimeo.videosChapters.chapter({
  videoId: 258684937,
  title: "Chapter 1",
  active_thumbnail_uri:
    "/videos/12345678/chapters/12345/pictures/24kjh4h4g38175db9f59fae9f7g9ekhg",
  timecode: 140,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### title: `string`<a id="title-string"></a>

The title of the chapter.

##### active_thumbnail_uri: `string`<a id="active_thumbnail_uri-string"></a>

The URI of the chapter\\\'s active thumbnail.

##### thumbnail_uris: `string`[]<a id="thumbnail_uris-string"></a>

An array of URIs of the thumbnails associated with the video chapter.

##### timecode: `number`<a id="timecode-number"></a>

The timecode of the chapter in seconds from the start of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Chapter](./models/chapter.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/chapters` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosChapters.chapter_0`<a id="vimeovideoschapterschapter_0"></a>

This method returns a single chapter of the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const chapter_0Response = await vimeo.videosChapters.chapter_0({
  chapterId: 12345,
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### chapterId: `number`<a id="chapterid-number"></a>

The ID of the chapter.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Chapter](./models/chapter.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/chapters/{chapter_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosChapters.chapter_1`<a id="vimeovideoschapterschapter_1"></a>

This method deletes the specified chapter from a video. The authenticated user must be the owner of the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const chapter_1Response = await vimeo.videosChapters.chapter_1({
  chapterId: 12345,
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### chapterId: `number`<a id="chapterid-number"></a>

The ID of the chapter.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/chapters/{chapter_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosChapters.chapter_2`<a id="vimeovideoschapterschapter_2"></a>

This method edits the specified chapter of a video. The authenticated user must be the owner of the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const chapter_2Response = await vimeo.videosChapters.chapter_2({
  chapterId: 12345,
  videoId: 258684937,
  title: "Chapter 1",
  active_thumbnail_uri:
    "/videos/12345678/chapters/12345/pictures/24kjh4h4g38175db9f59fae9f7g9ekhg",
  timecode: 140,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### chapterId: `number`<a id="chapterid-number"></a>

The ID of the chapter.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### title: `string`<a id="title-string"></a>

The title of the chapter.

##### active_thumbnail_uri: `string`<a id="active_thumbnail_uri-string"></a>

The URI of the chapter\\\'s active thumbnail.

##### timecode: `number`<a id="timecode-number"></a>

The timecode of the chapter in seconds from the start of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Chapter](./models/chapter.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/chapters/{chapter_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosChapters.chapters`<a id="vimeovideoschapterschapters"></a>

This method returns every chapter of the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const chaptersResponse = await vimeo.videosChapters.chapters({
  videoId: 258684937,
  page: 1,
  perPage: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Chapter](./models/chapter.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/chapters` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosChapters.deleteChapterThumbnail`<a id="vimeovideoschaptersdeletechapterthumbnail"></a>

This method deletes the specified chapter thumbnail from a video.

The authenticated user must be the owner of the video that the chapter belongs to.
This method deletes both timecode-generated and custom-uploaded thumbnails.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteChapterThumbnailResponse =
  await vimeo.videosChapters.deleteChapterThumbnail({
    chapterId: 12345,
    uid: "24kjh4h4g38175db9f59fae9f7g9ekhg",
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### chapterId: `number`<a id="chapterid-number"></a>

The ID of the chapter.

##### uid: `string`<a id="uid-string"></a>

The unique ID of the thumbnail.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/chapters/{chapter_id}/pictures/{uid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosChapters.generateChapterThumbnail`<a id="vimeovideoschaptersgeneratechapterthumbnail"></a>

This method generates either an upload link or a timecode-based thumbnail for an unsaved video chapter. To generate the upload link, which enables the authenticated user to upload a chapter thumbnail image manually, leave the body of the request empty. To generate an automatic timecode-based thumbnail, specify the **timecode** parameter in the body of the request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateChapterThumbnailResponse =
  await vimeo.videosChapters.generateChapterThumbnail({
    videoId: 258684937,
    timecode: 140,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### timecode: `number`<a id="timecode-number"></a>

The timecode, given in seconds from the start of the video, indicating when the thumbnail should be generated from the video.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/chapters/temporary/pictures` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosChapters.generateChapterThumbnailOrUploadLink`<a id="vimeovideoschaptersgeneratechapterthumbnailoruploadlink"></a>

This method generates either an upload link or a timecode-based thumbnail for the specified saved video chapter. To generate the upload link, which enables the authenticated user to upload a chapter thumbnail image manually, leave the body of the request empty. To generate an automatic timecode-based thumbnail, include the **timecode** parameter in the body of the request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateChapterThumbnailOrUploadLinkResponse =
  await vimeo.videosChapters.generateChapterThumbnailOrUploadLink({
    chapterId: 12345,
    videoId: 258684937,
    timecode: 140,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### chapterId: `number`<a id="chapterid-number"></a>

The ID of the chapter.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### timecode: `number`<a id="timecode-number"></a>

The timecode, given in seconds from the start of the video, indicating when the thumbnail should be generated from the video.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/chapters/{chapter_id}/pictures` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosChapters.getChapterThumbnails`<a id="vimeovideoschaptersgetchapterthumbnails"></a>

This method returns every thumbnail associated with the specified saved video chapter.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getChapterThumbnailsResponse =
  await vimeo.videosChapters.getChapterThumbnails({
    chapterId: 12345,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### chapterId: `number`<a id="chapterid-number"></a>

The ID of the chapter.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/chapters/{chapter_id}/pictures` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosChapters.getSingleChapterThumbnail`<a id="vimeovideoschaptersgetsinglechapterthumbnail"></a>

This method returns the specified thumbnail associated with an unsaved video chapter.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSingleChapterThumbnailResponse =
  await vimeo.videosChapters.getSingleChapterThumbnail({
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/chapters/temporary/pictures/{uid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosChapters.getSingleChapterThumbnail_0`<a id="vimeovideoschaptersgetsinglechapterthumbnail_0"></a>

This method returns the specified thumbnail associated with a saved video chapter.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSingleChapterThumbnail_0Response =
  await vimeo.videosChapters.getSingleChapterThumbnail_0({
    chapterId: 12345,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### chapterId: `number`<a id="chapterid-number"></a>

The ID of the chapter.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/chapters/{chapter_id}/pictures/{uid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosChapters.setChapterThumbnailActive`<a id="vimeovideoschapterssetchapterthumbnailactive"></a>

This method sets the specified chapter thumbnail for a video as active.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setChapterThumbnailActiveResponse =
  await vimeo.videosChapters.setChapterThumbnailActive({
    chapterId: 12345,
    videoId: 258684937,
    active: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### chapterId: `number`<a id="chapterid-number"></a>

The ID of the chapter.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### active: `boolean`<a id="active-boolean"></a>

Whether to set the chapter thumbnail as active.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/chapters/{chapter_id}/pictures/{uid}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosContentRatings.getAllContentRatings`<a id="vimeovideoscontentratingsgetallcontentratings"></a>

This method returns all available content ratings.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllContentRatingsResponse =
  await vimeo.videosContentRatings.getAllContentRatings();
```

#### 🔄 Return<a id="🔄-return"></a>

[ContentRating](./models/content-rating.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contentratings` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosCreativeCommons.getAllCCLicenses`<a id="vimeovideoscreativecommonsgetallcclicenses"></a>

This method returns all available Creative Commons licenses.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllCCLicensesResponse =
  await vimeo.videosCreativeCommons.getAllCCLicenses({
    page: 1,
    perPage: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[CreativeCommons](./models/creative-commons.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/creativecommons` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosCredits.addUserCredit`<a id="vimeovideoscreditsaddusercredit"></a>

This method adds a user credit to the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addUserCreditResponse = await vimeo.videosCredits.addUserCredit({
  videoId: 258684937,
  email: "user@example.com",
  name: "Sam Doe",
  role: "Producer",
  user_uri: "/users/152184",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

The email address of the credited person.

##### name: `string`<a id="name-string"></a>

The name of the credited person.

##### role: `string`<a id="role-string"></a>

The role of the credited person.

##### user_uri: `string`<a id="user_uri-string"></a>

The Vimeo URI of the credited person.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Credit](./models/credit.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/credits` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosCredits.addUserCreditInVideo`<a id="vimeovideoscreditsaddusercreditinvideo"></a>

This method adds a user credit to the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addUserCreditInVideoResponse =
  await vimeo.videosCredits.addUserCreditInVideo({
    channelId: 927,
    videoId: 258684937,
    email: "user@example.com",
    name: "Sam Doe",
    role: "Producer",
    user_uri: "/users/152184",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

The email address of the credited person.

##### name: `string`<a id="name-string"></a>

The name of the credited person.

##### role: `string`<a id="role-string"></a>

The role of the credited person.

##### user_uri: `string`<a id="user_uri-string"></a>

The Vimeo URI of the credited person.

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Credit](./models/credit.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/videos/{video_id}/credits` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosCredits.deleteUserCredit`<a id="vimeovideoscreditsdeleteusercredit"></a>

This method deletes the specified user credit from a video. The authenticated user must be the creator of the credit or the credited user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteUserCreditResponse = await vimeo.videosCredits.deleteUserCredit({
  creditId: 12345,
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### creditId: `number`<a id="creditid-number"></a>

The ID of the credit.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/credits/{credit_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosCredits.editUserCreditInVideo`<a id="vimeovideoscreditseditusercreditinvideo"></a>

This method edits the specified user credit in a video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editUserCreditInVideoResponse =
  await vimeo.videosCredits.editUserCreditInVideo({
    creditId: 12345,
    videoId: 258684937,
    name: "Sam Doe",
    role: "Producer",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### creditId: `number`<a id="creditid-number"></a>

The ID of the credit.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### name: `string`<a id="name-string"></a>

The name of the credited person.

##### role: `string`<a id="role-string"></a>

The role of the credited person.

#### 🔄 Return<a id="🔄-return"></a>

[Credit](./models/credit.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/credits/{credit_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosCredits.getAllCreditedUsersInVideo`<a id="vimeovideoscreditsgetallcreditedusersinvideo"></a>

This method returns every credited user in a video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllCreditedUsersInVideoResponse =
  await vimeo.videosCredits.getAllCreditedUsersInVideo({
    channelId: 927,
    videoId: 258684937,
    direction: "asc",
    page: 1,
    perPage: 10,
    query: "Stop motion",
    sort: "alphabetical",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date'`<a id="sort-alphabetical--date"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by date. 

#### 🔄 Return<a id="🔄-return"></a>

[Credit](./models/credit.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/videos/{video_id}/credits` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosCredits.getAllCreditedUsersInVideo_0`<a id="vimeovideoscreditsgetallcreditedusersinvideo_0"></a>

This method returns every credited user in a video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllCreditedUsersInVideo_0Response =
  await vimeo.videosCredits.getAllCreditedUsersInVideo_0({
    videoId: 258684937,
    direction: "asc",
    page: 1,
    perPage: 10,
    query: "Stop motion",
    sort: "alphabetical",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date'`<a id="sort-alphabetical--date"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by date. 

#### 🔄 Return<a id="🔄-return"></a>

[Credit](./models/credit.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/credits` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosCredits.getSpecificCreditedUser`<a id="vimeovideoscreditsgetspecificcrediteduser"></a>

This method returns a single credited user in a video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificCreditedUserResponse =
  await vimeo.videosCredits.getSpecificCreditedUser({
    creditId: 12345,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### creditId: `number`<a id="creditid-number"></a>

The ID of the credit.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Credit](./models/credit.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/credits/{credit_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosCredits.users`<a id="vimeovideoscreditsusers"></a>

This method returns the users who can be credited on the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const usersResponse = await vimeo.videosCredits.users({
  videoId: 258684937,
  direction: "asc",
  page: 1,
  perPage: 10,
  query: "Stop motion",
  sort: "alphabetical",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'date'`<a id="sort-alphabetical--date"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `date` - Sort the results by date followed. 

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/credits/available_users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosEmbedPrivacy.addDomainToWhitelist`<a id="vimeovideosembedprivacyadddomaintowhitelist"></a>

This method adds the specified domain to a video's whitelist.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addDomainToWhitelistResponse =
  await vimeo.videosEmbedPrivacy.addDomainToWhitelist({
    domain: "example.com",
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domain: `string`<a id="domain-string"></a>

The domain name.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/privacy/domains/{domain}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosEmbedPrivacy.listWhitelistDomains`<a id="vimeovideosembedprivacylistwhitelistdomains"></a>

This method returns every domain on the specified video's whitelist.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listWhitelistDomainsResponse =
  await vimeo.videosEmbedPrivacy.listWhitelistDomains({
    videoId: 258684937,
    page: 1,
    perPage: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Domain](./models/domain.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/privacy/domains` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosEmbedPrivacy.removeDomainFromWhitelist`<a id="vimeovideosembedprivacyremovedomainfromwhitelist"></a>

This method removes the specified domain from a video's whitelist.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeDomainFromWhitelistResponse =
  await vimeo.videosEmbedPrivacy.removeDomainFromWhitelist({
    domain: "example.com",
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domain: `string`<a id="domain-string"></a>

The domain name.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/privacy/domains/{domain}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosEssentials.appearances`<a id="vimeovideosessentialsappearances"></a>

This method returns all the videos in which the authenticated user has a credited appearance.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const appearancesResponse = await vimeo.videosEssentials.appearances({
  userId: 152184,
  direction: "asc",
  filter: "embeddable",
  filterEmbeddable: true,
  page: 1,
  perPage: 10,
  query: "Stop motion",
  sort: "alphabetical",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'embeddable'`<a id="filter-embeddable"></a>

The attribute by which to filter the results.  Option descriptions:  * `embeddable` - Return embeddable videos. 

##### filterEmbeddable: `boolean`<a id="filterembeddable-boolean"></a>

Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'comments' | 'date' | 'duration' | 'likes' | 'plays'`<a id="sort-alphabetical--comments--date--duration--likes--plays"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `comments` - Sort the results by number of comments.  * `date` - Sort the results by date.  * `duration` - Sort the results by duration.  * `likes` - Sort the results by number of likes.  * `plays` - Sort the results by number of plays. 

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/appearances` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosEssentials.checkUserOwnership`<a id="vimeovideosessentialscheckuserownership"></a>

This method determines whether the authenticated user is the owner of the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkUserOwnershipResponse =
  await vimeo.videosEssentials.checkUserOwnership({
    userId: 152184,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/videos/{video_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosEssentials.checkUserOwnsVideo`<a id="vimeovideosessentialscheckuserownsvideo"></a>

This method determines whether the authenticated user is the owner of the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkUserOwnsVideoResponse =
  await vimeo.videosEssentials.checkUserOwnsVideo({
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/videos/{video_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosEssentials.deleteUserVideos`<a id="vimeovideosessentialsdeleteuservideos"></a>

This method deletes one or more videos belonging to the specified user. The authenticated user must have permission to delete the videos.

Specify the videos to delete in a comma-separated list by URI using the **uris** query parameter.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteUserVideosResponse = await vimeo.videosEssentials.deleteUserVideos({
  uris: "/videos/258684937,/videos/258684546",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uris: `string`<a id="uris-string"></a>

A comma-separated list of the video URIs to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/videos` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosEssentials.getAllUserVideos`<a id="vimeovideosessentialsgetalluservideos"></a>

This method returns all the videos that the authenticated user has uploaded.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllUserVideosResponse = await vimeo.videosEssentials.getAllUserVideos({
  containingUri: "/videos/258684937",
  direction: "asc",
  filter: "app_only",
  filterEmbeddable: true,
  filterPlayable: true,
  filterScreenRecorded: true,
  filterTag: "abc,xyz",
  filterTagAllOf: "abc,xyz",
  filterTagExclude: "abc,xyz",
  includeTeamContent: "true",
  page: 1,
  perPage: 10,
  query: "Stop motion",
  queryFields: ["title,description"],
  sort: "alphabetical",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### containingUri: `string`<a id="containinguri-string"></a>

The page that contains the video URI. The field is available only when not paired with **query**.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'app_only' | 'embeddable' | 'featured' | 'live' | 'no_placeholder' | 'nolive' | 'playable' | 'screen_recorded'`<a id="filter-app_only--embeddable--featured--live--no_placeholder--nolive--playable--screen_recorded"></a>

The attribute by which to filter the results.  Option descriptions:  * `app_only` - Return app-only videos.  * `embeddable` - Return embeddable videos.  * `featured` - Return featured videos.  * `live` - Return only live videos.  * `no_placeholder` - Return no placeholder videos.  * `nolive` - Return no live videos.  * `playable` - Return playable videos.  * `screen_recorded` - Return screen-recorded videos. 

##### filterEmbeddable: `boolean`<a id="filterembeddable-boolean"></a>

Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`.

##### filterPlayable: `boolean`<a id="filterplayable-boolean"></a>

Whether to filter the results by playable videos (`true`) or non-playable videos (`false`).

##### filterScreenRecorded: `boolean`<a id="filterscreenrecorded-boolean"></a>

Whether to filter the results by screen-recorded videos (`true`) or non-screen-recorded videos (`false`).

##### filterTag: `string`<a id="filtertag-string"></a>

A comma-separated list of tags to filter on. All results must include at least one of these tags.

##### filterTagAllOf: `string`<a id="filtertagallof-string"></a>

A comma-separated list of tags to filter on. All results must include all of these tags.

##### filterTagExclude: `string`<a id="filtertagexclude-string"></a>

A comma-separated list of tags to exclude. All results must exclude all of these tags.

##### includeTeamContent: `string`<a id="includeteamcontent-string"></a>

Whether to include content from the user\'s teams when searching. _This field is deprecated._

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### queryFields: `string`[]<a id="queryfields-string"></a>

A comma-separated list of fields to query over. The default value is `title,description,chapters,tags`.  Option descriptions:  * `chapters` - Query by chapter titles that have been added to the video.  * `description` - Query by the description of the video.  * `tags` - Query by tag names that have been added to the video.  * `title` - Query by the title of the video. 

##### sort: `'alphabetical' | 'date' | 'default' | 'duration' | 'last_user_action_event_date' | 'likes' | 'modified_time' | 'plays'`<a id="sort-alphabetical--date--default--duration--last_user_action_event_date--likes--modified_time--plays"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically by title.  * `date` - Sort the results by date.  * `default` - Use the default sorting method.  * `duration` - Sort the results by duration.  * `last_user_action_event_date` - Sort the results by last user interaction. If a result hasn\'t had an interaction, the upload date is used instead.  * `likes` - Sort the results by number of likes. To use this option, **direction** must be `desc`.  * `modified_time` - Sort the results by last modification.  * `plays` - Sort the results by number of plays. To use this option, **direction** must be `desc`. 

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosEssentials.getUserAppearances`<a id="vimeovideosessentialsgetuserappearances"></a>

This method returns all the videos in which the authenticated user has a credited appearance.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserAppearancesResponse =
  await vimeo.videosEssentials.getUserAppearances({
    direction: "asc",
    filter: "embeddable",
    filterEmbeddable: true,
    page: 1,
    perPage: 10,
    query: "Stop motion",
    sort: "alphabetical",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'embeddable'`<a id="filter-embeddable"></a>

The attribute by which to filter the results.  Option descriptions:  * `embeddable` - Return embeddable videos. 

##### filterEmbeddable: `boolean`<a id="filterembeddable-boolean"></a>

Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'comments' | 'date' | 'duration' | 'likes' | 'plays'`<a id="sort-alphabetical--comments--date--duration--likes--plays"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `comments` - Sort the results by number of comments.  * `date` - Sort the results by date.  * `duration` - Sort the results by duration.  * `likes` - Sort the results by number of likes.  * `plays` - Sort the results by number of plays. 

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/appearances` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosEssentials.video`<a id="vimeovideosessentialsvideo"></a>

This method returns a single video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const videoResponse = await vimeo.videosEssentials.video({
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosEssentials.video_0`<a id="vimeovideosessentialsvideo_0"></a>

This method deletes the specified video. The authenticated user must be the owner of the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const video_0Response = await vimeo.videosEssentials.video_0({
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosEssentials.video_1`<a id="vimeovideosessentialsvideo_1"></a>

This method edits the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const video_1Response = await vimeo.videosEssentials.video_1({
  videoId: 258684937,
  description: "A celebration of 10 years of Staff Picks.",
  custom_url: "puppies",
  hide_from_vimeo: false,
  license: "by",
  locale: "en-US",
  name: "Celebrating 10 Years of Staff Picks",
  password: "hunter1",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### description: `string`<a id="description-string"></a>

The description of the video. This field can hold a maximum of 5000 characters.

##### content_rating: `string`[]<a id="content_rating-string"></a>

A list of values describing the content in this video. For a full list of values, use the [`/contentratings`](https://developer.vimeo.com/api/reference/videos#get_content_ratings) endpoint.

##### custom_url: `string`<a id="custom_url-string"></a>

The custom link of the video. This link doesn\\\'t include the base URL and the username or user ID of the video\\\'s owner.

##### embed: [`EditVideoRequestEmbed`](./models/edit-video-request-embed.ts)<a id="embed-editvideorequestembedmodelsedit-video-request-embedts"></a>

##### embed_domains: `string`[]<a id="embed_domains-string"></a>

The complete list of domains the video can be embedded on. This field overwrites existing domains and requires that **privacy_embed** have the value `whitelist`.

##### embed_domains_add: `string`[]<a id="embed_domains_add-string"></a>

A list of domains intended to be added to an existing set of domains. This field requires that **privacy_embed** have the value `whitelist`.

##### embed_domains_delete: `string`[]<a id="embed_domains_delete-string"></a>

A list of domains intended to be removed from an existing set of domains. This field requires that **privacy_embed** have the value `whitelist`.

##### hide_from_vimeo: `boolean`<a id="hide_from_vimeo-boolean"></a>

Whether to hide the video from everyone except the video\\\'s owner. When the value is `true`, unlisted video links work only for the video\\\'s owner.

##### license: `string`<a id="license-string"></a>

The Creative Commons license under which the video is offered.  Option descriptions:  * `by` - The video is offered under CC BY, or the attibution-only license.  * `by-nc` - The video is offered under CC BY-NC, or the Attribution-NonCommercial license.  * `by-nc-nd` - The video is offered under CC BY-NC-ND, or the Attribution-NonCommercian-NoDerivs license.  * `by-nc-sa` - The video is offered under CC BY-NC-SA, or the Attribution-NonCommercial-ShareAlike licence.  * `by-nd` - The video is offered under CC BY-ND, or the Attribution-NoDerivs license.  * `by-sa` - The video is offered under CC BY-SA, or the Attribution-ShareAlike license.  * `cc0` - The video is offered under CC0, or public domain, videos. 

##### locale: `string`<a id="locale-string"></a>

The video\\\'s default language. For a full list of supported languages, use the [`/languages?filter=texttracks`](https://developer.vimeo.com/api/reference/videos#get_languages) endpoint.

##### name: `string`<a id="name-string"></a>

The title of the video. This field can hold a maximum of 128 characters.

##### password: `string`<a id="password-string"></a>

The password. When you set **privacy.view** to `password`, you must provide the password as an additional parameter. This field can hold a maximum of 32 characters.

##### privacy: [`EditVideoRequestPrivacy`](./models/edit-video-request-privacy.ts)<a id="privacy-editvideorequestprivacymodelsedit-video-request-privacyts"></a>

##### review_page: [`EditVideoRequestReviewPage`](./models/edit-video-request-review-page.ts)<a id="review_page-editvideorequestreviewpagemodelsedit-video-request-review-pagets"></a>

##### spatial: [`EditVideoRequestSpatial`](./models/edit-video-request-spatial.ts)<a id="spatial-editvideorequestspatialmodelsedit-video-request-spatialts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosEssentials.videos`<a id="vimeovideosessentialsvideos"></a>

This method returns all the videos that the authenticated user has uploaded.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const videosResponse = await vimeo.videosEssentials.videos({
  userId: 152184,
  containingUri: "/videos/258684937",
  direction: "asc",
  filter: "app_only",
  filterEmbeddable: true,
  filterPlayable: true,
  filterScreenRecorded: true,
  filterTag: "abc,xyz",
  filterTagAllOf: "abc,xyz",
  filterTagExclude: "abc,xyz",
  includeTeamContent: "true",
  page: 1,
  perPage: 10,
  query: "Stop motion",
  queryFields: ["title,description"],
  sort: "alphabetical",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### containingUri: `string`<a id="containinguri-string"></a>

The page that contains the video URI. The field is available only when not paired with **query**.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'app_only' | 'embeddable' | 'featured' | 'live' | 'no_placeholder' | 'nolive' | 'playable' | 'screen_recorded'`<a id="filter-app_only--embeddable--featured--live--no_placeholder--nolive--playable--screen_recorded"></a>

The attribute by which to filter the results.  Option descriptions:  * `app_only` - Return app-only videos.  * `embeddable` - Return embeddable videos.  * `featured` - Return featured videos.  * `live` - Return only live videos.  * `no_placeholder` - Return no placeholder videos.  * `nolive` - Return no live videos.  * `playable` - Return playable videos.  * `screen_recorded` - Return screen-recorded videos. 

##### filterEmbeddable: `boolean`<a id="filterembeddable-boolean"></a>

Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`.

##### filterPlayable: `boolean`<a id="filterplayable-boolean"></a>

Whether to filter the results by playable videos (`true`) or non-playable videos (`false`).

##### filterScreenRecorded: `boolean`<a id="filterscreenrecorded-boolean"></a>

Whether to filter the results by screen-recorded videos (`true`) or non-screen-recorded videos (`false`).

##### filterTag: `string`<a id="filtertag-string"></a>

A comma-separated list of tags to filter on. All results must include at least one of these tags.

##### filterTagAllOf: `string`<a id="filtertagallof-string"></a>

A comma-separated list of tags to filter on. All results must include all of these tags.

##### filterTagExclude: `string`<a id="filtertagexclude-string"></a>

A comma-separated list of tags to exclude. All results must exclude all of these tags.

##### includeTeamContent: `string`<a id="includeteamcontent-string"></a>

Whether to include content from the user\'s teams when searching. _This field is deprecated._

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### queryFields: `string`[]<a id="queryfields-string"></a>

A comma-separated list of fields to query over. The default value is `title,description,chapters,tags`.  Option descriptions:  * `chapters` - Query by chapter titles that have been added to the video.  * `description` - Query by the description of the video.  * `tags` - Query by tag names that have been added to the video.  * `title` - Query by the title of the video. 

##### sort: `'alphabetical' | 'date' | 'default' | 'duration' | 'last_user_action_event_date' | 'likes' | 'modified_time' | 'plays'`<a id="sort-alphabetical--date--default--duration--last_user_action_event_date--likes--modified_time--plays"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically by title.  * `date` - Sort the results by date.  * `default` - Use the default sorting method.  * `duration` - Sort the results by duration.  * `last_user_action_event_date` - Sort the results by last user interaction. If a result hasn\'t had an interaction, the upload date is used instead.  * `likes` - Sort the results by number of likes. To use this option, **direction** must be `desc`.  * `modified_time` - Sort the results by last modification.  * `plays` - Sort the results by number of plays. To use this option, **direction** must be `desc`. 

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosEssentials.videos_0`<a id="vimeovideosessentialsvideos_0"></a>

This method deletes one or more videos belonging to the specified user. The authenticated user must have permission to delete the videos.

Specify the videos to delete in a comma-separated list by URI using the **uris** query parameter.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const videos_0Response = await vimeo.videosEssentials.videos_0({
  userId: 152184,
  uris: "/videos/258684937,/videos/258684546",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### uris: `string`<a id="uris-string"></a>

A comma-separated list of the video URIs to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/videos` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosEssentials.videos_1`<a id="vimeovideosessentialsvideos_1"></a>

This method returns all the videos that match custom search criteria.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const videos_1Response = await vimeo.videosEssentials.videos_1({
  direction: "asc",
  filter: "CC",
  links: "https://vimeo.com/122375452,https://vimeo.com/273576296",
  page: 1,
  perPage: 10,
  query: "staff picks",
  sort: "alphabetical",
  uris: "/videos/122375452,/videos/273576296",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'CC' | 'CC-BY' | 'CC-BY-NC' | 'CC-BY-NC-ND' | 'CC-BY-NC-SA' | 'CC-BY-ND' | 'CC-BY-SA' | 'CC0' | 'categories' | 'duration' | 'in-progress' | 'minimum_likes' | 'trending' | 'upload_date'`<a id="filter-cc--cc-by--cc-by-nc--cc-by-nc-nd--cc-by-nc-sa--cc-by-nd--cc-by-sa--cc0--categories--duration--in-progress--minimum_likes--trending--upload_date"></a>

The attribute by which to filter the results. `CC` and related filters target videos with the corresponding Creative Commons licenses. For more information, see our [Creative Commons](https://vimeo.com/creativecommons) page.  Option descriptions:  * `CC` - Return videos under any Creative Commons license.  * `CC-BY` - Return CC BY, or attribution-only, videos.  * `CC-BY-NC` - Return CC BY-NC, or Attribution-NonCommercial, videos.  * `CC-BY-NC-ND` - Return CC BY-NC-ND, or Attribution-NonCommercial-NoDerivs, videos.  * `CC-BY-NC-SA` - Return CC BY-NC-SA, or Attribution-NonCommercial-ShareAlike, videos.  * `CC-BY-ND` - Return CC BY-ND, or Attribution-NoDerivs, videos.  * `CC-BY-SA` - Return CC BY-SA, or Attribution-ShareAlike, videos.  * `CC0` - Return CC0, or public domain, videos.  * `categories` - Filter by categories.  * `duration` - Filter by duration.  * `in-progress` - Return in-progress videos.  * `minimum_likes` - Filter by minimum likes.  * `trending` - Return trending videos.  * `upload_date` - Filter by upload date. 

##### links: `string`<a id="links-string"></a>

A comma-separated list of video URLs to find. Querying, filtering, and sorting aren\'t supported when using this field.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query.

##### sort: `'alphabetical' | 'comments' | 'date' | 'duration' | 'likes' | 'plays' | 'relevant'`<a id="sort-alphabetical--comments--date--duration--likes--plays--relevant"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `comments` - Sort the results by number of comments.  * `date` - Sort the results by date.  * `duration` - Sort the results by duration.  * `likes` - Sort the results by number of likes.  * `plays` - Sort the results by number of plays.  * `relevant` - Sort the results by relevance. 

##### uris: `string`<a id="uris-string"></a>

A comma-separated list of video URIs to find. Querying, filtering, and sorting aren\'t supported when using this field.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosFragments.fragments`<a id="vimeovideosfragmentsfragments"></a>

This method returns all of the fragments associated with the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const fragmentsResponse = await vimeo.videosFragments.fragments({
  videoId: 699033361,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Fragments](./models/fragments.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/fragments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosFragments.fragments_0`<a id="vimeovideosfragmentsfragments_0"></a>

This method updates the specified video with new fragments.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const fragments_0Response = await vimeo.videosFragments.fragments_0({
  videoId: 699033361,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/fragments` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosFragments.fragments_1`<a id="vimeovideosfragmentsfragments_1"></a>

This method deletes all fragments for the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const fragments_1Response = await vimeo.videosFragments.fragments_1({
  videoId: 699033361,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/fragments` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosLanguages.languages`<a id="vimeovideoslanguageslanguages"></a>

This method returns all available video languages.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const languagesResponse = await vimeo.videosLanguages.languages({
  filter: "audiotracks",
  page: 1,
  perPage: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filter: `'audiotracks' | 'texttracks'`<a id="filter-audiotracks--texttracks"></a>

The attribute by which to filter the results.  Option descriptions:  * `audiotracks` - Return languages that can be used for audio tracks.  * `texttracks` - Return languages that can be used for text tracks. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Language](./models/language.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/languages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosLiveM3u8Playback.getPlaybackUrl`<a id="vimeovideoslivem3u8playbackgetplaybackurl"></a>

This method returns an M3U8 playback URL for the specified event stream. You should use this endpoint only in conjunction with our recommended procedure for playing events via HLS. For more information, see our [HLS guide](https://developer.vimeo.com/api/live/playback).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPlaybackUrlResponse =
  await vimeo.videosLiveM3u8Playback.getPlaybackUrl({
    videoId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/videos/{video_id}/m3u8_playback` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosLiveM3u8Playback.getPlaybackUrlForEventStream`<a id="vimeovideoslivem3u8playbackgetplaybackurlforeventstream"></a>

This method returns an M3U8 playback URL for the specified event stream. You should use this endpoint only in conjunction with our recommended procedure for playing events via HLS. For more information, see our [HLS guide](https://developer.vimeo.com/api/live/playback).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPlaybackUrlForEventStreamResponse =
  await vimeo.videosLiveM3u8Playback.getPlaybackUrlForEventStream({
    userId: 152184,
    videoId: 12345,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/videos/{video_id}/m3u8_playback` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosNondestructiveTrimming.trim`<a id="vimeovideosnondestructivetrimmingtrim"></a>

This method returns the status of the trim operation for the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const trimResponse = await vimeo.videosNondestructiveTrimming.trim({
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[TrimmedVideo](./models/trimmed-video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/trim` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosNondestructiveTrimming.trim_0`<a id="vimeovideosnondestructivetrimmingtrim_0"></a>

This method starts a trim operation for the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const trim_0Response = await vimeo.videosNondestructiveTrimming.trim_0({
  videoId: 258684937,
  trim_end: "2.0",
  trim_start: "1.0",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### trim_end: `string`<a id="trim_end-string"></a>

The end position in seconds of the trim in the video.

##### trim_start: `string`<a id="trim_start-string"></a>

The start position in seconds of the trim in the video.

#### 🔄 Return<a id="🔄-return"></a>

[TrimmedVideo](./models/trimmed-video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/trim` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosRecommendations.getRelatedVideos`<a id="vimeovideosrecommendationsgetrelatedvideos"></a>

This method returns every related video of the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRelatedVideosResponse =
  await vimeo.videosRecommendations.getRelatedVideos({
    videoId: 258684937,
    filter: "related",
    page: 1,
    perPage: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### filter: `'related'`<a id="filter-related"></a>

The attribute by which to filter the results.  Option descriptions:  * `related` - Return related videos. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosShowcases.addToMultipleShowcases`<a id="vimeovideosshowcasesaddtomultipleshowcases"></a>

This method adds or removes the specified video to or from multiple showcases.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addToMultipleShowcasesResponse =
  await vimeo.videosShowcases.addToMultipleShowcases({
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### add: [`VideosShowcasesAddToMultipleShowcasesRequestAddInner`](./models/videos-showcases-add-to-multiple-showcases-request-add-inner.ts)[]<a id="add-videosshowcasesaddtomultipleshowcasesrequestaddinnermodelsvideos-showcases-add-to-multiple-showcases-request-add-innerts"></a>

The array of showcases to add the video to. Specify these with a batch request; see our [Using Common Formats and Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests) guide for more information.

##### remove: [`VideosShowcasesAddToMultipleShowcasesRequestRemoveInner`](./models/videos-showcases-add-to-multiple-showcases-request-remove-inner.ts)[]<a id="remove-videosshowcasesaddtomultipleshowcasesrequestremoveinnermodelsvideos-showcases-add-to-multiple-showcases-request-remove-innerts"></a>

The array of showcases to remove the video from. Specify these with a batch request; see our [Using Common Formats and Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests) guide for more information.

#### 🔄 Return<a id="🔄-return"></a>

[Album](./models/album.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/albums` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosShowcases.getAllContShowcases`<a id="vimeovideosshowcasesgetallcontshowcases"></a>

This method returns all the showcases that contain the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllContShowcasesResponse =
  await vimeo.videosShowcases.getAllContShowcases({
    videoId: 258684937,
    page: 1,
    perPage: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Album](./models/album.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/albums` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosTags.addMultiple`<a id="vimeovideostagsaddmultiple"></a>

This method adds multiple tags to the specified video. Include the tags as a JSON array  as the body of the request with the  **name** field, like this: `[{ "name": "funny"}, {"name": "concert" }]`. The authenticated user must have edit access to the video. For more information on batch requests like this one, see [Using Common Formats and Parameters](https://developer.vimeo.com/api/common-formats#working-with-batch-requests).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addMultipleResponse = await vimeo.videosTags.addMultiple({
  videoId: 258684937,
  page: 1,
  perPage: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Tag](./models/tag.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/tags` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosTags.addTagToVideo`<a id="vimeovideostagsaddtagtovideo"></a>

This method adds a single tag to the specified video. The authenticated user must be the owner of the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addTagToVideoResponse = await vimeo.videosTags.addTagToVideo({
  videoId: 258684937,
  word: "awesome",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### word: `string`<a id="word-string"></a>

The tag word.

#### 🔄 Return<a id="🔄-return"></a>

[Tag](./models/tag.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/tags/{word}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosTags.checkTagVideo`<a id="vimeovideostagschecktagvideo"></a>

This method determines whether the specified tag has been added to a video. The authenticated user must be the owner of the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkTagVideoResponse = await vimeo.videosTags.checkTagVideo({
  videoId: 258684937,
  word: "awesome",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### word: `string`<a id="word-string"></a>

The tag word.

#### 🔄 Return<a id="🔄-return"></a>

[Tag](./models/tag.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/tags/{word}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosTags.getAllByTag`<a id="vimeovideostagsgetallbytag"></a>

This method returns all the public videos associated with the specified tag.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllByTagResponse = await vimeo.videosTags.getAllByTag({
  word: "awesome",
  direction: "asc",
  page: 1,
  perPage: 10,
  sort: "created_time",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### word: `string`<a id="word-string"></a>

The tag word.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### sort: `'created_time' | 'duration' | 'name'`<a id="sort-created_time--duration--name"></a>

The way to sort the results.  Option descriptions:  * `created_time` - Sort the results by creation time.  * `duration` - Sort the results by duration.  * `name` - Sort the results by name. 

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags/{word}/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosTags.getVideoTags`<a id="vimeovideostagsgetvideotags"></a>

This method returns all the tags associated with the specified video. The authenticated user must be the owner of the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getVideoTagsResponse = await vimeo.videosTags.getVideoTags({
  videoId: 258684937,
  page: 1,
  perPage: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Tag](./models/tag.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/tags` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosTags.removeTag`<a id="vimeovideostagsremovetag"></a>

This method removes the specified tag from a video. The authenticated user must have edit access to the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeTagResponse = await vimeo.videosTags.removeTag({
  videoId: 258684937,
  word: "awesome",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### word: `string`<a id="word-string"></a>

The tag word.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/tags/{word}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosTextTracks.addTextTrack`<a id="vimeovideostexttracksaddtexttrack"></a>

This method adds a text track to the specified video. For more information, see [Working with Text Track Uploads](https://developer.vimeo.com/api/upload/texttracks).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addTextTrackResponse = await vimeo.videosTextTracks.addTextTrack({
  videoId: 258684937,
  active: true,
  language: "en-US",
  name: "Commentary",
  type: "captions",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### language: `string`<a id="language-string"></a>

The language of the text track. For a full list of supported languages, use the [`/languages?filter=texttracks`](https://developer.vimeo.com/api/reference/videos#get_languages) endpoint.

##### name: `string`<a id="name-string"></a>

The name of the text track.

##### type: `string`<a id="type-string"></a>

The type of text track.  Option descriptions:  * `captions` - The text track is the captions type.  * `chapters` - The text track is the chapters type.  * `descriptions` - The text track is the descriptions type.  * `metadata` - The text track is the metadata type.  * `subtitles` - The text track is the subtitles type. 

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### active: `boolean`<a id="active-boolean"></a>

Whether the current text track is the *active text track,* or the one that appears in the player. Only one text track per language and type can be active.

##### is_auto_generated: `boolean`<a id="is_auto_generated-boolean"></a>

Whether the text track was uploaded automatically by the Seshat audio annotation management platform.

##### is_edited: `boolean`<a id="is_edited-boolean"></a>

Whether the text track was uploaded by the Seshat audio annotation management platform after the user edited their transcript.

#### 🔄 Return<a id="🔄-return"></a>

[TextTrack](./models/text-track.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/texttracks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosTextTracks.addTextTrackToVideo`<a id="vimeovideostexttracksaddtexttracktovideo"></a>

This method adds a text track to the specified video. For more information, see [Working with Text Track Uploads](https://developer.vimeo.com/api/upload/texttracks).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addTextTrackToVideoResponse =
  await vimeo.videosTextTracks.addTextTrackToVideo({
    channelId: 927,
    videoId: 258684937,
    active: true,
    language: "en-US",
    name: "Commentary",
    type: "captions",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### language: `string`<a id="language-string"></a>

The language of the text track. For a full list of supported languages, use the [`/languages?filter=texttracks`](https://developer.vimeo.com/api/reference/videos#get_languages) endpoint.

##### name: `string`<a id="name-string"></a>

The name of the text track.

##### type: `string`<a id="type-string"></a>

The type of text track.  Option descriptions:  * `captions` - The text track is the captions type.  * `chapters` - The text track is the chapters type.  * `descriptions` - The text track is the descriptions type.  * `metadata` - The text track is the metadata type.  * `subtitles` - The text track is the subtitles type. 

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### active: `boolean`<a id="active-boolean"></a>

Whether the current text track is the *active text track,* or the one that appears in the player. Only one text track per language and type can be active.

##### is_auto_generated: `boolean`<a id="is_auto_generated-boolean"></a>

Whether the text track was uploaded automatically by the Seshat audio annotation management platform.

##### is_edited: `boolean`<a id="is_edited-boolean"></a>

Whether the text track was uploaded by the Seshat audio annotation management platform after the user edited their transcript.

#### 🔄 Return<a id="🔄-return"></a>

[TextTrack](./models/text-track.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/videos/{video_id}/texttracks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosTextTracks.deleteTextTrack`<a id="vimeovideostexttracksdeletetexttrack"></a>

This method deletes the specified text track from a video. The authenticated user must be the owner of the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTextTrackResponse = await vimeo.videosTextTracks.deleteTextTrack({
  texttrackId: 12345,
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### texttrackId: `number`<a id="texttrackid-number"></a>

The ID of the text track.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/texttracks/{texttrack_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosTextTracks.editTextTrack`<a id="vimeovideostexttracksedittexttrack"></a>

This method edits the specified text track of a video. The authenticated user must be the owner of the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editTextTrackResponse = await vimeo.videosTextTracks.editTextTrack({
  texttrackId: 12345,
  videoId: 258684937,
  active: true,
  language: "en-US",
  name: "Commentary",
  type: "captions",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### texttrackId: `number`<a id="texttrackid-number"></a>

The ID of the text track.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### active: `boolean`<a id="active-boolean"></a>

Whether the current text track is the *active text track,* or the one that appears in the player. Only one text track per language and per type can be active.

##### language: `string`<a id="language-string"></a>

The language of the text track. For a full list of supported languages, use the [`/languages?filter=texttracks`](https://developer.vimeo.com/api/reference/videos#get_languages) endpoint.

##### name: `string`<a id="name-string"></a>

The name of the text track.

##### type: `string`<a id="type-string"></a>

The type of text track.  Option descriptions:  * `captions` - The text track is the captions type.  * `chapters` - The text track is the chapters type.  * `descriptions` - The text track is the descriptions type.  * `metadata` - The text track is the metadata type.  * `subtitles` - The text track is the subtitles type. 

#### 🔄 Return<a id="🔄-return"></a>

[TextTrack](./models/text-track.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/texttracks/{texttrack_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosTextTracks.getAllTracks`<a id="vimeovideostexttracksgetalltracks"></a>

This method returns every text track of the specified video. The authenticated user must be the owner of the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllTracksResponse = await vimeo.videosTextTracks.getAllTracks({
  channelId: 927,
  videoId: 258684937,
  page: 1,
  perPage: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[TextTrack](./models/text-track.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/videos/{video_id}/texttracks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosTextTracks.getAllVideoTracks`<a id="vimeovideostexttracksgetallvideotracks"></a>

This method returns every text track of the specified video. The authenticated user must be the owner of the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllVideoTracksResponse =
  await vimeo.videosTextTracks.getAllVideoTracks({
    videoId: 258684937,
    page: 1,
    perPage: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[TextTrack](./models/text-track.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/texttracks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosTextTracks.getSpecificTextTrack`<a id="vimeovideostexttracksgetspecifictexttrack"></a>

This method returns a single text track of the specified video. The authenticated user must be the owner of the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificTextTrackResponse =
  await vimeo.videosTextTracks.getSpecificTextTrack({
    texttrackId: 12345,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### texttrackId: `number`<a id="texttrackid-number"></a>

The ID of the text track.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[TextTrack](./models/text-track.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/texttracks/{texttrack_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosThumbnails.addThumbnailToVideo`<a id="vimeovideosthumbnailsaddthumbnailtovideo"></a>

This method adds a thumbnail image to the specified video. The authenticated user must have team permissions for the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addThumbnailToVideoResponse =
  await vimeo.videosThumbnails.addThumbnailToVideo({
    channelId: 927,
    videoId: 258684937,
    active: true,
    time: 300,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### active: `boolean`<a id="active-boolean"></a>

Whether the image created by the **time** field should be the default thumbnail for the video.

##### time: `number`<a id="time-number"></a>

The time offset in seconds from which to create the thumbnail.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/videos/{video_id}/pictures` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosThumbnails.addThumbnailToVideo_0`<a id="vimeovideosthumbnailsaddthumbnailtovideo_0"></a>

This method adds a thumbnail image to the specified video. The authenticated user must have team permissions for the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addThumbnailToVideo_0Response =
  await vimeo.videosThumbnails.addThumbnailToVideo_0({
    videoId: 258684937,
    active: true,
    time: 300,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### active: `boolean`<a id="active-boolean"></a>

Whether the image created by the **time** field should be the default thumbnail for the video.

##### time: `number`<a id="time-number"></a>

The time offset in seconds from which to create the thumbnail.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/pictures` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosThumbnails.deleteThumbnailFromVideo`<a id="vimeovideosthumbnailsdeletethumbnailfromvideo"></a>

This method deletes the specified thumbnail image from a video. The authenticated user must have team permissions for the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteThumbnailFromVideoResponse =
  await vimeo.videosThumbnails.deleteThumbnailFromVideo({
    pictureId: 12345,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pictureId: `number`<a id="pictureid-number"></a>

The ID of the thumbnail.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/pictures/{picture_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosThumbnails.editThumbnailImage`<a id="vimeovideosthumbnailseditthumbnailimage"></a>

This method edits the specified video thumbnail image. The authenticated user must be the owner of the thumbnail.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editThumbnailImageResponse =
  await vimeo.videosThumbnails.editThumbnailImage({
    pictureId: 12345,
    videoId: 258684937,
    active: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pictureId: `number`<a id="pictureid-number"></a>

The ID of the thumbnail.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### active: `boolean`<a id="active-boolean"></a>

Whether this thumbnail is the default.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/pictures/{picture_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosThumbnails.getAllByVideoId`<a id="vimeovideosthumbnailsgetallbyvideoid"></a>

This method returns all thumbnail images of the specified video. The authenticated user must have team permissions for the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllByVideoIdResponse = await vimeo.videosThumbnails.getAllByVideoId({
  channelId: 927,
  videoId: 258684937,
  page: 1,
  perPage: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/videos/{video_id}/pictures` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosThumbnails.getAllByVideoId_0`<a id="vimeovideosthumbnailsgetallbyvideoid_0"></a>

This method returns all thumbnail images of the specified video. The authenticated user must have team permissions for the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllByVideoId_0Response =
  await vimeo.videosThumbnails.getAllByVideoId_0({
    videoId: 258684937,
    page: 1,
    perPage: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/pictures` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosThumbnails.getThumbnailFromVideo`<a id="vimeovideosthumbnailsgetthumbnailfromvideo"></a>

This method returns a single thumbnail image from the specified video. The authenticated user must have team permissions for the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getThumbnailFromVideoResponse =
  await vimeo.videosThumbnails.getThumbnailFromVideo({
    pictureId: 12345,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pictureId: `number`<a id="pictureid-number"></a>

The ID of the thumbnail.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Picture](./models/picture.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/pictures/{picture_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosTranscripts.transcript`<a id="vimeovideostranscriptstranscript"></a>

This method returns the transcript segments of the specified text track.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const transcriptResponse = await vimeo.videosTranscripts.transcript({
  texttrackId: 12345,
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### texttrackId: `number`<a id="texttrackid-number"></a>

The ID of the text track.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Segment](./models/segment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/transcripts/{texttrack_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosUnlistedVideos.grantAccessToUsers`<a id="vimeovideosunlistedvideosgrantaccesstousers"></a>

This method gives multiple users permission to access the specified unlisted video. The authenticated user must be the owner of the video. The body of the request should follow our [batch request format](https://developer.vimeo.com/api/common-formats#working-with-batch-requests): each object must contain a single **uri** field whose value is the URI of the user who can access the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const grantAccessToUsersResponse =
  await vimeo.videosUnlistedVideos.grantAccessToUsers({
    channelId: 927,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/videos/{video_id}/privacy/users` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosUnlistedVideos.grantAccessToUsers_0`<a id="vimeovideosunlistedvideosgrantaccesstousers_0"></a>

This method gives multiple users permission to access the specified unlisted video. The authenticated user must be the owner of the video. The body of the request should follow our [batch request format](https://developer.vimeo.com/api/common-formats#working-with-batch-requests): each object must contain a single **uri** field whose value is the URI of the user who can access the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const grantAccessToUsers_0Response =
  await vimeo.videosUnlistedVideos.grantAccessToUsers_0({
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/privacy/users` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosUnlistedVideos.grantUserAccess`<a id="vimeovideosunlistedvideosgrantuseraccess"></a>

This method gives a single user permission to access the specified unlisted video. The authenticated user must be the owner of the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const grantUserAccessResponse =
  await vimeo.videosUnlistedVideos.grantUserAccess({
    userId: 152184,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/privacy/users/{user_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosUnlistedVideos.listAccessibleUsers`<a id="vimeovideosunlistedvideoslistaccessibleusers"></a>

This method returns every user who has access to the specified unlisted video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAccessibleUsersResponse =
  await vimeo.videosUnlistedVideos.listAccessibleUsers({
    channelId: 927,
    videoId: 258684937,
    page: 1,
    perPage: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/videos/{video_id}/privacy/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosUnlistedVideos.listAccessibleUsers_0`<a id="vimeovideosunlistedvideoslistaccessibleusers_0"></a>

This method returns every user who has access to the specified unlisted video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAccessibleUsers_0Response =
  await vimeo.videosUnlistedVideos.listAccessibleUsers_0({
    videoId: 258684937,
    page: 1,
    perPage: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/privacy/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosUnlistedVideos.restrictUserAccess`<a id="vimeovideosunlistedvideosrestrictuseraccess"></a>

This method prevents a user from being able to view the specified unlisted video. The authenticated user must be the owner of the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const restrictUserAccessResponse =
  await vimeo.videosUnlistedVideos.restrictUserAccess({
    userId: 152184,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/privacy/users/{user_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosUploads.beginVideoUploadProcess`<a id="vimeovideosuploadsbeginvideouploadprocess"></a>

This method begins the video upload process for the authenticated user. For more information, see our [upload documentation](https://developer.vimeo.com/api/upload/videos).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const beginVideoUploadProcessResponse =
  await vimeo.videosUploads.beginVideoUploadProcess({
    description: "A celebration of 10 years of Staff Picks.",
    folder_uri: "/users/12345/folders/6789",
    hide_from_vimeo: false,
    license: "by",
    locale: "en_US",
    name: "Celebrating 10 Years of Staff Picks",
    password: "hunter1",
    upload: {
      approach: "post",
      link: "https://example.com/video.mp4",
      redirect_url: "https://example.com",
      size: "13623861",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### upload: [`VideosUploadsBeginVideoUploadProcessRequestUpload`](./models/videos-uploads-begin-video-upload-process-request-upload.ts)<a id="upload-videosuploadsbeginvideouploadprocessrequestuploadmodelsvideos-uploads-begin-video-upload-process-request-uploadts"></a>

##### description: `string`<a id="description-string"></a>

The description of the video.

##### content_rating: `string`[]<a id="content_rating-string"></a>

A list of values describing the content in this video. For a full list of values, use the [`/contentratings`](https://developer.vimeo.com/api/reference/videos#get_content_ratings) endpoint.

##### embed: [`VideosUploadsBeginVideoUploadProcessRequestEmbed`](./models/videos-uploads-begin-video-upload-process-request-embed.ts)<a id="embed-videosuploadsbeginvideouploadprocessrequestembedmodelsvideos-uploads-begin-video-upload-process-request-embedts"></a>

##### embed_domains: `string`[]<a id="embed_domains-string"></a>

The complete list of domains the video can be embedded on. This field requires that **privacy_embed** have the value `whitelist`.

##### folder_uri: `string`<a id="folder_uri-string"></a>

The URI of the folder to which the video is uploaded.

##### hide_from_vimeo: `boolean`<a id="hide_from_vimeo-boolean"></a>

Whether to hide the video from everyone except the video\\\'s owner. When the value is `true`, unlisted video links work only for the video\\\'s owner.

##### license: `string`<a id="license-string"></a>

The Creative Commons license under which the video is offered.  Option descriptions:  * `by` - The video is offered under CC BY, or the attibution-only license.  * `by-nc` - The video is offered under CC BY-NC, or the Attribution-NonCommercial license.  * `by-nc-nd` - The video is offered under CC BY-NC-ND, or the Attribution-NonCommercian-NoDerivs license.  * `by-nc-sa` - The video is offered under CC BY-NC-SA, or the Attribution-NonCommercial-ShareAlike licence.  * `by-nd` - The video is offered under CC BY-ND, or the Attribution-NoDerivs license.  * `by-sa` - The video is offered under CC BY-SA, or the Attribution-ShareAlike license.  * `cc0` - The video is offered under CC0, or the public domain license. 

##### locale: `string`<a id="locale-string"></a>

The video\\\'s default language. For a full list of supported languages, use the [`/languages?filter=texttracks`](https://developer.vimeo.com/api/reference/videos#get_languages) endpoint.

##### name: `string`<a id="name-string"></a>

The title of the video.

##### password: `string`<a id="password-string"></a>

The password. This field is required when **privacy.view** is `password`.

##### privacy: [`VideosUploadsBeginVideoUploadProcessRequestPrivacy`](./models/videos-uploads-begin-video-upload-process-request-privacy.ts)<a id="privacy-videosuploadsbeginvideouploadprocessrequestprivacymodelsvideos-uploads-begin-video-upload-process-request-privacyts"></a>

##### review_page: [`VideosUploadsBeginVideoUploadProcessRequestReviewPage`](./models/videos-uploads-begin-video-upload-process-request-review-page.ts)<a id="review_page-videosuploadsbeginvideouploadprocessrequestreviewpagemodelsvideos-uploads-begin-video-upload-process-request-review-pagets"></a>

##### spatial: [`VideosUploadsBeginVideoUploadProcessRequestSpatial`](./models/videos-uploads-begin-video-upload-process-request-spatial.ts)<a id="spatial-videosuploadsbeginvideouploadprocessrequestspatialmodelsvideos-uploads-begin-video-upload-process-request-spatialts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/videos` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosUploads.completeStreamingUpload`<a id="vimeovideosuploadscompletestreamingupload"></a>

This method completes the specified streaming upload of the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const completeStreamingUploadResponse =
  await vimeo.videosUploads.completeStreamingUpload({
    uploadId: 12345,
    userId: 152184,
    signature: "cd89a20adde7a608f3331e71c37bdfa087bacbf3",
    videoFileId: 1234,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uploadId: `number`<a id="uploadid-number"></a>

The ID of the streaming upload.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### signature: `string`<a id="signature-string"></a>

The crypto signature of the completed upload.

##### videoFileId: `number`<a id="videofileid-number"></a>

The ID of the uploaded file.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/uploads/{upload_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosUploads.getUploadAttempt`<a id="vimeovideosuploadsgetuploadattempt"></a>

This method returns the specified upload attempt of the authenticated user. _This method has been deprecated. For information on our currently supported upload approaches, see our [Working with Video Uploads](https://developer.vimeo.com/api/upload/videos) guide._

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUploadAttemptResponse = await vimeo.videosUploads.getUploadAttempt({
  uploadId: 12345,
  userId: 152184,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uploadId: `number`<a id="uploadid-number"></a>

The ID of the upload attempt.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[UploadAttempt](./models/upload-attempt.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/uploads/{upload_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosUploads.video`<a id="vimeovideosuploadsvideo"></a>

This method begins the video upload process for the authenticated user. For more information, see our [upload documentation](https://developer.vimeo.com/api/upload/videos).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const videoResponse = await vimeo.videosUploads.video({
  userId: 152184,
  description: "A celebration of 10 years of Staff Picks.",
  folder_uri: "/users/12345/folders/6789",
  hide_from_vimeo: false,
  license: "by",
  locale: "en_US",
  name: "Celebrating 10 Years of Staff Picks",
  password: "hunter1",
  upload: {
    approach: "post",
    link: "https://example.com/video.mp4",
    redirect_url: "https://example.com",
    size: "13623861",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### upload: [`UploadVideoRequestUpload`](./models/upload-video-request-upload.ts)<a id="upload-uploadvideorequestuploadmodelsupload-video-request-uploadts"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### description: `string`<a id="description-string"></a>

The description of the video.

##### content_rating: `string`[]<a id="content_rating-string"></a>

A list of values describing the content in this video. For a full list of values, use the [`/contentratings`](https://developer.vimeo.com/api/reference/videos#get_content_ratings) endpoint.

##### embed: [`UploadVideoRequestEmbed`](./models/upload-video-request-embed.ts)<a id="embed-uploadvideorequestembedmodelsupload-video-request-embedts"></a>

##### embed_domains: `string`[]<a id="embed_domains-string"></a>

The complete list of domains the video can be embedded on. This field requires that **privacy_embed** have the value `whitelist`.

##### folder_uri: `string`<a id="folder_uri-string"></a>

The URI of the folder to which the video is uploaded.

##### hide_from_vimeo: `boolean`<a id="hide_from_vimeo-boolean"></a>

Whether to hide the video from everyone except the video\\\'s owner. When the value is `true`, unlisted video links work only for the video\\\'s owner.

##### license: `string`<a id="license-string"></a>

The Creative Commons license under which the video is offered.  Option descriptions:  * `by` - The video is offered under CC BY, or the attibution-only license.  * `by-nc` - The video is offered under CC BY-NC, or the Attribution-NonCommercial license.  * `by-nc-nd` - The video is offered under CC BY-NC-ND, or the Attribution-NonCommercian-NoDerivs license.  * `by-nc-sa` - The video is offered under CC BY-NC-SA, or the Attribution-NonCommercial-ShareAlike licence.  * `by-nd` - The video is offered under CC BY-ND, or the Attribution-NoDerivs license.  * `by-sa` - The video is offered under CC BY-SA, or the Attribution-ShareAlike license.  * `cc0` - The video is offered under CC0, or the public domain license. 

##### locale: `string`<a id="locale-string"></a>

The video\\\'s default language. For a full list of supported languages, use the [`/languages?filter=texttracks`](https://developer.vimeo.com/api/reference/videos#get_languages) endpoint.

##### name: `string`<a id="name-string"></a>

The title of the video.

##### password: `string`<a id="password-string"></a>

The password. This field is required when **privacy.view** is `password`.

##### privacy: [`UploadVideoRequestPrivacy`](./models/upload-video-request-privacy.ts)<a id="privacy-uploadvideorequestprivacymodelsupload-video-request-privacyts"></a>

##### review_page: [`UploadVideoRequestReviewPage`](./models/upload-video-request-review-page.ts)<a id="review_page-uploadvideorequestreviewpagemodelsupload-video-request-review-pagets"></a>

##### spatial: [`UploadVideoRequestSpatial`](./models/upload-video-request-spatial.ts)<a id="spatial-uploadvideorequestspatialmodelsupload-video-request-spatialts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/videos` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosVersions.addVideoVersion`<a id="vimeovideosversionsaddvideoversion"></a>

This method adds a version to the specified video. The authenticated user must be the owner of the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addVideoVersionResponse = await vimeo.videosVersions.addVideoVersion({
  videoId: 258684937,
  file_name: "untitled.mp4",
  upload: {
    approach: "post",
    link: "https://example.com",
    redirect_url: "https://example.com",
    size: "13623861",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### file_name: `string`<a id="file_name-string"></a>

The name of the version.

##### upload: [`VideosVersionsAddVideoVersionRequestUpload`](./models/videos-versions-add-video-version-request-upload.ts)<a id="upload-videosversionsaddvideoversionrequestuploadmodelsvideos-versions-add-video-version-request-uploadts"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[VideoVersion](./models/video-version.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/versions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosVersions.deleteVideoVersion`<a id="vimeovideosversionsdeletevideoversion"></a>

This method deletes the specified version from a video. The authenticated user must be the owner of the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteVideoVersionResponse =
  await vimeo.videosVersions.deleteVideoVersion({
    versionId: 12345,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### versionId: `number`<a id="versionid-number"></a>

The ID of the video version.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/versions/{version_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosVersions.editVideoVersion`<a id="vimeovideosversionseditvideoversion"></a>

This method edits the specified version of a video. The authenticated user must be the owner of the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editVideoVersionResponse = await vimeo.videosVersions.editVideoVersion({
  versionId: 12345,
  videoId: 258684937,
  description: "description with emoji",
  is_current: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### versionId: `number`<a id="versionid-number"></a>

The ID of the video version.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### description: `string`<a id="description-string"></a>

A description of the video version. This description can make use of the full unicode character set.

##### is_current: `boolean`<a id="is_current-boolean"></a>

Whether the video version is active.

#### 🔄 Return<a id="🔄-return"></a>

[VideoVersion](./models/video-version.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/versions/{version_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosVersions.getAllVideoVersions`<a id="vimeovideosversionsgetallvideoversions"></a>

This method returns every version of the specified video. The authenticated user must be the owner of the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllVideoVersionsResponse =
  await vimeo.videosVersions.getAllVideoVersions({
    channelId: 927,
    videoId: 258684937,
    page: 1,
    perPage: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[VideoVersion](./models/video-version.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/videos/{video_id}/versions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosVersions.getAllVideoVersions_0`<a id="vimeovideosversionsgetallvideoversions_0"></a>

This method returns every version of the specified video. The authenticated user must be the owner of the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllVideoVersions_0Response =
  await vimeo.videosVersions.getAllVideoVersions_0({
    videoId: 258684937,
    page: 1,
    perPage: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[VideoVersion](./models/video-version.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/versions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosVersions.getSpecificVersion`<a id="vimeovideosversionsgetspecificversion"></a>

This method returns a single version of the specified video. The authenticated user must be the owner of the video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificVersionResponse =
  await vimeo.videosVersions.getSpecificVersion({
    versionId: 12345,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### versionId: `number`<a id="versionid-number"></a>

The ID of the video version.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[VideoVersion](./models/video-version.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/versions/{version_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosVideoComments.addNewComment`<a id="vimeovideosvideocommentsaddnewcomment"></a>

This method adds a video comment to the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addNewCommentResponse = await vimeo.videosVideoComments.addNewComment({
  channelId: 927,
  videoId: 258684937,
  text: "I love this!",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### text: `string`<a id="text-string"></a>

The text of the comment.

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Comment](./models/comment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/videos/{video_id}/comments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosVideoComments.comment`<a id="vimeovideosvideocommentscomment"></a>

This method adds a video comment to the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const commentResponse = await vimeo.videosVideoComments.comment({
  videoId: 258684937,
  text: "I love this!",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### text: `string`<a id="text-string"></a>

The text of the comment.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Comment](./models/comment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/comments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosVideoComments.comment_0`<a id="vimeovideosvideocommentscomment_0"></a>

This method returns the specified video comment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const comment_0Response = await vimeo.videosVideoComments.comment_0({
  commentId: 12345,
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### commentId: `number`<a id="commentid-number"></a>

The ID of the comment.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Comment](./models/comment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/comments/{comment_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosVideoComments.comment_1`<a id="vimeovideosvideocommentscomment_1"></a>

This method deletes the specified video comment. The authenticated user must be the owner of the comment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const comment_1Response = await vimeo.videosVideoComments.comment_1({
  commentId: 12345,
  videoId: 258684937,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### commentId: `number`<a id="commentid-number"></a>

The ID of the comment.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/comments/{comment_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosVideoComments.comment_2`<a id="vimeovideosvideocommentscomment_2"></a>

This method edits the specified video comment. The authenticated user must be the owner of the comment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const comment_2Response = await vimeo.videosVideoComments.comment_2({
  commentId: 12345,
  videoId: 258684937,
  text: "I love this!",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### text: `string`<a id="text-string"></a>

The new comment text.

##### commentId: `number`<a id="commentid-number"></a>

The ID of the comment.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Comment](./models/comment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/comments/{comment_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosVideoComments.comments`<a id="vimeovideosvideocommentscomments"></a>

This method returns every video comment on the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const commentsResponse = await vimeo.videosVideoComments.comments({
  videoId: 258684937,
  direction: "asc",
  page: 1,
  perPage: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Comment](./models/comment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/comments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosVideoComments.createReply`<a id="vimeovideosvideocommentscreatereply"></a>

This method adds a reply to the specified video comment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createReplyResponse = await vimeo.videosVideoComments.createReply({
  commentId: 12345,
  videoId: 258684937,
  text: "I love this!",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### text: `string`<a id="text-string"></a>

The reply to the comment.

##### commentId: `number`<a id="commentid-number"></a>

The ID of the comment.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Comment](./models/comment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/comments/{comment_id}/replies` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosVideoComments.getAllReplies`<a id="vimeovideosvideocommentsgetallreplies"></a>

This method returns every video comment on the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllRepliesResponse = await vimeo.videosVideoComments.getAllReplies({
  channelId: 927,
  videoId: 258684937,
  direction: "asc",
  page: 1,
  perPage: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `number`<a id="channelid-number"></a>

The ID of the channel.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Comment](./models/comment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/videos/{video_id}/comments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.videosVideoComments.getAllReplies_0`<a id="vimeovideosvideocommentsgetallreplies_0"></a>

This method returns every reply to the specified video comment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllReplies_0Response = await vimeo.videosVideoComments.getAllReplies_0(
  {
    commentId: 12345,
    videoId: 258684937,
    page: 1,
    perPage: 10,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### commentId: `number`<a id="commentid-number"></a>

The ID of the comment.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

#### 🔄 Return<a id="🔄-return"></a>

[Comment](./models/comment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/videos/{video_id}/comments/{comment_id}/replies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.watchLaterQueueEssentials.addVideoToQueue`<a id="vimeowatchlaterqueueessentialsaddvideotoqueue"></a>

This method adds the specified video to the authenticated user's Watch Later queue.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addVideoToQueueResponse =
  await vimeo.watchLaterQueueEssentials.addVideoToQueue({
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/watchlater/{video_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.watchLaterQueueEssentials.addVideoToQueue_0`<a id="vimeowatchlaterqueueessentialsaddvideotoqueue_0"></a>

This method adds the specified video to the authenticated user's Watch Later queue.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addVideoToQueue_0Response =
  await vimeo.watchLaterQueueEssentials.addVideoToQueue_0({
    userId: 152184,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/watchlater/{video_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.watchLaterQueueEssentials.checkVideoInQueue`<a id="vimeowatchlaterqueueessentialscheckvideoinqueue"></a>

This method checks the authenticated user's Watch Later queue for the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkVideoInQueueResponse =
  await vimeo.watchLaterQueueEssentials.checkVideoInQueue({
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/watchlater/{video_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.watchLaterQueueEssentials.checkVideoInQueue_0`<a id="vimeowatchlaterqueueessentialscheckvideoinqueue_0"></a>

This method checks the authenticated user's Watch Later queue for the specified video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkVideoInQueue_0Response =
  await vimeo.watchLaterQueueEssentials.checkVideoInQueue_0({
    userId: 152184,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/watchlater/{video_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.watchLaterQueueEssentials.getVideosInQueue`<a id="vimeowatchlaterqueueessentialsgetvideosinqueue"></a>

This method returns every video from the authenticated user's Watch Later queue.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getVideosInQueueResponse =
  await vimeo.watchLaterQueueEssentials.getVideosInQueue({
    direction: "asc",
    filter: "embeddable",
    filterEmbeddable: true,
    page: 1,
    perPage: 10,
    query: "Stop motion",
    sort: "alphabetical",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'embeddable'`<a id="filter-embeddable"></a>

The attribute by which to filter the results.  Option descriptions:  * `embeddable` - Return embeddable videos. 

##### filterEmbeddable: `boolean`<a id="filterembeddable-boolean"></a>

Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'comments' | 'date' | 'duration' | 'likes' | 'plays'`<a id="sort-alphabetical--comments--date--duration--likes--plays"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `comments` - Sort the results by number of comments.  * `date` - Sort the results by date added.  * `duration` - Sort the results by duration.  * `likes` - Sort the results by number of likes.  * `plays` - Sort the results by number of plays. 

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/watchlater` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.watchLaterQueueEssentials.listUserQueueVideos`<a id="vimeowatchlaterqueueessentialslistuserqueuevideos"></a>

This method returns every video from the authenticated user's Watch Later queue.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUserQueueVideosResponse =
  await vimeo.watchLaterQueueEssentials.listUserQueueVideos({
    userId: 152184,
    direction: "asc",
    filter: "embeddable",
    filterEmbeddable: true,
    page: 1,
    perPage: 10,
    query: "Stop motion",
    sort: "alphabetical",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### filter: `'embeddable'`<a id="filter-embeddable"></a>

The attribute by which to filter the results.  Option descriptions:  * `embeddable` - Return embeddable videos. 

##### filterEmbeddable: `boolean`<a id="filterembeddable-boolean"></a>

Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`.

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### query: `string`<a id="query-string"></a>

The search query to use to filter the results.

##### sort: `'alphabetical' | 'comments' | 'date' | 'duration' | 'likes' | 'plays'`<a id="sort-alphabetical--comments--date--duration--likes--plays"></a>

The way to sort the results.  Option descriptions:  * `alphabetical` - Sort the results alphabetically.  * `comments` - Sort the results by number of comments.  * `date` - Sort the results by date added.  * `duration` - Sort the results by duration.  * `likes` - Sort the results by number of likes.  * `plays` - Sort the results by number of plays. 

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/watchlater` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.watchLaterQueueEssentials.removeVideoFromQueue`<a id="vimeowatchlaterqueueessentialsremovevideofromqueue"></a>

This method removes the specified video from the authenticated user's Watch Later queue.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeVideoFromQueueResponse =
  await vimeo.watchLaterQueueEssentials.removeVideoFromQueue({
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/watchlater/{video_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.watchLaterQueueEssentials.removeVideoFromQueue_0`<a id="vimeowatchlaterqueueessentialsremovevideofromqueue_0"></a>

This method removes the specified video from the authenticated user's Watch Later queue.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeVideoFromQueue_0Response =
  await vimeo.watchLaterQueueEssentials.removeVideoFromQueue_0({
    userId: 152184,
    videoId: 258684937,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### videoId: `number`<a id="videoid-number"></a>

The ID of the video.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/watchlater/{video_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.webinarEmails.customizePreferences`<a id="vimeowebinaremailscustomizepreferences"></a>

This method causes the authenticated user to customize the email preferences of the specified webinar. The user must have administrative access to the webinar.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const customizePreferencesResponse =
  await vimeo.webinarEmails.customizePreferences({
    webinarId: "f19bfa08-b266-4f20-bfce-db1d0719b52f",
    accent_color: "#000fff",
    custom_link: "https://xyz.com",
    from: "Vimeo",
    logo_uri: "/users/123/team_logos_2343",
    reply_email: "test@vimeo.com",
    sender_address: "Bangalore, India",
    sender_policy_url: "vimeo.com/policy",
    use_custom_link: false,
    use_reply_email: false,
    use_sender_address: false,
    use_sender_policy_url: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webinarId: `string`<a id="webinarid-string"></a>

The ID of the webinar.

##### accent_color: `string`<a id="accent_color-string"></a>

The accent color scheme for emails that are sent about the webinar.

##### custom_link: `string`<a id="custom_link-string"></a>

The custom link for emails that are sent about the webinar.

##### email_event_reminder_24_hrs: `object`<a id="email_event_reminder_24_hrs-object"></a>

The email customization details for the webinar reminder email, which goes out 24 hours before the event.

##### email_post_event_thank_you: `object`<a id="email_post_event_thank_you-object"></a>

The email customization details for the webinar post-event thank-you email.

##### email_preferences: [`WebinarEmailsCustomizePreferencesRequestEmailPreferences`](./models/webinar-emails-customize-preferences-request-email-preferences.ts)<a id="email_preferences-webinaremailscustomizepreferencesrequestemailpreferencesmodelswebinar-emails-customize-preferences-request-email-preferencests"></a>

##### email_registration_confirmation: `object`<a id="email_registration_confirmation-object"></a>

The email customization details for the webinar registration confirmation email.

##### from: `string`<a id="from-string"></a>

The name of the sender for emails that are sent about the webinar.

##### logo_uri: `string`<a id="logo_uri-string"></a>

The URI of the logo image to include in emails that are sent about the webinar.

##### reply_email: `string`<a id="reply_email-string"></a>

The sender\\\'s reply email address.

##### sender_address: `string`<a id="sender_address-string"></a>

The sender\\\'s physical address.

##### sender_policy_url: `string`<a id="sender_policy_url-string"></a>

The URL of the sender\\\'s privacy policy.

##### use_custom_link: `boolean`<a id="use_custom_link-boolean"></a>

Whether to include a custom link in emails that are sent about the webinar.

##### use_reply_email: `boolean`<a id="use_reply_email-boolean"></a>

Whether to include a reply link in the footer of emails that are sent about the webinar.

##### use_sender_address: `boolean`<a id="use_sender_address-boolean"></a>

Whether to include the sender\\\'s physical address in the footer of emails that are sent about the webinar.

##### use_sender_policy_url: `boolean`<a id="use_sender_policy_url-boolean"></a>

Whether to include the URL of the sender\\\'s privacy policy in the footer of emails that are sent about the webinar.

#### 🔄 Return<a id="🔄-return"></a>

[WebinarEmailSettings](./models/webinar-email-settings.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/webinars/{webinar_id}/email_settings` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.webinarEmails.customizePreferences_0`<a id="vimeowebinaremailscustomizepreferences_0"></a>

This method causes the authenticated user to customize the email preferences of the specified webinar. The user must have administrative access to the webinar.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const customizePreferences_0Response =
  await vimeo.webinarEmails.customizePreferences_0({
    userId: 152184,
    webinarId: "f19bfa08-b266-4f20-bfce-db1d0719b52f",
    accent_color: "#000fff",
    custom_link: "https://xyz.com",
    from: "Vimeo",
    logo_uri: "/users/123/team_logos_2343",
    reply_email: "test@vimeo.com",
    sender_address: "Bangalore, India",
    sender_policy_url: "vimeo.com/policy",
    use_custom_link: false,
    use_reply_email: false,
    use_sender_address: false,
    use_sender_policy_url: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### webinarId: `string`<a id="webinarid-string"></a>

The ID of the webinar.

##### accent_color: `string`<a id="accent_color-string"></a>

The accent color scheme for emails that are sent about the webinar.

##### custom_link: `string`<a id="custom_link-string"></a>

The custom link for emails that are sent about the webinar.

##### email_event_reminder_24_hrs: `object`<a id="email_event_reminder_24_hrs-object"></a>

The email customization details for the webinar reminder email, which goes out 24 hours before the event.

##### email_post_event_thank_you: `object`<a id="email_post_event_thank_you-object"></a>

The email customization details for the webinar post-event thank-you email.

##### email_preferences: [`WebinarEmailsCustomizePreferencesRequestEmailPreferences`](./models/webinar-emails-customize-preferences-request-email-preferences.ts)<a id="email_preferences-webinaremailscustomizepreferencesrequestemailpreferencesmodelswebinar-emails-customize-preferences-request-email-preferencests"></a>

##### email_registration_confirmation: `object`<a id="email_registration_confirmation-object"></a>

The email customization details for the webinar registration confirmation email.

##### from: `string`<a id="from-string"></a>

The name of the sender for emails that are sent about the webinar.

##### logo_uri: `string`<a id="logo_uri-string"></a>

The URI of the logo image to include in emails that are sent about the webinar.

##### reply_email: `string`<a id="reply_email-string"></a>

The sender\\\'s reply email address.

##### sender_address: `string`<a id="sender_address-string"></a>

The sender\\\'s physical address.

##### sender_policy_url: `string`<a id="sender_policy_url-string"></a>

The URL of the sender\\\'s privacy policy.

##### use_custom_link: `boolean`<a id="use_custom_link-boolean"></a>

Whether to include a custom link in emails that are sent about the webinar.

##### use_reply_email: `boolean`<a id="use_reply_email-boolean"></a>

Whether to include a reply link in the footer of emails that are sent about the webinar.

##### use_sender_address: `boolean`<a id="use_sender_address-boolean"></a>

Whether to include the sender\\\'s physical address in the footer of emails that are sent about the webinar.

##### use_sender_policy_url: `boolean`<a id="use_sender_policy_url-boolean"></a>

Whether to include the URL of the sender\\\'s privacy policy in the footer of emails that are sent about the webinar.

#### 🔄 Return<a id="🔄-return"></a>

[WebinarEmailSettings](./models/webinar-email-settings.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/webinars/{webinar_id}/email_settings` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.webinarEmails.getCustomizationData`<a id="vimeowebinaremailsgetcustomizationdata"></a>

This method returns customized email data for the specified webinar. The authenticated user must have administrative access to the webinar.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomizationDataResponse =
  await vimeo.webinarEmails.getCustomizationData({
    webinarId: "f19bfa08-b266-4f20-bfce-db1d0719b52f",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webinarId: `string`<a id="webinarid-string"></a>

The ID of the webinar.

#### 🔄 Return<a id="🔄-return"></a>

[WebinarEmailSettings](./models/webinar-email-settings.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/webinars/{webinar_id}/email_settings` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.webinarEmails.getCustomizationData_0`<a id="vimeowebinaremailsgetcustomizationdata_0"></a>

This method returns customized email data for the specified webinar. The authenticated user must have administrative access to the webinar.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomizationData_0Response =
  await vimeo.webinarEmails.getCustomizationData_0({
    userId: 152184,
    webinarId: "f19bfa08-b266-4f20-bfce-db1d0719b52f",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### webinarId: `string`<a id="webinarid-string"></a>

The ID of the webinar.

#### 🔄 Return<a id="🔄-return"></a>

[WebinarEmailSettings](./models/webinar-email-settings.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/webinars/{webinar_id}/email_settings` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.webinarEssentials.createWebinar`<a id="vimeowebinaressentialscreatewebinar"></a>

This method creates a new webinar for the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createWebinarResponse = await vimeo.webinarEssentials.createWebinar({
  title: "Interviews Daily",
  description: "In this episode, we interview a surprise guest",
  folder_uri: 0,
  password: "gogo",
  time_zone: "America/New_York",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

The title of the webinar.

##### description: `string`<a id="description-string"></a>

The description of the webinar.

##### email_settings: [`WebinarEssentialsCreateWebinarRequestEmailSettings`](./models/webinar-essentials-create-webinar-request-email-settings.ts)<a id="email_settings-webinaressentialscreatewebinarrequestemailsettingsmodelswebinar-essentials-create-webinar-request-email-settingsts"></a>

##### folder_uri: `number`<a id="folder_uri-number"></a>

The URI of the webinar\\\'s folder.

##### password: `string`<a id="password-string"></a>

The password when **privacy.view** is `password`. Anyone with the password can view the videos generated by streaming to the webinar event.

##### privacy: [`WebinarEssentialsCreateWebinarRequestPrivacy`](./models/webinar-essentials-create-webinar-request-privacy.ts)<a id="privacy-webinaressentialscreatewebinarrequestprivacymodelswebinar-essentials-create-webinar-request-privacyts"></a>

##### schedule: [`WebinarEssentialsCreateWebinarRequestSchedule`](./models/webinar-essentials-create-webinar-request-schedule.ts)<a id="schedule-webinaressentialscreatewebinarrequestschedulemodelswebinar-essentials-create-webinar-request-schedulets"></a>

##### time_zone: `string`<a id="time_zone-string"></a>

The time zone used in resolving the timestamps that are included in the automatically generated video titles for the webinar.

#### 🔄 Return<a id="🔄-return"></a>

[Webinar](./models/webinar.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/webinars` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.webinarEssentials.getSpecificWebinar`<a id="vimeowebinaressentialsgetspecificwebinar"></a>

This method returns a single webinar belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificWebinarResponse =
  await vimeo.webinarEssentials.getSpecificWebinar({
    webinarId: "f19bfa08-b266-4f20-bfce-db1d0719b52f",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webinarId: `string`<a id="webinarid-string"></a>

The ID of the webinar.

#### 🔄 Return<a id="🔄-return"></a>

[Webinar](./models/webinar.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/webinars/{webinar_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.webinarEssentials.getSpecificWebinar_0`<a id="vimeowebinaressentialsgetspecificwebinar_0"></a>

This method returns a single webinar belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificWebinar_0Response =
  await vimeo.webinarEssentials.getSpecificWebinar_0({
    webinarId: "f19bfa08-b266-4f20-bfce-db1d0719b52f",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webinarId: `string`<a id="webinarid-string"></a>

The ID of the webinar.

#### 🔄 Return<a id="🔄-return"></a>

[Webinar](./models/webinar.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webinars/{webinar_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.webinarEssentials.updateWebinarBelongingToAuthenticatedUser`<a id="vimeowebinaressentialsupdatewebinarbelongingtoauthenticateduser"></a>

This method updates a webinar belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateWebinarBelongingToAuthenticatedUserResponse =
  await vimeo.webinarEssentials.updateWebinarBelongingToAuthenticatedUser({
    webinarId: "f19bfa08-b266-4f20-bfce-db1d0719b52f",
    title: "Interviews Daily",
    description: "In this episode, we interview a surprise guest",
    password: "gogo",
    status: "started",
    time_zone: "America/New_York",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webinarId: `string`<a id="webinarid-string"></a>

The ID of the webinar.

##### title: `string`<a id="title-string"></a>

The title of the webinar.

##### description: `string`<a id="description-string"></a>

The description of the webinar.

##### email_settings: [`WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequestEmailSettings`](./models/webinar-essentials-update-webinar-belonging-to-authenticated-user-request-email-settings.ts)<a id="email_settings-webinaressentialsupdatewebinarbelongingtoauthenticateduserrequestemailsettingsmodelswebinar-essentials-update-webinar-belonging-to-authenticated-user-request-email-settingsts"></a>

##### password: `string`<a id="password-string"></a>

The password when **privacy.view** is `password`. Anyone with the password can view the videos generated by streaming to the webinar event.

##### privacy: [`WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequestPrivacy`](./models/webinar-essentials-update-webinar-belonging-to-authenticated-user-request-privacy.ts)<a id="privacy-webinaressentialsupdatewebinarbelongingtoauthenticateduserrequestprivacymodelswebinar-essentials-update-webinar-belonging-to-authenticated-user-request-privacyts"></a>

##### schedule: [`WebinarEssentialsUpdateWebinarBelongingToAuthenticatedUserRequestSchedule`](./models/webinar-essentials-update-webinar-belonging-to-authenticated-user-request-schedule.ts)<a id="schedule-webinaressentialsupdatewebinarbelongingtoauthenticateduserrequestschedulemodelswebinar-essentials-update-webinar-belonging-to-authenticated-user-request-schedulets"></a>

##### status: `string`<a id="status-string"></a>

The status of the webinar.  Option descriptions:  * `ended` - The webinar has ended.  * `started` - The webinar has started. 

##### time_zone: `string`<a id="time_zone-string"></a>

The time zone used in resolving the timestamps that are included in the automatically generated video titles for the webinar.

#### 🔄 Return<a id="🔄-return"></a>

[Webinar](./models/webinar.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/webinars/{webinar_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.webinarEssentials.webinar`<a id="vimeowebinaressentialswebinar"></a>

This method creates a new webinar for the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const webinarResponse = await vimeo.webinarEssentials.webinar({
  userId: 152184,
  title: "Interviews Daily",
  description: "In this episode, we interview a surprise guest",
  folder_uri: 0,
  password: "gogo",
  time_zone: "America/New_York",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

The title of the webinar.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### description: `string`<a id="description-string"></a>

The description of the webinar.

##### email_settings: [`CreateWebinarRequestEmailSettings`](./models/create-webinar-request-email-settings.ts)<a id="email_settings-createwebinarrequestemailsettingsmodelscreate-webinar-request-email-settingsts"></a>

##### folder_uri: `number`<a id="folder_uri-number"></a>

The URI of the webinar\\\'s folder.

##### password: `string`<a id="password-string"></a>

The password when **privacy.view** is `password`. Anyone with the password can view the videos generated by streaming to the webinar event.

##### privacy: [`CreateWebinarRequestPrivacy`](./models/create-webinar-request-privacy.ts)<a id="privacy-createwebinarrequestprivacymodelscreate-webinar-request-privacyts"></a>

##### schedule: [`CreateWebinarRequestSchedule`](./models/create-webinar-request-schedule.ts)<a id="schedule-createwebinarrequestschedulemodelscreate-webinar-request-schedulets"></a>

##### time_zone: `string`<a id="time_zone-string"></a>

The time zone used in resolving the timestamps that are included in the automatically generated video titles for the webinar.

#### 🔄 Return<a id="🔄-return"></a>

[Webinar](./models/webinar.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/webinars` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.webinarEssentials.webinar_0`<a id="vimeowebinaressentialswebinar_0"></a>

This method returns a single webinar belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const webinar_0Response = await vimeo.webinarEssentials.webinar_0({
  userId: 152184,
  webinarId: "f19bfa08-b266-4f20-bfce-db1d0719b52f",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### webinarId: `string`<a id="webinarid-string"></a>

The ID of the webinar.

#### 🔄 Return<a id="🔄-return"></a>

[Webinar](./models/webinar.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/webinars/{webinar_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.webinarEssentials.webinar_1`<a id="vimeowebinaressentialswebinar_1"></a>

This method updates a webinar belonging to the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const webinar_1Response = await vimeo.webinarEssentials.webinar_1({
  userId: 152184,
  webinarId: "f19bfa08-b266-4f20-bfce-db1d0719b52f",
  title: "Interviews Daily",
  description: "In this episode, we interview a surprise guest",
  password: "gogo",
  status: "started",
  time_zone: "America/New_York",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### webinarId: `string`<a id="webinarid-string"></a>

The ID of the webinar.

##### title: `string`<a id="title-string"></a>

The title of the webinar.

##### description: `string`<a id="description-string"></a>

The description of the webinar.

##### email_settings: [`UpdateWebinarRequestEmailSettings`](./models/update-webinar-request-email-settings.ts)<a id="email_settings-updatewebinarrequestemailsettingsmodelsupdate-webinar-request-email-settingsts"></a>

##### password: `string`<a id="password-string"></a>

The password when **privacy.view** is `password`. Anyone with the password can view the videos generated by streaming to the webinar event.

##### privacy: [`UpdateWebinarRequestPrivacy`](./models/update-webinar-request-privacy.ts)<a id="privacy-updatewebinarrequestprivacymodelsupdate-webinar-request-privacyts"></a>

##### schedule: [`UpdateWebinarRequestSchedule`](./models/update-webinar-request-schedule.ts)<a id="schedule-updatewebinarrequestschedulemodelsupdate-webinar-request-schedulets"></a>

##### status: `string`<a id="status-string"></a>

The status of the webinar.  Option descriptions:  * `ended` - The webinar has ended.  * `started` - The webinar has started. 

##### time_zone: `string`<a id="time_zone-string"></a>

The time zone used in resolving the timestamps that are included in the automatically generated video titles for the webinar.

#### 🔄 Return<a id="🔄-return"></a>

[Webinar](./models/webinar.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/webinars/{webinar_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.webinarRegistrations.captureUserRegistrationList`<a id="vimeowebinarregistrationscaptureuserregistrationlist"></a>

This method captures the user registration list associated with the specified webinar. A maximum of 50 registrants are permitted as part of the request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const captureUserRegistrationListResponse =
  await vimeo.webinarRegistrations.captureUserRegistrationList({
    webinarId: "f19bfa08-b266-4f20-bfce-db1d0719b52f",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webinarId: `string`<a id="webinarid-string"></a>

The ID of the webinar.

##### registrants: [`WebinarRegistrationsCaptureUserRegistrationListRequestRegistrantsInner`](./models/webinar-registrations-capture-user-registration-list-request-registrants-inner.ts)[]<a id="registrants-webinarregistrationscaptureuserregistrationlistrequestregistrantsinnermodelswebinar-registrations-capture-user-registration-list-request-registrants-innerts"></a>

An array of registration data for the webinar.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/webinars/{webinar_id}/registrants` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.webinarRegistrations.captureUserRegistrationList_0`<a id="vimeowebinarregistrationscaptureuserregistrationlist_0"></a>

This method captures the user registration list associated with the specified webinar. A maximum of 50 registrants are permitted as part of the request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const captureUserRegistrationList_0Response =
  await vimeo.webinarRegistrations.captureUserRegistrationList_0({
    userId: 152184,
    webinarId: "f19bfa08-b266-4f20-bfce-db1d0719b52f",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### webinarId: `string`<a id="webinarid-string"></a>

The ID of the webinar.

##### registrants: [`WebinarRegistrationsCaptureUserRegistrationListRequest1RegistrantsInner`](./models/webinar-registrations-capture-user-registration-list-request1-registrants-inner.ts)[]<a id="registrants-webinarregistrationscaptureuserregistrationlistrequest1registrantsinnermodelswebinar-registrations-capture-user-registration-list-request1-registrants-innerts"></a>

An array of registration data for the webinar.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/webinars/{webinar_id}/registrants` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.webinarRegistrations.deleteRegistrantRecord`<a id="vimeowebinarregistrationsdeleteregistrantrecord"></a>

This method deletes the specified registrant associated with a webinar and originally submitted through a webinar form.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteRegistrantRecordResponse =
  await vimeo.webinarRegistrations.deleteRegistrantRecord({
    registrantId: "f19bfa08-b266-4f20-bfce-db1d0719b52f",
    webinarId: "f19bfa08-b266-4f20-bfce-db1d0719b52f",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### registrantId: `string`<a id="registrantid-string"></a>

The ID of the webinar registrant.

##### webinarId: `string`<a id="webinarid-string"></a>

The ID of the webinar.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/webinars/{webinar_id}/registrants/{registrant_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.webinarRegistrations.deleteRegistrantRecord_0`<a id="vimeowebinarregistrationsdeleteregistrantrecord_0"></a>

This method deletes the specified registrant associated with a webinar and originally submitted through a webinar form.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteRegistrantRecord_0Response =
  await vimeo.webinarRegistrations.deleteRegistrantRecord_0({
    registrantId: "f19bfa08-b266-4f20-bfce-db1d0719b52f",
    userId: 152184,
    webinarId: "f19bfa08-b266-4f20-bfce-db1d0719b52f",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### registrantId: `string`<a id="registrantid-string"></a>

The ID of the webinar registrant.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### webinarId: `string`<a id="webinarid-string"></a>

The ID of the webinar.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/webinars/{webinar_id}/registrants/{registrant_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.webinarRegistrations.getUserRegistrationsByWebinarId`<a id="vimeowebinarregistrationsgetuserregistrationsbywebinarid"></a>

This method returns the list of user registrations that is associated with the specified webinar and was originally submitted through a webinar form.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserRegistrationsByWebinarIdResponse =
  await vimeo.webinarRegistrations.getUserRegistrationsByWebinarId({
    webinarId: "f19bfa08-b266-4f20-bfce-db1d0719b52f",
    direction: "asc",
    page: 1,
    perPage: 10,
    sort: "registration_date",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webinarId: `string`<a id="webinarid-string"></a>

The ID of the webinar.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### sort: `'registration_date'`<a id="sort-registration_date"></a>

The way to sort the results.  Option descriptions:  * `registration_date` - Sort the results by registration date. 

#### 🔄 Return<a id="🔄-return"></a>

[WebinarRegistrant](./models/webinar-registrant.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/webinars/{webinar_id}/registrants` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.webinarRegistrations.getUserRegistrationsByWebinarId_0`<a id="vimeowebinarregistrationsgetuserregistrationsbywebinarid_0"></a>

This method returns the list of user registrations that is associated with the specified webinar and was originally submitted through a webinar form.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserRegistrationsByWebinarId_0Response =
  await vimeo.webinarRegistrations.getUserRegistrationsByWebinarId_0({
    userId: 152184,
    webinarId: "f19bfa08-b266-4f20-bfce-db1d0719b52f",
    direction: "asc",
    page: 1,
    perPage: 10,
    sort: "registration_date",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### webinarId: `string`<a id="webinarid-string"></a>

The ID of the webinar.

##### direction: `'asc' | 'desc'`<a id="direction-asc--desc"></a>

The sort direction of the results.  Option descriptions:  * `asc` - Sort the results in ascending order.  * `desc` - Sort the results in descending order. 

##### page: `number`<a id="page-number"></a>

The page number of the results to show.

##### perPage: `number`<a id="perpage-number"></a>

The number of items to show on each page of results, up to a maximum of 100.

##### sort: `'registration_date'`<a id="sort-registration_date"></a>

The way to sort the results.  Option descriptions:  * `registration_date` - Sort the results by registration date. 

#### 🔄 Return<a id="🔄-return"></a>

[WebinarRegistrant](./models/webinar-registrant.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/webinars/{webinar_id}/registrants` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.webinarRegistrations.updateUserRegistrationData`<a id="vimeowebinarregistrationsupdateuserregistrationdata"></a>

This method updates the specified user registration data associated with a webinar and originally submitted through a webinar form.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateUserRegistrationDataResponse =
  await vimeo.webinarRegistrations.updateUserRegistrationData({
    registrantId: "f19bfa08-b266-4f20-bfce-db1d0719b52f",
    webinarId: "f19bfa08-b266-4f20-bfce-db1d0719b52f",
    is_blocked: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### registrantId: `string`<a id="registrantid-string"></a>

The ID of the webinar registrant.

##### webinarId: `string`<a id="webinarid-string"></a>

The ID of the webinar.

##### is_blocked: `boolean`<a id="is_blocked-boolean"></a>

Whether to block the webinar registrant.

#### 🔄 Return<a id="🔄-return"></a>

[WebinarRegistrant](./models/webinar-registrant.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/webinars/{webinar_id}/registrants/{registrant_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vimeo.webinarRegistrations.updateUserRegistrationData_0`<a id="vimeowebinarregistrationsupdateuserregistrationdata_0"></a>

This method updates the specified user registration data associated with a webinar and originally submitted through a webinar form.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateUserRegistrationData_0Response =
  await vimeo.webinarRegistrations.updateUserRegistrationData_0({
    registrantId: "f19bfa08-b266-4f20-bfce-db1d0719b52f",
    userId: 152184,
    webinarId: "f19bfa08-b266-4f20-bfce-db1d0719b52f",
    is_blocked: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### registrantId: `string`<a id="registrantid-string"></a>

The ID of the webinar registrant.

##### userId: `number`<a id="userid-number"></a>

The ID of the user.

##### webinarId: `string`<a id="webinarid-string"></a>

The ID of the webinar.

##### is_blocked: `boolean`<a id="is_blocked-boolean"></a>

Whether to block the webinar registrant.

#### 🔄 Return<a id="🔄-return"></a>

[WebinarRegistrant](./models/webinar-registrant.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/webinars/{webinar_id}/registrants/{registrant_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
