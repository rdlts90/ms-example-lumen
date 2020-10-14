<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Client extends Migration
{
    private $typeConnection = \Raiadrogasil\Common\Entity\BaseEntityInterface::CONN_RELATIONAL;

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::connection($this->typeConnection)->hasTable('client')) {
            Schema::connection($this->typeConnection)->create('client', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('name');
                $table->string('email');
                $table->integer('cpf');
                $table->integer('cep');
                $table->timestamps();
                $table->softDeletes();

            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (Schema::connection($this->typeConnection)->hasTable('client')) {
            Schema::connection($this->typeConnection)->dropIfExists('client');
        }
    }
}