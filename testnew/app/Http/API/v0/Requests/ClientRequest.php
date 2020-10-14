<?php

namespace App\Http\API\v0\Requests;

use App\Domain\DTO\ClientDTO;
use Raiadrogasil\Common\Request\BaseRequest;

class ClientRequest extends BaseRequest
{
    /**
     * Testa a validacao e retorna um DTO
     *
     * @return ClientDTO
     * @throws \Illuminate\Validation\ValidationException
     */
    public function validateAdd()
    {
       //executar a validacao
        $rule = [
            'name' => 'required|max:50',
            'email' => 'required|unique|max:50',
            'cpf' => 'required|numeric|digits:11',
            'cep' => 'required|numeric|digits:8',
        ];
        $requestResource = $this->validateArr($rule, false);

        //parse para objeto DTO
        $clientDTO = new ClientDTO($requestResource);

        return $clientDTO;
    }


    /**
     * Testa a validacao e retorna um DTO
     *
     * @return ClientDTO
     * @throws \Illuminate\Validation\ValidationException
     */
    public function validateUpdate()
    {
        $rule = [
            'name' => 'max:50',
            'email' => 'unique|max:50',
            'cpf' => 'numeric|max:11',
            'cep' => 'numeric|max:8',
        ];
        $requestResource = $this->validateArr($rule, true);

        //parse para objeto DTO
        $clientDTO = new ClientDTO($requestResource);

        return $clientDTO;
    }



    /**
     * Validações customizadas atribuidas a esse modulo
     * @codeCoverageIgnore
     */
    public function buildValidationRulesCustom()
    {
    }
}
