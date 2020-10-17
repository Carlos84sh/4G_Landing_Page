import React from "react";

import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	var texto = "hola";
	return (
		<div>
			<Navbar />

			<div className="container">
				<Jumbotron title={texto} />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-3">
						<Card
							title="Carta 1"
							imagen="https://picsum.photos/200/300/?blur"
						/>
					</div>
					<div className="col-3">
						<Card
							title="Carta 2"
							imagen="https://picsum.photos/200/300?grayscale"
						/>
					</div>
					<div className="col-3">
						<Card
							title="Carta 4"
							imagen="https://picsum.photos/id/237/200/300"
						/>
					</div>
					<div className="col-3">
						<Card
							title="Carta 5"
							imagen="https://picsum.photos/200/300.webp"
						/>
					</div>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}
