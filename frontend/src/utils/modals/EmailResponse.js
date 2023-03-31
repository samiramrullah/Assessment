import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
const EmailResponse = () => {
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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
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
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField
                            name="message"
                            label="Your Response"
                            variant="outlined"
                            multiline
                            fullWidth
                            rows={4}
                        // value={eventDetails}
                        // onChange={(e) => setEventDetails(e.target.value)}
                        />
                    </Typography>
                    <button className="group relative inline-flex items-center px-2.5 py-1.5 rounded shadow-lg outline-none bg-pink-500 text-sm text-white font-medium transition-all duration-200 ease-out hover:text-pink-500 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none">

                        {/* span::before */}
                        <span className="absolute h-0 w-0.5 right-0 top-0 bg-pink-500 transition-all duration-500 ease-out group-hover:h-full" aria-hidden="true" />
                        <span className="absolute left-0 bottom-0 bg-pink-500 transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full" aria-hidden="true" />

                        Button 1

                        {/* span::after */}
                        <span className="absolute left-0 bottom-0 bg-pink-500 transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full" aria-hidden="true" />
                        <span className="absolute w-0 h-0.5 right-0 top-0 bg-pink-500 transition-all duration-500 ease-out group-hover:w-full" aria-hidden="true" />
                    </button>

                </Box>
            </Modal>
        </div>
    )
}

export default EmailResponse