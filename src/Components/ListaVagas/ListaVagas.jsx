import './ListaVagas.scss';

export default function ListaVagas(props) {
	// deixar dinamico

	return (
		<div className="lista-vagas">
			<div className="lista-vagas-item">
				<div className="lista-vagas-item-wrapper">
					<h2 className="lista-vagas-item-titulo">IBM- Development Junior</h2>
					<div className="lista-vagas-item-descricao">
						<p>Vaga para Desenvolvedor junior sem experiencia</p>
						<p>Carga horaria: 08:00 às 17:00</p>
						<p>Seg á Sexta</p>
						<p>IBM - Tutoia</p>
						<p>Salário:</p>
					</div>
				</div>
				<div className="lista-vagas-item-wrapper">
					<div>
						<p>Data de início: 23/04/2022</p>
						<p>Término: 23/06/2022</p>
					</div>
					<div className="align-right">
						<p>Vagas: 3</p>
						<p>Inscritos: 14</p>
					</div>
				</div>
			</div>
			<div className="lista-vagas-item">
				<div className="lista-vagas-item-wrapper">
					<h2 className="lista-vagas-item-titulo">IBM- Development Junior</h2>
					<div className="lista-vagas-item-descricao">
						<p>Vaga para Desenvolvedor junior sem experiencia</p>
						<p>Carga horaria: 08:00 às 17:00</p>
						<p>Seg á Sexta</p>
						<p>IBM - Tutoia</p>
						<p>Salário:</p>
					</div>
				</div>
				<div className="lista-vagas-item-wrapper">
					<div>
						<p>Data de início: 23/04/2022</p>
						<p>Término: 23/06/2022</p>
					</div>
					<div className="align-right">
						<p>Vagas: 3</p>
						<p>Inscritos: 14</p>
					</div>
				</div>
			</div>
		</div>
	);
}
