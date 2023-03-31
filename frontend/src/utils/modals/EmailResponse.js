import React from 'react'
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
const EmailResponse = ({setOpen,open}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [response, setResponse] = useState();
    const handleClose = () => setOpen(false);
    const emailSendHandler = (e) => {
        e.preventDefault();
        setOpen(false)
    }
    console.log('====================================');
    console.log(open);
    console.log('====================================');
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Please write your message !!!
                    </Typography>
                    <form onSubmit={emailSendHandler}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <TextField
                                name="message"
                                label="Your Response"
                                variant="outlined"
                                multiline
                                fullWidth
                                rows={4}
                                required
                                value={response}
                                onChange={(e) => setResponse(e.target.value)}
                            />
                        </Typography>
                        <button type='submit' class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Button
                        </button>
                    </form>
                </Box>
            </Modal>
        </div>
    )
}

export default EmailResponse