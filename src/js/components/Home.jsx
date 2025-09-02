import React from "react";
import Tareas from "./Tareas.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
const Home = () => {
	return (
		<div className="text-center d-flex flex-column align-items-center">
			<h1 className="text-center mt-5">ToDoList</h1>
			<div className="card col-sm-4 d-flex align-items-center">
				<div className="card-body col-sm-11">
					<div id="card" className="card">
					<input id="input" placeholder="cosas por hacer" type="text-only" className="card-header"></input>
					<div id="tareas" className="list-group list-group-flush">
						<div className="d-flex align-items-left mx-2">u are free</div>
					</div>
					</div>
				</div>
			</div>
			<div className="mt-3">
				<div id="btnClear" className="btn btn-primary mx-3">
					Clear
				</div>
			</div>
		</div>
	);
};

export default Home;