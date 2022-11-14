import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor , setSelectedColor] = useState("")
	return (
		<div className="center">
			<div className="wire" > 
			</div>

			<div className="box">

				<div 
				onClick={() => setSelectedColor ('red')}
				className={"light red " + (selectedColor === "red" ? "ambient" : "")}>
				</div>

				<div 
				onClick={() => setSelectedColor('yellow')}
				className={"light yellow " + (selectedColor === "yellow" ? "ambient" : "")}>
				</div>


				<div 
				onClick={() => setSelectedColor('green')}
				className={"light green " + (selectedColor === 'green' ? "ambient" : "")}>
				</div>

				<button 
				onClick={() => setSelectedColor('purple')}
				className={"" + (selectedColor === "purple" ? "light purple ambient box2" : "")}>
				<p>Click to See Purple</p>
				</button>

			</div>



		</div>
	);
};

export default Home;
