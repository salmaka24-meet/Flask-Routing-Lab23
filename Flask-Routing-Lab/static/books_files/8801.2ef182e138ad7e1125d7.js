(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[8801],{23780:(e,t,o)=>{const i=o(67294),{useIntl:n}=o(36319),a=o(45697),r=o(84885),s=o(88752),l=o(98288),d=o(44287),c=o(13134),p=o(19688),h=o(19206).Z,g=o(16295),u=o(28910),{ContentHeaderByline:m,ContentHeaderAccreditationSocialIcons:b,ContentHeaderContributorImage:y,ContentHeaderNativeShareButton:S,ContentHeaderBylineContent:v,ContentHeaderDekRewards:C,ContentHeaderAccreditation:w,ContentHeaderDek:f,ContentHeaderSignageLabel:T,SummaryPremiereWrapper:B}=o(19658),D=({venueAwards:e})=>i.createElement(i.Fragment,null,e&&i.createElement(C,{dangerouslySetInnerHTML:{__html:e}}));D.propTypes={venueAwards:a.string};const x=({bylinesBlock:e,contributorImage:t,dangerousDek:o,dividerType:a,shouldRemoveBylineTopMargin:l,hasContributorImageBackground:c,hasDesktopTitleBlockDivider:C,hasLede:x,hasStickySocialIcons:I,hideByLine:k,hideDangerousDek:L,hideSocialIconsOnMobile:E,hideSocialIcons:A,hideTopRating:P,isBusinessContentHeader:R,isMiddleImage:H,isSponsoredContent:N,showSponsorBlock:M,signage:O,sponsorByline:$,sponsoredContentHeaderProps:W,isLiveStoryType:V,metadataVideo:_,publishDateBlock:F,publishDatePosition:j,rating:U,reviewRating:G,shouldShowAuthorsInTitleBlock:z,showContributorImage:Z,socialIconsToHide:K,socialMedia:q,socialTitle:Y,socialDescription:X,pageUrl:J,shouldDisplayPremiereDate:Q,shouldDisplaySignageInline:ee,showNativeShareButton:te,venueAwards:oe,theme:ie})=>{const{rating:ne,count:ae}=U||{},re=D({venueAwards:oe}),se={showDek:!L&&o&&!H,showVenueAwards:oe,showByline:!z&&!N&&!k,showNativeShareButton:te,socialMedia:q},{isLive:le,premiereGap:de,premiereDate:ce}=_,{formatMessage:pe}=n();return i.createElement(w,{className:"content-header__accreditation",shouldShowAuthorsInTitleBlock:z,isBusinessContentHeader:R,hasLede:x,rowWithBottomBorder:C&&("both"===a||"bottom"===a),visibilityInfo:se,"data-testid":"ContentHeaderAccreditation"},se.showDek&&i.createElement(f,{dangerouslySetInnerHTML:{__html:o},as:"div"}),ee&&O&&i.createElement(T,null,O),Q&&ce&&!le&&i.createElement(B,null,i.createElement(u,{premiereDate:ce,premiereGap:de,containerTheme:ie,hideTimeStampIcon:!0})),V&&M&&i.createElement(g,{sponsorByline:$,sponsoredContentHeaderProps:Object.assign({},W),theme:ie}),re,G&&!P&&i.createElement(s,{rating:G}),se.showByline&&i.createElement(m,{isLiveStoryType:V,sponsorName:null==W?void 0:W.sponsorName,showSponsorBlock:M,shouldRemoveBylineTopMargin:l},Z&&t&&i.createElement(y,Object.assign({},t,{sizes:R?"100%":"66px",hasContributorImageBackground:c,isBusinessContentHeader:R})),i.createElement(v,null,e,"bottom"===j&&F)),te?i.createElement(S,null,i.createElement(p,{shareData:{url:J,title:Y,text:X}})):q&&!A&&i.createElement(b,Object.assign({},q,{className:"content-header__social-share",hideSocialIconsOnMobile:E,hasStickySocialIcons:I,socialIconsToHide:K})),!!ne&&!!ae&&i.createElement(d,{averageRatingCount:Math.round(10*ne)/10,hasBorderTop:!0,link:{label:pe(h.readReviews),onClick:e=>{e.preventDefault();const t=document.getElementById("reviews"),{top:o}=r(t);window.scrollTo(0,o-56)},url:"#reviews"},totalRatingCount:ae}))};x.propTypes={bylinesBlock:a.node,contributorImage:a.shape(l.propTypes),dangerousDek:a.string,dividerType:a.string,hasContributorImageBackground:a.bool,hasDesktopTitleBlockDivider:a.bool,hasLede:a.bool,hasStickySocialIcons:a.bool,hideByLine:a.bool,hideDangerousDek:a.bool,hideSocialIcons:a.bool,hideSocialIconsOnMobile:a.bool,hideTopRating:a.bool,isBusinessContentHeader:a.bool,isLiveStoryType:a.bool,isMiddleImage:a.bool,isSponsoredContent:a.bool,metadataVideo:a.shape({isLive:a.bool,premiereDate:a.string,premiereGap:a.number,series:a.string,videoLength:a.number}),pageUrl:a.string,publishDateBlock:a.node,publishDatePosition:a.string,rating:a.shape(d.propTypes),reviewRating:a.number,shouldDisplayPremiereDate:a.bool,shouldDisplaySignageInline:a.bool,shouldRemoveBylineTopMargin:a.bool,shouldShowAuthorsInTitleBlock:a.bool,showContributorImage:a.bool,showNativeShareButton:a.bool,showSponsorBlock:a.bool,signage:a.string,socialDescription:a.string,socialIconsToHide:a.array,socialMedia:a.shape(c.propTypes),socialTitle:a.string,sponsorByline:a.string,sponsoredContentHeaderProps:a.shape({campaignUrl:a.string,sponsorLogo:a.shape(l.propTypes),sponsorName:a.string}),theme:a.oneOf(["standard","inverted","special"]),venueAwards:a.string},x.defaultProps={hideByLine:!1,hideDangerousDek:!1,hideSocialIcons:!1,isLiveStoryType:!1,metadataVideo:{},shouldDisplayPremiereDate:!1,showSponsorBlock:!1,socialIconsToHide:[],theme:"standard"},e.exports=x},79816:(e,t,o)=>{const i=o(45697),n=o(67294),{CategoriesWrapper:a,CategoriesTitle:r,CategoriesItemList:s,CategoriesItem:l,CategoriesLink:d}=o(21218),c=({title:e,tags:t})=>n.createElement(a,null,n.createElement(r,null,e),n.createElement(s,null,t.map((e=>n.createElement(l,{key:e.name},n.createElement(d,{href:e.slug},e.name))))));c.propTypes={tags:i.array,title:i.string},c.defaultProps={tags:[]},c.displayName="Categories",e.exports=c},21218:(e,t,o)=>{const{default:i}=o(51117),{BaseText:n,BaseLink:a}=o(74327),{calculateSpacing:r,getColorToken:s,getLinkStyles:l}=o(79720),d=i.div.withConfig({displayName:"CategoriesWrapper"})`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin-top: ${r(.5)};
`,c=i(n).withConfig({displayName:"CategoriesTitle"})`
  margin-right: ${r(1)};
`;c.defaultProps={as:"div",colorToken:"colors.consumption.lead.standard.accreditation",typeIdentity:"typography.definitions.globalEditorial.accreditation-feature"};const p=i.ul.withConfig({displayName:"CategoriesItemList"})`
  margin: 0;
  padding: 0;
  line-height: 1;
`,h=i.li.withConfig({displayName:"CategoriesItem"})`
  display: inline-block;

  &:not(:last-child) {
    &::after {
      margin: 0 ${r(1)};
      color: ${({theme:e})=>s(e,"colors.consumption.lead.standard.divider")};
      content: '|';
    }
  }
`,g=i(a).withConfig({displayName:"CategoriesLink"})`
  ${({theme:e})=>l(e,"colors.consumption.lead.standard.link",null,"global")};
`;g.defaultProps={typeToken:"typography.definitions.globalEditorial.accreditation-core"},e.exports={CategoriesWrapper:d,CategoriesTitle:c,CategoriesItemList:p,CategoriesItem:h,CategoriesLink:g}},86772:(e,t,o)=>{const i=o(94184),n=o(45697),a=o(67294),r=o(65552),{withLightbox:s}=o(92267),l=o(60637),{trackComponent:d}=o(40199),c=o(13134),p=o(36895),h=o(34042),g=o(47109),u=o(93839),m=o(44287),b=o(98288),y=o(49359),S=o(32554),v=o(23780),{useNativeShare:C}=o(8998),{getThemedBylineVariation:w}=o(41317),{ContentHeaderSocialIcons:f}=o(17897),{ContentHeaderWrapper:T,ContentHeaderOffersData:B,ContentHeaderLeadOverride:D,ContentHeaderAccreditationBottom:x,ContentHeaderContainer:I,ContentHeaderPublishDate:k,ContentHeaderLeadAssetWrapper:L,ContentHeaderBylines:E,ContentHeaderPersistentAside:A,PodcastContentHeaderDivider:P,ContentHeaderHedAccreditationWrapper:R}=o(32279),{ContentHeaderDek:H}=o(19658),{getOverrideBehaviour:N}=o(66528),M=({additionalPhotos:e,authorsTitleBlockPosition:t,awards:o,business:n,bylineVariation:r,captionStyle:l,captionWidth:c,className:p,contentHeaderCategories:h,contentSponsorNames:g,contributorImage:m,contributors:b,ctaText:M,dangerousDek:O,dangerousHed:$,dividerType:W,showFullHeaderViewInMobile:V,externalLinks:_,hasDesktopTitleBlockDivider:F,hasLedeLightboxButton:j,hasLightbox:U,hasSlideshow:G,hasStaticPositionedAward:z,hasStickyBoxIndexPosition:Z,hasStickySocialIcons:K,hideAdaptationByline:q,hideByLine:Y,hideContributors:X,hideDangerousDek:J,hideRubric:Q,hideSocialIcons:ee,hideSocialIconsOnMobile:te,hideTopDisclaimerOnMobile:oe,hideTopRating:ie,hidePublishDate:ne,interactiveOverride:ae,isBusinessContentHeader:re,isLiveStoryType:se,isImagePositionBottomInSmallScreen:le,isStoryLive:de,issueDate:ce,issueLink:pe,lede:he,ledeSocialIcons:ge,modifiedDate:ue,offers:me,persistentAsideAlign:be,price:ye,publishDate:Se,rating:ve,reviewRating:Ce,rubric:we,rubricVariation:fe,itemsCount:Te,hasContributorImageBackground:Be,metadataVideo:De,showContentDivider:xe,showContributorImage:Ie,showContributorImageOnMobile:ke,showSponsorBlock:Le,showHeaderButton:Ee,signage:Ae,hideIssueDate:Pe,hideIssueDatePipeSeparator:Re,hideLede:He,hideLedeCaption:Ne,hasDisabledCloseOnClickForLightbox:Me,hasNarrowHeader:Oe,podcastPagePrimaryCta:$e,podcastPagePrimaryCtaLabel:We,shouldDisplayPremiereDate:Ve,shouldDisplaySignageInline:_e,shouldShortenHeadline:Fe,showFullWidthLeadImage:je,showIssueCopyByDate:Ue,showTextOverlayDek:Ge,slideShowVariation:ze,socialIconsToHide:Ze,socialMedia:Ke,socialTitle:qe,socialDescription:Ye,stickySocialAnchorBottom:Xe,stickySocialAnchorTop:Je,theme:Qe,sponsoredContentHeaderProps:et,sponsorByline:tt,variations:{assetPosition:ot,copyWidth:it,contentAlign:nt,contentPosition:at,contentStyle:rt,hasAccreditationExtraSpacing:st,hasAccreditationSocialBottomMargin:lt,hasAccreditationSocialTopMargin:dt,shouldRemoveBylineTopMargin:ct,hasDekBottomMargin:pt,hasExtraSpaceBetweenSeparator:ht=!1,hasLedeLightbox:gt,hasNoRowPadding:ut,hasPublishDateBottomPadding:mt,hasInlinePublishDate:bt,hasReducedTitleTopMargin:yt,hasTitleWrapperTopSpacing:St,shouldRemoveContentHedWrapperTopSpacing:vt,hasXsNavSpacing:Ct,hideAccreditationBottomSpacing:wt,ledeAlign:ft,leadRailAnchor:Tt,mediaWidth:Bt,publishDatePosition:Dt="bottom",reducedSpacings:xt=!1,hasDivider:It,showPodcastButton:kt,shouldUseSmallLede:Lt,shouldReduceAccreditationPadding:Et,hasDateExtraTopSpacing:At},hasNativeShareButton:Pt,shouldEnableNativeShareOnDesktop:Rt,showBreadCrumb:Ht,venueAwards:Nt,hasInvertedCaption:Mt,hasInvertedLedeBackground:Ot,variationName:$t,isFullBleedVideo:Wt,cneVideoEmbedProps:{additionalEmbedParams:Vt,dangerousCaption:_t,isStickyType:Ft,scriptUrl:jt,shouldAutoplay:Ut,shouldHaveTeaser:Gt,shouldMute:zt,variationsVideo:Zt,variationVideoName:Kt},shouldAlignCenterWhenNoCaption:qt})=>{a.useEffect((()=>{d("ContentHeader",$t)}),[$t]);const Yt="middle"===ot,Xt=(e=>e&&1===Object.keys(e).length&&e.author&&1===e.author.items.length)(b)&&bt,Jt="storyimage"===N(ae),Qt=w({bylineVariation:r,theme:Qe}),eo=a.createElement(y,{authorsPosition:t,business:n,bylineVariation:Qt,contentHeaderCategories:h,contentSponsorNames:g,contributors:b,dangerousHed:$,dividerType:W,externalLinks:_,hasContentDivider:xe,hasDesktopTitleBlockDivider:F,hasDivider:It,hasNoRowPadding:ut,hasExtraSpaceBetweenSeparator:ht,hideAdaptationByline:q,hideIssueDate:Pe,hideIssueDatePipeSeparator:Re,hideRubric:Q,hidePublishDate:ne,isBusinessContentHeader:re,isLiveStoryType:se,isStoryLive:de,issueDate:ce,issueLink:pe,itemsCount:Te,metadataVideo:De,modifiedDate:ue,podcastPagePrimaryCta:$e,podcastPagePrimaryCtaLabel:We,price:ye,publishDate:Se,publishDatePosition:Dt,rubric:we,rubricVariation:fe,showIssueCopyByDate:Ue,showPodcastButton:kt,theme:Qe});let to=S;U&&gt&&(to=e?s(S,e,G,ze,Me):s(S,[he]));const{showNativeShareButton:oo,pageUrl:io}=C(Pt,Rt),no="hidden"!==t,ao=b&&Object.keys(b).length>1,ro=b&&!X&&a.createElement(E,{contributors:b,bylineVariation:Qt,isCompact:!1,inlinePublishDate:Xt}),so=ue&&{datetime:ue},lo=!ne&&a.createElement(k,Object.assign({inlinePublishDate:Xt,"data-testid":"ContentHeaderPublishDate",mediaWidth:Bt,contentAlign:nt},V&&{hasDateExtraTopSpacing:At,hasPublishDateBottomPadding:mt&&(!Ke||ee||te)},so),Se),co=a.createElement(a.Fragment,null,a.createElement(v,{bylinesBlock:ro,contributorImage:m,dangerousDek:O,hideDangerousDek:J,dividerType:W,hasContributorImageBackground:Be,hasDesktopTitleBlockDivider:F,hasLede:!!he,hideTopRating:ie,hasStickySocialIcons:K,hideByLine:Y,hideSocialIcons:ee,hideSocialIconsOnMobile:te,isBusinessContentHeader:re,isMiddleImage:Yt,isSponsoredContent:g.length>0,isLiveStoryType:se,isStoryLive:de,metadataVideo:De,publishDateBlock:lo,publishDatePosition:Dt,rating:ve,reviewRating:Ce,shouldDisplayPremiereDate:Ve,shouldDisplaySignageInline:_e,shouldShowAuthorsInTitleBlock:no,showContributorImage:Ie,showSponsorBlock:Le,signage:Ae,socialIconsToHide:Ze,socialMedia:Ke,socialTitle:qe,socialDescription:Ye,sponsorByline:tt,sponsoredContentHeaderProps:et,pageUrl:io,showNativeShareButton:oo,venueAwards:Nt,mediaWidth:Bt,contentAlign:nt,contentPosition:at,theme:Qe,shouldRemoveBylineTopMargin:V&&ct}),a.createElement(B,{ctaText:M,hideTopDisclaimerOnMobile:oe,offers:me,showHeaderButton:Ee,buttonPosition:"content-header"})),po=qt&&!(null==he?void 0:he.caption);return a.createElement(T,Object.assign({className:i("content-header",{[p]:p}),isLiveStoryType:se,publishDatePosition:Dt,hasXsNavSpacing:Ct,contentAlign:nt,assetPosition:ot,shouldShowAuthorsInTitleBlock:no,captionStyle:l,copyWidth:it,mediaWidth:Bt,contentStyle:rt,contentPosition:at,isBusinessContentHeader:re,isLedeOverride:Jt,shouldShortenHeadline:Fe,reducedSpacings:xt,hasInvertedCaption:Mt,containerTheme:Qe,shouldBylineContentStacked:ao,hasExtraSpaceBetweenSeparator:ht,hasLede:!!he,hasNarrowHeader:Oe,showBreadCrumb:Ht,showTextOverlayDek:Ge},V&&{hasAccreditationExtraSpacing:st,hasAccreditationSocialTopMargin:dt,hasAccreditationSocialBottomMargin:lt,hasDekBottomMargin:pt,hideAccreditationBottomSpacing:wt,hasLeadAssetTopSpacing:!mt&&(J||!O||!Yt),hasTitleWrapperTopSpacing:St,shouldRemoveContentHedWrapperTopSpacing:vt,hasReducedTitleTopMargin:yt,shouldReduceAccreditationPadding:Et},{isLedeTextCenterForMobile:po,showContributorImageOnMobile:ke,isImagePositionBottomInSmallScreen:le}),a.createElement(I,{containerTheme:Qe,mediaWidth:Bt,showFullWidthLeadImage:je,contentStyle:rt,contentPosition:at,isFullBleedVideo:Wt,"data-testid":"ContentHeaderContainer"},!J&&O&&Yt&&a.createElement(x,null,a.createElement(H,{dangerouslySetInnerHTML:{__html:O},assetPosition:ot,mediaWidth:Bt,"data-testid":"ContentHeaderDek"})),It&&a.createElement(P,null),a.createElement(R,{isBusinessContentHeader:re},$&&eo,co),Jt?a.createElement(D,{contentPosition:at,dangerouslySetInnerHTML:{__html:ae.markup}}):!Wt&&!He&&he&&a.createElement(L,{awards:o,hasLightboxButton:j,hasStaticPositionedAward:z,hideLedeCaption:Ne,hasDisabledCloseOnClickForLightbox:Me,lede:he,captionWidth:c,shouldRenderRailAnchor:Tt,shouldUseSmallLede:Lt,socialIcons:ge,mediaWidth:Bt,containerTheme:Qe,hasInvertedLedeBackground:Ot,ledeAlign:ft,showFullWidthLeadImage:je,hasLeadAssetTopSpacing:V&&!mt&&(J||!O||!Yt),isBusinessContentHeader:re,shouldAlignCenterWhenNoCaption:qt,as:to,className:i({[`lead-asset--width-${Bt}`]:Bt})}),Wt&&a.createElement(u,{dangerousCaption:_t,scriptUrl:jt,shouldAutoplay:Ut,shouldMute:zt,shouldHaveTeaser:Gt,additionalEmbedParams:Vt,isStickyType:Ft,variationName:Kt,variations:Zt})),!oo&&K&&Ke&&a.createElement(A,{attributes:{shouldFadeOnMove:!0},align:be,anchorBottom:Xe,anchorTop:Je,hasStickyBoxIndexPosition:Z,fullWidthSelector:".container--full, .full-bleed-ad, .callout--feature-large"},a.createElement(f,Object.assign({},Ke,{className:"social-icons--share"}))))};M.propTypes={additionalPhotos:n.array,authorsTitleBlockPosition:n.oneOf(["above","below","hidden"]),awards:n.array,business:n.shape({address:n.object,phone:n.string,email:n.string,socialMedia:n.array}),bylineVariation:n.string,captionStyle:n.oneOf(["default","span-content-well"]),captionWidth:n.oneOf(["standard","fullbleed"]),className:n.string,cneVideoEmbedProps:n.shape({additionalEmbedParams:n.object,dangerousCaption:n.string,isStickyType:n.bool,scriptUrl:n.string,shouldAutoplay:n.bool,shouldHaveTeaser:n.bool,shouldMute:n.bool,variationsVideo:n.object,variationVideoName:n.object}),contentHeaderCategories:n.shape({title:n.string,tags:n.array}),contentSponsorNames:n.array,contributorImage:n.shape(b.propTypes),contributors:n.shape(h.propTypes.contributors),ctaText:n.string,dangerousDek:n.string,dangerousHed:n.string,dividerType:n.oneOf(["both","bottom","top"]),externalLinks:n.array,hasContributorImageBackground:n.bool,hasDesktopTitleBlockDivider:n.bool,hasDisabledCloseOnClickForLightbox:n.bool,hasInvertedCaption:n.bool,hasInvertedLedeBackground:n.bool,hasLedeLightboxButton:n.bool,hasLightbox:n.bool,hasNarrowHeader:n.bool,hasNativeShareButton:n.bool,hasSlideshow:n.bool,hasStaticPositionedAward:n.bool,hasStickyBoxIndexPosition:n.bool,hasStickySocialIcons:n.bool,hideAdaptationByline:n.bool,hideByLine:n.bool,hideContributors:n.bool,hideDangerousDek:n.bool,hideIssueDate:n.bool,hideIssueDatePipeSeparator:n.bool,hideLede:n.bool,hideLedeCaption:n.bool,hidePublishDate:n.bool,hideRubric:n.bool,hideSocialIcons:n.bool,hideSocialIconsOnMobile:n.bool,hideTopDisclaimerOnMobile:n.bool,hideTopRating:n.bool,interactiveOverride:n.shape({markup:n.string,behavior:n.string}),isBusinessContentHeader:n.bool,isFullBleedVideo:n.bool,isImagePositionBottomInSmallScreen:n.bool,isLiveStoryType:n.bool,isStoryLive:n.bool,issueDate:n.string,issueLink:n.string,itemsCount:n.shape(l.propTypes),lede:n.oneOfType([n.shape(b.propTypes),n.shape(g.propTypes),n.shape(u.propTypes)]),ledeSocialIcons:n.shape(c.propTypes),metadataVideo:n.shape({isLive:n.bool,premiereDate:n.string,premiereGap:n.number,series:n.string,videoLength:n.number}),modifiedDate:n.string,offers:n.array,persistentAsideAlign:n.oneOf(["left","left-lead-asset"]),podcastPagePrimaryCta:n.string,podcastPagePrimaryCtaLabel:n.string,price:n.string,publishDate:n.string.isRequired,rating:n.shape(m.propTypes),reviewRating:n.number,rubric:n.shape(p.propTypes),rubricVariation:n.string,shouldAlignCenterWhenNoCaption:n.bool,shouldDisplayPremiereDate:n.bool,shouldDisplaySignageInline:n.bool,shouldEnableNativeShareOnDesktop:n.bool,shouldShortenHeadline:n.bool,showBreadCrumb:n.bool,showContentDivider:n.bool,showContributorImage:n.bool,showContributorImageOnMobile:n.bool,showFullHeaderViewInMobile:n.bool,showFullWidthLeadImage:n.bool,showHeaderButton:n.bool,showIssueCopyByDate:n.bool,showSponsorBlock:n.bool,showTextOverlayDek:n.bool,signage:n.string,slideShowVariation:n.string,socialDescription:n.string,socialIconsToHide:n.array,socialMedia:n.shape(c.propTypes),socialTitle:n.string,sponsorByline:n.string,sponsoredContentHeaderProps:n.shape({campaignUrl:n.string,sponsorLogo:n.shape(b.propTypes),sponsorName:n.string}),stickySocialAnchorBottom:r.propTypes.anchorBottom,stickySocialAnchorTop:r.propTypes.anchorTop,theme:n.oneOf(["standard","inverted","special","live"]),variationName:n.string,variations:n.shape({assetPosition:n.oneOf(["bottom","middle"]),contentAlign:n.oneOf(["center","left"]),contentPosition:n.oneOf(["above","below","start","end"]),contentStyle:n.oneOf(["card","dense-card","item"]),copyWidth:n.oneOf(["grid","fullbleed"]),hasDivider:n.bool,hasAccreditationExtraSpacing:n.bool,hasAccreditationSocialBottomMargin:n.bool,hasAccreditationSocialTopMargin:n.bool,hasTitleWrapperTopSpacing:n.bool,shouldReduceAccreditationPadding:n.bool,shouldRemoveBylineTopMargin:n.bool,hasDateExtraTopSpacing:n.bool,hasDekBottomMargin:n.bool,hasExtraSpaceBetweenSeparator:n.bool,hasInlinePublishDate:n.bool,hasLedeLightbox:n.bool,hasNoRowPadding:n.bool,hasPublishDateBottomPadding:n.bool,hasReducedTitleTopMargin:n.bool,hasXsNavSpacing:n.bool,hideAccreditationBottomSpacing:n.bool,leadRailAnchor:n.bool,ledeAlign:n.oneOf(["default","center"]),mediaWidth:n.oneOf(["small","smallrule","grid","fullbleed"]),publishDatePosition:n.oneOf(["top","bottom"]),reducedSpacings:n.bool,shouldRemoveContentHedWrapperTopSpacing:n.bool,shouldUseSmallLede:n.bool,showPodcastButton:n.bool}),venueAwards:n.string},M.defaultProps={authorsTitleBlockPosition:"hidden",business:{address:{},phone:"",email:"",socialMedia:[],link:""},captionStyle:"default",captionWidth:"standard",cneVideoEmbedProps:{additionalEmbedParams:{},dangerousCaption:"",isStickyType:!1,scriptUrl:"",shouldAutoplay:!0,shouldHaveTeaser:!0,shouldMute:!0,variationsVideo:{},variationVideoName:{}},contentSponsorNames:[],dividerType:"both",externalLinks:[],hasContributorImageBackground:!1,hasDesktopTitleBlockDivider:!1,hasInvertedCaption:!1,hasInvertedLedeBackground:!0,hasLightbox:!1,hasNarrowHeader:!1,hasNativeShareButton:!1,hasSlideshow:!1,hasStaticPositionedAward:!1,hasStickySocialIcons:!0,hideAdaptationByline:!1,hideByLine:!1,hideContributors:!1,hideDangerousDek:!1,hideIssueDatePipeSeparator:!1,hideLede:!1,hideLedeCaption:!1,hidePublishDate:!1,hideRubric:!1,hideSocialIcons:!1,hideSocialIconsOnMobile:!1,isFullBleedVideo:!1,isLiveStoryType:!1,isStoryLive:!1,metadataVideo:{},persistentAsideAlign:"left",shouldAlignCenterWhenNoCaption:!1,shouldDisplayPremiereDate:!1,shouldDisplaySignageInline:!1,shouldEnableNativeShareOnDesktop:!1,shouldShortenHeadline:!1,showContentDivider:!1,showContributorImage:!0,showContributorImageOnMobile:!0,showFullHeaderViewInMobile:!1,showFullWidthLeadImage:!1,showIssueCopyByDate:!1,showSponsorBlock:!1,showTextOverlayDek:!1,socialIconsToHide:[],stickySocialAnchorBottom:{selector:".page",edge:"bottom"},stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderContainer']",edge:"bottom"},theme:"standard",variations:{assetPosition:"bottom",contentAlign:"center",contentPosition:"above",hasDivider:!1,hasExtraSpaceBetweenSeparator:!1,hasInlinePublishDate:!1,hasLedeLightbox:!1,hasNoRowPadding:!1,hasXsNavSpacing:!1,leadRailAnchor:!1,ledeAlign:"default",publishDatePosition:"bottom",reducedSpacings:!1,shouldUseSmallLede:!1,showPodcastButton:!1}},M.displayName="ContentHeader",e.exports=M},18715:(e,t,o)=>{const i=o(67294),n=o(45697),a=o(98288),r=o(47109),s=o(93839),{transformLegacySources:l}=o(8998),{Image:d}=o(15344),c=({lede:e})=>{if(!e||0===Object.keys(e).length)return null;const t="cnevideo"===e.modelName,o="gallery"===e.modelName,n=l(e);return i.createElement(d,null,!t&&!o&&i.createElement(a,Object.assign({},n)),t&&e.scriptEmbedUrl&&i.createElement(s,{shouldAutoplay:!0,scriptUrl:e.scriptEmbedUrl}),o&&i.createElement(r,Object.assign({},e,{showNoAdsFromParent:!0})))};c.defaultProps={lede:null},c.propTypes={lede:n.oneOfType([n.shape(a.propTypes),n.shape(r.propTypes),n.shape(s.propTypes)])},c.displayName="ImageBlock",e.exports=c},99938:(e,t,o)=>{const i=o(67294),n=o(45697),a=o(31954),r=o(36895),s=o(19688),l=o(34042),d=o(98288),c=o(47109),p=o(93839),h=o(13134),g=o(40284),u=o(18715),m=o(33843),{useNativeShare:b}=o(8998),{TextOverlayLogo:y,TextOverlayLogoLink:S,TextOverlayLogoImage:v,TextOverlayWrapper:C,ImageWrapper:w,Content:f,ContentAlign:T,Hed:B,DekWrapper:D,Dek:x,Figure:I,ContentDivider:k,ContributorImage:L,Accreditation:E,PublishDate:A,DekAndCaption:P,ContentGrid:R}=o(15344),H=o(74656),N=o(16295),M=({background:e,bylineVariation:t,contentAlign:o,contentHeaderCategories:n,contributorImage:c,contributors:p,dangerousDek:M,dangerousHed:O,hasNativeShareButton:$,hideContributors:W,hideDangerousDek:V,hideLedeCaption:_,hidePublishDate:F,hideShareButtons:j,hideRubric:U,isLiveStoryType:G,isStoryLive:z,lede:Z,ledeCaption:K,logoImage:q,logoBaseUrl:Y,modifiedDate:X,numberOfLinesToClamp:J,publishDate:Q,rubric:ee,shouldUseCutomColorLiveIndicator:te,showContentDivider:oe,showContributorImage:ie,showLogo:ne,showTextOverlayDek:ae,showTextOverlayDekInverted:re,showTextOverlayRubricInverted:se,showSponsorBlock:le,socialDescription:de,socialMedia:ce,socialTitle:pe,sponsoredContentHeaderProps:he,sponsorByline:ge,theme:ue})=>{const{showNativeShareButton:me,pageUrl:be}=b($),ye="inverted"===ue,Se=Z&&!_&&(Z.caption&&Z.caption.trim()||Z.credit&&Z.credit.trim()||K),ve=X&&{datetime:X};return i.createElement(C,{"data-testid":"ContentHeader",showTextOverlayRubricInverted:se},i.createElement(w,{background:e,contentAlign:o},i.createElement(u,{lede:Z}),ne&&q?i.createElement(y,null,i.createElement(S,{href:Y},i.createElement(v,Object.assign({},q)))):null,i.createElement(R,{contentAlign:o},i.createElement(f,null,!U&&(G&&z?i.createElement(T,{contentAlign:o},i.createElement(m,{hasBackground:!0,isDiscovery:!1,shouldEnableAnimation:!0,shouldUseCutomColorLiveIndicator:te})):ee?i.createElement(T,{contentAlign:o,"data-testid":"ContentHeaderRubric"},i.createElement(r.Inverted,Object.assign({},ee))):null),i.createElement(T,{contentAlign:o},i.createElement(g,Object.assign({},n))),i.createElement(B,{dangerouslySetInnerHTML:{__html:O},"data-testid":"ContentHeaderHed",contentAlign:o}),!V&&M&&ae&&i.createElement(x,{dangerouslySetInnerHTML:{__html:M},contentAlign:o,"data-testid":"ContentHeaderDek",isInverted:re||ye}),oe&&i.createElement(k,{contentAlign:o}),G&&le?i.createElement(N,{sponsorByline:ge,sponsoredContentHeaderProps:Object.assign({},he)}):null,ie&&c&&i.createElement(L,{contentAlign:o},i.createElement(d,Object.assign({},c))),i.createElement(E,{contentAlign:o},p&&!W&&i.createElement(l,{contributors:p,bylineVariation:t,contentAlign:o,isCompact:!1}),!F&&i.createElement(A,Object.assign({"data-testid":"ContentHeaderPublishDate",contentAlign:o},ve),Q)),!j&&(me?i.createElement(T,{contentAlign:o,bottomSpacing:4},i.createElement(s,{hasDarkBackground:!0,shareData:{url:be,title:pe,text:de},theme:"inverted"})):ce&&i.createElement(T,{contentAlign:o,bottomSpacing:4},i.createElement(h.Footer,Object.assign({},ce))))))),(Se||M&&!V)&&i.createElement(P,{isInverted:ye},Se&&i.createElement(I,{contentAlign:o},i.createElement(a,{dangerousCaptionText:Z.caption,dangerousCredit:G?Z.credit||K:Z.credit,topSpacing:0,theme:ue})),!V&&M&&!ae&&i.createElement(D,null,i.createElement(H,{isCollapsible:!0,lines:J},i.createElement(x,{dangerouslySetInnerHTML:{__html:M},contentAlign:o,"data-testid":"ContentHeaderDek",isInverted:ye})))))};M.defaultProps={background:"gradient",bylineVariation:"Inverted",contentAlign:"center",hideContributors:!1,hideDangerousDek:!1,hideLedeCaption:!1,isLiveStoryType:!1,isStoryLive:!1,logoBaseUrl:"/",numberOfLinesToClamp:2,shouldUseCutomColorLiveIndicator:!1,showContentDivider:!1,showContributorImage:!0,showSponsorBlock:!1,showTextOverlayDek:!1},M.propTypes={background:n.oneOf(["gradient","solid"]),bylineVariation:n.string,contentAlign:n.oneOf(["center","left"]),contentHeaderCategories:n.shape({title:n.string,tags:n.array}),contributorImage:n.shape(d.propTypes),contributors:n.shape(l.propTypes.contributors),dangerousDek:n.string,dangerousHed:n.string,hasNativeShareButton:n.bool,hideContributors:n.bool,hideDangerousDek:n.bool,hideLedeCaption:n.bool,hidePublishDate:n.bool,hideRubric:n.bool,hideShareButtons:n.bool,isLiveStoryType:n.bool,isStoryLive:n.bool,lede:n.oneOfType([n.shape(d.propTypes),n.shape(c.propTypes),n.shape(p.propTypes)]),ledeCaption:n.string,logoBaseUrl:n.string,logoImage:n.shape(d.propTypes),modifiedDate:n.string,numberOfLinesToClamp:n.number,publishDate:n.string,rubric:n.shape(r.propTypes),shouldUseCutomColorLiveIndicator:n.bool,showContentDivider:n.bool,showContributorImage:n.bool,showLogo:n.bool,showSponsorBlock:n.bool,showTextOverlayDek:n.bool,showTextOverlayDekInverted:n.bool,showTextOverlayRubricInverted:n.bool,socialDescription:n.string,socialMedia:n.shape(h.propTypes),socialTitle:n.string,sponsorByline:n.string,sponsoredContentHeaderProps:n.shape({campaignUrl:n.string,sponsorLogo:n.shape(d.propTypes),sponsorName:n.string}),theme:n.oneOf(["standard","inverted","special"])},M.displayName="TextOverlay",e.exports=M},63401:(e,t,o)=>{const i=o(99938);e.exports=i},15344:(e,t,o)=>{const{default:i,css:n}=o(51117),{getColorStyles:a,getColorToken:r,getTypographyStyles:s,calculateSpacing:l,maxScreen:d}=o(79720),{SocialIconsList:c}=o(96860),{BREAKPOINTS:p}=o(85326),{BaseText:h,BaseLink:g}=o(74327),{SITE_HEADER_TOP_HEIGHT:u,SITE_HEADER_TOP_STICKY_HEIGHT_MD:m,SITE_HEADER_TOP_STICKY_HEIGHT_LG:b}=o(76267),y=o(48655),{GridItem:S}=o(14134),{universalGridCore:v}=o(61774),{applyGridSpacing:C}=o(62470),w=o(98288),{RubricName:f,RubricLink:T}=o(7320),B=i.header.withConfig({displayName:"TextOverlayWrapper"})`
  .responsive-clip {
    height: 100%;
  }
  overflow: hidden;

  ${({showTextOverlayRubricInverted:e,theme:t})=>e&&n`
      ${T}, ${f} {
        ${a(t,"color","colors.consumption.lead.inverted.context-signature")}
      }
    `}
`,D=i.div.withConfig({displayName:"ImageWrapper"})`
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: ${({contentAlign:e})=>e};

  @media (orientation: landscape) {
    display: grid;
    min-height: 400px;
  }

  @media (max-width: ${p.md}) {
    display: grid;
    min-height: 667px;
  }

  @media (min-width: ${p.md}) {
    display: grid;
    height: calc(
      100vh - ${u} - ${m}
    );
  }

  @media (min-width: ${p.lg}) {
    display: grid;
    height: calc(
      100vh - ${u} - ${b}
    );
  }

  @media (min-width: ${p.xl}) {
    display: grid;
    min-height: 720px;
  }

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${({background:e})=>"gradient"===e?"linear-gradient(to top, rgb(0, 0, 0) 0, transparent 65%)":"rgba(0, 0, 0, 0.65)"};
    content: '';
    pointer-events: none;
  }
`,x=i.div.withConfig({displayName:"Image"})`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .responsive-asset {
    &::before {
      display: block;
      width: 100%;
      content: '';
    }
  }

  > *,
  picture,
  .responsive-asset picture, /* set to override the css specifity set on this component  */
  img {
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
  }

  picture {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
`,I=i.div.withConfig({displayName:"ContentAlign"})`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({contentAlign:e})=>e};
  width: 100%;

  > .social-icons--footer {
    ${c} {
      @media (min-width: ${p.md}) {
        position: relative; /* for bookmark onboarding alert placement */
      }
    }
  }

  ${({socialIconsToHide:e})=>e&&`\n      ${d(p.lg)} {\n        ${(e=>e.map((e=>`\n        .social-icons__list-item--${e} {\n          display: none;\n        }\n    `)).join("\n"))(e)}\n      }\n    `}

  ${({bottomSpacing:e})=>e&&`margin-bottom: ${l(e)}`}
`,k=i.div.withConfig({displayName:"Content"})`
  position: relative;
  z-index: 2;
`,L=i(h).withConfig({displayName:"Hed"})`
  text-align: ${({contentAlign:e})=>e};
`;L.defaultProps={as:"h1",colorToken:"colors.consumption.lead.inverted.heading",topSpacing:2,typeIdentity:"typography.definitions.consumptionEditorial.hed-standard"};const E=i("div").withConfig({displayName:"DekAndCaption"})`
  ${v()}
  ${C("padding")}
  ${({isInverted:e,theme:t})=>e&&`\n      background: ${r(t,"colors.background.dark")};\n    `}
`,A=i.div.withConfig({displayName:"DekWrapper"})`
  grid-column: 1 / span 4;
  text-align: ${({contentAlign:e})=>e};

  @media (min-width: ${p.md}) {
    grid-column: 3 / span 8;
  }
`,P=i(h).withConfig({displayName:"Dek"})`
  ${({isInverted:e,theme:t})=>e&&`\n    color: ${r(t,"colors.consumption.lead.inverted.description")};\n    `}
  text-align: ${({contentAlign:e})=>e};
`;P.defaultProps={as:"p",bottomSpacing:4,colorToken:"colors.consumption.lead.standard.description",topSpacing:3,typeIdentity:"typography.definitions.consumptionEditorial.description-core"};const R=i(h).withConfig({displayName:"Figure"})`
  grid-column: 1 / span 4;
  text-align: ${({contentAlign:e})=>e};

  @media (min-width: ${p.md}) {
    grid-column: 1 / span 12;
  }
`;R.defaultProps={as:"figure",colorToken:"colors.consumption.lead.standard.description",topSpacing:2,typeIdentity:"typography.definitions.consumptionEditorial.description-embed"};const H=i.span.withConfig({displayName:"ContentDivider"})`
  display: block;
  margin-top: ${l(4)};
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme:e})=>r(e,"colors.consumption.lead.standard.accent")};
  width: 100px;
  ${({contentAlign:e})=>"center"===e&&`margin: ${l(4)} auto 0`}
`,N=i.div.withConfig({displayName:"ContributorImage"})`
  display: block;
  margin-top: ${l(4)};
  border-radius: 50%;
  min-width: 60px;
  max-width: 66px;
  min-height: 60px;
  max-height: 66px;
  overflow: hidden;
  ${({contentAlign:e})=>"center"===e&&`margin: ${l(4)} auto 0`}
`,M=i.div.withConfig({displayName:"Accreditation"})`
  ${({contentAlign:e})=>"center"===e?`margin: ${l(2)} auto`:`margin: ${l(2)} 0`}
`,O=i.time.withConfig({displayName:"PublishDate"}).attrs((({datetime:e})=>({dateTime:e})))`
  ${({theme:e})=>s(e,"typography.definitions.globalEditorial.accreditation-core")}
  display: block;
  margin: ${l(1)} 0 ${l(4)};
  text-align: ${({contentAlign:e})=>e};
  color: ${({theme:e})=>r(e,"colors.consumption.lead.inverted.context-tertiary")};
`,$=i(y.WithMargins).withConfig({displayName:"ContentGrid"})`
  > ${S} {
    grid-column: 1 / span 4;
    margin-bottom: 4.5rem;
    @media (min-width: ${p.md}) {
      grid-column: ${({contentAlign:e})=>"left"===e?"1 / span 10":"2 / span 10"};
    }
  }
`,W=i(w).withConfig({displayName:"TextOverlayLogoImage"})`
  grid-column: 1 / span 4;

  img {
    max-width: 100%;
    height: 100px;
    vertical-align: bottom;
  }
`,V=i(g).withConfig({displayName:"TextOverlayLogoLink"})`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${l(2)};

  @media (max-width: ${p.md}) {
    padding-right: calc(1 * ${l(3)});
    padding-left: calc(1 * ${l(3)});
  }
`,_=i.div.withConfig({displayName:"TextOverlayLogo"})`
  margin: auto;
  margin-top: 1.5rem;
`;e.exports={TextOverlayLogo:_,TextOverlayLogoLink:V,TextOverlayLogoImage:W,TextOverlayWrapper:B,ImageWrapper:D,Image:x,ContentAlign:I,Content:k,Hed:L,DekAndCaption:E,DekWrapper:A,Dek:P,Figure:R,ContentDivider:H,ContributorImage:N,Accreditation:M,PublishDate:O,ContentGrid:$}},84327:(e,t,o)=>{const i=o(67294),n=o(45697),{AddressBlockWrapper:a,HeaderContactInformation:r,HeaderSocialInformation:s,HeaderAddressDetails:l}=o(30414),d=o(73993),c=o(42342),{isIOSDevice:p}=o(39037),h=({address:e,email:t,phone:o,socialMedia:n,link:h})=>{if(!e&&!o&&!t)return null;const{street:g,city:u,state:m,postalCode:b,country:y}=e,S=[];[g,u,m,b,y].forEach((e=>{e&&S.push(e)}));let v=h.replace(/^(https?:|)\/\//,"");return v=v.includes("www.")?v:`www.${v}`,i.createElement(a,null,e&&i.createElement(l,{"data-testid":"HeaderAddressDetails",href:"",onClick:e=>(e=>{e.preventDefault(),(null==S?void 0:S.length)>0&&(p()?window.open(`maps://maps.apple.com/maps?q=${S}`):window.open(`https://maps.google.com?q=${S}`))})(e)},i.createElement("div",{className:"StreetAndCity"},g&&i.createElement("span",{"data-testid":"HeaderAddressStreet"},g),u&&i.createElement("span",{"data-testid":"HeaderAddressCity"},S[0]!==u&&", ",u,S[0]!==m&&", ")),i.createElement("div",{className:"StatePostalAndCountry"},m&&i.createElement("span",{"data-testid":"HeaderAddressState"},m),b&&i.createElement("span",{"data-testid":"HeaderAddressPostalCode"},S[0]!==b&&", ",b),y&&i.createElement("span",{"data-testid":"HeaderAddressCountry"},S[0]!==y&&", ",y))),i.createElement(r,null,o&&i.createElement("div",null,i.createElement("a",{"data-testid":"HeaderAddressPhone",href:`tel:${o}`,"aria-label":o,rel:"nofollow noopener noreferrer",target:"_blank"},o)),h&&i.createElement("a",{"data-testid":"HeaderAddressWebUrl",href:h,"aria-label":h,rel:"nofollow noopener noreferrer",target:"_blank"},v)),i.createElement(s,null,t&&i.createElement("a",{"data-testid":"HeaderAddressEmail",href:`mailto:${t}`,"aria-label":t,rel:"nofollow noopener noreferrer",target:"_blank"},i.createElement(d,null)),(null==n?void 0:n.length)>0&&i.createElement("a",{"data-testid":"HeaderAddressInstagram",href:n[0].handle,"aria-label":n[0].network,rel:"nofollow noopener noreferrer",target:"_blank"},i.createElement(c,null))))};h.propTypes={address:n.object,email:n.string,link:n.string,phone:n.string,socialMedia:n.array},e.exports=h},40284:(e,t,o)=>{const i=o(45697),n=o(67294),a=o(79816),r=({hasCategoryEyebrow:e,tags:t,title:o})=>e&&(null==t?void 0:t.length)>0?n.createElement(a,{title:o,tags:t}):null;r.propTypes={hasCategoryEyebrow:i.bool,tags:i.array,title:i.string},e.exports=r},41825:(e,t,o)=>{const i=o(45697),n=o(67294),{ContentHeaderRubricIssueDate:a}=o(81398),r=({hideIssueDate:e,hideIssueDatePipeSeparator:t,issueDate:o,issueLink:i,showIssueCopyByDate:r})=>e||!o?null:n.createElement(a,{name:`${o}${r?" Issue":""}`,url:i,hideIssueDatePipeSeparator:t});r.propTypes={hideIssueDate:i.bool,hideIssueDatePipeSeparator:i.bool,issueDate:i.string,issueLink:i.string,showIssueCopyByDate:i.bool},e.exports=r},16295:(e,t,o)=>{const i=o(45697),n=o(67294),{SponsorContentContainer:a,SponsorImage:r,SponsoredContent:s,SponsoredContentCampaignLink:l}=o(85606),d=o(98288),c=({sponsorByline:e,sponsoredContentHeaderProps:t,theme:o})=>{const{sponsorLogo:i,sponsorName:d,campaignUrl:c}=t;if(!d||!e)return null;const p=`${e} ${d}`;return n.createElement(a,null,n.createElement(l,{additionalRelVals:["sponsored"],href:c},n.createElement(r,Object.assign({},i)),n.createElement(s,{containerTheme:o},p)))};c.propTypes={sponsorByline:i.string,sponsoredContentHeaderProps:i.shape({campaignUrl:i.string,sponsorLogo:i.shape(d.propTypes),sponsorName:i.string}),theme:i.oneOf(["standard","inverted","special"])},c.defaultProps={theme:"inverted"},e.exports=c},85606:(e,t,o)=>{const{default:i}=o(51117),{BREAKPOINTS:n}=o(85326),{calculateSpacing:a,getColorToken:r,getTypographyStyles:s}=o(79720),l=o(98288),{SpanWrapper:d}=o(89676),c=o(56851),p=i.div.withConfig({displayName:"SponsorContentContainer"})`
  margin-top: ${a(3)};
  text-align: center;
  ${d} {
    display: inline-flex;
    margin-top: 0;
    margin-bottom: 0;
    width: 66px;
  }
`,h=i(l).withConfig({displayName:"SponsorImage"})`
  margin-right: auto;
  margin-left: auto;

  img {
    border: 1px solid;
    border-radius: 50%;
    ${({containerTheme:e,theme:t})=>((e,t)=>"inverted"===e||"special"===e?`\n      border-color: ${r(t,"colors.consumption.lead.inverted.divider")};\n    `:`\n    border-color: ${r(t,"colors.consumption.lead.standard.divider")};\n  `)(e,t)}
    width: 64px;
    height: 64px;
  }
`,g=i.div.withConfig({displayName:"SponsoredContent"})`
  ${({theme:e})=>s(e,"typography.definitions.globalEditorial.syndication")}

  display: block;
  margin: ${a(2,"px")} 0 ${a(2,"px")};
  ${({containerTheme:e,theme:t})=>((e,t)=>"inverted"===e||"special"===e?`\n      color: ${r(t,"colors.consumption.lead.inverted.syndication")};\n    `:`\n    color: ${r(t,"colors.consumption.lead.standard.syndication")};\n  `)(e,t)}

  @media (min-width: 0) and (max-width: ${n.md}) {
    margin: ${a(1.5,"px")} 0 ${a(1.5,"px")};
  }
`,u=i(c).withConfig({displayName:"SponsoredContentCampaignLink"})`
  text-decoration: none;
`;e.exports={SponsorContentContainer:p,SponsorImage:h,SponsoredContent:g,SponsoredContentCampaignLink:u}},36517:(e,t,o)=>{const i=o(45697),n=o(67294),{ContentHeaderTitleBlockPublishDate:a}=o(30414),r=({hasExtraSpaceBetweenSeparator:e,hidePublishDate:t,publishDate:o,modifiedDate:i})=>{if(t||!o)return null;const r=i&&{datetime:i};return n.createElement(a,Object.assign({hasExtraSpaceBetweenSeparator:e,"data-testid":"ContentHeaderPublishDate"},r),o)};r.propTypes={hasExtraSpaceBetweenSeparator:i.bool,hidePublishDate:i.bool,modifiedDate:i.string,publishDate:i.string},e.exports=r},37939:(e,t,o)=>{const i=o(45697),n=o(67294),a=o(33843),r=o(36895),s=o(68224),l=o(41825),d=o(36517),{ContentHeaderSponsorName:c,ContentHeaderRubricBlock:p,ContentHeaderRubricDateBlock:h,ContentHeaderRubricPrice:g,ContentHeaderRubricContainer:u,ContentHeaderLiveIndicator:m}=o(81398),b=({authorsPosition:e,bylineVariation:t,contributors:o,hasExtraSpaceBetweenSeparator:i,hideAdaptationByline:b,hideIssueDate:y,hideIssueDatePipeSeparator:S,hidePublishDate:v,hideRubric:C,isLiveStoryType:w,isStoryLive:f,issueDate:T,issueLink:B,modifiedDate:D,price:x,publishDate:I,publishDatePosition:k,rubric:L,rubricVariation:E,showIssueCopyByDate:A,sponsorName:P})=>{const R=r[E]||r,H=!y&&T&&L,N=("above"===e||"top"===k)&&!P;return w&&f?n.createElement(m,null,n.createElement(a,{hasBackground:!0,isDiscovery:!1,shouldEnableAnimation:!0})):!(L||T||o)||C?null:(L||T||o)&&n.createElement(p,{hasIssueDateAndRubricBlock:H,"data-testid":"ContentHeaderRubric"},"above"===e&&n.createElement(s,{bylineVariation:t,contributors:o,hideAdaptationByline:b}),n.createElement(h,{"data-testid":"ContentHeaderRubricDateBlock"},L&&n.createElement(u,Object.assign({},L,{isVerticalAlign:"above"===e||"top"===k||H,as:R})),x&&n.createElement(g,null,"/ ",x),P&&n.createElement(c,{hasExtraSpaceBetweenSeparator:i,items:[{name:P}]}),N&&n.createElement(d,{hasExtraSpaceBetweenSeparator:i,hidePublishDate:v,modifiedDate:D,publishDate:I})),n.createElement(l,{hideIssueDate:y,hideIssueDatePipeSeparator:S,issueDate:T,issueLink:B,showIssueCopyByDate:A}))};b.propTypes={authorsPosition:i.string,bylineVariation:i.string,contributors:i.object,hasExtraSpaceBetweenSeparator:i.bool,hasNoRowPadding:i.bool,hideAdaptationByline:i.bool,hideIssueDate:i.bool,hideIssueDatePipeSeparator:i.bool,hidePublishDate:i.bool,hideRubric:i.bool,isLiveStoryType:i.bool,isStoryLive:i.bool,issueDate:i.string,issueLink:i.string,modifiedDate:i.string,price:i.string,publishDate:i.string,publishDatePosition:i.string,rubric:i.shape(r.propTypes),rubricVariation:i.string,showIssueCopyByDate:i.bool,sponsorName:i.string},b.defaultProps={hideAdaptationByline:!1,isLiveStoryType:!1,isStoryLive:!1},e.exports=b},49359:(e,t,o)=>{const i=o(45697),n=o(67294),{useIntl:a}=o(36319),{asConfiguredComponent:r}=o(36380),s=o(60637),l=o(36895),d=o(68224),c=o(36517),p=o(37939),h=o(40284),g=o(84327),u=o(33843),{ContentHeaderContentDivider:m,ContentHeaderLowerBylineDateBlock:b,ContentHeaderItemCount:y,ContentHeaderHed:S,ContentHeaderTitleBlockWrapper:v,PodcastButtonWrapper:C,PodcastButton:w,PodcastLink:f}=o(30414),T=o(83074).Z,B=e=>e.length>0?e[0]:null,D=({authorsPosition:e,business:t,bylineVariation:o,contentHeaderCategories:i,contentSponsorNames:r,contributors:s,dangerousHed:l,dividerType:D,externalLinks:x,hasContentDivider:I,hasDesktopTitleBlockDivider:k,hasExtraSpaceBetweenSeparator:L,hideIssueDate:E,hideIssueDatePipeSeparator:A,hasNoRowPadding:P,hideAdaptationByline:R,hidePublishDate:H,hideRubric:N,isBusinessContentHeader:M,isLiveStoryType:O,isStoryLive:$,issueDate:W,issueLink:V,itemsCount:_,metadataVideo:F,modifiedDate:j,price:U,podcastPagePrimaryCta:G,podcastPagePrimaryCtaLabel:z,publishDate:Z,publishDatePosition:K,rubric:q,rubricVariation:Y,shouldDisplayLiveIndicator:X,showIssueCopyByDate:J,showItemCount:Q,showPodcastButton:ee,theme:te})=>{const oe=I&&"above"!==e,ie="inverted"===te,ne=ie?"outlined":"filled",ae=k&&("both"===D||"top"===D),{formatMessage:re}=a();return n.createElement(v,{rowWithTopBorder:ae,isBusinessContentHeader:M,"data-testid":"ContentHeaderTitleBlockWrapper"},F.isLive&&X&&n.createElement(u,null),n.createElement(p,{authorsPosition:e,bylineVariation:o,contributors:s,hasExtraSpaceBetweenSeparator:L,hasNoRowPadding:P,hideIssueDate:E,hideIssueDatePipeSeparator:A,hideAdaptationByline:R,hidePublishDate:H,hideRubric:N,isLiveStoryType:O,isStoryLive:$,issueDate:W,issueLink:V,modifiedDate:j,price:U,publishDate:Z,publishDatePosition:K,rubric:q,rubricVariation:Y,showIssueCopyByDate:J,sponsorName:B(r),theme:te}),n.createElement(h,Object.assign({},i)),n.createElement(S,{dangerouslySetInnerHTML:{__html:l},"data-testid":"ContentHeaderHed"}),"below"===e&&n.createElement(b,null,n.createElement(d,{bylineVariation:o,contributors:s}),n.createElement(c,{hasExtraSpaceBetweenSeparator:L,hidePublishDate:H,modifiedDate:j,publishDate:Z})),Q&&_&&n.createElement(y,Object.assign({},_)),oe&&n.createElement(m,null),M&&n.createElement(g,{address:null==t?void 0:t.address,phone:null==t?void 0:t.phone,email:null==t?void 0:t.email,socialMedia:null==t?void 0:t.socialMedia,link:null==t?void 0:t.url}),ee&&G&&n.createElement(C,null,n.createElement(w,{btnStyle:ne,href:G,label:z||re(T.primaryCTALabel),target:"blank",inputKind:"link"}),x.length>0&&n.createElement(f,{isInverted:ie,href:x[0].url,target:"blank"},"Or, choose where to Listen")))};D.propTypes={authorsPosition:i.oneOf(["above","below","hidden"]),business:i.shape({address:i.object,phone:i.string,email:i.string,socialMedia:i.array,url:i.string}),bylineVariation:i.string,contentHeaderCategories:i.shape({title:i.string,tags:i.array,hasCategoryEyebrow:i.boolean}),contentSponsorNames:i.array,contributors:i.object,dangerousHed:i.string.isRequired,dividerType:i.string,externalLinks:i.array,hasContentDivider:i.bool,hasDesktopTitleBlockDivider:i.bool,hasDivider:i.bool,hasExtraSpaceBetweenSeparator:i.bool,hasNoRowPadding:i.bool,hideAdaptationByline:i.bool,hideIssueDate:i.bool,hideIssueDatePipeSeparator:i.bool,hidePublishDate:i.bool,hideRubric:i.bool,isBusinessContentHeader:i.bool,isLiveStoryType:i.bool,isStoryLive:i.bool,issueDate:i.string,issueLink:i.string,itemsCount:i.shape(s.propTypes),metadataVideo:i.shape({isLive:i.bool,premiereDate:i.string,series:i.string,videoLength:i.number}),modifiedDate:i.string,podcastPagePrimaryCta:i.string,podcastPagePrimaryCtaLabel:i.string,price:i.string,publishDate:i.string,publishDatePosition:i.oneOf(["top","bottom"]),rubric:i.shape(l.propTypes),rubricVariation:i.string,shouldDisplayLiveIndicator:i.bool,showIssueCopyByDate:i.bool,showItemCount:i.bool,showPodcastButton:i.bool,theme:i.oneOf(["standard","inverted","special"])},D.defaultProps={authorsPosition:"hidden",contentHeaderCategories:{hasCategoryEyebrow:!1},contentSponsorNames:[],dividerType:"both",hasDesktopTitleBlockDivider:!1,hasExtraSpaceBetweenSeparator:!1,hasNoRowPadding:!1,hideAdaptationByline:!1,hideIssueDate:!0,hideIssueDatePipeSeparator:!1,hidePublishDate:!1,hideRubric:!1,isBusinessContentHeader:!1,metadataVideo:{},publishDatePosition:"bottom",shouldDisplayLiveIndicator:!1,showIssueCopyByDate:!1,showItemCount:!1,showPodcastButton:!1,theme:"standard"},D.displayName="TitleBlock",e.exports=r(D,"TitleBlock"),e.exports.TitleBlock=D},68224:(e,t,o)=>{const i=o(45697),n=o(67294),{ContentHeaderBylines:a}=o(32279),r=({bylineVariation:e,contributors:t,hideAdaptationByline:o})=>t&&0!==Object.keys(t).length?n.createElement(a,{contributors:t,bylineVariation:e,isCompact:!1,hideAdaptationByline:o}):null;r.propTypes={bylineVariation:i.string,contributors:i.object,hideAdaptationByline:i.bool},e.exports=r},36125:(e,t,o)=>{const{asVariation:i}=o(95545),n=o(86772),a=o(63401),r=o(72149);n.TextAboveCenterGridWidth=i(n,"TextAboveCenterGridWidth",{contentAlign:"center",contentPosition:"above"}),n.TextAboveCenterGridWidthTopCardSmall=i(n,"TextAboveCenterGridWidthTopCardSmall",{contentAlign:"center",contentPosition:"above",contentStyle:"card",copyWidth:"fullbleed",leadRailAnchor:!0,mediaWidth:"small"}),n.TextAboveCenterFullBleed=i(n,"TextAboveCenterFullBleed",{contentAlign:"center",contentPosition:"above",mediaWidth:"fullbleed"}),n.TextAboveCenterFullBleedNoContributor=i(n,"TextAboveCenterFullBleedNoContributor",{contentAlign:"center",contentPosition:"above",mediaWidth:"fullbleed",shouldRemoveBylineTopMargin:!0,hasDekBottomMargin:!0,hasAccreditationSocialTopMargin:!0,shouldReduceAccreditationPadding:!0},{hasDesktopTitleBlockDivider:!1,captionStyle:"span-content-well",captionWidth:"fullbleed",showContributorImage:!1}),n.TextAboveCenterFullBleedTop=i(n,"TextAboveCenterFullBleedTop",{contentAlign:"center",contentPosition:"above",copyWidth:"fullbleed"}),n.TextAboveCenterFullBleedGridWidthCard=i(n,"TextAboveCenterFullBleedGridWidthCard",{contentAlign:"center",contentPosition:"above",contentStyle:"card",copyWidth:"fullbleed"}),n.TextAboveCenterFullBleedCard=i(n,"TextAboveCenterFullBleedCard",{contentAlign:"center",contentPosition:"above",contentStyle:"card",mediaWidth:"fullbleed",copyWidth:"fullbleed"}),n.TextAboveLeftSmall=i(n,"TextAboveLeftSmall",{contentAlign:"left",contentPosition:"above",leadRailAnchor:!0,mediaWidth:"small"}),n.TextAboveLeftSmallWithRule=i(n,"TextAboveLeftSmallWithRule",{contentAlign:"left",contentPosition:"above",hasLedeLightbox:!0,leadRailAnchor:!0,mediaWidth:"smallrule",hasInlinePublishDate:!0,hasNoRowPadding:!0,hasXsNavSpacing:!0,hasTitleWrapperTopSpacing:!0,hasAccreditationSocialTopMargin:!0,shouldRemoveContentHedWrapperTopSpacing:!0,hasReducedTitleTopMargin:!0,hasAccreditationExtraSpacing:!0,shouldRemoveBylineTopMargin:!0,hasDateExtraTopSpacing:!0},{stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderAccreditation']",edge:"bottom"}}),n.TextAboveCenterSmallWithRule=i(n,"TextAboveCenterSmallWithRule",{contentAlign:"center",contentPosition:"above",leadRailAnchor:!0,ledeAlign:"center",mediaWidth:"smallrule",hasInlinePublishDate:!0,hasNoRowPadding:!0,hasXsNavSpacing:!0,shouldRemoveBylineTopMargin:!0,hasAccreditationExtraSpacing:!0,hasAccreditationSocialTopMargin:!0,hasTitleWrapperTopSpacing:!0,shouldRemoveContentHedWrapperTopSpacing:!0,hasReducedTitleTopMargin:!0},{stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderAccreditation']",edge:"bottom"}}),n.InlineImage=i(n,"InlineImage",{contentAlign:"center",contentPosition:"above",leadRailAnchor:!0,ledeAlign:"center",mediaWidth:"smallrule",hasInlinePublishDate:!0,hasNoRowPadding:!0,hasXsNavSpacing:!0,shouldRemoveBylineTopMargin:!0,hasAccreditationSocialTopMargin:!0,shouldRemoveContentHedWrapperTopSpacing:!0,hasReducedTitleTopMargin:!0,hasTitleWrapperTopSpacing:!0,hasAccreditationExtraSpacing:!0},{dividerType:"bottom",hideLede:!0,showContributorImage:!1,stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderAccreditation']",edge:"bottom"}}),n.TextAboveLeftFullBleed=i(n,"TextAboveLeftFullBleed",{contentAlign:"left",contentPosition:"above",copyWidth:"grid",hasLedeLightbox:!0,mediaWidth:"fullbleed"}),n.TextAboveLeftGridWidth=i(n,"TextAboveLeftGridWidth",{contentAlign:"left",contentPosition:"above",mediaWidth:"grid"}),n.TextAboveLeftGridWidthCard=i(n,"TextAboveLeftGridWidthCard",{contentAlign:"left",contentPosition:"above",contentStyle:"card",mediaWidth:"grid"}),n.TextAboveLeftNoImg=i(n,"TextAboveLeftNoImg",{contentAlign:"left",contentPosition:"above"},{className:"content-header--no-lede",lede:null}),n.TextBelowCenterGridWidth=i(n,"TextBelowCenterGridWidth",{contentAlign:"center",contentPosition:"below"}),n.TextBelowCenterFullBleed=i(n,"TextBelowCenterFullBleed",{contentAlign:"center",contentPosition:"below",mediaWidth:"fullbleed"}),n.TextBelowCenterFullBleedNoContributor=i(n,"TextBelowCenterFullBleedNoContributor",{contentAlign:"center",contentPosition:"below",mediaWidth:"fullbleed",shouldRemoveBylineTopMargin:!0,hasDekBottomMargin:!0,hasAccreditationSocialTopMargin:!0,hasAccreditationSocialBottomMargin:!0,hasPublishDateBottomPadding:!0,hideAccreditationBottomSpacing:!0,shouldReduceAccreditationPadding:!0},{hasDesktopTitleBlockDivider:!1,captionStyle:"span-content-well",captionWidth:"fullbleed",showContributorImage:!1}),n.TextBelowLeftGridWidth=i(n,"TextBelowLeftGridWidth",{contentAlign:"left",contentPosition:"below"}),n.TextBelowLeftGridWidthCard=i(n,"TextBelowLeftGridWidthCard",{contentAlign:"left",contentPosition:"below",contentStyle:"card"}),n.TextBelowLeftFullBleed=i(n,"TextBelowLeftFullBleed",{contentAlign:"left",contentPosition:"below",mediaWidth:"fullbleed"}),n.TextOverlay=i(a,"TextOverlayContentHeader",{}),n.TextOverlayWithLogo=i(a,"TextOverlayContentHeaderWithLogo",{isFeatured:!0}),n.TextOverlayCenterFullBleedGradient=i(a,"TextOverlayCenterFullBleedGradient",{contentAlign:"center",background:"gradient"}),n.SplitScreenImgLeft=i(n,"SplitScreenImgLeft",{contentAlign:"left",contentPosition:"end"}),n.SplitScreenImgRight=i(n,"SplitScreenImgRight",{contentAlign:"left",contentPosition:"start"}),n.SplitScreenImgRightContentCenter=i(n,"SplitScreenImgRightContentCenter",{contentAlign:"center",contentPosition:"start",contentStyle:"card",mediaWidth:"grid"}),n.AssetMiddleCenterBig=i(n,"AssetMiddleCenterBig",{assetPosition:"middle",contentAlign:"center",contentPosition:"above",mediaWidth:"small"}),n.AssetMiddleCenterFullBleed=i(n,"AssetMiddleCenterFullBleed",{assetPosition:"middle",contentAlign:"center",contentPosition:"above",mediaWidth:"grid"}),n.SubjectFocus=i(n,"SubjectFocus",{assetPosition:"bottom",contentAlign:"left",contentPosition:"above",hasExtraSpaceBetweenSeparator:!0,leadRailAnchor:!0,mediaWidth:"small",publishDatePosition:"top",reducedSpacings:!0},{showContributorImage:!1}),n.SplitScreenImageRightFullBleed=i(r,"SplitScreenImageRightFullBleed",{},{isTextRight:!1,showContributorImage:!1,shouldRemoveBylineTopMargin:!0,hasSplitScreenSocialShareReduceTopSpacing:!0}),n.SplitScreenImageRightInset=i(r,"SplitScreenImageRightInset",{},{hasSplitScreenSocialShareReduceTopSpacing:!0,shouldRemoveBylineTopMargin:!0,isInset:!0,isTextRight:!1,showContributorImage:!1,hideHeaderDividerInMobile:!0,hasImageBottomSpacing:!1}),n.SplitScreenImageLeftFullBleed=i(r,"SplitScreenImageLeftFullBleed",{},{shouldRemoveBylineTopMargin:!0,hasSplitScreenSocialShareReduceTopSpacing:!0,isTextRight:!0,showContributorImage:!1}),n.SplitScreenImageLeftInset=i(r,"SplitScreenImageLeftInset",{},{isInset:!0,isTextRight:!0,showContributorImage:!1,hasSplitScreenSocialShareReduceTopSpacing:!0,shouldRemoveBylineTopMargin:!0,hideHeaderDividerInMobile:!0}),n.BusinessContentHeader=i(n,"BusinessContentHeader",{contentAlign:"center",contentPosition:"below",mediaWidth:"fullbleed",showContentDivider:!0,hideRubric:!0}),n.PodcastContentHeader=i(n,"PodcastContentHeader",{contentAlign:"center",contentPosition:"below",shouldUseSmallLede:!0,showPodcastButton:!0,hasDivider:!0},{hideLedeCaption:!0}),n.TextAboveCenterFullBleedVideo=i(n,"ContentHeaderFullBleedVideo",{contentAlign:"center",contentPosition:"above",mediaWidth:"fullbleed",isFullBleedVideo:!0}),e.exports=n},17930:(e,t,o)=>{const i=o(45697),n=o(94184),a=o(67294),{useIntl:r}=o(36319),s=o(77333),l=o(7279),d=o(6046),{trackComponent:c}=o(40199),p=o(30970).Z,{ReviewRatingDataLabel:h,ReviewRatingDataWrapper:g,ReviewRatingDataValue:u,ReviewRatingDataExplainer:m,ReviewRatingDataExplainerModal:b,ReviewRatingDataExplainerModalList:y,ReviewRatingDataExplainerModalListRating:S,ReviewRatingDataExplainerModalListDescribe:v}=o(73703),C=({className:e,rating:t,ratingList:o})=>{a.useEffect((()=>{c("ReviewRatingData")}),[]);const i=r(),[C,w]=a.useState(!0),f=()=>{w(!C)},T=a.createElement(b,{className:"review-rating-data__rating-explainer-modal"},o.map(((e,t)=>a.createElement(y,{key:e},a.createElement(S,{as:"span"},t+1),a.createElement(v,{as:"span"},e)))));return a.createElement(g,{className:n("review-rating-data",e)},a.createElement(h,{className:"review-rating-data__label"},i.formatMessage(p.dataLabel)),a.createElement(u,null,t,"/10"),a.createElement(m,null,a.createElement(l.Utility,{isIconButton:!0,ButtonIcon:s,className:"review-rating-data__info-button",label:i.formatMessage(p.buttonLabel),onClickHandler:f,role:"button"}),!C&&a.createElement(d,{className:"alert__tooltip",arrowPosition:52,gaIdentifier:"review-rating-explainer",isVisible:!0,isTooltip:!0,onClose:f,shouldUseArrow:!0},T)))};C.propTypes={className:i.string,rating:i.number,ratingList:i.array},C.defaultProps={rating:0,ratingList:[]},C.displayName="ReviewRatingData",e.exports=C},88752:(e,t,o)=>{const{asConfiguredComponent:i}=o(36380),n=o(17930);e.exports=i(n,"ReviewRatingData")},73703:(e,t,o)=>{const i=o(51117).default,{BaseText:n}=o(74327),{calculateSpacing:a,getTypographyStyles:r,getColorToken:s}=o(79720),l=i.div.withConfig({displayName:"ReviewRatingDataWrapper"})`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  margin-top: ${a(2)};
  width: 100%;
`,d=i(n).withConfig({displayName:"ReviewRatingDataLabel"})`
  margin-right: ${a(1)};
`;d.defaultProps={as:"span",typeIdentity:"typography.definitions.consumptionEditorial.subhed-aux-primary"};const c=i(n).withConfig({displayName:"ReviewRatingDataValue"})`
  ${({theme:e})=>r(e,"typography.definitions.consumptionEditorial.subhed-aux-primary")}
  color: ${({theme:e})=>s(e,"colors.consumption.body.standard.subhed")};
`,p=i.div.withConfig({displayName:"ReviewRatingDataExplainer"})`
  margin-left: ${a(.5)};

  .review-rating-data__info-button,
  .review-ratingdata__close-button {
    margin: 0;
    border: 0;
    background-color: ${({theme:e})=>s(e,"colors.interactive.base.white")};
    fill: ${({theme:e})=>s(e,"colors.consumption.body.standard.accent")};
    padding: 0;

    &:hover,
    &:focus {
      border: 0;
      background: none;
    }
  }

  .icon {
    padding-right: 5px;
    width: 24px;
    height: 24px;
  }

  .review-rating-data__info-button {
    .button__icon-container,
    .icon {
      padding-right: 0;
      width: 18px;
      height: 18px;
    }
  }

  .icon.icon-close {
    width: 35px;
    height: 35px;
  }
`,h=i.div.withConfig({displayName:"ReviewRatingDataExplainerModal"})`
  padding: ${a(2)} 0 ${a(2)}
    ${a(2)};
`,g=i.div.withConfig({displayName:"ReviewRatingDataExplainerModalList"})`
  display: flex;
  letter-spacing: 0;
`,u=i.span.withConfig({displayName:"ReviewRatingDataExplainerModalListRating"})`
  flex: 1;
  ${({theme:e})=>r(e,"typography.definitions.consumptionEditorial.citation")}
  font-weight: bold;
`,m=i.span.withConfig({displayName:"ReviewRatingDataExplainerModalListDescribe"})`
  flex: 9;
  ${({theme:e})=>r(e,"typography.definitions.consumptionEditorial.citation")}
`;e.exports={ReviewRatingDataLabel:d,ReviewRatingDataWrapper:l,ReviewRatingDataValue:c,ReviewRatingDataExplainer:p,ReviewRatingDataExplainerModal:h,ReviewRatingDataExplainerModalList:g,ReviewRatingDataExplainerModalListRating:u,ReviewRatingDataExplainerModalListDescribe:m}},30970:(e,t,o)=>{const i=o(36319);t.Z=(0,i.defineMessages)({dataLabel:{id:"ReviewRatingData.DataLabel",defaultMessage:"Rating:",description:"Label for rating"},buttonLabel:{id:"ReviewRatingData.ButtonLabel",defaultMessage:"Open rating explainer",description:"Label for rating explainer button"}})},98810:(e,t,o)=>{const i=o(67294),n=o(45697),a=o(93839),{SplitScreenContentHeaderLede:r,SplitScreenContentHeaderLedeBlock:s}=o(41903),l=({captionCredit:e,className:t,isCNEVideo:o,lede:n,socialMedia:l})=>n?o?n.scriptEmbedUrl?i.createElement(s,{"data-testid":"ContentHeaderLeadAsset",className:t},i.createElement(a,{hasMargins:!1,shouldAutoplay:!0,scriptUrl:n.scriptEmbedUrl})):null:i.createElement(s,{"data-testid":"ContentHeaderLeadAsset",className:t},i.createElement(r,Object.assign({},n)),e,l):null;l.propTypes={captionCredit:n.object,className:n.string,isCNEVideo:n.bool,lede:n.object,socialMedia:n.object},e.exports=l},68660:(e,t,o)=>{const i=o(94184),n=o(45697),a=o(67294),{useIntl:r}=o(36319),s=o(23493),l=o(3650).Z,{mapSourcesToSegmentedSources:d}=o(28679),c=o(98810),p=o(98288),h=o(36895),g=o(28891),u=o(90227),m=o(34042),b=o(65552),y=o(13134),S=o(44287),v=o(84885),{formatInfoSliceItems:C}=o(11850),w=o(19688),{useNativeShare:f}=o(8998),{getThemedBylineVariation:T}=o(41317),{getOverrideBehaviour:B}=o(66528),{trackComponent:D}=o(40199),{BookmarkIcon:x}=o(47649),{SplitScreenContentHeaderArtist:I,SplitScreenContentHeaderArtistSlash:k,SplitScreenContentHeaderArtistWrapper:L,SplitScreenContentHeaderByline:E,SplitScreenContentHeaderCaption:A,SplitScreenContentHeaderContributorImage:P,SplitScreenContentHeaderDek:R,SplitScreenContentHeaderDekDown:H,SplitScreenContentHeaderDivider:N,SplitScreenContentHeaderHed:M,SplitScreenContentHeaderMain:O,SplitScreenContentHeaderInfoSlice:$,SplitScreenContentHeaderForMusicReview:W,SplitScreenContentHeaderNativeShareButton:V,SplitScreenContentHeaderPublishDate:_,SplitScreenContentHeaderRating:F,SplitScreenContentHeaderRubric:j,SplitScreenContentHeaderRubricIssueDate:U,SplitScreenContentHeaderSignageRubric:G,SplitScreenContentHeaderSocialShare:z,SplitScreenContentHeaderTitleBlock:Z,SplitScreenContentHeaderWrapper:K,SplitScreenContentHeaderScoreBox:q,SplitScreenContentHeaderLeadWrapper:Y,SplitScreenContentHeaderArtistLink:X,SplitScreenContentHeaderGrid:J,SplitScreenContentHeaderPersistentAside:Q,SplitScreenContentHeaderReleaseYear:ee,SplitScreenContentHeaderLeadOverride:te}=o(41903),{SplitScreenContentHeaderSocialIcons:oe}=o(38215),{doHideBookmark:ie,doDisplayBookmark:ne}=o(49214),{BREAKPOINTS:ae}=o(85326),re=({contributors:e,contributorsPosition:t,hasInvertedBylineLink:o,hideContributors:i,hideIssueDate:n,hidePublishDate:r,issueDate:s,issueDatePostfix:l,issueLink:d,publishDate:c,publishDatePosition:p,rubric:g,rubricVariation:u,hideRubric:m,themedBylineVariation:b})=>{const y=h[u]||h,S=h.Item,v=e&&0!==Object.keys(e).length;return a.createElement("div",{"data-testid":"ContentHeaderRubric"},v&&!i&&"top"===t&&a.createElement(E,{contributors:e,bylineVariation:b,isCompact:!1,contributorsPosition:t,hasInvertedBylineLink:o}),g&&!m&&a.createElement(j,Object.assign({as:y},g)),!n&&s&&a.createElement(U,{as:S,name:l?`${s}${l}`:s,url:d}),!r&&c&&"top"===p&&a.createElement(_,{"data-testid":"ContentHeaderPublishDate"},c))};re.propTypes={contributors:n.object,contributorsPosition:n.oneOf(["top","bottom"]),hasInvertedBylineLink:n.bool,hideContributors:n.bool,hideIssueDate:n.bool,hidePublishDate:n.bool,hideRubric:n.bool,issueDate:n.string,issueDatePostfix:n.string,issueLink:n.string,publishDate:n.string,publishDatePosition:n.oneOf(["top","bottom"]),rubric:n.shape(h.propTypes),rubricVariation:n.string,themedBylineVariation:n.string};const se=({signage:e,shouldDisplaySignage:t})=>e&&t?a.createElement("div",{"data-testid":"ContentHeaderRubricSignage"},a.createElement(G,{name:e})):null;se.propTypes={shouldDisplaySignage:n.bool,signage:n.string};const le=(e,t,o,i,n,r,s,l)=>n&&a.createElement(z,Object.assign({},n,{hasSocialShare:!0,hasStickySocialIcons:e,hideSocialIcons:t,hideSocialIconsOnMobile:o,socialIconsToHide:i,socialMediaPositionInMobile:r},l&&{hasSplitScreenSocialShareReduceTopSpacing:s})),de=(e,t)=>((null==t?void 0:t.caption)||(null==t?void 0:t.credit))&&!e&&a.createElement(J,null,a.createElement(A,{dangerousCaptionText:t.caption,dangerousCredit:t.credit})),{useRef:ce,useEffect:pe}=a,he=({artists:e,brandSlug:t,captionPosition:o,className:n,contentAlign:p,contributorImage:h,dangerousHed:m,dangerousDek:b,shouldRemoveBylineTopMargin:y,hasContributorImageBackground:S,showFullHeaderViewInMobile:A,hasInvertedBylineLink:j,hasMargin:U,hasSplitScreenSocialShareReduceTopSpacing:G,hasStickySocialIcons:z,hasNativeShareButton:he,hideContributorTitle:ge,hideContributors:ue,hideDangerousDek:me,hideHeaderDividerInMobile:be,hasImageBottomSpacing:ye,hideIssueDate:Se,hidePublishDate:ve,hideRubric:Ce,socialIconsToHide:we,hideSocialIcons:fe,hideSocialIconsOnMobile:Te,hideCaption:Be,imageAlignment:De,infoSliceFields:xe,interactiveOverride:Ie,isInset:ke,isMusicReview:Le,isTextRight:Ee,isTrackReview:Ae,issueDate:Pe,issueDatePostfix:Re,issueLink:He,isSplitScreenArtistLarge:Ne,rubric:Me,rubricVariation:Oe,contributors:$e,contributorsPosition:We,bylineVariation:Ve,persistentAsideAlign:_e,publishDate:Fe,publishDatePosition:je,lede:Ue,ledeContentAlign:Ge,modifiedDate:ze,musicRating:Ze,shouldEnableNativeShareOnDesktop:Ke,shouldFitToViewport:qe,showBookmarked:Ye,shouldHeaderFitToViewport:Xe,showContentDivider:Je,showContributorImage:Qe,showHeaderDivider:et,socialDescription:tt,socialMedia:ot,socialMediaPositionInMobile:it,socialTitle:nt,stickySocialAnchorBottom:at,stickySocialAnchorTop:rt,theme:st,rating:lt,signage:dt,shouldDisplaySignage:ct,showReviewLink:pt,textAlign:ht,shouldAlignCenterWhenNoCaption:gt})=>{var ut,mt;const[bt,yt]=a.useState("100vw");a.useEffect((()=>{var e;if(D("SplitScreenContentHeader"),ke){const t=`(min-width: ${ae.md})`;if(window.matchMedia(t).matches){const t=null===(e=window.visualViewport)||void 0===e?void 0:e.width;t&&yt(`${t}px`)}}}),[ke]);const St="CTA-firework"===B(Ie),vt=T({bylineVariation:Ve,theme:st}),{showNativeShareButton:Ct,pageUrl:wt}=f(he,Ke),{score:ft,isBestNewMusic:Tt,isBestNewReissue:Bt}=Ze,Dt=C(xe),xt=null==xe?void 0:xe.releaseYear,It=(e=>{if(!e)return;const t=Object.assign({},e);return new Set(["photo","cartoon"]).has(e.contentType)&&!e.segmentedSources&&e.sources&&(t.segmentedSources=d(e.sources)),t})(Ue),kt="cnevideo"===(null==Ue?void 0:Ue.modelName),Lt=!Ue||kt,{rating:Et,count:At}=lt||{},Pt=Le?W:O,{formatMessage:Rt}=r(),Ht={},Nt=ce();"belowImage"===o&&(Ht.captionCredit=de(Be,Ue)),"inLeadWrapperBelowImg"===it&&(Ht.socialMedia=le(z,fe,Te,we,ot,it,A));const Mt=()=>{(e=>{const t=e.current&&e.current.offsetTop,o=window.pageYOffset;return Math.abs(o)>Math.abs(t)})(Nt)?ne():ie()};pe((()=>{const e=s(Mt,100);return window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e)}}));const Ot=ze&&{datetime:ze},$t=ke&&(null===(mt=null===(ut=null==It?void 0:It.segmentedSources)||void 0===ut?void 0:ut.lg[0])||void 0===mt?void 0:mt.aspectRatio),Wt=$t&&-1!==(Vt=$t).indexOf(":")?Vt.split(":"):null;var Vt;const _t=gt&&(!(null==Ue?void 0:Ue.caption)||""===(null==Ue?void 0:Ue.caption));return a.createElement(K,Object.assign({className:i("content-header",{[n]:n}),contentHeaderTheme:st,isFullWidth:Lt,isTextRight:Ee,isInset:ke,imageAlignment:De,ledeContentAlign:Ge,shouldFitToViewport:!qe,isMusicReview:Le,"data-testid":"SplitScreenContentHeaderWrapper",showHeaderDivider:et,socialMediaPositionInMobile:it,hideSocialIconsOnMobile:Te,hideSocialIcons:fe,shouldHeaderFitToViewport:Xe,captionPosition:o,hidePublishDate:ve,mediaContentType:(null==It?void 0:It.contentType)||"",hasInvertedBylineLink:j,hasMargin:U,imgAspectRatioForDesktop:Wt,viewportWidth:bt,hasLedeTextAlignCenterForMobile:_t,hasPublishDateBottomPadding:A&&(!ot||fe||Te)},A&&{hasImageBottomSpacing:ye,hideHeaderDividerInMobile:be}),a.createElement(Pt,{shouldFitToViewport:!qe},a.createElement(Z,{contentAlign:p,textAlign:ht},a.createElement(se,{signage:dt,shouldDisplaySignage:ct}),a.createElement(re,Object.assign({},{contributors:$e,contributorsPosition:We,rubric:Me,rubricVariation:Oe,hideContributors:ue,hideIssueDate:Se,hidePublishDate:ve,issueDate:Pe,issueDatePostfix:Re,issueLink:He,publishDate:Fe,publishDatePosition:je,hideRubric:Ce,hasInvertedBylineLink:j,themedBylineVariation:vt,shouldRemoveBylineTopMargin:y})),a.createElement(M,{dangerouslySetInnerHTML:{__html:m},"data-testid":"ContentHeaderHed",isMusicReview:Le}),St&&a.createElement(te,{dangerouslySetInnerHTML:{__html:Ie.markup}}),Je&&a.createElement(N,{ledeContentAlign:Ge,hasLedeTextAlignCenterForMobile:_t}),e&&Le?a.createElement(L,{isMusicReview:Le},0===e.length&&a.createElement(I,{isSplitScreenArtistLarge:Ne},Rt(l.variousArtists)),e.map(((t,o)=>a.createElement(a.Fragment,{key:o},a.createElement(X,{key:o,href:"/".concat(t.uri)},a.createElement(I,{dangerouslySetInnerHTML:{__html:t.name},isSplitScreenArtistLarge:Ne})),!(o===e.length-1)&&a.createElement(k,{dangerouslySetInnerHTML:{__html:" / "},isSplitScreenArtistLarge:Ne}))))):!me&&b&&a.createElement(R,{dangerouslySetInnerHTML:{__html:b}}),Qe&&h&&a.createElement(P,Object.assign({},h,{sizes:"66px",hasContributorImageBackground:S})),$e&&!ue&&"bottom"===We&&a.createElement(E,Object.assign({contributors:$e,bylineVariation:vt,isCompact:!1,hasInvertedBylineLink:j},A&&{shouldRemoveBylineTopMargin:y})),!ve&&"bottom"===je&&a.createElement(_,Object.assign({"data-testid":"ContentHeaderPublishDate",hasPublishDateBottomPadding:A&&(!ot||fe||Te)},Ot),Fe),(Le||Ae)&&xt&&a.createElement(ee,{"data-testid":"SplitScreenContentHeaderReleaseYear"},xt),Ye&&a.createElement("div",{ref:Nt},a.createElement(x,{bookmarkTrackingType:"header",link:{label:"Save story",url:"#",network:"bookmark",behavior:"bookmark"},theme:"standard",type:"thin",isUrlBookmark:!0,isBookmarkButton:!0})),!!Et&&!!At&&a.createElement(F,{averageRatingCount:Math.round(10*Et)/10,brandSlug:t,hasBorderTop:!0,link:pt&&{label:Rt(l.ratingLinkLabel),onClick:e=>{e.preventDefault();const t=document.getElementById("reviews"),{top:o}=v(t);null==t||t.focus(),window.scrollTo(0,o-56)},url:"#reviews"},totalRatingCount:At}),Ct?a.createElement(V,null,a.createElement(w,{shareData:{url:wt,title:nt,text:tt}})):le(z,fe,Te,we,ot,it,G,A)),a.createElement(Y,{isMusicReview:Le},a.createElement(c,Object.assign({lede:It,isCNEVideo:kt},Ht)),Le&&a.createElement(q,null,a.createElement(u,{rating:ft,isBestNewMusic:Tt,isBestNewReissue:Bt,isTrackReview:Ae})))),"belowHeader"===o&&de(Be,Ue),$e&&ue&&a.createElement(E,{contributors:$e,bylineVariation:ge?"Item":Ve,isCompact:!1,isMusicReview:Le}),Dt.length>0&&a.createElement(J,null,a.createElement($,null,a.createElement(g,{items:Dt,isMusicReview:Le}))),!me&&Le&&b&&a.createElement(J,null,a.createElement(H,{dangerouslySetInnerHTML:{__html:b}})),!Ct&&z&&ot&&a.createElement(Q,{align:_e,attributes:{shouldFadeOnMove:!0},anchorBottom:at,anchorTop:rt,fullWidthSelector:".container--full, .full-bleed-ad, .callout--feature-large"},a.createElement(oe,Object.assign({},ot,{bookmarkTrackingType:"sticky",className:"social-icons--share"}))))};he.propTypes={artists:n.array,brandSlug:n.string,bylineVariation:n.string,captionPosition:n.oneOf(["belowHeader","belowImage"]),className:n.string,contentAlign:n.oneOf(["center","left"]),contributorImage:n.shape(p.propTypes),contributors:n.shape(m.propTypes.contributors),contributorsPosition:n.oneOf(["top","bottom"]),dangerousDek:n.string,dangerousHed:n.string.isRequired,hasContributorImageBackground:n.bool,hasImageBottomSpacing:n.bool,hasInvertedBylineLink:n.bool,hasMargin:n.bool,hasNativeShareButton:n.bool,hasSplitScreenSocialShareReduceTopSpacing:n.bool,hasStickySocialIcons:n.bool,hideCaption:n.bool,hideContributors:n.bool,hideContributorTitle:n.bool,hideDangerousDek:n.bool,hideHeaderDividerInMobile:n.bool,hideIssueDate:n.bool,hidePublishDate:n.bool,hideRubric:n.bool,hideSocialIcons:n.bool,hideSocialIconsOnMobile:n.bool,imageAlignment:n.oneOf(["center","top","left","right","bottom"]),infoSliceFields:n.object,interactiveOverride:n.shape({markup:n.string,behavior:n.string}),isInset:n.bool,isMusicReview:n.bool,isSplitScreenArtistLarge:n.bool,issueDate:n.string,issueDatePostfix:n.string,issueLink:n.string,isTextRight:n.bool,isTrackReview:n.bool,lede:n.oneOfType([n.shape(p.propTypes)]),ledeContentAlign:n.oneOf(["left","center"]),modifiedDate:n.string,musicRating:n.object,persistentAsideAlign:n.oneOf(["left","left-lead-asset"]),publishDate:n.string.isRequired,publishDatePosition:n.oneOf(["top","bottom"]),rating:n.shape(S.propTypes),rubric:n.shape(h.propTypes),rubricVariation:n.string,shouldAlignCenterWhenNoCaption:n.bool,shouldDisplaySignage:n.bool,shouldEnableNativeShareOnDesktop:n.bool,shouldFitToViewport:n.bool,shouldHeaderFitToViewport:n.bool,shouldRemoveBylineTopMargin:n.bool,showBookmarked:n.bool,showContentDivider:n.bool,showContributorImage:n.bool,showFullHeaderViewInMobile:n.bool,showHeaderDivider:n.bool,showReviewLink:n.bool,signage:n.string,socialDescription:n.string,socialIconsToHide:n.array,socialMedia:n.shape(y.propTypes),socialMediaPositionInMobile:n.oneOf(["inLeadWrapperBelowImg","inTitleBlock"]),socialTitle:n.string,stickySocialAnchorBottom:b.propTypes.anchorBottom,stickySocialAnchorTop:b.propTypes.anchorTop,textAlign:n.oneOf(["left","center"]),theme:n.oneOf(["standard","inverted","special"])},he.defaultProps={brandSlug:"",captionPosition:"belowHeader",contentAlign:"center",contributorsPosition:"bottom",hasContributorImageBackground:!1,hasInvertedBylineLink:!1,hasMargin:!1,hasStickySocialIcons:!0,hideCaption:!1,hideContributorTitle:!1,hideContributors:!1,hideDangerousDek:!1,hidePublishDate:!1,hideRubric:!1,hideSocialIcons:!1,hideSocialIconsOnMobile:!1,imageAlignment:"center",isInset:!1,isTextRight:!1,issueDatePostfix:" Issue",ledeContentAlign:"left",musicRating:{score:null},persistentAsideAlign:"left",publishDatePosition:"bottom",shouldAlignCenterWhenNoCaption:!1,shouldEnableNativeShareOnDesktop:!1,shouldFitToViewport:!0,shouldHeaderFitToViewport:!1,showBookmarked:!1,showContentDivider:!1,showContributorImage:!0,showFullHeaderViewInMobile:!1,showHeaderDivider:!0,showReviewLink:!0,socialIconsToHide:[],socialMediaPositionInMobile:"inTitleBlock",stickySocialAnchorBottom:{selector:".page",edge:"bottom"},stickySocialAnchorTop:{selector:"[data-testid='SplitScreenContentHeaderWrapper']",edge:"bottom"},textAlign:"center",theme:"standard"},he.displayName="SplitScreenContentHeader",e.exports=he},72149:(e,t,o)=>{e.exports=o(68660)},3650:(e,t,o)=>{const i=o(36319);t.Z=(0,i.defineMessages)({ratingLinkLabel:{id:"SplitScreenContentHeader.RatingLinkLabel",defaultMessage:"Read Reviews",description:"SplitScreenContentHeader component Rating Link Label"},variousArtists:{id:"SplitScreenContentHeader.VariousArtists",defaultMessage:"Various Artists",description:"SplitScreenContentHeader component various artists text"}})},11850:e=>{const t={genre:"Genre:",label:"Label:",reviewDate:"Reviewed:"};e.exports={formatInfoSliceItems:e=>{if(!e)return[];const o=[];return Object.keys(e).forEach((i=>{e[i]&&e[i].length&&t[i]&&o.push({key:t[i],value:e[i]})})),o}}},5999:(e,t,o)=>{const i=o(45697),n=o(67294),{InfoSliceValue:a,InfoSliceKey:r,InfoSliceItem:s,InfoSliceListItem:l,InfoSliceList:d,InfoSliceWrapper:c}=o(93892),{trackComponent:p}=o(40199),h=({className:e,items:t,isMusicReview:o})=>(n.useEffect((()=>{p("InfoSlice")}),[]),t&&0!==t.length?n.createElement(c,{className:e},n.createElement(d,{isMusicReview:o},t.map((e=>{const{key:t,value:o}=e;return t&&o?n.createElement(l,{key:t.toString().toLowerCase()},n.createElement(s,null,n.createElement(r,null,t),n.createElement(a,null,o))):null})))):null);h.propTypes={className:i.string,isMusicReview:i.bool,items:i.arrayOf(i.shape({key:i.string,value:i.string}))},h.defaultProps={isMusicReview:!1},e.exports=h},28891:(e,t,o)=>{e.exports=o(5999)},93892:(e,t,o)=>{const i=o(51117).default,{calculateSpacing:n,getColorStyles:a}=o(79720),{BaseText:r}=o(74327),{BREAKPOINTS:s}=o(85326),{maxThresholds:l}=o(28657),d=i(r).withConfig({displayName:"InfoSliceValue"})`
  display: table-cell;
  vertical-align: top;
`;d.defaultProps={colorToken:"colors.consumption.body.standard.body",typeIdentity:"typography.definitions.globalEditorial.numerical-small"};const c=i(r).withConfig({displayName:"InfoSliceKey"})`
  display: table-cell;
  padding-right: ${n(1)};
  vertical-align: top;
`;c.defaultProps={colorToken:"colors.consumption.body.standard.subhed",typeIdentity:"typography.definitions.globalEditorial.context-title"};const p=i.div.withConfig({displayName:"InfoSliceItem"})`
  display: table;
  align-items: center;
  padding: ${n(.5)} 0;
`,h=i.li.withConfig({displayName:"InfoSliceListItem"})`
  @media (max-width: ${l.md}px) {
    margin: 0 auto;
  }
  @media (min-width: ${s.md}) {
    margin-right: ${n(3)};

    :last-child {
      margin-right: ${n(0)};
    }
  }
`,g=i.ul.withConfig({displayName:"InfoSliceList"})`
  display: flex;
  flex-direction: column;
  margin: 0;
  border-width: 2px 0 0;
  border-style: solid;
  ${({theme:e})=>a(e,"border-color","colors.consumption.body.standard.divider")};
  padding: ${n(1.5)} 0;
  list-style: none;

  @media (min-width: ${s.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    ${({isMusicReview:e})=>e&&"\n    justify-content: center;\n    border-width: 0 0 0;"}
  }
  ${({isMusicReview:e})=>e&&"\n  justify-content: center;\n  border-width: 0 0 0;"}
`,u=i.div.withConfig({displayName:"InfoSliceWrapper"})``;e.exports={InfoSliceValue:d,InfoSliceKey:c,InfoSliceItem:p,InfoSliceListItem:h,InfoSliceList:g,InfoSliceWrapper:u}},80786:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BestNewMusicArrows=void 0;const i=o(67294),n=o(45697),{SvgWrapper:a,SvgStyle:r}=o(92545);t.BestNewMusicArrows=e=>i.createElement(a,{theme:e.theme,isBestBoth:e.isBestBoth,isBest:e.isBest},i.createElement(r,{x:"0px",y:"0px",viewBox:"0 0 80 40"},i.createElement("g",null,i.createElement("polyline",{points:"25.4,14.7 33.9,14.7 33.9,39.8 46.3,39.8 46.3,14.7 54.8,14.7 40.1,0 25.4,14.7   "}),i.createElement("polyline",{points:"50.6,40 80,40 65.2,25.4 50.6,40    "}),i.createElement("polyline",{points:"0,40 29.4,40 14.7,25.4 0,40    "})))),t.BestNewMusicArrows.propTypes={isBest:n.bool,isBestBoth:n.bool,theme:n.string}},52343:(e,t,o)=>{const i=o(67294),{useIntl:n}=o(36319),a=o(45697),{BestNewMusicArrows:r}=o(80786),s=o(86865).Z,l=o(17843),{trackComponent:d}=o(40199),{BestNewMusicText:c,Rating:p,ScoreBoxWrapper:h,ScoreCircle:g}=o(92545),u=({rating:e,isBestNewMusic:t,isBestNewReissue:o,palette:a,isTrackReview:u})=>{i.useEffect((()=>{d("ScoreBox")}),[]);const{formatMessage:m}=n(),b=u&&t;if(u&&!t)return null;const y=e<10?Number(e).toFixed(1):e,S=t||o,v=t&&o;return i.createElement(l,{palette:a},i.createElement(h,null,S&&i.createElement(r,{isBestBoth:v,isBest:S}),!b&&i.createElement(g,{isBest:S,isBestBoth:v},i.createElement(p,{isBest:S,isBestBoth:v},y)),S&&i.createElement(c,{isBestBoth:v,isBest:S},!b&&t&&i.createElement("div",null," ",m(s.BestNewMusic)," "),!b&&o&&i.createElement("div",null," ",m(s.BestNewReissue)),b&&i.createElement("div",null," ",m(s.BestNewTrack)))))};u.propTypes={isBestNewMusic:a.bool,isBestNewReissue:a.bool,isTrackReview:a.bool,palette:a.oneOf(["standard","inverted"]),rating:a.number},u.defaultProps={isBestNewMusic:!1,isBestNewReissue:!1,palette:"standard"},e.exports=u},90227:(e,t,o)=>{e.exports=o(52343)},92545:(e,t,o)=>{const{default:i}=o(51117),{BaseText:n}=o(74327),{calculateSpacing:a,getColorToken:r,getTypographyStyles:s}=o(79720),l=i.div.withConfig({displayName:"ScoreBoxWrapper"})`
  position: relative;
  width: 130px;
`,d=i.div.withConfig({displayName:"ScoreCircle"})`
  position: relative;
  margin-bottom: ${a(2)};
  border: 7px solid
    ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
  border-radius: 50%;
  padding-bottom: ${a(2)};
  width: 134px;
  height: 134px;
  text-align: center;
  color: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
`,c=i(n).withConfig({displayName:"Rating"})`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  color: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
  ${s("typography.definitions.globalEditorial.numerical-large")};
`,p=i(n).withConfig({displayName:"BestNewMusicText"})`
  ${s("typography.definitions.globalEditorial.context-primary")};
  width: 134px;
  text-align: center;
  color: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
`,h=i.svg.withConfig({displayName:"SvgStyle"})`
  margin-bottom: ${a(2,"px")};
  margin-left: ${a(3,"px")};
  width: 86px;
  height: 26px;
`,g=i.div.withConfig({displayName:"SvgWrapper"})`
  svg {
    fill: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
  }
  line-height: 0em;
`;e.exports={BestNewMusicText:p,Rating:c,ScoreBoxWrapper:l,ScoreCircle:d,SvgStyle:h,SvgWrapper:g}},86865:(e,t,o)=>{const i=o(36319);t.Z=(0,i.defineMessages)({BestNewMusic:{id:"ScoreBox.BestNewMusic",defaultMessage:"Best New Music",description:"Best New Music"},BestNewReissue:{id:"ScoreBox.BestNewReissue",defaultMessage:"Best New Reissue",description:"Best New Reissue"},BestNewTrack:{id:"ScoreBox.BestNewTrack",defaultMessage:"Best New Track",description:"Best New Track"}})},28604:(e,t,o)=>{const i=o(67294),n=o(83253),a=o(94184),{createGlobalStyle:r}=o(51117),s=o(74691),l=o(23279),d=o(30998),c=o(59704),p=o(58509),{useIntl:h}=o(36319),g=o(51889).Z,u=o(99815),m=o(70302),b=o(81768),{trackComponent:y}=o(40199),{LightboxCloseButtonIcon:S,LightboxSwipe:v,LightboxWrapper:C,LightboxSlidesWrapper:w}=o(988),{getColorToken:f,getZIndex:T}=o(79720);let B;const D=r`
  .lightbox {
    height: 100vh;
  }

  .body__lightbox--open {
    overflow: hidden;
  }

  .lightbox__overlay {
    position: fixed;
    top: 0;
    left: 0;
    transition: opacity 0.2s;
    opacity: 0;
    z-index: ${T("hyperstitialLayer")};
    background-color: ${({theme:e})=>f(e,"colors.consumption.lead.standard.background")};

    &.lightbox__overlay--open {
      opacity: 1;

      &.lightbox__overlay--closing {
        opacity: 0;
      }
    }
  }

  .listicle-variation {
    overflow-y: scroll;
  }
`;e.exports={withLightbox:(e,t,o,r,f=!1,T="Default")=>x=>{const[I,k]=i.useState(-1),{formatMessage:L}=h(),E=e=>o&&k(s(I+e,0,t.length-1)),A=I>-1,P=e=>{var t;"swipeClose"!==e&&("IMG"===(t=e.target).tagName||"SPAN"===t.tagName)||k(void 0)},R={transform:`translate(${"listicle"===r?"0":-100*I/t.length}%)`},H=()=>{B&&(B.style.height=`${window.innerHeight}px`)};i.useEffect((()=>{y("LightBox",T)})),i.useEffect((()=>{const e=l(H,50);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}})),i.useEffect((()=>{!A&&B&&p.enableBodyScroll(B)}),[A]);const N=(e,t)=>f?{}:t.reduce(((t,o)=>Object.assign(Object.assign({},t),{[o]:t=>P(e||t)})),{});return i.createElement(C,null,i.createElement(u.Provider,{value:{expandHandler:e=>k(d(t,{id:e})),isInSlides:e=>c(t,{id:e})}},i.createElement(e,Object.assign({},x))),i.createElement(n,{className:a("lightbox "+(r?`${r}-variation`:"")),overlayClassName:{base:a("lightbox__overlay"),afterOpen:"lightbox__overlay--open",beforeClose:"lightbox__overlay--closing"},bodyOpenClassName:"body__lightbox--open",isOpen:A,onAfterOpen:()=>{p.disableBodyScroll(B),H()},onRequestClose:()=>{k(void 0)},contentRef:e=>{e&&(B=e)},closeTimeoutMS:200,contentLabel:L(g.contentLabel)},i.createElement(S,{ButtonIcon:b,isIconButton:!0,className:r?`${r}-variation-close`:"",dataAttrs:{"data-action":"close"},label:L(g.closeButtonIconLabel),onClickHandler:P,role:"button",ariaLabel:L(g.closeButtonIconLabel)}),i.createElement(v,Object.assign({},N("swipeClose",["onSwipeDown","onSwipeUp"]),{onSwipeRight:()=>E(-1),onSwipeLeft:()=>E(1),shouldPreventDefaultEvent:!0}),i.createElement(w,Object.assign({className:r?`${r}-variation-slide-wrapper`:"",style:R},N("",["onMouseDown","onTouchEnd"])),t.map((e=>i.createElement(m,Object.assign({},e,{className:r?`${r}-variation-slide`:"",key:e.id})))))),i.createElement(D,null)))}}},70302:function(e,t,o){var i=this&&this.__rest||function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(o[i[n]]=e[i[n]])}return o};const n=o(45697),a=o(67294),r=o(31954),s=o(98288),l=o(63030),{LightboxSlideWrapper:d,LightboxSlideTopSpacer:c,LightboxSlideImageCaptionOuter:p,LightboxSlideCaptionContainer:h}=o(988),g=e=>{var{caption:t,className:o,credit:n,dangerousCredit:l,dangerousCaption:g}=e,u=i(e,["caption","className","credit","dangerousCredit","dangerousCaption"]);const[m,b]=a.useState("landscape");return a.createElement(d,{className:o,screenOrientation:m},a.createElement(c,null),a.createElement(p,null,a.createElement(s,Object.assign({},u,{contentType:"photo",onAssetLoaded:({width:e,height:t})=>{e<t?b("portrait"):e>t?b("landscape"):e===t&&b("square")}})),a.createElement(h,null,a.createElement(r,{dangerousCaptionText:t||g,dangerousCredit:n||l,hasLinebreak:"portrait"===m}))))};g.propTypes=Object.assign(Object.assign({},l.propTypes),{caption:n.string,credit:n.string,dangerousCaption:n.string,dangerousCredit:n.string}),e.exports=g},92267:(e,t,o)=>{e.exports=o(28604)},988:(e,t,o)=>{const i=o(51117).default,n=o(7279),{CaptionWrapper:a,CaptionText:r}=o(5481),{calculateSpacing:s,getColorToken:l,getLinkStyles:d}=o(79720),c=o(89058),{BREAKPOINTS:p}=o(85326),{ResponsiveImageContainer:h}=o(7230),g=i.div.withConfig({displayName:"LightboxWrapper"})`
  grid-column-start: main;
`,u=i(c).withConfig({displayName:"LightboxSwipe"})`
  display: flex;
  width: 100%;
  height: 100%;
`,m=i(n.Utility).withConfig({displayName:"LightboxCloseButtonIcon"})`
  position: fixed;
  top: ${s(.5)};
  right: ${s(.5)};
  z-index: 1;
  cursor: pointer;
  padding: 8px;
  line-height: 0;

  &.listicle-variation-close {
    top: 1px;
  }

  &,
  &:hover {
    border: 1px solid
      ${({theme:e})=>l(e,"colors.interactive.base.white")};
    background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
  }

  &:focus {
    border: 1px solid
      ${({theme:e})=>l(e,"colors.interactive.base.brand-primary")};
    background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
  }

  .icon {
    fill: ${({theme:e})=>l(e,"colors.interactive.base.dark")};
  }

  .icon:hover {
    fill: ${({theme:e})=>l(e,"colors.interactive.base.brand-primary")};
    border: 1px solid
      ${({theme:e})=>l(e,"colors.interactive.base.white")};
  }

  @media (min-width: ${p.md}) {
    top: ${s(2)};
    right: ${s(2)};
  }
`,b=i.div.withConfig({displayName:"LightboxSlidesWrapper"})`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  transition: transform 0.4s ease-in-out;
  height: 100%;

  &.listicle-variation-slide-wrapper {
    display: block;
  }
`,y=i.div.withConfig({displayName:"LightboxSlideTopSpacer"})``,S=i.div.withConfig({displayName:"LightboxSlideImageCaptionOuter"})``,v=i.div.withConfig({displayName:"LightboxSlideCaptionContainer"})``,C=i.div.withConfig({displayName:"LightboxSlideWrapper"})`
  background-color: ${({theme:e})=>l(e,"colors.consumption.lead.standard.background")};
  width: 100vw;

  &.listicle-variation-slide {
    background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
    padding: ${s(3)} ${s(9)};

    ${a} {
      margin-bottom: 0;
      background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
    }
  }

  ${a} {
    background-color: ${({theme:e})=>l(e,"colors.consumption.lead.standard.background")};
    text-align: initial;

    ${r} {
      ${({theme:e})=>d(e,"colors.consumption.lead.standard.description",null)}

      &:hover {
        text-decoration: none;
      }
    }
  }

  ${({screenOrientation:e})=>"landscape"===e||"portrait"===e||"square"===e?`\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: auto;\n\n    ${S} {\n      display: contents;\n    }\n\n    .responsive-image {\n      display: flex;\n      flex-direction: column;\n\n      ${h} {\n        max-height: 85vh;\n        object-fit: contain;\n      }\n    }\n\n    ${v} {\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-end;\n    }\n\n    ${a} {\n      margin: ${s(2)} ${s(2)} ${s(5)};\n    }\n\n    @media (min-width: ${p.md}) {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: ${s(4)};\n      height: initial;\n\n      ${y} {\n        display: none;\n      }\n\n      ${S} {\n        display: block;\n      }\n\n      .responsive-asset {\n        display: table-cell;\n      }\n\n      ${v} {\n        display: table-caption;\n        caption-side: bottom;\n      }\n\n      ${a} {\n        margin: 0;\n        margin-top: ${s(1)};\n      }\n    }\n\n    ${"portrait"===e?`\n      @media (min-width: ${p.lg}) {\n        display: flex;\n        flex-direction: row;\n        height: 100%;\n\n        ${y} {\n          display: none;\n        }\n\n        ${S} {\n          display: contents;\n        }\n\n        .responsive-asset {\n          display: flex;\n          height: 100%;\n\n          .responsive-image {\n            height: 100%;\n\n            ${h} {\n              height: 100%;\n              max-height: initial;\n            }\n          }\n        }\n\n        ${v} {\n          display: flex;\n          flex-direction: column;\n          align-self: flex-end;\n        }\n\n        ${a} {\n          margin: 0;\n          margin-bottom: ${s(6)};\n          margin-left: ${s(2)};\n          max-width: 180px;\n        }\n      }\n    `:""}\n  `:""}
`;e.exports={LightboxSwipe:u,LightboxCloseButtonIcon:m,LightboxSlideImageCaptionOuter:S,LightboxSlideCaptionContainer:v,LightboxWrapper:g,LightboxSlideTopSpacer:y,LightboxSlidesWrapper:b,LightboxSlideWrapper:C}},51889:(e,t,o)=>{const i=o(36319);t.Z=(0,i.defineMessages)({contentLabel:{id:"Lightbox.ContentLabel",defaultMessage:"Photo Gallery",description:"Lightbox component content label"},closeButtonIconLabel:{id:"Lightbox.CloseButtonIconLabel",defaultMessage:"Close Lightbox",description:"Lightbox component close button icon label"}})},20886:(e,t,o)=>{const{asConfiguredComponent:i}=o(36380),n=o(45495);e.exports=i(n,"BasePage")},83074:(e,t,o)=>{const i=o(36319);t.Z=(0,i.defineMessages)({relatedArticleHed:{id:"PodcastDetailedPage.relatedArticleHed",defaultMessage:"Related Articles",description:"Default section hed text for PodcastDetailedPage page summary river"},contextualHeader:{id:"PodcastDetailedPage.contextualHeader",defaultMessage:"You Might Like This",description:"Contextual Header for podcast recirc unit"},primaryCTALabel:{id:"PodcastDetailedPage.primaryCTALabel",defaultMessage:"Start Listening Now",description:"Default CTA text for Start Listening Now button"}})},7595:(e,t,o)=>{const i=o(18721),n=o(27361),a=e=>{const t=n(e,"gradient-style"),o=n(e,"color-stops");let i=n(e,"angle");"radial"===t&&(i=null);const a=((e,t,o=null)=>null===o?`${e}-gradient(${t})`:`${e}-gradient(${o}, ${t})`)(t,o,i);return`background: ${a}; position: sticky;`},r=e=>{const t=n(e,"url"),o=n(e,"repeat"),i=n(e,"color"),a=n(e,"attachment"),r=n(e,"size");return((e,t="no-repeat",o="center",i="cover",n="scroll",a="transparent")=>{let r,s="";if(null!==e&&(r=e),s=`background-image:${r};\n      background-attachment:${n};\n      background-color:${a};\n      background-repeat:${t};\n      background-position:${o};`,"string"==typeof i)s+=`background-size:${i};`;else{const e=[];i.forEach((t=>{e.push(t)})),s+=`background-size:${i.toString()};`}return s})(t,o,n(e,"position"),r,a,i)};e.exports={getPattern:(e,t)=>{let o;if(!e||0===Object.keys(e).length||!t)return"background: none;";if(i(e,"container-styles")){const d=e["container-styles"];if(!d[t])return"background: none;";o=d[t];const c=i(o,"pattern")?o.pattern:null;if(c&&c.length){let e="";return c.length>=2?(c.forEach(((t,o)=>{let s=o;if(i(t,"gradient"))e+=a(n(t,"gradient"));else if(i(t,"image")){let o="";n(t,"image").size&&(o=n(t,"url")),o.size?e+=`'url(${o})'`:s=c.length,r(n(t,"image"))}else if(i(t,"solid")){const o=n(t,"solid");o&&(e+=n(o,"color"))}s!==c.length-1&&(e+=",")})),e.toString()):(s=c[0],i(s,"gradient")?a(n(s,"gradient")):i(s,"image")?r(n(s,"image")):i(s,"solid")?(l=n(s,"solid"),`background-color:${n(l,"color")};`):"background: none;")}}var s,l;return"background: none;"}}},84885:e=>{e.exports=e=>{if(!window)return{};const{bottom:t,left:o,right:i,top:n}=e.getBoundingClientRect(),a=e.currentStyle||window.getComputedStyle(e);return{bottom:t+parseFloat(a.marginBottom),left:o-parseFloat(a.marginLeft),right:i+parseFloat(a.marginRight),top:n-parseFloat(a.marginTop)}}}}]);