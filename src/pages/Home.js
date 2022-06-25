import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

import { exercisesOption, fetchData } from "../utils/fetchData";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
	const [bodyPart, setBodyPart] = useState("all");
	const [exercises, setExercises] = useState([]);
	useEffect(() => {
		const fetchExercisesData = async () => {
			let exercisesData = [];

			if (bodyPart === "all") {
				exercisesData = await fetchData(
					"https://exercisedb.p.rapidapi.com/exercises",
					exercisesOption
				);
			} else {
				exercisesData = await fetchData(
					`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
					exercisesOption
				);
			}

			setExercises(exercisesData);
		};
		fetchExercisesData();
	}, [bodyPart]);
	return (
		<Box>
			<HeroBanner />
			<SearchExercises
				setExercises={setExercises}
				setBodyPart={setBodyPart}
				bodyPart={bodyPart}
			/>
			<Exercises exercises={exercises} />
		</Box>
	);
};

export default Home;
