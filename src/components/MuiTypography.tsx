import { Typography } from "@mui/material";

export const MuiTypography = () => {
    return (
        <div>
            <Typography variant="h1">h1 Heading</Typography>
            <Typography variant="h2">h2 Heading</Typography>
            <Typography variant="h3">h3 Heading</Typography>
            <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
            <Typography variant="h5">h5 Heading</Typography>
            <Typography variant="h6">h6 Heading</Typography>

            <Typography variant="subtitle1">subtitle1 Heading</Typography>
            <Typography variant="subtitle2">subtitle2 Heading</Typography>
            <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo assumenda voluptatibus tempore cum aperiam omnis vitae tenetur totam vel, animi ut suscipit quos quia mollitia alias quasi quam minus voluptatum.</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae corrupti nisi et enim eos corporis dolores non unde, quia, similique accusamus vero nobis maiores culpa architecto saepe quaerat, dolorum alias.</Typography>
        </div>
    );
};
