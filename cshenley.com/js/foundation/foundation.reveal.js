!function(a,b,c,d){"use strict";Foundation.libs.reveal={name:"reveal",version:"5.0.3",locked:!1,settings:{animation:"fadeAndPop",animation_speed:250,close_on_background_click:!0,close_on_esc:!0,dismiss_modal_class:"close-reveal-modal",bg_class:"reveal-modal-bg",open:function(){},opened:function(){},close:function(){},closed:function(){},bg:a(".reveal-modal-bg"),css:{open:{opacity:0,visibility:"visible",display:"block"},close:{opacity:1,visibility:"hidden",display:"none"}}},init:function(b,c,d){Foundation.inherit(this,"delay"),a.extend(!0,this.settings,c,d),this.bindings(c,d)},events:function(){var d=this;return a("[data-reveal-id]",this.scope).off(".reveal").on("click.fndtn.reveal",function(b){if(b.preventDefault(),!d.locked){var c=a(this),e=c.data("reveal-ajax");if(d.locked=!0,"undefined"==typeof e)d.open.call(d,c);else{var f=e===!0?c.attr("href"):e;d.open.call(d,c,{url:f})}}}),a(this.scope).off(".reveal"),a(c).on("click.fndtn.reveal",this.close_targets(),function(b){if(b.preventDefault(),!d.locked){var c=a("[data-reveal].open").data("reveal-init"),e=a(b.target)[0]===a("."+c.bg_class)[0];if(e&&!c.close_on_background_click)return;d.locked=!0,d.close.call(d,e?a("[data-reveal].open"):a(this).closest("[data-reveal]"))}}),a("[data-reveal]",this.scope).length>0?a(this.scope).on("open.fndtn.reveal",this.settings.open).on("opened.fndtn.reveal",this.settings.opened).on("opened.fndtn.reveal",this.open_video).on("close.fndtn.reveal",this.settings.close).on("closed.fndtn.reveal",this.settings.closed).on("closed.fndtn.reveal",this.close_video):a(this.scope).on("open.fndtn.reveal","[data-reveal]",this.settings.open).on("opened.fndtn.reveal","[data-reveal]",this.settings.opened).on("opened.fndtn.reveal","[data-reveal]",this.open_video).on("close.fndtn.reveal","[data-reveal]",this.settings.close).on("closed.fndtn.reveal","[data-reveal]",this.settings.closed).on("closed.fndtn.reveal","[data-reveal]",this.close_video),!0},key_up_on:function(){var c=this;return a("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal",function(b){var d=a("[data-reveal].open"),e=d.data("reveal-init");e&&27===b.which&&e.close_on_esc&&!c.locked&&c.close.call(c,d)}),!0},key_up_off:function(){return a("body").off("keyup.fndtn.reveal"),!0},open:function(b,c){var d=this;if(b)if("undefined"!=typeof b.selector)var e=a("#"+b.data("reveal-id"));else{var e=a(this.scope);c=b}else var e=a(this.scope);var f=e.data("reveal-init");if(!e.hasClass("open")){var g=a("[data-reveal].open");if("undefined"==typeof e.data("css-top")&&e.data("css-top",parseInt(e.css("top"),10)).data("offset",this.cache_offset(e)),this.key_up_on(e),e.trigger("open"),g.length<1&&this.toggle_bg(e),"string"==typeof c&&(c={url:c}),"undefined"!=typeof c&&c.url){var i="undefined"!=typeof c.success?c.success:null;a.extend(c,{success:function(b,c,h){if(a.isFunction(i)&&i(b,c,h),e.html(b),a(e).foundation("section","reflow"),g.length>0){var j=g.data("reveal-init");d.hide(g,j.css.close)}d.show(e,f.css.open)}}),a.ajax(c)}else{if(g.length>0){var h=g.data("reveal-init");this.hide(g,h.css.close)}this.show(e,f.css.open)}}},close:function(b){var b=b&&b.length?b:a(this.scope),c=a("[data-reveal].open"),d=b.data("reveal-init");c.length>0&&(this.locked=!0,this.key_up_off(b),b.trigger("close"),this.toggle_bg(b),this.hide(c,d.css.close,d))},close_targets:function(){var a="."+this.settings.dismiss_modal_class;return this.settings.close_on_background_click?a+", ."+this.settings.bg_class:a},toggle_bg:function(b){b.data("reveal-init"),0===a("."+this.settings.bg_class).length&&(this.settings.bg=a("<div />",{"class":this.settings.bg_class}).appendTo("body")),this.settings.bg.filter(":visible").length>0?this.hide(this.settings.bg):this.show(this.settings.bg)},show:function(c,d){if(d){var e=c.data("reveal-init");if(0===c.parent("body").length){var f=c.wrap('<div style="display: none;" />').parent(),g=this.settings.rootElement||"body";c.on("closed.fndtn.reveal.wrapped",function(){c.detach().appendTo(f),c.unwrap().unbind("closed.fndtn.reveal.wrapped")}),c.detach().appendTo(g)}if(/pop/i.test(e.animation)){d.top=a(b).scrollTop()-c.data("offset")+"px";var h={top:a(b).scrollTop()+c.data("css-top")+"px",opacity:1};return this.delay(function(){return c.css(d).animate(h,e.animation_speed,"linear",function(){this.locked=!1,c.trigger("opened")}.bind(this)).addClass("open")}.bind(this),e.animation_speed/2)}if(/fade/i.test(e.animation)){var h={opacity:1};return this.delay(function(){return c.css(d).animate(h,e.animation_speed,"linear",function(){this.locked=!1,c.trigger("opened")}.bind(this)).addClass("open")}.bind(this),e.animation_speed/2)}return c.css(d).show().css({opacity:1}).addClass("open").trigger("opened")}var e=this.settings;return/fade/i.test(e.animation)?c.fadeIn(e.animation_speed/2):c.show()},hide:function(c,d){if(d){var e=c.data("reveal-init");if(/pop/i.test(e.animation)){var f={top:-a(b).scrollTop()-c.data("offset")+"px",opacity:0};return this.delay(function(){return c.animate(f,e.animation_speed,"linear",function(){this.locked=!1,c.css(d).trigger("closed")}.bind(this)).removeClass("open")}.bind(this),e.animation_speed/2)}if(/fade/i.test(e.animation)){var f={opacity:0};return this.delay(function(){return c.animate(f,e.animation_speed,"linear",function(){this.locked=!1,c.css(d).trigger("closed")}.bind(this)).removeClass("open")}.bind(this),e.animation_speed/2)}return c.hide().css(d).removeClass("open").trigger("closed")}var e=this.settings;return/fade/i.test(e.animation)?c.fadeOut(e.animation_speed/2):c.hide()},close_video:function(){var c=a(this).find(".flex-video"),d=c.find("iframe");d.length>0&&(d.attr("data-src",d[0].src),d.attr("src","about:blank"),c.hide())},open_video:function(){var c=a(this).find(".flex-video"),e=c.find("iframe");if(e.length>0){var f=e.attr("data-src");if("string"==typeof f)e[0].src=e.attr("data-src");else{var g=e[0].src;e[0].src=d,e[0].src=g}c.show()}},cache_offset:function(a){var b=a.show().height()+parseInt(a.css("top"),10);return a.hide(),b},off:function(){a(this.scope).off(".fndtn.reveal")},reflow:function(){}}}(jQuery,this,this.document);