<?php

namespace App\Services;

use Illuminate\Http\Request;
use Raiadrogasil\Common\DTO\ReturnDTO;
use App\Domain\DTO\ClientDTO;

interface ClientServiceInterface
{
    /**
     * Buscar todos os registros
     *
     * @param Request $request
     * @return mixed
     */
    public function all(Request $request);


    /**
     * Buscar um registro por ID
     *
     * @param int $id
     * @return mixed
     */
    public function get(int $id);


    /**
     * Adicionar um registro
     *
     * @param ClientDTO $clientDTO
     * @param Request $request
     * @return ReturnDTO
     */
    public function add(ClientDTO $clientDTO, Request $request): ReturnDTO;


    /**
     * Atualizar o registro
     *
     * @param int $id
     * @param ClientDTO $clientDTO
     * @param Request $request
     * @return ReturnDTO
     */
    public function update(int $id, ClientDTO $clientDTO, Request $request): ReturnDTO;



    /**
     * Remove o registro
     *
     * @param int $id
     * @param Request $request
     * @return ReturnDTO
     */
    public function remove(int $id, Request $request): ReturnDTO;
}
