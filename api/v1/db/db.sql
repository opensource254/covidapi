-- Database: covidapi

DROP TABLE IF EXISTS users;
CREATE TABLE "users" (
	"id" serial NOT NULL PRIMARY KEY,
	"first_name" VARCHAR(255) NOT NULL,
	"last_name" VARCHAR(255) NOT NULL,
	"email" VARCHAR(255) NOT NULL UNIQUE,
	"password" VARCHAR(255) NOT NULL,
	"username" VARCHAR(255) NOT NULL UNIQUE,
	"created_at" TIMESTAMP NOT NULL,
	"location" VARCHAR(255) NOT NULL,
	"doctor_id" int UNIQUE ,
	CONSTRAINT users_doctor_id_key UNIQUE (doctor_id),
	CONSTRAINT users_email_key UNIQUE (email),
	CONSTRAINT users_pkey PRIMARY KEY (id),
	CONSTRAINT users_username_key UNIQUE (username)

);

DROP TABLE IF EXISTS doctors CASCADE;

CREATE TABLE "doctors" (
	"doctor_id" INT NOT NULL,
	"first_name" VARCHAR(20) NOT NULL,
	"last_name" VARCHAR(20) NOT NULL,
	"email" VARCHAR(20) NOT NULL UNIQUE,
	"created_at" TIMESTAMP NOT NULL ,
	"region" VARCHAR(255) NOT NULL,
	"password" VARCHAR(20) NOT NULL,
	"admin_id" int UNIQUE,
	"case_id" INT,
	CONSTRAINT doctors_admin_id_key UNIQUE (admin_id),
	CONSTRAINT doctors_email_key UNIQUE (email),
	CONSTRAINT doctors_pk PRIMARY KEY (doctor_id),
	CONSTRAINT doctors_cases_fk FOREIGN KEY (case_id) REFERENCES covid_cases(case_id),
	CONSTRAINT doctors_fk FOREIGN KEY (admin_id) REFERENCES admins(admin_id),
	CONSTRAINT doctors_users_fk FOREIGN KEY (doctor_id) REFERENCES users(doctor_id)

	

);


DROP TABLE IF EXISTS covid_cases;
CREATE TABLE "covid_cases" (
	"case_id" INT NOT NULL,
	"cases" integer NOT NULL,
	"recoveries" integer NOT NULL,
	"deaths" integer NOT NULL,
	"created_at" TIMESTAMP NOT NULL,
	CONSTRAINT covid_cases_pk PRIMARY KEY (case_id)


);

DROP TABLE IF EXISTS admins;
CREATE TABLE "admins"(
   "admin_id" int NOT NULL,
	"first_name" VARCHAR(20) NOT NULL,
	"last_name" VARCHAR(20) NOT NULL,
	"email" VARCHAR(20) NOT NULL UNIQUE,
	"created_at" TIMESTAMP NOT NULL UNIQUE,
	"region" VARCHAR(255) NOT NULL,
	"password" VARCHAR(20) NOT NULL,
	"approved"  varchar(20),
	"not_approved" varchar(20),
	"pending" varchar(20),
	CONSTRAINT admin_pk PRIMARY KEY (admin_id),
	CONSTRAINT admins_created_at_key UNIQUE (created_at),
	CONSTRAINT admins_email_key UNIQUE (email)
);
