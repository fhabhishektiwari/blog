import * as React from 'react';
import { Button, Pagination, FormControl,InputLabel,Input,FormHelperText} from '@mui/material';

const MuiComponent = () => {
    return (
        <div>
            <Button variant='contained'>Contained</Button>
            <Pagination count={10} />
            <Pagination count={10} color="primary" />
            <Pagination count={100} color="secondary" />
            <Pagination count={10} disabled />


            <FormControl>
                <InputLabel htmlFor="my-input">Enter User Name</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>

                <InputLabel htmlFor="my-input2">Enter Password</InputLabel>
                <Input id="my-input2" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
        </div>
    );
}

export default MuiComponent;
