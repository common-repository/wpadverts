(()=>{"use strict";var t={n:e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},d:(e,o)=>{for(var s in o)t.o(o,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:o[s]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};const e=window.wp.i18n,o=window.wp.blocks;function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function i(t,e,o){return(e=function(t){var e=function(t){if("object"!=s(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,"string");if("object"!=s(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==s(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}const n=window.React,l=window.wp.element,r=window.wp.blockEditor,a=window.wp.components,p=window.wp.primitives,h=(0,n.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(p.Path,{fillRule:"evenodd",d:"M6.863 13.644L5 13.25h-.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H5L18 6.5h2V16h-2l-3.854-.815.026.008a3.75 3.75 0 01-7.31-1.549zm1.477.313a2.251 2.251 0 004.356.921l-4.356-.921zm-2.84-3.28L18.157 8h.343v6.5h-.343L5.5 11.823v-1.146z",clipRule:"evenodd"})),c=window.wp.serverSideRender;var u=t.n(c);l.Component,window.wp.compose,l.Component;class g extends l.Component{constructor(t){super(t),i(this,"togglePopover",(()=>{this.setState({popover:!this.state.popover})})),i(this,"setColor",(t=>{console.log(t),this.setState({color:t.hex})})),i(this,"applyColor",(()=>{this.value=this.state.color,this.setState({popover:!1,color:null}),this.props.onChange(this.value)})),i(this,"cancelColor",(()=>{this.setState({popover:!1,color:null})})),i(this,"resetColor",(()=>{this.value="",this.setState({popover:!1,color:null}),this.props.onChange(this.value)})),this.state={popover:!1,color:null},this.value=this.props.value}render(){const{value:t,label:e,labelPosition:o}=this.props;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(a.BaseControl,{label:e,labelPosition:"top"},(0,n.createElement)("div",{className:"wpa-color-indicator-wrap"},(0,n.createElement)("span",{className:"wpa-color-indicator",style:{background:this.value}}),(0,n.createElement)(a.Button,{variant:"secondary",isSmall:"true",onClick:this.togglePopover},"Select Color"),(0,n.createElement)(a.Button,{variant:"link",onClick:this.resetColor},"Reset")),!0===this.state.popover&&(0,n.createElement)(a.Popover,null,(0,n.createElement)(a.ColorPicker,{style:{padding:"5px"},color:this.value,onChangeComplete:this.setColor,enableAlpha:!0,defaultValue:"#000"}),(0,n.createElement)("div",{style:{padding:"0px 16px 12px 16px"}},(0,n.createElement)(a.Button,{onClick:this.applyColor,variant:"primary"},"Apply")," ",(0,n.createElement)(a.Button,{onClick:this.cancelColor,variant:"secondary"},"Cancel")))))}}const m=g;class d extends l.Component{constructor(t){super(t),i(this,"onSelectTaxonomy",(t=>{this.props.setAttributes({taxonomy:t})})),i(this,"onCustomizeQuery",((t,e)=>{var o={...this.props.attributes.query};0===e.length?delete o[t]:o[t]=e,this.props.setAttributes({query:o})})),i(this,"getQueryParam",(t=>void 0===this.props.attributes.query[t]?"":this.props.attributes.query[t])),i(this,"getAvailableTaxonomies",(()=>{var t=[{label:"",value:""}];return this.state.post_types.forEach((function(e,o){e.taxonomies.forEach((function(o,s){t.push({label:e.label+" - "+o.label,value:o.name})}))})),t})),i(this,"getAvailableItemDisplays",(()=>[{label:"Stacked",value:"wpa-item-stacked"},{label:"Aligned",value:"wpa-item-aligned"}])),i(this,"initVisuals",(()=>{const{taxonomy:t}=this.props.attributes;""!==t&&this.setState({initiated:!0})})),i(this,"resetVisuals",(()=>{this.props.setAttributes({taxonomy:""}),this.setState({initiated:!1,loading:!0}),this.runApiFetchForms()})),i(this,"toggleShowResultsCounter",(t=>{this.props.setAttributes({show_results_counter:t})})),i(this,"toggleSwitchViews",(t=>{this.props.setAttributes({switch_views:t})})),i(this,"toggleAllowSorting",(t=>{this.props.setAttributes({allow_sorting:t})})),i(this,"toggleShowPagination",(t=>{this.props.setAttributes({show_pagination:t})})),i(this,"onChangePostsPerPage",(t=>{this.props.setAttributes({posts_per_page:t})})),i(this,"onChangeDisplay",(t=>{this.props.setAttributes({display:t})})),i(this,"onChangeDefaultImageUrl",(t=>{this.props.setAttributes({default_image_url:t})})),i(this,"toggleShowPriceColumn",(t=>{this.props.setAttributes({show_price_column:t})})),i(this,"toggleShowImageColumn",(t=>{this.props.setAttributes({show_image_column:t})})),i(this,"onChangeOrderBy",(t=>{this.props.setAttributes({order_by:t})})),i(this,"onChangeOrderByFeatured",(t=>{this.props.setAttributes({order_by_featured:t})})),i(this,"onChangeListType",(t=>{this.props.setAttributes({list_type:t})})),i(this,"onListDataChange",(t=>{console.log(t),this.props.setAttributes({data:[...t]})})),i(this,"onChangeTitleSource",(t=>{this.props.setAttributes({title_source:t})})),i(this,"onChangeAltSource",(t=>{this.props.setAttributes({alt_source:t})})),i(this,"onChangeListImageWidth",(t=>{this.props.setAttributes({list_img_width:t})})),i(this,"onChangeListImageHeight",(t=>{this.props.setAttributes({list_img_height:t})})),i(this,"onChangeListImageFit",(t=>{this.props.setAttributes({list_img_fit:t})})),i(this,"onChangeListImageSource",(t=>{this.props.setAttributes({list_img_source:t})})),i(this,"onChangeGridColumns",(t=>{this.props.setAttributes({grid_columns:t})})),i(this,"onChangeGridColumnsMobile",(t=>{this.props.setAttributes({grid_columns_mobile:t})})),i(this,"onChangeGridImgHeight",(t=>{this.props.setAttributes({grid_img_height:t})})),i(this,"onChangeGridImgFit",(t=>{this.props.setAttributes({grid_img_fit:t})})),i(this,"onChangeGridImgSource",(t=>{this.props.setAttributes({grid_img_source:t})})),i(this,"onChangeColorIcon",(t=>{this.props.setAttributes({color_icon:t})})),i(this,"onChangeColorText",(t=>{this.props.setAttributes({color_text:t})})),i(this,"onChangeColorBg",(t=>{this.props.setAttributes({color_bg:t})})),i(this,"onChangeColorBorder",(t=>{this.props.setAttributes({color_border:t})})),i(this,"toggleShowCount",(t=>{this.props.setAttributes({show_count:t})})),i(this,"toggleShowIcons",(t=>{this.props.setAttributes({show_icons:t})})),i(this,"onChangeColumns",(t=>{this.props.setAttributes({columns:parseInt(t)})})),i(this,"onChangeColumnsMobile",(t=>{this.props.setAttributes({columns_mobile:parseInt(t)})})),i(this,"onChangeDefaultIcon",(t=>{this.props.setAttributes({default_icon:t})})),i(this,"onChangeIconSize",(t=>{this.props.setAttributes({icon_size:t})})),i(this,"onSelectItemDisplay",(t=>{this.props.setAttributes({item_display:t})})),i(this,"onChangeMargin",(t=>{this.props.setAttributes({margin:t})})),i(this,"onChangeItemPadding",(t=>{this.props.setAttributes({item_padding:t})})),i(this,"toggleTaxonomyDetect",(t=>{this.props.setAttributes({taxonomy_detect:t})})),i(this,"toggleNoCategoriesText",(t=>{this.props.setAttributes({no_categories_text:t})})),this.state={initiated:!1,post_types:[],loading:!0,show_instructions:!1},this.initVisuals()}componentDidMount(){this.runApiFetchForms()}runApiFetchForms(){wp.apiFetch({path:"wpadverts/v1/classifieds-types"}).then((t=>{this.setState({post_types:t.data,loading:!1,initiated:""!==this.props.attributes.taxonomy})}))}renderInit(){const{taxonomy:t}=this.props.attributes;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(a.Placeholder,{icon:h,label:(0,e.__)("Classifieds Categories","wpadverts"),instructions:"Select taxonomy to continue.",isColumnLayout:"true"},!0===this.state.loading?(0,n.createElement)(a.Spinner,null):(0,n.createElement)(n.Fragment,null,(0,n.createElement)(a.SelectControl,{label:"Taxonomy",labelPosition:"top",value:t,options:this.getAvailableTaxonomies(),onChange:this.onSelectTaxonomy,style:{lineHeight:"1rem"}}),(0,n.createElement)("div",null,(0,n.createElement)(a.Button,{variant:"primary",disabled:""===t,onClick:this.initVisuals},"Apply")))))}render(){const{className:t,attributes:e}=this.props,{taxonomy:o,item_display:s,item_padding:i,columns:l,columns_mobile:p,default_icon:h,icon_size:c,show_icons:g,show_count:d,color_icon:b,color_text:C,color_bg:y,color_border:_,margin:v,taxonomy_detect:w,no_categories_text:f}=e;return console.log("cats..."),console.log(l),(0,n.createElement)(n.Fragment,null,!0===this.state.initiated?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(r.InspectorControls,null,(0,n.createElement)(a.PanelBody,{title:"Display Options"},(0,n.createElement)(a.SelectControl,{label:"Item Display",labelPosition:"top",value:s,options:this.getAvailableItemDisplays(),onChange:this.onSelectItemDisplay,style:{lineHeight:"1rem"}}),(0,n.createElement)(a.ToggleControl,{label:"Show items count",checked:d,onChange:this.toggleShowCount}),(0,n.createElement)(a.TextControl,{label:"Columns",value:l,onChange:this.onChangeColumns,type:"number",min:1,max:10,step:1}),(0,n.createElement)(a.TextControl,{label:"Columns (mobile)",value:p,onChange:this.onChangeColumnsMobile,type:"number",min:1,max:2,step:1}),(0,n.createElement)(a.RangeControl,{label:"Margin between items",value:v,onChange:this.onChangeMargin,min:0,max:6,withInputField:!1}),(0,n.createElement)(a.RangeControl,{label:"Item padding",value:i,onChange:this.onChangeItemPadding,min:0,max:6,withInputField:!1})),(0,n.createElement)(a.PanelBody,{title:"Filters",initialOpen:!1},(0,n.createElement)(a.ToggleControl,{label:"Autodetect taxonomy",checked:w,onChange:this.toggleTaxonomyDetect}),w&&(0,n.createElement)(a.ToggleControl,{label:"Show 'no categories found' text",checked:f,onChange:this.toggleNoCategoriesText})),(0,n.createElement)(a.PanelBody,{title:"Icons",initialOpen:!1},(0,n.createElement)(a.ToggleControl,{label:"Show icons",checked:g,onChange:this.toggleShowIcons}),(0,n.createElement)(a.TextControl,{label:"Default icon",value:h,onChange:this.onChangeDefaultIcon}),(0,n.createElement)(a.RangeControl,{label:"Icon Size",value:c,onChange:this.onChangeIconSize,min:0,max:12,withInputField:!1})),(0,n.createElement)(a.PanelBody,{title:"Colors",initialOpen:!1},(0,n.createElement)(m,{label:"Icon Color",labelPosition:"top",value:b,onChange:this.onChangeColorIcon}),(0,n.createElement)(m,{label:"Text Color",labelPosition:"top",value:C,onChange:this.onChangeColorText}),(0,n.createElement)(m,{label:"Background Color",labelPosition:"top",value:y,onChange:this.onChangeColorBg}),(0,n.createElement)(m,{label:"Border Color",labelPosition:"top",value:_,onChange:this.onChangeColorBorder}))),(0,n.createElement)(r.BlockControls,null,(0,n.createElement)(a.Toolbar,{controls:[{icon:"controls-repeat",title:"Reset post type and form scheme",onClick:this.resetVisuals}]})),(0,n.createElement)(a.Disabled,null,(0,n.createElement)(u(),{block:"wpadverts/categories",attributes:this.props.attributes}))):(0,n.createElement)(n.Fragment,null,this.renderInit()))}}const b=d,C=JSON.parse('{"name":"wpadverts/categories","apiVersion":1,"textdomain":"wpadverts","title":"Classifieds Categories","icon":"megaphone","category":"wpadverts","editor_style":"wpadverts-blocks-categories","editor_script":"block-wpadverts-categories","example":{},"attributes":{"post_type":{"type":"string","default":""},"taxonomy":{"type":"string","default":""},"taxonomy_detect":{"type":"boolean","default":false},"no_categories_text":{"type":"boolean","default":true},"columns":{"type":"integer","default":4},"columns_mobile":{"type":"integer","default":2},"item_display":{"type":"string","default":"wpa-item-stacked"},"item_padding":{"type":"integer","default":3},"show_icons":{"type":"boolean","default":true},"show_count":{"type":"boolean","default":true},"default_icon":{"type":"string","default":"fas fa-folder"},"icon_size":{"type":"integer","default":9},"margin":{"type":"integer","default":2},"color_icon":{"type":"string","default":"#dc2626"},"color_text":{"type":"string","default":"#000000"},"color_bg":{"type":"string","default":"#f3f4f6"},"color_border":{"type":"string","default":"#e5e7eb"}}}');(0,o.registerBlockType)(C,{edit:b,save:({attributes:t})=>null})})();