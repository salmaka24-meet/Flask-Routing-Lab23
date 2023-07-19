(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[3528],{76559:(e,t,i)=>{const a=i(67294),l=i(41609),o=i(45697),{useIntl:r}=i(36319),{calculateSpacing:n}=i(79720),{getSlots:s}=i(86972),d=i(67924),c=i(41334),m=i(32168),{Disclaimer:g}=i(5626),p=i(85650),{trackComponent:u}=i(40199),{componentTracking:h,googleAnalytics:b}=i(28601),{CarouselWrapper:C,ChipWrapper:y,EditorCard:$,EditorDescription:f,EditorDetails:E,EditorName:T,EditorResponsiveAsset:S,EditorsPicksCarousel:w,EditorTitle:P,FilterableSummaryListDynamicGridItemLayout:D,FilterableSummaryListGrid:k,FilterableSummaryListWrapper:v,FilterableSummaryListGridFullBleed:A,TitleWrapper:N,TitleToggleChipListWrapper:x}=i(78153),{ArticleGalleryCarouselBtnWrapper:B,ArticleGalleryCarouselButton:L}=i(28642),G=i(12102).Z,F={spacing:{sm:n(1.5),xl:n(2)},width:{sm:"60%",lg:"27%",xl:`calc(24% - ${n(1.5)})`,xxl:`calc(21% - ${n(1.5)})`}},I=({affiliateDisclaimer:e,buttonConfig:t,children:i,className:o,controlButtonIcon:n,controlPlacement:I,controlPosition:W,dangerousDek:H,dangerousHed:U,defaultToggleChipTitle:R,editor:M,hasBorderBottom:z,hasGridBottomPadding:O,hasCarouselSliderPagination:j,hasControls:V,hasCustomSlider:q,hasImpressionTracking:K,hasNavigationButtonVariation:Z,hasNoHorizontalScrollCarousel:_,paginationStyle:J,hasPadding:Q,hasPagination:X,hasProductDisclaimerAlternativeStyle:Y,hasTitleMarginTop:ee,hasTitleNoMargin:te,hasToggleGridColor:ie,hasHigherHorizontalPadding:ae,sectionTitleVariation:le,selectedToggleChipTitle:oe,shouldAppendFilterInUrl:re,shouldChipsRedirectOnClick:ne,shouldDisplaySingleSlot:se,shouldNotDisplayAllLabel:de,shouldEnableBundleComponentAnalytics:ce,shouldEnableProductDisclaimer:me,shouldUseAlternativeTitleStyle:ge,hasCarouselControl:pe,toggleChipRole:ue,trackingNamespace:he,isDotClickable:be,layout:Ce,pos:ye,gridConfig:$e,isEditorsPicksCarousel:fe,shouldAffiliateDisclaimerPlpEnable:Ee,isPlpCurated:Te,hideDesktopPagination:Se,isUpcEnabled:we})=>{a.useEffect((()=>{u("FilterableSummaryList")}),[]);const{formatMessage:Pe}=r(),{slots:De,urlData:ke}=s(i),ve=Object.keys(De),[Ae,Ne]=a.useState(ve),[xe,Be]=a.useState(Ae[0]),[Le,Ge]=a.useState(R),Fe=U||H,Ie=(null==he?void 0:he.toggle)||U,We=(null==he?void 0:he.card)||U;if(0===Ae.length)return null;const He=Ae.length>1||se,Ue=t.hasCtaLink?Pe(G.atArticleGalleryCarouselBtnTextWithCtaLink,{categoryName:t.name}):Pe(G.atArticleGalleryCarouselBtnText,{categoryName:t.name}),{isDynamicGridItemLayout:Re,shouldDisplayDenseGrid:Me}=$e||{},ze=()=>a.Children.map(De[xe].props.children,((e,t)=>{const i=h.addDataSectionTitleAttribute(ce,`${We}/${xe}/`,t,!1),l=a.cloneElement(e,{analyticsDataAttribute:i});return a.createElement("div",null,l)})),Oe=()=>a.createElement(C,null,a.createElement(g.TextCenterNoTopRule,{isEnabled:me&&pe,hasHigherHorizontalPadding:ae,hasProductDisclaimerAlternativeStyle:Y,disclaimerHtml:e}),a.createElement(p,{hideDesktopPagination:Se,hasControls:V,hasNavigationButtonVariation:Z,hasPagination:X,controlButtonIcon:Z?"ArrowIcon":n,controlPlacement:I,controlPosition:W,isDotClickable:be,hasPadding:Q,hasNoHorizontalScrollCarousel:_,hasImpressionTracking:K,paginationStyle:j&&"slider"===J?J:"bullet",isPlpCurated:Te,hasCustomSlider:j&&q,dangerousHed:Fe,pos:ye},a.Children.map(De[xe].props.children,((e,t)=>{const i=h.addDataSectionTitleAttribute(ce,`${We}/${xe}/`,t,!1),l=a.cloneElement(e,{analyticsDataAttribute:i}),o=`${Fe}/${xe}`;return a.createElement(p.CarouselItem,Object.assign({},ce,F,{key:`${xe}-${t}`,carouselTitle:o,carouselItemIndex:t,carouselItemName:e.props.dangerousHed,pos:ye,isUpcEnabled:we}),l)}))),t.showButton&&t.url&&a.createElement(B,null,a.createElement("div",{className:"more-products"},a.createElement(L,{className:"article-gallery__more-button",label:Ue,btnStyle:"outlined",ariaLabel:Ue,href:t.hasCtaLink?t.url:`/products/shop${t.url}`,inputKind:"link"}))));return a.useEffect((()=>{var e;{const t=decodeURIComponent(null===(e=null===window||void 0===window?void 0:window.location)||void 0===e?void 0:e.hash),i=Ae.findIndex((e=>`#${e.toLowerCase()}`===t.toLowerCase()));Be(Ae[i>=0?i:0])}}),[Ae]),a.createElement(v,{className:o,hasToggleGridColor:ie,hasPadding:Q,hasBorderBottom:z},a.createElement(x,{shouldUseAlternativeTitleStyle:ge},Fe&&a.createElement(N,{className:"section-title",hasPadding:Q,hasTitleMarginTop:ee,as:m[le],dangerousHed:U,dangerousDek:H,hasTitleNoMargin:te,affiliateDisclaimer:e,shouldAffiliateDisclaimerPlpEnable:Ee,hasHigherHorizontalPadding:ae,hasProductDisclaimerAlternativeStyle:Y}),He&&a.createElement(y,{className:"clip-list",hasToggleGridColor:ie,hasPadding:Q},a.createElement(c,{contentAlign:"center",layout:"nowrap",hasToggleGridColor:ie,label:Le},Ae.map(((e,t)=>{const i=h.addDataSectionTitleAttribute(ce,`${Ie}/${e}`),l=e===xe;return de&&"All"===e?null:a.createElement(d,{index:t,analyticsDataAttribute:i,key:e,isChecked:l,hasToggleGridColor:ie,onChange:t=>((e,t)=>{var i;Be(t),se&&(e.detail.checked?(Ne([t]),oe&&Ge(oe)):(Be(ve[0]),Ne(ve),Ge(R))),i=t,b.emitUniqueGoogleTrackingEvent("toggle-click",{clickText:i,clickType:"body"})})(t,e),isAnchorUrl:re,redirectUrl:ke[t],shouldUrlRedirect:ne,shouldDisplaySingleChip:se,role:ue},e)}))))),fe&&!l(M)?a.createElement(w,null,a.createElement($,null,M.editorPhoto&&a.createElement(S,Object.assign({},M.editorPhoto)),a.createElement(E,null,a.createElement(T,null,M.name),a.createElement(P,null,M.title)),a.createElement(f,null,M.editorNote)),Oe()):function(){switch(Ce){case"GridFourColumns":return Re?a.createElement(D,{shouldDisplayDenseGrid:Me,hasGridBottomPadding:O,isUpcEnabled:we},ze()):a.createElement(k,{isUpcEnabled:we},ze());case"FullBleed":return a.createElement("div",null,ze());case"FullBleedSideBySideContent":return a.createElement(A,null,ze());default:return Oe()}}())};I.propTypes={affiliateDisclaimer:o.string,buttonConfig:o.object,children:o.node.isRequired,className:o.string,controlButtonIcon:o.oneOf(["ChevronIcon","ArrowIcon"]),controlPlacement:o.oneOf(["right","space-between"]),controlPosition:o.oneOf(["top","bottom","center"]),dangerousDek:o.string,dangerousHed:o.string,defaultToggleChipTitle:o.string,editor:o.object,gridConfig:o.object,hasBorderBottom:o.bool,hasCarouselControl:o.bool,hasCarouselSliderPagination:o.bool,hasControls:o.bool,hasCustomSlider:o.bool,hasGridBottomPadding:o.bool,hasHigherHorizontalPadding:o.bool,hasImpressionTracking:o.bool,hasNavigationButtonVariation:o.bool,hasNoHorizontalScrollCarousel:o.bool,hasPadding:o.bool,hasPagination:o.bool,hasProductDisclaimerAlternativeStyle:o.bool,hasTitleMarginTop:o.bool,hasTitleNoMargin:o.bool,hasToggleGridColor:o.bool,hideDesktopPagination:o.bool,isDotClickable:o.bool,isEditorsPicksCarousel:o.bool,isPlpCurated:o.bool,isUpcEnabled:o.bool,layout:o.string,paginationStyle:o.string,pos:o.number,sectionTitleVariation:o.string,selectedToggleChipTitle:o.string,shouldAffiliateDisclaimerPlpEnable:o.bool,shouldAppendFilterInUrl:o.bool,shouldChipsRedirectOnClick:o.bool,shouldDisplaySingleSlot:o.bool,shouldEnableBundleComponentAnalytics:o.bool,shouldEnableProductDisclaimer:o.bool,shouldNotDisplayAllLabel:o.bool,shouldUseAlternativeTitleStyle:o.bool,toggleChipRole:o.string,trackingNamespace:o.shape({toggle:o.string,card:o.string})},I.displayName="FilterableSummaryList",I.defaultProps={buttonConfig:{name:"",showButton:!1,url:""},controlButtonIcon:"ChevronIcon",controlPlacement:"space-between",controlPosition:"center",hasControls:!0,hasHigherHorizontalPadding:!1,hasImpressionTracking:!1,hasNoHorizontalScrollCarousel:!1,hasPagination:!0,hasTitleMarginTop:!1,isDotClickable:!1,isEditorsPicksCarousel:!1,shouldAppendFilterInUrl:!0,shouldChipsRedirectOnClick:!1,shouldDisplaySingleSlot:!1,shouldEnableBundleComponentAnalytics:!1,shouldEnableProductDisclaimer:!1,shouldNotDisplayAllLabel:!1,shouldUseAlternativeTitleStyle:!1},I.displayName="FilterableSummaryList",e.exports=I},33528:(e,t,i)=>{const{asConfiguredComponent:a}=i(36380),l=i(76559);e.exports=a(l,"FilterableSummaryList")},78153:(e,t,i)=>{const{css:a,default:l}=i(51117),{calculateSpacing:o,minScreen:r,minMaxScreen:n,getColorToken:s,getTypographyStyles:d,getColorStyles:c}=i(79720),{CarouselControlButton:m,CarouselList:g,CarouselWrapper:p}=i(95764),u=i(48655),{BREAKPOINTS:h}=i(85326),b=i(99956),C=l(u.EvenFour).withConfig({displayName:"FilterableSummaryListGrid"})`
  &.grid-even.grid-items-4 {
    ${r(h.md)} {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  &&& {
    ${({isUpcEnabled:e})=>e&&`\n      ${n(0,h.md)} {\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n        \n          padding-right: ${o(2)};\n          padding-left: ${o(2)};\n          column-gap: ${o(1)};\n        \n      }\n      \n        padding-right: ${o(3)};\n        padding-left: ${o(3)};\n        column-gap: ${o(2)};\n      \n    `}
  }

  &.grid-even {
    ${n(0,h.md)} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding-right: ${o(3)};
      padding-left: ${o(3)};
    }
    padding-right: ${o(4)};
    padding-left: ${o(4)};
  }

  &.grid {
    row-gap: ${o(6)};
  }
`,y=l(u.EvenFour).withConfig({displayName:"FilterableSummaryListGridFullBleed"})`
  &.grid-even.grid-items-4 {
    ${n(0,h.md)} {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      padding-top: ${o(3)};
      padding-right: ${o(1)};
      padding-left: ${o(1)};
    }
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: ${o(3)};
    padding-left: 0;
    row-gap: ${o(4)};
  }
`,$=l(u.DynamicGridItemLayout).withConfig({displayName:"FilterableSummaryListDynamicGridItemLayout"})`
  &.grid-even.grid-items-4 {
    ${r(h.md)} {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  &&& {
    ${({isUpcEnabled:e})=>e&&`\n      ${n(0,h.md)} {\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n        \n          padding-right: ${o(2)};\n          padding-left: ${o(2)};\n          column-gap: ${o(1)};\n        \n      }\n      \n        padding-right: ${o(3)};\n        padding-left: ${o(3)};\n        column-gap: ${o(2)};\n      \n    `}
  }

  &.grid-even {
    ${n(0,h.md)} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding-right: ${o(3)};
      padding-left: ${o(3)};
    }
    padding-right: ${o(4)};
    padding-left: ${o(4)};
  }

  &.grid {
    row-gap: ${o(6)};
    ${({shouldDisplayDenseGrid:e=!0})=>!e&&"grid-auto-flow:row;"}

    ${({hasGridBottomPadding:e=!1})=>e&&`padding-bottom:${o(8)};`}
  }
`,f=l.section.withConfig({displayName:"FilterableSummaryListWrapper"})`
  ${({theme:e,hasBorderBottom:t})=>t&&`border-bottom: 1px solid ${s(e,"colors.consumption.lead.standard.divider")};`}

  ${({hasPadding:e,hasToggleGridColor:t})=>e&&!t?`padding: ${o(4)} 0 ${o(4)};`:""}
`,E=l.div.withConfig({displayName:"TitleToggleChipListWrapper"})`
  ${({shouldUseAlternativeTitleStyle:e})=>e&&a`
      .section-title {
        margin: 0;
        border-top: none;
        padding-top: 0;

        @media (max-width: ${h.md}) {
          h2 {
            text-align: center;
          }
        }
      }

      @media (max-width: ${h.md}) {
        .list-wrapper {
          overflow-y: hidden;
          overflow-x: scroll;

          &::-webkit-scrollbar {
            display: none;
          }
        }
      }

      @media (min-width: ${h.md}) {
        ${c("border-color","colors.consumption.lead.standard.context-signature")};

        display: flex;
        align-items: center;
        border-top: 2px solid;
        gap: 2rem;

        .clip-list {
          margin: 0;

          .list-wrapper {
            padding: 0;
            gap: ${o(3)};

            button {
              border-radius: 0;
              background: none;
              padding: 0.2rem 0;
              font-size: 13px;
              font-weight: bold;

              &[aria-checked='false'] {
                ${c("color","colors.interactive.base.border")};
              }

              &[aria-checked='true'] {
                ${c("color","colors.interactive.base.black")};
                border-bottom: 1px solid;
              }

              &:hover,
              &:focus {
                box-shadow: none;
              }
            }
          }
        }
      }
    `}
`,T=l.div.withConfig({displayName:"TitleWrapper"})`
  ${({hasTitleMarginTop:e})=>{const t=o(4);return`margin: ${e?t:"0"} 0 ${t} 0;`}}

  ${({hasPadding:e})=>e&&`padding-left: ${o(3)};\n    padding-right:  ${o(3)};\n   `}
  
  ${({hasTitleNoMargin:e})=>e&&"margin: 0;"}
`,S=l.div.withConfig({displayName:"ChipWrapper"})`
  ${({hasToggleGridColor:e})=>e?`padding-bottom: ${o(4)};`:`margin: ${o(4)} 0 0 0;`}
`,w=l.div.withConfig({displayName:"CarouselWrapper"})`
  ${m} {
    margin-top: 1rem;

    &:disabled {
      display: none;
    }
  }
`,P=l.section.withConfig({displayName:"EditorsPicksCarousel"})`
  display: grid;
  grid-template-columns: 100%;
  margin-top: ${o(4)};
  overflow-x: hidden;
  @media (min-width: ${h.lg}) {
    grid-column-gap: ${o(4)};
    grid-template-columns: calc(20% - ${o(4)}) 80%;
    ${p} {
      margin-top: 0;
    }
  }
  ${g} {
    margin: 0;
  }
`,D=l.div.withConfig({displayName:"EditorCard"})`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  @media (min-width: ${h.lg}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, max-content);
    margin: ${o(4)} 0;
  }
`,k=l(b).withConfig({displayName:"EditorResponsiveAsset"})`
  border-radius: 50%;
  width: 80px;
  height: 80px;
`,v=l.div.withConfig({displayName:"EditorDetails"})`
  margin-left: ${o(1)};
  @media (min-width: ${h.lg}) {
    grid-column: 1;
    margin: ${o(1)} 0 0;
  }
`,A=l.div.withConfig({displayName:"EditorName"})`
  ${({theme:e})=>d(e,"typography.definitions.consumptionEditorial.subhed-aux-secondary")};
`,N=l.div.withConfig({displayName:"EditorTitle"})`
  ${({theme:e})=>d(e,"typography.definitions.globalEditorial.accreditation-feature")};
`,x=l.div.withConfig({displayName:"EditorDescription"})`
  grid-column: 1 / span 2;
  margin-top: ${o(1.5)};
  ${({theme:e})=>d(e,"typography.definitions.consumptionEditorial.description-embed")}
  @media (min-width: ${h.lg}) {
    margin-top: ${o(2.5)};
  }
`;e.exports={CarouselWrapper:w,ChipWrapper:S,EditorCard:D,EditorDescription:x,EditorDetails:v,EditorName:A,EditorResponsiveAsset:k,EditorsPicksCarousel:P,EditorTitle:N,FilterableSummaryListDynamicGridItemLayout:$,FilterableSummaryListGrid:C,FilterableSummaryListWrapper:f,FilterableSummaryListGridFullBleed:y,TitleWrapper:T,TitleToggleChipListWrapper:E}},12102:(e,t,i)=>{const a=i(36319);t.Z=(0,a.defineMessages)({atArticleGalleryCarouselBtnText:{id:"FilterableSummaryList.AtArticleGalleryCarouselBtnText",defaultMessage:"VIEW ALL {categoryName}",description:"Article and Gallery carousel button text"},atArticleGalleryCarouselBtnTextWithCtaLink:{id:"FilterableSummaryList.AtArticleGalleryCarouselBtnTextWithCtaLink",defaultMessage:"{categoryName}",description:"Article and Gallery carousel button text for cta link"}})},75985:(e,t,i)=>{const a=i(67294),l=i(45697),{trackComponent:o}=i(40199),r=({children:e,name:t})=>{if(a.useEffect((()=>{o("Slot")}),[]),!t)throw new Error("A slot must contain a name!");return e};r.propTypes={children:l.node.isRequired,name:l.string.isRequired},e.exports={Slot:r,getSlots:(e,t=[])=>{const i=new Set(t),l={};let o;const n=[];return a.Children.forEach(e,(e=>{o=e.props.name,n.push(e.props.url),e.type===r&&o&&(0===i.size||i.has(o))&&(l[o]=e)})),{slots:l,urlData:n}}}},86972:(e,t,i)=>{e.exports=i(75985)}}]);