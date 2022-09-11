import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Index from '../Routes/Index';
import Cadastro from '../Routes/Cadastro';
import Contato from '../Routes/Contato/Contato';
import Informacao from '../Routes/Informacao';
import Notificacoes from '../Routes/Notificacoes';

export default function App() {
	return (
		<div className="app">
			<Header />
			<main>
				<div className="container">
					<Routes>
						<Route path="/" element={<Index />} />
						<Route path="cadastro" element={<Cadastro />} />
						<Route path="contato" element={<Contato />} />
						<Route path="informacao" element={<Informacao />} />
						<Route path="notificacoes" element={<Notificacoes />} />
					</Routes>
				</div>
			</main>
		</div>
	);
}
