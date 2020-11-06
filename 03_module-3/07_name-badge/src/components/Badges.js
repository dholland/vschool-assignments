import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Badge from './Badge';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function Badges(props) {
	const classes = useStyles();

	let allBadges = props.badges.map((badge) => {
		return <Badge info={badge.data} />;
	});

	return (
		<Container component='main' maxWidth='md'>
			<div className={classes.paper}>
				<Typography component='h1' variant='h5'>
					Download Your Badge
				</Typography>
				<Grid container spacing={2}>
					{allBadges}
				</Grid>
			</div>
		</Container>
	);
}
