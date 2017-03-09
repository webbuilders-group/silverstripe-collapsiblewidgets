(function($) {
    $.entwine('cw', function($) {
        $('.usedWidgets .Widget').entwine({
            onmatch: function(e) {
                var self=$(this);
                
                if(self.find('.handle .widget-collapse-toggle').length>0 || self.find('.widgetFields').length==0) {
                    return;
                }
                
                var toggle=$('<a class="widget-collapse-toggle"><!-- --></a>');
                self.find('.handle').append(toggle);
                
                if(self.hasClass('new-widget')==false && self.find('.validation, .error').length==0) {
                    self.addClass('collapsed');
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
        $('.WidgetAreaEditor .usedWidgets').entwine({
            IsAdded: false,
            
            onadd: function(e) {
                this._super(e);
                
                this.setIsAdded(true);
            }
        });
        

        $('.WidgetAreaEditor .usedWidgets .Widget').entwine({
            onadd: function(e) {
                this._super(e);
                
                var self=$(this);
                if(self.closest('.usedWidgets').getIsAdded()) {
                    self.addClass('new-widget');
                }
            }
        });
    });
})(jQuery);