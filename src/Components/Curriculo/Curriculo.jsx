import './Curriculo.scss';

export default function Curriculo(props) {
	return (
		<>
			<h1>Meu Curriculo</h1>
			<div className="curriculo-wrapper">
				<div className="curriculo-info">
					<h2>Wesley Klem Da Silva Sauro</h2>
					<p>27 anos</p>
					<p>Aclimação - SP</p>
					<p>Avenida Lins de Vasconcelo, 1895</p>
				</div>
				<div className="curriculo-info">
					<h2>Formação Academica</h2>
					<p>Fiap: Desenvolvedor front-end</p>
					<p>Conclusão 24/04/2011</p>
				</div>
				<div className="curriculo-info">
					<h2>Hard and Softskills</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
						exercitationem suscipit iste necessitatibus dolore amet animi fuga
						quia repellendus perspiciatis. Neque mollitia eveniet nesciunt
						cumque ab delectus aspernatur libero cupiditate. Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Incidunt consequatur quo,
						illum sequi dignissimos voluptatum molestias est, tenetur animi
						saepe unde vitae dolorum exercitationem deserunt quaerat aut? Eius,
						asperiores perferendis.
					</p>
				</div>
			</div>
		</>
	);
}
