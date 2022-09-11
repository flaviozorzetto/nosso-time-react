import { Link } from 'react-router-dom';

import './Header.scss';

export default function Header() {
	return (
		<header className="top-header">
			<div className="container">
				<nav>
					<ul className="nav-list">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="cadastro" className="nav-link">
								cadastro
							</Link>
						</li>
						<li className="nav-item">
							<Link to="informacao" className="nav-link">
								informacao
							</Link>
						</li>
						<li className="nav-item">
							<Link to="contato" className="nav-link">
								contato
							</Link>
						</li>
						<li className="nav-item">
							<Link to="notificacoes" className="nav-link">
								notificações
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
