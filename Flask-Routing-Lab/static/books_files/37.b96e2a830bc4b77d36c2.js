(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[37],{20798:(e,o,a)=>{const t=a(67294),i=a(45697),r=a(73955),s=a(23279),{useIntl:n}=a(36319),{Slot:l}=a(86972),d=a(97425),m=a(54866),c=a(3258),{FilterableSummaryList:u}=a(54526),p=a(80152),h=a(37732),g=a(44031),C=a(16126),{trackComponent:y}=a(40199),{modifyItemObjectBasedOnContentType:b,childTobeRendered:S}=a(64767),{formatGtmData:f,productImpressionTracking:P}=a(12190),v=({copilotId:e,buttonConfig:o,ctaCardAspectRatio:a,dangerousHed:i,dangerousDek:v,dropShipSellers:w,editor:T,groups:$,hasBorder:x,hasBorderBottom:N,hasCarouselSliderPagination:I,hasControls:k,hasImageGrid:A,hasAtRetailerNameLowerCase:B,hasImpressionTracking:E,hasMediumMarginBottom:L,hasNavigationButtonVariation:R,hasPadding:H,hasProductPriceColor:D,hasProductNewPriceColor:O,hasProductWhiteBackground:M,hasGridColumn:U,hasUnderlineHed:V,isProductCardName:F,isProductCardRetailerName:G,shouldCheckProductInView:j,hasMarginTopAuto:W,hasNoBottomPaddingForGridContent:z,hasPLPBrandNameContextTitle:_,hasPLPCardNameDescriptionCore:q,paginationStyle:K,sectionTitleVariation:Z,shouldChipsRedirectOnClick:J,shouldEnableBundleComponentAnalytics:Q,shouldHideDangerousDek:X,shouldHidePublishDate:Y,shouldPlayInline:ee,shouldRenderCtaCard:oe,showOfferUrl:ae,showShopNowButton:te,summaryItemVariation:ie,shouldUseAlternativeTitleStyle:re,shouldUseProductPriceSecondary:se,shouldNavigateToNewTab:ne,shouldUseSmallHed:le,expVariationName:de,isDropshipProduct:me,trackingNamespace:ce,isDotClickable:ue,layout:pe,gridConfig:he,priceFormatting:ge,affiliateDisclaimer:Ce,shouldAffiliateDisclaimerPlpEnable:ye,isUpcEnabled:be,isPlpCurated:Se,isContentCenter:fe,hasCustomSlider:Pe,hideDesktopPagination:ve})=>{t.useEffect((()=>{y("VersoFilterableSummaryList")}),[]);const{formatMessage:we}=n(),Te=pe||"Carousel",$e="ContentCarousel"===Te,xe="GridFourColumns"===Te?"PLP":pe,Ne=i?i.replace(/[^a-zA-Z]+/gi,"-").toLowerCase():"",{gridItemColSpan:Ie}=he||{};t.useEffect((()=>{$e&&!E||(window.addEventListener("scroll",s((()=>{P(xe,document.getElementsByClassName("impressionTracking"))}),1e3)),window.addEventListener("load",(()=>P(xe,document.getElementsByClassName("impressionTracking")))))}),[xe,$e,E]);const ke=U&&"GridFourColumns"===Te,[Ae]=t.useState(parseInt(r(),10));return $&&0!==$.length?t.createElement(u,{dangerousHed:i,dangerousDek:v,editor:T,sectionTitleVariation:Z,shouldChipsRedirectOnClick:J,shouldEnableBundleComponentAnalytics:Q,shouldUseAlternativeTitleStyle:re,hasImpressionTracking:!0,trackingNamespace:ce,isDotClickable:ue,hasCarouselSliderPagination:I,hasCarouselControl:$e,hasControls:k,hasNavigationButtonVariation:R,hasToggleGridColor:ke,hasPadding:H,layout:Te,pos:Ae,paginationStyle:K,buttonConfig:o,gridConfig:he,hasBorderBottom:N,affiliateDisclaimer:Ce,shouldAffiliateDisclaimerPlpEnable:ye,isPlpCurated:Se,hasCustomSlider:Pe,hideDesktopPagination:ve,isUpcEnabled:be},$.map((o=>{const i=function(o){switch(Te){case"ContentCarousel":case"GridFourColumns":case"EditorsPicksCarousel":return(o=>o.items.map(((o,a)=>{const i=o.contentType,r=Object.assign(Object.assign({},o),{layout:pe,index:a});if(["commerce-product","product"].includes(i))return be?t.createElement(h,Object.assign({},o,{isLazy:!0,key:`${o.dangerousHed}-${a}`,dropShipSellers:w,isDropshipProduct:me,showOfferUrl:ae,data_item:r,hasImpressionTracking:E,expVariationName:de})):t.createElement(p,Object.assign({},o,{key:`${o.dangerousHed}-${a}`,hasAtRetailerNameLowerCase:B,hasImageGrid:A,hasProductPriceColor:D,hasProductNewPriceColor:O,shouldUseProductPriceSecondary:se,hasProductWhiteBackground:M,isLazy:!0,isProductCardName:F,isProductCardRetailerName:G,hasMarginTopAuto:W,hasPLPBrandNameContextTitle:_,hasPLPCardNameDescriptionCore:q,hasUnderlineHed:V,hasCarouselControl:$e,shouldCheckProductInView:j,layout:Te,copilotID:e,dropShipSellers:w,isDropshipProduct:me,showOfferUrl:ae,hasImpressionTracking:E,data_item:o,onClick:()=>f(window,Object.assign(Object.assign({},o),{expVariationName:de}),a,xe,Ne),expVariationName:de,layoutName:Ne,priceFormatting:ge,hideDesktopPagination:ve}));const s=b(o,i,ee);let n=g[ie];return s.showAssetOnly?n=C:fe&&"externallink"===i&&(n=g.TextBelowCenter),t.createElement(n,Object.assign({gridItemColSpan:(null==s?void 0:s.showAssetOnly)?1:Ie,shouldHideIcon:!0,shouldHideMetadataSecondary:!0},s,{key:`${o.dangerousHed}-${a}`,hasBorder:x,hasUnderlineHed:V,shouldHideDangerousDek:X,shouldHidePublishDate:!0,hasHedCorePrimary:!0,shouldPlayInline:ee,hasNoBottomMarginForCneVideo:"cnevideo"===i,hasNoBottomPaddingForCneVideo:"cnevideo"===i,hasNoBottomPaddingForGridContent:z&&"GridFourColumns"===Te,hasMediumMarginBottom:L,buttonSize:"default",showShopNowButton:te&&"externallink"===i,isPlpCurated:Se,shouldNavigateToNewTab:ne,hideDesktopPagination:ve,shouldUseSmallHed:le&&"externallink"===i&&"GridFourColumns"!==Te}))})))(o);case"ArticleCarousel":return(e=>{const o=g[ie];return e.items.map(((e,a)=>t.createElement(o,Object.assign({},e,{key:`${e.dangerousHed}-${a}`,hasBorder:x,hasUnderlineHed:V,shouldHideDangerousDek:X,shouldHidePublishDate:Y}))))})(o);default:return o.items.map(((e,o)=>t.createElement(d,Object.assign({},e,{key:`${e.hed}-${o}`}))))}}(o);oe&&o.url&&i.push(t.createElement(m,{aspectRatio:a,key:`cta-${o.label}`,url:o.url},we(c.ctaMessage,{groupName:o.label.toLocaleLowerCase()})));const r=S(i);return t.createElement(l,{key:o.label,name:o.label,url:o.url},r)}))):null};v.propTypes={affiliateDisclaimer:i.string,buttonConfig:i.object,copilotId:i.string,ctaCardAspectRatio:i.arrayOf(i.number),dangerousDek:i.string,dangerousHed:i.string,dropShipSellers:i.arrayOf(i.string),editor:i.object,expVariationName:i.string,gridConfig:i.object,groups:i.arrayOf(i.object),hasAtRetailerNameLowerCase:i.bool,hasBorder:i.bool,hasBorderBottom:i.bool,hasCarouselSliderPagination:i.bool,hasControls:i.bool,hasCustomSlider:i.bool,hasGridColumn:i.bool,hasImageGrid:i.bool,hasImpressionTracking:i.bool,hasMarginTopAuto:i.bool,hasMediumMarginBottom:i.bool,hasNavigationButtonVariation:i.bool,hasNoBottomPaddingForGridContent:i.bool,hasPadding:i.bool,hasPLPBrandNameContextTitle:i.bool,hasPLPCardNameDescriptionCore:i.bool,hasProductNewPriceColor:i.bool,hasProductPriceColor:i.bool,hasProductWhiteBackground:i.bool,hasToggleGridColor:i.bool,hasUnderlineHed:i.bool,hideDesktopPagination:i.bool,isContentCenter:i.bool,isDotClickable:i.bool,isDropshipProduct:i.bool,isPlpCurated:i.bool,isProductCardName:i.bool,isProductCardRetailerName:i.bool,isUpcEnabled:i.bool,layout:i.string,paginationStyle:i.string,priceFormatting:i.shape({fractionDigits:i.number,shouldFormatDecimalSeparator:i.bool}),sectionTitleVariation:i.string,shouldAffiliateDisclaimerPlpEnable:i.bool,shouldCheckProductInView:i.bool,shouldChipsRedirectOnClick:i.bool,shouldEnableBundleComponentAnalytics:i.bool,shouldHideDangerousDek:i.bool,shouldHidePublishDate:i.bool,shouldNavigateToNewTab:i.bool,shouldPlayInline:i.bool,shouldRenderCtaCard:i.bool,shouldUseAlternativeTitleStyle:i.bool,shouldUseProductPriceSecondary:i.bool,shouldUseSmallHed:i.bool,showNewProductCardDesign:i.bool,showOfferUrl:i.bool,showShopNowButton:i.bool,summaryItemVariation:i.string,trackingNamespace:i.shape({toggle:i.string,card:i.string})},v.displayName="VersoFilterableSummaryList",v.defaultProps={ctaCardAspectRatio:[2,1],dropShipSellers:[],hasAtRetailerNameLowerCase:!1,hasImpressionTracking:!0,hasMarginTopAuto:!1,isDotClickable:!1,isDropshipProduct:!1,isProductCardRetailerName:!1,layout:"Carousel",sectionTitleVariation:"TextCenter",shouldChipsRedirectOnClick:!1,shouldEnableBundleComponentAnalytics:!1,shouldPlayInline:!1,shouldRenderCtaCard:!1,shouldUseSmallHed:!1,showNewProductCardDesign:!1,showShopNowButton:!1,summaryItemVariation:"TextBelowLeft"},e.exports=v},50037:(e,o,a)=>{const{asConfiguredComponent:t}=a(36380),i=a(20798);e.exports=t(i,"VersoFilterableSummaryList")},54526:(e,o,a)=>{const{default:t}=a(51117),{BREAKPOINTS:i}=a(85326),{minScreen:r,calculateSpacing:s,minMaxScreen:n,getTypographyStyles:l,getColorStyles:d}=a(79720),{cssVariablesGrid:m,applyGridSpacing:c}=a(62470),{LabelText:u,ListWrapper:p}=a(10719),{CarouselListItem:h}=a(95764),{CarouselWrapper:g,ChipWrapper:C}=a(78153),y=a(33528),b=a(44031),{SummaryItemHedBase:S}=a(27853),f=t(y).withConfig({displayName:"FilterableSummaryList"})`
  margin: 0 auto;
  ${({hasToggleGridColor:e})=>!e&&`max-width:${i.fullBleed};\n  ${m()}`}
  ${({hasPadding:e})=>!e&&c("padding")}
  ${h}:first-child {
    box-sizing: content-box;
    ${({hasPadding:e})=>e?`padding-left:${s(8)};\n      ${n(0,i.md)}\n      {  \n        padding-left:${s(3)};  \n      }`:"padding-left: 0;"}
  }
  ${h}:last-child {
    box-sizing: content-box;
    ${({hasPadding:e})=>e?`padding-right:${s(8)};\n    ${n(0,i.md)}\n     { padding-right:${s(3)}; \n    }`:null}
  }
  ${r(i.xxl)} {
    ${C},
    ${g} {
      ${({hasToggleGridColor:e})=>!e&&"margin-left: revert;\n      margin-right: revert;"}
      ${u} ,
      ${p} {
        padding-right: revert;
        padding-left: revert;
      }
      ${h}:first-child {
        ${({hasPadding:e})=>!e&&"padding-left: revert;"}
      }
      ${h}:last-child {
        ${({hasPadding:e})=>!e&&"padding-right: revert;"}
      }
    }
  }
`,P=t(b).withConfig({displayName:"SummaryItemExpernalLinkWrapper"})`
  ${S} {
    ${({theme:e})=>`${l(e,"typography.definitions.discovery.hed-core-primary")};\n      ${d(e,"color","colors.discovery.body.white.heading")}`}
  }
`;e.exports={FilterableSummaryList:f,SummaryItemExpernalLinkWrapper:P}},26760:(e,o,a)=>{const t=a(67294),i=a(45697),{CTACardBody:r,CTACardContent:s,CTACardFooter:n,CTACardIcon:l,CTACardText:d,CTACardWrapper:m}=a(91894),c=({aspectRatio:e,children:o,url:a})=>t.createElement(m,{aspectRatio:e},t.createElement(s,null,t.createElement(r,null,t.createElement(d,{href:a},o)),t.createElement(n,null,t.createElement("a",{href:a},t.createElement(l,null)))));c.propTypes={aspectRatio:i.arrayOf(i.number),children:i.node.isRequired,url:i.string.isRequired},c.defaultProps={aspectRatio:[1,1]},e.exports=c},54866:(e,o,a)=>{e.exports=a(26760)},91894:(e,o,a)=>{const{default:t}=a(51117),{BREAKPOINTS:i}=a(85326),{calculateSpacing:r,getColorToken:s,getDecoration:n,minScreen:l}=a(79720),{BaseLink:d}=a(74327),m=a(32574),c=t.div.withConfig({displayName:"CTACardWrapper"})`
  position: relative;
  border-radius: ${({theme:e})=>n(e,"cardRadiusSm")};
  background-color: ${s("colors.discovery.body.brand.background")};
  padding-top: ${({aspectRatio:e})=>e[1]/e[0]*100}%;

  ${l(i.md)} {
    border-radius: ${({theme:e})=>n(e,"cardRadiusMd")};
  }

  ${l(i.lg)} {
    border-radius: ${({theme:e})=>n(e,"cardRadiusLg")};
  }
`,u=t.div.withConfig({displayName:"CTACardContent"})`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  flex-direction: column;
  padding: 0 ${r(3)} ${r(2)}
    ${r(3)};

  ${l(i.lg)} {
    padding: 0 ${r(5)} ${r(5)}
      ${r(5)};
  }
`,p=t.div.withConfig({displayName:"CTACardBody"})`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
`,h=t.div.withConfig({displayName:"CTACardFooter"})`
  height: ${r(6)};
`,g=t(d).withConfig({displayName:"CTACardText"})``;g.defaultProps={colorToken:"colors.discovery.body.brand.heading",typeIdentity:"typography.definitions.discovery.hed-core-secondary"};const C=t(m).withConfig({displayName:"CTACardIcon"})`
  border-radius: 50%;
  background-color: ${s("colors.discovery.body.brand.context-signature")};
  width: ${r(6)};
  height: ${r(6)};
  fill: ${s("colors.discovery.body.brand.context-texture")};
`;e.exports={CTACardBody:p,CTACardContent:u,CTACardFooter:h,CTACardIcon:C,CTACardText:g,CTACardWrapper:c}},3258:(e,o,a)=>{const{defineMessages:t}=a(36319);e.exports=t({ctaMessage:{id:"VersoFilterableSummaryList.CTAMessage",defaultMessage:"See more {groupName} recipes",description:"Message to display in the CTACard"}})},64767:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.childTobeRendered=o.modifyItemObjectBasedOnContentType=void 0,o.modifyItemObjectBasedOnContentType=(e,o,a)=>("cnevideo"===o&&a&&(e.image=Object.assign(Object.assign({},e.image),{url:(null==e?void 0:e.url)||"",dangerousHed:e.dangerousHed||""})),e),o.childTobeRendered=e=>e.filter((e=>{var o,a,t,i,r,s,n;return((null===(a=null===(o=null==e?void 0:e.props)||void 0===o?void 0:o.image)||void 0===a?void 0:a.id)||(null===(t=null==e?void 0:e.props)||void 0===t?void 0:t.aspectRatio)||"cnevideo"===(null===(i=null==e?void 0:e.props)||void 0===i?void 0:i.contentType)&&((null===(s=null===(r=null==e?void 0:e.props)||void 0===r?void 0:r.image)||void 0===s?void 0:s.scriptUrl)||(null===(n=null==e?void 0:e.props)||void 0===n?void 0:n.url)))&&e}))},25996:(e,o,a)=>{const t=a(45697),i=a(67294),{trackComponent:r}=a(40199),{SummaryItemSimpleAnchor:s,SummaryItemSimpleHed:n,SummaryItemResponsiveAsset:l,SummaryItemLiveWrapperAsset:d,SummaryItemLiveSpacerAsset:m,SummaryItemLiveEllipseAsset:c,SummaryItemLiveLabelAsset:u,SummaryItemSimpleSubHed:p,SummaryItemCustomMessage:h}=a(37771),g=a(48349),C=({image:e,isLive:o,isRunwayRecommendationSubHed:a,hasMobilePaddingBottom:t,hed:C,showAssetOnly:y,subHed:b,liveLabel:S,url:f,analyticsEvent:P,customMessage:v,showPrice:w,hasUnderlineHed:T})=>{i.useEffect((()=>{r("SummaryItemSimple")}),[]);const $=e&&i.createElement(l,Object.assign({},e,{hasMobilePaddingBottom:t}));return y?$:i.createElement(s,{href:f,"data-testid":"SummaryItemSimple",onClick:()=>{P&&g.emitGoogleTrackingEvent(P,{"event-label":C,"gtm.elementUrl":f})},hasUnderlineHed:T,hasMobilePaddingBottom:t},$,e&&o&&i.createElement(d,null,i.createElement(c,null),i.createElement(m,null),i.createElement(u,null," ",S," ")),C&&i.createElement(n,{as:"h3",hasMobilePaddingBottom:t},C),b&&i.createElement(p,{showPrice:w,as:"p"},w?b:null),v&&i.createElement(h,{isRunwayRecommendationSubHed:a}," ",v," "))};C.propTypes={analyticsEvent:t.string,customMessage:t.string,hasMobilePaddingBottom:t.bool,hasUnderlineHed:t.bool,hed:t.string,image:t.shape(l.propTypes),isLive:t.bool,isRunwayRecommendationSubHed:t.bool,liveLabel:t.string,showAssetOnly:t.bool,showPrice:t.bool,subHed:t.string,url:t.string.isRequired},C.defaultProps={hasUnderlineHed:!0,isLive:!1,isRunwayRecommendationSubHed:!1,liveLabel:"LIVE",showAssetOnly:!1},e.exports=C},16126:(e,o,a)=>{const{asConfiguredComponent:t}=a(36380),i=a(25996);e.exports=t(i,"SummaryItemSimple")},37771:(e,o,a)=>{const t=a(51117).default,{calculateSpacing:i,getColorStyles:r,getTypographyStyles:s}=a(79720),{BREAKPOINTS:n}=a(85326),{BaseLink:l,BaseText:d}=a(74327),m=a(98288),c=t(l).withConfig({displayName:"SummaryItemSimpleAnchor"})`
  display: block;
  position: relative;
  ${({hasMobilePaddingBottom:e})=>`padding-bottom: ${i(e?4:3)};}`};

  && {
    ${({hasUnderlineHed:e})=>!e&&"text-decoration: none"}
  }
`,u=t(d).withConfig({displayName:"SummaryItemSimpleHed"})`
  ${({hasMobilePaddingBottom:e})=>`padding-bottom: ${i(e?.5:1.5)};}`};
  text-align: center;

  ${({theme:e})=>s(e,"typography.definitions.discovery.hed-core-secondary")}
  ${({theme:e})=>r(e,"color","colors.discovery.lead.secondary.hed")};
`,p=t(d).withConfig({displayName:"SummaryItemSimpleSubHed"})`
  text-align: center;
  ${({theme:e,showPrice:o})=>s(e,o?"typography.definitions.discovery.hed-core-secondary":"typography.definitions.globalEditorial.context-tertiary")}
  ${({theme:e})=>r(e,"color","colors.discovery.body.white.context-tertiary")};
`,h=t(m).withConfig({displayName:"SummaryItemResponsiveAsset"})`
  ${({hasMobilePaddingBottom:e})=>`padding-bottom: ${i(e?1.5:.5)};}`};
  @media (min-width: ${n.md}) {
    padding-bottom: ${i(1)};
  }

  img {
    width: 100%;
  }
`,g=t.div.withConfig({displayName:"SummaryItemLiveWrapperAsset"})`
  display: flex;
  position: absolute;
  top: 24px;
  left: 12px;
  flex-direction: row;
  align-items: center;
  background: #a60505;
  padding: 2px 4px;
  height: 19px;
`,C=t.div.withConfig({displayName:"SummaryItemLiveSpacerAsset"})`
  position: static;
  opacity: 0.3;
  width: 4px;
`,y=t.div.withConfig({displayName:"SummaryItemLiveEllipseAsset"})`
  top: 7px;
  left: 4px;
  flex: none;
  flex-grow: 0;
  order: 0;
  margin: 4px 0;
  ${({theme:e})=>r(e,"background-color","colors.interactive.base.white")};
  width: 5px;
  height: 5px;
`,b=t.div.withConfig({displayName:"SummaryItemLiveLabelAsset"})`
  top: 2px;
  left: 13px;
  flex: none;
  flex-grow: 0;
  order: 1;
  margin: 4px 0;
  height: 15px;
  ${({theme:e})=>s(e,"typography.definitions.globalEditorial.context-tertiary")}
  line-height: 15px;
  ${({theme:e})=>r(e,"color","colors.interactive.base.white")};
`,S=t(d).withConfig({displayName:"SummaryItemCustomMessage"})`
  ${({theme:e})=>s(e,"typography.definitions.globalEditorial.ad-label")}
  ${({theme:e})=>r(e,"color","colors.consumption.body.standard.adlabel")};
  text-align: center;

  ${({theme:e,isRunwayRecommendationSubHed:o})=>o&&`\n        ${s(e,"typography.definitions.globalEditorial.context-secondary")}\n        ${r(e,"color","colors.consumption.body.standard.subhed")}\n      `};
`;S.displayName="SummaryItemCustomMessage",e.exports={SummaryItemSimpleAnchor:c,SummaryItemSimpleHed:u,SummaryItemResponsiveAsset:h,SummaryItemLiveWrapperAsset:g,SummaryItemLiveSpacerAsset:C,SummaryItemLiveEllipseAsset:y,SummaryItemLiveLabelAsset:b,SummaryItemSimpleSubHed:p,SummaryItemCustomMessage:S}}}]);