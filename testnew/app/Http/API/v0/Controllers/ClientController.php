<?php

namespace App\Http\API\v0\Controllers;

use App\Http\Controllers\Controller;
use App\Http\API\v0\Resources\ClientCollection;
use App\Http\API\v0\Resources\ClientResource;
use App\Http\API\v0\Requests\ClientRequest;
use App\Services\ClientServiceInterface;
use Raiadrogasil\Common\Traits\RestActions;

class ClientController extends Controller
{
    use RestActions;

    private $clientService;

    public function __construct(ClientServiceInterface $clientService)
    {
        $this->clientService = $clientService;
    }

    /**
     * @param $resource
     * @return ClientCollection
     * @codeCoverageIgnore
     */
    protected function collection($resource)
    {
        return new ClientCollection($resource, false);
    }

    /**
     * @param $resource
     * @return ClientResource
     * @codeCoverageIgnore
     */
    protected function resource($resource)
    {
        return new ClientResource($resource);
    }

    /**
     * @OA\Get(
     *     path="/api/v0/clients",
     *     tags={"Client v0"},
     *     summary="Listar todos os registros",
     *     description="Retorna multiplos registros assim como uma paginação",
     *     operationId="client_all",
     *     @OA\Response(
     *         response=200,
     *         description="Sucesso na operação"
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Valor inválido na operação"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Registro não encotrado"
     *     )
     * )
     */
    public function all(ClientRequest $request)
    {
        try {
            $dataClient = $this->clientService->all($request);
        } catch (\Throwable $e) {
            throw $e;
        }

        $config = null;
        if (!empty($dataClient)) {
            $config = $this->collection($dataClient)
                ->configureMainParser();
        }

        return $this->response($config);
    }


    /**
     * @OA\Get(
     *     path="/api/v0/clients/{id}",
     *     tags={"Client v0"},
     *     summary="Recuperar um registro pelo ID",
     *     description="Retona apenas um registro",
     *     operationId="client_get",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID do registro a ser buscado",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Sucesso na operação"
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Valor inválido na operação"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Registro não encontrado"
     *     )
     * )
     *
     * @param int $id
     */
    public function get($id, ClientRequest $request)
    {
        $request->validateId($id);

        try {
            $dataClient = $this->clientService->get($id);
        } catch (\Throwable $e) {
            throw $e;
        }

        $config = null;
        if (!empty($dataClient)  && $dataClient->count()) {
            $config = $this->resource($dataClient)
                ->configureMainParser();
        }

        return $this->response($config);
    }


    /**
     * @OA\Post(
     *     path="/api/v0/clients",
     *     tags={"Client v0"},
     *     summary="Incluir um registro",
     *     operationId="client_add",
     *     @OA\Response(
     *         response=201,
     *         description="Sucesso na operação"
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Dados inválidos na requisição"
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Valor inválido na operação"
     *     ),
     *     @OA\RequestBody(
     *         description="Dados de entrada",
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 type="object",
     *                  @OA\Property(
     *                     property="exemplo_nome",
     *                     description="Nome do parametro (label)",
     *                     type="string"
     *                 ),
     *                  @OA\Property(
     *                     property="exemplo_identificador",
     *                     description="Nome de identificador do parametro (valor único)",
     *                     type="string"
     *                 ),
     *                 @OA\Property(
     *                     property="exemplo_idLoja",
     *                     description="Id da loja",
     *                     type="integer"
     *                 ),
     *                 @OA\Property(
     *                     property="valor",
     *                     description="Valor da configuração",
     *                     type="string"
     *                 )
     *             )
     *         )
     *     )
     * )
     */
    public function add(ClientRequest $request)
    {
        $clientDTO = $request->validateAdd();

        try {
            $addClient = $this->clientService->add($clientDTO, $request);
        } catch (\Throwable $e) {
            throw $e;
        }

        return $this->response($addClient);
    }


    /**
     * @OA\Put(
     *     path="/api/v0/clients/{id}",
     *     tags={"Client v0"},
     *     summary="Atualizar um registro existente",
     *     operationId="client_update",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID do registro a ser atualizado",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Sucesso na operação"
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Valor inválido na operação"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Registro não encontrado"
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Dados inválidos na requisição"
     *     ),
     *     @OA\RequestBody(
     *         description="Dados de entrada",
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Property(
     *                     property="exemplo_idLoja",
     *                     description="Id da loja",
     *                     type="integer"
     *                 ),
     *                 @OA\Property(
     *                     property="exemplo_valor",
     *                     description="Valor da configuração",
     *                     type="string"
     *                 )
     *             )
     *         )
     *     )
     * )
     */
    public function update($id, ClientRequest $request)
    {
        $request->validateId($id);
        $clientDTO = $request->validateUpdate();

        try {
            $updateClient = $this->clientService->update($id, $clientDTO, $request);
        } catch (\Throwable $e) {
            throw $e;
        }

        return $this->response($updateClient);
    }
    

    /**
     * @OA\Delete(
     *     path="/api/v0/clients/{id}",
     *     tags={"Client v0"},
     *     summary="Remover um registro",
     *     operationId="client_remove",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID do registro a ser removido",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Sucesso na operação"
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Valor inválido na operação"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Registro não encontrado"
     *     )
     * )
     */
    public function remove($id, ClientRequest $request)
    {
        $request->validateId($id);

        try {
            $deleteClient = $this->clientService->remove($id, $request);
        } catch (\Throwable $e) {
            throw $e;
        }

        return $this->response($deleteClient);
    }
}
