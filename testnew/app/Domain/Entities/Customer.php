<?php

namespace App\Domain\Entities;

use Raiadrogasil\Common\Entity\BaseEntity;

class Customer extends BaseEntity
{
    public $table = 'customer';

    /**
     * atributos disponiveis
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'created_at',
        'updated_at',
        'name',
        'email',
        'cpf',
        'cep',
    ];

    /**
     * atributos que sofrerao cast.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
    ];
}
