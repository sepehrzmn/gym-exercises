import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchData, exercisesOption, youtubeOption } from "../utils/fetchData";
import ExerciseVideo from "../components/ExerciseVideo";
import SimilarExercises from "../components/SimilarExercises";
import Details from "../components/Details";

const ExerciseDetail = () => {
	const [exerciseDetail, setExerciseDetail] = useState({});
	const [exerciseVideos, setExerciseVideos] = useState([]);
	const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
	const [equipmentExercise, setEquipmentExercise] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const fetchExercisesData = async () => {
			const exercisesDbUrl = "https://exercisedb.p.rapidapi.com";
			const youtubeSearchUrl =
				"https://youtube-search-and-download.p.rapidapi.com";

			const exerciseDetailData = await fetchData(
				`${exercisesDbUrl}/exercises/exercise/${id}`,
				exercisesOption
			);
			setExerciseDetail(exerciseDetailData);

			const exerciseVideoData = await fetchData(
				`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
				youtubeOption
			);
			setExerciseVideos(exerciseVideoData.contents);

			const targetMuscleExercisesData = await fetchData(
				`${exercisesDbUrl}/exercises/target/${exerciseDetailData.target}`,
				exercisesOption
			);
			setTargetMuscleExercises(targetMuscleExercisesData);

			const equipmentExercisesData = await fetchData(
				`${exercisesDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
				exercisesOption
			);
			setEquipmentExercise(equipmentExercisesData);
		};
		fetchExercisesData();
	}, [id]);
	return (
		<Box>
			<Details exerciseDetail={exerciseDetail} />
			<ExerciseVideo
				exerciseVideos={exerciseVideos}
				name={exerciseDetail.name}
			/>
			<SimilarExercises
				targetMuscleExercises={targetMuscleExercises}
				equipmentExercise={equipmentExercise}
			/>
		</Box>
	);
};

export default ExerciseDetail;
