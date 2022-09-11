import { useState } from 'react';
import './CadastroForm.scss';

export default function CadastroForm(props) {
	const [values, setValues] = useState({
		nome: '',
		nascimento: '',
		cep: '',
		estado: '',
		cidade: '',
		logradouro: '',
		escolaridade: '',
		instituicao: '',
		conclusao: '',
		cursos: '',
		hardskills: '',
		softskills: '',
	});

	function handleSubmit(e) {
		alert('Formulario Submitado!');
		e.preventDefault();
	}

	function handleChange(e) {
		const newObj = { ...values };

		newObj[e.target.name] = e.target.value;

		setValues(newObj);
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="formulario">
				<div className="form-wrapper">
					<div className="form-container">
						<h2>Dados pessoais</h2>
						<label htmlFor="nome">Nome completo:</label>
						<input
							type="text"
							name="nome"
							id="nome"
							onChange={handleChange}
							value={values.nome}
						/>

						<label htmlFor="nascimento">Data nascimento:</label>
						<input
							type="text"
							name="nascimento"
							id="nascimento"
							value={values.data}
							onChange={handleChange}
						/>

						<label htmlFor="cep">CEP:</label>
						<input
							type="text"
							name="cep"
							id="cep"
							value={values.cep}
							onChange={handleChange}
						/>

						<label htmlFor="estado">Estado:</label>
						<input
							type="text"
							name="estado"
							id="estado"
							value={values.estado}
							onChange={handleChange}
						/>

						<label htmlFor="cidade">Cidade:</label>
						<input
							type="text"
							name="cidade"
							id="cidade"
							value={values.cidade}
							onChange={handleChange}
						/>

						<label htmlFor="logradouro">Logradouro:</label>
						<input
							type="text"
							name="logradouro"
							id="logradouro"
							value={values.logradouro}
							onChange={handleChange}
						/>
					</div>
					<div className="form-container">
						<h2>formação academica</h2>
						<label htmlFor="escolaridade">Escolaridade:</label>
						<input
							type="text"
							name="escolaridade"
							id="escolaridade"
							value={values.escolaridade}
							onChange={handleChange}
						/>

						<label htmlFor="instituicao">Instituição:</label>
						<input
							type="text"
							name="instituicao"
							id="instituicao"
							value={values.instituicao}
							onChange={handleChange}
						/>

						<label htmlFor="conclusao">Conclusão:</label>
						<input
							type="text"
							name="conclusao"
							id="conclusao"
							value={values.conclusao}
							onChange={handleChange}
						/>

						<label htmlFor="cursos">Cursos extra curriculares:</label>
						<textarea
							type="text"
							name="cursos"
							id="cursos"
							value={values.cursos}
							onChange={handleChange}
						></textarea>

						<label htmlFor="hardskills">Hardskills:</label>
						<textarea
							type="text"
							name="hardskills"
							id="hardskills"
							value={values.hardskills}
							onChange={handleChange}
						></textarea>

						<label htmlFor="softskills">Softskills:</label>
						<textarea
							type="text"
							name="softskills"
							id="softskills"
							value={values.softskills}
							onChange={handleChange}
						></textarea>
					</div>
					<button className="formulario-submit">Cadastrar</button>
				</div>
			</form>
		</>
	);
}
