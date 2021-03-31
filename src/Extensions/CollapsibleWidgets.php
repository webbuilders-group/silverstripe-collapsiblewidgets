<?php
namespace WebbuildersGroup\CollapsibleWidgets\Extensions;

class CollapsibleWidgets extends Extension
{
    public function __construct()
    {
        parent::__construct();

        Requirements::css(COLLAPSABLE_WIDGETS_BASE.'/css/CollapsibleWidgets.css');
        Requirements::javascript(COLLAPSABLE_WIDGETS_BASE.'/javascript/CollapsibleWidgets.js');
    }
}
