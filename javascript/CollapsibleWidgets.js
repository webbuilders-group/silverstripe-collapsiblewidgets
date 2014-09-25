(function($) {
    $.entwine('cw', function($) {
        $('.usedWidgets .Widget').entwine({
            onmatch: function(e) {
                if($(this).find('.handle .widget-collapse-toggle').length>0) {
                    return;
                }
                
                var toggle=$('<a class="widget-collapse-toggle"><!-- --></a>');
                $(this).find('.handle').append(toggle);
                
                if($(this).hasClass('new-widget')==false && $(this).find('.validation, .error').length==0) {
                    $(this).addClass('collapsed');
                }else {
                    toggle.addClass('expanded');
                }
            }
        });
        
        $('.usedWidgets .Widget .widget-collapse-toggle').entwine({
            onclick: function(e) {
                var widget=$(this).closest('.Widget');
                
                if($(this).hasClass('expanded')) {
                    widget.addClass('collapsed');
                    $(this).removeClass('expanded');
                }else {
                    widget.removeClass('collapsed');
                    $(this).addClass('expanded');
                }
                
                e.stopPropagation();
                return false;
            }
        });
    });
    
    $.entwine('ss', function($) {
        $('.WidgetAreaEditor.AdvancedWidgetAreaEditor').entwine({
            insertWidgetEditor: function(response) {
                this._super(response);
                
                $(this).find('.Widget:last').addClass('new-widget');
            }
        });
    });
})(jQuery);