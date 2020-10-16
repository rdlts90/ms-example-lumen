<?php

namespace App\Http\API\v1\Requests;

use App\Domain\DTO\CustomerDTO;
use Raiadrogasil\Common\Request\BaseRequest;

class CustomerRequest extends BaseRequest
{
    /**
     * Testa a validacao e retorna um DTO
     *
     * @return CustomerDTO
     * @throws \Illuminate\Validation\ValidationException
     */
    public function validateAdd()
    {
        //executar a validacao
        $rule = [
            'name' => 'required|max:50',
            'email' => 'required|unique:customer|email',
            'cpf' => 'required|cpf',
            'cep' => 'required|zipcode',
        ];
        $requestResource = $this->validateArr($rule, false);

        //parse para objeto DTO
        $customerDTO = new CustomerDTO($requestResource);

        return $customerDTO;
    }


    /**
     * Testa a validacao e retorna um DTO
     *
     * @return CustomerDTO
     * @throws \Illuminate\Validation\ValidationException
     */
    public function validateUpdate()
    {

        $rule = [
            'name' => 'max:50',
            'email' => 'unique:customer|max:50',
            'cpf' => 'numeric|cpf',
            'cep' => 'numeric|zipcode',
        ];
        $requestResource = $this->validateArr($rule, true);

        //parse para objeto DTO
        $customerDTO = new CustomerDTO($requestResource);

        return $customerDTO;
    }



    /**
     * Validações customizadas atribuidas a esse modulo
     * @codeCoverageIgnore
     */
    public function buildValidationRulesCustom()
    {
    }
}
