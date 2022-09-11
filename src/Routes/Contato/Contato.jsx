import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contato.scss';

export default function Contato(props) {
	const [value, setValue] = useState('');

	function handleSubmit(e) {
		alert('Formulario de contato submitado com sucesso');
		e.preventDefault();
	}

	return (
		<>
			<h1>Contato</h1>
			<form action="POST" className="form-assunto" onSubmit={handleSubmit}>
				<label htmlFor="assunto">Assunto</label>
				<textarea
					name="assunto"
					id="assunto"
					cols="30"
					rows="10"
					placeholder="Escreva aqui"
					value={value}
					onChange={e => {
						setValue(e.target.value);
					}}
				></textarea>
				<button className="form-assunto-submit">Enviar</button>
			</form>
			<div className="contato-info">
				<p>contato@ibm.com.br</p>
				<p>11 5537-8424</p>
				<p>
					Chat{' '}
					<span>
						<Link to="/contato">Link - clique aqui</Link>
					</span>
				</p>
			</div>
		</>
	);
}
