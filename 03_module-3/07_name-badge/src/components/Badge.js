import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
}));

export default function Badge(props) {
	const classes = useStyles();
	const { firstName, lastName, email, phone, bio, location } = props.info;
	console.log('inBadge', props.info);

	return (
		<Grid item xs={8} sm={6}>
			<Typography component='h1' variant='h1'>
				Hello
			</Typography>
			<Typography component='h3' variant='h5'>
				my name is
			</Typography>
			{firstName} {lastName} {location} {bio} {phone} {email}
		</Grid>
	);
}
