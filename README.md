# node-api-project

Para executar essa API será necessária a instalação do SGBD PostgreSQL, siga as instruções abaixo:

```sh
sudo apt update

sudo apt -y upgrade

sudo apt install postgresql
```

Após a execução dos comandos acima, o PostgreSQL está instalado. Agora vamos criar um banco de dados seguindo os comandos abaixo:

```sh
sudo -i -u postgres # entra no postgres

createdb nome_db # cria o bd

psql -d nome_db # entra no bd
```

O usuário padrão do PostgreSQL é *postgres*, mas devemos, dentro do BD, setar a senha do usuário seguindo o comando abaixo:

```sql
\password -- setar a senha do user default
```

Caso deseje criar um usuário, isso é possível usando os comandos abaixo dentro do BD:

```sql
CREATE USER <user_name> WITH PASSWORD 'user_password'; -- cria um usuário

-- garante todos os privilégios para o usuário criado
GRANT ALL PRIVILEGES ON DATABASE "nome_db" to <user_name>;
```
