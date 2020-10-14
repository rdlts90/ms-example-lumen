<?php


$router->group(
    [
        'prefix' => 'api/v0/clients',
        'middleware' => 'json_response'
    ], function ($router) {
            $router->get('/', 'ClientController@all');
            $router->get('/{id}', 'ClientController@get');
            $router->post('/', 'ClientController@add');
            $router->put('/{id}', 'ClientController@update');
            $router->patch('/{id}', 'ClientController@update');
            $router->delete('/{id}', 'ClientController@remove');
        }
);
