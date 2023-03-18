import React from "react";
import Globe from "react-globe.gl";
import { Button, Popover, Whisper } from "rsuite";
import bg from "./assets/Black_on_white_dotted_world_map_vector.jpg";
import { renderToStaticMarkup } from "react-dom/server";

function App() {
	const markerSvg = `<svg viewBox="-4 0 36 36">
  <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
  <circle fill="black" cx="14" cy="14" r="7"></circle>
</svg>`;

	// Gen random data
	const N = 20;
	const gData = [...Array(N).keys()].map(() => ({
		lat: (Math.random() - 0.5) * 180,
		lng: (Math.random() - 0.5) * 360,
	}));
	return (
		<div className='App'>
			<h1>hello world</h1>
			<Globe
				backgroundColor='#fff'
				globeImageUrl={bg}
				htmlElementsData={gData}
				htmlElement={(d: any) => {
					const output = document.createElement("p");
					const staticElement = renderToStaticMarkup(<Button appearance="primary" title="52 artigos">Focus</Button>);
					output.innerHTML = staticElement;
					return output;
				}}
			/>
			,
		</div>
	);
}

export default App;
