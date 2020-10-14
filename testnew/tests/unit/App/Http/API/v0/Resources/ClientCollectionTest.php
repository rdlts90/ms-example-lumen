<?php

class ClientCollectionTest extends \Raiadrogasil\Test\BaseTestCase
{
    use \Raiadrogasil\Test\Traits\TestCollection;

    public function collectionClass()
    {
        return \App\Http\API\v0\Resources\ClientCollection::class;
    }
}
