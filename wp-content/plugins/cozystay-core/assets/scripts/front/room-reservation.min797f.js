!function(s){"use strict";var r,u,i,a,c,m,f,d,l,v,h,p,g,b,R,_,D,k,x,y,w,C,S,P,T,E,M,N,j,I,F,A,L,O,q,Y,B,G,V=86400,J=!1,U=!1,z=[],H=[],Q="YYYY-MM-DD",K=!1;function W(){for(var e,a,t,o=!1,n=!1,r=C;r<S;r+=V)u[r]&&"available"==u[r].status&&(e=loftoceanRoomReservation.pricePerPerson?ne(ie(u[r].adult_price,y),ie(w,u[r].child_price)):u[r].price,a=u[r].special_price_rate?ie(e,u[r].special_price_rate):e,(!1===o||Number(a)<Number(o))&&(o=a),(!1===n||Number(e)<Number(n))&&(n=e));!1!==o&&(t="",t=o<n?"<del>"+te(n)+'</del> <span class="sale">'+te(o)+"</span>":te(o),N.html(t))}function t(){D=l.val(),k=v.val(),$(),Z(),function(){if(b.length){var e=!1,a=!1;clearTimeout(K),b.removeClass("show"),h.removeData("max");for(var t=C;t<S;t+=V){if(!u[t]||"available"!=u[t].status||!u[t].available_number){a=!0;break}(!1===e||Number(u[t].available_number)<e)&&(e=Number(u[t].available_number))}!a&&!1!==e&&0<e&&(h.data("max",e),e<x&&(b.find(".room-error-limit-number").text(e),h.val(e-1).siblings(".plus").trigger("click"),b.addClass("show"),K=setTimeout(function(){b.removeClass("show")},3e3)))}}(),W(),ae()}function X(){var e;U?(e={roomID:loftoceanRoomReservation.roomID,checkin:C,checkout:S,action:loftoceanRoomReservation.getFlexiblePriceRuleAjaxAction},R.html(""),_.html(""),E.addClass("loading"),s.ajax(loftoceanRoomReservation.ajaxURL,{method:"GET",data:e}).done(function(e,a){e=e?JSON.parse(e):{},J=!(!e||!e.status||1!=e.status)&&e.discount}).fail(function(){J=!1}).always(function(){t(),E.removeClass("loading")})):t()}function Z(){var e=r.find(".cs-form-group.cs-extra-service-group .extra-service-switcher:checked"),i=0;e.length&&e.each(function(){var e=s(this).parent(),a="extra_service_"+s(this).val(),t=e.find('input[name="extra_service_price['+a+']"]').val();switch(e.find('input[name="extra_service_calculating_method['+a+']"]').val()){case"custom":var o=e.parent().find('input[name="extra_service_quantity['+a+']"]').val();i=ne(i,ie(t,o));break;case"auto":var n,r=e.find('input[name="extra_service_auto_calculating_unit['+a+']"]').val();["night-room"].includes(r)&&(t=ie(t,parseInt(x,10))),["person","night-person"].includes(r)&&(n=e.find('input[name="extra_service_auto_calculating_custom_adult_price['+a+']"]'),o=e.find('input[name="extra_service_auto_calculating_custom_child_price['+a+']"]'),t=n.length&&o.length?(n=n.val()?n.val():0,o=o.val()?o.val():0,ne(ie(n,parseInt(y,10)),ie(o,parseInt(w,10)))):ie(t,parseInt(y,10)+parseInt(w,10))),["night","night-person","night-room"].includes(r)&&(t=ie(t,(S-C)/V)),i=ne(i,t);break;default:i=ne(i,t)}}),c=i}function $(){var e=new Date(D),a=new Date(k),t=ee(e),o=ee(a),n=0,r=0,i=0;if(void 0===u[o-V])e.setDate(e.getDate()-15),a.setDate(a.getDate()+15),e=oe(e),a=oe(a),P&&e&&a&&s.ajax({url:wpApiSettings.root+"loftocean/v1/get_room_availability/"+P+"/"+e+"/"+a,type:"GET",success:function(e,a){"object"==typeof e&&(e.forEach(function(e){u[e.id]=e}),$(),Z(),ae())},error:function(e){alert(T.getRemotePriceListErrorMessage)}});else{for(var c,l=t;l<o;l+=V)u[l]&&"available"==u[l].status&&(c=u[l].special_price_rate||1,n=ne(n,ie(u[l].price,c)),r=ne(r,ie(u[l].adult_price,c)),i=ne(i,ie(u[l].child_price,c)));m=n,f=r,d=i}}function ee(e){return void 0===e||e.getTime||(e=new Date),Math.floor(e.getTime()/V/1e3)*V}function ae(){var e=loftoceanRoomReservation.pricePerPerson?ne(ie(f,y),ie(d,w)):ie(m,x);!1!==J&&J.totleDiscount?e=ie(j=e,J.totleDiscount):j=e,I=e,function(){var e=[],a=ne(I,c),t={totalBasePrice:te(j,!0),nights:(S-C)/V,totalPrice:te(a,!0),totalOriginalPrice:a};c&&(t.extraService=te(c,!0)),!1!==J&&J.discount.base_percentage&&Object.keys(J.discount.details).forEach(function(e){var a=J.discount.details[e];t[e]="-"+te(ie(j,a.discount))});for(var o,n,r=C;r<S;r+=V)u[r]&&("available"==u[r].status?(o=u[r].special_price_rate||1,n=loftoceanRoomReservation.pricePerPerson?ne(ie(u[r].adult_price,y),ie(u[r].child_price,w)):ie(u[r].price,x),e.push({date:u[r].start,originalPrice:te(n,!0),price:te(ie(n,o),!0)})):e.push({date:u[r].start,price:!1}));t.rooms=e,me(a,t),M.html("").append(F(t)),i.html(t.totalPrice)}()}function te(e,a){var t,o=0,n=0,r="";e=void 0===e?0:(t=e,!isNaN(t)&&isFinite(t)?e:0);try{o=(""+e).split(".")[1].length}catch(e){o=0}if(e=Number(e).toFixed(o?Math.max(0,loftoceanRoomReservation.currencySettings.precision):0),e=(""+e).split("."),r=Number(e[0]),loftoceanRoomReservation.currencySettings.thousandSeparator&&1e3<(n=Number(e[0]))){for(r=(n+"").substr(-3),n=Math.floor(n/1e3);1e3<n;)r=(n+"").substr(-3)+loftoceanRoomReservation.currencySettings.thousandSeparator+r,n=Math.floor(n/1e3);0<n&&(r=n+loftoceanRoomReservation.currencySettings.thousandSeparator+r)}return 1<e.length&&0<Number(e[1])&&loftoceanRoomReservation.currencySettings.precision&&loftoceanRoomReservation.currencySettings.decimalSeparator&&(r+=loftoceanRoomReservation.currencySettings.decimalSeparator+e[1]),a?r:loftoceanRoomReservation.currency.left+r+loftoceanRoomReservation.currency.right}function o(e){return 9<e?e:"0"+e}function oe(e){return e.getFullYear()+"-"+o(e.getMonth()+1)+"-"+o(e.getDate())}function ne(e,a){var t,o,n;try{t=(""+e).split(".")[1].length}catch(e){t=0}try{o=(""+a).split(".")[1].length}catch(e){o=0}return n=Math.max(t,o),((e*Math.pow(10,n)+a*Math.pow(10,n))/Math.pow(10,n)).toFixed(n)}function re(e,a){return ne(e,-a)}function ie(e,a){var t,o;try{t=(""+e).split(".")[1].length}catch(e){t=0}try{o=(""+a).split(".")[1].length}catch(e){o=0}return(e*Math.pow(10,t)*(a*Math.pow(10,o))/Math.pow(10,t+o)).toFixed(t+o)}function ce(e,a){if(e=e.format(Q),void 0!==a&&null!==a.startDate&&null===a.endDate||!z.includes(e)){var t=void 0!==a&&null!==a.startDate&&null===a.endDate;if(t){if(moment(e).isBefore(a.startDate))return[!1,"",""];if(H.length){if(H.includes(e))return[!1,"",""];var o=a.startDate.clone(),n=moment(e);for(o.add("1","day");o.isBefore(n);){if(z.includes(o.format(Q)))return[!1,"",""];o.add("1","day")}}}var e=new Date(e),r="day"+e.getDay(),i=ee(e),c=[],l=[];if(loftoceanRoomReservation.unavailableDates){if(loftoceanRoomReservation.unavailableDates.in_advance&&loftoceanRoomReservation.unavailableDates.in_advance.length)for(let e=0;e<loftoceanRoomReservation.unavailableDates.in_advance.length;e++){var s=loftoceanRoomReservation.unavailableDates.in_advance[e];if("all"==s.id||s.start<=i&&i<=s.end){s.min&&(i-O)/V<s.min&&c.push("disabled","checkin-unavailable"),s.max&&(i-O)/V>s.max&&(c.push("checkin-unavailable"),void 0!==a&&null!==a.startDate&&null===a.endDate||c.push(" disabled"));break}}if(loftoceanRoomReservation.unavailableDates.checkin&&loftoceanRoomReservation.unavailableDates.checkin.length)for(let a=0;a<loftoceanRoomReservation.unavailableDates.checkin.length;a++){let e=loftoceanRoomReservation.unavailableDates.checkin[a];if("all"==e.id||e.start<=i&&i<=e.end){e.days.includes(r)&&(c.push("no-checkin","checkin-unavailable"),l.push(T.noCheckin));break}}if(loftoceanRoomReservation.unavailableDates.checkout&&loftoceanRoomReservation.unavailableDates.checkout.length)for(let a=0;a<loftoceanRoomReservation.unavailableDates.checkout.length;a++){let e=loftoceanRoomReservation.unavailableDates.checkout[a];if("all"==e.id||e.end>=i&&i>=e.start){e.days.includes(r)&&(c.push("no-checkout","checkout-unavailable"),l.push(T.noCheckout));break}}if(t&&loftoceanRoomReservation.unavailableDates.stay_length&&loftoceanRoomReservation.unavailableDates.stay_length.length){var u=ee(new Date(a.startDate.format(Q)));if(u<i)for(let e=0;e<loftoceanRoomReservation.unavailableDates.stay_length.length;e++){var m=loftoceanRoomReservation.unavailableDates.stay_length[e];if("all"==m.id||m.end>=u&&u>=m.start){var f=(i-u)/V;m.rules[r]&&(f<m.rules[r].min&&(c.push("minimal-stay-unavailable","checkout-unavailable"),l.push(m.rules[r].min+T.minimum)),f>m.rules[r].max&&(c.push("off","disabled","maximal-stay-unavailable","checkout-unavailable"),l.push(m.rules[r].max+T.maximum)));break}}}}return[!0,c.length?c.join(" "):"",l.length?l.join(", "):""]}return[!1,"",""]}function le(e,a){l.val(e),v.val(a),D=e,C=ee(new Date(e)),k=a,S=ee(new Date(a)),ue(C,S),X()}function se(e,a){for(var t=0,o=0,n=e.clone(),r=null;t++<70;){var i=ce(n);if(!i[0]||i[1]&&i[1].split(" ").includes("checkin-unavailable"))n.add("1","day");else{o=0,r=n.clone().add("1","day");for(var c={startDate:n,endDate:null};o++<70;){var l=ce(r,c);if(!(!l[0]||l[1]&&l[1].split(" ").includes("checkout-unavailable")))return{checkin:n.format(Q),checkout:r.format(Q)};r.add("1","day")}n.add("1","day")}}return{checkin:e.format(Q),checkout:a.format(Q)}}function ue(r,i){var c,e;q&&Y&&(Y=!(c=[]),loftoceanRoomReservation.extraServices.forEach(function(a){if(""!==a.effective_time&&a.custom_effective_time_slots.length){var t=Y=!0,o="activated"==a.effective_time;for(let e=0;e<a.custom_effective_time_slots.length;e++){var n=a.custom_effective_time_slots[e];if((!n.start_timestamp||n.start_timestamp<=r)&&(!n.end_timstamp||n.end_timstamp>=i)){o?c.push(s.extend({},a)):t=!1;break}}!o&&t&&c.push(s.extend({},a))}else c.push(s.extend({},a))}),(e=s("#secondary .cs-form-group.cs-extra-service-group")).length&&e.remove(),c.length&&B.before(A({currency:loftoceanRoomReservation.currency,services:c})))}function me(e,a){var t;loftoceanRoomReservation.isTaxEnabled&&(loftoceanRoomReservation.taxIncluded?(t=function(e){var a=ne(loftoceanRoomReservation.currencySettings.precision,2),t=loftoceanRoomReservation.taxRate,o=[],n=e,r=0;if(t.reversed_compound_rates&&t.reversed_compound_rates.length)for(var i=0;i<t.reversed_compound_rates.length;i++)n=ie(r=n,100/(100+t.reversed_compound_rates[i].rate)),n=Number(n).toFixed(a),o.unshift({tax:te(re(r,n)),label:t.reversed_compound_rates[i].label});if(t.regular_rates&&t.regular_rates.length){for(var c=100,i=0;i<t.regular_rates.length;i++)c=ne(c,t.regular_rates[i].rate);for(n=ie(n,100/c),n=Number(n).toFixed(a),--i;0<=i;i--)o.push({tax:te(ie(n,t.regular_rates[i].rate/100)),label:t.regular_rates[i].label})}return{totalTax:re(e,n),taxDetails:o}}(e),a.tax=te(t.totalTax),a.taxDetails=t.taxDetails):(t=function(e){var a=loftoceanRoomReservation.taxRate,t=e,o=0,n=[];if(a.regular_rates&&a.regular_rates.length){for(var r=0,i=0;i<a.regular_rates.length;i++)r=ie(e,a.regular_rates[i].rate/100),n.push({tax:te(r),label:a.regular_rates[i].label}),o=ne(o,r);t=ne(e,o)}if(a.compound_rates&&a.compound_rates.length)for(var c=0,i=0;i<a.compound_rates.length;i++)c=ie(t,a.compound_rates[i].rate/100),o=ne(o,c),t=ne(t,c),n.push({tax:te(c),label:a.compound_rates[i].label});return{totalTax:o,taxDetails:n}}(e),a.tax=te(t.totalTax),a.taxDetails=t.taxDetails,a.beforeTax=a.totalPrice,a.totalPrice=te(ne(a.totalOriginalPrice,t.totalTax),!0)))}document.addEventListener("DOMContentLoaded",function(){if("undefined"==loftoceanRoomReservation)return!1;r=s("#secondary .cs-reservation-form"),F=wp.template("loftocean-room-price-details"),A=wp.template("loftocean-room-extra-services"),q=loftoceanRoomReservation.extraServices&&loftoceanRoomReservation.extraServices.length,Y=!0,N=s("#secondary .base-price"),E=s("#secondary .cs-room-booking"),M=s("#secondary .cs-form-price-details"),B=r.find(".cs-form-total-price"),i=B.find(".total-price-number"),u=loftoceanRoomReservation.priceList,P=loftoceanRoomReservation.roomID,T=loftoceanRoomReservation.i18nText,U=!!loftoceanRoomReservation.hasFlexibilePriceRules,(a=new Date).setDate(a.getDate()+1),ee(a),a=oe(a),l=r.find(".cs-check-in input[name=checkin]"),v=r.find(".cs-check-out input[name=checkout]"),h=r.find(".cs-rooms input[name=room-quantity]"),p=r.find(".cs-adults input[name=adult-quantity]"),g=r.find(".cs-children input[name=child-quantity]"),b=r.find(".cs-form-field.cs-rooms > .cs-form-notice"),R=r.children(".cs-form-error-message"),_=r.children(".cs-form-success-message"),L=s(".room-availability-calendar-wrapper .hidden-calendar"),G=L.length,O=ee(""),s.each(loftoceanRoomReservation.priceList,function(e,a){("unavailable"==a.status||a.available_number<1)&&(z.push(a.start),H.push(a.end))});var e=se(moment(),moment().add("1","day")),t=e.checkin,o=e.checkout;l.val(t),v.val(o),D=t,C=ee(new Date(D)),k=o,S=ee(new Date(k)),y=p.val(),w=g.val(),x=h.val(),c=d=f=m=0;var n=r.find(".date-range-picker");G&&L.daterangepicker({parentEl:".room-availability-calendar-wrapper",minDate:moment().format(Q),maxDate:moment().add("1","year").format(Q),startDate:t,endDate:o,alwaysShowCalendars:!0,locale:{format:Q},beforeShowDay:ce}).trigger("click").on("apply.daterangepicker",function(e,a){a.show();var t=a.startDate.format(Q),a=a.endDate.format(Q);r.length&&(n.val(t+" - "+a),le(t,a),s("html, body").animate({scrollTop:l.offset().top-window.innerHeight/2},200))}).on("cancel.daterangepicker",function(e,a){a.show(),a.setStartDate(t),a.setEndDate(o),a.updateView()}).on("outsideClick.daterangepicker",function(e,a){a.show()}),s("#content.site-content.with-sidebar-right").length&&n.addClass("pull-right"),n.daterangepicker({minDate:moment().format(Q),maxDate:moment().add("1","year").format(Q),startDate:t,endDate:o,locale:{format:Q},autoApply:!0,beforeShowDay:ce}).on("apply.daterangepicker",function(e,a){var t=a.startDate.format(Q),o=a.endDate.format(Q);s(this).val(t+" - "+o),le(t,o),G&&((a=L.data("daterangepicker")).setStartDate(t),a.setEndDate(o),a.updateView())}),r.find(".checkin-date, .checkout-date").on("click",function(e){var a=n.data("daterangepicker"),t=moment(l.val()?l.val():""),o=moment(v.val()?v.val():""),t=t.isValid()?t:moment(),o=o.isAfter(t)?o:t.clone().add("1","day"),t=se(t,o),o=t.checkin,t=t.checkout;a.setStartDate(o),a.setEndDate(t),a.show()}),M.length&&B.on("click",function(e){var a=s(this);M.hasClass("hide")?(a.addClass("toggled-on"),M.removeClass("hide")):(a.removeClass("toggled-on"),M.addClass("hide"))}),r.on("change",".cs-form-group.cs-extra-service-group .label-checkbox .extra-service-switcher",function(){Z(),ae()}).on("click",".cs-form-group.cs-extra-service-group .extra-service-custom-quantity button",function(e){setTimeout(function(){Z(),ae()},50)}),h.parent().on("click","button",function(e){b.removeClass("show"),clearTimeout(K),setTimeout(function(){x=h.val(),ae()},50)}),p.parent().on("click","button",function(e){setTimeout(function(){y=p.val(),$(),Z(),ae(),loftoceanRoomReservation.pricePerPerson&&W()},50)}),g.parent().on("click","button",function(e){setTimeout(function(){w=g.val(),$(),Z(),ae(),loftoceanRoomReservation.pricePerPerson&&W()},50)}),s("body").on("click",function(e){e=s(e.target);!s(".csf-base-price-breakdown").length||e.hasClass("csf-base-price-breakdown")||e.parents(".csf-base-price-breakdown").length||s(".csf-base-price-breakdown").removeClass("show")}).on("mouseenter",".daterangepicker-has-tooltip",function(){var e=s(this).find(".day-tooltip");e.length&&e.removeClass("hide")}).on("mouseleave",".daterangepicker-has-tooltip",function(){var e=s(this).find(".day-tooltip");e.length&&e.addClass("hide")}),r.on("click",".csf-pd-total-base .csf-pd-label",function(e){e.stopImmediatePropagation(),e.stopPropagation();e=s(this).siblings(".csf-base-price-breakdown");e.hasClass("show")||e.addClass("show")}).on("click",".cs-submit button",function(e){e.preventDefault();var a={roomID:loftoceanRoomReservation.roomID,action:loftoceanRoomReservation.addRoomToCartAjaxAction};return r.find("input,select,cheeckbox").serializeArray().forEach(function(e){a[e.name]=e.value}),R.html(""),_.html(""),E.addClass("loading"),s.ajax(loftoceanRoomReservation.ajaxURL,{method:"GET",data:a}).done(function(e,a){var t=!1;"success"==a&&"object"==typeof(e=e?JSON.parse(e):{})&&(e.message?(t=!0,R.html("<p>"+e.message+"</p>")):e.redirect&&(t=!0,_.html("<p>"+T.bookingSuccess+"</p>"),setTimeout(function(){window.location.href=e.redirect},500))),t||R.html("<p>"+T.bookingError+"</p>")}).fail(function(){R.html("<p>"+T.bookingError+"</p>")}).always(function(){E.removeClass("loading")}),!1}),ue(C,S),X(),E.removeClass("loading")})}(jQuery);
