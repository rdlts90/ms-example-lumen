<?php

namespace App\Http\API\v0\Resources;

use Raiadrogasil\Common\Resource\BaseCollection;
use Raiadrogasil\Common\Resource\BaseResource;

class ClientCollection extends BaseCollection
{
    /**
     * @param $resource
     * @return ClientResource
     * @codeCoverageIgnore
     */
    protected function resource($resource)
    {
        return new ClientResource($resource);
    }


    public function configureMainParser()
    {
        $this->dataParser = [
            BaseResource::MAIN_NODE => $this->collection->map(
                function ($client) {
                    $clientResource = $this->resource($client);
                    return $clientResource->configureMainParser();
                }
            ),
        ];
        return $this;
    }
}
