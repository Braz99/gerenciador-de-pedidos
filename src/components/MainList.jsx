import React, { useEffect } from "react";
import { generateList } from "../logic_app/generate_list";
import "../styles/mainList_s.css";

function MainList() {
	useEffect(() => generateList());

	return (
		<main id="main_list">
			<ul id="area_list"></ul>
		</main>
	);
}

export default MainList;
