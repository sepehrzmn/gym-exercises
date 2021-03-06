import React, { useState } from "react";
import { Pagination, Box, Stack, Typography } from "@mui/material";

import ExerciseCart from "./ExerciseCart";

const Exercises = ({ exercises }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const exercisesPerPage = 9;

	const indexOfLastExercise = currentPage * exercisesPerPage;
	const indexFirstExercise = indexOfLastExercise - exercisesPerPage;
	const currentExercise = exercises.slice(
		indexFirstExercise,
		indexOfLastExercise
	);

	const paginate = (e, value) => {
		setCurrentPage(value);
		window.scrollTo({ top: 1800, behavior: "smooth" });
	};
	return (
		<Box
			id="exercises"
			sx={{
				mt: { lg: "110px" },
			}}
			mt="50px"
			p="20px"
		>
			<Typography variant="h3" mb="46px">
				Showing Results
			</Typography>
			<Stack
				direction="row"
				sx={{ gap: { lg: "110px", xs: "50px" } }}
				flexWrap="wrap"
				justifyContent="center"
			>
				{currentExercise.map((exercise, index) => (
					<ExerciseCart key={exercise.id || index} exercise={exercise} />
				))}
			</Stack>
			<Stack mt="100px" alignItems="center">
				{exercises.length > exercisesPerPage && (
					<Pagination
						color="standard"
						shape="rounded"
						defaultPage={1}
						count={Math.ceil(exercises.length / exercisesPerPage)}
						page={currentPage}
						onChange={paginate}
						size="large"
					/>
				)}
			</Stack>
		</Box>
	);
};

export default Exercises;
