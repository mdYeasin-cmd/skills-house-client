import { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Statistics = ({ ...rest }) => {

    const [viewPortEntered, setViewPortEntered] = useState(false);

    return (
        <div data-aos="fade-up" className="flex justify-between xl:px-16 text-center py-9">
            <div className="w-1/4">
                <h3 className="text-5xl font-bold" data-number="2300">
                    <CountUp
                        {...rest}
                        start={viewPortEntered ? 0 : undefined}
                        end={2300}
                    >
                        {({ countUpRef }) => {
                            return (
                                <VisibilitySensor
                                    active={!viewPortEntered}
                                    onChange={(isVisible: boolean) => {
                                        if (isVisible) {
                                            setViewPortEntered(true);
                                        }
                                    }}
                                    delayedCall
                                >
                                    <span ref={countUpRef}></span>
                                </VisibilitySensor>
                            )
                        }}
                    </CountUp>+
                </h3>
                <p className="text-xl font-medium">Students</p>
            </div>
            <div className="w-1/4">
                <h3 className="text-5xl font-bold" data-number="80">
                    <CountUp
                        {...rest}
                        start={viewPortEntered ? 0 : undefined}
                        end={80}
                    >
                        {({ countUpRef }) => {
                            return (
                                <VisibilitySensor
                                    active={!viewPortEntered}
                                    onChange={(isVisible: boolean) => {
                                        if (isVisible) {
                                            setViewPortEntered(true);
                                        }
                                    }}
                                    delayedCall
                                >
                                    <span ref={countUpRef}></span>
                                </VisibilitySensor>
                            )
                        }}
                    </CountUp>+
                </h3>
                <p className="text-xl font-medium">Courses</p>
            </div>
            <div className="w-1/4">
                <h3 className="text-5xl font-bold" data-number="75">
                    <CountUp
                        {...rest}
                        start={viewPortEntered ? 0 : undefined}
                        end={75}
                    >
                        {({ countUpRef }) => {
                            return (
                                <VisibilitySensor
                                    active={!viewPortEntered}
                                    onChange={(isVisible: boolean) => {
                                        if (isVisible) {
                                            setViewPortEntered(true);
                                        }
                                    }}
                                    delayedCall
                                >
                                    <span ref={countUpRef}></span>
                                </VisibilitySensor>
                            )
                        }}
                    </CountUp>+
                </h3>
                <p className="text-xl font-medium">Instructors</p>
            </div>
            <div className="w-1/4">
                <h3 className="text-5xl font-bold" data-number="2000">
                    <CountUp
                        {...rest}
                        start={viewPortEntered ? 0 : undefined}
                        end={2000}
                    >
                        {({ countUpRef }) => {
                            return (
                                <VisibilitySensor
                                    active={!viewPortEntered}
                                    onChange={(isVisible: boolean) => {
                                        if (isVisible) {
                                            setViewPortEntered(true);
                                        }
                                    }}
                                    delayedCall
                                >
                                    <span ref={countUpRef}></span>
                                </VisibilitySensor>
                            )
                        }}
                    </CountUp>+
                </h3>
                <p className="text-xl font-medium">Study Materials</p>
            </div>
        </div>
    );
};

export default Statistics;