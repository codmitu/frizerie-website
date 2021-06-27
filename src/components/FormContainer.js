import { useState } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import MomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import EventSeatIcon from '@material-ui/icons/EventSeat';

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px;
    button {
        border-radius: 0;
    }
`

export default function FormContainer() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <FormWrapper>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <FormControl>
                        <InputLabel id="demo-simple-select-helper-label">Alege Pachet</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>✄ Pachet Creative - 30RON</MenuItem>
                            <MenuItem value={20}>✄ Pachet Express - 50RON</MenuItem>
                            <MenuItem value={30}>✄ Pachet Lumberjack- 90RON</MenuItem>
                        </Select>
                    </FormControl>
                    <Grid container spacing={1}>
                        <Grid item sm={6} xs={6}>
                            <KeyboardDatePicker
                                required
                                margin="dense"
                                id="date-picker-dialog"
                                label="Alege Data"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                fullWidth
                            />
                        </Grid>
                        <Grid item sm={6} xs={6}>
                            <KeyboardTimePicker
                                required
                                margin="dense"
                                id="time-picker"
                                label="Alege Ora"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6}>
                            <TextField required id="standard-required" label="Nume" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Număr Telefon"
                                type="number"
                                fullWidth
                                required
                            />
                        </Grid>
                    </Grid>
                    <TextField
                        id="standard-multiline-static"
                        label="Informații suplimentare"
                        multiline
                        rows={2}
                        margin="dense"
                    />
                    <Button
                        variant="contained"
                        color="default"
                        endIcon={<EventSeatIcon />}
                    >
                        Rezervă Locul
                    </Button>
                </MuiPickersUtilsProvider>
            </FormWrapper>
        </>
    )
}
