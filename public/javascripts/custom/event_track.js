if (typeof jQuery != 'undefined') {
    var filetypes = /\.(dipb0.zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i;
    var baseHref = '';
    if (jQuery('base').attr('href') != undefined) baseHref = jQuery('base').attr('href');
    var hrefRedirect = '';
 
    jQuery('body').on('click', 'a', function(event) {
        var el = jQuery(this);
        var track = true;
        var href = (typeof(el.attr('href')) != 'undefined' ) ? el.attr('href') : '';
        var isThisDomain = href.match(document.domain.split('.').reverse()[1] + '.' + document.domain.split('.').reverse()[0]);
        if (!href.match(/^javascript:/i)) {
            var elEv = []; elEv.value=0, elEv.non_i=false;
            if (href.match(filetypes)) {
                var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
                elEv.category = 'download';
                elEv.action = 'click-' + extension[0];
                elEv.label = href.replace(/ /g,'-');
                elEv.loc = baseHref + href;
            }
            else if (href.match(/^https?\:/i) && !isThisDomain) {
                elEv.category = 'external';
                elEv.action = 'click';
                elEv.label = href.replace(/^https?\:\/\//i, '');
                elEv.non_i = true;
                elEv.loc = href;
            }
            else if (href.match(/^https?\:design\-files\.tessel\.io/i)) {
                elEv.category = 'design-files';
                elEv.action = 'click';
                elEv.label = href.replace(/^tel\:/i, '');
                elEv.loc = href;
            }
            else if (href.match(/^https?\:design\-files\.tessel\.io/i)) {
                elEv.category = 'github';
                elEv.action = 'click';
                elEv.label = href.replace(/^https?\:github\.com/i, '');
                elEv.loc = href;
            }
            else track = false;
 
            if (track) {
                var ret = true;
 
                if((elEv.category == 'external' || elEv.category == 'download') && (el.attr('target') == undefined || el.attr('target').toLowerCase() != '_blank') ) {
                    hrefRedirect = elEv.loc;
 
                    ga('send','event', elEv.category.toLowerCase(),elEv.action.toLowerCase(),elEv.label.toLowerCase(),elEv.value,{
                        'nonInteraction': elEv.non_i ,
                        'hitCallback':gaHitCallbackHandler
                    });
 
                    ret = false;
                }
                else {
                    ga('send','event', elEv.category.toLowerCase(),elEv.action.toLowerCase(),elEv.label.toLowerCase(),elEv.value,{
                        'nonInteraction': elEv.non_i
                    });
                }
 
                return ret;
            }
        }
    });
 
    gaHitCallbackHandler = function() {
        window.location.href = hrefRedirect;
    }
}
