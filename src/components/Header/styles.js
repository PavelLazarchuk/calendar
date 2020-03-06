import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	flex: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	text: {
		fontSize: 18,
		color: '#43425D',
	},
	link: {
		border: '1px solid #D7DAE2',
		borderRadius: 2,
		color: '#4D4F5C',
		padding: '5px 8px',
		textDecoration: 'none',
		'&:hover': {
			color: '#3B86FF',
		},
	},
	active: {
		color: '#3B86FF',
	},
});

export default useStyles;
