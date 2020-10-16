<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Customer extends Migration
{
    private $typeConnection = \Raiadrogasil\Common\Entity\BaseEntityInterface::CONN_RELATIONAL;

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::connection($this->typeConnection)->hasTable('customer')) {
            Schema::connection($this->typeConnection)->create('customer', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('name');
                $table->string('email')->unique();
                $table->unsignedBigInteger('cpf');
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
        if (Schema::connection($this->typeConnection)->hasTable('customer')) {
            Schema::connection($this->typeConnection)->dropIfExists('customer');
        }
    }
}
