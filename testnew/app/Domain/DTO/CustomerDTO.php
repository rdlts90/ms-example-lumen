<?php

namespace App\Domain\DTO;

use Raiadrogasil\Common\DTO\BaseDTO;
use Raiadrogasil\Common\DTO\BaseDTOInterface;

/**
 * @SuppressWarnings(PHPMD)
 *
 * Class CustomerDTO
 * @package App\Domain\DTO
 */
class CustomerDTO extends BaseDTO implements BaseDTOInterface
{
    private $id;
    private $name;
    private $email;
    private $cpf;
    private $cep;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id): void
    {
        $this->id = $id;
    }

     /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $id
     */
    public function setName($name): void
    {
        $this->name = $name;
    }

     /**
     * @return mixed
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @param mixed $id
     */
    public function setEmail($email): void
    {
        $this->email = $email;
    }

    /**
     * @return mixed
     */
    public function getCep()
    {
        return $this->name;
    }

    /**
     * @param mixed $id
     */
    public function setCep($cep): void
    {
        $this->cep = $cep;
    }

     /**
     * @return mixed
     */
    public function getCpf()
    {
        return $this->name;
    }

    /**
     * @param mixed $id
     */
    public function setCpf($cpf): void
    {
        $this->cpf = $cpf;
    }

    public function toArray()
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'cpf' => $this->cpf,
            'cep' => $this->cep
        ];
    }
}
