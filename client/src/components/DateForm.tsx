import { FC } from 'react';
import { Form, Input } from "../styles"

interface DateProps {
    date: {
        day: number,
        month: number,
        year: number
    },
    setDate: React.Dispatch<React.SetStateAction<{
        day: number;
        month: number;
        year: number;
    }>>
    finishStep: () => void;
}

const DateForm: FC<DateProps> = ({ date, setDate, finishStep }) => {

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setDate({
            ...date,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        finishStep()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h3 style={{ color: '#000' }}>¿Cuál es tu fecha de nacimiento?</h3>
            </div>
            <Input type="number" min='1' max='31' $error={!date.day} name='day' value={date.day} onChange={handleChange} />
            <Input type="number" min='1' max='12' $error={!date.month} name='month' value={date.month} onChange={handleChange} />
            <Input type="number" min='1' max='2024' $error={!date.year} name='year' value={date.year} onChange={handleChange} />
            <button
                style={{
                    position: "absolute",
                    border: "none",
                    background: "transparent",
                }}
                disabled={date.day === 0 || date.month === 0 || date.year === 0}
            ></button>
        </Form>
    )
}

export default DateForm;