import { FC, useState } from 'react';
import { Form, Input } from "../styles"

interface DateProps {
    date: {
        day: number | string,
        month: number | string,
        year: number | string
    },
    setDate: React.Dispatch<React.SetStateAction<{
        day: number | string;
        month: number | string;
        year: number | string;
    }>>
    finishStep: () => void;
}

const DateForm: FC<DateProps> = ({ date, setDate, finishStep }) => {

    const [submited, setSubmited] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setDate({
            ...date,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmited(true);
        finishStep()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h3 style={{ color: '#000' }}>¿Cuál es tu fecha de nacimiento?</h3>
            </div>
            <Input disabled={submited} type="number" placeholder="Día" max='31' $error={!date.day} name='day' value={date.day} onChange={handleChange} />
            <Input disabled={submited} type="number" placeholder="Mes" max='12' $error={!date.month} name='month' value={date.month} onChange={handleChange} />
            <Input disabled={submited} type="number" placeholder="Año" max='2024' $error={!date.year} name='year' value={date.year} onChange={handleChange} />
            <button
                style={{
                    position: "absolute",
                    border: "none",
                    background: "transparent",
                }}
                disabled={date.day === 0 || date.month === 0 || date.year === 0 || submited}
            ></button>
        </Form>
    )
}

export default DateForm;