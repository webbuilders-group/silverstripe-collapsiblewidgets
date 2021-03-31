<?php
namespace WebbuildersGroup\CollapsibleWidgets\Extensions;

use SilverStripe\Core\Extension;
use SilverStripe\View\Requirements;

class CollapsibleWidgets extends Extension
{
    public function __construct()
    {
        parent::__construct();

        Requirements::css('webbuilders-group/silverstripe-collapsiblewidgets: css/CollapsibleWidgets.css');
        Requirements::javascript('webbuilders-group/silverstripe-collapsiblewidgets: javascript/CollapsibleWidgets.js');
    }
}
