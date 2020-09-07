! function() {
    function e(e) {
        function r() {
            function r(r, t) {
                function a() {
                    var r = document.createElement("div");
                    r.className = "previewer-button " + e.btnPosition;
                    const t = l ? e.labels.mobilePreviewBtn : e.labels.desktopPreviewBtn;
                    return r.innerHTML = '<a href="javascript:void(0)">' + t + "</a>", r
                }
                $.each($(r).has(t), function(e, r) {
                    if (!r.querySelector(".previewer-button")) {
                        p.push(r.href);
                        let e = r.parentElement;
                        "FIGURE" == r.parentElement.tagName && Shopify && "District" == Shopify.theme.name && (e = e.parentElement), e.appendChild(a())
                    }
                }), $.each($(r).parent().has(t), function(e, t) {
                    t.querySelector(".previewer-button") || (p.push($(t).find(r)[0].href), t.appendChild(a()))
                })
            }
            if (r(m, e.extra.showForAnyImage ? "img, .image" : h), r('form[action="/cart/add"] a[href*="/products/"]:not(.related-products a[href*="/products/"]):not([href*=".JP"]):not([href*=".png"]):not([href*=".PNG"])', `${h}, .image`), p.length && !o) {
                function t() {
                    function r(e) {
                        $(e).addClass("previewer-product")
                    }
                    $.each($(m).has(h), function(e, t) {
                        !$(t).parent().has(".ssw-faveiticon").length && $(t).parent().parent().has(".ssw-faveiticon").length || "FIGURE" == $(t).parent()[0].tagName && Shopify && "District" == Shopify.theme.name ? r($(t).parent().parent()) : r($(t).parent())
                    }), $.each($(m).parent().has(h), function(e, t) {
                        r(t)
                    }), $.each($('form[action="/cart/add"] a[href*="/products/"]:not(.related-products a[href*="/products/"]):not([href*=".JP"]):not([href*=".png"]):not([href*=".PNG"])').parent().has(`${h}, .image`), function(e, t) {
                        r(t)
                    }), e.extra.showForAnyImage && $.each($(m).parent().has("img, .image"), function(e, t) {
                        r(t)
                    });
                    var t = getComputedStyle(document.querySelector('[data-behavior="previewer_add_to_cart"]'));
                    $(".previewer-button a").css({
                        color: t.color,
                        backgroundColor: t.backgroundColor,
                        fontFamily: t.fontFamily,
                        fontWeight: t.fontWeight,
                        border: t.border,
                        borderRadius: t.borderRadius
                    })
                }

                function a() {
                    $(document).on("click", '[data-behavior="previewer_close_modal"]', function() {
                        x()
                    }), $(document).on("mouseover", '[data-behavior="previewer_add_to_cart"]:not(.btn--secondary)', function(r) {
                        setTimeout(function() {
                            var t = getComputedStyle(r.currentTarget).backgroundColor;
                            setTimeout(function() {
                                var a = getComputedStyle(r.currentTarget).backgroundColor;
                                setTimeout(function() {
                                    var o = getComputedStyle(r.currentTarget).backgroundColor;
                                    if (t == o && t == a) {
                                        o = getComputedStyle(r.currentTarget).backgroundColor;
                                        var i = getComputedStyle(r.currentTarget).color,
                                            n = getComputedStyle(r.currentTarget).border,
                                            d = getComputedStyle(document.querySelector(".previewer-button a")).backgroundColor;
                                        if ((o !== e.extra.btnHoverColor || i !== e.extra.btnHoverTextColor || n !== e.extra.borderHover) && o !== d) {
                                            e.extra.btnHoverColor = o, e.extra.btnHoverTextColor = i, e.extra.borderHover = n, $("<style>.previewer-button a:hover { background-color: " + o + " !important; color: " + i + " !important; border: " + n + " !important; }</style>").appendTo("head");
                                            var c = {
                                                theme_id: Shopify.theme.id,
                                                type: "hover_color",
                                                data: {
                                                    btn_hover_color: o,
                                                    btn_hover_text_color: i,
                                                    border_hover: n
                                                }
                                            };
                                            $.ajax({
                                                method: "GET",
                                                url: e.storeStylesUrl,
                                                data: {
                                                    style_info: c
                                                }
                                            })
                                        }
                                    }
                                }, 200)
                            }, 100)
                        }, 200)
                    }), $(document).on("click", '[data-behavior="previewer_add_to_cart"]:not(.btn--secondary)', function() {
                        const r = document.querySelector('[data-behavior="previewer_quantity"] input');
                        $.ajax({
                            url: "/cart/add.js",
                            method: "post",
                            data: {
                                quantity: r ? r.value : 1,
                                id: d.id
                            }
                        }).always(function(r) {
                            if (200 == r.status) "stay_on" == e.checkoutRedirect ? $('[data-behavior="previewer_add_to_cart"]:not(.btn--secondary)').addClass("btn--secondary").text(e.labels.goToCheckout) : window.location.pathname = "/cart";
                            else {
                                var t;
                                try {
                                    var a = JSON.parse(r);
                                    (200 == a.status || a.variant_id) && ($('[data-behavior="previewer_add_to_cart"]:not(.btn--secondary)').addClass("btn--secondary").text(e.labels.goToCheckout), t = !0)
                                } catch (o) {
                                    $('[data-behavior="previewer_cart_error"]').show().text(JSON.parse(r.responseText).description)
                                }
                                t || $('[data-behavior="previewer_cart_error"]').show().text(JSON.parse(r.responseText).description)
                            }
                        })
                    }), $(document).on("click", '[data-behavior="previewer_add_to_cart"].btn--secondary', function() {
                        window.location.pathname = "/cart"
                    }), $(document).on("click", '[data-behavior="previewer_prev_product"]:not(.disabled)', function() {
                        var e = p.indexOf(s);
                        e > 0 && (s = p[e - 1], S(), _())
                    }), $(document).on("click", '[data-behavior="previewer_next_product"]:not(.disabled)', function() {
                        var e = p.indexOf(s); - 1 != e && e < p.length && (s = p[e + 1], S(), _())
                    })
                }

                function b() {
                    $(`<script async src="${$(".fake_slick").data().url}" type="text/javascript"></script>`).appendTo("body"), $(".fake_slick").remove()
                }

                function w(e) {
                    e.preventDefault();
                    var r = $(e.currentTarget).hasClass("previewer_mobile-product") ? e.currentTarget : e.currentTarget.parentElement;
                    s = r.querySelector("a").href, _()
                }

                function _() {
                    function e() {
                        function e(e) {
                            const r = s.match(/\?variant=(\d+)/);
                            if (r) {
                                const t = e.variants.find(e => e.id == r[1]);
                                if (t) return t
                            }
                            var t;
                            return e.featured_image ? (e.variants.forEach(function(r) {
                                r.featured_image && r.featured_image.src.includes(e.featured_image) && (!t || r.price < t.price && r.available || r.available && !t.available) && (t = r)
                            }), t || (t = e.variants[0], e.variants.forEach(function(e) {
                                e.price < t.price && (t = e)
                            })), t) : e.variants[0]
                        }

                        function r(e) {
                            y(), d["option" + $(e.currentTarget).parents(".inline").data().position] = e.currentTarget.value, t.variants.forEach(function(e) {
                                e.option1 == d.option1 && e.option2 == d.option2 && e.option3 == d.option3 && (g(e, t.url), e.featured_image && (document.querySelector('[data-behavior="previewer_product_image"]').src = B(e.featured_image.src, "large")))
                            })
                        }
                        $(".previewer-loader").hide(), $(".previewer_modal-body").show(), $('[data-behavior="previewer_modal"] .modal-body').show();
                        var t = JSON.parse(this.responseText);
                        document.querySelector('[data-behavior="previewer_product_title"]').textContent = t.title, f(t);
                          let productTags = t.tags;
                          for (i = 0; i < productTags.length; i++){
                            let tags = productTags[i];
                            console.log(tags);
                            let tagArr= tags.split('-');
                            if(tagArr[1] !== undefined) {
                              document.getElementById(tagArr[0]).innerHTML = tagArr[1];
                            }
                          }
                        var a = t.variants[0].featured_image ? t.variants[0].featured_image.src : t.featured_image;
                        document.querySelector('[data-behavior="previewer_product_image"]').src = B(a, "large"), document.querySelector('[data-behavior="previewer_product_image"]').dataset.zoom = a;
                        var o = t.description,
                            i = document.createElement("div");
                        i.innerHTML = o;
                        for (var n = i.getElementsByTagName("iframe"); n[0];) n[0].parentNode.removeChild(n[0]);
                        if (document.querySelector('[data-behavior="previewer_product_description"]').innerHTML = i.innerHTML, k(t), g(e(t), t.url), t.options.forEach(function(e) {
                                if ("Title" !== e.name) {
                                    var t = document.querySelector('[data-behavior="previewer_options"] [data-position="' + e.position + '"]'),
                                        a = t.querySelector("label"),
                                        o = document.createElement("select");
                                    t.appendChild(o);
                                    var i = "previewer-option_" + e.name;
                                    $(t).removeClass("hidden"), a.htmlFor = i, a.textContent = e.name, o.id = i;
                                    var n = "";
                                    e.values.forEach(function(r) {
                                        var t = d["option" + e.position] == r ? "selected" : "";
                                        n += '<option value="' + r + '"' + t + ">" + r + "</option>"
                                    }), o.innerHTML = n, o.addEventListener("change", r)
                                }
                            }), t.images.length) {
                            $('[data-behavior="previewer_variant_images"]').append('<div class="action-wrapper"><div class="prev"></div></div>'), $('[data-behavior="previewer_variant_images"]').append('<div class="content-images"></div>'), $('[data-behavior="previewer_variant_images"]').append('<div class="action-wrapper"><div class="next"></div></div>'), t.images.forEach(function(e) {
                                $('[data-behavior="previewer_variant_images"] .content-images').append('<div class="variant-block" data-real_src="' + e + '"><img data-lazy="' + B(e, "small") + '" /></div>')
                            });
                            const e = $(".previewer_modal-body .main_image-block");

                            function c() {
                                if ($().slick) return $('[data-behavior="previewer_variant_images"] .content-images').not(".slick-initialized").slick({
                                    lazyLoad: "progressive",
                                    arrows: !0,
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                    vertical: !0,
                                    verticalSwiping: !0,
                                    infinite: !1,
                                    adaptiveHeight: !0,
                                    draggable: !0,
                                    prevArrow: document.querySelector('[data-behavior="previewer_variant_images"] .prev'),
                                    nextArrow: document.querySelector('[data-behavior="previewer_variant_images"] .next')
                                }), !0
                            }
                            $().slick && t.images.length > 1 ? (e.removeClass("full-size"), $('[data-behavior="previewer_variant_images"]').show(), c()) : ($('[data-behavior="previewer_variant_images"]').hide(), e.addClass("full-size")), $(document).on("click", '[data-behavior="previewer_variant_images"] .variant-block', function(e) {
                                j(e.currentTarget.dataset.real_src)
                            }), v && (document.querySelector('[data-behavior="previewer_variant_images"] .prev').style.background = v, document.querySelector('[data-behavior="previewer_variant_images"] .next').style.background = v)
                        }
                        $(".previewer-product_action").show(), E(), a && L()
                    }
                    if (u != s) {
                        u = s, i.style.display = "block", $(".previewer-loader").show(), $(".previewer_modal-body").hide(), T(), $('[data-behavior="previewer_modal"] .modal-body').hide(), $('[data-behavior="previewer_product_type"]').hide();
                        var r = new XMLHttpRequest;
                        r.addEventListener("load", e), r.open("GET", s.split("?")[0] + ".js"), r.send(), 1 != n && C();
                        var t = p.indexOf(s);
                        p.length > 1 && 0 == t ? ($('[data-behavior="previewer_prev_product"]').addClass("disabled"), $('[data-behavior="previewer_next_product"]').removeClass("disabled")) : p.length > 1 && t == p.length - 1 ? ($('[data-behavior="previewer_prev_product"]').removeClass("disabled"), $('[data-behavior="previewer_next_product"]').addClass("disabled")) : p.length > 1 ? ($('[data-behavior="previewer_prev_product"]').removeClass("disabled"), $('[data-behavior="previewer_next_product"]').removeClass("disabled")) : ($('[data-behavior="previewer_prev_product"]').addClass("disabled"), $('[data-behavior="previewer_next_product"]').addClass("disabled")), window.addEventListener("keydown", q)
                    }
                }

                function g(r, t) {
                    d.id = r.id, d.option1 = r.option1, d.option2 = r.option2, d.option3 = r.option3, d.available = r.available, d.price = r.price, d.compare_at_price = r.compare_at_price, d.available ? $('[data-behavior="previewer_add_to_cart"]').text(e.labels.addToCart).prop("disabled", !1) : $('[data-behavior="previewer_add_to_cart"]').text(e.labels.soldOut).prop("disabled", !0);
                    var a = document.querySelector('[data-behavior="previewer_link"]'),
                        o = a.cloneNode(!0);
                    o.href = t + "?variant=" + d.id, a.parentNode.replaceChild(o, a), r.featured_image && j(r.featured_image.src), f(r)
                }

                function f(e) {
                    document.querySelector('[data-behavior="previewer_product_price"]').innerHTML = M(e.price), e.compare_at_price && e.price < e.compare_at_price ? (document.querySelector('[data-behavior="previewer_product_old_price"]').innerHTML = M(e.compare_at_price), $('[data-behavior="previewer_product_price"]').addClass("product-price__sale--single")) : (document.querySelector('[data-behavior="previewer_product_old_price"]').textContent = "", $('[data-behavior="previewer_product_price"]').removeClass("product-price__sale--single"))
                }

                function y() {
                    $('[data-behavior="previewer_add_to_cart"]').removeClass("btn--secondary").text(e.labels.addToCart), $('[data-behavior="previewer_cart_error"]').hide().text("")
                }

                function k(e) {
                    e.type ? ($('[data-behavior="previewer_product_type"]').show(), $('[data-behavior="previewer_product_type"] span').text(e.type), $(".previewer_categories").show()) : $('[data-behavior="previewer_product_type"]').hide(), e.vendor ? ($('[data-behavior="previewer_product_vendor"]').show(), $('[data-behavior="previewer_product_vendor"] span').text(e.vendor), $(".previewer_categories").show()) : $('[data-behavior="previewer_product_vendor"]').hide()
                }

                function C() {
                    window.onclick = function(e) {
                        e.target == i && x()
                    }, window.addEventListener("keydown", function(e) {
                        27 == e.keyCode && x()
                    }), n = !0
                }

                function x() {
                    i.style.display = "none", S()
                }

                function S() {
                    $('[data-behavior="previewer_options"] .inline').addClass("hidden"), document.querySelector('[data-behavior="previewer_variant_images"]').innerHTML = "", document.querySelector('[data-behavior="previewer_variant_images"]').className = "variant_images-block", $(".previewer-product_action").hide(), $(".previewer_categories").hide(), $('[data-behavior="previewer_options"] select').remove(), y(), N(), window.removeEventListener("keydown", q), u = null
                }

                function q(e) {
                    37 == e.keyCode ? $('[data-behavior="previewer_prev_product"]').click() : 39 == e.keyCode && $('[data-behavior="previewer_next_product"]').click()
                }

                function T() {
                    $(".previewer-loader").css("color", getComputedStyle(document.querySelector('[data-behavior="previewer_add_to_cart"]')).backgroundColor);
                    var e = document.querySelector("#content_wrapper") || document.querySelector("#MainContent") || document.querySelector("body");
                    if (e) {
                        var r = "0" !== (a = P(getComputedStyle(e).backgroundColor))[4] ? "rgb(" + a.slice(1, 4).join(", ") + ")" : "#fff";
                        $(".previewer_modal .previewer_modal-content").css({
                            backgroundColor: r
                        }), $(".previewer-loader").css({
                            backgroundColor: r
                        }), $("<style>.product-description:after { background: " + ("linear-gradient(to bottom, rgba(255, 255, 255, 0)," + r + "100%) !important") + "; }</style>").appendTo("head")
                    }
                    var t = document.querySelector('[data-behavior="previewer_product_title"]');
                    if (t) {
                        var a, o = "rgba(" + (a = P(getComputedStyle(t).color)).slice(1, 4).join(", ") + ", 0.4)";
                        $(".previewer_modal").css({
                            backgroundColor: o
                        });
                        var n = getComputedStyle(t).color,
                            d = z(n, "70px", "50px"),
                            c = window.btoa(d);
                        if (v = "url(data:image/svg+xml;base64," + c + ")", document.querySelector('[data-behavior="previewer_prev_product"]').style.background = v, document.querySelector('[data-behavior="previewer_next_product"]').style.background = v, d = z(n), c = window.btoa(d), v = "url(data:image/svg+xml;base64," + c + ")", $('[data-behavior="previewer_cart_error"]').hide(), $(".previewer_modal-content").css({
                                borderColor: "rgba(" + a.slice(1, 4).join(", ") + ", 0.4)"
                            }), i.querySelector('[data-behavior="previewer_quantity"]')) {
                            var p = H(i.querySelector('[data-behavior="previewer_quantity"] input'), "marginBottom") + H(i.querySelector('[data-behavior="previewer_quantity"]'), "marginBottom");
                            i.querySelector('[data-behavior="previewer_quantity"] input').parentElement !== i.querySelector('[data-behavior="previewer_quantity"]') && (p += H(i.querySelector('[data-behavior="previewer_quantity"] input').parentElement, "marginBottom")), $('[data-behavior="previewer_add_to_cart"]').css({
                                marginBottom: p + "px"
                            })
                        }
                    }
                }

                function E() {
                    const e = i.querySelector(".slick-list");
                    if (e) {
                        const r = H(i.querySelector(".description-wrapper_content"), "height");
                        H(e, "height") < r && $(i).find(".content-images, .slick-list").css({
                            minHeight: `${r-130}px`
                        })
                    }
                }

                function H(e, r) {
                    return parseInt(getComputedStyle(e)[r].slice(0, -2))
                }

                function z(e, r = "70px", t = "25px") {
                    return '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="' + r + '" height="' + t + '" viewBox="0 0 265.000000 141.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,141.000000) scale(0.100000,-0.100000)" fill="' + e + '" stroke="none"><path d="M62 1324 c-26 -18 -29 -54 -4 -81 9 -11 116 -107 237 -214 121 -107 337 -298 479 -424 659 -584 602 -535 626 -535 12 0 242 222 615 591 618 615 622 618 583 657 -38 38 -45 33 -634 -548 -312 -308 -571 -560 -574 -560 -3 0 -59 48 -126 108 -66 59 -253 224 -414 367 -162 143 -377 334 -480 425 -295 263 -267 243 -308 214z"/></g></svg>'
                }

                function j(e) {
                    N(), document.querySelector('[data-behavior="previewer_product_image"]').src = B(e, "large"), document.querySelector('[data-behavior="previewer_product_image"]').dataset.zoom = e, L()
                }

                function L() {
                    var e = $('[data-behavior="previewer_product_image"]').wrap('<span style="display:inline-block"></span>').css("display", "block").parent();
                    e.zoom && e.zoom({
                        url: $(this).find("img").attr("data-zoom"),
                        onZoomIn: function() {
                            $(".zoomImg").css("background-color", getComputedStyle(document.querySelector(".previewer_modal .previewer_modal-content")).backgroundColor)
                        }
                    })
                }

                function N() {
                    $('[data-behavior="previewer_product_image"]').trigger("zoom.destroy"), $('[data-behavior="previewer_product_image"]').parents(".main_image-block").html('<img data-behavior="previewer_product_image" src="">')
                }

                function M(e) {
                    return $('[data-behavior="previewer_money_wrapper"]').data().money_format.replace(/{{.*}}/gm, parseFloat(e / 100).toFixed(2))
                }

                function B(e, r) {
                    if (!e) return c;
                    try {
                        if ("original" == r) return e;
                        var t = e.match(/(.*\/[\w\-\_\.]+)\.(\w{2,4})/);
                        return t[1] + "_" + r + "." + t[2]
                    } catch (a) {
                        return e
                    }
                }

                function P(e) {
                    var r = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/;
                    return e.match(r)
                }
                o = !0, setTimeout(function() {
                        $(document).on("click", '.previewer-button, .previewer_mobile-product[data-previewer="always"]', w)
                    }, 1e3),
                    function() {
                        if (e.extra.btnHoverColor) {
                            const r = ".previewer-button a:hover { background-color: " + e.extra.btnHoverColor + " !important; color: " + e.extra.btnHoverTextColor + " !important; " + (e.extra.borderHover ? "border: " + e.extra.borderHover + " !important;" : "") + " }";
                            $("<style>" + r + "</style>").appendTo("head")
                        }
                    }(), t(), e.extra.delayBtnsShow && setTimeout(function() {
                        document.querySelector(".previewer-product") || (t(), setTimeout(function() {
                            document.querySelector(".previewer-product") || t()
                        }, 500))
                    }, 500), a(), b()
            }
        }

        function t() {
            if (l) {
                var r = m,
                    t = h;
                "always_modal" == e.mobileView ? ($.each($(r).has(t), function(e, r) {
                    var t = $(r).parent().parent();
                    t.find(h).length <= 1 ? (t.hasClass("grid-uniform") && (t = $(r).parent()), t.addClass("previewer_mobile-product").attr("data-previewer", "always")) : $(r).parent().find(h).length <= 1 && $(r).parent().addClass("previewer_mobile-product").attr("data-previewer", "always")
                }), $.each($(r).parent().has(t), function(e, r) {
                    var t = $(r).parent();
                    t.hasClass("grid-uniform") || t.hasClass("previewer_mobile-product") || t.find(".previewer_mobile-product").length || t.addClass("previewer_mobile-product").attr("data-previewer", "always")
                })) : "always_button" == e.mobileView && ($.each($(r).has(t), function(e, r) {
                    $(r).parent().parent().addClass("previewer_show-product")
                }), $.each($(r).parent().has(t), function(e, r) {
                    $(r).parent().addClass("previewer_show-product")
                }))
            }
        }

        function a() {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) return !0
        }
        var o, i = document.querySelector('[data-behavior="previewer_modal"]'),
            n = undefined,
            d = {},
            c = "https://cdn.shopify.com/s/images/admin/no-image-compact.gif",
            p = [],
            s = undefined,
            l = a(),
            v = undefined,
            u = undefined,
            m = 'a[href*="/products/"]:not(form a[href*="/products/"]):not(.related-products a[href*="/products/"]):not([href*=".JP"]):not([href*=".png"]):not([href*=".PNG"])',
            h = 'img[src*="/products/"], img[src*="/no-image"], img[data-src*="/products/"], img[data-src*="/no-image"], img[data-srcset*="/products/"], img[data-srcset*="/no-image"]';
        if (!window.location.pathname.match(/.*\/products\/.+/) && !window.location.pathname.match(/.*\/products_preview/) && (!l || "disable" != e.mobileView) && (t(), r(), e.extra.delayBtnsShow)) {
            function b(e, r) {
                setTimeout(function() {
                    document.querySelector(".previewer-button") || r()
                }, e)
            }
            b(500, () => {
                r(), b(500, () => {
                    r()
                })
            })
        }
    }
    var r = {
        enable: !0,
        mobileView: "always_modal",
        checkoutRedirect: "stay_on",
        btnPosition: "top",
        labels: {
            addToCart: "Add to cart",
            goToCheckout: "Go to checkout",
            soldOut: "Sold out",
            desktopPreviewBtn: "View Product",
            mobilePreviewBtn: "View Product"
        },
        storeStylesUrl: "https://previewer.zubrcommerce.com/store_styles.json",
        extra: {
            showForAnyImage: "",
            delayBtnsShow: "",
            btnHoverColor: "rgb(0, 0, 0)",
            btnHoverTextColor: "rgb(255, 255, 255)",
            borderHover: "0px none rgb(255, 255, 255)"
        }
    };
    document.addEventListener("DOMContentLoaded", function() {
        r.enable && document.head.innerText.match(/previewer-loader.js/) ? e(r) : setTimeout(function() {
            r.enable && document.querySelector('script[src*="previewer-loader.js"]') ? e(r) : setTimeout(function() {
                r.enable && document.querySelector('script[src*="previewer-loader.js"]') && e(r)
            }, 800)
        }, 800)
    })
}();