import styled from 'styled-components';

const ScheduleWrapper = styled.section`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 50px 0 0;
    >div {
        flex: 1 1 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
        >b {
            margin-bottom: 20px;
            font-size: 1.2rem;
        }
        >span {
            margin-bottom: 10px;
        }
    }
`

export default function Schedule() {
    return (
        <ScheduleWrapper>
            <div>
                <b>Luni</b>
                <span>09:00</span>
                <span>21:00</span>
            </div>
            <div>
                <b>Marți</b>
                <span>09:00</span>
                <span>21:00</span>
            </div>
            <div>
                <b>Miercuri</b>
                <span>09:00</span>
                <span>21:00</span>
            </div>
            <div>
                <b>Joi</b>
                <span>09:00</span>
                <span>21:00</span>
            </div>
            <div>
                <b>Vineri</b>
                <span>09:00</span>
                <span>15:00</span>
            </div>
            <div>
                <b>Sâmbătă</b>
                <span>09:00</span>
                <span>15:00</span>
            </div>
            <div>
                <b>Duminică</b>
                <span>Închis</span>
            </div>
        </ScheduleWrapper>
    )
}
