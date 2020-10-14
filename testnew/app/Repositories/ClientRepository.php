<?php

namespace App\Repositories;

use App\Domain\Entities\Client;
use Raiadrogasil\Common\Repository\BaseRepository;

/**
 * Class ClientRepository
 */
class ClientRepository extends BaseRepository implements ClientRepositoryInterface
{
    /**
     * Configure the Model
     **/
    public function model()
    {
        return Client::class;
    }
}
