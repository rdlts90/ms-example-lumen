<?php

namespace App\Http\API\v0\Resources;

use Raiadrogasil\Common\Resource\BaseResource;

class ClientResource extends BaseResource
{
    public function configureNodeParser()
    {
        $this->dataParser = [
            BaseResource::MAIN_NODE => $this->resource
        ];

        return $this;
    }


    public function configureMainParser()
    {
        $this->dataParser = $this->resource;

        return $this;
    }
}
