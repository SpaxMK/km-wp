(this.webpackJsonp=this.webpackJsonp||[]).push([["widget"],{CWFR:function(t,e,o){"use strict";var l={name:"ContentBasePanel",extends:o("a1HO").a,data:function(){return{panelTabType:"content"}}},n=(o("x/V5"),o("KHd+")),a=Object(n.a)(l,void 0,void 0,!1,null,"bdf6ccb4",null);e.a=a.exports},EdaU:function(t,e,o){"use strict";o.r(e);var l=o("soVv"),n=o("80Qw"),a=o("kOyt"),i=o("c000"),r=o("UGry"),s=o("CWFR"),d=o("zwDk"),c=o("u337"),g=o("RUen"),p=o("xlh1"),u={name:"WidgetAreaBasicStyle",components:{TextAlignUiWrapper:o("3Hte").a,SidebarLayoutControl:d.a,SelectControl:c.a,BackgroundControl:r.a,Border:l.a,HColorPicker:n.a,Typography:a.a,TextShadow:i.a,SliderWithUnit:p.a},extends:s.a,data:function(){return{configWidgetArea:g.a,activeName_:"widgetAreaBackground"}},computed:{storeOptions:function(){return{styledComponent:"widgetBox"}}},methods:{getBullet:function(){return!("disc"!==this.getStyle("listStyleType","",{styledComponent:"widgetList"}))},setBullet:function(t){t?this.setStyle("listStyleType","disc",{styledComponent:"widgetList"}):this.setStyle("listStyleType","none",{styledComponent:"widgetList"})}}},y=o("KHd+"),m=Object(y.a)(u,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-collapse",{attrs:{accordion:!0},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[o("el-collapse-item",{attrs:{title:"Widget area background",name:"widgetAreaBackground"}},[o("background-control",{attrs:{types:t.getSetting("background.types",""),value:t.getStyle("background",{},{styledComponent:""}),"label-color":"Background color"},on:{change:function(e){t.setStyleFromChild("background",e,{styledComponent:""})}}})],1),t._v(" "),o("el-collapse-item",{attrs:{title:"Widget area border",name:"widgetAreaBorder"}},[o("border",{attrs:{value:t.getStyle("border",{},{styledComponent:""})},on:{change:function(e){t.setStyleFromChild("border",e,{styledComponent:""})}}})],1),t._v(" "),o("el-collapse-item",{attrs:{title:"General widget",name:"generalWidget"}},[o("background-control",{attrs:{types:t.getSetting("background.types",""),value:t.getStyle("background",{},{styledComponent:"widgetBox"}),"label-color":"Background color"},on:{change:function(e){t.setStyleFromChild("background",e,{styledComponent:"widgetBox"})}}}),t._v(" "),o("slider-with-unit",{attrs:{value:t.getStyle("margin.bottom",{},{styledComponent:"widgetBox"}),min:t.configWidgetArea.spaceBetweenWidgetsOptions.min,max:t.configWidgetArea.spaceBetweenWidgetsOptions.max,step:t.configWidgetArea.spaceBetweenWidgetsOptions.step,"unit-options":t.configWidgetArea.dimensionsUnits,label:"Space between widgets","value-can-be-empty":""},on:{change:function(e){t.setStyleFromChild("margin.bottom",e,{styledComponent:"widgetBox"})}}}),t._v(" "),o("text-align-ui-wrapper",{attrs:{options:{styledComponent:"widgetBox"}}})],1),t._v(" "),o("el-collapse-item",{attrs:{title:"General widget border",name:"generalWidgetBorder"}},[o("border",{attrs:{value:t.getStyle("border",{},{styledComponent:"widgetBox"})},on:{change:function(e){t.setStyleFromChild("border",e,{styledComponent:"widgetBox"})}}})],1),t._v(" "),o("el-collapse-item",{attrs:{title:"General widget title",name:"generalWidgetTitle"}},[o("h-color-picker",{attrs:{value:t.getStyle("typography.color","",{styledComponent:"widgetTitle"}),label:"Text color"},on:{change:function(e){t.setStyleFromChild("typography.color",e,{styledComponent:"widgetTitle"})}}}),t._v(" "),o("typography",{attrs:{value:t.getStyle("typography",{},{styledComponent:"widgetTitle"})},on:{change:function(e){t.setStyleFromChild("typography",e,{styledComponent:"widgetTitle"})}}}),t._v(" "),o("text-shadow",{attrs:{value:t.getStyle("textShadow",{},{styledComponent:"widgetTitle"})},on:{change:function(e){t.setStyleFromChild("textShadow",e,{styledComponent:"widgetTitle"})}}}),t._v(" "),o("text-align-ui-wrapper",{attrs:{options:{styledComponent:"widgetTitle"}}})],1),t._v(" "),o("el-collapse-item",{attrs:{title:"General widget list",name:"generalWidgetList"}},[o("sidebar-layout-control",{attrs:{"label-spacing":"large"}},[o("label",{attrs:{slot:"label"},slot:"label"},[t._v("Show bullets")]),t._v(" "),o("el-switch",{attrs:{slot:"labelRight0",value:t.getBullet()},on:{change:function(e){t.setBullet(e)}},slot:"labelRight0"})],1),t._v(" "),o("slider-with-unit",{attrs:{value:t.getStyle("margin.left",{},{styledComponent:"widgetListItem"}),min:t.configWidgetArea.listMarginOffsetOptions.min,max:t.configWidgetArea.listMarginOffsetOptions.max,step:t.configWidgetArea.listMarginOffsetOptions.step,"unit-options":t.configWidgetArea.dimensionsUnits,label:"List offset","value-can-be-empty":""},on:{change:function(e){t.setStyleFromChild("margin.left",e,{styledComponent:"widgetListItem"})}}}),t._v(" "),o("sidebar-layout-control",{attrs:{"use-separator":!0}},[o("border",{attrs:{slot:"control",value:t.getStyle("border",{},{styledComponent:"widgetListItem"}),"label-border-type":"List item border type","label-border-size":"List item border","label-border-color":"List item border color"},on:{change:function(e){t.setStyleFromChild("border",e,{styledComponent:"widgetListItem"})}},slot:"control"})],1),t._v(" "),o("h-color-picker",{attrs:{value:t.getStyle("typography.color","",{styledComponent:"widgetListItem"}),label:"Text color"},on:{change:function(e){t.setStyleFromChild("typography.color",e,{styledComponent:"widgetListItem"})}}}),t._v(" "),o("h-color-picker",{attrs:{value:t.getStyle("typography.color","",{styledComponent:"widgetListItemLink"}),label:"Link color"},on:{change:function(e){t.setStyleFromChild("typography.color",e,{styledComponent:"widgetListItemLink"})}}}),t._v(" "),o("h-color-picker",{attrs:{value:t.getStyle("typography.color","",{styledComponent:"widgetListItemLink",state:"hover"}),label:"Link hover color"},on:{change:function(e){t.setStyleFromChild("typography.color",e,{styledComponent:"widgetListItemLink",state:"hover"})}}}),t._v(" "),o("typography",{attrs:{value:t.getStyle("typography",{},{styledComponent:"widgetListItem"}),"layout-config":{last:{labelSpacing:"none"}}},on:{change:function(e){t.setStyleFromChild("typography",e,{styledComponent:"widgetListItem"}),t.setStyleFromChild("typography",e,{styledComponent:"widgetListItemLink"})}}})],1),t._v(" "),o("el-collapse-item",{attrs:{title:"General widget input",name:"generalWidgetInput"}},[o("sidebar-layout-control",{attrs:{"use-separator":!0}},[o("border",{attrs:{slot:"control",value:t.getStyle("border",{},{styledComponent:"widgetInput"})},on:{change:function(e){t.setStyleFromChild("border",e,{styledComponent:"widgetInput"})}},slot:"control"})],1),t._v(" "),o("h-color-picker",{attrs:{value:t.getStyle("background.color","",{styledComponent:"widgetInput"}),label:"Background color"},on:{change:function(e){t.setStyleFromChild("background.color",e,{styledComponent:"widgetInput"})}}}),t._v(" "),o("h-color-picker",{attrs:{value:t.getStyle("typography.color","",{styledComponent:"widgetInput"}),label:"Text color"},on:{change:function(e){t.setStyleFromChild("typography.color",e,{styledComponent:"widgetInput"})}}}),t._v(" "),o("h-color-picker",{attrs:{value:t.getStyle("typography.color","",{styledComponent:"widgetInput",state:"focus"}),label:"Text focus color"},on:{change:function(e){t.setStyleFromChild("typography.color",e,{styledComponent:"widgetInput",state:"focus"})}}}),t._v(" "),o("typography",{attrs:{value:t.getStyle("typography",{},{styledComponent:"widgetInput"}),"layout-config":{last:{labelSpacing:"none"}}},on:{change:function(e){t.setStyleFromChild("typography",e,{styledComponent:"widgetInput"})}}})],1)],1)],1)},[],!1,null,null,null);e.default=m.exports},GS8p:function(t,e,o){"use strict";o.r(e);var l=o("a1HO"),n=o("UGry"),a=o("stGT"),i=o("soVv"),r=o("zwDk"),s=o("kOyt"),d=o("c000"),c=o("80Qw"),g={buttonWidthOptions:{min:0,max:200,step:1},stateInputOptions:[{label:"Normal",value:""},{label:"Focus",value:"focus"}],dimensionsUnits:[{label:"PX",value:"px"}],stateButtonOptions:[{label:"Normal",value:""},{label:"Hover",value:"hover"}]},p=o("xlh1"),u=(o("uPlq"),{name:"BasicStyle",components:{BackgroundControl:n.a,Border:i.a,SidebarLayoutControl:r.a,Typography:s.a,TextShadow:d.a,SliderWithUnit:p.a,HColorPicker:c.a},extends:l.a,mixins:[a.a],data:function(){return{searchWidgetConfig:g,activeName_:"widgetBox"}},computed:{isIconButtonVisible:function(){return this.getLocalProp("showIconButton",!0)},isPlaceholderVisible:function(){return this.getLocalProp("showPlaceholder",!0)},isButtonVisible:function(){return this.getLocalProp("showButton",!0)}},methods:{setBorder:function(t){var e={top:{color:t},left:{color:t},right:{color:t},bottom:{color:t}};this.setStyle("border",e,{styledComponent:"widget-input",state:this.getLocalProp("stateInput")})},toggleIconButton:function(t){this.setLocalProp("showIconButton",t),t?(this.setStyle("display","none",{styledComponent:"widget-button-text"}),this.setStyle("display","inline-block",{styledComponent:"widget-button-icon"})):(this.setStyle("display","none",{styledComponent:"widget-button-icon"}),this.setStyle("display","inline-block",{styledComponent:"widget-button-text"}))},togglePlaceholder:function(t){this.setLocalProp("showPlaceholder",t),t?this.setStyle("color","inherit",{styledComponent:"widget-input-placeholder"}):this.setStyle("color","transparent",{styledComponent:"widget-input-placeholder"})},toggleButton:function(t){this.setLocalProp("showButton",t),t?this.setStyle("display","inline-block",{styledComponent:"widget-button"}):this.setStyle("display","none !important",{styledComponent:"widget-button"})}}}),y=o("KHd+"),m=Object(y.a)(u,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-collapse",{attrs:{accordion:!0},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[o("el-collapse-item",{attrs:{title:"Widget box",name:"widgetBox"}},[o("sidebar-layout-control",{attrs:{"use-separator":!0}},[o("background-control",{attrs:{slot:"control",value:t.getAreaMergedStyle("background",{areaStyledComponent:"widgetBox",localStyledComponent:"widget-box"}),types:t.getSetting("background.types"),"label-color":"Background color"},on:{change:function(e){t.setStyleFromChild("background",e,{styledComponent:"widget-box"})}},slot:"control"})],1),t._v(" "),o("border",{attrs:{value:t.getAreaMergedStyle("border",{areaStyledComponent:"widgetBox",localStyledComponent:"widget-box"})},on:{change:function(e){t.setStyleFromChild("border",e,{styledComponent:"widget-box"})}}})],1),t._v(" "),o("el-collapse-item",{attrs:{title:"Widget title",name:"widgetTitle"}},[o("h-color-picker",{attrs:{value:t.getAreaMergedStyle("typography",{areaStyledComponent:"widgetTitle",localStyledComponent:"widget-title"}).color,label:"Text color"},on:{change:function(e){t.setStyleFromChild("typography.color",e,{styledComponent:"widget-title"})}}}),t._v(" "),o("typography",{attrs:{value:t.getAreaMergedStyle("typography",{areaStyledComponent:"widgetTitle",localStyledComponent:"widget-title"}),"layout-config":{last:{labelSpacing:"large"}}},on:{change:function(e){t.setStyleFromChild("typography",e,{styledComponent:"widget-title"})}}}),t._v(" "),o("text-shadow",{attrs:{value:t.getAreaMergedStyle("textShadow",{areaStyledComponent:"widgetTitle",localStyledComponent:"widget-title"})},on:{change:function(e){t.setStyleFromChild("textShadow",e,{styledComponent:"widget-title"})}}})],1),t._v(" "),o("el-collapse-item",{attrs:{title:"Search input",name:"searchInput"}},[o("sidebar-layout-control",[o("select-control",{attrs:{slot:"control",value:t.getLocalProp("stateInput"),items:t.searchWidgetConfig.stateInputOptions},on:{change:function(e){t.setLocalProp("stateInput",e)}},slot:"control"})],1),t._v(" "),o("h-color-picker",{attrs:{value:t.getAreaMergedStyle("typography",{areaStyledComponent:"widgetInput",localStyledComponent:"widget-input",state:t.getLocalProp("stateInput")}).color,label:"Text color"},on:{change:function(e){t.setStyleFromChild("typography.color",e,{styledComponent:"widget-input",state:t.getLocalProp("stateInput")})}}}),t._v(" "),o("h-color-picker",{attrs:{value:t.getAreaMergedStyle("background",{areaStyledComponent:"widgetInput",localStyledComponent:"widget-input",state:t.getLocalProp("stateInput")}).color,label:"Background color"},on:{change:function(e){t.setStyleFromChild("background.color",e,{styledComponent:"widget-input",state:t.getLocalProp("stateInput")})}}}),t._v(" "),o("h-color-picker",{attrs:{value:t.getAreaMergedStyle("border",{areaStyledComponent:"widgetInput",localStyledComponent:"widget-input",state:t.getLocalProp("stateInput")}).top.color,"layout-config":{useSeparator:!0},label:"Border color"},on:{change:function(e){t.setBorder(e.value)}}}),t._v(" "),o("sidebar-layout-control",{attrs:{"label-spacing":"extraLarge"}},[o("label",{attrs:{slot:"label"},slot:"label"},[t._v("Show input placeholder")]),t._v(" "),o("el-switch",{attrs:{slot:"labelRight",value:t.isPlaceholderVisible},on:{change:function(e){t.togglePlaceholder(e)}},slot:"labelRight"})],1),t._v(" "),t.isPlaceholderVisible?o("sidebar-layout-control",{attrs:{"use-separator":!0,"label-spacing":"extraLarge"}},[o("h-color-picker",{attrs:{slot:"control",value:t.getStyle("color","",{styledComponent:"widget-input-placeholder"}),label:"Placeholder color"},on:{change:function(e){t.setStyleFromChild("color",e,{styledComponent:"widget-input-placeholder"})}},slot:"control"})],1):t._e(),t._v(" "),o("sidebar-layout-control",[o("border",{attrs:{slot:"control",value:t.getAreaMergedStyle("border",{areaStyledComponent:"widgetInput",localStyledComponent:"widget-input"},""),"show-color":!1},on:{change:function(e){t.setStyleFromChild("border",e,{styledComponent:"widget-input"})}},slot:"control"})],1)],1),t._v(" "),o("el-collapse-item",{attrs:{title:"Search button",name:"searchButton"}},[o("sidebar-layout-control",{attrs:{"label-spacing":"extraLarge"}},[o("label",{attrs:{slot:"label"},slot:"label"},[t._v("Display Button")]),t._v(" "),o("el-switch",{attrs:{slot:"labelRight",value:t.isButtonVisible},on:{change:function(e){t.toggleButton(e)}},slot:"labelRight"})],1),t._v(" "),t.isButtonVisible?[o("sidebar-layout-control",{attrs:{"label-spacing":"extraLarge"}},[o("label",{attrs:{slot:"label"},slot:"label"},[t._v("Display as Icon Button")]),t._v(" "),o("el-switch",{attrs:{slot:"labelRight",value:t.isIconButtonVisible},on:{change:function(e){t.toggleIconButton(e)}},slot:"labelRight"})],1),t._v(" "),o("sidebar-layout-control",[o("select-control",{attrs:{slot:"control",value:t.getLocalProp("stateButton"),items:t.searchWidgetConfig.stateButtonOptions},on:{change:function(e){t.setLocalProp("stateButton",e)}},slot:"control"})],1),t._v(" "),o("h-color-picker",{attrs:{value:t.getStyle("typography.color","",{styledComponent:"widget-button",state:t.getLocalProp("stateButton")}),label:t.isIconButtonVisible?"Icon Color":"Text color"},on:{change:function(e){t.setStyleFromChild("typography.color",e,{styledComponent:"widget-button",state:t.getLocalProp("stateButton")})}}}),t._v(" "),o("h-color-picker",{attrs:{value:t.getStyle("background.color","",{styledComponent:"widget-button",state:t.getLocalProp("stateButton")}),"layout-config":{useSeparator:!0},label:"Background color"},on:{change:function(e){t.setStyleFromChild("background.color",e,{styledComponent:"widget-button",state:t.getLocalProp("stateButton")})}}}),t._v(" "),o("sidebar-layout-control",{attrs:{"use-separator":!0}},[o("border",{attrs:{slot:"control",value:t.getStyle("border",{},{styledComponent:"widget-button",state:t.getLocalProp("stateButton")})},on:{change:function(e){t.setStyleFromChild("border",e,{styledComponent:"widget-button",state:t.getLocalProp("stateButton")})}},slot:"control"})],1),t._v(" "),o("typography",{attrs:{value:t.getStyle("typography",{},{styledComponent:"widget-button"}),"layout-config":{last:{labelSpacing:"none"}}},on:{change:function(e){t.setStyleFromChild("typography",e,{styledComponent:"widget-button"})}}})]:t._e()],2)],1)],1)},[],!1,null,null,null);e.default=m.exports},Hv4c:function(t,e,o){"use strict";var l=o("c00a");o.n(l).a},IIe8:function(t,e,o){"use strict";(function(t){var l=o("CWFR"),n=o("RUen"),a=o("zwDk"),i=o("N9ft"),r=o("LZZQ"),s=o("stGT");e.a={name:"WidgetAreaContent",components:{SelectControlOld:i.a,SidebarLayoutControl:a.a},extends:l.a,mixins:[s.b],data:function(){return{configWidgetArea:n.a,activeName_:"widgetAreaProperties"}},computed:{renderedWidgetList:function(){return t.map(this.model.children,function(t){return{value:t.name,label:r.b[t.name]}})}},methods:{manageWidgets:function(){var t=this.getLocalProp("widgetAreaId");this.$wp.customizerFocusEntity(this.$store,"section","sidebar-widgets-colibri-"+t).then(function(t){t.controls().forEach(function(t){t.activate()})}).catch(function(){top.jQuery("#accordion-panel-widgets >").click()})}}}}).call(this,o("uPlq")._)},LZZQ:function(t,e,o){"use strict";o.d(e,"c",function(){return a}),o.d(e,"b",function(){return r}),o.d(e,"a",function(){return i});var l=o("Abq8"),n=o("uPlq"),a=n.default.merge({},{widget_search:"hop-search-widget",widget_recent_entries:"hop-recent-post-widget",widget_recent_comments:"hop-recent-comments-widget",widget_categories:"hop-categories-widget",widget_archive:"hop-archives-widget",widget_meta:"hop-meta-widget",widget_media_audio:"hop-audio-widget",widget_calendar:"hop-calendar-widget",widget_custom_html:"hop-custom-html-widget",widget_media_gallery:"hop-gallery-widget",widget_media_image:"hop-image-widget",widget_nav_menu:"hop-navigation-menu-widget",widget_pages:"hop-pages-widget",widget_rss:"hop-rss-widget",widget_text:"hop-text-widget",widget_media_video:"hop-video-widget",widget_tag_cloud:"hop-tag-cloud-widget"},l.b),i=n.default.invert(a),r=n.default.merge({},{"hop-tag-cloud-widget":"Tag Cloud Widget","hop-video-widget":"Video Widget","hop-text-widget":"Text Widget","hop-rss-widget":"RSS Widget","hop-pages-widget":"Pages Widget","hop-navigation-menu-widget":"Navigation Menu Widget","hop-image-widget":"Image Widget","hop-gallery-widget":"Gallery Widget","hop-custom-html-widget":"Custom Html Widget","hop-calendar-widget":"Calendar Widget","hop-audio-widget":"Audio Widget","hop-search-widget":"Search Widget","hop-recent-post-widget":"Recent Post Widget","hop-recent-comments-widget":"Recent Comments Widget","hop-categories-widget":"Categories Widget","hop-archives-widget":"Archives Widget","hop-meta-widget":"Meta Widget"},l.d)},MuKD:function(t,e,o){},RUen:function(t,e,o){"use strict";e.a={dimensionsUnits:[{label:"PX",value:"px"}],listMarginOffsetOptions:{min:0,max:50,step:1},spaceBetweenWidgetsOptions:{min:0,max:100,step:1}}},Sf5m:function(t,e,o){"use strict";o.r(e);var l=o("CWFR"),n={name:"Content",components:{Note:o("wJT4").a},extends:l.a,data:function(){return{activeName_:"widgetProperties"}},methods:{manageWidget:function(){var t=this,e=this.getLocalProp("widgetAreaId","",{nodeId:this.model.parentId});this.$wp.customizerFocusEntity(this.$store,"section","sidebar-widgets-colibri-"+e).then(function(e){var o=wp.customize.Widgets.getWidgetFormControlForWidget(t.getLocalProp("widgetId"));o&&o.focus()}).catch(function(){top.jQuery("#accordion-panel-widgets >").click()})}}},a=(o("Hv4c"),o("KHd+")),i=Object(a.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-collapse",{attrs:{accordion:!0},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[o("el-collapse-item",{attrs:{title:"Widget Properties",name:"widgetProperties"}},[o("el-button",{on:{click:function(e){t.manageWidget()}}},[t._v("Manage Widget")])],1)],1)],1)},[],!1,null,"4b8772a5",null);e.default=i.exports},UFcw:function(t,e,o){"use strict";o.r(e);var l=o("a1HO"),n=o("UGry"),a=o("stGT"),i=o("soVv"),r=o("zwDk"),s=o("kOyt"),d=o("c000"),c=o("80Qw"),g=o("xlh1"),p=o("RUen"),u={name:"BasicStyle",components:{BackgroundControl:n.a,Border:i.a,SidebarLayoutControl:r.a,HColorPicker:c.a,TextShadow:d.a,Typography:s.a,SliderWithUnit:g.a},extends:l.a,mixins:[a.a],data:function(){return{configWidgetArea:p.a,activeName_:"widgetBox"}},methods:{getBullet:function(){return!("disc"!==this.getAreaMergedStyle("listStyleType",{areaStyledComponent:"widgetList",localStyledComponent:"widget-list",object:!1}))},setBullet:function(t){t?this.setStyle("listStyleType","disc",{styledComponent:"widget-list"}):this.setStyle("listStyleType","none",{styledComponent:"widget-list"})}}},y=o("KHd+"),m=Object(y.a)(u,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-collapse",{attrs:{accordion:!0},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[o("el-collapse-item",{attrs:{title:"Widget box",name:"widgetBox"}},[o("sidebar-layout-control",{attrs:{"use-separator":!0}},[o("background-control",{attrs:{slot:"control",value:t.getAreaMergedStyle("background",{areaStyledComponent:"widgetBox",localStyledComponent:"widget-box"}),types:t.getSetting("background.types"),"label-color":"Background color"},on:{change:function(e){t.setStyleFromChild("background",e,{styledComponent:"widget-box"})}},slot:"control"})],1),t._v(" "),o("border",{attrs:{value:t.getAreaMergedStyle("border",{areaStyledComponent:"widgetBox",localStyledComponent:"widget-box"})},on:{change:function(e){t.setStyleFromChild("border",e,{styledComponent:"widget-box"})}}})],1),t._v(" "),o("el-collapse-item",{attrs:{title:"Widget title",name:"widgetTitle"}},[o("h-color-picker",{attrs:{value:t.getAreaMergedStyle("typography",{areaStyledComponent:"widgetTitle",localStyledComponent:"widget-title"}).color,label:"Text color"},on:{change:function(e){t.setStyleFromChild("typography.color",e,{styledComponent:"widget-title"})}}}),t._v(" "),o("typography",{attrs:{value:t.getAreaMergedStyle("typography",{areaStyledComponent:"widgetTitle",localStyledComponent:"widget-title"}),"layout-config":{last:{labelSpacing:"large"}}},on:{change:function(e){t.setStyleFromChild("typography",e,{styledComponent:"widget-title"})}}}),t._v(" "),o("text-shadow",{attrs:{value:t.getAreaMergedStyle("textShadow",{areaStyledComponent:"widgetTitle",localStyledComponent:"widget-title"})},on:{change:function(e){t.setStyleFromChild("textShadow",e,{styledComponent:"widget-title"})}}})],1),t._v(" "),o("el-collapse-item",{attrs:{title:"Widget list",name:"widgetList"}},[o("sidebar-layout-control",{attrs:{"label-spacing":"large"}},[o("label",{attrs:{slot:"label"},slot:"label"},[t._v("Show bullets")]),t._v(" "),o("el-switch",{attrs:{slot:"labelRight0",value:t.getBullet()},on:{change:function(e){t.setBullet(e)}},slot:"labelRight0"})],1),t._v(" "),o("slider-with-unit",{attrs:{value:t.getAreaMergedStyle("margin.left",{areaStyledComponent:"widgetListItem",localStyledComponent:"widget-list-item"}),min:t.configWidgetArea.listMarginOffsetOptions.min,max:t.configWidgetArea.listMarginOffsetOptions.max,step:t.configWidgetArea.listMarginOffsetOptions.step,"unit-options":t.configWidgetArea.dimensionsUnits,label:"List offset","value-can-be-empty":""},on:{change:function(e){t.setStyleFromChild("margin.left",e,{styledComponent:"widget-list-item"})}}}),t._v(" "),o("sidebar-layout-control",{attrs:{"use-separator":!0}},[o("border",{attrs:{slot:"control",value:t.getAreaMergedStyle("border",{areaStyledComponent:"widgetListItem",localStyledComponent:"widget-list-item"}),"label-border-type":"List item border type","label-border-size":"List item border","label-border-color":"List item border color"},on:{change:function(e){t.setStyleFromChild("border",e,{styledComponent:"widget-list-item"})}},slot:"control"})],1),t._v(" "),o("h-color-picker",{attrs:{value:t.getAreaMergedStyle("typography",{areaStyledComponent:"widgetListItem",localStyledComponent:"widget-list-item"}).color,label:"Text color"},on:{change:function(e){t.setStyleFromChild("typography.color",e,{styledComponent:"widget-list-item"})}}}),t._v(" "),o("h-color-picker",{attrs:{value:t.getAreaMergedStyle("typography",{areaStyledComponent:"widgetListItemLink",localStyledComponent:"widget-list-item-link"}).color,label:"Link color"},on:{change:function(e){t.setStyleFromChild("typography.color",e,{styledComponent:"widget-list-item-link"})}}}),t._v(" "),o("h-color-picker",{attrs:{value:t.getAreaMergedStyle("typography",{areaStyledComponent:"widgetListItemLink",localStyledComponent:"widget-list-item-link",state:"hover"}).color,label:"Link hover color"},on:{change:function(e){t.setStyleFromChild("typography.color",e,{styledComponent:"widget-list-item-link",state:"hover"})}}}),t._v(" "),o("typography",{attrs:{value:t.getAreaMergedStyle("typography",{areaStyledComponent:"widgetListItem",localStyledComponent:"widget-list-item"}),"layout-config":{last:{labelSpacing:"none"}}},on:{change:function(e){t.setStyleFromChild("typography",e,{styledComponent:"widget-list-item"}),t.setStyleFromChild("typography",e,{styledComponent:"widget-list-item-link"})}}})],1)],1)],1)},[],!1,null,null,null);e.default=m.exports},ZwLV:function(t,e,o){"use strict";o.d(e,"a",function(){return l});o("uPlq");var l={computed:{defaultSettings:function(){return{state:"",styledComponent:this.defaultStyledComponent,media:this.selectedMedia}}}}},a1HO:function(t,e,o){"use strict";var l=o("EHf7"),n=o("Vgl9"),a=o("ZwLV"),i=o("uPlq"),r={name:"BasicStyleBasePanel",extends:l.a,mixins:[a.a],data:function(){return{activeName_:"",panelTabType:"style"}},computed:{initalActiveName:function(){return""},storeActiveName:function(){var t=this.$store.getters["ui/sidebarMenuOptions"],e=n.P.optionsMenu,o=i.default.get(t,e,{});o||(o={});var l=o,a=l.section,r=l.modified,s=l.modelId,d=l.tab;return a&&s===this.modelId&&this.panelTabType===d?{name:a,modified:r}:null},activeName:{set:function(t){this.activeName_=t},get:function(){var t=this.activeName_?this.activeName_:this.initalActiveName;if(!t)try{t=this.$el.__vue__.$slots.default[0].componentInstance.$props.name}catch(t){}return t}}},watch:{storeActiveName:{immediate:!0,handler:function(t,e){var o=i.default.get(e,"modified"),l=i.default.get(t,"name"),a=i.default.get(t,"modified");if(l&&o!==a){this.activeName_=l;var r={tab:this.panelTabType};this.$store.dispatch("ui/openSidebarMenuItem",{name:n.P.optionsMenu,options:r})}}}}},s=o("KHd+"),d=Object(s.a)(r,void 0,void 0,!1,null,null,null);e.a=d.exports},c00a:function(t,e,o){},fe97:function(t,e,o){"use strict";o.r(e);var l=o("a1HO"),n=o("UGry"),a=o("stGT"),i=o("soVv"),r=o("zwDk"),s=o("kOyt"),d=o("c000"),c=o("80Qw"),g={name:"BasicStyle",components:{BackgroundControl:n.a,Border:i.a,SidebarLayoutControl:r.a,Typography:s.a,TextShadow:d.a,HColorPicker:c.a},extends:l.a,mixins:[a.a],data:function(){return{activeName_:"widgetBox"}}},p=o("KHd+"),u=Object(p.a)(g,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-collapse",{attrs:{accordion:!0},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[o("el-collapse-item",{attrs:{title:"Widget box",name:"widgetBox"}},[o("sidebar-layout-control",{attrs:{"use-separator":!0}},[o("background-control",{attrs:{slot:"control",value:t.getAreaMergedStyle("background",{areaStyledComponent:"widgetBox",localStyledComponent:"widget-box"}),types:t.getSetting("background.types"),"label-color":"Background color"},on:{change:function(e){t.setStyleFromChild("background",e,{styledComponent:"widget-box"})}},slot:"control"})],1),t._v(" "),o("border",{attrs:{value:t.getAreaMergedStyle("border",{areaStyledComponent:"widgetBox",localStyledComponent:"widget-box"})},on:{change:function(e){t.setStyleFromChild("border",e,{styledComponent:"widget-box"})}}})],1),t._v(" "),o("el-collapse-item",{attrs:{title:"Widget title",name:"widgetTitle"}},[o("h-color-picker",{attrs:{value:t.getAreaMergedStyle("typography",{areaStyledComponent:"widgetTitle",localStyledComponent:"widget-title"}).color,label:"Text color"},on:{change:function(e){t.setStyleFromChild("typography.color",e,{styledComponent:"widget-title"})}}}),t._v(" "),o("typography",{attrs:{value:t.getAreaMergedStyle("typography",{areaStyledComponent:"widgetTitle",localStyledComponent:"widget-title"}),"layout-config":{last:{labelSpacing:"large"}}},on:{change:function(e){t.setStyleFromChild("typography",e,{styledComponent:"widget-title"})}}}),t._v(" "),o("text-shadow",{attrs:{value:t.getAreaMergedStyle("textShadow",{areaStyledComponent:"widgetTitle",localStyledComponent:"widget-title"})},on:{change:function(e){t.setStyleFromChild("textShadow",e,{styledComponent:"widget-title"})}}})],1)],1)],1)},[],!1,null,null,null);e.default=u.exports},kLXm:function(t,e,o){"use strict";o.r(e);var l=o("IIe8").a,n=o("KHd+"),a=Object(n.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-collapse",{attrs:{accordion:!0},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[o("el-collapse-item",{attrs:{title:"Widget Area Properties",name:"widgetAreaProperties"}},[o("el-button",{on:{click:function(e){t.manageWidgets()}}},[t._v("Manage Widgets")])],1)],1)],1)},[],!1,null,null,null);e.default=a.exports},kOyt:function(t,e,o){"use strict";var l=o("uPlq"),n=o("YiDJ"),a=o("jJnb"),i=o("2MLn"),r=o("PCQR"),s=o("zwDk"),d=o("5wFR"),c=o("jax2"),g=o("MkEI"),p=o("uROi"),u={name:"TypographyPopup",components:{HButton:n.a,ResetButton:r.a,FontControl:a.a,SidebarLayoutControl:s.a,SettingsButton:c.a},mixins:[i.a,g.a,p.a],props:{label:{type:String,default:"Typography"},value:{type:Object,default:function(){return{}}},layoutConfig:{type:Object,default:function(){return{last:{labelSpacing:"extraLarge"}}}},type:{type:String,default:"paragraph"},tag:{type:String,default:"p"},showLineHeight:{},showTextDecoration:{},showSize:{type:Boolean,default:!0}},data:function(){return{popoverOpened:!1}},computed:{val:function(){var t=l.default.get(this.inheritedStyle,"typography."+this.tag,{});return l.default.merge({},d.a.default,t,this.value)}},methods:{handleChange:function(t){var e=l.default.get(t,"value",!1),o={};l.default.isString(e)&&""==e&&(o.unset=!0),this.setValue("",t,!0,{options:o})},onPopoverOpened:function(){this.popoverOpened=!0}}},y=(o("og8/"),o("KHd+")),m=Object(y.a)(u,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-popover",{ref:"fontPopover",attrs:{placement:"right-start",title:"",width:"300",trigger:"click","popper-class":"sidebar-popover-container"},on:{show:t.onPopoverOpened}},[t.popoverOpened?o("font-control",{attrs:{value:t.val,"show-color":!1,"show-line-height":t.showLineHeight,"show-text-decoration":t.showTextDecoration,"show-size":t.showSize,"popover-opened":t.popoverOpened},on:{change:t.handleChange}}):t._e()],1),t._v(" "),o("sidebar-layout-control",{attrs:{"control-spacing":t.getLayoutData("last.controlSpacing"),"label-spacing":t.getLayoutData("last.labelSpacing"),"use-separator":t.getLayoutData("useSeparator")}},[o("label",{attrs:{slot:"label"},slot:"label"},[t._v(t._s(t.label))]),t._v(" "),o("reset-button",{attrs:{slot:"labelRight1"},on:{click:function(e){t.handleReset("")}},slot:"labelRight1"}),t._v(" "),o("settings-button",{directives:[{name:"popover",rawName:"v-popover:fontPopover",arg:"fontPopover"}],attrs:{slot:"labelRight2"},slot:"labelRight2"})],1)],1)},[],!1,null,"431e51be",null);e.a=m.exports},kaPx:function(t,e,o){},"og8/":function(t,e,o){"use strict";var l=o("kaPx");o.n(l).a},stGT:function(t,e,o){"use strict";o.d(e,"b",function(){return n}),o.d(e,"a",function(){return a});var l=o("uPlq"),n={methods:{selectWidget:function(t){var e=l.default.find(this.model.children,{name:t});e&&this.$store.dispatch("page/SET_SELECTED_NODE",e.id)}}},a={methods:{getAreaMergedStyle:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=l.default.extend({areaStyledComponent:"",localStyledComponent:"",state:"",object:!0},e);var o=this.getStyle(t,{},{styledComponent:e.localStyledComponent,state:e.state}),n=this.getStyle(t,{},{nodeId:this.model.parentId,styledComponent:e.areaStyledComponent,state:e.state});return e.object?l.default.merge({},n,o):l.default.merge({},{value:n},{value:o}).value}}}},"x/V5":function(t,e,o){"use strict";var l=o("MuKD");o.n(l).a}}]);
