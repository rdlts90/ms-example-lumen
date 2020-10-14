<?php

namespace App\Services;

use Illuminate\Http\Request;
use Raiadrogasil\Common\Repository\BaseRepositoryInterface;
use Raiadrogasil\Common\Service\BaseService;
use Raiadrogasil\Common\Exceptions\CustomFailException;
use Raiadrogasil\Common\DTO\ReturnDTO;
use App\Domain\DTO\ClientDTO;
use App\Repositories\ClientRepositoryInterface;

class ClientService extends BaseService implements ClientServiceInterface
{
    /**
     * @var clientRepositoryInterface
     */
    private $clientRepository;


    public function __construct(ClientRepositoryInterface $clientRepository)
    {
        $this->clientRepository = $clientRepository;
    }

    /**
     * Retorna o repositorio
     *
     * @return BaseRepositoryInterface|null
     */
    public function repository(): ?BaseRepositoryInterface
    {
        return $this->clientRepository;
    }


    /**
     * Adicionar um registro
     *
     * @param ClientDTO $clientDTO
     * @param Request $request
     * @return ReturnDTO
     */
    public function add(ClientDTO $clientDTO, Request $request): ReturnDTO
    {
        return $this->addRegister($clientDTO, $request);
    }


    /**
     * Atualizar o registro
     *
     * @param int $id
     * @param ClientDTO $clientDTO
     * @param Request $request
     * @return ReturnDTO
     */
    public function update(int $id, ClientDTO $clientDTO, Request $request): ReturnDTO
    {
        return $this->updateRegister($id, $clientDTO, $request);
    }
}
