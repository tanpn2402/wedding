import React from "react"


class AnimatedCard extends React.Component {
	render() {
		const { position, digit, animation } = this.props;
		return(
			<div className={`flipCard ${position} ${animation}`}>
				<span>{digit}</span>
			</div>
		);
	}
}

class StaticCard extends React.Component {
	render() {
		const { position, digit } = this.props;
		return(
			<div className={position}>
				<span>{digit}</span>
			</div>
		);
	}
}

class FlipUnitContainer extends React.Component {
	
	render() {
		const { digit, shuffle, unit } = this.props;
		
		let now = digit;
		let before = digit + 1;
		
		// to prevent a negative value
		if( unit !== 'hours') {
			before = before === 0 ? 59 : before;
		} else {
			before = before === 0 ? 23 : before;
		}
		
		// add zero
		if( now < 10 ) now = `0${now}`; 
		if( before < 10 ) before = `0${before}`;
		
		// shuffle digits
		const digit1 = shuffle ? before : now;
		const digit2 = !shuffle ? before : now;
		
		// shuffle animations
		const animation1 = shuffle ? 'fold' : 'unfold';
		const animation2 = !shuffle ? 'fold' : 'unfold';
		
		return(
			<div className={'flipUnitContainer'}>
				<StaticCard 
					position={'upperCard'} 
					digit={now} 
					/>
				<StaticCard 
					position={'lowerCard'} 
					digit={before} 
					/>
				<AnimatedCard 
					position={'first'}
					digit={digit1}
					animation={animation1}
					/>
				<AnimatedCard 
					position={'second'}
					digit={digit2}
					animation={animation2}
					/>
			</div>
		);
	}
}

export default class FlipClock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            days: 0,
            daysShuffle: true,
			hours: 0,
			hoursShuffle: true,
			minutes: 0,
			minutesShuffle: true,
			seconds: 0,
			secondsShuffle: true
		};
	}
	componentDidMount() {
		this.timerID = setInterval(
			() => this.updateTime(),
			100
		);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	updateTime() {
		// get new date
		const time = new Date;
        // set time units

        var date1 = new Date();
        var date2 = new Date("2018/08/04 10:00:00");
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var diffDays = Math.floor(timeDiff / (1000 * 3600 * 24)); 

        var modTime = timeDiff % (diffDays * 1000 * 3600 * 24) 

        var diffhours = Math.floor(modTime / (1000 * 3600))

        var modMin = modTime % (1000 * 3600 * diffhours)
        var diffmins = Math.floor(modMin / (1000 * 60))

        var modSec = modMin % (1000 * 60 * diffmins)
        var diffsecs = Math.floor(modSec / (1000))


        const days = diffDays;
		const hours = diffhours;
		const minutes = diffmins;
		const seconds = diffsecs;
		
        
        // on hour chanage, update hours and shuffle state
		if( days !== this.state.days) {
			const daysShuffle = !this.state.daysShuffle;
			this.setState({
				days,
				daysShuffle
			});
		}
		// on hour chanage, update hours and shuffle state
		if( hours !== this.state.hours) {
			const hoursShuffle = !this.state.hoursShuffle;
			this.setState({
				hours,
				hoursShuffle
			});
		}
		// on minute chanage, update minutes and shuffle state
		if( minutes !== this.state.minutes) {
			const minutesShuffle = !this.state.minutesShuffle;
			this.setState({
				minutes,
				minutesShuffle
			});
		}
		// on second chanage, update seconds and shuffle state
		if( seconds !== this.state.seconds) {
			const secondsShuffle = !this.state.secondsShuffle;
			this.setState({
				seconds,
				secondsShuffle
			});
		}
	}
	render() {
		const {days, daysShuffle, hours, minutes, seconds, hoursShuffle, minutesShuffle, secondsShuffle } = this.state;
		return(
			<div className={'flipClock'}>
                <FlipUnitContainer 
					unit={'days'}
					digit={days} 
					shuffle={daysShuffle} 
					/>
				<FlipUnitContainer 
					unit={'hours'}
					digit={hours} 
					shuffle={hoursShuffle} 
					/>
				<FlipUnitContainer 
					unit={'minutes'}
					digit={minutes} 
					shuffle={minutesShuffle} 
					/>
				<FlipUnitContainer 
					unit={'seconds'}
					digit={seconds} 
					shuffle={secondsShuffle} 
					/>
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return(
			<header>
				<h1> React Flip Clock</h1>
			</header>
		);
	}
}