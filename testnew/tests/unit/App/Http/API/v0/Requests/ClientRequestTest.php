<?php

class ClientRequestTest extends \Raiadrogasil\Test\BaseTestCase
{
    use \Raiadrogasil\Test\Traits\TestRequest;

    public function requestClass()
    {
        return \App\Http\API\v0\Requests\ClientRequest::class;
    }
}
