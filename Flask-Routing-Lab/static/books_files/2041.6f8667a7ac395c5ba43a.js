(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[2041],{42813:(i,e,a)=>{const o=a(94184),n=a(45697),r=a(67294),{default:t}=a(45698),{trackComponent:d}=a(40199),{processLinks:l,processCeros:m,processTiktok:s,processSidebarHeadings:g}=a(54436),p=a(86982),c=a(85086),{BodyWrapper:$}=a(81717),u=new t({a:l,blockquote:({props:i})=>({type:p,props:i}),ceros:m,h2:g,tiktok:s,"inline-embed":c}),y=({body:i,className:e,children:a,shouldDisableMaxWidth:n,shouldEnableDataJourneyHook:t=!0,shouldEnableFullArticleInverted:l})=>{r.useEffect((()=>{d("Body")}),[]);const m={className:o("body",e),shouldDisableMaxWidth:n,shouldEnableFullArticleInverted:l};return t&&(m["data-journey-hook"]="client-content"),r.createElement($,Object.assign({},m,{"data-testid":"BodyWrapper"}),a||u.convert(i))};y.propTypes={body:n.array,children:n.node,className:n.string,shouldDisableMaxWidth:n.bool,shouldEnableDataJourneyHook:n.bool,shouldEnableFullArticleInverted:n.bool},y.defaultProps={body:["div"],shouldDisableMaxWidth:!1},i.exports=y},94753:(i,e,a)=>{i.exports=a(42813)},42041:(i,e,a)=>{const{default:o,css:n}=a(51117),{BREAKPOINTS:r,ZINDEX_MAP:t}=a(85326),{applyGridSpacing:d,cssVariablesGrid:l}=a(62470),{calculateSpacing:m,minScreen:s,maxScreen:g,minMaxScreen:p,getColorToken:c,getTypographyStyles:$}=a(79720),u=a(7279),{universalGridCore:y}=a(61774),h=a(4131),{RowWrapper:b}=a(21920),f=a(48655),{GridItem:k}=a(14134),{SummaryRiverSection:x}=a(3183),{SummaryCollageOneGridWithMargin:w}=a(83695),{SectionTitleHed:v}=a(80577),{EmbedBody:C}=a(97893),S=`\n  ${l()}\n  ${d("padding")}\n\n  margin: 0 auto;\n  width: 100%;\n  max-width: ${r.xxl};\n`,B=o(h).withConfig({displayName:"MultiPackageBaseRow"})`
  &:first-child,
  & ~ & {
    ${({hasMarginTopMultiPackageRow:i})=>i?"":"margin-top: 0;"}
  }

  ${({hasRightAndLeftMargin:i})=>i?`\n        ${s(r.md)} {\n          padding: ${m(0)} ${m(8)};\n        }`:""}

  inline-embed[name='align-right'] {
    text-align: right;
  }

  inline-embed[name='align-center'] {
    text-align: center;
  }
`,N=o(u.Utility).withConfig({displayName:"MultiPackageRow"})`
  &&& {
    align-items: center;
    width: auto;
  }
`,_=o(B).withConfig({displayName:"MultiPackageRow"})`
  ${({hasNoTopMargin:i})=>i?"":`margin-top: ${m(7)};`}

  ${({hasLightBgForLinkBanner:i,hasPlpFilterableContainerLightBackgroundColor:e,theme:a,isInvertedTheme:o})=>i||e?`background-color: ${c(a,"colors.discovery.body.light.background")};`:o?`background-color: ${c(a,"colors.consumption.lead.inverted.background")};`:""}

  ${({hasMediumMargin:i,hasNoBottomMargin:e,hasReducedMargin:a,isNativeAd:o})=>i?`margin-bottom: ${m(4)};`:e||o&&a?"margin-bottom: 0;":a?`margin-bottom: ${m(2)};`:`margin-bottom: ${m(7)};`}

  ${({hasMarginBottomMultiPackageRow:i})=>i?`\n          ${s(r.lg)} {\n            margin-bottom: ${m(5)};\n          }\n          ${p(r.md,r.lg)} {\n            margin-bottom: ${m(4)};\n          }\n          ${p(0,r.md)} {\n            margin-bottom: ${m(3)};\n          }`:""}

${({hasNoTopBottomMarginOnMobile:i})=>i?`  ${p(0,r.md)} {\n            margin-top: 0;\n            margin-bottom: 0;\n          }`:""}

  ${({hasStickyLinkBanner:i})=>i?`\n        position: sticky;\n        top: 0px;\n        z-index: ${t.interstitialLayer};\n      `:""}

  /* TODO: this should be a configuration for a layout
     Specificity is required due to star selector in homepage  */
  ${s(r.lg)} {
    ${b}.homepage__half-column-row + && {
      width: 50%;
      max-width: 800px;
      ${v} {
        ${$("typography.definitions.discovery.subhed-section-secondary")};
      }
    }
    .homepage__half-column-row + && > ${w} {
      padding-left: var(--grid-gap);
    }
    ${x} {
      margin: 0 auto;
      max-width: 1600px;
    }
  }
`,M=o(f.WithMargins).withConfig({displayName:"DiscoveryQuoteRow"})`
  ${({hasTopAndBottomBorderQuote:i,theme:e})=>i?`\n    border-top:1px solid ${c(e,"colors.discovery.body.white.divider")};\n\n    border-bottom:1px solid ${c(e,"colors.discovery.body.white.divider")};`:""}

  ${k} {
    grid-column: 1/-1;

    ${s(r.md)} {
      grid-column: 3/11;
    }
  }
`,E=n`
  &.puzzles-games-landing-page {
    .ticker-wrapper {
      margin-bottom: 0;
    }

    .ticker-view > div:nth-child(2) {
      margin-top: ${m(4)};
    }

    .summary-collage-six-puzzles-games .summary-item:first-child h3 {
      ${$("typography.definitions.discovery.description-core")};
      font-size: ${m(4)};
    }

    .verso-features {
      margin-bottom: ${m(4)};
    }

    > div:nth-child(3)
      .summary-collage-six-puzzles-games
      .summary-list--collection-list {
      ${g(r.lg)} {
        padding-top: 0;
      }
    }

    .summary-river-puzzles-games {
      h2 {
        font-size: 24px;
      }

      & > section {
        .summary-item:last-child {
          border-bottom: 0;
        }

        > div {
          margin-bottom: ${m(2)};

          > div:first-child {
            margin-bottom: 0;
          }
        }
      }

      .summary-item {
        padding-top: ${m(2)};
      }
    }

    .summary-item--is-dense .summary-item__asset-container {
      ${p(0,r.xl)} {
        display: block;
      }

      ${s(r.xl)} {
        float: none;
        margin-left: 0;
      }
    }

    .summary-list--collection-list {
      ${p(0,r.lg)} {
        border-top: 0;
        padding-top: 0;
      }
    }

    .summary-list__items .summary-item:not(:first-child) {
      margin-bottom: 0;
      padding-bottom: ${m(2)};
    }

    .summary-list__items .summary-item:first-child {
      ${p(0,r.lg)} {
        padding-bottom: ${m(2)};
      }

      ${s(r.lg)} {
        padding-bottom: 0;
      }
    }

    .summary-collage-six-puzzles-games .summary-item h3 {
      ${$("typography.definitions.discovery.hed-core-secondary")};
    }

    .summary-collage-six-puzzles-games h2,
    .summary-collection-grid h2 {
      ${$("typography.definitions.discovery.subhed-section-primary")};
    }

    .verso-embed-row inline-embed h1 {
      margin: 0;
      font-size: ${m(5.5)};
    }

    .verso-embed-row {
      margin: ${m(4)} 0;
    }

    ${C} {
      max-width: initial;
    }

    .verso-features h2 {
      font-size: 24px;
    }

    .summary-collage-six-puzzles-games h2 {
      font-size: 20px;
    }

    .summary-item__dek > a {
      ${$("typography.definitions.foundation.link-primary")};
      display: block;
      padding-top: ${m(2.5)};
      text-decoration: none;
      color: ${c("colors.interactive.base.brand-primary")};
    }

    .summary-item__dek > a:hover {
      text-decoration: underline;
    }
  }
`,W=o.div.withConfig({displayName:"MultiPackageContainer"})`
  ${({showFooterAdPadding:i})=>i&&`padding-bottom: ${m(10,"px")};`}

  ${({customClass:i})=>i&&"puzzles-games-landing-page"===i&&E}
  ${({hasMarginBottomMultiPackageRow:i})=>i?"\n            .verso-features {\n              && {\n                margin-bottom: 0;\n              }\n            }\n          ":""}
`,T=o.div.withConfig({displayName:"SectionJumpLinksWrapper"})`
  ${({theme:i})=>(i=>`\n    background: ${c(i,"colors.consumption.body.inverted.display-texture")};\n    ${s(r.md)} {\n      width: ${r.md};\n      padding: ${m(3)} ${m(9)} ${m(5)} ${m(9)};\n    }\n    padding: ${m(2)} ${m(5)} ${m(3.5)} ${m(5)};\n    margin: auto;\n    div {\n      div {\n        h1 {\n          text-align: center;\n        }\n        div {\n          a {\n            font-family: Konnect, helvetica, sans-serif;\n            font-style: normal;\n            line-height: ${m(2.4,"rem")};\n            font-size: ${m(2)};\n            &:not(.button):link,\n            &:not(.button):visited {\n              color: rgb(0, 0, 0);\n            }\n          }\n          display: grid;\n          ${s(r.md)} {\n            grid-template-columns: 1fr 1fr 1fr;\n            grid-row-gap: ${m(1.5)};\n          }\n          grid-template-columns: 1fr 1fr;\n          grid-row-gap: ${m(1)};\n        }\n      }\n    }\n  }\n  `)(i)}
`,P=o(_).withConfig({displayName:"MultiPackageReadMore"})`
  display: flex;
  justify-content: center;
`,O=o.div.withConfig({displayName:"PromoBoxWrapper"})`
  ${S}
`,z=o.div.withConfig({displayName:"EventsListWrapper"})`
  ${l()}

  margin: 0 auto;
  width: 100%;
  max-width: ${r.xxl};

  ${s(r.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,I=o.div.withConfig({displayName:"PromoBoxWrapper"})`
  ${S}
`,L=o.div.withConfig({displayName:"NewsletterWrapper"})`
  ${S}

  padding-top: ${m(6)};
  padding-bottom: ${m(6)};

  ${s(r.md)} {
    padding-top: ${m(9)};
    padding-bottom: ${m(9)};
  }
`,D=o.div.withConfig({displayName:"CMUnitWrapper"})`
  ${S}

  ${s(r.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,R=o.div.withConfig({displayName:"SubTopicDiscoveryWrapper"})`
  ${y(!0)}
  ${d("padding")}

  margin: 0 auto;
  width: 100%;
  max-width: ${r.xxl};

  ${s(r.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,A=o.div.withConfig({displayName:"TickerWrapper"})`
  ${({isInvertedTheme:i})=>i?`\n        ${l()}\n        ${d("padding",!0)}`:`${S}`}
`,F=o("div").withConfig({displayName:"MultipackageNoItemsBlock"})`
  ${l()}
  ${d("padding")}
  margin: 0 auto;
  margin-bottom: ${m(4)};
  width: 100%;
  max-width: ${r.xxl};
  color: white;
  font-family: 'LabGrotesque';
  ${({hasRule:i,theme:e})=>i?`\n        &::before {\n          border-top: 1px solid ${c(e,"colors.discovery.body.white.divider")};\n          content: '';\n          grid-column: 1/-1;\n          margin-bottom: ${m(4)};\n          display: block;\n        }\n      `:""}

  h3 {
    margin: 0 auto;
    width: fit-content;
    ${$("typography.definitions.consumptionEditorial.subhed-break-secondary")}
  }

  p {
    font-family: Proxima Nova;
    font-size: 12px;
  }
`,G=o.div.withConfig({displayName:"MultiPackageBodyWrapperGrid"})`
  ${y()}
  ${d("padding")}
`;i.exports={CMUnitWrapper:D,DiscoveryQuoteRow:M,EventsListWrapper:z,MultiPackageContainer:W,MultiPackageRow:_,MultiPackageReadMore:P,NewsFeedWrapper:I,NewsletterWrapper:L,PromoBoxWrapper:O,SubTopicDiscoveryWrapper:R,TickerWrapper:A,MultipackageNoItemsBlock:F,MultiPackageBodyWrapperGrid:G,SectionJumpLinksWrapper:T,UtilityButton:N}},83695:(i,e,a)=>{const{default:o,css:n}=a(51117),{BREAKPOINTS:r}=a(85326),{maxThresholds:t}=a(28657),{applyGridSpacing:d,cssVariablesGrid:l}=a(62470),{RubricLink:m}=a(7320),{SectionTitleRoot:s,SectionTitleHed:g}=a(80577),{calculateSpacing:p,maxScreen:c,minScreen:$,minMaxScreen:u,getTypographyStyles:y,getColorToken:h}=a(79720),{BaseLink:b}=a(74327),{SocialIconsList:f}=a(96860),{SpanWrapper:k}=a(89676),{StickyBoxWrapper:x}=a(29659),w=o.div.withConfig({displayName:"SummaryCollageOneAside"})`
  display: none;
  grid-row: 1 / -1;
  justify-self: end;

  ${x} {
    top: ${p(10)};
  }

  ${u(r.md,`${t.lg}px`)} {
    display: block;
    grid-column: 7 / -1;
  }

  ${$(r.lg)} {
    display: block;
    grid-column: 9 / -1;
  }
`,v=o.div.withConfig({displayName:"SummaryCollageOneTitle"})`
  grid-column: 1 / -1;

  ${({isSingleFeature:i})=>!i&&`\n      margin-bottom: ${p(2)};\n\n      ${$(r.md)} {\n        margin-bottom: ${p(1)};\n      }\n\n      ${$(r.lg)} {\n        margin-bottom: ${p(0)};\n      }\n    `}
`,C=o.div.withConfig({displayName:"SummaryCollageOneCtaIcon"})`
  border-radius: ${p(1)};
  background-color: ${({theme:i})=>h(i,"colors.discovery.lead.secondary.background")};
  background-image: ${({icon:i})=>`url('${i}')`};
  width: ${p(6)};
  height: ${p(6)};

  ${$(r.lg)} {
    margin-right: ${p(2)};
  }

  ${c(`${t.lg}px`)} {
    margin-bottom: ${p(2)};
  }
`,S=o(b).withConfig({displayName:"SummaryCollageOneAnchorLink"})`
  ${y("typography.definitions.foundation.link-primary")}
  display: inline-block;
  margin-bottom: ${p(2)};
  vertical-align: top;

  ${$(r.lg)} {
    margin-bottom: ${({showCtaIcon:i})=>i?0:p(4)};
  }
`,B=o.div.withConfig({displayName:"SummaryCollageOneCtaLink"})`
  grid-column: 1 / -1;
  text-align: center;

  span {
    display: block;
    width: 100%;
    text-align: center;
  }

  ${({showCtaIcon:i})=>i&&`\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      \n      ${$(r.lg)} {\n        flex-direction: row;\n      }\n    `}
`;S.defaultProps={colorSecondaryLinkToken:"colors.interactive.base.dark",colorStaticLinkToken:"colors.interactive.base.brand-primary",linkStyle:"global"};const N=n`
  ${l()}
  ${d("padding")}

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--grid-gap);
  margin: 0 auto;
  width: 100%;
  max-width: ${r.xxl};
  row-gap: var(--grid-gap);

  .summary-item--layout-placement-text-below {
    &.summary-item--text-align-left,
    &.summary-item--text-align-center {
      .summary-item__hed {
        ${y("typography.definitions.discovery.hed-break-out")};
      }

      .summary-item__dek {
        ${y("typography.definitions.discovery.description-feature")};
      }
    }
  }

  .summary-item__hed-link {
    &::after {
      border-bottom: 1px solid
        ${h("colors.discovery.body.white.accent")};
    }
  }

  .summary-item__content:empty {
    display: none;
  }

  ${f} {
    justify-content: center;
  }

  ${$(r.md)} {
    grid-template-columns: repeat(12, 1fr);
  }
`,_=o.div.withConfig({displayName:"SummaryCollageOneItemComponent"})`
  grid-column: 1 / -1;

  &&& {
    border-bottom: 0;

    .summary-item__content {
      margin: 0;
      @media (min-width: 0) and (max-width: ${r.lg}) {
        margin: 0;
      }
    }
    @media (min-width: 0) and (max-width: ${r.md}) {
      padding-bottom: 0;
    }
  }
`,M=n`
  &&& {
    grid-gap: ${p(4)};
    grid-template-rows: auto 1fr auto;
    height: 100%;
  }

  ${_} {
    display: grid;
    align-items: center;
  }

  ${k}.summary-item__image {
    .summary-item__image {
      display: grid;
      justify-items: center;
      ${({hasEnhancedDailyCartoon:i})=>i&&`\n          ${$(r.lg)} {\n            gap: ${p(3)};\n          }\n        `}

      picture {
        max-width: ${p(37.5)};

        ${$(r.lg)} {
          max-width: ${({hasEnhancedDailyCartoon:i})=>p(i?68.75:50)};
        }

        ${c(`${t.md}px`)} {
          max-width: ${({hasEnhancedDailyCartoon:i})=>p(i?68.75:50)};
        }
      }
    }

    .responsive-cartoon__caption {
      margin-top: 0;
      ${$(r.lg)} {
        margin-top: ${({hasEnhancedDailyCartoon:i})=>i?0:p(2)};
        width: 85%;
      }
    }
  }
`,E=n`
  ${u(0,r.lg)} {
    .summary-item__asset-container {
      ${d("margin",!0)};
    }
  }
`,W=n`
  &&& {
    grid-template-rows: unset;
    background-color: ${h("colors.discovery.body.dark.background")};
    max-width: ${r.xxl};

    ${u(r.sm,r.md)} {
      column-gap: ${p(9)};
      margin: ${p(0)};
      padding: ${p(0)};
    }
    ${$(r.md)} {
      column-gap: ${p(3)};
      margin: ${p(0)};
      padding: ${p(5)} ${p(3)};
    }
    ${$(r.lg)} {
      margin: ${p(0)};
      padding: ${p(7)} ${p(6)};
    }
    ${$(r.xl)} {
      column-gap: 2rem;
      margin: ${p(0)};
      padding: ${p(10)} ${p(8)};
    }
    ${$(r.xxl)} {
      column-gap: 2rem;
      margin: auto;
      padding: ${p(10)} ${p(8)};
    }
  }
  ${m} {
    color: ${h("colors.discovery.body.dark.context-signature")};
  }

  .summary-item__rubric {
    color: ${h("colors.discovery.body.dark.context-signature")};
  }

  .summary-item__dek {
    color: ${h("colors.discovery.body.dark.description")};
  }

  .summary-item__hed--hed-core-primary {
    ${y("typography.definitions.discovery.hed-core-primary")}
    color: ${h("colors.discovery.body.dark.heading")};
  }

  .summary-item__hed {
    color: ${h("colors.discovery.body.dark.heading")};
  }

  .summary-item--dark-background-right {
    ${$(r.md)} {
      grid-column: 2 / -2;
      margin: ${p(0)} ${p(-3)};
    }
    ${$(r.lg)} {
      grid-column: 2 / -2;
      margin: ${p(0)} ${p(-3)};
      padding: ${p(0)};
    }
    ${$(r.xl)} {
      grid-column: 2 / -2;
      margin: ${p(0)} ${p(-4)};
      padding: ${p(0)};
    }
    ${$(r.xxl)} {
      grid-column: 2 / -2;
      margin: ${p(0)};
      padding: ${p(0)};
    }

    .summary-item__asset-container {
      ${$(r.md)} {
        margin-left: ${p(-3)};
      }
      ${$(r.xl)} {
        margin-left: ${p(0)};
      }
    }
  }

  .summary-item__content {
    margin: ${p(0)};
    ${$(r.md)} {
      padding-right: ${p(3)};
    }
    ${$(r.lg)} {
      padding-right: ${p(5)};
    }
    ${$(r.xl)} {
      padding-right: ${p(3)};
    }
    ${$(r.xxl)} {
      padding-right: ${p(6)};
    }
  }
`,T=o.div.withConfig({displayName:"SummaryCollageOneGridWithMargin"})`
  ${N}
  ${({isSingleFeature:i})=>i&&M}

  ${({hasFullWidthImage:i})=>i&&E}
  
  ${({isFullBleedDarkBackground:i})=>i&&W}

  ${({hasEnhancedDailyCartoon:i,theme:e})=>i&&n`
      ${u(r.md,`${t.lg}px`)} {
        ${v}, ${_}, ${B} {
          grid-column: 1 / 7;
        }
      }

      ${c(`${t.lg}px`)} {
        &&& {
          gap: ${p(3)};
        }
      }

      ${$(r.lg)} {
        &&& {
          grid-row-gap: 0;
        }

        ${B} {
          margin-top: ${p(4)};
        }

        ${v}, ${_}, ${B} {
          grid-column: 1 / 9;
        }
      }

      ${s} {
        display: flex;
        justify-content: center;

        ${$(r.lg)} {
          margin-bottom: ${p(3)};
        }

        ${g} {
          ${y(e,"typography.definitions.discovery.subhed-section-primary")};
        }
      }
    `}
`,P=o.div.withConfig({displayName:"SummaryCollageOneIsFullBleed"})`
  ${({isFullBleedDarkBackground:i})=>i&&n`
      background-color: ${h("colors.discovery.body.dark.background")};
      max-width: 100%;
    `}
`;i.exports={SummaryCollageOneTitle:v,SummaryCollageOneCtaLink:B,SummaryCollageOneGridWithMargin:T,SummaryCollageOneIsFullBleed:P,SummaryCollageOneItemComponent:_,SummaryCollageOneAnchorLink:S,SummaryCollageOneCtaIcon:C,SummaryCollageOneAside:w}},14694:(i,e,a)=>{const o=a(45697),n=a(67294),r=a(94184),{BlockquoteEmbedWrapper:t,BlockquoteEmbedContent:d,BlockquoteEmbedFooter:l,BlockquoteEmbedCite:m}=a(45470),{trackComponent:s}=a(40199),g=({attributes:i,children:e,citeUrl:a,className:o,dangerousAttribution:g,hasParagraphMargin:p,hasSmallMargins:c,hasTopBorder:$,shouldUseBodyColor:u})=>(n.useEffect((()=>{s("BlockquoteEmbed")}),[]),n.createElement(t,Object.assign({},i,{cite:a,hasTopBorder:$,hasSmallMargins:c,className:r(o,"blockquote-embed")}),n.createElement(d,{hasParagraphMargin:p,shouldUseBodyColor:u,className:"blockquote-embed__content"},e),g&&n.createElement(l,null,n.createElement(m,{dangerouslySetInnerHTML:{__html:g}}))));g.propTypes={attributes:o.object,children:o.oneOfType([o.arrayOf(o.node),o.node]).isRequired,citeUrl:o.string,className:o.string,dangerousAttribution:o.string,hasParagraphMargin:o.bool,hasSmallMargins:o.bool,hasTopBorder:o.bool,shouldUseBodyColor:o.bool},g.defaultProps={hasSmallMargins:!1,hasTopBorder:!0,shouldUseBodyColor:!1},g.displayName="BlockquoteEmbed",i.exports=g},86982:(i,e,a)=>{const{asConfiguredComponent:o}=a(36380),n=a(14694);i.exports=o(n,"BlockquoteEmbed")},97893:(i,e,a)=>{const{default:o,css:n}=a(51117),{BREAKPOINTS:r}=a(85326),{applyGridSpacing:t,cssVariablesGrid:d}=a(62470),{calculateSpacing:l,minScreen:m,getColorToken:s,getTypographyStyles:g,firstLetterDropCap:p}=a(79720),{BaseText:c}=a(74327),$=a(48655),u=a(94753),y=`\n  ${d()}\n  ${t("padding")}\n\n  margin: 0 auto;\n  width: 100%;\n  max-width: ${r.xxl};\n`,h=o.div.withConfig({displayName:"EmbedWrapper"})`
  ${y}

  ${({isEmbedWrapperFullBleed:i})=>i&&n`
      padding-right: 0;
      padding-left: 0;
      max-width: 100%;
    `}
`,b=o.div.withConfig({displayName:"EmbedWrapperHed"})`
  margin-bottom: ${l(2)};
`,f=o(c).withConfig({displayName:"EmbedWrapperDek"})`
  margin: 0 auto ${l(2)};
  padding-right: ${l(1)};
  padding-left: ${l(1)};
  max-width: ${l(75)};
  text-align: center;
  ${g("typography.definitions.consumptionEditorial.description-core")}
`,k=o($).withConfig({displayName:"GridWrapper"})`
  ${y}
`,x=o(u).withConfig({displayName:"EmbedBody"})`
  p.has-dropcap {
    margin-top: ${l(4,"px")};

    &::first-letter {
      ${p};
    }

    &.has-dropcap__lead-standard-heading {
      &::first-letter {
        padding: 0.1em 0.05em 0 0;
        color: ${s("colors.consumption.lead.standard.heading")};
      }
    }
  }
  ${({constrainPagragraph:i})=>i&&`\n      inline-embed{\n        display: block;\n        p {\n          display:inline-block;\n          max-width: ${l(40.875)};\n          ${m(r.lg)} {\n            max-width: ${l(91.5)};\n          }\n        }\n      }\n    `}
`;i.exports={EmbedWrapper:h,EmbedWrapperHed:b,EmbedWrapperDek:f,EmbedBody:x,GridWrapper:k}}}]);