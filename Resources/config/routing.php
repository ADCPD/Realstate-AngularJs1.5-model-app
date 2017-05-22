<?php

use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouteCollection;

/** @var RouteCollection $collection */
$collection = new RouteCollection();

 
$collection->addCollection(
    $loader->import('@InterfaceBundle/Resources/config/routing/realStateApp_routing.yml')
);

return $collection;