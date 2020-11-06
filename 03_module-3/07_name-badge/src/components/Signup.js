import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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

export default function SignUp(props) {
	const classes = useStyles();
	// console.log(props);
	return (
		<Container component='main' maxWidth='md'>
			<div className={classes.paper}>
				<Typography component='h1' variant='h5'>
					Create a Name Badge
				</Typography>
				<form onSubmit={props.handleSubmit} className={classes.form}>
					<Grid container spacing={2}>
						<Grid item xs={8} sm={6}>
							<TextField
								onChange={props.handleChange}
								autoComplete='fname'
								name='firstName'
								variant='outlined'
								fullWidth
								id='firstName'
								label='First Name'
								autoFocus
							/>
						</Grid>
						<Grid item xs={8} sm={6}>
							<TextField
								onChange={props.handleChange}
								variant='outlined'
								fullWidth
								id='lastName'
								label='Last Name'
								name='lastName'
								autoComplete='lname'
							/>
						</Grid>
						<Grid item xs={8} sm={6}>
							<TextField
								onChange={props.handleChange}
								variant='outlined'
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
							/>
						</Grid>
						<Grid item xs={8} sm={6}>
							<TextField
								onChange={props.handleChange}
								variant='outlined'
								fullWidth
								id='location'
								label='Where From?'
								name='location'
							/>
						</Grid>
						<Grid item xs={8} sm={6}>
							<TextField
								onChange={props.handleChange}
								variant='outlined'
								fullWidth
								id='phone'
								label='Phone Number'
								name='phone'
								type='phone'
							/>
						</Grid>
						<Grid item xs={8} sm={6}>
							<TextField
								onChange={props.handleChange}
								variant='outlined'
								fullWidth
								id='food'
								label='Favorite Food'
								name='food'
								type='text'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								onChange={props.handleChange}
								variant='outlined'
								fullWidth
								multiline
								name='bio'
								label='Why Did you Join VSchool'
								id='bio'
							/>
						</Grid>
					</Grid>
					<Grid container direction='row' justify='center'>
						<Button
							type='submit'
							variant='contained'
							color='primary'
							className={classes.submit}>
							Get Your Badge
						</Button>
					</Grid>
				</form>
			</div>
		</Container>
	);
}
