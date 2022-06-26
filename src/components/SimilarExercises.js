import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

function SimilarExercises({ targetMuscleExercises, equipmentExercise }) {
	return (
		<Box
			sx={{
				mt: { lg: "100px", xs: "0" },
			}}
		>
			<Typography variant="h3" mb={5}>
				Exercises that target the some muscle group
			</Typography>
			<Stack direction="row" sx={{ p: "20px", position: "relative" }}>
				{targetMuscleExercises.length ? (
					<HorizontalScrollbar data={targetMuscleExercises} />
				) : (
					<Loader />
				)}
			</Stack>
			<Typography variant="h3" mb={5}>
				Exercises that use the some equipment
			</Typography>
			<Stack direction="row" sx={{ p: "20px", position: "relative" }}>
				{equipmentExercise.length ? (
					<HorizontalScrollbar data={equipmentExercise} />
				) : (
					<Loader />
				)}
			</Stack>
		</Box>
	);
}

export default SimilarExercises;
