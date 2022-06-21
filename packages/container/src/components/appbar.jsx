import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<Typography
						variant='h6'
						component='div'
						sx={{ flexGrow: 1 }}
					>
						Pandora
					</Typography>

					<Link
						to='/plugin_A'
						sx={{
							flexGrow: 1,
							color: '#fff',
							textDecoration: 'none',
						}}
					>
						<Typography
							variant='h6'
							component='div'
							sx={{
								flexGrow: 1,
								color: '#fff',
								textDecoration: 'none',
								margin: '0 30px',
							}}
						>
							Plugin A
						</Typography>
					</Link>

					<Link
						to='/plugin_B'
						sx={{
							flexGrow: 1,
							color: '#fff',
							textDecoration: 'none',
						}}
					>
						<Typography
							variant='h6'
							component='div'
							sx={{
								flexGrow: 1,
								color: '#fff',
								textDecoration: 'none',
								margin: '0 30px',
							}}
						>
							Plugin B
						</Typography>
					</Link>

					<Button color='inherit'>Event Fired Count = 0</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}