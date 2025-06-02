CREATE DATABASE ClinicaOdontologicaUNG;
USE ClinicaOdontologicaUNG;

CREATE TABLE Pacientes (
    ID_Paciente INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Data_Nascimento DATE NOT NULL,
    Sexo ENUM('Masculino', 'Feminino') NOT NULL,
    Fotografia BLOB,
    Tipo_Documento ENUM('RG', 'CPF', 'Passaporte', 'CNH', 'Outro') NOT NULL,
    Documento_Escaneado BLOB,
    Plano_Saude VARCHAR(50),
    Historico_Medico TEXT,
    Condicao_Sistemica ENUM('Diabetes', 'Hipertensão', 'Cardiopatia', 'Nenhuma', 'Outras'),
    Alergias TEXT,
    Uso_Medicamentos TEXT,
    Historico_Visitas TEXT
);

CREATE TABLE Professores (
    ID_Professor INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Data_Nascimento DATE NOT NULL,
    Sexo ENUM('Masculino', 'Feminino') NOT NULL,
    Especializacao VARCHAR(100)
);

CREATE TABLE Alunos (
    ID_Aluno INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Data_Nascimento DATE NOT NULL,
    Sexo ENUM('Masculino', 'Feminino') NOT NULL,
    Matricula VARCHAR(50) NOT NULL
);

CREATE TABLE Enderecos (
    ID_Endereco INT AUTO_INCREMENT PRIMARY KEY,
    ID_Paciente INT,
    ID_Professor INT,
    ID_Aluno INT,
    Logradouro TEXT NOT NULL,
    Numero VARCHAR(10) NOT NULL,
    Complemento VARCHAR(50),
    Bairro VARCHAR(50) NOT NULL,
    Cidade VARCHAR(50) NOT NULL,
    Estado VARCHAR(2) NOT NULL,
    CEP VARCHAR(9) NOT NULL,
    FOREIGN KEY (ID_Paciente) REFERENCES Pacientes(ID_Paciente),
    FOREIGN KEY (ID_Professor) REFERENCES Professores(ID_Professor),
    FOREIGN KEY (ID_Aluno) REFERENCES Alunos(ID_Aluno),
    CONSTRAINT CHK_Endereco_Pessoa CHECK (
        (ID_Paciente IS NOT NULL AND ID_Professor IS NULL AND ID_Aluno IS NULL) OR
        (ID_Paciente IS NULL AND ID_Professor IS NOT NULL AND ID_Aluno IS NULL) OR
        (ID_Paciente IS NULL AND ID_Professor IS NULL AND ID_Aluno IS NOT NULL)
    )
);

CREATE TABLE Telefones (
    ID_Telefone INT AUTO_INCREMENT PRIMARY KEY,
    ID_Paciente INT,
    ID_Professor INT,
    ID_Aluno INT,
    Tipo ENUM('Residencial', 'Comercial', 'Celular') NOT NULL,
    Numero VARCHAR(20) NOT NULL,
    FOREIGN KEY (ID_Paciente) REFERENCES Pacientes(ID_Paciente),
    FOREIGN KEY (ID_Professor) REFERENCES Professores(ID_Professor),
    FOREIGN KEY (ID_Aluno) REFERENCES Alunos(ID_Aluno),
    CONSTRAINT CHK_Telefone_Pessoa CHECK (
        (ID_Paciente IS NOT NULL AND ID_Professor IS NULL AND ID_Aluno IS NULL) OR
        (ID_Paciente IS NULL AND ID_Professor IS NOT NULL AND ID_Aluno IS NULL) OR
        (ID_Paciente IS NULL AND ID_Professor IS NULL AND ID_Aluno IS NOT NULL)
    )
);

CREATE TABLE Emails (
    ID_Email INT AUTO_INCREMENT PRIMARY KEY,
    ID_Paciente INT,
    ID_Professor INT,
    ID_Aluno INT,
    Email VARCHAR(255) NOT NULL,
    FOREIGN KEY (ID_Paciente) REFERENCES Pacientes(ID_Paciente),
    FOREIGN KEY (ID_Professor) REFERENCES Professores(ID_Professor),
    FOREIGN KEY (ID_Aluno) REFERENCES Alunos(ID_Aluno),
    CONSTRAINT CHK_Email_Pessoa CHECK (
        (ID_Paciente IS NOT NULL AND ID_Professor IS NULL AND ID_Aluno IS NULL) OR
        (ID_Paciente IS NULL AND ID_Professor IS NOT NULL AND ID_Aluno IS NULL) OR
        (ID_Paciente IS NULL AND ID_Professor IS NULL AND ID_Aluno IS NOT NULL)
    )
);

CREATE TABLE RedesSociais (
    ID_Rede_Social INT AUTO_INCREMENT PRIMARY KEY,
    ID_Paciente INT,
    ID_Professor INT,
    ID_Aluno INT,
    Plataforma VARCHAR(50) NOT NULL,
    Perfil VARCHAR(255) NOT NULL,
    FOREIGN KEY (ID_Paciente) REFERENCES Pacientes(ID_Paciente),
    FOREIGN KEY (ID_Professor) REFERENCES Professores(ID_Professor),
    FOREIGN KEY (ID_Aluno) REFERENCES Alunos(ID_Aluno),
    CONSTRAINT CHK_RedeSocial_Pessoa CHECK (
        (ID_Paciente IS NOT NULL AND ID_Professor IS NULL AND ID_Aluno IS NULL) OR
        (ID_Paciente IS NULL AND ID_Professor IS NOT NULL AND ID_Aluno IS NULL) OR
        (ID_Paciente IS NULL AND ID_Professor IS NULL AND ID_Aluno IS NOT NULL)
    )
);

CREATE TABLE Periograma (
    ID_Periograma INT AUTO_INCREMENT PRIMARY KEY,
    ID_Paciente INT NOT NULL,
    Data_Exame DATE NOT NULL,
    Indice_de_Placa BOOLEAN,
    Indice_Sangramento_Gengival BOOLEAN,
    Profundidade_Sondagem FLOAT CHECK (Profundidade_Sondagem <= 15.99),
    Nivel_Clinico_Inserção FLOAT CHECK (Nivel_Clinico_Inserção <= 15.99),
    Sangramento_Sondagem BOOLEAN,
    Supuracao BOOLEAN,
    Mobilidade_Dentaria INT CHECK (Mobilidade_Dentaria IN (0, 1, 2, 3)),
    Furca INT CHECK (Furca IN (1, 2, 3)),
    Perda_Ossea FLOAT,
    Recessao_Gengival TEXT,
    Observacoes TEXT,
    FOREIGN KEY (ID_Paciente) REFERENCES Pacientes(ID_Paciente)
);

-- Tabela de Doenças Periodontais
CREATE TABLE DoencasPeriodontais (
    ID_Doenca INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Descricao TEXT,
    Estagio VARCHAR(50),
    Sintomas TEXT,
    Tratamento_Recomendado TEXT
);

-- Tabela de Tipos de Tratamento
CREATE TABLE TiposTratamento (
    ID_Tratamento INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Descricao TEXT,
    Area ENUM('Periodontia', 'Ortodontia', 'Implante') NOT NULL
);

CREATE TABLE ProcedimentosDentarios (
    ID_Procedimento INT AUTO_INCREMENT PRIMARY KEY,
    ID_Tratamento INT NOT NULL,
    ID_Paciente INT NOT NULL,
    ID_Professor INT,
    ID_Aluno INT,
    Diagnostico TEXT,
    Plano_Tratamento TEXT,
    Data_Procedimento DATE NOT NULL,
    Observacoes TEXT,
    Imagens_Procedimento BLOB,
    Videos_Procedimento BLOB,
    Valores_Custos DECIMAL(10,2) CHECK (Valores_Custos >= 0),
    FOREIGN KEY (ID_Tratamento) REFERENCES TiposTratamento(ID_Tratamento),
    FOREIGN KEY (ID_Paciente) REFERENCES Pacientes(ID_Paciente),
    FOREIGN KEY (ID_Professor) REFERENCES Professores(ID_Professor),
    FOREIGN KEY (ID_Aluno) REFERENCES Alunos(ID_Aluno)
);

ALTER TABLE Periograma MODIFY Indice_de_Placa FLOAT;
ALTER TABLE Periograma MODIFY Indice_Sangramento_Gengival FLOAT;

ALTER TABLE Periograma ADD COLUMN Dados_JSON JSON;

CREATE USER 'odonto'@'localhost' IDENTIFIED BY 'senha_segura';
GRANT ALL PRIVILEGES ON ClinicaOdontologicaUNG.* TO 'odonto'@'localhost';
FLUSH PRIVILEGES;

CREATE TABLE Periograma_Detalhes (
    ID_Detalhe INT AUTO_INCREMENT PRIMARY KEY,
    ID_Periograma INT NOT NULL,
    Dente INT NOT NULL,
    Regiao VARCHAR(10) NOT NULL,
    Profundidade FLOAT,
    Mobilidade INT,
    Furca INT,
    Perda_Ossea FLOAT,
    Recessao_Gengival FLOAT,
    Observacao TEXT,
    FOREIGN KEY (ID_Periograma) REFERENCES Periograma(ID_Periograma)
);


