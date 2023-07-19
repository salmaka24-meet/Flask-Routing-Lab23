(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[4526],{90464:(e,t,i)=>{const n=i(67294),r=i(45697),{useIntl:a}=i(36319),{trackComponent:o}=i(40199),{HiddenCheckbox:l,Overlay:s,Title:d,Text:c,Logo:p,DefaultLogo:g,AgeGateButton:u}=i(35229),{AGE_GATE_ACCEPT:y,AGE_GATE_COOKIE_KEY:m}=i(22830),{hasContentWarnings:h,acceptAgeGatePrompt:f}=i(95833),{getCookie:b}=i(66071),C=i(83506).Z,x=({hed:e,dek:t,acceptLabel:i,declineLabel:r,logo:x,content:w,cookieExpirationInDays:$,brandContentWarnings:v})=>{n.useEffect((()=>{o("AgeGate")}),[]);const{useState:R,useEffect:G}=n,{formatMessage:S}=a(),[E,T]=R(!1);if(G((()=>{const e=!(b(m)===y)&&h({content:w,brandContentWarnings:v});T(e)}),[w,v]),!E)return null;const A=null!=t?t:S(C.ageGateDekText);return n.createElement(n.Fragment,null,n.createElement(l,{id:"age-gate-check"}),n.createElement(s,{id:"age-gate-overlay",role:"dialog","aria-labelledby":"age-gate-title","aria-describedby":"age-gate-description"},x?n.createElement(p,{src:x,alt:e}):n.createElement(g,{width:96,height:96}),n.createElement(d,{as:"h2",id:"age-gate-title"},null!=e?e:S(C.ageGateHedText)),A&&n.createElement(c,{id:"age-gate-description"},A),n.createElement("label",{htmlFor:"age-gate-check",key:"age-gate-label-accept"},n.createElement(u,{inputKind:"link",onClickHandler:()=>((e,t)=>{e(!1),f(t)})(T,$),key:"age-gate-button-accept",dataAttrs:{"data-test-id":"age-gate-button-accept"},label:i||S(C.ageGateAcceptLabel)})),n.createElement(u,{href:"/",inputKind:"link",key:"age-gate-button-decline",dataAttrs:{"data-test-id":"age-gate-button-decline"},label:r||S(C.ageGateDeclineLabel)})))};x.displayName="AgeGate",x.propTypes={acceptLabel:r.string,brandContentWarnings:r.array,content:r.object.isRequired,cookieExpirationInDays:r.number,declineLabel:r.string,dek:r.string,hed:r.string,logo:r.string},x.defaultProps={brandContentWarnings:["sexual_content","drug_content","death_content","alcohol_content"]},e.exports=x},22830:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AGE_GATE_COOKIE_EXPIRATION_IN_DAYS=t.AGE_GATE_COOKIE_KEY=t.AGE_GATE_ACCEPT=void 0,t.AGE_GATE_ACCEPT="accept",t.AGE_GATE_COOKIE_KEY="ageGate",t.AGE_GATE_COOKIE_EXPIRATION_IN_DAYS=28},38134:(e,t,i)=>{const{asConfiguredComponent:n}=i(36380),r=i(90464);e.exports=n(r,"AgeGate")},35229:function(e,t,i){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AgeGateButton=t.Text=t.Title=t.Logo=t.DefaultLogo=t.Overlay=t.HiddenCheckbox=void 0;const r=n(i(51117)),a=i(28657),o=i(79720),l=n(i(18322)),s=i(74327),d=n(i(7279));t.HiddenCheckbox=r.default.input.withConfig({displayName:"AgeGateCheckbox"})``,t.HiddenCheckbox.defaultProps={hidden:!0,type:"checkbox"},t.Overlay=r.default.div.withConfig({displayName:"AgeGateOverlay"})`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  background: ${(0,o.getColorToken)("colors.consumption.lead.inverted.background")};
  padding: 0 1rem;
  width: 100%;
  height: 100%;
  text-align: center;

  ${t.HiddenCheckbox}:checked ~ & {
    display: none;
  }

  @media (min-width: ${a.minThresholds.lg}px) {
    padding: 0 10rem;
  }

  @media (min-width: ${a.minThresholds.xl}px) {
    padding: 0 20rem;
  }
`,t.DefaultLogo=(0,r.default)(l.default.AgeGate).withConfig({displayName:"AgeGateDefaultLogo"})`
  margin: 0 0 ${(0,o.calculateSpacing)(3)};
  fill: ${({theme:e})=>(0,o.getColorToken)(e,"colors.consumption.lead.inverted.heading")};
  width: 96px;
  height: 96px;

  path:first-of-type {
    fill: ${({theme:e})=>(0,o.getColorToken)(e,"colors.consumption.lead.inverted.accent")};
  }
`,t.Logo=r.default.img.withConfig({displayName:"AgeGateLogo"})`
  margin: 0 0 ${(0,o.calculateSpacing)(3)};
  width: 96px;
  height: 96px;
`,t.Title=(0,r.default)(s.BaseText).withConfig({displayName:"AgeGateTitle"})`
  margin: 0 0 ${(0,o.calculateSpacing)(2)};

  & + label,
  & + button {
    margin-top: ${(0,o.calculateSpacing)(2)};
  }
`,t.Title.defaultProps={colorToken:"colors.consumption.lead.inverted.heading",typeIdentity:"typography.definitions.consumptionEditorial.hed-bulletin"},t.Text=(0,r.default)(s.BaseText).withConfig({displayName:"AgeGateText"})`
  margin: 0 0 ${(0,o.calculateSpacing)(4)};
`,t.Text.defaultProps={colorToken:"colors.consumption.lead.inverted.heading",typeIdentity:"typography.definitions.consumptionEditorial.description-core"},t.AgeGateButton=(0,r.default)(d.default.Primary).withConfig({as:"a",displayName:"AgeGateButton"})`
  margin: 0 0 ${(0,o.calculateSpacing)(2)};
`},83506:(e,t,i)=>{const n=i(36319);t.Z=(0,n.defineMessages)({ageGateHedText:{id:"AgeGate.HedText",defaultMessage:"Are you 18 or over?",description:"Age Gate title"},ageGateDekText:{id:"AgeGate.DekText",defaultMessage:"This material is intended for people over the age of 18",description:"Age Gate description"},ageGateAcceptLabel:{id:"AgeGate.AcceptLabel",defaultMessage:"I am 18+",description:"Age Gate accept button label"},ageGateDeclineLabel:{id:"AgeGate.DeclineLabel",defaultMessage:"I'm under 18",description:"Age Gate decline button label"}})},95833:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.acceptAgeGatePrompt=t.hasContentWarnings=void 0;const n=i(22830),{createCookie:r}=i(66071);t.hasContentWarnings=({content:e,brandContentWarnings:t}={})=>{const{contentWarnings:i}=e||{},n=null==t?void 0:t.some((e=>null==i?void 0:i.some((t=>t.slug===e))));return Boolean(n)},t.acceptAgeGatePrompt=e=>{document.cookie=r(n.AGE_GATE_COOKIE_KEY,n.AGE_GATE_ACCEPT,{expirationInMs:864e5*(e||n.AGE_GATE_COOKIE_EXPIRATION_IN_DAYS),path:"/"})}},41761:(e,t,i)=>{const n=i(45697),r=i(67294),a=i(90204),{PaywallInlineBarrierWrapper:o}=i(67541),{trackComponent:l}=i(40199),s=function(e){r.useEffect((()=>{l("PaywallInlineBarrier")}),[]);const{position:t,className:i}=e;return r.createElement(o,{className:i,"data-testid":"PaywallInlineBarrierWrapper"},r.createElement(a,{position:t,aria:{"aria-live":"polite"}}))};s.propTypes={className:n.string,position:n.string},s.defaultProps={position:"paywall-inline-barrier"},e.exports=s},99520:(e,t,i)=>{e.exports=i(41761)},67541:(e,t,i)=>{const{default:n}=i(51117),r=n.aside.withConfig({displayName:"PaywallInlineBarrierWrapper"})`
  width: auto;
  height: auto;

  @media print {
    display: none;
  }
`;e.exports={PaywallInlineBarrierWrapper:r}},71311:(e,t,i)=>{e.exports=i(41261)},41261:(e,t,i)=>{const n=i(46990);e.exports=n},3183:(e,t,i)=>{const{default:n}=i(51117),r=i(46647),{BREAKPOINTS:a,GRID_GAP:o}=i(85326),{applyGridSpacing:l,cssVariablesGrid:s}=i(62470),{calculateSpacing:d,minMaxScreen:c,getColorToken:p,minScreen:g}=i(79720),{SummaryListWrapper:u}=i(41849),y=n.div.withConfig({displayName:"SummaryRiverWrapper"})`
  ${s()}

  ${({isFullBleedMobile:e})=>e&&`\n        ${u} {\n            ${c(0,a.md)} {\n              padding: 0;\n            }\n        }\n    `};
  ${({gridColSpanValue:e,showRecircMostPopularInAsideWithRail:t})=>e>=1&&t?`\n           @media (min-width: calc(${a.lg} - 1px)) {\n                .summary-list  .grid-layout__content {\n                  grid-column: span ${e};\n                }\n              }\n            `:""}

  ${({topSpacingInRem:e})=>e?`\n        ${g(a.md)} {\n          margin-top: ${d(e)};\n        }\n      `:""}
`,m=n(r).withConfig({displayName:"SummaryRiverAd"})`
  margin-bottom: ${d(4)};
`,h=n.div.withConfig({displayName:"SummaryRiverTitleWrapper"})`
  ${l("padding")}
  ${({hasScrollOffset:e})=>e?`scroll-margin-top: ${d(8)};`:""}

  margin-bottom: ${d(4)};

  ${({hasExtraTitlePadding:e})=>e?`\n      @media (min-width: ${a.xxl}) {\n        padding-left: calc(2.5 * var(--grid-margin));\n        padding-right: calc(2.5 * var(--grid-margin));\n      }\n      `:""}

  ${({hasDividerAbove:e})=>e?"":`margin-top: ${d(2)};`}
`,f=n.section.withConfig({displayName:"SummaryRiverSection"})``,b=n.div.withConfig({displayName:"SummaryRiverList"})`
  ${({hasRule:e,theme:t})=>e?`\n        &::before {\n          border-top: 1px solid ${p(t,"colors.discovery.body.white.divider")};\n          content: '';\n          grid-column: 1/-1;\n          margin-bottom: ${d(5-o.md)};\n        }\n      `:""}
`;e.exports={SummaryRiverList:b,SummaryRiverWrapper:y,SummaryRiverAd:m,SummaryRiverSection:f,SummaryRiverTitleWrapper:h}},56267:(e,t,i)=>{const n=i(67294),{useState:r}=i(67294),a=i(45697),o=i(22247),{PaymentGateway:l}=i(28576),{asConfiguredComponent:s}=i(36380),{StickyMidContentAdWrapper:d}=i(66562),c={"300x250":500,"320x100":500,"300x50":500,"320x50":500},p=e=>{const{isStickyEnabled:t}=Object.assign({},e),[i,a]=r(),s=t&&i&&2===i.length?`${i[0]}x${i[1]}`:"0x0";return n.createElement(d,{height:c[s]||null,className:"ad-stickymidcontent"},n.createElement(l,{group:"ads"},n.createElement(o,Object.assign({position:"mid-content",handleAdSizeChange:e=>{a(e)},shouldDisplayLabel:!0},e))))};p.propTypes={isStickyEnabled:a.bool},p.defaultProps={isStickyEnabled:!1},p.displayName="StickyMidContent",e.exports=s(p,"StickyMidContent")},20906:(e,t,i)=>{const n=i(67294),r=i(45697),{trackComponent:a}=i(40199),o=({accountId:e})=>(n.useEffect((()=>{a("BeopScript")}),[]),n.createElement(n.Fragment,null,n.createElement("script",{id:"beop-script",type:"text/javascript",dangerouslySetInnerHTML:{__html:`window.beOpAsyncInit = function () {\n                      window.BeOpSDK.init({\n                        account: '${e}'\n                      });\n                      window.BeOpSDK.watch();\n                  };`}}),n.createElement("script",{id:"beop-sdk",async:!0,src:"https://widget.beop.io/sdk.js"})));o.propTypes={accountId:r.string.isRequired},e.exports=o},22665:(e,t,i)=>{const n=i(20906);e.exports={BeopScript:n}},88928:function(e,t,i){var n=this&&this.__rest||function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]])}return i};const r=i(45697),a=i(67294),o=i(51452),l=i(26669),{trackComponent:s}=i(40199),d=e=>{a.useEffect((()=>{s("PaywallCollaborator")}),[]);const{component:t,name:i,paywall:r}=e,d=n(e,["component","name","paywall"]),c=o[r.strategy],p=r.strategy&&c,g=c&&c.names.includes(i);return p&&g?a.createElement(t,Object.assign({},l.execute(c,e))):a.createElement(t,Object.assign({},d))};d.propTypes={component:r.func.isRequired,name:r.string.isRequired,payment:r.object.isRequired,paywall:r.object.isRequired},e.exports=d},13131:(e,t,i)=>{const n=i(59242),r=i(88928),a=i(44070),o=i(34697),{connectDomain:l}=i(92078),{withIncognitoDetection:s}=i(28685),d=l("user"),c=l("paywall"),p=n([d,l("payment"),c,s]);e.exports={PaywallCollaborator:p(r),withArticleTruncation:a,withGalleryTruncation:o}},44070:(e,t,i)=>{const n=i(45697),r=i(67294);e.exports=(e,t)=>{const i=e.displayName||e.name,a=e=>"object"==typeof e&&"p"===e[0],o=(e,t)=>e.filter(((i,n)=>((e,t)=>e.slice(0,t).filter(a).length)(e,n)<t)),l=i=>{const{[t]:n,shouldTruncate:a,paywall:{gateway:l={},paragraphLimit:s}={}}=i,d=n&&(l.shouldTruncate||a)&&(l.paragraphLimit>=0||s>=0);return r.createElement(e,Object.assign({},i,{[t]:d?o(n,l.paragraphLimit||s):n}))};return l.propTypes={[t]:n.array.isRequired,paywall:n.shape({gateway:n.shape({paragraphLimit:n.number,shouldTruncate:n.bool}),paragraphLimit:n.number}),shouldTruncate:n.bool},l.displayName=`withArticleTruncation(${i})`,l}},34697:(e,t,i)=>{const n=i(45697),r=i(67294);e.exports=(e,t)=>{const i=e.displayName||e.name,a=(e,t)=>e.map((i=>i.filter((i=>((e,t)=>e.flat().indexOf(t))(e,i)<t)))).filter(((e,t)=>e.length>0||0===t)),o=i=>{const{[t]:n,shouldTruncate:o,paywall:{gateway:l={},gallerySlideLimit:s}={}}=i,d=n&&(l.shouldTruncate||o)&&(l.gallerySlideLimit>=0||s>=0);return r.createElement(e,Object.assign({},i,{[t]:d?a(n,l.gallerySlideLimit||s):n}))};return o.propTypes={[t]:n.array.isRequired,paywall:n.shape({gateway:n.shape({gallerySlideLimit:n.number,shouldTruncate:n.bool}),gallerySlideLimit:n.number}).isRequired,shouldTruncate:n.bool},o.displayName=`withGalleryTruncation(${i})`,o}},78046:(e,t,i)=>{const n=i(67294),r=i(94184),a=i(45697),{connect:o}=i(59800),{useIntl:l}=i(36319),s=i(52257).Z,d=i(98288),c=i(92170),{getVariationNames:p}=i(95545),g=i(22247),{PaymentGateway:u}=i(28576),{maxThresholds:y}=i(28657),{useResizeObserver:m}=i(26447),{useAnalytics:h,analyticsTextConstant:f}=i(25008),{GalleryCarouselContainer:b,GalleryCarouselHeader:C,GalleryCarouselTitle:x,GalleryCarouselTitleText:w,GalleryCarouselHeaderRecirc:$,GalleryCarouselNextWrapper:v,GalleryCarouselPrevWrapper:R,GalleryCarouselNavigation:G,GalleryCarouselCountWrapper:S,GalleryCarouselCount:E,GalleryCarouselContent:T,GalleryCarouselSlider:A,GalleryCarouselSliderWrapper:_}=i(47326),{MidRecirc:I,EndRecirc:B,NewsletterRecirc:P}=i(60739),O=({carouselPlacedIn:e,dangerousNavigationIcon:t,isModalOpen:i,items:a,responsiveCartoonVariation:o,shouldDisableImageClick:c,shouldHoldImageSpace:p,shouldImageLazyLoad:O,shouldUseMediumBreakpoint:N,shouldUseModalStyle:k,showHeadRecirc:M,showPublishedDate:H,title:L,titleLinkURL:W,user:D})=>{const{formatMessage:j}=l(),[q,V]=n.useState(0),[U,K]=n.useState(0),[F,X]=n.useState(0),[z,Z]=n.useState(!1),[Y,J]=n.useState(!1),[Q,ee]=n.useState(!1),te=()=>{if(window){const e=window.matchMedia(`(max-width: ${y.lg}px)`);return Boolean(null==e?void 0:e.matches)}return!1};m((()=>J(te())));const ie=n.useRef(),[ne,re]=n.useState({action:new Array(2).fill(!1),slide:new Array(2).fill(null)}),ae=a.length-1,oe=F===ae,le=a.length>0&&a[ae].hasEndRecirc&&a[ae].recircGalleries[0]&&Boolean(a[ae].recircGalleries[0].url)&&Boolean(a[ae].recircGalleries[0].dangerousHed),se=M&&le&&!oe,de=se?a[ae].recircGalleries[0]:{},ce={carouselPlacedIn:e,currentSlideIndex:F,getIsSmallDevice:te,hasHeadRecirc:se,headRecircGallery:de,isModalOpen:i,slides:a,titleRef:ie},{triggerCartoonInteraction:pe,triggerMobileRecircImpression:ge,triggerNewsletterInteraction:ue,triggerRecircInteraction:ye}=h(ce);n.useEffect((()=>J(te())),[]),n.useEffect((()=>{const e={action:new Array(2).fill(!1),slide:new Array(2).fill(null)},t=F+1,i=F-1;i>=0&&(e.action[0]=!0,a[i].hidePreview||(e.slide[0]=i)),t<a.length&&(e.action[1]=!0,a[t].hidePreview||(e.slide[1]=t)),re(e)}),[F,a]),n.useEffect((()=>{if(!k){const e=document.querySelector('[class^="StackedNavigationTop"]');V((null==e?void 0:e.offsetHeight)||0)}}),[k]),n.useEffect((()=>{(null==D?void 0:D.isAuthenticated)&&Boolean(null==D?void 0:D.email)&&!Q&&ee(!0)}),[null==D?void 0:D.isAuthenticated,null==D?void 0:D.email,Q]);const me=e=>{e>=0&&e<a.length&&(Z(!0),K(e),pe(e))};if(!(Array.isArray(a)&&a.length>0))return null;const he=W?{href:W,target:"_blank"}:{as:"span"};return n.createElement(b,{shouldUseModalStyle:k,headerHeight:q,key:Q},n.createElement(C,{shouldUseModalStyle:k},n.createElement(x,{ref:ie},n.createElement(w,Object.assign({},he,{dangerouslySetInnerHTML:{__html:L}}))),se&&n.createElement($,{onClick:e=>((e,t)=>{e.preventDefault(),ye(f.headRecirc,t),window.open(t.url,"_blank","noopener,noreferrer")})(e,de),href:de.url,dangerouslySetInnerHTML:{__html:`${j(s.nextGallery)}: ${de.source.hed} »`}})),n.createElement(_,null,n.createElement(A,{isEndGalleryRecircCardOnMobile:!k},n.createElement(R,{isHidden:!ne.action[0]},n.createElement(G,{"aria-hidden":!ne.action[0],"aria-label":j(s.previous),dangerouslySetInnerHTML:{__html:t},onClick:()=>me(F-1),isRotated:!0})),n.createElement(v,{isHidden:!ne.action[1]},n.createElement(G,{"aria-hidden":!ne.action[1],"aria-label":j(s.next),dangerouslySetInnerHTML:{__html:t},onClick:()=>me(F+1)})),n.createElement(S,null,n.createElement(E,null,`${F+1}/${a.length}`)),a.map(((t,i)=>{var l;return n.createElement(T,{key:i,"data-testid":`GalleryCarouselContent__slide_${i+1}`,className:r(t.className,{"fade-in":!z&&i===F,"fade-out":z&&i===F,"fade-in-sequence":!z&&ne.slide.includes(i),"fade-out-sequence":z&&ne.slide.includes(i),"current-slide":i===F,"prev-slide":i===ne.slide[0],"next-slide":i===ne.slide[1],"last-slide":i===ae,"has-end-recirc":Boolean(null==t?void 0:t.hasEndRecirc),"is-mid-recirc-slide":Boolean(null==t?void 0:t.isMidRecirc),"is-ad-slide":Boolean(null==t?void 0:t.isAd),"is-newsletter-slide":Boolean(null==t?void 0:t.isNewsletter),"is-content-slide":Boolean(null==t?void 0:t.isContent),"is-xl-recirc-slide":Boolean(null==t?void 0:t.isXLGalleryRecirc)}),onAnimationEnd:()=>(e=>{z&&e===F&&(X(U),Z(!1))})(i),"aria-hidden":i!==F},(null==t?void 0:t.isNewsletter)&&n.createElement(P,{index:i,isSmallDevice:Y,newsletter:t.newsletter,onInteractionAnalytics:ue,onMobileImpressionAnalytics:ge,user:D}),(null==t?void 0:t.isAd)&&n.createElement(u,{group:"ads"},n.createElement(g,{position:"mid-gallery"})),(null==t?void 0:t.isMidRecirc)&&n.createElement(I,{index:i,isSmallDevice:Y,recircGalleries:t.recircGalleries,onInteractionAnalytics:ye,onMobileImpressionAnalytics:ge}),["cartoon","photo"].includes((null==t?void 0:t.contentType)||"")&&n.createElement(d,Object.assign({key:t.id},t.image||t,{isLazy:O,responsiveCartoonVariation:o,shouldDisableImageClick:c,shouldHoldImageSpace:p,shouldUseMediumBreakpoint:N,showPublishedDate:H,analyticsData:{cartoonPlacement:e,cartoonPosition:i+1,totalNumberOfCartoons:a.length,galleryTitle:(null===(l=ie.current)||void 0===l?void 0:l.innerText)||"",isSmallDevice:Y}})),(null==t?void 0:t.hasEndRecirc)&&n.createElement(B,{index:i,isSmallDevice:Y,recircGalleries:t.recircGalleries,onInteractionAnalytics:ye,onMobileImpressionAnalytics:ge,shouldUseModalStyle:k}))})))))};O.propTypes={carouselPlacedIn:a.oneOf(["gallery","modal"]),dangerousNavigationIcon:a.string,isModalOpen:a.bool,items:a.array.isRequired,responsiveCartoonVariation:a.oneOf(p(c)),shouldDisableImageClick:a.bool,shouldHoldImageSpace:a.bool,shouldImageLazyLoad:a.bool,shouldUseMediumBreakpoint:a.bool,shouldUseModalStyle:a.bool,showHeadRecirc:a.bool,showPublishedDate:a.bool,title:a.string,titleLinkURL:a.string,user:a.shape({isAuthenticated:a.bool.isRequired,email:a.string})},O.defaultProps={carouselPlacedIn:"modal",dangerousNavigationIcon:'<svg focusable="false" viewBox="0 0 32 32" width="32" height="32" xmlns="http://www.w3.org/2000/svg" > <path d="M22.33 15.5l-6.924-6.925.707-.707L24.245 16l-8.132 8.132-.707-.707 6.925-6.925H8v-1z" fillRule="nonzero"/> </svg>',responsiveCartoonVariation:"SliderCartoon",shouldDisableImageClick:!0,shouldHoldImageSpace:!1,shouldImageLazyLoad:!0,shouldUseMediumBreakpoint:!0,shouldUseModalStyle:!1,showHeadRecirc:!0,showPublishedDate:!1,title:"",titleLinkURL:""},e.exports=o((e=>({isModalOpen:e.isModalOpen||!1,user:e.user})))(O)},60739:(e,t,i)=>{const n=i(67294),r=i(45697),a=i(11482),{EndOfPageRecirc:o}=a,l=i(43625),s=i(92727),{analyticsTextConstant:d}=i(25008),{GalleryCarouselNewsletterWrapper:c,GalleryCarouselMidRecircWrapper:p,GalleryCarouselEndRecircWrapper:g}=i(47326),u=(e,t,i)=>e?{as:s,onIntersectionViewport:t,analyticsData:i}:{},y=({index:e,isSmallDevice:t,isTextFieldAlwaysStacked:i,newsletter:r,newsletterType:a,onInteractionAnalytics:o,onMobileImpressionAnalytics:s,user:p})=>{const g=u(t,s,{index:e,placement:d.newsletter,newsletter:r});return n.createElement(c,Object.assign({},g),n.createElement(l,Object.assign({newsletterType:a,isTextFieldAlwaysStacked:i,enableSlimUnitToggle:Boolean((null==p?void 0:p.isAuthenticated)&&(null==p?void 0:p.email)),userEmail:null==p?void 0:p.email},r||{},{onSuccessHandler:()=>o(r),patternType:"utility"})))};y.propTypes={index:r.number.isRequired,isSmallDevice:r.bool,isTextFieldAlwaysStacked:r.bool,newsletter:r.object.isRequired,newsletterType:r.string,onInteractionAnalytics:r.func,onMobileImpressionAnalytics:r.func,user:r.shape({isAuthenticated:r.bool.isRequired,email:r.string})},y.defaultProps={isSmallDevice:!1,isTextFieldAlwaysStacked:!0,newsletterType:"slim-newsletter",onInteractionAnalytics:()=>{},onMobileImpressionAnalytics:()=>{}};const m=({index:e,isSmallDevice:t,recircGalleries:i,onInteractionAnalytics:r,onMobileImpressionAnalytics:o})=>{const l=u(t,o,{index:e,placement:d.midRecirc,recircGalleries:i});return n.createElement(p,Object.assign({},l),n.createElement(a,{items:i,recircInteractionAnalytics:t=>r(d.midRecirc,t,e)}))};m.propTypes={index:r.number.isRequired,isSmallDevice:r.bool,onInteractionAnalytics:r.func,onMobileImpressionAnalytics:r.func,recircGalleries:r.array.isRequired},m.defaultProps={isSmallDevice:!1,onInteractionAnalytics:()=>{},onMobileImpressionAnalytics:()=>{}};const h=({index:e,isSmallDevice:t,recircGalleries:i,onInteractionAnalytics:r,onMobileImpressionAnalytics:a,shouldUseModalStyle:l})=>{const s=u(t,a,{index:e,placement:d.endRecirc,recircGalleries:i});return n.createElement(g,Object.assign({},s),n.createElement(o,{items:i,showCropViewOnMobile:l,recircInteractionAnalytics:t=>r(d.endRecirc,t,e)}))};h.propTypes={index:r.number.isRequired,isSmallDevice:r.bool,onInteractionAnalytics:r.func,onMobileImpressionAnalytics:r.func,recircGalleries:r.array.isRequired,shouldUseModalStyle:r.bool},h.defaultProps={isSmallDevice:!1,onInteractionAnalytics:()=>{},onMobileImpressionAnalytics:()=>{},shouldUseModalStyle:!1},e.exports={MidRecirc:m,EndRecirc:h,NewsletterRecirc:y}},7891:(e,t,i)=>{const{asConfiguredComponent:n}=i(36380),r=i(78046);e.exports=n(r,"GalleryCarousel")},47326:(e,t,i)=>{const{default:n,css:r,keyframes:a}=i(51117),{minScreen:o,maxScreen:l,calculateSpacing:s,getColorStyles:d}=i(79720),{maxThresholds:c}=i(28657),{BaseText:p,BaseWrap:g,BaseInput:u,BaseLink:y}=i(74327),{ResponsiveImageContainer:m,ResponsiveImagePicture:h}=i(7230),{SpanWrapper:f}=i(89676),{ResponsiveCartoonWrapper:b,ResponsiveCartoonCredit:C,ResponsiveCartoonCaption:x,ResponsiveCartoonCTAWrapper:w}=i(94007),{GalleryRecircGridWrapper:$,GalleryRecircViewGalleryCTA:v}=i(21123),{AdWrapper:R}=i(66562),{NewsletterSlimLoggedInWrapper:G,NewsletterSlimLoggedInDisclaimer:S}=i(25505),{NewsletterSubscribeFormWrapper:E,NewsletterSubscribeFormDisclaimer:T}=i(42793),{BREAKPOINTS:A}=i(85326),_=a`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,I=a`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,B=a`
  from {
    opacity: 0;
  }

  to {
    opacity: .2;
  }
`,P=a`
  from {
    opacity: .2;
  }

  to {
    opacity: 0;
  }
`,O=n(g).withConfig({displayName:"GalleryCarouselContainer"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  ${({shouldUseModalStyle:e,headerHeight:t})=>!e&&r`
      ${o(`${c.lg+1}px`)} {
        margin-top: ${s(2)};
        min-height: calc(100vh - ${t}px);
      }
    `}
`,N=n(g).withConfig({displayName:"GalleryCarouselHeader"})`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: ${s(2.5)} 0;
  text-align: center;

  ${l(`${c.lg}px`)} {
    ${({shouldUseModalStyle:e})=>e?r`
            margin-bottom: ${s(3)};
            padding: 0;
            min-height: ${s(10)};
          `:r`
            padding: ${s(5)} 0;
          `}
  }
`,k=n(p).withConfig({displayName:"GalleryCarouselTitle"})`
  span {
    cursor: unset;

    :hover {
      text-decoration: none;
    }
  }
  ${l(`${c.lg}px`)} {
    width: ${s(24.75)};
  }
`;k.defaultProps={as:"h1",typeIdentity:"typography.definitions.globalEditorial.context-primary"};const M=n(y).withConfig({displayName:"GalleryCarouselTitleText"})``;M.defaultProps={as:"a",hasUnderline:!1,typeIdentity:"typography.definitions.globalEditorial.context-primary"};const H=n(p).withConfig({displayName:"GalleryCarouselHeaderRecirc"})`
  position: absolute;
  right: ${s(8)};
  text-decoration: none;

  :hover {
    text-decoration: underline;
    ${({theme:e})=>d(e,"color","colors.interactive.base.dark")};
  }

  ${l(`${c.lg}px`)} {
    display: none;
  }
`;H.defaultProps={as:"a",colorToken:"colors.interactive.base.brand-primary",typeIdentity:"typography.definitions.foundation.link-primary"};const L=r`
  display: flex;
  grid-row: 1;
  align-self: flex-start;
  height: ${s(64)};

  ${({isHidden:e})=>e&&r`
      visibility: hidden;
    `}

  ${l(`${c.lg}px`)} {
    display: none;
  }
`,W=n(g).withConfig({displayName:"GalleryCarouselNextWrapper"})`
  ${L};
  grid-column: 11/12;
  justify-content: start;
`,D=n(g).withConfig({displayName:"GalleryCarouselPrevWrapper"})`
  ${L};
  grid-column: 2/3;
  justify-content: end;
`,j=n.button.withConfig({displayName:"GalleryCarouselNavigation"})`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(0);
  transition: transform 0.3s ease;
  background: transparent;
  min-width: ${s(7.5)};

  svg {
    path {
      ${d("fill","colors.interactive.base.black")};
    }
  }

  :hover {
    transform: translateX(${s(1)});
  }

  ${({isRotated:e})=>e&&r`
      svg {
        transform: rotate(180deg);
      }

      :hover {
        transform: translateX(${s(-1)});
      }
    `}
`,q=n(g).withConfig({displayName:"GalleryCarouselCountWrapper"})`
  display: flex;
  grid-column: 10;
  grid-row: 1;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-radius: ${s(10)};
  width: ${s(6)};
  height: ${s(4)};
  ${({theme:e})=>d(e,"border-color","colors.interactive.base.light")};

  ${l(`${c.lg}px`)} {
    display: none;
  }
`,V=n(p).withConfig({displayName:"GalleryCarouselCount"})`
  text-align: center;
  line-break: normal;
`;V.defaultProps={as:"p",colorToken:"colors.interactive.base.dark",typeIdentity:"typography.definitions.globalEditorial.numerical-small"};const U=n.div.withConfig({displayName:"GalleryCarouselContent"})`
  display: none;
  position: relative;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  cursor: auto;
  width: 100%;
  min-height: ${s(64)};

  ${R} {
    margin: auto;
  }

  ${b} {
    border: none;
    padding: 0;
    justify-items: unset;
    max-width: ${s(70)};

    .responsive-cartoon__caption,
    .responsive-cartoon__credit {
      overflow: hidden;
    }

    ${h} {
      cursor: zoom-in;
      text-align: center;
    }

    ${m} {
      width: auto;
      max-width: 100%;
      height: auto;
      max-height: ${s(40.5)};
    }

    ${h}, ${x}, ${C} {
      cursor: auto;
      max-width: unset;
    }
  }

  ${l(`${c.lg}px`)} {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: ${s(31.25)};

    ${b} {
      ${m} {
        width: ${s(40.5)};
        height: auto;
        max-height: none;
      }
    }
  }
`,K=r`
  display: flex;
  grid-row: 1;
  align-items: center;
  overflow: hidden;

  ${b} {
    ${h} {
      height: 100%;
    }
  }

  ${f} {
    position: absolute;
    min-width: ${s(100)};
  }

  ${w} {
    display: none;
  }
`,F=n(g).withConfig({displayName:"GalleryCarouselSlider"})`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 0 auto;
  cursor: auto;
  width: 100%;
  max-width: none;
  gap: 0;

  ${o(`${c.lg+1}px`)} {
    height: ${s(64)};

    .fade-in {
      animation: ${_} ease-in-out 300ms forwards;
    }

    .fade-out {
      animation: ${I} ease-in-out 300ms forwards;
    }

    .fade-in-sequence {
      animation: ${B} ease-in-out 300ms forwards;
    }

    .fade-out-sequence {
      animation: ${P} ease-in-out 300ms forwards;
    }

    .current-slide {
      display: flex;
      grid-column: 4/10;
      grid-row: 1;

      ${f} {
        align-self: center;
      }
    }

    .prev-slide {
      ${K};
      grid-column: 1/2;

      ${b} {
        margin-right: 0;
        ${h} {
          text-align: right;
        }
      }

      ${f} {
        right: 0;
      }
    }

    .next-slide {
      ${K};
      grid-column: 12/-1;

      ${b} {
        margin-left: 0;
        ${h} {
          text-align: left;
        }
      }

      ${f} {
        left: 0;
      }
    }

    .has-end-recirc {
      ${$} {
        display: none;
      }
    }

    .has-end-recirc.current-slide {
      position: unset;

      ${$} {
        display: grid;
        position: relative;
        right: 0;
        padding-top: ${s(7)};
        width: auto;
      }
    }
  }

  ${l(`${c.lg}px`)} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0 ${s(3)};
    gap: 0;

    ${U} {
      border-bottom: 1px solid;
      padding-top: ${s(7)};
      padding-bottom: ${s(7)};

      ${({theme:e})=>d(e,"border-color","colors.interactive.base.light")};

      ${b} {
        border: none;
        padding: 0;
      }
    }

    .last-slide {
      border-bottom: none;
    }

    .has-end-recirc {
      padding-bottom: 0;

      ${v} {
        grid-column: 1 / 8;
        grid-row: 1;
        text-align: center;
      }

      ${({isEndGalleryRecircCardOnMobile:e})=>e&&`\n        ${$} {\n          padding-top: ${s(2)};\n          padding-bottom: ${s(7)};\n        }\n      `}
    }

    .is-newsletter-slide {
      min-height: auto;
    }
  }
`,X=n(g).withConfig({displayName:"GalleryCarouselSliderWrapper"})`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`,z=n(g).withConfig({displayName:"GalleryCarouselNewsletterWrapper"})`
  margin: auto;
  width: 100%;
  max-width: ${s(40.875)};

  ${G}, ${E} {
    margin: 0;
  }

  ${G} {
    ${S} p {
      margin-bottom: 0;
    }
  }

  ${E} {
    ${u} {
      padding: ${s(1)} ${s(1.5)};
    }

    ${T} p {
      margin-bottom: 0;
    }
  }

  ${l(`${c.lg}px`)} {
    max-width: unset;
  }
`;z.defaultProps={as:"div"};const Z=n.div.withConfig({displayName:"GalleryCarouselMidRecircWrapper"})`
  ${l(`${c.lg}px`)} {
    width: 100%;
  }

  margin: auto;
`;Z.defaultProps={as:"div"};const Y=n.div.withConfig({displayName:"GalleryCarouselEndRecircWrapper"})`
  ${o(A.lg)} {
    position: absolute;
    right: 0;
  }

  ${l(`${c.lg}px`)} {
    padding-top: ${s(5)};
    width: 100%;
  }
`;Y.defaultProps={as:"div"},e.exports={GalleryCarouselContainer:O,GalleryCarouselEndRecircWrapper:Y,GalleryCarouselHeader:N,GalleryCarouselTitle:k,GalleryCarouselTitleText:M,GalleryCarouselHeaderRecirc:H,GalleryCarouselNextWrapper:W,GalleryCarouselPrevWrapper:D,GalleryCarouselNavigation:j,GalleryCarouselCountWrapper:q,GalleryCarouselCount:V,GalleryCarouselContent:U,GalleryCarouselSlider:F,GalleryCarouselSliderWrapper:X,GalleryCarouselNewsletterWrapper:z,GalleryCarouselMidRecircWrapper:Z}},52257:(e,t,i)=>{const n=i(36319);t.Z=(0,n.defineMessages)({next:{id:"GalleryCarousel.Next",defaultMessage:"Next",description:"Next icon title"},previous:{id:"GalleryCarousel.Previous",defaultMessage:"Previous",description:"Previous icon title"},nextGallery:{id:"GalleryCarousel.NextGallery",defaultMessage:"Next gallery",description:"Next gallery link prefix"}})},25008:(e,t,i)=>{const n=i(67294),r=i(78718),a=i(45697),{googleAnalytics:o}=i(28601),l={newsletter:"newsletter",headRecirc:"toprightlink",midRecirc:"mid content",endRecirc:"end content",backToArticle:"back to article"},s=({carouselPlacedIn:e,currentSlideIndex:t,getIsSmallDevice:i,hasHeadRecirc:a,headRecircGallery:s,isModalOpen:d,slides:c,titleRef:p})=>{const[g,u]=n.useReducer(((e,t)=>Array.isArray(t)?(t.forEach((t=>e.add(t))),e):e.add(t)),new Set),y=(e=null)=>`${(null!=e?e:t)+1}/${c.length}`,m=(i=[])=>{var n,a;const o={cartoon_placement:e,gallery_title:(null===(n=null==p?void 0:p.current)||void 0===n?void 0:n.innerText)||"",cartoon_id:(null===(a=c[t])||void 0===a?void 0:a.id)||"",cartoon_numbering:y()};return r(o,i)},h=(e,t=[],i={})=>{o.emitGoogleTrackingEvent(e,Object.assign(Object.assign({},m(t)),i))},f=(e,t=[],i=null)=>{h("cartoon-impression-recirculation",["cartoon_placement","gallery_title"],{content_recirculation_placement:e,cartoon_numbering:y(i),gallery_id:t.map((e=>e.id)).join(" | ")})},b=(e,t=null)=>{h("cartoon-impression-newsletter",["cartoon_placement","gallery_title"],{cartoon_newsletter_id:null==e?void 0:e.newsletterId,cartoon_numbering:y(t)})};return n.useEffect((()=>{a&&f(l.headRecirc,[s])}),[]),n.useEffect((()=>{d||"modal"!==e||h("cartoon-interaction",["cartoon_placement","gallery_title","cartoon_id"],{cartoon_interaction:l.backToArticle})}),[d]),n.useEffect((()=>{var e,n,r,a;const o=i(),{recircGalleries:s,newsletter:d}=c[t],p=Boolean(null===(e=c[t])||void 0===e?void 0:e.isMidRecirc),y=Boolean(null===(n=c[t])||void 0===n?void 0:n.hasEndRecirc),m=Boolean(null===(r=c[t])||void 0===r?void 0:r.isNewsletter),C=Boolean(null===(a=c[t])||void 0===a?void 0:a.isContent),x=g.has(t),w=[];o||(x||(p&&(w.push(t),f(l.midRecirc,s)),m&&(w.push(t),b(d)),C&&(w.push(t),h("cartoon-impression",["cartoon_placement","gallery_title","cartoon_id","cartoon_numbering"]))),y&&!g.has(l.endRecirc)&&(w.push(l.endRecirc),f(l.endRecirc,s)),w.length&&u(w))}),[t]),{extractAnalyticsData:m,triggerCartoonInteraction:e=>{h("cartoon-interaction",["cartoon_placement","gallery_title","cartoon_id"],{cartoon_interaction:e>t?"next":"previous"})},triggerMobileRecircImpression:(e,i,n={})=>{const r=[l.midRecirc,l.endRecirc,l.newsletter],a=g.has(t),{index:o=null,recircGalleries:s,placement:d,newsletter:c}=n;e&&!a&&r.includes(d)&&(d===l.newsletter?(u(o),b(c,o)):d===l.midRecirc?(u(o),f(l.midRecirc,s,o)):(u(l.endRecirc),f(d,s,o)),i())},triggerNewsletterInteraction:e=>{h("cartoon-interaction-newsletter",["cartoon_placement","gallery_title","cartoon_id"],{content_newsletter_placement:l.midRecirc,content_newsletter_title:(null==e?void 0:e.dangerousHed)||""})},triggerRecircInteraction:(e,t={},i=null)=>{h("cartoon-interaction-recirculation",["cartoon_placement","gallery_title","cartoon_id"],{content_recirculation_placement:e,content_recirculation_title:(null==t?void 0:t.dangerousHed)||"",cartoon_numbering:y(i)})}}};s.propTypes={carouselPlacedIn:a.oneOf(["gallery","modal"]).isRequired,currentSlideIndex:a.number.isRequired,getIsSmallDevice:a.func.isRequired,hasHeadRecirc:a.bool.isRequired,headRecircData:a.object.isRequired,isModalOpen:a.bool.isRequired,slides:a.array.isRequired,titleRef:a.oneOfType([a.func,a.shape({current:a.any})]).isRequired},e.exports={useAnalytics:s,analyticsTextConstant:l}},62171:(e,t,i)=>{const n=i(45697),r=i(67294),{useIntl:a}=i(36319),o=i(63030),{GalleryRecircGridWrapper:l,GalleryRecircContentWrapper:s,GalleryRecircContent:d,GalleryMidRecircHeading:c,GalleryRecircTitle:p,GalleryRecircImage:g,GalleryEndRecircHeading:u,GalleryRecircTextWrapper:y,GalleryRecircViewGalleryCTA:m}=i(21123),h=i(93788).Z,f=({isEndOfPageRecirc:e,items:t,showCropViewOnMobile:i,recircInteractionAnalytics:n})=>{const{formatMessage:o}=a();if(!t.length)return null;const f=o(e?h.viewNextGalleryCTAText:h.viewGalleryCTAText);return r.createElement(l,{isEndOfPageRecirc:e},!e&&r.createElement(c,null,o(h.midGalleryRecircHeading)),t.map(((t,a)=>r.createElement(s,{isEndOfPageRecirc:e,key:t.id||a},r.createElement(d,{href:t.url,isEndOfPageRecirc:e,showCropViewOnMobile:i,"data-testid":"GalleryRecircContent",onClick:e=>((e,t)=>{e.preventDefault(),n&&n(t),window.open(t.url,"_blank","noopener,noreferrer")})(e,t)},r.createElement(y,{isEndOfPageRecirc:e},e&&r.createElement(u,{"data-testid":"GalleryEndRecircHeading"},o(h.keepOnLaughingText)),r.createElement(p,{"data-testid":"GalleryRecircTitle",isEndOfPageRecirc:e,dangerouslySetInnerHTML:{__html:t.source.hed}}),r.createElement(m,{"data-testid":"GalleryRecircViewGalleryCTA",dangerouslySetInnerHTML:{__html:f}})),r.createElement(g,Object.assign({isEndOfPageRecirc:e,"data-testid":"GalleryRecircImage"},t.items[0])),e&&r.createElement(u,{"data-testid":"GalleryEndRecircHeading"},o(h.keepOnLaughingText)))))))};f.propTypes={isEndOfPageRecirc:n.bool,items:n.arrayOf(n.shape({dangerousHed:n.string,url:n.string,items:n.arrayOf(n.shape({altText:n.string,dangerousCaption:n.string,dangerousCredit:n.string,isDesktopPortrait:n.bool,segmentedSources:o.propTypes.segmentedSources,sources:o.propTypes.sources,links:n.arrayOf(n.shape({behavior:n.string,label:n.string.isRequired,url:n.string,network:n.string})),tagCloud:n.shape({tags:n.arrayOf(n.shape({tag:n.string.isRequired,url:n.string})),sectionHeader:n.string})}))}).isRequired).isRequired,recircInteractionAnalytics:n.func,showCropViewOnMobile:n.bool},f.defaultProps={isEndOfPageRecirc:!1,showCropViewOnMobile:!1},f.displayName="GalleryRecircCards",e.exports=f},11482:(e,t,i)=>{e.exports=i(38224)},21123:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GalleryRecircViewGalleryCTA=t.GalleryRecircTextWrapper=t.GalleryRecircTitle=t.GalleryRecircImage=t.GalleryEndRecircHeading=t.GalleryMidRecircHeading=t.GalleryRecircGridWrapper=t.GalleryRecircContent=t.GalleryRecircContentWrapper=void 0;const{css:n,default:r}=i(51117),a=i(63030),{calculateSpacing:o,getColorToken:l,minMaxScreen:s,maxScreen:d,minScreen:c}=i(79720),{maxThresholds:p}=i(28657),{BaseWrap:g,BaseText:u}=i(74327),{BREAKPOINTS:y}=i(85326),m=r.div.withConfig({displayName:"GalleryRecircGridWrapper"})`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-row-gap: ${o(2)};
  margin: auto;
  max-width: ${o(54)};
  height: auto;

  ${d(`${p.lg}px`)} {
    max-width: unset;
  }

  ${({isEndOfPageRecirc:e})=>e&&n`
      grid-template-rows: repeat(1, 1fr);
      grid-row-gap: 0;
      justify-content: end;
      max-width: unset;

      ${d(`${p.lg}px`)} {
        grid-template-columns: repeat(1, 1fr);
      }
    `}
`;t.GalleryRecircGridWrapper=m;const h=r.div.withConfig({displayName:"GalleryRecircContentWrapper"})`
  ${({isEndOfPageRecirc:e})=>e&&n`
      display: flex;
      justify-self: center;

      ${d(`${p.lg}px`)} {
        width: 100%;
      }

      ${c(`${p.lg+1}px`)} {
        transition: width 0.3s ease;
        border: 1px solid
          ${l("colors.consumption.body.standard.divider")};
        border-right: none;
        border-radius: ${o(2)};
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        width: ${o(29)};

        &:hover {
          width: ${o(33)};
        }
      }
    `}
`;t.GalleryRecircContentWrapper=h;const f=r(u).withConfig({displayName:"GalleryRecircTitle"})`
  padding-right: ${o(2)};

  ${({isEndOfPageRecirc:e})=>e&&n`
      margin-bottom: ${o(1)};

      ${d(`${p.lg}px`)} {
        grid-column: 1/8;
        grid-row: 2;
        padding-right: 0;
        text-align: center;
      }
    `}
`;t.GalleryRecircTitle=f,f.defaultProps={as:"h3",colorToken:"colors.consumption.body.standard.subhed",typeIdentity:"typography.definitions.globalEditorial.context-primary"};const b=r(u).withConfig({displayName:"GalleryRecircViewGalleryCTA"})`
  :hover {
    text-decoration: underline;
  }
`;t.GalleryRecircViewGalleryCTA=b,b.defaultProps={as:"span",colorToken:"colors.interactive.base.brand-primary",typeIdentity:"typography.definitions.foundation.link-primary"};const C=r(g).withConfig({displayName:"GalleryRecircTextWrapper"})`
  display: grid;
  grid-column: 1/9;
  grid-row: 1/-1;
  flex-direction: column;
  align-items: start;
  gap: ${o(1)};

  ${({isEndOfPageRecirc:e})=>e&&n`
      gap: 0;
      display: flex;
      grid-column: 1/-1;
      grid-row: 3;
      justify-content: center;

      ${d(`${p.lg}px`)} {
        grid-column: 1/8;
        grid-row: 2;
        align-items: center;
      }

      ${s(y.md,`${p.lg}px`)} {
        align-items: start;
        width: 100%;
      }
    `}
`;t.GalleryRecircTextWrapper=C;const x=r(a).withConfig({displayName:"GalleryRecircImage"})`
  display: grid;
  grid-column: 9/-1;
  grid-row: 1/3;
  justify-content: flex-end;
  margin: auto;

  img {
    max-width: ${o(15.5)};
    overflow: hidden;

    ${d(`${p.lg}px`)} {
      max-width: ${o(11.25)};
    }
  }

  ${({isEndOfPageRecirc:e})=>e&&n`
      grid-column: 1/-1;
      grid-row: 2;
      justify-content: start;
      margin-bottom: ${o(2)};

      img {
        max-width: ${o(21)};
      }

      ${d(`${p.lg}px`)} {
        display: grid;
        grid-column: 8/-1;
        grid-row: 1/-1;
        justify-content: end;
        margin: auto;
        margin-left: ${o(1)};
        overflow: hidden;
        justify-items: center;

        img {
          max-width: ${o(15.5)};
        }
      }
    `}
`;t.GalleryRecircImage=x;const w=r(u).withConfig({displayName:"GalleryEndRecircHeading"})`
  grid-column: 1/-1;
  grid-row: 1;
  padding-bottom: ${o(2)};

  ${d(`${p.lg}px`)} {
    padding-bottom: ${o(1)};
  }

  ${s(y.md,`${p.lg}px`)} {
    width: 100%;
  }
`;t.GalleryEndRecircHeading=w,w.defaultProps={as:"h4",colorToken:"colors.consumption.body.standard.display-texture",typeIdentity:"typography.definitions.globalEditorial.context-secondary"};const $=r(u).withConfig({displayName:"GalleryMidRecircHeading"})`
  grid-column: 1/-1;
  grid-row: 1;
  text-align: center;

  ${d(`${p.lg}px`)} {
    padding: 0 ${o(6)};
  }
`;t.GalleryMidRecircHeading=$,$.defaultProps={as:"h4",colorToken:"colors.consumption.body.standard.display-texture",typeIdentity:"typography.definitions.globalEditorial.context-secondary"};const v=`\n  ${c(`${p.lg+1}px`)} {\n    border: none;\n\n    & > ${C} > ${w} {\n      display: none;\n    }\n  }\n`,R=n`
  ${d(`${p.lg}px`)} {
    grid-template-rows: repeat(3, auto);
    padding-right: ${o(2)};
    padding-left: ${o(2)};
    width: 100%;
    max-width: 100%;
    justify-items: center;

    & > ${w} {
      display: none;
    }

    ${({showCropViewOnMobile:e})=>!e&&"\n        grid-template-rows: repeat(3, auto);\n      "};

    ${({showCropViewOnMobile:e})=>e&&n`
        border-right: 1px solid
          ${l("colors.consumption.body.standard.divider")};
        border-bottom: none;
        border-top-right-radius: ${o(2)};
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      `}
  }
`,G=n`
  grid-gap: 0;
  grid-template-rows: repeat(4, auto);
  padding: ${o(3)} ${o(4)};
  max-width: ${o(29)};
  height: auto;

  ${v}

  ${R}
`,S=r(g).withConfig({displayName:"GalleryRecircContent"})`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: ${o(1)};
  align-items: center;
  border: 1px solid ${l("colors.consumption.body.standard.divider")};
  border-radius: ${o(2)};
  cursor: pointer;
  padding: ${o(2)} ${o(3)};
  text-decoration: none;

  ${({isEndOfPageRecirc:e})=>e&&G}
`;t.GalleryRecircContent=S,S.defaultProps={as:"a"}},93788:(e,t,i)=>{const n=i(36319);t.Z=(0,n.defineMessages)({viewGalleryCTAText:{id:"GalleryRecircCards.ViewGalleryCTAText",defaultMessage:"View gallery »",description:"View gallery button text in End Of Page Recirculation."},viewNextGalleryCTAText:{id:"GalleryRecircCards.viewNextGalleryCTAText",defaultMessage:"View next gallery »",description:"View next gallery button text in End Of Page Recirculation."},keepOnLaughingText:{id:"GalleryRecircCards.keepOnLaughingText",defaultMessage:"Keep on laughing",description:"Keep on laughing text in End Of Page Recirculation."},midGalleryRecircHeading:{id:"GalleryRecircCards.midGalleryRecircHeading",defaultMessage:"Want more laughs? Try another cartoon gallery.",description:"Want more laughs? Try another cartoon gallery text for mid gallery recirc"}})},38224:(e,t,i)=>{const{asVariation:n}=i(95545),r=i(62171);r.EndOfPageRecirc=n(r,"EndOfPageRecirc",{},{isEndOfPageRecirc:!0}),e.exports=r},96705:(e,t,i)=>{const n=i(94184),r=i(45697),a=i(67294),{useIntl:o}=i(36319),l=i(10229).Z,{trackComponent:s}=i(40199),{SponsoredContentHeaderWrapper:d,SponsoredContentHeaderExternalLink:c,SponsoredContentHeaderInfoBox:p,SponsoredContentHeaderBylineText:g,SponsoredContentHeaderResponsiveAsset:u,SponsoredContentHeaderSponsorName:y}=i(57561),{getBylineText:m,getLogoRatio:h,getSponsoredHeaderDisplayOptions:f,getValidBylineOption:b}=i(931),C=({brandName:e,bylineOption:t,bylineVariant:i,campaignUrl:r,className:C,sponsorLogo:x,sponsorName:w})=>{a.useEffect((()=>{s("SponsoredContentHeader")}),[]);const $=o(),v=b(t),{isBrandedLegacy:R,shouldDisplayLogo:G}=f({bylineOption:v,bylineVariant:i,hasLogo:!!x}),S=m({intl:$,bylineOption:v,brandName:e,sponsorName:w}),E=h({sponsorLogo:x});return a.createElement(d,{isBrandedLegacy:R,className:n(C,v.replace("_","-")),"data-testid":"SponsoredContentHeaderWrapper"},a.createElement(c,{additionalRelVals:["sponsored"],href:r||void 0,attributes:{"aria-label":$.formatMessage(l.sponsoredLinkCTA,{sponsorName:w})}},a.createElement(p,{isBrandedLegacy:R},a.createElement(g,{isBrandedLegacy:R,"data-testid":"SponsoredContentHeaderBylineText"},S),G?a.createElement(u,{altText:x.altText,constrainLogoByWidth:E>1,isBrandedLegacy:R,sources:x.sources}):a.createElement(y,{isBrandedLegacy:R},w))))};C.propTypes={brandName:r.string.isRequired,bylineOption:r.string.isRequired,bylineVariant:r.string.isRequired,campaignUrl:r.string.isRequired,className:r.string,sponsorLogo:r.any,sponsorName:r.string.isRequired},C.displayName="SponsoredContentHeader",e.exports=C},61784:(e,t,i)=>{const{asConfiguredComponent:n}=i(36380);e.exports=n(i(96705),"SponsoredContentHeader")},57561:(e,t,i)=>{const n=i(51117).default,{BaseText:r}=i(74327),{calculateSpacing:a,getColorStyles:o,getTypographyStyles:l}=i(79720),s=i(99956),d=i(56851),c=n.div.withConfig({displayName:"SponsoredContentHeaderWrapper"})`
  display: flex;
  justify-content: center;
  ${({theme:e})=>o(e,"background-color","colors.discovery.body.light.background")};
  padding: ${a(2)};
  width: 100%;
  min-height: 80px;

  ${({isBrandedLegacy:e})=>e?`\n    grid-column: 1 / -1;\n    padding: unset;\n    height: 60px;\n    min-height: unset;\n\n    &.light-theme {\n      ${({theme:e})=>o(e,"background-color","colors.background.light")}\n    }\n  `:""}
`,p=n(d).withConfig({displayName:"SponsoredContentHeaderExternalLink"})`
  text-decoration: none;
`,g=n.div.withConfig({displayName:"SponsoredContentHeaderInfoBox"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${({isBrandedLegacy:e})=>e?"& { flex-direction: unset; }":""}
`,u=n(r).withConfig({displayName:"SponsoredContentHeaderBylineText"})`
  ${({theme:e,isBrandedLegacy:t})=>t?`\n      ${l(e,"typography.definitions.globalEditorial.context-primary")};\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: flex-end;\n      padding-right: ${a(2)};\n      height: 100%;\n\n      &.light-theme {\n        ${o(e,"color","colors.discovery.body.light.heading")}\n      }\n    }\n  `:""}
`;u.defaultProps={as:"div",colorToken:"colors.consumption.lead.standard.syndication",typeIdentity:"typography.definitions.globalEditorial.syndication"};const y=n(s).withConfig({displayName:"SponsoredContentHeaderResponsiveAsset"})`
  &.responsive-asset {
    display: flex;
    align-items: center;
    margin-top: ${a(1)};
    overflow: visible;

    ${({theme:e,isBrandedLegacy:t})=>t?`\n      justify-content: flex-start;\n      margin-top: unset;\n      padding-left: ${a(2)};\n      border-left: 1px solid;\n      ${o(e,"border-color","colors.discovery.body.light.divider")};\n    `:""}
  }

  &.responsive-image {
    height: 60px;

    img {
      height: 100%;
    }

    ${({constrainLogoByWidth:e})=>e?"{\n      width: 60px;\n      height: unset;\n\n      img {\n        height: unset;\n      }\n    }":""}
  }
`,m=n(r).withConfig({displayName:"SponsoredContentHeaderSponsorName"})`
  display: flex;
  align-items: center;
  margin-top: ${a(.5)};

  ${({isBrandedLegacy:e,theme:t})=>e?`\n    justify-content: flex-start;\n    margin-top: unset;\n    padding-left: ${a(.5)};\n\n    &.light-theme {\n      ${o(t,"color","colors.discovery.body.light.syndication")};\n    }\n  `:""}
`;m.defaultProps={as:"div",colorToken:"colors.consumption.lead.standard.syndication",typeIdentity:"typography.definitions.consumptionEditorial.description-feature"},e.exports={SponsoredContentHeaderWrapper:c,SponsoredContentHeaderExternalLink:p,SponsoredContentHeaderInfoBox:g,SponsoredContentHeaderBylineText:u,SponsoredContentHeaderResponsiveAsset:y,SponsoredContentHeaderSponsorName:m}},10229:(e,t,i)=>{const n=i(36319);t.Z=(0,n.defineMessages)({bylineBrandXAdvertiser:{id:"SponsoredContentHeader.BylineBrandXAdvertiser",defaultMessage:"{brandName} X",description:"Byline text when it's a brand and an advertiser"},bylineBrandedContent:{id:"SponsoredContentHeader.BylineBrandedContent",defaultMessage:"Branded Content By",description:"Byline text for branded content"},bylineCreated:{id:"SponsoredContentHeader.BylineCreated",defaultMessage:"Created By {brandName} For",description:"Byline text for created by brand"},bylinePaidPost:{id:"SponsoredContentHeader.BylinePaidPost",defaultMessage:"PAID POST",description:"Byline text for a paid post"},bylinePaidPostByAdvertiser:{id:"SponsoredContentHeader.BylinePaidPostByAdvertiser",defaultMessage:"Paid Post by {sponsorName}, Brought to you By Business Reporter",description:"Byline text by advertiser for a paid post"},bylineProduced:{id:"SponsoredContentHeader.BylineProduced",defaultMessage:"Produced By",description:"Byline text for produced by"},bylineProducedByAdvertiser:{id:"SponsoredContentHeader.BylineProducedByAdvertiser",defaultMessage:"Produced By",description:"Byline text for produced by advertiser"},bylineProducedByBrand:{id:"SponsoredContentHeader.BylineProducedByBrand",defaultMessage:"Produced By {brandName} With",description:"Byline text for produced by brand"},bylineSponsored:{id:"SponsoredContentHeader.BylineSponsored",defaultMessage:"Sponsored content",description:"Byline text for sponsored content"},bylineSponsoredContent:{id:"SponsoredContentHeader.BylineSponsoredContent",defaultMessage:"Sponsored Content By",description:"Byline text for sponsored content with a sponsor name"},bylineInCollaboration:{id:"SponsoredContentHeader.BylineInCollaboration",defaultMessage:"In Collaboration With",description:"Byline text for in collaboration with"},bylineSponsoredBy:{id:"SponsoredContentHeader.BylineSponsoredBy",defaultMessage:"Sponsored By",description:"Byline text for sponsored by"},bylineInPartnership:{id:"SponsoredContentHeader.BylineInPartnership",defaultMessage:"In Partnership With",description:"Byline text for in partnership with"},bylineAdvertisementFeatureWith:{id:"SponsoredContentHeader.BylineAdvertisementFeatureWith",defaultMessage:"Advertisement Feature With",description:"Byline text for advertisement feature with"},bylineOriginalContentBy:{id:"SponsoredContentHeader.BylineOriginalContentBy",defaultMessage:"Original Content By",description:"Byline text for Original Content By"},sponsoredLinkCTA:{id:"SponsoredContentHeader.SponsoredLinkCTA",defaultMessage:"Click to go to {sponsorName}'s website",description:"Call to action for sponsored link"}})},931:(e,t,i)=>{const n=i(10229).Z,r="produced_by_advertiser",a={brand_x_advertiser:n.bylineBrandXAdvertiser,branded_content:n.bylineBrandedContent,created:n.bylineCreated,original_content_by:n.bylineOriginalContentBy,paid_post:n.bylinePaidPost,paid_post_by_advertiser_brought_to_you_by_business_reporter:n.bylinePaidPostByAdvertiser,produced:n.bylineProduced,produced_by_advertiser:n.bylineProducedByAdvertiser,produced_by_brand:n.bylineProducedByBrand,sponsored:n.bylineSponsored,sponsored_content:n.bylineSponsoredContent,in_collaboration:n.bylineInCollaboration,sponsored_by:n.bylineSponsoredBy,in_partnership:n.bylineInPartnership,advertisement_feature_with:n.bylineAdvertisementFeatureWith};function o(e){return Object.prototype.hasOwnProperty.call(a,e)?e:r}e.exports={BYLINE_TEMPLATES:a,getBylineText:function({intl:e,bylineOption:t=r,brandName:i,sponsorName:n}){return e.formatMessage(a[t],{brandName:i,sponsorName:n})},getLogoRatio:function({sponsorLogo:e}){var t,i,n,r;return((null===(i=null===(t=null==e?void 0:e.sources)||void 0===t?void 0:t.sm)||void 0===i?void 0:i.height)||0)/((null===(r=null===(n=null==e?void 0:e.sources)||void 0===n?void 0:n.sm)||void 0===r?void 0:r.width)||1)},getSponsoredHeaderDisplayOptions:function({bylineOption:e,bylineVariant:t,hasLogo:i}){const n=o(e),r="sponsored"===n||"produced"===n;return{isBrandedLegacy:r,shouldDisplayLogo:i&&("logo"===t||r)}},getValidBylineOption:o}}}]);