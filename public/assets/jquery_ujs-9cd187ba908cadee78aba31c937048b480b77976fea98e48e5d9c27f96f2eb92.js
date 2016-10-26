!function(e,t){"use strict";e.rails!==t&&e.error("jquery-ujs has already been loaded!");var i,n=e(document);e.rails=i={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",buttonClickSelector:"button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",disableSelector:"input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",requiredInputSelector:"input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",fileInputSelector:"input[name][type=file]:not([disabled])",linkDisableSelector:"a[data-disable-with], a[data-disable]",buttonDisableSelector:"button[data-remote][data-disable-with], button[data-remote][data-disable]",csrfToken:function(){return e("meta[name=csrf-token]").attr("content")},csrfParam:function(){return e("meta[name=csrf-param]").attr("content")},CSRFProtection:function(e){var t=i.csrfToken();t&&e.setRequestHeader("X-CSRF-Token",t)},refreshCSRFTokens:function(){e('form input[name="'+i.csrfParam()+'"]').val(i.csrfToken())},fire:function(t,i,n){var o=e.Event(i);return t.trigger(o,n),o.result!==!1},confirm:function(e){return confirm(e)},ajax:function(t){return e.ajax(t)},href:function(e){return e[0].href},isRemote:function(e){return e.data("remote")!==t&&e.data("remote")!==!1},handleRemote:function(n){var o,s,r,a,l,u;if(i.fire(n,"ajax:before")){if(a=n.data("with-credentials")||null,l=n.data("type")||e.ajaxSettings&&e.ajaxSettings.dataType,n.is("form")){o=n.data("ujs:submit-button-formmethod")||n.attr("method"),s=n.data("ujs:submit-button-formaction")||n.attr("action"),r=e(n[0]).serializeArray();var c=n.data("ujs:submit-button");c&&(r.push(c),n.data("ujs:submit-button",null)),n.data("ujs:submit-button-formmethod",null),n.data("ujs:submit-button-formaction",null)}else n.is(i.inputChangeSelector)?(o=n.data("method"),s=n.data("url"),r=n.serialize(),n.data("params")&&(r=r+"&"+n.data("params"))):n.is(i.buttonClickSelector)?(o=n.data("method")||"get",s=n.data("url"),r=n.serialize(),n.data("params")&&(r=r+"&"+n.data("params"))):(o=n.data("method"),s=i.href(n),r=n.data("params")||null);return u={type:o||"GET",data:r,dataType:l,beforeSend:function(e,o){return o.dataType===t&&e.setRequestHeader("accept","*/*;q=0.5, "+o.accepts.script),!!i.fire(n,"ajax:beforeSend",[e,o])&&void n.trigger("ajax:send",e)},success:function(e,t,i){n.trigger("ajax:success",[e,t,i])},complete:function(e,t){n.trigger("ajax:complete",[e,t])},error:function(e,t,i){n.trigger("ajax:error",[e,t,i])},crossDomain:i.isCrossDomain(s)},a&&(u.xhrFields={withCredentials:a}),s&&(u.url=s),i.ajax(u)}return!1},isCrossDomain:function(e){var t=document.createElement("a");t.href=location.href;var i=document.createElement("a");try{return i.href=e,i.href=i.href,!((!i.protocol||":"===i.protocol)&&!i.host||t.protocol+"//"+t.host==i.protocol+"//"+i.host)}catch(e){return!0}},handleMethod:function(n){var o=i.href(n),s=n.data("method"),r=n.attr("target"),a=i.csrfToken(),l=i.csrfParam(),u=e('<form method="post" action="'+o+'"></form>'),c='<input name="_method" value="'+s+'" type="hidden" />';l===t||a===t||i.isCrossDomain(o)||(c+='<input name="'+l+'" value="'+a+'" type="hidden" />'),r&&u.attr("target",r),u.hide().append(c).appendTo("body"),u.submit()},formElements:function(t,i){return t.is("form")?e(t[0].elements).filter(i):t.find(i)},disableFormElements:function(t){i.formElements(t,i.disableSelector).each(function(){i.disableFormElement(e(this))})},disableFormElement:function(e){var i,n;i=e.is("button")?"html":"val",n=e.data("disable-with"),n!==t&&(e.data("ujs:enable-with",e[i]()),e[i](n)),e.prop("disabled",!0),e.data("ujs:disabled",!0)},enableFormElements:function(t){i.formElements(t,i.enableSelector).each(function(){i.enableFormElement(e(this))})},enableFormElement:function(e){var i=e.is("button")?"html":"val";e.data("ujs:enable-with")!==t&&(e[i](e.data("ujs:enable-with")),e.removeData("ujs:enable-with")),e.prop("disabled",!1),e.removeData("ujs:disabled")},allowAction:function(e){var t,n=e.data("confirm"),o=!1;if(!n)return!0;if(i.fire(e,"confirm")){try{o=i.confirm(n)}catch(e){(console.error||console.log).call(console,e.stack||e)}t=i.fire(e,"confirm:complete",[o])}return o&&t},blankInputs:function(t,i,n){var o,s,r,a,l=e(),u=i||"input,textarea",c=t.find(u),h={};return c.each(function(){o=e(this),o.is("input[type=radio]")?(a=o.attr("name"),h[a]||(0===t.find('input[type=radio]:checked[name="'+a+'"]').length&&(r=t.find('input[type=radio][name="'+a+'"]'),l=l.add(r)),h[a]=a)):(s=o.is("input[type=checkbox],input[type=radio]")?o.is(":checked"):!!o.val(),s===n&&(l=l.add(o)))}),!!l.length&&l},nonBlankInputs:function(e,t){return i.blankInputs(e,t,!0)},stopEverything:function(t){return e(t.target).trigger("ujs:everythingStopped"),t.stopImmediatePropagation(),!1},disableElement:function(e){var n=e.data("disable-with");n!==t&&(e.data("ujs:enable-with",e.html()),e.html(n)),e.bind("click.railsDisable",function(e){return i.stopEverything(e)}),e.data("ujs:disabled",!0)},enableElement:function(e){e.data("ujs:enable-with")!==t&&(e.html(e.data("ujs:enable-with")),e.removeData("ujs:enable-with")),e.unbind("click.railsDisable"),e.removeData("ujs:disabled")}},i.fire(n,"rails:attachBindings")&&(e.ajaxPrefilter(function(e,t,n){e.crossDomain||i.CSRFProtection(n)}),e(window).on("pageshow.rails",function(){e(e.rails.enableSelector).each(function(){var t=e(this);t.data("ujs:disabled")&&e.rails.enableFormElement(t)}),e(e.rails.linkDisableSelector).each(function(){var t=e(this);t.data("ujs:disabled")&&e.rails.enableElement(t)})}),n.on("ajax:complete",i.linkDisableSelector,function(){i.enableElement(e(this))}),n.on("ajax:complete",i.buttonDisableSelector,function(){i.enableFormElement(e(this))}),n.on("click.rails",i.linkClickSelector,function(t){var n=e(this),o=n.data("method"),s=n.data("params"),r=t.metaKey||t.ctrlKey;if(!i.allowAction(n))return i.stopEverything(t);if(!r&&n.is(i.linkDisableSelector)&&i.disableElement(n),i.isRemote(n)){if(r&&(!o||"GET"===o)&&!s)return!0;var a=i.handleRemote(n);return a===!1?i.enableElement(n):a.fail(function(){i.enableElement(n)}),!1}return o?(i.handleMethod(n),!1):void 0}),n.on("click.rails",i.buttonClickSelector,function(t){var n=e(this);if(!i.allowAction(n)||!i.isRemote(n))return i.stopEverything(t);n.is(i.buttonDisableSelector)&&i.disableFormElement(n);var o=i.handleRemote(n);return o===!1?i.enableFormElement(n):o.fail(function(){i.enableFormElement(n)}),!1}),n.on("change.rails",i.inputChangeSelector,function(t){var n=e(this);return i.allowAction(n)&&i.isRemote(n)?(i.handleRemote(n),!1):i.stopEverything(t)}),n.on("submit.rails",i.formSubmitSelector,function(n){var o,s,r=e(this),a=i.isRemote(r);if(!i.allowAction(r))return i.stopEverything(n);if(r.attr("novalidate")===t)if(r.data("ujs:formnovalidate-button")===t){if(o=i.blankInputs(r,i.requiredInputSelector,!1),o&&i.fire(r,"ajax:aborted:required",[o]))return i.stopEverything(n)}else r.data("ujs:formnovalidate-button",t);if(a){if(s=i.nonBlankInputs(r,i.fileInputSelector)){setTimeout(function(){i.disableFormElements(r)},13);var l=i.fire(r,"ajax:aborted:file",[s]);return l||setTimeout(function(){i.enableFormElements(r)},13),l}return i.handleRemote(r),!1}setTimeout(function(){i.disableFormElements(r)},13)}),n.on("click.rails",i.formInputClickSelector,function(t){var n=e(this);if(!i.allowAction(n))return i.stopEverything(t);var o=n.attr("name"),s=o?{name:o,value:n.val()}:null,r=n.closest("form");0===r.length&&(r=e("#"+n.attr("form"))),r.data("ujs:submit-button",s),r.data("ujs:formnovalidate-button",n.attr("formnovalidate")),r.data("ujs:submit-button-formaction",n.attr("formaction")),r.data("ujs:submit-button-formmethod",n.attr("formmethod"))}),n.on("ajax:send.rails",i.formSubmitSelector,function(t){this===t.target&&i.disableFormElements(e(this))}),n.on("ajax:complete.rails",i.formSubmitSelector,function(t){this===t.target&&i.enableFormElements(e(this))}),e(function(){i.refreshCSRFTokens()}))}(jQuery);