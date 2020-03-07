import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	absolute: {
		position: 'absolute',
		zIndex: 100,
	},
	root: {
		width: 200,
		backgroundColor: '#FFFFFF',
		border: '1px solid #43425D',
		borderRadius: 10,
		color: '#D6D6D6',
		padding: '8px 10px 20px 20px',
		boxShadow: '0 3px 18px #00000029',
	},
	exit: {
		color: '#D6D6D6',
		fontSize: 25,
		cursor: 'pointer',
	},
	right: {
		textAlign: 'right',
	},
	lable: {
		fontSize: 14,
		color: '#D6D6D6',
	},
	input: {
		border: 0,
		outline: 0,
		marginBottom: 15,
		width: '100%',
		fontSize: 14,
		color: '#D6D6D6',
	},
	flex: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	cancel: {
		color: '#FF5F5F',
	},
	save: {
		color: '#6A6996',
	},
});

export default useStyles;
