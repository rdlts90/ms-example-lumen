<?php

class ClientResourceTest extends \Raiadrogasil\Test\BaseTestCase
{
    use \Raiadrogasil\Test\Traits\TestResource;

    public function resourceClass()
    {
        return \App\Http\API\v0\Resources\ClientResource::class;
    }
}
