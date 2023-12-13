import FlipClock from "x-react-flipclock"

const Countdown = ({count}) => {
    return (
        <div>
            <FlipClock
                type="countdown"
                count_to={count}
            />
        </div>
    )
}

export default Countdown
